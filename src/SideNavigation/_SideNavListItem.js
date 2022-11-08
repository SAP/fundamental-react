import Button from '../Button/Button';
import classnamesBind from 'classnames/bind';
import Icon from '../Icon/Icon';
import PropTypes from 'prop-types';
import React from 'react';
import shortid from '../utils/shortId';
import SideNavList from './_SideNavList';
import { textContentStyle } from './SideNav';
import withStyles from '../utils/withStyles';
import iconStyles from 'fundamental-styles/dist/icon.css';
import sideNavStyles from 'fundamental-styles/dist/side-nav.css';

const classnames = classnamesBind.bind({
    ...iconStyles,
    ...sideNavStyles
});
const isUsingCssModules = sideNavStyles && Object.keys(sideNavStyles).length > 0;

class SideNavListItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            expanded: this.props.expanded ? this.props.expanded : false
        };
    }

    getDerrivedStateFromProps(updatedProps, previousState) {
        if (updatedProps.expanded !== previousState.expanded) {
            return { expanded: updatedProps.expanded };
        }
    }

    handleExpand = () => {
        this.setState({
            expanded: !this.state.expanded
        });
    };

    render() {
        const { children, condensed, glyph, id, isSubItem, name, onClick, onItemSelect, selected, selectedId, url, expandSubmenuLabel, cssNamespace, title, ...props } = this.props;
        const nestedListId = shortid.generate();
        const getClasses = () => {
            return classnames(
                `${cssNamespace}-nested-list__link`,
                {
                    'is-selected': selected,
                    'is-expanded': this.state.expanded
                }
            );
        };

        const hasChild = React.Children.toArray(children).some(child => {
            return child.type === SideNavList;
        });

        const renderLink = () => {
            const link = (
                <a
                    className={getClasses()}
                    href={url}
                    onClick={!hasChild ? (e) => {
                        !hasChild && onClick(e);
                        if (onItemSelect) onItemSelect(e, id, hasChild);
                    } : null}>
                    {glyph ? (
                        <Icon
                            ariaHidden
                            className={classnames(`${cssNamespace}-nested-list__icon`)}
                            glyph={glyph} />
                    ) : null}
                    <span className={classnames(`${cssNamespace}-nested-list__title`)}>
                        <span style={textContentStyle}>{name}</span>
                    </span>
                </a>
            );

            if (hasChild) {
                const divClasses = classnames(
                    `${cssNamespace}-nested-list__content`,
                    'has-child',
                    {
                        'is-selected': selected
                    }
                );

                return (
                    <div
                        className={divClasses}
                        onClick={(e) => { /* eslint-disable jsx-a11y/no-noninteractive-tabindex */
                            onClick(e);
                            if (onItemSelect) onItemSelect(e, id, hasChild);
                        }}>
                        {link}
                        <Button
                            aria-controls={nestedListId}
                            aria-expanded={this.state.expanded}
                            aria-haspopup='true'
                            aria-label={expandSubmenuLabel}
                            className={classnames(`${cssNamespace}-nested-list__button`, { [`${cssNamespace}-button`]: isUsingCssModules })}
                            onClick={() => {
                                this.handleExpand();
                            }}>
                            <Icon ariaHidden glyph={this.state.expanded ? 'navigation-down-arrow' : 'navigation-right-arrow'} />
                        </Button>
                    </div>
                );
            } else {
                return link;
            }
        };

        return (
            <li {...props}
                className={classnames(`${cssNamespace}-nested-list__item`)}
                key={id}
                title={title || (typeof name === 'object' ? '' : name)}>
                {url && renderLink()}
                {React.Children.toArray(children).map(child => {
                    if (child.type !== SideNavList) {
                        return React.cloneElement(child, {
                            children: (<React.Fragment>
                                {glyph ? (
                                    <span
                                        aria-hidden
                                        className={classnames(`${cssNamespace}-nested-list__icon`, `sap-icon--${glyph}`)} />
                                ) : null}
                                <span className={classnames(`${cssNamespace}-nested-list__title`)}>{child.props.children}</span>
                            </React.Fragment>),
                            className: getClasses(),
                            onClick: (e) => {
                                onClick(e);
                                if (onItemSelect) onItemSelect(e, id, hasChild);
                                if (hasChild) {
                                    this.handleExpand();
                                }
                            }
                        });
                    } else if (child.type === SideNavList) {
                        return React.cloneElement(child, {
                            hasParent: true,
                            id: nestedListId,
                            onItemSelect: onItemSelect,
                            open: this.state.expanded,
                            selectedId: selectedId
                        });
                    } else {
                        return child;
                    }
                })}
            </li>
        );
    }
}

SideNavListItem.propTypes = {
    /** Node(s) to render within the component */
    children: PropTypes.node,
    /** Internal use only */
    condensed: PropTypes.bool,
    /** Set to **true** to have this item initially render as expanded and its children items shown */
    expanded: PropTypes.bool,
    /** Localized text for the screen reader label for the button that expands submenus. */
    expandSubmenuLabel: PropTypes.string,
    /** The icon to include. See the icon page for the list of icons */
    glyph: PropTypes.string,
    /** Value for the `id` attribute on the element */
    id: PropTypes.string,
    /** Internal use only */
    isSubItem: PropTypes.bool,
    /** Localized text or React element for the item (when `url` is provided) */
    name: PropTypes.oneOf[PropTypes.string, PropTypes.node],
    /** Internal use only */
    selected: PropTypes.bool,
    /** Internal use only */
    selectedId: PropTypes.string,
    /** Value to display on hover. Defaults to `name`.  */
    title: PropTypes.string,
    /** Enables use of `<a>` element. Value to be applied to the anchor\'s `href` attribute */
    url: PropTypes.string,
    /**
     * Callback function; triggered when SideNavListItem is clicked.
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent. See https://reactjs.org/docs/events.html.
     * @returns {void}
    */
    onClick: PropTypes.func,
    /** Internal use only */
    onItemSelect: PropTypes.func
};

SideNavListItem.defaultProps = {
    condensed: false,
    onClick: () => {}
};

SideNavListItem.displayName = 'SideNav.ListItem';

export default withStyles(SideNavListItem);
