import { Link } from 'react-router-dom';
import { Menu } from '../';
import path from 'path';
import React from 'react';
import { ComponentPage, Example } from '../_playground';

export const MenuComponent = () => {
    return (
        <ComponentPage
            description={`The **Menu** is the listing structure with optional headers to create menus. Commonly used as the
                contents when composing “dropdowns”, “contextual menus”,  etc, when paired with the **Popover**
                component.`}
            sourceModulePath={path.join(__dirname, './Menu')}
            title='Menu'>

            <Example
                description='The basic stucture of a menu.'
                title='Basic Menu'>
                <Menu>
                    <Menu.List>
                        <Menu.Item url='#'>Option 1</Menu.Item>
                        <Menu.Item url='#'>Option 2</Menu.Item>
                        <Menu.Item url='#'>Option 3</Menu.Item>
                        <Menu.Item url='#'>Option 4</Menu.Item>
                    </Menu.List>
                </Menu>
            </Example>

            <Example
                description='Menu with grouped sub-menus and group headers.'
                title='Menu with Group'>
                <Menu>
                    <Menu.List>
                        <Menu.Item>
                            <Link to='#'>Option 1</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to='#'>Option 2</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to='#'>Option 3</Link>
                        </Menu.Item>
                    </Menu.List>
                    <Menu.Group title='Group Header'>
                        <Menu.List>
                            <Menu.Item>
                                <Link to='#'>Option 4</Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to='#'>Option 5</Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to='#'>Option 6</Link>
                            </Menu.Item>
                        </Menu.List>
                    </Menu.Group>
                </Menu>
            </Example>

            <Example
                description='Menu items with horizontal line as separator.'
                title='Menu with Separator'>
                <Menu>
                    <Menu.List>
                        <Menu.Item separator>
                            <Link to='#'>Option 1</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to='#'>Option 2</Link>
                        </Menu.Item>
                        <Menu.Item separator>
                            <Link to='#'>Option 3</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to='#'>Option 4</Link>
                        </Menu.Item>
                    </Menu.List>
                </Menu>
            </Example>

            <Example
                description='Menu items with an add-on before.'
                title='Menu with Addon Before'>
                <Menu addonBefore>
                    <Menu.List>
                        <Menu.Item>
                            <Link to='#'>Option 1</Link>
                        </Menu.Item>
                        <Menu.Item addon='accept'>
                            <Link to='#'>Option 2</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to='#'>Option 3</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to='#'>Option 4</Link>
                        </Menu.Item>
                    </Menu.List>
                </Menu>
            </Example>

        </ComponentPage>
    );
};
