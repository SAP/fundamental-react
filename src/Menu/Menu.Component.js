import React from 'react';
import { Description, DocsText, DocsTile, Header, Import, Properties, Separator } from '../_playground';
import { Menu, MenuGroup, MenuItem, MenuList } from '../';

export const MenuComponent = () => {
    const menuCode = `<Menu>
    <MenuList>
        <MenuItem url="/">Option 1</MenuItem>
        <MenuItem url="/">Option 2</MenuItem>
        <MenuItem url="/">Option 3</MenuItem>
        <MenuItem url="/">Option 4</MenuItem>
    </MenuList>
</Menu>`;

    const menuGroupCode = `<Menu>
    <MenuList>
        <MenuItem link="/">Option 1</MenuItem>
        <MenuItem link="/">Option 2</MenuItem>
        <MenuItem link="/">Option 3</MenuItem>
    </MenuList>
    <MenuGroup title="Group Header">
        <MenuList>
            <MenuItem link="/">Option 4</MenuItem>
            <MenuItem link="/">Option 5</MenuItem>
            <MenuItem link="/">Option 6</MenuItem>
        </MenuList>
    </MenuGroup>
</Menu>`;

    const menuSeparatorCode = `<Menu>
    <MenuList>
        <MenuItem link="/" separator>
            Option 1
        </MenuItem>
        <MenuItem link="/" separator>
            Option 2
        </MenuItem>
        <MenuItem link="/" separator>
            Option 3
        </MenuItem>
        <MenuItem link="/">Option 4</MenuItem>
    </MenuList>
</Menu>`;

    const menuAddonBeforeCode = `<Menu addonBefore={true}>
    <MenuList>
        <MenuItem link="/">Option 1</MenuItem>
        <MenuItem link="/" addon="accept">Option 2</MenuItem>
        <MenuItem link="/">Option 3</MenuItem>
        <MenuItem link="/">Option 4</MenuItem>
    </MenuList>
</Menu>`;

    return (
        <div>
            <Header>Menu</Header>
            <Description>
                The menu component is the listing structure with optional headers to create menus. Commonly used as the
                contents when composing “dropdowns”, “contextual menus”, “mega menu”, etc, when paired with the popover
                component.
            </Description>
            <Import sourceModule={require('./Menu')} />

            <Separator />

            <Properties sourceModule={require('./Menu')} />

            <Separator />

            <h2>Menu</h2>
            <p>The basic stucture of a menu.</p>
            <DocsTile>
                <Menu>
                    <MenuList>
                        <MenuItem url='/'>Option 1</MenuItem>
                        <MenuItem url='/'>Option 2</MenuItem>
                        <MenuItem url='/'>Option 3</MenuItem>
                        <MenuItem url='/'>Option 4</MenuItem>
                    </MenuList>
                </Menu>
            </DocsTile>
            <DocsText>{menuCode}</DocsText>
            <Separator />

            <h2>Menu w/ Group</h2>
            <p>Menu with grouped sub-menus and group headers.</p>
            <DocsTile>
                <Menu>
                    <MenuList>
                        <MenuItem link='/'>Option 1</MenuItem>
                        <MenuItem link='/'>Option 2</MenuItem>
                        <MenuItem link='/'>Option 3</MenuItem>
                    </MenuList>
                    <MenuGroup title='Group Header'>
                        <MenuList>
                            <MenuItem link='/'>Option 4</MenuItem>
                            <MenuItem link='/'>Option 5</MenuItem>
                            <MenuItem link='/'>Option 6</MenuItem>
                        </MenuList>
                    </MenuGroup>
                </Menu>
            </DocsTile>
            <DocsText>{menuGroupCode}</DocsText>
            <Separator />

            <h2>Menu w/ Separator</h2>
            <p>Menu items with horizontal line as separator.</p>
            <DocsTile>
                <Menu>
                    <MenuList>
                        <MenuItem link='/' separator>
                            Option 1
                        </MenuItem>
                        <MenuItem link='/' separator>
                            Option 2
                        </MenuItem>
                        <MenuItem link='/' separator>
                            Option 3
                        </MenuItem>
                        <MenuItem link='/'>Option 4</MenuItem>
                    </MenuList>
                </Menu>
            </DocsTile>
            <DocsText>{menuSeparatorCode}</DocsText>
            <Separator />

            <h2>Menu w/ Addon Before</h2>
            <p>Menu items with an addon before.</p>
            <DocsTile>
                <Menu addonBefore>
                    <MenuList>
                        <MenuItem link='/'>Option 1</MenuItem>
                        <MenuItem addon='accept' link='/'>
                            Option 2
                        </MenuItem>
                        <MenuItem link='/'>Option 3</MenuItem>
                        <MenuItem link='/'>Option 4</MenuItem>
                    </MenuList>
                </Menu>
            </DocsTile>
            <DocsText>{menuAddonBeforeCode}</DocsText>
        </div>
    );
};
