import React from 'react';
import {} from '../';
import { DocsTile, DocsText, Separator, Header, Description, Import, Properties } from '..';
import { Navbar } from '..';

export const NavbarComponent = () => {
    const navbarCode = ``;

    return (
        <div>
            <Header>Navigation Bar</Header>
            <Description>
                The navigation bar (Navbar) component offers a similar navigation approach between Hybris applications.
                It allows for branding, application groupings, access to a left navigation, switch between applications,
                contexts and access tooling such as search or a users’ profile.
            </Description>
            <Import module="Navbar" path="/fundamental-react/src/" />

            <Separator />

            <Properties type="Inputs" properties={[{ name: 'input', description: 'type - description' }]} />

            <Separator />

            <DocsTile>
                <Navbar />
            </DocsTile>
            <DocsText>{navbarCode}</DocsText>

            <Separator />
        </div>
    );
};
