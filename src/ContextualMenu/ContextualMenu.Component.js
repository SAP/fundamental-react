import React from 'react';
import { DocsTile, DocsText, Separator, Header, Description } from '../';
import { Popover, Button, Menu, MenuList, MenuItem } from '../';

export const ContextualMenuComponent = () => {
    const contextualMenuIconCode = `<Popover
    control={<Button option="light" glyph="vertical-grip" />}
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
/>`;

    const contextualMenuMoreTextCode = `<Popover
    control={<Button>More</Button>}
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

<Popover
    control={<Button option="light">More</Button>}
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
/>`;

    return (
        <div>
            <Header>Contextual Menu</Header>
            <Description>
                The contextual menu component is an opinionated composition of the “Popover” and “Menu” components with
                the use of a styled button (Button component). A More icon (glyph="vertical-grip") or the word, “More”,
                is used to indicate there are more options than room to display them. On click or tap, a contextual menu
                opens. <br />
                This component is completely composed from other components CSS and doesn’t have any of its own.
            </Description>

            <Separator />

            <h2>With Icon</h2>
            <DocsTile centered>
                <Popover
                    control={<Button option='light' glyph='vertical-grip' />}
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
            </DocsTile>
            <DocsText>{contextualMenuIconCode}</DocsText>
            <Separator />

            <h2>With Text Button</h2>
            <DocsTile centered>
                <Popover
                    control={<Button>More</Button>}
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

                <Popover
                    control={<Button option='light'>More</Button>}
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
            </DocsTile>
            <DocsText>{contextualMenuMoreTextCode}</DocsText>
            <Separator />
        </div>
    );
};
