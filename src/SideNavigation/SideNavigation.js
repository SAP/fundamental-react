import classnames from 'classnames';
import PropTypes from 'prop-types';
import { BrowserRouter, Link } from 'react-router-dom';
import React, { Component } from 'react';

export const SideNav = props => {
    const { icons, children, ...rest } = props;

    const sideNavClasses = classnames(
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
};
SideNav.propTypes = {
    children: PropTypes.node,
    icons: PropTypes.bool
};

export class SideNavList extends Component {
    constructor(props) {
        super(props);

        let initialState = [];

        props.items.forEach(item => {
            if (item.hasChild) {
                let id = item.id;
                let obj = {};

                obj[id] = false;
                initialState.push(obj);
            }
        });

        this.state = {
            selectedItem: 'item_2',
            itemStates: initialState
        };
    }

    handleSelectChild = (e, id) => {
        this.setState({
            selectedItem: id
        });
    };

    handleSelect = (e, id) => {
        let iStates = Object.assign({}, this.state.itemStates);
        iStates[id] = !iStates[id];
        this.setState({ itemStates: iStates });
        this.setState({ selectedItem: id });
    };

    getLinkClasses = ({id, hasChild}) => {
        return classnames(
            'fd-side-nav__link',
            {
                'is-selected': this.state.selectedItem === id,
                'has-child': hasChild,
                'is-expanded': this.state.itemStates[id] && hasChild
            }
        );
    }

    getSubLinkClasses = (id) => {
        return classnames(
            'fd-side-nav__sublink',
            {
                'is-selected': this.state.selectedItem === id
            }
        );
    }

    render() {
        const { items, className, ...rest } = this.props;

        const sideNavListClasses = classnames(
            'fd-side-nav__list',
            className
        );

        return (
            <BrowserRouter>
                <ul
                    className={sideNavListClasses}
                    {...rest}>
                    {items.map(item => {
                        return (
                            <li className='fd-side-nav__item' key={item.id}>
                                {item.link ? (
                                    <Link
                                        className={this.getLinkClasses(item)}
                                        key={item.id}
                                        onClick={e => this.handleSelect(e, item.id)}
                                        to={{ pathname: item.link }}>
                                        {item.glyph ? (
                                            <span
                                                className={`fd-side-nav__icon sap-icon--${item.glyph} sap-icon--l`}
                                                role='presentation' />
                                        ) : null}
                                        {item.name}
                                    </Link>
                                ) : null}

                                {item.url ? (
                                    <a
                                        className={this.getLinkClasses(item)}
                                        href={item.url}
                                        key={item.id}
                                        onClick={e => this.handleSelect(e, item.id)}>
                                        {item.glyph ? (
                                            <span
                                                className={`fd-side-nav__icon sap-icon--${item.glyph} sap-icon--l`}
                                                role='presentation' />
                                        ) : null}
                                        {item.name}
                                    </a>
                                ) : null}

                                {item.hasChild ? (
                                    <ul
                                        aria-expanded={this.state.itemStates[item.id]}
                                        aria-hidden={!this.state.itemStates[item.id]}
                                        className='fd-side-nav__sublist'
                                        id={item.id}>
                                        {item.child.map(ch => {
                                            return (
                                                <React.Fragment key={ch.id}>
                                                    {ch.link ? (
                                                        <Link
                                                            className={this.getSubLinkClasses(ch.id)}
                                                            key={ch.id}
                                                            onClick={e => this.handleSelectChild(e, ch.id)}
                                                            to={{ pathname: ch.link }}>
                                                            {ch.name}
                                                        </Link>
                                                    ) : null}

                                                    {ch.url ? (
                                                        <a
                                                            className={this.getSubLinkClasses(ch.id)}
                                                            href={ch.url}
                                                            key={ch.id}
                                                            onClick={e => this.handleSelectChild(e, ch.id)}>
                                                            {ch.name}
                                                        </a>
                                                    ) : null}
                                                </React.Fragment>
                                            );
                                        })}
                                    </ul>
                                ) : null}
                            </li>
                        );
                    })}
                </ul>
            </BrowserRouter>
        );
    }
}
SideNavList.propTypes = {
    items: PropTypes.array.isRequired,
    className: PropTypes.string
};

export const SideNavGroup = props => {
    const { title, children, className, titleProps, ...rest } = props;

    const sideNavGroupClasses = classnames(
        'fd-side-nav__group',
        className
    );

    return (
        <div
            className={sideNavGroupClasses}
            {...rest}>
            <h1 {...titleProps} className='fd-side-nav__title'>{title}</h1>
            {children}
        </div>
    );
};

SideNavGroup.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    titleProps: PropTypes.object
};
