import { Link } from 'react-router-dom';
import { Menu } from '../';
import path from 'path';
import React from 'react';
import { Description, DocsText, DocsTile, Header, Import, Properties, Separator } from '../_playground';

export const MenuComponent = () => {
    const menuCode = `<Menu>
    <Menu.List>
        <Menu.Item url="/">Option 1</Menu.Item>
        <Menu.Item url="/">Option 2</Menu.Item>
        <Menu.Item url="/">Option 3</Menu.Item>
        <Menu.Item url="/">Option 4</Menu.Item>
    </Menu.List>
</Menu>`;

    const menuGroupCode = `<Menu>
    <Menu.List>
        <Menu.Item>
            <Link to='/'>Option 1</Link>
        </Menu.Item>
        <Menu.Item>
            <Link to='/'>Option 2</Link>
        </Menu.Item>
        <Menu.Item>
            <Link to='/'>Option 3</Link>
        </Menu.Item>
    </Menu.List>
    <Menu.Group title="Group Header">
        <Menu.List>
            <Menu.Item>
                <Link to='/'>Option 4</Link>
            </Menu.Item>
            <Menu.Item>
                <Link to='/'>Option 5</Link>
            </Menu.Item>
            <Menu.Item>
                <Link to='/'>Option 6</Link>
            </Menu.Item>
        </Menu.List>
    </Menu.Group>
</Menu>`;

    const menuSeparatorCode = `<Menu>
    <Menu.List>
        <Menu.Item separator>
            <Link to='/'>Option 1</Link>
        </Menu.Item>
        <Menu.Item separator>
            <Link to='/'>Option 2</Link>
        </Menu.Item>
        <Menu.Item separator>
            <Link to='/'>Option 3</Link>
        </Menu.Item>
        <Menu.Item>
            <Link to='/'>Option 4</Link>
        </Menu.Item>
    </Menu.List>
</Menu>`;

    const menuAddonBeforeCode = `<Menu addonBefore={true}>
    <Menu.List>
        <Menu.Item>
            <Link to='/'>Option 1</Link>
        </Menu.Item>
        <Menu.Item addon='accept'>
            <Link to='/'>Option 2</Link>
        </Menu.Item>
        <Menu.Item>
            <Link to='/'>Option 3</Link>
        </Menu.Item>
        <Menu.Item>
            <Link to='/'>Option 4</Link>
        </Menu.Item>
    </Menu.List>
</Menu>`;

    return (
        <div>
            <Header>Menu</Header>
            <Description>
                The **Menu** is the listing structure with optional headers to create menus. Commonly used as the
                contents when composing “dropdowns”, “contextual menus”,  etc, when paired with the **Popover**
                component.
            </Description>
            <Import sourceModulePath={path.join(__dirname, './Menu')} />

            <Separator />

            <Properties sourceModulePath={path.join(__dirname, './Menu')} />

            <Separator />

            <h2>Menu</h2>
            <p>The basic stucture of a menu.</p>
            <DocsTile>
                <Menu>
                    <Menu.List>
                        <Menu.Item url='/'>Option 1</Menu.Item>
                        <Menu.Item url='/'>Option 2</Menu.Item>
                        <Menu.Item url='/'>Option 3</Menu.Item>
                        <Menu.Item url='/'>Option 4</Menu.Item>
                    </Menu.List>
                </Menu>
            </DocsTile>
            <DocsText>{menuCode}</DocsText>
            <Separator />

            <h2>Menu w/ Group</h2>
            <p>Menu with grouped sub-menus and group headers.</p>
            <DocsTile>
                <Menu>
                    <Menu.List>
                        <Menu.Item>
                            <Link to='/'>Option 1</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to='/'>Option 2</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to='/'>Option 3</Link>
                        </Menu.Item>
                    </Menu.List>
                    <Menu.Group title='Group Header'>
                        <Menu.List>
                            <Menu.Item>
                                <Link to='/'>Option 4</Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to='/'>Option 5</Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to='/'>Option 6</Link>
                            </Menu.Item>
                        </Menu.List>
                    </Menu.Group>
                </Menu>
            </DocsTile>
            <DocsText>{menuGroupCode}</DocsText>
            <Separator />

            <h2>Menu w/ Separator</h2>
            <p>Menu items with horizontal line as separator.</p>
            <DocsTile>
                <Menu>
                    <Menu.List>
                        <Menu.Item separator>
                            <Link to='/'>Option 1</Link>
                        </Menu.Item>
                        <Menu.Item separator>
                            <Link to='/'>Option 2</Link>
                        </Menu.Item>
                        <Menu.Item separator>
                            <Link to='/'>Option 3</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to='/'>Option 4</Link>
                        </Menu.Item>
                    </Menu.List>
                </Menu>
            </DocsTile>
            <DocsText>{menuSeparatorCode}</DocsText>
            <Separator />

            <h2>Menu w/ Addon Before</h2>
            <p>Menu items with an add-on before.</p>
            <DocsTile>
                <Menu addonBefore>
                    <Menu.List>
                        <Menu.Item>
                            <Link to='/'>Option 1</Link>
                        </Menu.Item>
                        <Menu.Item addon='accept'>
                            <Link to='/'>Option 2</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to='/'>Option 3</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to='/'>Option 4</Link>
                        </Menu.Item>
                    </Menu.List>
                </Menu>
            </DocsTile>
            <DocsText>{menuAddonBeforeCode}</DocsText>
        </div>
    );
};
