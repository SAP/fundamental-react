import React from 'react';
import { DocsTile, DocsText, Separator, Header, Description, Import, Properties, Menu, MenuList, MenuItem } from '..';
import { Shellbar } from '..';
var images = require.context('../../assets', true);

export const ShellbarComponent = () => {
    const shellbarExampleCode = `<Shellbar
    logo={<img src="//unpkg.com/fiori-fundamentals/dist/images/sap-logo.png" alt="SAP" />}
    productTitle="Corporate Portal"
    productMenu={productMenu}
    subtitle="Subtitle"
    copilot
    actions={actions}
    user={user}
    userMenu={userMenu}
    productSwitcher={productSwitcherList}
    productSwitcherCollapsed={productSwitcherCollapsed}
/>

const productMenu = [
    { name: 'Application A', callback: () => alert('Application A selected!') },
    { name: 'Application B', callback: () => alert('Application B selected!') },
    { name: 'Application C', callback: () => alert('Application C selected!') },
    { name: 'Application D', callback: () => alert('Application D selected!') }
];

const actions = [
    { glyph: 'bell', notificationCount: 21, label: 'Notification', callback: () => alert('Notification selected!')},
    { glyph: 'post', notificationCount: 4, label: 'Post', callback: () => alert('Post selected!')},
    { glyph: 'settings', label: 'Settings', notificationCount: 0, callback: () => alert('Settings selected!'), menu: (
        <Menu>
            <MenuList>
                <MenuItem url="/">Option 1</MenuItem>
                <MenuItem url="/">Option 2</MenuItem>
                <MenuItem url="/">Option 3</MenuItem>
            </MenuList>
        </Menu>
    )}
];

const user = {
    initials: 'JS',
    userName: 'John Snow'
};

const userMenu = [
    { name: 'Settings', glyph: 'action-settings', size: 's', callback: () => alert('Settings selected!') },
    { name: 'Sign Out', glyph: 'log', size: 's', callback: () => alert('Sign Out selected!') }
];

const productSwitcher = {
    label: 'Product Switcher',
    glyph: 'grid',
    callback: () => alert('Product Switcher selected!')
};

const productSwitcherList = [
    { title: 'Fiori Home', image: images('./01.png'), callback: () => alert('Fiori Home selected!') },
    { title: 'S/4 HANA Cloud', image: images('./02.png'), callback: () => alert('S/4 HANA Cloud selected!') },
    { title: 'Analytics Cloud', image: images('./03.png'), callback: () => alert('Analytics Cloud selected!') },
    { title: 'Ariba', image: images('./04.png'), callback: () => alert('Ariba selected!') },
    { title: 'SuccessFactors', image: images('./05.png'), callback: () => alert('SuccessFactors selected!') },
    { title: 'Commerce Cloud', image: images('./06.png'), callback: () => alert('Commerce Cloud selected!') },
    { title: 'Gigya', image: images('./07.png'), callback: () => alert('Gigya selected!') },
    { title: 'Callidus Cloud', image: images('./08.png'), callback: () => alert('Callidus Cloud selected!') },
    { title: 'Fieldglass', image: images('./09.png'), callback: () => alert('Fieldglass selected!') },
    { title: 'Concur', image: images('./10.png'), callback: () => alert('Concur selected!') },
    { title: 'Cloud for Customer', image: images('./11.png'), callback: () => alert('Cloud for Customer selected!')},
    { title: 'Cloud Portal', image: images('./12.png'), callback: () => alert('Cloud Portal selected!') }
];
`;

    const actions = [
        {
            glyph: 'bell',
            notificationCount: 21,
            label: 'Notification',
            callback: () => alert('Notification selected!')
        },
        {
            glyph: 'post',
            notificationCount: 4,
            label: 'Post',
            callback: () => alert('Post selected!')
        },
        {
            glyph: 'settings',
            label: 'Settings',
            notificationCount: 0,
            callback: () => alert('Settings selected!'),
            menu: (
                <Menu>
                    <MenuList>
                        <MenuItem url="/">Option 1</MenuItem>
                        <MenuItem url="/">Option 2</MenuItem>
                        <MenuItem url="/">Option 3</MenuItem>
                    </MenuList>
                </Menu>
            )
        }
    ];

    const user = {
        initials: 'JS',
        userName: 'John Snow'
    };

    const userMenu = [
        { name: 'Settings', glyph: 'action-settings', size: 's', callback: () => alert('Settings selected!') },
        { name: 'Sign Out', glyph: 'log', size: 's', callback: () => alert('Sign Out selected!') }
    ];

    const productMenu = [
        { name: 'Application A', callback: () => alert('Application A selected!') },
        { name: 'Application B', callback: () => alert('Application B selected!') },
        { name: 'Application C', callback: () => alert('Application C selected!') },
        { name: 'Application D', callback: () => alert('Application D selected!') }
    ];

    const productSwitcherList = [
        { title: 'Fiori Home', image: images('./01.png'), callback: () => alert('Fiori Home selected!') },
        { title: 'S/4 HANA Cloud', image: images('./02.png'), callback: () => alert('S/4 HANA Cloud selected!') },
        { title: 'Analytics Cloud', image: images('./03.png'), callback: () => alert('Analytics Cloud selected!') },
        { title: 'Ariba', image: images('./04.png'), callback: () => alert('Ariba selected!') },
        { title: 'SuccessFactors', image: images('./05.png'), callback: () => alert('SuccessFactors selected!') },
        { title: 'Commerce Cloud', image: images('./06.png'), callback: () => alert('Commerce Cloud selected!') },
        { title: 'Gigya', image: images('./07.png'), callback: () => alert('Gigya selected!') },
        { title: 'Callidus Cloud', image: images('./08.png'), callback: () => alert('Callidus Cloud selected!') },
        { title: 'Fieldglass', image: images('./09.png'), callback: () => alert('Fieldglass selected!') },
        { title: 'Concur', image: images('./10.png'), callback: () => alert('Concur selected!') },
        {
            title: 'Cloud for Customer',
            image: images('./11.png'),
            callback: () => alert('Cloud for Customer selected!')
        },
        { title: 'Cloud Portal', image: images('./12.png'), callback: () => alert('Cloud Portal selected!') }
    ];

    const productSwitcher = {
        label: 'Product Switcher',
        glyph: 'grid',
        callback: () => alert('Product Switcher selected!')
    };

    return (
        <div>
            <Header>Links with collapsible menu, CoPilot and Product Switcher</Header>
            <Description>
                When a product has multiple links, the product links should collapse into an overflow menu on mobile
                screens. All actions, except for the user menu, should be collapsed. See the placement of the{' '}
                <code>&lt;fd-shellbar-collapse></code> container below.
            </Description>
            <Import module="Shellbar" path="/fundamental-react/src/" />
            <Separator />
            <Properties
                type="Inputs"
                properties={[
                    {
                        name: '',
                        description: ''
                    }
                ]}
            />
            <Separator />
            <DocsTile>
                <Shellbar
                    logo={<img src="//unpkg.com/fiori-fundamentals/dist/images/sap-logo.png" alt="SAP" />}
                    productTitle="Corporate Portal"
                    productMenu={productMenu}
                    subtitle="Subtitle"
                    copilot
                    actions={actions}
                    user={user}
                    userMenu={userMenu}
                    productSwitcherList={productSwitcherList}
                    productSwitcher={productSwitcher}
                />
            </DocsTile>
            <DocsText>{shellbarExampleCode}</DocsText>
        </div>
    );
};
