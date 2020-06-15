import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import shortid from '../utils/shortId';
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
        const nestedListId = shortid.generate();
        const getClasses = () => {
            return classnames(
                'fd-nested-list__link',
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
                        onItemSelect(e, id, hasChild);
                    } : null}>
                    {glyph ? (
                        <span
                            className={`fd-nested-list__icon sap-icon--${glyph}`}
                            role='presentation' />
                    ) : null}
                    <span className='fd-nested-list__title'>
                        {name}
                    </span>
                </a>
            );

            if (hasChild) {
                const divClasses = classnames(
                    'fd-nested-list__content',
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
                            onItemSelect(e, id, hasChild);
                            this.handleExpand();
                        }}
                        tabIndex='0'>
                        {link}
                        <a
                            aria-controls={nestedListId}
                            aria-expanded={this.state.expanded}
                            aria-haspopup='true'
                            className='fd-nested-list__expand-icon'
                            href='#'
                            tabIndex='-1' />
                    </div>
                );
            } else {
                return link;
            }
        };

        return (
            <li {...props}
                className='fd-nested-list__item'
                key={id}>
                {url && renderLink()}
                {React.Children.toArray(children).map(child => {
                    if (child.type !== SideNavList) {
                        return React.cloneElement(child, {
                            children: (<React.Fragment>
                                {glyph ? (
                                    <span
                                        className={`fd-nested-list__icon sap-icon--${glyph}`}
                                        role='presentation' />
                                ) : null}
                                <span className='fd-nested-list__title'>{child.props.children}</span>
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
    /** Set to **true** to have this item initially render as expanded and its children items shown */
    expanded: PropTypes.bool,
    /** The icon to include. See the icon page for the list of icons */
    glyph: PropTypes.string,
    /** Value for the `id` attribute on the element */
    id: PropTypes.string,
    /** Internal use only */
    isSubItem: PropTypes.bool,
    /** Localized text for the item (when `url` is provided) */
    name: PropTypes.string,
    /** Internal use only */
    selected: PropTypes.bool,
    /** Internal use only */
    selectedId: PropTypes.string,
    /** Enables use of `<a>` element. Value to be applied to the anchor\'s `href` attribute */
    url: PropTypes.string,
    /** Callback function when user clicks on the component*/
    onClick: PropTypes.func,
    /** Internal use only */
    onItemSelect: PropTypes.func
};

SideNavListItem.defaultProps = {
    onClick: () => {}
};

SideNavListItem.displayName = 'SideNav.ListItem';

export default SideNavListItem;
