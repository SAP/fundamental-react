import React from 'react';
import { DocsTile, DocsText, Separator, Header, Description, Import, Properties } from '..';
import { Shellbar } from '..';
var images = require.context('../../assets', true);

export const ShellbarComponent = () => {
    const shellbarExampleCode = ``;

    const actions = [
        {
            glyph: 'bell',
            notificationCount: 23,
            label: 'Notification',
            callback: () => alert('Notification button pressed')
        },
        {
            glyph: 'pool',
            label: 'Pool',
            callback: () => alert('Pool button pressed')
        },
        {
            glyph: 'flight',
            notificationCount: 7,
            label: 'Flight',
            callback: () => alert('Flight button pressed')
        }
    ];

    const user = {
        initials: 'WW'
    };

    const userMenu = [
        { text: 'Settings', callback: () => alert('Settings clicked!') },
        { text: 'Sign Out', callback: () => alert('Sign Out clicked!') }
    ];

 

    const productMenu = [
        { name: 'Application A', callback: () => alert('Application A clicked!') },
        { name: 'Application B', callback: () => alert('Application B clicked!') },
        { name: 'Application C', callback: () => alert('Application C clicked!') },
        { name: 'Application D', callback: () => alert('Application D clicked!') }
    ];

    const productSwitcherList = [
        { title: 'Fiori Home', image: images('./01.png') },
        { title: 'S/4 HANA Cloud', image: images('./02.png') },
        { title: 'Analytics Cloud', image: images('./03.png') },
        { title: 'Ariba', image: images('./04.png') },
        { title: 'SuccessFactors', image: images('./05.png') },
        { title: 'Commerce Cloud', image: images('./06.png') },
        { title: 'Gigya', image: images('./07.png') },
        { title: 'Callidus Cloud', image: images('./08.png') },
        { title: 'Fieldglass', image: images('./09.png') },
        { title: 'Concur', image: images('./10.png') },
        { title: 'Cloud for Customer', image: images('./11.png') },
        { title: 'Cloud Portal', image: images('./12.png') }
    ];

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
                    logo={
                        <img
                            src="//unpkg.com/fiori-fundamentals/dist/images/sap-logo.png"
                            srcSet="//unpkg.com/fiori-fundamentals/dist/images/sap-logo@2x.png 1x, //unpkg.com/fiori-fundamentals/dist/images/sap-logo@3x.png 2x, //unpkg.com/fiori-fundamentals/dist/images/sap-logo@4x.png 3x"
                            alt="SAP"
                        />
                    }
                    productTitle='Corporate Portal'
                    productMenu={productMenu}
                    subtitle='Subtitle'
                    copilot
                    actions={actions}
                    user={user}
                    userMenu={userMenu}
                    productSwitcher={productSwitcherList}
                />
            </DocsTile>
            <DocsText>{shellbarExampleCode}</DocsText>
        </div>
    );
};
