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
                <Dropdown>
                    <Popover
                        body={
                            <Menu>
                                <Menu.List>
                                    <Menu.Item url='#'>Option 1</Menu.Item>
                                    <Menu.Item url='#'>Option 2</Menu.Item>
                                    <Menu.Item url='#'>Option 3</Menu.Item>
                                    <Menu.Item url='#'>Option 4</Menu.Item>
                                </Menu.List>
                            </Menu>
                        }
                        control={<Button className='fd-dropdown__control'>Select</Button>}
                        id='jhqD0555'
                        noArrow />
                </Dropdown>

                <Dropdown>
                    <Popover
                        body={
                            <Menu>
                                <Menu.List>
                                    <Menu.Item url='#'>Option 1</Menu.Item>
                                    <Menu.Item url='#'>Option 2</Menu.Item>
                                    <Menu.Item url='#'>Option 3</Menu.Item>
                                    <Menu.Item url='#'>Option 4</Menu.Item>
                                </Menu.List>
                            </Menu>
                        }
                        control={
                            <Button className='fd-dropdown__control' compact>
                                    Select
                            </Button>
                        }
                        id='jhqD0556'
                        noArrow />
                </Dropdown>
            </Example>

            <Example
                centered
                description='It can also include complementary information like an icon.'
                title='Dropdown with Icon'>
                <Dropdown>
                    <Popover
                        body={
                            <Menu>
                                <Menu.List>
                                    <Menu.Item url='#'>Option 1</Menu.Item>
                                    <Menu.Item url='#'>Option 2</Menu.Item>
                                    <Menu.Item url='#'>Option 3</Menu.Item>
                                    <Menu.Item url='#'>Option 4</Menu.Item>
                                </Menu.List>
                            </Menu>
                        }
                        control={
                            <Button className='fd-dropdown__control' glyph='filter'>
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
                                    <Menu.Item url='#'>Option 1</Menu.Item>
                                    <Menu.Item url='#'>Option 2</Menu.Item>
                                    <Menu.Item url='#'>Option 3</Menu.Item>
                                    <Menu.Item url='#'>Option 4</Menu.Item>
                                </Menu.List>
                            </Menu>
                        }
                        control={
                            <Button className='fd-dropdown__control' compact
                                glyph='filter'>
                                    Select
                            </Button>
                        }
                        id='jhqD0558'
                        noArrow />
                </Dropdown>
            </Example>

            <Example
                centered
                title='Toolbar Dropdown'>
                <Dropdown standard>
                    <Popover
                        body={
                            <Menu>
                                <Menu.List>
                                    <Menu.Item url='#'>Option 1</Menu.Item>
                                    <Menu.Item url='#'>Option 2</Menu.Item>
                                    <Menu.Item url='#'>Option 3</Menu.Item>
                                    <Menu.Item url='#'>Option 4</Menu.Item>
                                </Menu.List>
                            </Menu>
                        }
                        control={
                            <Button className='fd-dropdown__control'>
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
                                    <Menu.Item url='#'>Option 1</Menu.Item>
                                    <Menu.Item url='#'>Option 2</Menu.Item>
                                    <Menu.Item url='#'>Option 3</Menu.Item>
                                    <Menu.Item url='#'>Option 4</Menu.Item>
                                </Menu.List>
                            </Menu>
                        }
                        control={
                            <Button className='fd-dropdown__control' compact>
                                    Select
                            </Button>
                        }
                        id='jhqD0560'
                        noArrow />
                </Dropdown>
            </Example>

            <Example
                centered
                title='Disabled State'>
                <Dropdown>
                    <Popover
                        body={
                            <Menu>
                                <Menu.List>
                                    <Menu.Item url='#'>Option 1</Menu.Item>
                                    <Menu.Item url='#'>Option 2</Menu.Item>
                                    <Menu.Item url='#'>Option 3</Menu.Item>
                                    <Menu.Item url='#'>Option 4</Menu.Item>
                                </Menu.List>
                            </Menu>
                        }
                        control={
                            <Button className='fd-dropdown__control' disabled
                                glyph='filter'>
                                    Select
                            </Button>
                        }
                        disabled
                        id='jhqD0561'
                        noArrow />
                </Dropdown>
            </Example>

        </ComponentPage>
    );
};
