import Menu from '../Menu/Menu';
import { mount } from 'enzyme';
import React from 'react';
import Shellbar from './Shellbar';

describe('<Shellbar />', () => {
    const profile1 = {
        initials: 'JS',
        userName: 'John Snow',
        colorAccent: 8
    };

    const profileMenu = [
        {
            name: 'Settings',
            glyph: 'action-settings',
            size: 's',
            callback: () => alert('Settings selected!')
        },
        {
            name: 'Sign Out',
            glyph: 'log',
            size: 's',
            callback: () => alert('Sign Out selected!')
        }
    ];

    const simpleShellBarWithBackButton = (
        <Shellbar
            backAction={()=>{}}
            className='blue'
            logo={
                <img
                    alt='SAP'
                    src='//unpkg.com/fundamental-styles/dist/images/sap-logo.png' />
            }
            productTitle='Corporate Portal'
            profile={profile1}
            profileMenu={profileMenu} />
    );

    const searchInput = {
        label: 'Search',
        placeholder: 'Enter a fruit',
        onSearch: function(searchTerm) {
            alert(`Search fired for ${searchTerm}`);
        },
        callback: () => alert('Search selected!')
    };

    const actions = [
        {
            glyph: 'settings',
            label: 'Settings',
            notificationCount: 5,
            callback: () => alert('Settings selected!'),
            menu: (
                <Menu>
                    <Menu.List>
                        <Menu.Item url='/'>Option 1</Menu.Item>
                        <Menu.Item url='/'>Option 2</Menu.Item>
                        <Menu.Item url='/'>Option 3</Menu.Item>
                    </Menu.List>
                </Menu>
            )
        }
    ];

    const notifications = {
        notificationCount: 2,
        label: 'Notifications',
        notificationsBody: (
            <Menu>
                <Menu.List>
                    <Menu.Item url='/'>Notification 1</Menu.Item>
                    <Menu.Item url='/'>Notification 2</Menu.Item>
                    <Menu.Item url='/'>Notification 3</Menu.Item>
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

    const profile = {
        initials: 'JS',
        userName: 'John Snow',
        colorAccent: 8
    };

    const productMenu = [
        { name: 'Application A', callback: () => alert('Application A selected!'), glyph: 'log' },
        { name: 'Application B', callback: () => alert('Application B selected!') },
        { name: 'Application C', callback: () => alert('Application C selected!') },
        { name: 'Application D', callback: () => alert('Application D selected!') }
    ];

    const productSwitchList = [
        {
            title: 'Fiori Home',
            glyph: 'home',
            callback: () => alert('Fiori Home selected!')
        },
        {
            title: 'S/4 HANA Cloud',
            glyph: 'cloud',
            callback: () => alert('S/4 HANA Cloud selected!')
        }
    ];

    const productSwitch = {
        label: 'Product Switch'
    };

    const coPilotShell = (
        <Shellbar
            actions={actions}
            copilot
            logoSAP
            notifications={notifications}
            productMenu={productMenu}
            productSwitch={productSwitch}
            productSwitchList={productSwitchList}
            productTitle='Corporate Portal'
            profile={profile}
            profileMenu={profileMenu}
            searchInput={searchInput}
            subtitle='Subtitle' />
    );

    afterEach(() => {
        document.body.innerHTML = '';
    });

    afterAll(() => {
        document.body.innerHTML = '';
    });

    test('click back button from collapsed product switch', () => {
        const wrapper = mount(coPilotShell);

        wrapper.find('.fd-popover__control .fd-shellbar-collapse--control').simulate('click');

        wrapper.find('a.fd-menu__link i.sap-icon--grid').simulate('click');
        wrapper.find('span.fd-menu.sap-icon--nav-back').simulate('click');

        expect(wrapper.children().state(['showCollapsedProductSwitchMenu'])).toBeFalsy();
    });

    test('click back button on shellbar with back button', () => {
        const wrapper = mount(simpleShellBarWithBackButton);

        expect(wrapper.find('.fd-button--back')).toBeTruthy();
    });

    describe('Prop spreading', () => {
        xtest('should allow props to be spread to the Shellbar component', () => {
            // TODO: placeholder for this test description once that functionality is built

            // NOTE: there are numerous other elements and components contained within Shellbar
            // so there should be tests added for each once the functionality is present.

            const element = mount(<Shellbar data-sample='Sample' />);

            expect(element.getDOMNode().attributes['data-sample'].value).toBe(
                'Sample'
            );
        });
    });
});
