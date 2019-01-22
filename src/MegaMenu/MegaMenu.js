import classnames from 'classnames';
import PropTypes from 'prop-types';
import { BrowserRouter, Link } from 'react-router-dom';
import React, { Component } from 'react';

export const MegaMenu = ({ children, className, ...props }) => {
    const megaMenuClasses = classnames(
        'fd-mega-menu',
        className
    );

    return (
        <nav
            {...props}
            className={megaMenuClasses}>
            {children}
        </nav>
    );
};
MegaMenu.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};

export class MegaMenuList extends Component {
    constructor(props) {
        super(props);

        let initialState = [];

        props.items.forEach(item => {
            if (item.hasChild) {
                let id = item.id;
                let obj = {};

                obj[id] = false;
                initialState = obj;
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
        const { itemStates } = this.state;
        let iStates = itemStates;
        iStates[id] = !iStates[id];
        Object.keys(iStates).map((key) => {
            if (key === id) {
                iStates[key] = true;
            } else {
                iStates[key] = false;
            }
        });
        this.setState({ itemStates: iStates });
        this.setState({ selectedItem: id });
    };

    getLinkClasses = ({id, hasChild}) => {
        return classnames(
            'fd-mega-menu__link',
            {
                'is-selected': this.state.selectedItem === id,
                'has-child': hasChild,
                'is-expanded': this.state.itemStates[id] && hasChild
            }
        );
    }

    getSubLinkClasses = ({id}) => {
        return classnames(
            'fd-mega-menu__sublink',
            {
                'is-selected': this.state.selectedItem === id
            }
        );
    }

    render() {
        const { items, className } = this.props;

        const megaMenuListClasses = classnames(
            'fd-mega-menu__list',
            className
        );

        return (
            <BrowserRouter>
                <ul className={megaMenuListClasses}>
                    {items.map(item => {
                        return (
                            <li className='fd-mega-menu__item' key={item.id}>
                                {item.link ? (
                                    <Link
                                        className={this.getLinkClasses(item)}
                                        key={item.id}
                                        onClick={e => this.handleSelect(e, item.id)}
                                        to={{ pathname: item.link }}>
                                        {item.name}
                                    </Link>
                                ) : null}

                                {item.url ? (
                                    <a
                                        className={this.getLinkClasses(item)}
                                        href={item.url}
                                        key={item.id}
                                        onClick={e => this.handleSelect(e, item.id)}>
                                        {item.name}
                                    </a>
                                ) : null}

                                {item.hasChild ? (
                                    <ul
                                        aria-expanded={this.state.itemStates[item.id]}
                                        aria-hidden={!this.state.itemStates[item.id]}
                                        className='fd-mega-menu__sublist'
                                        id={item.id}>
                                        {item.child.map(ch => {
                                            return (
                                                <li className='fd-mega-menu__subitem' key={ch.id}>
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
                                                </li>
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
MegaMenuList.propTypes = {
    items: PropTypes.array.isRequired,
    className: PropTypes.string
};

export const MegaMenuGroup = ({ title, children, className }) => {
    const megaMenuGroupClasses = classnames(
        'fd-mega-menu__group',
        className
    );

    return (
        <div className={megaMenuGroupClasses}>
            <h1 className='fd-mega-menu__title'>{title}</h1>
            {children}
        </div>
    );
};

MegaMenuGroup.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    title: PropTypes.string
};
