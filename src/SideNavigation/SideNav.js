import classnamesBind from 'classnames/bind';
import PropTypes from 'prop-types';
import SideNavList from './_SideNavList';
import SideNavListItem from './_SideNavListItem';
import withStyles from '../utils/withStyles';
import React, { Component } from 'react';
import buttonStyles from 'fundamental-styles/dist/button.css';
import sideNavStyles from 'fundamental-styles/dist/side-nav.css';

const classnames = classnamesBind.bind({
    ...buttonStyles,
    ...sideNavStyles
});

export const textContentStyle = {
    overflow: 'hidden',
    textOverflow: 'ellipsis'
};

/** The left navigation can always display or expand/collapse using the menu icon within the global
navigation. */

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
        });
        this.props.onItemSelect(e, id);
    }

    render() {
        const { onItemSelect, children, className, condensed, compact, cssNamespace, selectedId, skipLink, ...rest } = this.props;

        const sideNavClasses = classnames(
            className,
            `${cssNamespace}-side-nav`,
            {
                [`${cssNamespace}-side-nav--condensed`]: condensed
            }
        );

        return (
            <div {...rest} className={sideNavClasses}>
                <a className={classnames(`${cssNamespace}-side-nav__skip-link`)} href={skipLink.href}>{skipLink.label}</a>
                {React.Children.toArray(children).map(child => {
                    return React.cloneElement(child, {
                        onItemSelect: this.handleSelect,
                        selectedId: this.state.selectedId,
                        condensed,
                        compact
                    });
                })}
            </div>
        );
    }
}

SideNav.propTypes = {
    /** Location of page content and localized label to provide as a URL for a skip link for keyboard users */
    skipLink: PropTypes.shape({
        href: PropTypes.string,
        label: PropTypes.string
    }).isRequired,
    /** Node(s) to render within the component */
    children: PropTypes.node,
    /** CSS class(es) to add to the element */
    className: PropTypes.string,
    /** Set to **true** to narrow the height of each `SideNavListItem`.
     * This mode is suggested for devices operated by mouse and keyboard */
    compact: PropTypes.bool,
    /** Set to **true** to only render icons for each `SideNavListItem` */
    condensed: PropTypes.bool,
    /** The `id` of the selected `SideNavListItem` */
    selectedId: PropTypes.string,
    /**
     * Callback function; triggered when a navigation item is selected.
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent. See https://reactjs.org/docs/events.html.
     * @param {string} id - id of selected item.
     * @returns {void}
     * */
    onItemSelect: PropTypes.func
};

SideNav.defaultProps = {
    onItemSelect: () => { }
};

SideNav.displayName = 'SideNav';

SideNav.List = SideNavList;
SideNav.ListItem = SideNavListItem;

export default withStyles(SideNav);
