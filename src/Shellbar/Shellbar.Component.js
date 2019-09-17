import { Menu } from '../';
import path from 'path';
import { Shellbar } from '..';
import { ComponentPage, Example } from '../_playground';
import React, { Component } from 'react';

var images = require.context('../../assets', true);

export class ShellbarComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    actions = [
        {
            glyph: 'settings',
            label: 'Settings',
            notificationCount: 5,
            callback: () => alert('Settings selected!'),
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
    ];

    notifications2 = {
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
        ),
        callback: () => alert('Notification selected!')
    };

    notifications = {
        notificationCount: 2,
        label: 'Notifications',
        callback: () => alert('Notification selected!')
    };

    profile1 = {
        initials: 'JS',
        userName: 'John Snow',
        colorAccent: 8
    };

    profile = {
        image: images('./headshot-male.jpg'),
        userName: 'John Snow'
    };

    profileMenu = [
        { name: 'Settings', glyph: 'action-settings', size: 's', callback: () => alert('Settings selected!') },
        { name: 'Sign Out', glyph: 'log', size: 's', callback: () => alert('Sign Out selected!') }
    ];

    productMenu = [
        { name: 'Application A', callback: () => alert('Application A selected!') },
        { name: 'Application B', callback: () => alert('Application B selected!') },
        { name: 'Application C', callback: () => alert('Application C selected!') },
        { name: 'Application D', callback: () => alert('Application D selected!') }
    ];

    productSwitcherList = [
        {
            title: 'Fiori Home',
            image: images('./01.png'),
            glyph: 'home',
            callback: () => alert('Fiori Home selected!')
        },
        {
            title: 'S/4 HANA Cloud',
            image: images('./02.png'),
            glyph: 'cloud',
            callback: () => alert('S/4 HANA Cloud selected!')
        },
        {
            title: 'Analytics Cloud',
            image: images('./03.png'),
            glyph: 'business-objects-experience',
            callback: () => alert('Analytics Cloud selected!')
        },
        { title: 'Ariba', image: images('./04.png'), glyph: 'activate', callback: () => alert('Ariba selected!') },
        {
            title: 'SuccessFactors',
            image: images('./05.png'),
            glyph: 'message-success',
            callback: () => alert('SuccessFactors selected!')
        },
        {
            title: 'Commerce Cloud',
            image: images('./06.png'),
            glyph: 'retail-store',
            callback: () => alert('Commerce Cloud selected!')
        },
        { title: 'Gigya', image: images('./07.png'), glyph: 'customer-view', callback: () => alert('Gigya selected!') },
        {
            title: 'Callidus Cloud',
            image: images('./08.png'),
            glyph: 'globe',
            callback: () => alert('Callidus Cloud selected!')
        },
        {
            title: 'Fieldglass',
            image: images('./09.png'),
            glyph: 'work-history',
            callback: () => alert('Fieldglass selected!')
        },
        { title: 'Concur', image: images('./10.png'), glyph: 'area-chart', callback: () => alert('Concur selected!') },
        {
            title: 'Cloud for Customer',
            image: images('./11.png'),
            glyph: 'customer-view',
            callback: () => alert('Cloud for Customer selected!')
        },
        {
            title: 'Cloud Portal',
            image: images('./12.png'),
            glyph: 'customer',
            callback: () => alert('Cloud Portal selected!')
        }
    ];

    productSwitcher = {
        label: 'Product Switcher'
    };

    searchInput = {
        label: 'Search',
        placeholder: 'Enter a fruit',
        onSearch: function(searchTerm) {
            alert(`Search fired for ${searchTerm}`);
        },
        callback: () => alert('Search selected!')
    };

    searchInput2 = {
        label: 'Search',
        placeholder: 'Enter a fruit',
        searchList: [
            { text: 'apple', callback: () => alert('apple') },
            { text: 'apricot', callback: () => alert('apricot') },
            { text: 'acai', callback: () => alert('acai') },
            { text: 'banana', callback: () => alert('banana') },
            { text: 'berry', callback: () => alert('berry') },
            { text: 'blueberry', callback: () => alert('blueberry') },
            { text: 'blackberry', callback: () => alert('blackberry') },
            { text: 'cranberry', callback: () => alert('cranberry') },
            { text: 'conkerberry', callback: () => alert('conkerberry') },
            { text: 'calabash', callback: () => alert('calabash') },
            { text: 'clementines', callback: () => alert('clementines') },
            { text: 'kiwi', callback: () => alert('kiwi') },
            { text: 'orange', callback: () => alert('orange') }
        ],
        onSearch: function(searchTerm) {
            alert(`Search fired for ${searchTerm}`);
        },
        callback: () => alert('Search selected!')
    };

    render() {
        return (
            <ComponentPage
                description={`The **Shellbar** offers consistent, responsive navigation across all products and applications. Includes
                    support for branding, product navigation, search, notifications, user settings, and CoPilot. This is
                    a composite component comprised of mandatory and optional elements. Before getting started, here are
                    some things to know.`}
                sourceModulePath={path.join(__dirname, './Shellbar')}
                title='Shellbar'>

                <Example
                    description={`This example shows the minimum Shellbar for a single application product with only user settings. If
                        no user thumbnail is available then display initials.`}
                    title='Basic Shellbar'>
                    <Shellbar
                        logo={<img alt='SAP' src='//unpkg.com/fundamental-styles/dist/images/sap-logo.png' />}
                        productTitle='Corporate Portal'
                        profile={this.profile1}
                        profileMenu={this.profileMenu} />
                </Example>

                <Example
                    description={`This example includes the product menu for navigating to applications within the product and shows a
                        search box.`}
                    title='Product Menu and Search'>
                    <Shellbar
                        logoSAP
                        notifications={this.notifications}
                        productMenu={this.productMenu}
                        productTitle='Corporate Portal'
                        profile={this.profile}
                        profileMenu={this.profileMenu}
                        searchInput={this.searchInput}
                        subtitle='Subtitle' />
                </Example>

                <Example
                    description={`When a product has multiple links, the product links should collapse into an overflow menu on mobile
                        screens. All actions, except for the user menu, should be collapsed.`}
                    title='Links with collapsible menu, CoPilot and Product Switcher'>
                    <Shellbar
                        actions={this.actions}
                        copilot
                        logoSAP
                        notifications={this.notifications2}
                        productMenu={this.productMenu}
                        productSwitcher={this.productSwitcher}
                        productSwitcherList={this.productSwitcherList}
                        productTitle='Corporate Portal'
                        profile={this.profile}
                        profileMenu={this.profileMenu}
                        searchInput={this.searchInput2}
                        subtitle='Subtitle' />
                </Example>

            </ComponentPage>
        );
    }
}
