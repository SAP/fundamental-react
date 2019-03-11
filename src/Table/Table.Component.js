import path from 'path';
import React from 'react';
import { Button, Image, Menu, Popover, Table } from '../';
import { ComponentPage, Example } from '../_playground';

export const TableComponent = () => {
    return (
        <ComponentPage
            description='A **Table** is a set of tabular data. Line items can support `data`, `images` and `actions`.'
            sourceModulePath={path.join(__dirname, './Table')}
            title='Table'>

            <Example
                description='This is an example of a **Table** with simple cells, where the `rowData` is an array of strings.'
                title='Simple Table'>
                <Table
                    headers={['Column Header 1', 'Column Header 2', 'Column Header 3', 'Column Header 4']}
                    tableData={[
                        {
                            rowData: ['Data 1', 'Data 2', 'Data 3', 'Data 4']
                        },
                        {
                            rowData: ['Data 5', 'Data 6', 'Data 7', 'Data 8']
                        }
                    ]} />
            </Example>

            <Example
                description={`This is an example of a **Table** with "rich" cells. The checkbox input can be used at the beginning of each
                    row to allow for bulk actions. When more than three actions exist per row and/or space doesn’t allow for
                    actions, a contextual menu can be substituted in order to display all actions in one menu.`}
                title='Rich Table'>
                <Table
                    headers={[<input type='checkbox' />, 'Avatar', 'email', 'First Name', 'Last Name', 'Date', ' ']}
                    tableData={[
                        {
                            rowData: [
                                <input type='checkbox' />,
                                <Image photo='https://robohash.org/green?size=50x50' size='m' />,
                                <a className='fd-has-font-weight-semi' href='#'>
                                    user.name@email.com
                                </a>,
                                'First Name',
                                'Last Name',
                                '01/26/17',
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
                                    control={<Button glyph='vertical-grip' option='light' />}
                                    placement='bottom-end' />
                            ]
                        },
                        {
                            rowData: [
                                <input type='checkbox' />,
                                <Image photo='https://robohash.org/brown?size=50x50' size='m' />,
                                <a className='fd-has-font-weight-semi' href='#'>
                                    florence.garcia@qwerty.io
                                </a>,
                                'First Name',
                                'Last Name',
                                '07/29/18',
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
                                    control={<Button glyph='vertical-grip' option='light' />}
                                    placement='bottom-end' />
                            ]
                        },
                        {
                            rowData: [
                                <input type='checkbox' />,
                                <Image photo='https://robohash.org/Q27.png?set=set1&size=50x50' size='m' />,
                                <a className='fd-has-font-weight-semi' href='#'>
                                    mark.helper@qwerty.io
                                </a>,
                                'First Name',
                                'Last Name',
                                '05/26/18',
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
                                    control={<Button glyph='vertical-grip' option='light' />}
                                    placement='bottom-end' />
                            ]
                        },
                        {
                            rowData: [
                                <input type='checkbox' />,
                                <Image photo='https://robohash.org/water?&size=50x50' size='m' />,
                                <a className='fd-has-font-weight-semi' href='#'>
                                    user.name@email.com
                                </a>,
                                'First Name',
                                'Last Name',
                                '01/26/14',
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
                                    control={<Button glyph='vertical-grip' option='light' />}
                                    placement='bottom-end' />
                            ]
                        }
                    ]} />
            </Example>

        </ComponentPage>
    );
};
