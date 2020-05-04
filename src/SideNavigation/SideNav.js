import classnames from 'classnames';
import PropTypes from 'prop-types';
import SideNavList from './_SideNavList';
import SideNavListItem from './_SideNavListItem';
import React, { Component } from 'react';

/** The left navigation can always display or expand/collapse using the menu icon within the global
navigation. */

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
    /** Node(s) to render within the component */
    children: PropTypes.node,
    /** CSS class(es) to add to the element */
    className: PropTypes.string,
    /** Set to **true** to narrow the height of each `SideNavListItem`.
     * This mode is suggested for devices operated by mouse and keyboard */
    compact: PropTypes.bool,
    /** Set to **true** to only render icons for each `SideNavListItem` */
    condensed: PropTypes.bool,
    /** Internal use only */
    disableStyles: PropTypes.bool,
    /** The `id` of the selected `SideNavListItem` */
    selectedId: PropTypes.string,
    /** Callback function when a navigation item is selected. Arguments passed are the event and the id of the selected item. */
    onItemSelect: PropTypes.func
};

SideNav.defaultProps = {
    onItemSelect: () => { }
};

SideNav.displayName = 'SideNav';

SideNav.List = SideNavList;
SideNav.ListItem = SideNavListItem;

export default SideNav;
