import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import SideNavList from './_SideNavList';

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
        const { children, glyph, id, isSubItem, name, onClick, onItemSelect, selected, selectedId, url, ...props } = this.props;
        const getClasses = () => {
            return classnames(
                {
                    'fd-side-nav__link': !isSubItem,
                    'fd-side-nav__sublink': isSubItem,
                    'is-selected': selected,
                    'has-child': hasChild,
                    'is-expanded': this.state.expanded
                }
            );
        };

        const hasChild = React.Children.toArray(children).some(child => {
            return child.type === SideNavList;
        });

        const renderLink = () => {
            return (
                <a
                    className={getClasses()}
                    href={url}
                    onClick={(e) => {
                        onClick(e);
                        !hasChild && onItemSelect(e, id, hasChild);
                        if (hasChild) {
                            this.handleExpand();
                        }
                    }}>
                    {glyph ? (
                        <span
                            className={`fd-side-nav__icon sap-icon--${glyph} sap-icon--l`}
                            role='presentation' />
                    ) : null}
                    {name}
                </a>
            );
        };

        return (
            <li {...props}
                className='fd-side-nav__item'
                key={id}>
                {url && renderLink()}
                {React.Children.toArray(children).map(child => {
                    if (child.type !== SideNavList) {
                        return React.cloneElement(child, {
                            children: (<React.Fragment>
                                {glyph ? (
                                    <span
                                        className={`fd-side-nav__icon sap-icon--${glyph} sap-icon--l`}
                                        role='presentation' />
                                ) : null}
                                {child.props.children}
                            </React.Fragment>),
                            className: getClasses(),
                            onClick: (e) => {
                                onClick(e);
                                onItemSelect(e, id, hasChild);
                                if (hasChild) {
                                    this.handleExpand();
                                }
                            }
                        });
                    } else if (child.type === SideNavList) {
                        return React.cloneElement(child, {
                            hasParent: true,
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
    children: PropTypes.node,
    expanded: PropTypes.bool,
    glyph: PropTypes.string,
    id: PropTypes.string,
    isSubItem: PropTypes.bool,
    name: PropTypes.string,
    selected: PropTypes.bool,
    selectedId: PropTypes.string,
    url: PropTypes.string,
    onClick: PropTypes.func,
    onItemSelect: PropTypes.func
};

SideNavListItem.propDescriptions = {
    expanded: 'Set to **true** to have this item initially render as expanded and its children items shown.',
    isSubItem: '_INTERNAL USE ONLY._',
    name: 'Localized text for the item (when `url` is provided).',
    onItemSelect: '_INTERNAL USE ONLY._',
    selected: '_INTERNAL USE ONLY._',
    selectedId: '_INTERNAL USE ONLY._',
    url: 'Enables use of `<a>` element. Value to be applied to the anchor\'s `href` attribute.'
};

SideNavListItem.defaultProps = {
    onClick: () => {}
};

SideNavListItem.displayName = 'SideNav.ListItem';

export default SideNavListItem;
