import path from 'path';
import React from 'react';
import { Button, Select, Menu, Popover } from '..';
import { ComponentPage, Example } from '../_playground';


export const SelectComponent = () => {

    return (
        <ComponentPage
            description={`The **Select** component lets the user select one of the different options.
                It is more flexible than the normal Select.`}
            sourceModulePath={path.join(__dirname, './Select')}
            title='Select'>

            <Example
                centered
                title='Default Select'>
                <Select>
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
                        control={<Button className='fd-Select__control'>Select</Button>}
                        id='jhqD0555'
                        noArrow
                        useArrowKeyNavigation />
                </Select>

                <Select>
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
                            <Button className='fd-Select__control' compact>
                                Select
                            </Button>
                        }
                        id='jhqD0556'
                        noArrow
                        useArrowKeyNavigation />
                </Select>
            </Example>

            <Example
                centered
                description='It can also include complementary information like an icon.'
                title='Select with Icon'>
                <Select>
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
                            <Button className='fd-Select__control' glyph='filter'>
                                Select
                            </Button>
                        }
                        id='jhqD0557'
                        noArrow
                        useArrowKeyNavigation />
                </Select>

                <Select>
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
                            <Button className='fd-Select__control' compact
                                glyph='filter'>
                                Select
                            </Button>
                        }
                        id='jhqD0558'
                        noArrow
                        useArrowKeyNavigation />
                </Select>
            </Example>

            <Example
                centered
                title='Toolbar Select'>
                <Select standard>
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
                            <Button className='fd-Select__control'>
                                Select
                            </Button>
                        }
                        id='jhqD0559'
                        noArrow
                        useArrowKeyNavigation />
                </Select>

                <Select standard>
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
                            <Button className='fd-Select__control' compact>
                                Select
                            </Button>
                        }
                        id='jhqD0560'
                        noArrow
                        useArrowKeyNavigation />
                </Select>
            </Example>

            <Example
                centered
                title='Popover width limited to Select'>
                <Select>
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
                            <Button className='fd-Select__control'
                                glyph='navigation-down-arrow'>
                                Open the Select
                            </Button>
                        }
                        id='jhqD0561'
                        noArrow
                        widthSizingType='matchTarget' />
                </Select>
            </Example>

            <Example
                centered
                title='Disabled State'>
                <Select>
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
                            <Button className='fd-Select__control' disabled
                                glyph='filter'>
                                Select
                            </Button>
                        }
                        disabled
                        id='jhqD0561'
                        noArrow
                        useArrowKeyNavigation />
                </Select>
            </Example>

        </ComponentPage>
    );
};
