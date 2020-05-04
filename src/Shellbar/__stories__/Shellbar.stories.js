/* eslint-disable no-console */
/* eslint-disable react/no-multi-comp */
import Menu from '../../Menu/Menu';
import React from 'react';
import Shellbar from '../Shellbar';

const profileMenu = [
    { name: 'Settings', glyph: 'action-settings', size: 's', callback: () => console.log('Settings selected!') },
    { name: 'Sign Out', glyph: 'log', size: 's', callback: () => console.log('Sign Out selected!') }
];

const profile = {
    initials: 'JS',
    userName: 'John Snow',
    colorAccent: 8
};

export const primary = () => (
    <Shellbar
        logo={<img alt='SAP' src='//unpkg.com/fundamental-styles/dist/images/sap-logo.png' />}
        productTitle='Corporate Portal'
        profile={profile}
        profileMenu={profileMenu} />
);

export const basic = () => (
    <Shellbar
        logo={<img alt='SAP' src='//unpkg.com/fundamental-styles/dist/images/sap-logo.png' />}
        productTitle='Corporate Portal'
        profile={profile}
        profileMenu={profileMenu} />
);

basic.story = {
    parameters: {
        docs: {
            storyDescription: `This example shows the minimum Shellbar for a single application product with only user settings. If
            no user thumbnail is available then display initials.`
        }
    }
};

export const productMenu = () => (
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

productMenu.story = {
    parameters: {
        docs: {
            storyDescription: `This example includes the product menu for navigating to applications within the product and shows a
            search box.`
        }
    }
};

export const withBackButton = () => (
    <Shellbar
        backAction={() =>{}}
        logo={<img alt='SAP' src='//unpkg.com/fundamental-styles/dist/images/sap-logo.png' />}
        productTitle='Corporate Portal'
        profile={profile}
        profileMenu={profileMenu} />
);

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
            label: 'Product Switch'
        }}
        productSwitchList={[
            {
                title: 'Fiori Home',
                subtitle: 'Central Home',
                image: './assets/01.png',
                glyph: 'home'
            },
            {
                title: 'S/4 HANA Cloud',
                image: './assets/02.png',
                glyph: 'cloud'
            },
            {
                title: 'Analytics Cloud',
                subtitle: 'Analytics Cloud',
                image: './assets/03.png',
                glyph: 'business-objects-experience'
            },
            { title: 'Ariba', image: './assets/04.png', glyph: 'activate' },
            {
                title: 'SuccessFactors',
                image: './assets/05.png',
                glyph: 'message-success'
            },
            {
                title: 'Commerce Cloud',
                image: './assets/06.png',
                glyph: 'retail-store'
            },
            { title: 'Gigya', image: './assets/07.png', glyph: 'customer-view' },
            {
                title: 'Callidus Cloud',
                image: './assets/08.png',
                glyph: 'globe'
            },
            {
                title: 'Fieldglass',
                image: './assets/09.png',
                glyph: 'work-history'
            },
            { title: 'Concur', image: './10.png', glyph: 'area-chart' },
            {
                title: 'Cloud for Customer',
                image: './11.png',
                glyph: 'customer-view'
            },
            {
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

coPilot.story = {
    parameters: {
        docs: {
            storyDescription: `When a product has multiple links, the product links should collapse into an overflow menu on mobile
            screens. All actions, except for the user menu, should be collapsed.`
        }
    }
};
