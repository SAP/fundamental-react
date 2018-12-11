import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Popover, Menu, MenuList, MenuItem, Identifier, Icon } from '../';

export class Shellbar extends Component {
    static propTypes = {
        copilot: PropTypes.bool
    };

    static defaultProps = {
        actions: []
    };

    constructor(props) {
        super(props);
        this.state = {
            collapsedActions: this.getCollapsedActions()
        };
        this.onResize = this.onResize.bind(this);
    }

    getCollapsedActions = () => {
        let collapsedList = [...this.props.actions];
        collapsedList.push(this.props.productSwitcher);
        return collapsedList;
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
            <div className="fd-shellbar">
                <div className="fd-shellbar__group fd-shellbar__group--start">
                    <a class="fd-shellbar__logo">{logo}</a>
                    <div className="fd-shellbar__product">
                        {productTitle && !productMenu && <span class="fd-shellbar__title">{productTitle}</span>}
                        {productMenu && (
                            <div class="fd-product-menu">
                                <Popover
                                    alignment="right"
                                    control={
                                        <button class="fd-product-menu__control">
                                            <span class="fd-shellbar__title fd-product-menu__title">
                                                {productTitle}
                                            </span>
                                        </button>
                                    }
                                    body={
                                        productMenu && (
                                            <Menu>
                                                <MenuList>
                                                    {productMenu.map(item => {
                                                        return (
                                                            <MenuItem
                                                                onclick={item.callback}
                                                                url={item.url}
                                                                link={item.link}
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
                    {subtitle && <div class="fd-shellbar__subtitle">{subtitle}</div>}
                </div>
                {copilot ? (
                    <div className="fd-shellbar__group fd-shellbar__group--middle">
                        <img
                            src="//unpkg.com/fiori-fundamentals/dist/images/copilot.png"
                            alt="CoPilot"
                            height="30"
                            width="30"
                        />
                    </div>
                ) : null}
                <div className="fd-shellbar__group fd-shellbar__group--end">
                    <div className="fd-shellbar__actions">
                        {actions &&
                            actions.map(action => {
                                return (
                                    <div className="fd-shellbar__action fd-shellbar__action--collapsible">
                                        {action.menu ? (
                                            <Popover
                                                alignment="right"
                                                control={
                                                    <button
                                                        className={` fd-button--shell sap-icon--${action.glyph}`}
                                                        aria-label={action.label}
                                                    >
                                                        {action.notificationCount > 0 && (
                                                            <span
                                                                className="fd-counter fd-counter--notification"
                                                                aria-label="Unread count"
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
                                                aria-label={action.label}
                                                onClick={action.callback}
                                            >
                                                {action.notificationCount > 0 && (
                                                    <span
                                                        className="fd-counter fd-counter--notification"
                                                        aria-label="Unread count"
                                                    >
                                                        {action.notificationCount}
                                                    </span>
                                                )}
                                            </button>
                                        )}
                                    </div>
                                );
                            })}
                        {this.state.collapsed && (
                            <div class="fd-shellbar__action fd-shellbar__action--collapse">
                                <div class="fd-shellbar-collapse">
                                    <Popover
                                        alignment="right"
                                        control={
                                            <div class="fd-shellbar-collapse--control" role="button">
                                                <button class=" fd-button--shell sap-icon--overflow">
                                                    <span
                                                        class="fd-counter fd-counter--notification"
                                                        aria-label="Unread count"
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
                                                        {this.state.collapsedActions.map(item => {
                                                            return (
                                                                <MenuItem
                                                                    onclick={item.callback}
                                                                    url={item.url}
                                                                    link={item.link}
                                                                >
                                                                    {item.glyph && (
                                                                        <React.Fragment>
                                                                            <Icon glyph={item.glyph} size={item.size} />
                                                                            &nbsp;&nbsp;&nbsp;
                                                                        </React.Fragment>
                                                                    )}
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
                            <div class="fd-shellbar__action fd-shellbar__action--show-always">
                                <div class="fd-user-menu">
                                    <Popover
                                        alignment="right"
                                        control={
                                            user.image ? (
                                                <Identifier
                                                    size="xs"
                                                    modifier="circle"
                                                    backgroundImageUrl={user.image}
                                                />
                                            ) : (
                                                <Identifier size="xs" modifier="circle">
                                                    {user.initials}
                                                </Identifier>
                                            )
                                        }
                                        body={
                                            userMenu && (
                                                <Menu>
                                                    <MenuList>
                                                        <MenuItem>{user.userName}</MenuItem>
                                                        {userMenu.map(item => {
                                                            return (
                                                                <MenuItem
                                                                    onclick={item.callback}
                                                                    url={item.url}
                                                                    link={item.link}
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
                            <div class="fd-shellbar__action fd-shellbar__action--collapsible">
                                <div class="fd-product-switcher">
                                    <Popover
                                        alignment="right"
                                        control={<button class=" fd-button--shell sap-icon--grid" />}
                                        body={
                                            <div class="fd-product-switcher__body">
                                                <nav>
                                                    <ul>
                                                        {productSwitcherList.map(item => {
                                                            return (
                                                                <li onClick={item.callback}>
                                                                    <span class="fd-product-switcher__product-icon">
                                                                        <img src={item.image} alt={item.title} />
                                                                    </span>
                                                                    <span class="fd-product-switcher__product-title">
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
