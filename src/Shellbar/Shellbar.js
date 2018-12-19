import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Popover, Menu, MenuList, MenuItem, Identifier, Icon } from '../';

export class Shellbar extends Component {
    static propTypes = {
        copilot: PropTypes.bool
    };

    static defaultProps = {
        actions: null
    };

    constructor(props) {
        super(props);
        this.state = {
            collapsedActions: this.getCollapsedActions()
        };
        this.onResize = this.onResize.bind(this);
    }

    getCollapsedActions = () => {
        if (this.props.actions) {
            let collapsedList = [...this.props.actions];
            collapsedList.push(this.props.productSwitcher);
            return collapsedList;
        }
    };

    componentWillMount() {
        this.setState({
            collapsed: false
        });
    }

    componentDidMount() {
        window.addEventListener('resize', this.onResize);
        this.onResize();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.onResize);
    }

    onResize() {
        this.setState({ collapsed: window.innerWidth <= 1024 });
    }

    render() {
        const {
            logo,
            productTitle,
            productMenu,
            subtitle,
            copilot,
            actions,
            productSwitcher,
            productSwitcherList,
            user,
            userMenu
        } = this.props;
        return (
            <div className='fd-shellbar'>
                <div className='fd-shellbar__group fd-shellbar__group--start'>
                    <a className='fd-shellbar__logo'>{logo}</a>
                    <div className='fd-shellbar__product'>
                        {productTitle && !productMenu && <span className='fd-shellbar__title'>{productTitle}</span>}
                        {productMenu && (
                            <div className='fd-product-menu'>
                                <Popover
                                    alignment='right'
                                    control={
                                        <button className='fd-product-menu__control'>
                                            <span className='fd-shellbar__title fd-product-menu__title'>
                                                {productTitle}
                                            </span>
                                        </button>
                                    }
                                    body={
                                        productMenu && (
                                            <Menu>
                                                <MenuList>
                                                    {productMenu.map((item, index) => {
                                                        return (
                                                            <MenuItem
                                                                onclick={item.callback}
                                                                url={item.url}
                                                                link={item.link}
                                                                key={index}
                                                            >
                                                                {item.glyph && (
                                                                    <React.Fragment>
                                                                        <Icon glyph={item.glyph} size={item.size} />
                                                                        &nbsp;&nbsp;&nbsp;
                                                                    </React.Fragment>
                                                                )}
                                                                {item.name}
                                                            </MenuItem>
                                                        );
                                                    })}
                                                </MenuList>
                                            </Menu>
                                        )
                                    }
                                />
                            </div>
                        )}
                    </div>
                    {subtitle && <div className='fd-shellbar__subtitle'>{subtitle}</div>}
                </div>
                {copilot ? (
                    <div className='fd-shellbar__group fd-shellbar__group--middle'>
                        <img
                            src='//unpkg.com/fiori-fundamentals/dist/images/copilot.png'
                            alt='CoPilot'
                            height='30'
                            width='30'
                        />
                    </div>
                ) : null}
                <div className='fd-shellbar__group fd-shellbar__group--end'>
                    <div className='fd-shellbar__actions'>
                        {actions &&
                            actions.map((action, index) => {
                                return (
                                    <div className='fd-shellbar__action fd-shellbar__action--collapsible' key={index}>
                                        {action.menu ? (
                                            <Popover
                                                alignment='right'
                                                control={
                                                    <button
                                                        className={` fd-button--shell sap-icon--${action.glyph}`}
                                                        aria-label={action.label}
                                                    >
                                                        {action.notificationCount > 0 && (
                                                            <span
                                                                className='fd-counter fd-counter--notification'
                                                                aria-label='Unread count'
                                                            >
                                                                {action.notificationCount}
                                                            </span>
                                                        )}
                                                    </button>
                                                }
                                                body={action.menu}
                                            />
                                        ) : (
                                            <button
                                                className={` fd-button--shell sap-icon--${action.glyph}`}
                                                key={index}
                                                aria-label={action.label}
                                                onClick={action.callback}
                                            >
                                                {action.notificationCount > 0 && (
                                                    <span
                                                        className='fd-counter fd-counter--notification'
                                                        aria-label='Unread count'
                                                    >
                                                        {action.notificationCount}
                                                    </span>
                                                )}
                                            </button>
                                        )}
                                    </div>
                                );
                            })}
                        {this.state.collapsed && actions && (
                            <div className='fd-shellbar__action fd-shellbar__action--collapse'>
                                <div className='fd-shellbar-collapse'>
                                    <Popover
                                        alignment='right'
                                        control={
                                            <div className='fd-shellbar-collapse--control' role='button'>
                                                <button className=' fd-button--shell sap-icon--overflow'>
                                                    <span
                                                        className='fd-counter fd-counter--notification'
                                                        aria-label='Unread count'
                                                    >
                                                        {actions.reduce((r, d) => r + d.notificationCount, 0)}
                                                    </span>
                                                </button>
                                            </div>
                                        }
                                        body={
                                            userMenu && (
                                                <Menu>
                                                    <MenuList>
                                                        {this.state.collapsedActions.map((item, index) => {
                                                            return (
                                                                <MenuItem
                                                                    onclick={item.callback}
                                                                    url={item.url}
                                                                    link={item.link}
                                                                    key={index}
                                                                >
                                                                    {item.label}
                                                                </MenuItem>
                                                            );
                                                        })}
                                                    </MenuList>
                                                </Menu>
                                            )
                                        }
                                    />
                                </div>
                            </div>
                        )}
                        {user && (
                            <div className='fd-shellbar__action fd-shellbar__action--show-always'>
                                <div className='fd-user-menu'>
                                    <Popover
                                        alignment='right'
                                        control={
                                            user.image ? (
                                                <Identifier
                                                    size='xs'
                                                    modifier='circle'
                                                    backgroundImageUrl={user.image}
                                                />
                                            ) : (
                                                <Identifier size='xs' modifier='circle'
                                                    color={user.colorAccent}>
                                                    {user.initials}
                                                </Identifier>
                                            )
                                        }
                                        body={
                                            userMenu && (
                                                <Menu>
                                                    <MenuList>
                                                        <MenuItem>{user.userName}</MenuItem>
                                                        {userMenu.map((item, index) => {
                                                            return (
                                                                <MenuItem
                                                                    onclick={item.callback}
                                                                    url={item.url}
                                                                    link={item.link}
                                                                    key={index}
                                                                >
                                                                    {item.glyph && (
                                                                        <React.Fragment>
                                                                            <Icon glyph={item.glyph} size={item.size} />
                                                                            &nbsp;&nbsp;&nbsp;
                                                                        </React.Fragment>
                                                                    )}
                                                                    {item.name}
                                                                </MenuItem>
                                                            );
                                                        })}
                                                    </MenuList>
                                                </Menu>
                                            )
                                        }
                                    />
                                </div>
                            </div>
                        )}
                        {productSwitcher && (
                            <div className='fd-shellbar__action fd-shellbar__action--collapsible'>
                                <div className='fd-product-switcher'>
                                    <Popover
                                        alignment='right'
                                        control={<button className=' fd-button--shell sap-icon--grid' />}
                                        body={
                                            <div className='fd-product-switcher__body'>
                                                <nav>
                                                    <ul>
                                                        {productSwitcherList.map((item, index) => {
                                                            return (
                                                                <li onClick={item.callback} key={index}>
                                                                    <span className='fd-product-switcher__product-icon'>
                                                                        <img src={item.image} alt={item.title} />
                                                                    </span>
                                                                    <span className='fd-product-switcher__product-title'>
                                                                        {item.title}
                                                                    </span>
                                                                </li>
                                                            );
                                                        })}
                                                    </ul>
                                                </nav>
                                            </div>
                                        }
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}
