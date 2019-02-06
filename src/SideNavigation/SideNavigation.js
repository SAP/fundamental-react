import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

export class SideNav extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedId: props.selectedId,
            expandedIds: []
        };
    }

    handleSelect = (e, id, hasChild) => {
        let expandedIds = this.state.expandedIds;
        if (hasChild && expandedIds.includes(id)) {
            expandedIds = expandedIds.filter(eId => eId !== id);
        } else if (hasChild) {
            expandedIds.push(id);
        }

        this.setState({
            expandedIds: expandedIds,
            selectedId: id
        });
    }

    render() {
        const { children, className, icons, selectedId, ...rest } = this.props;

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
                            expandedIds: this.state.expandedIds,
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
    selectedId: PropTypes.string
};

SideNav.propDescriptions = {
    icons: 'Set to **true** enables side navigation collapsed with icons.',
    selectedId: 'The id of the selected `SideNavItem`.'
};

export const SideNavGroup = ({children, className, expandedIds, onItemSelect, selectedId, title, titleProps, ...props}) => {
    const sideNavGroupClasses = classnames(
        'fd-side-nav__group',
        className
    );

    return (
        <div
            {...props}
            className={sideNavGroupClasses}>
            <h1 {...titleProps} className='fd-side-nav__title'>
                {title}
            </h1>
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child, {
                        expandedIds: expandedIds,
                        onItemSelect: onItemSelect,
                        selectedId: selectedId
                    });
                } else {
                    return child;
                }
            })}
        </div>
    );
};

SideNavGroup.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    expandedIds: PropTypes.array,
    selectedId: PropTypes.string,
    title: PropTypes.string,
    titleProps: PropTypes.object,
    onItemSelect: PropTypes.func
};

SideNavGroup.propDescriptions = {
    expandedIds: 'An array of strings for expanded `SideNavItems`\'s.',
    onItemSelect: 'Callback function when user selects an item .',
    selectedId: 'The id of the selected `SideNavItem`.'
};

export const SideNavList = ({children, className, expandedIds, onItemSelect, selectedId, ...rest}) => {
    const sideNavListClasses = classnames(
        'fd-side-nav__list',
        className
    );

    return (
        <ul
            {...rest}
            className={sideNavListClasses}>
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child, {
                        expandedIds: expandedIds,
                        onItemSelect: onItemSelect,
                        selected: selectedId === child.props.id,
                        selectedId: selectedId
                    });
                } else {
                    return child;
                }
            })}
        </ul>
    );
};

SideNavList.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    expandedIds: PropTypes.array,
    selectedId: PropTypes.string,
    onItemSelect: PropTypes.func
};

SideNavList.propDescriptions = {
    expandedIds: 'An array of strings for expanded `SideNavItems`\'s.',
    selectedId: 'The id of the selected `SideNavItem`.',
    onItemSelect: 'Callback function when user selects an item .'
};

export const SideNavItem = ({children, expandedIds = [], glyph, id, isSubItem, name, onClick, onItemSelect, selected, selectedId, url, ...props}) => {
    const getClasses = () => {
        return classnames(
            {
                'fd-side-nav__link': !isSubItem,
                'fd-side-nav__sublink': isSubItem,
                'is-selected': selected,
                'has-child': hasChild,
                'is-expanded': expandedIds.includes(id)
            }
        );
    };

    const renderLink = () => {
        return (
            <a
                className={getClasses()}
                href={url}
                onClick={(e) => {
                    onClick(e);
                    onItemSelect(e, id, hasChild);
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

    let hasChild = false;
    React.Children.forEach(children, (child) => {
        if (React.isValidElement(child) && child.type === SideNavSubItems) {
            hasChild = true;
        }
    });

    return (
        <li {...props}
            className='fd-side-nav__item'
            key={id}>
            {url && renderLink()}
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child) && child.type !== SideNavSubItems) {
                    return React.cloneElement(child, {
                        children: (<React.Fragment>
                            {glyph ? (
                                <span
                                    className={`fd-side-nav__icon sap-icon--${glyph} sap-icon--l`}
                                    role='presentation' />
                            ) : null}
                            {child.props.children}
                        </React.Fragment>),
                        className: getClasses()
                    });
                } else if (React.isValidElement(child) && child.type === SideNavSubItems) {
                    return React.cloneElement(child, {
                        onItemSelect: onItemSelect,
                        open: expandedIds.includes(id),
                        selectedId: selectedId
                    });
                } else {
                    return child;
                }
            })}
        </li>
    );
};

SideNavItem.propTypes = {
    children: PropTypes.node,
    expandedIds: PropTypes.array,
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

SideNavItem.propDescriptions = {
    expandedIds: 'An array of strings for expanded `SideNavItems`\'s.',
    isSubItem: 'Set to **true** to display as a subitem.',
    name: 'Link text to be set in conjunction with the `url` prop.',
    onItemSelect: 'Callback function when user selects an item .',
    selected: 'Set to **true** to display as selected.',
    selectedId: 'The id of the selected `SideNavItem`.',
    url: 'Creates an internal anchor when a child anchor is not provided.'
};

SideNavItem.defaultProps = {
    onClick: () => {}
};

export const SideNavSubItems = ({children, id, onItemSelect, open, selectedId, ...props}) => {
    return (
        <ul
            {...props}
            aria-expanded={open}
            aria-hidden={!open}
            className='fd-side-nav__sublist'
            key={id}>
            {
                React.Children.map(children, (child) => {
                    return React.cloneElement(child, {
                        isSubItem: true,
                        onItemSelect: onItemSelect,
                        selected: selectedId === child.props.id
                    });
                })
            }
        </ul>
    );
};

SideNavSubItems.propTypes = {
    children: PropTypes.node,
    id: PropTypes.string,
    open: PropTypes.bool,
    selectedId: PropTypes.string,
    onItemSelect: PropTypes.func
};

SideNavSubItems.propDescriptions = {
    onItemSelect: 'Callback function when user selects an item .',
    open: 'Set to **true** to mark `SideNavSubItems` as open.',
    selectedId: 'The id of the selected `SideNavItem`.'
};
