import React from 'react';
import { DocsTile, DocsText, Separator, Header, Description, Import, Properties } from '..';
import {
    Shellbar,
    ShellbarLogo,
    ShellbarTitle,
    ProductMenu,
    ProductMenuControl,
    ShellbarSubtitle,
    ShellbarAction,
    UserMenu,
    UserMenuControl, 
    ShellbarCollapse,
    ShellbarCollapseControl,
    ProductSwitcher,
    ProductSwitcherBody,
    ProductSwitcherProductTitle
} from '..';

export const ShellbarComponent = () => {
    const shellbarExampleCode = ``;

    return (
        <div>
            <Header>Shellbar</Header>
            <Description />
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
                        <ShellbarLogo>
                            <img
                                src="//unpkg.com/fiori-fundamentals/dist/images/sap-logo.png"
                                srcset="//unpkg.com/fiori-fundamentals/dist/images/sap-logo@2x.png 1x, //unpkg.com/fiori-fundamentals/dist/images/sap-logo@3x.png 2x, //unpkg.com/fiori-fundamentals/dist/images/sap-logo@4x.png 3x"
                                alt="SAP"
                            />
                        </ShellbarLogo>
                    }
                    copilot
                />
            </DocsTile>
            <DocsText>{shellbarExampleCode}</DocsText>

            <Separator />
        </div>
    );
};
