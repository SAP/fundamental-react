import { Link } from 'react-router-dom';
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
        <MenuItem>
            <Link to='/'>Option 1</Link>
        </MenuItem>
        <MenuItem>
            <Link to='/'>Option 2</Link>
        </MenuItem>
        <MenuItem>
            <Link to='/'>Option 3</Link>
        </MenuItem>
    </MenuList>
    <MenuGroup title="Group Header">
        <MenuList>
            <MenuItem>
                <Link to='/'>Option 4</Link>
            </MenuItem>
            <MenuItem>
                <Link to='/'>Option 5</Link>
            </MenuItem>
            <MenuItem>
                <Link to='/'>Option 6</Link>
            </MenuItem>
        </MenuList>
    </MenuGroup>
</Menu>`;

    const menuSeparatorCode = `<Menu>
    <MenuList>
        <MenuItem separator>
            <Link to='/'>Option 1</Link>
        </MenuItem>
        <MenuItem separator>
            <Link to='/'>Option 2</Link>
        </MenuItem>
        <MenuItem separator>
            <Link to='/'>Option 3</Link>
        </MenuItem>
        <MenuItem>
            <Link to='/'>Option 4</Link>
        </MenuItem>
    </MenuList>
</Menu>`;

    const menuAddonBeforeCode = `<Menu addonBefore={true}>
    <MenuList>
        <MenuItem>
            <Link to='/'>Option 1</Link>
        </MenuItem>
        <MenuItem addon='accept'>
            <Link to='/'>Option 2</Link>
        </MenuItem>
        <MenuItem>
            <Link to='/'>Option 3</Link>
        </MenuItem>
        <MenuItem>
            <Link to='/'>Option 4</Link>
        </MenuItem>
    </MenuList>
</Menu>`;

    return (
        <div>
            <Header>Menu</Header>
            <Description>
                The menu component is the listing structure with optional headers to create menus. Commonly used as the
                contents when composing “dropdowns”, “contextual menus”,  etc, when paired with the popover
                component.
            </Description>
            <Import sourceModule={require('./Menu')} />

            <Separator />

            <Properties
                properties={[
                    {
                        name: 'addonBefore',
                        description: 'bool - when set to true, enables menu items with addon before.'
                    }
                ]}
                type='Inputs' />

            <Properties
                properties={[
                    {
                        name: 'addon',
                        description: 'string - the name of the SAP icon to be applied as an addon before.'
                    },
                    {
                        name: 'addonProps',
                        description: 'object - additional props to be spread to the addon section'
                    },
                    { name: 'children', description: 'component - can be used to pass React Router <Link> or any other component which emits an <a>.' },
                    { name: 'separator', description: 'bool - when set to true, adds a horizontal line (separator).' },
                    { name: 'url', description: 'string - href attribute of <a> tag. Use either \'url\' or \'link\'' },
                    {
                        name: 'urlProps',
                        description: 'object - additional props to be spread to the Menu Item Url links'
                    }
                ]}
                type='MenuItem Inputs' />

            <Properties
                properties={[
                    {
                        name: 'title',
                        description: 'string - group header title.'
                    },
                    {
                        name: 'titleProps',
                        description: 'object - additional props to be spread to the Menu Group title'
                    }
                ]}
                type='MenuGroup Inputs' />

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
                        <MenuItem>
                            <Link to='/'>Option 1</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to='/'>Option 2</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to='/'>Option 3</Link>
                        </MenuItem>
                    </MenuList>
                    <MenuGroup title='Group Header'>
                        <MenuList>
                            <MenuItem>
                                <Link to='/'>Option 4</Link>
                            </MenuItem>
                            <MenuItem>
                                <Link to='/'>Option 5</Link>
                            </MenuItem>
                            <MenuItem>
                                <Link to='/'>Option 6</Link>
                            </MenuItem>
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
                        <MenuItem separator>
                            <Link to='/'>Option 1</Link>
                        </MenuItem>
                        <MenuItem separator>
                            <Link to='/'>Option 2</Link>
                        </MenuItem>
                        <MenuItem separator>
                            <Link to='/'>Option 3</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to='/'>Option 4</Link>
                        </MenuItem>
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
                        <MenuItem>
                            <Link to='/'>Option 1</Link>
                        </MenuItem>
                        <MenuItem addon='accept'>
                            <Link to='/'>Option 2</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to='/'>Option 3</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to='/'>Option 4</Link>
                        </MenuItem>
                    </MenuList>
                </Menu>
            </DocsTile>
            <DocsText>{menuAddonBeforeCode}</DocsText>
            <Separator />
        </div>
    );
};
