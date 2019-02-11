import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

export class SideNav extends Component {
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
    selectedId: 'The id of the selected `SideNavListItem`.'
};

SideNav.displayName = 'SideNav';

export class SideNavList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { children, className, hasParent, onItemSelect, open, selectedId, title, titleProps, ...rest } = this.props;
        const sideNavListClasses = classnames({
            'fd-side-nav__list': !hasParent,
            'fd-side-nav__sublist': hasParent
        },
        className
        );

        const sideNavHeaderlasses = classnames(
            'fd-side-nav__group',
            className
        );

        const sideNavList = (
            <ul
                {...rest}
                aria-expanded={hasParent && open}
                aria-hidden={hasParent && !open}
                className={sideNavListClasses}>
                {React.Children.map(children, (child) => {
                    if (React.isValidElement(child)) {
                        return React.cloneElement(child, {
                            isSubItem: hasParent,
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

        if (title && !hasParent) {
            return (
                <div
                    className={sideNavHeaderlasses}>
                    <h1 {...titleProps} className='fd-side-nav__title'>
                        {title}
                    </h1>
                    {sideNavList}
                </div>
            );
        }

        return sideNavList;
    }
}

SideNavList.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    hasParent: PropTypes.bool,
    open: PropTypes.bool,
    selectedId: PropTypes.string,
    title: PropTypes.string,
    titleProps: PropTypes.object,
    onItemSelect: PropTypes.func
};

SideNavList.propDescriptions = {
    hasParent: 'Internal use only',
    open: 'Internal use only',
    selectedId: 'Internal use only',
    onItemSelect: 'Internal use only'
};

SideNavList.displayName = 'SideNavList';

export class SideNavListItem extends React.Component {
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

        let hasChild = false;
        React.Children.forEach(children, (child) => {
            if (React.isValidElement(child) && child.type === SideNavList) {
                hasChild = true;
            }
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
                {React.Children.map(children, (child) => {
                    if (React.isValidElement(child) && child.type !== SideNavList) {
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
                    } else if (React.isValidElement(child) && child.type === SideNavList) {
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
    isSubItem: 'Internal use only',
    name: 'Link text to be set in conjunction with the `url` prop.',
    onItemSelect: 'Internal use only',
    selected: 'Set to **true** to display as selected.',
    selectedId: 'Internal use only',
    url: 'Creates an internal anchor when a child anchor is not provided.'
};
SideNavListItem.displayName = 'SideNavListItem';

SideNavListItem.defaultProps = {
    onClick: () => {}
};
