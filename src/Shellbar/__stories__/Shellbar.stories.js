/* eslint-disable no-console */
/* eslint-disable react/no-multi-comp */
import Menu from '../../Menu/Menu';
import React from 'react';
import { select } from '@storybook/addon-knobs';
import Shellbar from '../Shellbar';

const profileMenu = [
    { name: 'Settings', glyph: 'action-settings', size: 's', callback: () => console.log('Settings selected!') },
    { name: 'Sign Out', glyph: 'log', size: 's', callback: () => console.log('Sign Out selected!') }
];

const productMenu = [
    { name: 'Application A', callback: () => console.log('Application A selected!') },
    { name: 'Application B', callback: () => console.log('Application B selected!') }
];

const profile = {
    initials: 'JS',
    userName: 'John Snow',
    colorAccent: 8
};

export default {
    title: 'Component API/Shellbar',
    component: Shellbar
};


/** This example shows the minimum Shellbar for a single application product with only user settings. If
no user thumbnail is available then display initials. */

export const basic = () => (
    <Shellbar
        logo={<img alt='SAP' src='//unpkg.com/fundamental-styles/dist/images/sap-logo.png' />}
        productTitle='Corporate Portal'
        profile={profile}
        profileMenu={profileMenu} />
);

/** This example includes the product menu for navigating to applications within the product and shows a search box. */

export const withProductMenu = () => (
    <Shellbar
        logoSAP
        notifications={{
            notificationCount: 2,
            label: 'Notifications'
        }}
        productMenu={productMenu}
        productTitle='Corporate Portal'
        profile={{
            image: './assets/headshot-male.jpg',
            userName: 'John Snow'
        }}
        profileMenu={profileMenu}
        searchInput={{
            label: 'Search',
            placeholder: 'Search'
        }}
        subtitle='Subtitle' />
);

export const withBackButton = () => (
    <Shellbar
        backAction={() =>{}}
        logo={<img alt='SAP' src='//unpkg.com/fundamental-styles/dist/images/sap-logo.png' />}
        productTitle='Corporate Portal'
        profile={profile}
        profileMenu={profileMenu} />
);

/** When a product has multiple links, the product links should collapse into an overflow menu on mobile
screens. All actions, except for the user menu, should be collapsed. */

export const coPilot = () => (
    <Shellbar
        actions={[
            {
                glyph: 'settings',
                label: 'Settings',
                notificationCount: 5,
                callback: () => console.log('Settings selected!'),
                menu: (
                    <Menu>
                        <Menu.List>
                            <Menu.Item url='#'>Option 1</Menu.Item>
                            <Menu.Item url='#'>Option 2</Menu.Item>
                            <Menu.Item url='#'>Option 3</Menu.Item>
                        </Menu.List>
                    </Menu>
                )
            }
        ]}
        copilot
        logoSAP
        notifications={{
            notificationCount: 2,
            label: 'Notifications',
            notificationsBody: (
                <Menu>
                    <Menu.List>
                        <Menu.Item url='#'>Notification 1</Menu.Item>
                        <Menu.Item url='#'>Notification 2</Menu.Item>
                        <Menu.Item url='#'>Notification 3</Menu.Item>
                    </Menu.List>
                </Menu>
            ),
            noNotificationsBody: (
                <Menu>
                    <Menu.List>
                        <Menu.Item>There are no notifications</Menu.Item>
                    </Menu.List>
                </Menu>
            )
        }}
        productMenu={productMenu}
        productSwitch={{
            compact: false,
            label: 'Product Switch'
        }}
        productSwitchList={[
            {
                callback: () => console.log(`${this.title} selected!`),
                title: 'Fiori Home',
                subtitle: 'Central Home',
                image: './assets/01.png',
                selected: true,
                glyph: 'home'
            },
            {
                callback: () => console.log(`${this.title} selected!`),
                title: 'S/4 HANA Cloud',
                image: './assets/02.png',
                glyph: 'cloud'
            },
            {
                callback: () => console.log(`${this.title} selected!`),
                title: 'Analytics Cloud',
                subtitle: 'Analytics Cloud',
                image: './assets/03.png',
                glyph: 'business-objects-experience'
            },
            {
                callback: () => console.log(`${this.title} selected!`),
                title: 'Ariba',
                image: './assets/04.png',
                glyph: 'activate'
            },
            {
                callback: () => console.log(`${this.title} selected!`),
                title: 'SuccessFactors',
                image: './assets/05.png',
                glyph: 'message-success'
            },
            {
                callback: () => console.log(`${this.title} selected!`),
                title: 'Commerce Cloud',
                image: './assets/06.png',
                glyph: 'retail-store'
            },
            {
                callback: () => console.log(`${this.title} selected!`),
                title: 'Gigya',
                image: './assets/07.png',
                glyph: 'customer-view'
            },
            {
                callback: () => console.log(`${this.title} selected!`),
                title: 'Callidus Cloud',
                image: './assets/08.png',
                glyph: 'globe'
            },
            {
                callback: () => console.log(`${this.title} selected!`),
                title: 'Fieldglass',
                image: './assets/09.png',
                glyph: 'work-history'
            },
            {
                callback: () => console.log(`${this.title} selected!`),
                title: 'Concur',
                image: './10.png',
                glyph: 'area-chart'
            },
            {
                callback: () => console.log(`${this.title} selected!`),
                title: 'Cloud for Customer',
                image: './11.png',
                glyph: 'customer-view'
            },
            {
                callback: () => console.log(`${this.title} selected!`),
                title: 'Cloud Portal',
                image: './12.png',
                glyph: 'customer'
            }
        ]}
        productTitle='Corporate Portal'
        profile={profile}
        profileMenu={profileMenu}
        searchInput={{
            label: 'Search',
            placeholder: 'Search'
        }}
        subtitle='Subtitle' />
);

