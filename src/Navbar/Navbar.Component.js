import React from 'react';
import {} from '../';
import { DocsTile, DocsText, Separator, Header, Description, Import, Properties } from '..';
import {
    Button,
    Popover,
    Menu,
    MenuList,
    MenuItem,
    Identifier,
    Navbar,
    NavbarGroup,
    NavbarActions,
    NavbarElement
} from '../';

export const NavbarComponent = () => {
    const navbarCode = `<Navbar>
    <NavbarGroup alignment="left">
        <NavbarElement type="side-menu">
            <Button option="light" glyph="menu2" navbar />
        </NavbarElement>
        <NavbarElement type="logo" noMargin="left" />
        <NavbarElement type="product-name">Product Name</NavbarElement>
    </NavbarGroup>

    <NavbarGroup launchpad>
            <Popover
                control={
                    <Button option="light">
                        Suite Name
                    </Button>
                }
                noArrow
                body={
                    <Menu>
                        <MenuList>
                            <MenuItem url="/">Option 1</MenuItem>
                            <MenuItem url="/">Option 2</MenuItem>
                            <MenuItem url="/">Option 3</MenuItem>
                            <MenuItem url="/">Option 4</MenuItem>
                        </MenuList>
                    </Menu>
                }
            />
    </NavbarGroup>

    <NavbarGroup alignment="right">
        <NavbarElement type="context-menu">
            <Popover
                control={<Button option="light">Context Switcher</Button>}
                body={
                    <Menu>
                        <MenuList>
                            <MenuItem url="/">Option 1</MenuItem>
                            <MenuItem url="/">Option 2</MenuItem>
                            <MenuItem url="/">Option 3</MenuItem>
                            <MenuItem url="/">Option 4</MenuItem>
                        </MenuList>
                    </Menu>
                }
            />
        </NavbarElement>

        <NavbarActions>
            <Button option="light" glyph="search" navbar />
            <Button option="light" glyph="action-settings" navbar />
            <Button option="light" navbar>
                <Identifier size="s" modifier="circle">
                    WW
                </Identifier>
            </Button>
        </NavbarActions>
    </NavbarGroup>
</Navbar>`;

    return (
        <div>
            <Header>Navigation Bar</Header>
            <Description>
                The navigation bar (Navbar) component offers a similar navigation approach between Hybris applications.
                It allows for branding, application groupings, access to a left navigation, switch between applications,
                contexts and access tooling such as search or a users’ profile.
            </Description>
            <Import module='Navbar' path='/fundamental-react/src/' />

            <Separator />

            <Properties
                type='Inputs'
                properties={[
                    {
                        name: 'alignment',
                        description:
                            'string - The position of the group in the navigation bar. Oprions include \'left\' and \'right\'. For default (middle) leave empty.'
                    },
                    {
                        name: 'launchpad',
                        description: 'bool - When set to true, renders a navigation group as a launchpad.'
                    },
                    {
                        name: 'noMargin',
                        description:
                            'string - Renders the NavbarElement with no margin on either left or right side. Oprions include \'left\' and \'right\'. For default leave empty.'
                    },
                    {
                        name: 'type',
                        description:
                            'string (required)- The type of the NavbarElement. Oprions include \'search\', \'context-menu\', \'product-name\', \'logo\', and \'side-menu\'. '
                    }
                ]} />

            <Separator />

            <DocsTile>
                <Navbar>
                    <NavbarGroup alignment='left'>
                        <NavbarElement type='side-menu'>
                            <Button option='light' glyph='menu2'
                                navbar />
                        </NavbarElement>
                        <NavbarElement type='logo' noMargin='left' />
                        <NavbarElement type='product-name'>Product Name</NavbarElement>
                    </NavbarGroup>

                    <NavbarGroup launchpad>
                        <Popover
                            control={<Button option='light'>Suite Name</Button>}
                            noArrow
                            body={
                                <Menu>
                                    <MenuList>
                                        <MenuItem url='/'>Option 1</MenuItem>
                                        <MenuItem url='/'>Option 2</MenuItem>
                                        <MenuItem url='/'>Option 3</MenuItem>
                                        <MenuItem url='/'>Option 4</MenuItem>
                                    </MenuList>
                                </Menu>
                            } />
                    </NavbarGroup>

                    <NavbarGroup alignment='right'>
                        <NavbarElement type='context-menu'>
                            <Popover
                                control={<Button option='light'>Context Switcher</Button>}
                                body={
                                    <Menu>
                                        <MenuList>
                                            <MenuItem url='/'>Option 1</MenuItem>
                                            <MenuItem url='/'>Option 2</MenuItem>
                                            <MenuItem url='/'>Option 3</MenuItem>
                                            <MenuItem url='/'>Option 4</MenuItem>
                                        </MenuList>
                                    </Menu>
                                } />
                        </NavbarElement>

                        <NavbarActions>
                            <Button option='light' glyph='search'
                                navbar />
                            <Button option='light' glyph='action-settings'
                                navbar />
                            <Button option='light' navbar>
                                <Identifier size='s' modifier='circle'>
                                    WW
                                </Identifier>
                            </Button>
                        </NavbarActions>
                    </NavbarGroup>
                </Navbar>
            </DocsTile>
            <DocsText>{navbarCode}</DocsText>

            <Separator />
        </div>
    );
};
