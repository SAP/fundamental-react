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
    children: PropTypes.element,
    className: PropTypes.string,
    icons: PropTypes.bool,
    selectedId: PropTypes.string
};

SideNav.propDescriptions = {
    icons: 'Set to **true** enables side navigation collapsed with icons.',
    selectedId: 'The id of the selected `SideNavListItem`.'
};

export const SideNavList = ({children, className, hasParent, onItemSelect, open, selectedId, title, titleProps, ...rest}) => {
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
};

SideNavList.propTypes = {
    children: PropTypes.element,
    className: PropTypes.string,
    hasParent: PropTypes.bool,
    open: PropTypes.bool,
    selectedId: PropTypes.string,
    title: PropTypes.string,
    titleProps: PropTypes.object,
    onItemSelect: PropTypes.func
};

SideNavList.propDescriptions = {
    hasParent: 'Automatically set to **true** when item has a parent `SideNavListItem`',
    open: 'Set to **true** to mark `SideNavSubList` as open.',
    selectedId: 'The id of the selected `SideNavListItem`.',
    onItemSelect: 'Callback function when user selects an item .'
};

export class SideNavListItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            expanded: this.props.expanded ? this.props.expanded : false
        };
    }

    handleExpand = () => {
        this.setState({
            expanded: !this.state.expanded
        });
    };

    render() {
        const {children, glyph, id, isSubItem, name, onClick, onItemSelect, selected, selectedId, url, ...props} = this.props;
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

        const renderLink = () => {
            return (
                <a
                    className={getClasses()}
                    href={url}
                    onClick={(e) => {
                        onClick(e);
                        onItemSelect(e, id, hasChild);
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

        let hasChild = false;
        React.Children.forEach(children, (child) => {
            if (React.isValidElement(child) && child.type === SideNavList) {
                hasChild = true;
            }
        });

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
    isSubItem: 'Set to **true** to display as a subitem.',
    name: 'Link text to be set in conjunction with the `url` prop.',
    onItemSelect: 'Callback function when user selects an item .',
    selected: 'Set to **true** to display as selected.',
    selectedId: 'The id of the selected `SideNavListItem`.',
    url: 'Creates an internal anchor when a child anchor is not provided.'
};

SideNavListItem.defaultProps = {
    onClick: () => {}
};