export const dev = () => (
    <Shellbar
        actions={[
            {
                glyph: 'settings',
                label: 'Settings',
                notificationCount: 5,
                callback: () => console.log('Settings selected!'),
                menu: (
                    <Menu>
                        <Menu.List>
                            <Menu.Item url='#'>Option 1</Menu.Item>
                            <Menu.Item url='#'>Option 2</Menu.Item>
                            <Menu.Item url='#'>Option 3</Menu.Item>
                        </Menu.List>
                    </Menu>
                )
            }
        ]}
        copilot
        logoSAP
        notifications={{
            notificationCount: 2,
            label: 'Notifications',
            notificationsBody: (
                <Menu>
                    <Menu.List>
                        <Menu.Item url='#'>Notification 1</Menu.Item>
                        <Menu.Item url='#'>Notification 2</Menu.Item>
                        <Menu.Item url='#'>Notification 3</Menu.Item>
                    </Menu.List>
                </Menu>
            ),
            noNotificationsBody: (
                <Menu>
                    <Menu.List>
                        <Menu.Item>There are no notifications</Menu.Item>
                    </Menu.List>
                </Menu>
            )
        }}
        popoverPropsFor={{
            actionMenu: {
                placement: 'bottom'
            },
            collapsedMobileMenu: {
                placement: 'bottom'
            },
            notifications: {
                placement: 'bottom'
            },
            productSwitch: {
                placement: 'bottom-start'
            },
            productMenu: {
                placement: 'bottom'
            },
            profileMenu: {
                placement: 'bottom'
            }
        }}
        productMenu={productMenu}
        productSwitch={{
            label: 'Product Switch'
        }}
        productSwitchList={[
            {
                callback: () => console.log(`${this.title} selected!`),
                title: 'Fiori Home',
                subtitle: 'Central Home',
                image: './assets/01.png',
                selected: true,
                glyph: 'home'
            },
            {
                callback: () => console.log(`${this.title} selected!`),
                title: 'S/4 HANA Cloud',
                image: './assets/02.png',
                glyph: 'cloud'
            },
            {
                callback: () => console.log(`${this.title} selected!`),
                title: 'Analytics Cloud',
                subtitle: 'Analytics Cloud',
                image: './assets/03.png',
                glyph: 'business-objects-experience'
            },
            {
                callback: () => console.log(`${this.title} selected!`),
                title: 'Ariba',
                image: './assets/04.png',
                glyph: 'activate'
            },
            {
                callback: () => console.log(`${this.title} selected!`),
                title: 'SuccessFactors',
                image: './assets/05.png',
                glyph: 'message-success'
            },
            {
                callback: () => console.log(`${this.title} selected!`),
                title: 'Commerce Cloud',
                image: './assets/06.png',
                glyph: 'retail-store'
            },
            {
                callback: () => console.log(`${this.title} selected!`),
                title: 'Gigya',
                image: './assets/07.png',
                glyph: 'customer-view'
            },
            {
                callback: () => console.log(`${this.title} selected!`),
                title: 'Callidus Cloud',
                image: './assets/08.png',
                glyph: 'globe'
            },
            {
                callback: () => console.log(`${this.title} selected!`),
                title: 'Fieldglass',
                image: './assets/09.png',
                glyph: 'work-history'
            },
            {
                callback: () => console.log(`${this.title} selected!`),
                title: 'Concur',
                image: './10.png',
                glyph: 'area-chart'
            },
            {
                callback: () => console.log(`${this.title} selected!`),
                title: 'Cloud for Customer',
                image: './11.png',
                glyph: 'customer-view'
            },
            {
                callback: () => console.log(`${this.title} selected!`),
                title: 'Cloud Portal',
                image: './12.png',
                glyph: 'customer'
            }
        ]}
        productTitle='Corporate Portal'
        profile={profile}
        profileMenu={profileMenu}
        searchInput={{
            label: 'Search',
            placeholder: 'Search'
        }}
        size={select('size', { 's': 's', 'm': 'm', 'l': 'l', 'xl': 'xl' }, 's')}
        subtitle='Subtitle' />
);
dev.parameters = { docs: { disable: true } };

export const noStyles = () => (
    <Shellbar
        cssNamespace='xxx'
        logo={<img alt='SAP' src='//unpkg.com/fundamental-styles/dist/images/sap-logo.png' />}
        productTitle='Corporate Portal'
        profile={profile}
        profileMenu={profileMenu}
        searchInput={{
            label: 'Search',
            placeholder: 'Search'
        }} />
);
noStyles.parameters = { docs: { disable: true } };
