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

    componentDidMount() {
        if (!this.props.disableStyles) {
            require('fundamental-styles/dist/icon.css');
            require('fundamental-styles/dist/side-nav.css');
        }
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
        const { onItemSelect, children, className, disableStyles, condensed, compact, selectedId, ...rest } = this.props;

        const sideNavClasses = classnames(
            className,
            'fd-side-nav',
            {
                'fd-side-nav--condensed': condensed
            }
        );

        return (
            <nav {...rest} className={sideNavClasses}>
                {React.Children.toArray(children).map(child => {
                    return React.cloneElement(child, {
                        onItemSelect: this.handleSelect,
                        selectedId: this.state.selectedId,
                        condensed,
                        compact
                    });
                })}
            </nav>
        );
    }
}

SideNav.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    compact: PropTypes.bool,
    condensed: PropTypes.bool,
    disableStyles: PropTypes.bool,
    selectedId: PropTypes.string,
    onItemSelect: PropTypes.func
};

SideNav.defaultProps = {
    onItemSelect: () => { }
};

SideNav.propDescriptions = {
    compact: 'Set to **true** to narrow the height of each `SideNavListItem`. This mode is suggested for devices operated by mouse and keyboard.',
    condensed: 'Set to **true** to only render icons for each `SideNavListItem`.',
    onItemSelect: 'Callback function when a navigation item is selected. Arguments passed are the event and the id of the selected item.',
    selectedId: 'The `id` of the selected `SideNavListItem`.'
};

SideNav.displayName = 'SideNav';

SideNav.List = SideNavList;
SideNav.ListItem = SideNavListItem;

export default SideNav;
