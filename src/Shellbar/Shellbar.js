import Avatar from '../Avatar/Avatar';
import Button from '../Button/Button';
import classnamesBind from 'classnames/bind';
import Counter from '../Counter/Counter';
import CustomPropTypes from '../utils/CustomPropTypes/CustomPropTypes';
import Icon from '../Icon/Icon';
import Menu from '../Menu/Menu';
import Popover from '../Popover/Popover';
import PropTypes from 'prop-types';
import SearchInput from '../SearchInput/SearchInput';
import withStyles from '../utils/withStyles';
import React, { Component } from 'react';
import buttonStyles from 'fundamental-styles/dist/button.css';
import iconStyles from 'fundamental-styles/dist/icon.css';
import menuStyles from 'fundamental-styles/dist/menu.css';
import productSwitchStyles from 'fundamental-styles/dist/product-switch.css';
import shellbarStyles from 'fundamental-styles/dist/shellbar.css';

const classnames = classnamesBind.bind({
    ...menuStyles,
    ...iconStyles,
    ...productSwitchStyles,
    ...shellbarStyles
});
const isUsingCssModules = shellbarStyles && Object.keys(shellbarStyles).length > 0;

const buttonClassnames = classnamesBind.bind(buttonStyles);
/** The **Shellbar** offers consistent, responsive navigation across all products and applications. Includes
support for branding, product navigation, search, notifications, user settings, and CoPilot. This is
a composite component comprised of mandatory and optional elements. Before getting started, here are
some things to know. */

class Shellbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsedActions: this.getCollapsedActions(),
            totalNotifications: this.getNotificationsSum(),
            showCollapsedProductSwitchMenu: false
        };
    }

    backBtnHandler = () => {
        this.setState({
            showCollapsedProductSwitchMenu: false
        });
    };

    getCollapsedActions = () => {
        let collapsedList = [];

        //put all the Additional Actions in the list
        if (this.props.actions) {
            collapsedList = [...this.props.actions];
        }

        //Add the notification icon to the notifications object and add it to the list
        //The notifications are placed after the additional actions
        if (this.props.notifications) {
            let collapsedNotifications = this.props.notifications;
            collapsedNotifications.glyph = 'bell';
            collapsedList.push(collapsedNotifications);
        }

        //Add the grid icon to the product switch object and add it to the list
        //The product switch is placed after the notifications
        if (this.props.productSwitch) {
            let collapsedProductSwitch = this.props.productSwitch;

            // eslint-disable-next-line react/prop-types
            collapsedProductSwitch.glyph = 'grid';
            // eslint-disable-next-line react/prop-types
            collapsedProductSwitch.callback = () => {
                this.setState(prevState => ({
                    showCollapsedProductSwitchMenu: !prevState.showCollapsedProductSwitchMenu
                }));
            };

            collapsedList.push(collapsedProductSwitch);
        }

        //Add the search icon to the search input object and add it to the list
        //The search input is placed at the beginning of the list
        if (this.props.searchInput) {
            let collapsedSearchInput = this.props.searchInput;
            collapsedSearchInput.glyph = 'search';
            collapsedList.unshift(collapsedSearchInput);
        }
        return collapsedList;
    };

    getNotificationsSum = () => {
        let additionalActionsSum = 0;
        if (this.props.actions) {
            additionalActionsSum = this.props.actions.reduce((r, d) => r + d.notificationCount, 0);
        }
        if (this.props.notifications) {
            if (this.props.notifications.notificationCount) {
                let totalSum = additionalActionsSum + this.props.notifications.notificationCount;
                return totalSum;
            } else {
                return additionalActionsSum;
            }
        } else {
            return additionalActionsSum;
        }
    };

    render() {
        const {
            localizedText,
            logo,
            logoSAP,
            productTitle,
            productMenu,
            subtitle,
            copilot,
            searchInput,
            size,
            actions,
            notifications,
            productSwitch,
            productSwitchList,
            profile,
            profileMenu,
            popoverPropsFor,
            className,
            cssNamespace,
            backAction
        } = this.props;

        const shellbarClasses = classnames(
            `${cssNamespace}-shellbar`,
            className,
            {
                [`${cssNamespace}-shellbar--${size}`]: size
            },
        );

        return (
            <div className={shellbarClasses} >
                <div className={classnames(`${cssNamespace}-shellbar__group`, `${cssNamespace}-shellbar__group--product`)}>
                    {backAction && <Button
                        aria-label={localizedText.backButtonLabel}
                        className={classnames(`${cssNamespace}-shellbar__button`, { [`${cssNamespace}-button`]: isUsingCssModules })}
                        glyph='nav-back'
                        onClick={backAction}
                        option='transparent' />
                    }
                    {logo && <span className={classnames(`${cssNamespace}-shellbar__logo`)}>{logo}</span>}
                    {logoSAP && (
                        <span className={classnames(`${cssNamespace}-shellbar__logo`)}>
                            <img alt='SAP' src='//unpkg.com/fundamental-styles/dist/images/sap-logo.png' />
                        </span>
                    )}
                    {productTitle && !productMenu && <span className={classnames(`${cssNamespace}-shellbar__title`)}>{productTitle}</span>}
                    {productMenu && (
                        <Popover
                            {...popoverPropsFor?.productMenu}
                            body={
                                productMenu && (
                                    <Menu>
                                        <Menu.List>
                                            {productMenu.map((item, index) => {
                                                return (
                                                    <Menu.Item
                                                        key={index}
                                                        link={item.link}
                                                        onClick={item.callback}
                                                        url={item.url} >
                                                        {item.glyph && (
                                                            <>
                                                                <Icon glyph={item.glyph} size={item.size} />
                                                                    &nbsp;&nbsp;&nbsp;
                                                            </>
                                                        )}
                                                        {item.name}
                                                    </Menu.Item>
                                                );
                                            })}
                                        </Menu.List>
                                    </Menu>
                                )
                            }
                            control={
                                <Button
                                    className={classnames(
                                        `${cssNamespace}-shellbar__button--menu`,
                                        `${cssNamespace}-button--menu`,
                                        {
                                            [`${cssNamespace}-button`]: isUsingCssModules,
                                            [buttonClassnames(`${cssNamespace}-button--menu`)]: isUsingCssModules
                                        }
                                    )}
                                    glyph='megamenu'
                                    iconProps={{ className: classnames(`${cssNamespace}-shellbar__button--icon`) }}
                                    option='transparent'
                                    textClassName={classnames(`${cssNamespace}-shellbar__title`)}>
                                    {productTitle}
                                </Button>
                            }
                            noArrow
                            popperProps={{ id: `${cssNamespace}-shellbar-product-popover` }} />
                    )}
                    {subtitle && <div className={classnames(`${cssNamespace}-shellbar__subtitle`)}>{subtitle}</div>}
                </div>
                {copilot ? (
                    <div className={classnames(`${cssNamespace}-shellbar__group`, `${cssNamespace}-shellbar__group--copilot`)}>
                        <img
                            alt='CoPilot'
                            height='30'
                            src='//unpkg.com/fundamental-styles/dist/images/copilot.png'
                            width='30' />
                    </div>
                ) : null}
                <div className={classnames(`${cssNamespace}-shellbar__group`, `${cssNamespace}-shellbar__group--actions`)}>
                    {searchInput && (
                        <div className={classnames(`${cssNamespace}-shellbar__action`, `${cssNamespace}-shellbar__action--desktop`)}>
                            <SearchInput
                                className={classnames(`${cssNamespace}-shellbar__input-group`)}
                                inShellbar
                                inputGroupAddonProps={{ className: classnames(`${cssNamespace}-shellbar__input-group__addon`) }}
                                inputGroupProps={{ className: classnames(`${cssNamespace}-shellbar__input-group`) }}
                                inputProps={{ className: classnames(`${cssNamespace}-shellbar__input-group__input`) }}
                                onEnter={searchInput.onSearch}
                                placeholder={searchInput.placeholder}
                                popoverProps={{
                                    placement: searchInput?.popoverProps?.placement || 'bottom',
                                    disableEdgeDetection: searchInput?.popoverProps?.disableEdgeDetection || true,
                                    ...searchInput.popoverProps
                                }}
                                searchBtnProps={{ className: classnames(`${cssNamespace}-shellbar__button`, { [`${cssNamespace}-button`]: isUsingCssModules }) }}
                                searchList={searchInput.searchList} />
                        </div>
                    )}
                    {actions &&
                            actions.map((action, index) => {
                                return (
                                    <div className={classnames(`${cssNamespace}-shellbar__action`, `${cssNamespace}-shellbar__action--desktop`)} key={index}>
                                        {action.menu ? (
                                            <Popover
                                                placement='bottom-end'
                                                {...popoverPropsFor?.actionMenu}
                                                body={action.menu}
                                                control={
                                                    <Button
                                                        aria-label={action.label}
                                                        className={classnames(`${cssNamespace}-shellbar__button`, { [`${cssNamespace}-button`]: isUsingCssModules })}
                                                        glyph={action.glyph}
                                                        iconBeforeText
                                                        onClick={action.callback}>
                                                        {action.notificationCount > 0 && (
                                                            <Counter
                                                                aria-label={localizedText.counterLabel}
                                                                className={classnames(`${cssNamespace}-shellbar__counter--notification`)}
                                                                notification>
                                                                {action.notificationCount}
                                                            </Counter>
                                                        )}
                                                        {action.label}
                                                    </Button>
                                                }
                                                popperProps={{ id: `${cssNamespace}-shellbar-actions-popover-${index}` }} />
                                        ) : (
                                            <Button
                                                aria-label={action.label}
                                                className={classnames(`${cssNamespace}-shellbar__button`, { [`${cssNamespace}-button`]: isUsingCssModules })}
                                                glyph={action.glyph}
                                                iconBeforeText
                                                key={index}
                                                onClick={action.callback}>
                                                {action.notificationCount > 0 && (
                                                    <Counter
                                                        aria-label={localizedText.counterLabel}
                                                        notification>
                                                        {action.notificationCount}
                                                    </Counter>
                                                )}
                                            </Button>
                                        )}
                                    </div>
                                );
                            })}
                    {notifications && (
                        (notifications.notificationsBody || notifications.noNotificationsBody) ? (
                            <Popover
                                placement='bottom-end'
                                {...popoverPropsFor?.notifications}
                                body={
                                    ((notifications.notificationCount > 0) && notifications.notificationsBody) ||
                                        ((notifications.notificationCount <= 0) && notifications.noNotificationsBody)
                                }
                                control={
                                    <div className={classnames(`${cssNamespace}-shellbar__action`, `${cssNamespace}-shellbar__action--desktop`)}>
                                        <Button
                                            aria-label={localizedText.notificationsButton}
                                            className={classnames(`${cssNamespace}-shellbar__button`, { [`${cssNamespace}-button`]: isUsingCssModules })}
                                            glyph='bell'
                                            iconBeforeText>
                                            {notifications.notificationCount > 0 && (
                                                <Counter
                                                    aria-label={localizedText.counterLabel}
                                                    notification>
                                                    {notifications.notificationCount}
                                                </Counter>
                                            )}
                                        </Button>
                                    </div>
                                }
                                popperProps={{ id: `${cssNamespace}-shellbar-notifications-popover` }} />
                        ) : (
                            <div className={classnames(`${cssNamespace}-shellbar__action`, `${cssNamespace}-shellbar__action--desktop`)}>
                                <Button
                                    aria-label={localizedText.notificationsButton}
                                    className={classnames(`${cssNamespace}-shellbar__button`, { [`${cssNamespace}-button`]: isUsingCssModules })}
                                    glyph='bell'
                                    iconBeforeText
                                    onClick={notifications.callback}>
                                    {notifications.notificationCount > 0 && (
                                        <Counter
                                            aria-label={localizedText.counterLabel}
                                            notification>
                                            {notifications.notificationCount}
                                        </Counter>
                                    )}
                                </Button>
                            </div>
                        )
                    )}
                    {
                        (actions || searchInput || notifications) && <div className={classnames(`${cssNamespace}-shellbar__action`, `${cssNamespace}-shellbar__action--mobile`)}>
                            <Popover
                                placement='bottom-end'
                                {...popoverPropsFor?.collapsedMobileMenu}
                                body={
                                    <Menu>
                                        {!this.state.showCollapsedProductSwitchMenu ? (
                                            <Menu.List>
                                                {this.state.collapsedActions.map((item, index) => {
                                                    return (
                                                        <Menu.Item
                                                            key={index}
                                                            link={item.link}
                                                            onClick={item.callback}
                                                            url={item.url} >
                                                            <Icon glyph={item.glyph}>
                                                                {item.notificationCount > 0 && <Counter notification>{item.notificationCount}</Counter>}
                                                            </Icon> {item.label}
                                                        </Menu.Item>
                                                    );
                                                })}
                                            </Menu.List>
                                        ) : (
                                            <Menu.List>
                                                <Menu.Item>
                                                    <span
                                                        className={classnames(`${cssNamespace}-menu`, 'sap-icon--nav-back')}
                                                        onClick={this.backBtnHandler} />
                                                </Menu.Item>
                                                {productSwitchList.map((item, index) => {
                                                    return (
                                                        <Menu.Item
                                                            key={index}
                                                            link={item.link}
                                                            onClick={item.callback}
                                                            url={item.url} >
                                                            <Icon glyph={item.glyph} /> {item.title}
                                                        </Menu.Item>
                                                    );
                                                })}
                                            </Menu.List>
                                        )}
                                    </Menu>
                                }
                                control={
                                    <div className={classnames(`${cssNamespace}-shellbar-collapse--control`)} role='button'>
                                        <Button className={classnames(`${cssNamespace}-shellbar__button`, { [`${cssNamespace}-button`]: isUsingCssModules })}
                                            glyph='overflow'
                                            iconBeforeText>
                                            <Counter
                                                aria-label={localizedText.counterLabel}
                                                notification> {this.state.totalNotifications > 0 && this.state.totalNotifications} </Counter>
                                        </Button>
                                    </div>
                                }
                                popperProps={{ id: `${cssNamespace}-shellbar-mobile-action-popover` }} />
                        </div>
                    }
                    {profile && (
                        <div className={classnames(`${cssNamespace}-shellbar__action`, `${cssNamespace}-shellbar__action--show-always`)}>
                            <div className={classnames(`${cssNamespace}-user-menu`)}>
                                <Popover
                                    placement='bottom-end'
                                    {...popoverPropsFor?.profileMenu}
                                    body={
                                        profileMenu && (
                                            <Menu>
                                                <Menu.List>
                                                    <Menu.Item>{profile.userName}</Menu.Item>
                                                    {profileMenu.map((item, index) => {
                                                        return (
                                                            <Menu.Item
                                                                key={index}
                                                                link={item.link}
                                                                onClick={item.callback}
                                                                url={item.url} >
                                                                {item.glyph && (
                                                                    <React.Fragment>
                                                                        <Icon
                                                                            glyph={item.glyph}
                                                                            size={item.size} />
                                                                            &nbsp;&nbsp;&nbsp;
                                                                    </React.Fragment>
                                                                )}
                                                                {item.name}
                                                            </Menu.Item>
                                                        );
                                                    })}
                                                </Menu.List>
                                            </Menu>
                                        )
                                    }
                                    control={
                                        <button className={classnames(
                                            `${cssNamespace}-button`,
                                            `${cssNamespace}-shellbar__button`,
                                            `${cssNamespace}-shellbar__button--user-menu`,
                                            {
                                                [buttonClassnames(`${cssNamespace}-button`)]: isUsingCssModules
                                            })
                                        }>
                                            {profile.image ? (
                                                <Avatar
                                                    backgroundImageUrl={profile.image}
                                                    circle
                                                    className={classnames(`${cssNamespace}-shellbar__avatar--circle`)}
                                                    size='xs' />
                                            ) : (
                                                <Avatar
                                                    circle
                                                    className={classnames(`${cssNamespace}-shellbar__avatar--circle`)}
                                                    color={profile.colorAccent}
                                                    size='xs'>
                                                    {profile.glyph ? <Icon glyph={profile.glyph} /> : profile.initials}
                                                </Avatar>
                                            )}
                                        </button>
                                    }
                                    noArrow
                                    popperProps={{ id: `${cssNamespace}-shellbar-profile-popover` }} />
                            </div>
                        </div>
                    )}
                    {productSwitch && (
                        <div className={classnames(`${cssNamespace}-shellbar__action`, `${cssNamespace}-shellbar__action--desktop`)}>
                            <div className={classnames(`${cssNamespace}-product-switch`)}>
                                <Popover
                                    placement='bottom-end'
                                    {...popoverPropsFor?.productSwitch}
                                    body={
                                        <div className={classnames(`${cssNamespace}-product-switch__body`)}>
                                            <ul className={classnames(`${cssNamespace}-product-switch__list`)}>
                                                {productSwitchList.map((item, index) => {
                                                    return (
                                                        <li
                                                            className={classnames(`${cssNamespace}-product-switch__item`, { selected: item.selected })}
                                                            key={index}
                                                            onClick={item.callback}>
                                                            <div className={classnames(`${cssNamespace}-product-switch__icon`, `sap-icon--${item.glyph}`)} />
                                                            <div className={classnames(`${cssNamespace}-product-switch__text`)}>
                                                                <div className={classnames(`${cssNamespace}-product-switch__title`)}>
                                                                    {item.title}
                                                                </div>
                                                                {item.subtitle &&
                                                                    <div className={classnames(`${cssNamespace}-product-switch__subtitle`)}>
                                                                        {item.subtitle}
                                                                    </div>
                                                                }
                                                            </div>
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                        </div>
                                    }
                                    control={<Button
                                        aria-label={productSwitch.label}
                                        className={classnames(`${cssNamespace}-product-switch__control`, `${cssNamespace}-shellbar__button`, { [`${cssNamespace}-button`]: isUsingCssModules })}
                                        glyph='grid' />}
                                    disableEdgeDetection
                                    popperProps={{ id: `${cssNamespace}-shellbar-product-switch-popover` }} />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

Shellbar.displayName = 'Shellbar';

Shellbar.propTypes = {
    /** Holds all product actions and links */
    actions: PropTypes.array,
    /** Adds back icon to shellbar and performs the provided action */
    backAction: PropTypes.func,
    /** CSS class(es) to add to the element */
    className: PropTypes.string,
    /** For use with applications that utilize CoPilot */
    copilot: PropTypes.bool,
    /** Localized text to be updated based on location/language */
    localizedText: CustomPropTypes.i18n({
        /** Aria-label for back <button> */
        backButtonLabel: PropTypes.string,
        /** Aria-label for <span> element within the <button> element */
        counterLabel: PropTypes.string,
        /** Aria-label for <button> element */
        notificationsButton: PropTypes.string
    }),
    /** Provide an img tag for a logo other than the SAP logo.
     * One of the two props (`logo` or `logoSAP`) should be set */
    logo: PropTypes.object,
    /** Renders the SAP logo in the Shellbar. One of the two props (`logo` or `logoSAP`) should be set */
    logoSAP: PropTypes.bool,
    /** Information about pending notifications */
    notifications: PropTypes.object,
    /**
     * Additional props to be spread to the popovers of the action menu, collapsed mobile menu, notifications menu, product menu,
     * product switch popover and the profile menu.
     * */
    popoverPropsFor: {
        actionMenu: PropTypes.object,
        collapsedMobileMenu: PropTypes.object,
        notifications: PropTypes.object,
        productMenu: PropTypes.object,
        productSwitch: PropTypes.object,
        profileMenu: PropTypes.object
    },
    /** Holds product titles and navigation */
    productMenu: PropTypes.array,
    /** For navigating between products. An object that contains an accessible and localized label for product switch button. */
    productSwitch: PropTypes.shape({
        /** Accessible and localized label for product switch button */
        label: PropTypes.string.isRequired
    }),
    /** Array of objects containing data about the products.
     * Callback and title are required; selected, glyph and subtitle are optional. */
    productSwitchList: PropTypes.arrayOf(
        PropTypes.shape({
            callback: PropTypes.func.isRequired,
            /** Localized text for the heading */
            title: PropTypes.string.isRequired,
            /** The icon to include. See the icon page for the list of icons */
            glyph: PropTypes.string,
            /** For pre-selecting an item in the product switch list */
            selected: PropTypes.bool,
            subtitle: PropTypes.string
        })
    ),
    /** Displays the current application when no product menu is used */
    productTitle: PropTypes.string,
    /** User information (_e.g._ name, initials, etc.) */
    profile: PropTypes.object,
    /** List of items for the profile menu */
    profileMenu: PropTypes.array,
    /** Holds `searchInput` [properties](?id=component-api-searchinput--compact&viewMode=docs#properties) */
    searchInput: PropTypes.object,
    /** Provides a size modifier for product actions only visible on small shellbar `s`, or product actions only visible on desktop screens `m`/`l`/`xl`. */
    size: PropTypes.oneOf(['s', 'm', 'l', 'xl']),
    /** Displays an application context. Should be used rarely */
    subtitle: PropTypes.string
};

Shellbar.defaultProps = {
    localizedText: {
        backButtonLabel: 'Back button',
        counterLabel: 'Unread count',
        notificationsButton: 'Notifications'
    },
    size: 'l'
};

export default withStyles(Shellbar);
