import classnamesBind from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';
import { textContentStyle } from './SideNav';
import withStyles from '../utils/withStyles';
import styles from 'fundamental-styles/dist/side-nav.css';

const classnames = classnamesBind.bind(styles);

class SideNavList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { children, className, hasParent, onItemSelect, open, selectedId, title, titleProps, isUtility, level, condensed, compact, groupLabel, ...rest } = this.props;

        const sideNavListClasses = classnames(
            {
                'fd-nested-list--text-only': !condensed,
                'fd-nested-list--compact': compact
            },
            'fd-nested-list',
            `level-${level}`,
            className
        );

        const sideNavContainerClass = classnames(
            {
                'fd-side-nav__main-navigation': !isUtility,
                'fd-side-nav__utility': isUtility
            }
        );

        const sideNavList = (
            <ul
                {...rest}
                aria-expanded={hasParent && open}
                aria-hidden={hasParent && !open}
                aria-label={groupLabel}
                className={sideNavListClasses}>
                { title && <li
                    {...titleProps}
                    className={classnames('fd-nested-list__group-header')}
                    title={typeof title === 'object' ? '' : title}>
                    <span style={textContentStyle}>{title}</span>
                </li>}
                {React.Children.toArray(children).map(child => {
                    return React.cloneElement(child, {
                        condensed,
                        isSubItem: hasParent,
                        onItemSelect: onItemSelect,
                        selected: selectedId === child.props.id,
                        selectedId: selectedId
                    });
                })}
            </ul>
        );

        const sideNav = hasParent ?
            sideNavList
            :
            (
                <nav className={sideNavContainerClass}>
                    {sideNavList}
                </nav>
            );

        return sideNav;
    }
}

SideNavList.propTypes = {
    /** Node(s) to render within the component */
    children: PropTypes.node,
    /** CSS class(es) to add to the element */
    className: PropTypes.string,
    /** Internal use only */
    compact: PropTypes.bool,
    /** Internal use only */
    condensed: PropTypes.bool,
    /** Localized label for menu group if title not included */
    groupLabel: PropTypes.string,
    /** Internal use only */
    hasParent: PropTypes.bool,
    /** Display a separate utility menu separated from the main menu by a horizontal line */
    isUtility: PropTypes.bool,
    /** Depth of menu. Default prop is 1 and does not need to be passed to the top level menu.
     * Increase by 1 for every submenu and provide as a prop */
    level: PropTypes.number,
    /** Internal use only */
    open: PropTypes.bool,
    /** Internal use only */
    selectedId: PropTypes.string,
    /** Localized text for the heading */
    title: PropTypes.string,
    /**Additional props to be spread to the title\'s heading element */
    titleProps: PropTypes.object,
    /** Internal use only */
    onItemSelect: PropTypes.func
};

SideNavList.defaultProps = {
    level: 1
};

SideNavList.displayName = 'SideNav.List';

export default withStyles(SideNavList);
