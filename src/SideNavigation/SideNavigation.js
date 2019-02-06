import classnames from 'classnames';
// import PropTypes from 'prop-types';
import React, { Component } from 'react';

export class SideNav extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedId: props.selectedItem,
            expandedIds: []
        };
    }

    handleSelect = (e, id, hasChild) => {
        let expandedIds = this.state.expandedIds;
        if (hasChild && expandedIds.includes(id)) {
            expandedIds = expandedIds.filter(eId => eId !== id)
        } else if (hasChild) {
            expandedIds.push(id);
        }

        this.setState({
            expandedIds: expandedIds,
            selectedId: id
        });
    }

    render() {
        const { children, className, icons, ...rest } = this.props;

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



const SideNavGroup = ({title, children, className, expandedIds, onItemSelect, selectedId, titleProps, ...props}) => {
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

const SideNavList = ({children, className, expandedIds, icons, onItemSelect, selectedId, ...rest}) => {
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

const SideNavItem = ({children, expandedIds = [], glyph, id, isSubItem, name, onClick, onItemSelect, selected, selectedId, url, ...props}) => {
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
        if (React.isValidElement(child) && child.type === SideNav.SubItems) {
            hasChild = true;
        }
    })

    return (
        <li {...props}
            className='fd-side-nav__item'
            key={id}>
            {url && renderLink()}
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child) && child.type !== SideNav.SubItems) {
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
                } else if (React.isValidElement(child) && child.type === SideNav.SubItems) {
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

SideNavItem.defaultProps = {
    onClick: () => {}
};

const SideNavSubItems = ({children, id, onItemSelect, open, selectedId, ...props}) => {
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

SideNav.Group = SideNavGroup;
SideNav.List = SideNavList;
SideNav.Item = SideNavItem;
SideNav.SubItems = SideNavSubItems;
