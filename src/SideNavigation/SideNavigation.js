import classnames from 'classnames';
// import PropTypes from 'prop-types';
import React, { Component } from 'react';

export class SideNav extends Component {
    constructor(props) {
        super(props);
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
                {children}
            </nav>
        );
    }
}

export class SideNavList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { children, className, icons, ...rest } = this.props;

        const sideNavListClasses = classnames(
            'fd-side-nav__list',
            className
        );

        return (
            <ul
                {...rest}
                className={sideNavListClasses}>
                {children}
            </ul>
        );
    }
}

const SideNavGroup = ({title, children, className, titleProps, ...props}) => {
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
            {children}
        </div>
    );
};

const SideNavItem = ({children, glyph, hasChild, id, isSubItem, name, url, ...props}) => {
    const getClasses = () => {
        return classnames(
            {
                'fd-side-nav__link': !isSubItem,
                'fd-side-nav__sublink': isSubItem,
                'is-selected': 'item_3' === id,
                'has-child': hasChild,
                'is-expanded': hasChild
            }
        );
    };

    const renderLink = () => {
        return (
            <a
                className={getClasses()}
                href={url}>
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
                if (React.isValidElement(child) && child.type !== 'SubGroup') {
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
                } else {
                    return child;
                }
            })}
        </li>
    );
};

const SideNavSubItems = ({children, id, open, ...props}) => {
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
                        isSubItem: true
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
