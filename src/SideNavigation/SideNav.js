import classnames from 'classnames';
import PropTypes from 'prop-types';
import SideNavList from './_SideNavList';
import SideNavListItem from './_SideNavListItem';
import React, { Component } from 'react';

class SideNav extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedId: props.selectedId
        };
    }

    getDerrivedStateFromProps(updatedProps, previousState) {
        if (updatedProps.selectedId !== previousState.selectedId) {
            return { selectedId: updatedProps.selectedId };
        }
    }

    handleSelect = (e, id) => {
        this.setState({
            selectedId: id
        }, () => {
            this.props.onItemSelect(e, id);
        });
    }

    render() {
        const { onItemSelect, children, className, icons, selectedId, ...rest } = this.props;

        const sideNavClasses = classnames(
            className,
            'fd-side-nav',
            {
                'fd-side-nav--icons': icons
            }
        );

        return (
            <nav {...rest} className={sideNavClasses}>
                {React.Children.map(children, (child) => {
                    if (React.isValidElement(child)) {
                        return React.cloneElement(child, {
                            onItemSelect: this.handleSelect,
                            selectedId: this.state.selectedId
                        });
                    } else {
                        return child;
                    }
                })}
            </nav>
        );
    }
}

SideNav.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    icons: PropTypes.bool,
    selectedId: PropTypes.string,
    onItemSelect: PropTypes.func
};

SideNav.defaultProps = {
    onItemSelect: () => { }
};

SideNav.propDescriptions = {
    icons: 'Set to **true** to only render icons for each `SideNavListItem`.',
    onItemSelect: 'Prop callback to notify of internal state changes',
    selectedId: 'The `id` of the selected `SideNavListItem`.'
};

SideNav.displayName = 'SideNav';

SideNav.List = SideNavList;
SideNav.ListItem = SideNavListItem;

export default SideNav;
