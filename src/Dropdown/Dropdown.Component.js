import path from 'path';
import React from 'react';
import { Button, Dropdown, Menu, Popover } from '../';
import { ComponentPage, Example } from '../_playground';

export const DropdownComponent = () => {
    return (
        <ComponentPage
            description={`The **Dropdown** component lets the user select one of the different options.
                It is more flexible than the normal Select.`}
            sourceModulePath={path.join(__dirname, './Dropdown')}
            title='Dropdown'>

            <Example
                centered
                title='Default Dropdown'>
                <div className='fd-doc__margin'>
                    <Dropdown>
                        <Popover
                            body={
                                <Menu>
                                    <Menu.List>
                                        <Menu.Item url='/'>Option 1</Menu.Item>
                                        <Menu.Item url='/'>Option 2</Menu.Item>
                                        <Menu.Item url='/'>Option 3</Menu.Item>
                                        <Menu.Item url='/'>Option 4</Menu.Item>
                                    </Menu.List>
                                </Menu>
                            }
                            control={<Button dropdown>Select</Button>}
                            id='jhqD0555'
                            noArrow />
                    </Dropdown>

                    <Dropdown>
                        <Popover
                            body={
                                <Menu>
                                    <Menu.List>
                                        <Menu.Item url='/'>Option 1</Menu.Item>
                                        <Menu.Item url='/'>Option 2</Menu.Item>
                                        <Menu.Item url='/'>Option 3</Menu.Item>
                                        <Menu.Item url='/'>Option 4</Menu.Item>
                                    </Menu.List>
                                </Menu>
                            }
                            control={
                                <Button compact dropdown>
                                    Select
                                </Button>
                            }
                            id='jhqD0556'
                            noArrow />
                    </Dropdown>
                </div>
            </Example>

            <Example
                centered
                description='It can also include complementary information like an icon.'
                title='Dropdown with Icon'>
                <div className='fd-doc__margin'>
                    <Dropdown>
                        <Popover
                            body={
                                <Menu>
                                    <Menu.List>
                                        <Menu.Item url='/'>Option 1</Menu.Item>
                                        <Menu.Item url='/'>Option 2</Menu.Item>
                                        <Menu.Item url='/'>Option 3</Menu.Item>
                                        <Menu.Item url='/'>Option 4</Menu.Item>
                                    </Menu.List>
                                </Menu>
                            }
                            control={
                                <Button dropdown glyph='filter'>
                                    Select
                                </Button>
                            }
                            id='jhqD0557'
                            noArrow />
                    </Dropdown>

                    <Dropdown>
                        <Popover
                            body={
                                <Menu>
                                    <Menu.List>
                                        <Menu.Item url='/'>Option 1</Menu.Item>
                                        <Menu.Item url='/'>Option 2</Menu.Item>
                                        <Menu.Item url='/'>Option 3</Menu.Item>
                                        <Menu.Item url='/'>Option 4</Menu.Item>
                                    </Menu.List>
                                </Menu>
                            }
                            control={
                                <Button compact dropdown
                                    glyph='filter'>
                                    Select
                                </Button>
                            }
                            id='jhqD0558'
                            noArrow />
                    </Dropdown>
                </div>
            </Example>

            <Example
                centered
                title='Toolbar Dropdown'>
                <div className='fd-doc__margin'>
                    <Dropdown standard>
                        <Popover
                            body={
                                <Menu>
                                    <Menu.List>
                                        <Menu.Item url='/'>Option 1</Menu.Item>
                                        <Menu.Item url='/'>Option 2</Menu.Item>
                                        <Menu.Item url='/'>Option 3</Menu.Item>
                                        <Menu.Item url='/'>Option 4</Menu.Item>
                                    </Menu.List>
                                </Menu>
                            }
                            control={
                                <Button dropdown type='standard'>
                                    Select
                                </Button>
                            }
                            id='jhqD0559'
                            noArrow />
                    </Dropdown>

                    <Dropdown standard>
                        <Popover
                            body={
                                <Menu>
                                    <Menu.List>
                                        <Menu.Item url='/'>Option 1</Menu.Item>
                                        <Menu.Item url='/'>Option 2</Menu.Item>
                                        <Menu.Item url='/'>Option 3</Menu.Item>
                                        <Menu.Item url='/'>Option 4</Menu.Item>
                                    </Menu.List>
                                </Menu>
                            }
                            control={
                                <Button compact dropdown
                                    type='standard'>
                                    Select
                                </Button>
                            }
                            id='jhqD0560'
                            noArrow />
                    </Dropdown>
                </div>
            </Example>

            <Example
                centered
                title='Disabled State'>
                <div className='fd-doc__margin'>
                    <Dropdown>
                        <Popover
                            body={
                                <Menu>
                                    <Menu.List>
                                        <Menu.Item url='/'>Option 1</Menu.Item>
                                        <Menu.Item url='/'>Option 2</Menu.Item>
                                        <Menu.Item url='/'>Option 3</Menu.Item>
                                        <Menu.Item url='/'>Option 4</Menu.Item>
                                    </Menu.List>
                                </Menu>
                            }
                            control={
                                <Button disabled dropdown
                                    glyph='filter'>
                                    Select
                                </Button>
                            }
                            disabled
                            id='jhqD0561'
                            noArrow />
                    </Dropdown>
                </div>
            </Example>

        </ComponentPage>
    );
};
