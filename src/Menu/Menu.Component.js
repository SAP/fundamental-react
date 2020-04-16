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
                description='Menu item states - selected, active, and disabled.'
                title='Menu with Separator'>
                <Menu>
                    <Menu.List>
                        <Menu.Item separator>
                            <Link to='#'>Option 1</Link>
                        </Menu.Item>
                        <Menu.Item active>
                            <Link to='#'>Option 2</Link>
                        </Menu.Item>
                        <Menu.Item selected>
                            <Link to='#'>Option 3</Link>
                        </Menu.Item>
                        <Menu.Item disabled>
                            <Link to='#'>Option 4</Link>
                        </Menu.Item>
                    </Menu.List>
                </Menu>
            </Example>

            <Example
                description='Menu items with an add-on before or after.'
                title='Menu with Add-on'>
                <Menu>
                    <Menu.List>
                        <Menu.Item addonBefore='grid'>
                            <Link to='#'>Option 1</Link>
                        </Menu.Item>
                        <Menu.Item addonBefore='wrench'>
                            <Link to='#'>Option 2</Link>
                        </Menu.Item>
                        <Menu.Item addonAfter='accept' addonBefore='history'>
                            <Link to='#'>Option 3</Link>
                        </Menu.Item>
                        <Menu.Item addonBefore='lightbulb'>
                            <Link to='#'>Option 4</Link>
                        </Menu.Item>
                    </Menu.List>
                </Menu>
            </Example>

        </ComponentPage>
    );
};
