import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Popover, Menu, MenuList, MenuItem, Identifier } from '../';

export class Shellbar extends Component {
    static propTypes = {
        copilot: PropTypes.bool,
        actions: PropTypes.array
    };

    static defaultProps = {
        actions: []
    };

    constructor(props) {
        super(props);
        this.state = {};
        this.onResize = this.onResize.bind(this);
    }

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
            customActions,
            productSwitcher,
            customProductSwitcher,
            user,
            userMenu
        } = this.props;
        return (
            <div className="fd-shellbar">
                <div className="fd-shellbar__group fd-shellbar__group--start">
                    <a class="fd-shellbar__logo">{logo}</a>
                    <div className="fd-shellbar__product">
                        {productTitle && !productMenu && <span class="fd-shellbar__title">{productTitle}</span>}
                        <div class="fd-product-menu">
                            <Popover
                                alignment="right"
                                control={
                                    <button class="fd-product-menu__control">
                                        <span class="fd-shellbar__title fd-product-menu__title">{productTitle}</span>
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
                                        <button
                                            className={` fd-button--shell sap-icon--${action.glyph}`}
                                            aria-label={action.label}
                                            onClick={action.callback}
                                        >
                                            {action.notificationCount && (
                                                <span
                                                    className="fd-counter fd-counter--notification"
                                                    aria-label="Unread count"
                                                >
                                                    {action.notificationCount}
                                                </span>
                                            )}
                                        </button>
                                    </div>
                                );
                            })}
                        {customActions}

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
                                                        {userMenu.map(item => {
                                                            return (
                                                                <MenuItem
                                                                    onclick={item.callback}
                                                                    url={item.url}
                                                                    link={item.link}
                                                                >
                                                                    {item.text}
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
                                        control={
                                            <button
                                                class=" fd-button--shell sap-icon--grid"
                                                aria-controls="FAVDA565"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                            />
                                        }
                                        body={
                                            <div class="fd-product-switcher__body">
                                                <nav>
                                                    <ul>
                                                        {productSwitcher.map(item => {
                                                            return (
                                                                <li>
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
                        {customProductSwitcher}
                    </div>
                </div>
            </div>
        );
    }
}
