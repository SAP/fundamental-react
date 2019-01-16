import React from 'react';
import { Button, Image, Menu, MenuItem, MenuList, Popover, Table } from '../';
import { Description, DocsText, DocsTile, Header, Import, Properties, Separator } from '../_playground';

export const TableComponent = () => {
    const simpleTableCode = `<Table
    headers={['Column Header 1', 'Column Header 2', 'Column Header 3', 'Column Header 4']}
    tableData={[
        {
            rowData: ['Data 1', 'Data 2', 'Data 3', 'Data 4']
        },
        {
            rowData: ['Data 5', 'Data 6', 'Data 7', 'Data 8']
        }
    ]}>
</Table>`;

    const richTableCode = `<Table
    headers={[<input type="checkbox" />, 'Avatar', 'email', 'First Name', 'Last Name', 'Date', ' ']}
    tableData={[
        {
            rowData: [
                <input type="checkbox" />,
                <Image size="m" photo="https://robohash.org/green?size=50x50" />,
                <a href="#" className="fd-has-font-weight-semi">
                    user.name@email.com
                </a>,
                'First Name',
                'Last Name',
                '01/26/17',
                <Popover
                    control={<Button option="light" glyph="vertical-grip" />}
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
            ]
        },
        {
            rowData: [
                <input type="checkbox" />,
                <Image size="m" photo="https://robohash.org/brown?size=50x50" />,
                <a href="#" className="fd-has-font-weight-semi">
                    florence.garcia@qwerty.io
                </a>,
                'First Name',
                'Last Name',
                '07/29/18',
                <Popover
                    control={<Button option="light" glyph="vertical-grip" />}
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
            ]
        },
        {
            rowData: [
                <input type="checkbox" />,
                <Image size="m" photo="https://robohash.org/Q27.png?set=set1&size=50x50" />,
                <a href="#" className="fd-has-font-weight-semi">
                    mark.helper@qwerty.io
                </a>,
                'First Name',
                'Last Name',
                '05/26/18',
                <Popover
                    control={<Button option="light" glyph="vertical-grip" />}
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
            ]
        },
        {
            rowData: [
                <input type="checkbox" />,
                <Image size="m" photo="https://robohash.org/water?&size=50x50" />,
                <a href="#" className="fd-has-font-weight-semi">
                    user.name@email.com
                </a>,
                'First Name',
                'Last Name',
                '01/26/14',
                <Popover
                    control={<Button option="light" glyph="vertical-grip" />}
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
            ]
        }
    ]}
/>`;

    return (
        <div>
            <Header>Table</Header>
            <Description>A table is a set tabular data. Line items can support data, images and actions.</Description>
            <Import module='Table' path='/fundamental-react/src/' />

            <Separator />

            <Properties
                properties={[
                    { name: 'headers', description: 'array of strings for the column headers of the table' },
                    {
                        name: 'tableData',
                        description:
                            'array of objects that contain two properties, rowData (an array of strings containing data for each column in the row), and children (an array of objects containing additional rows).'
                    }
                ]}
                type='Inputs' />

            <Separator />

            <h2>Simple Table</h2>
            <Description>
                This is an example of a table with simple cells, where the rowData is an array of strings.
            </Description>
            <br />
            <br />
            <DocsTile>
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
            </DocsTile>
            <DocsText>{simpleTableCode}</DocsText>

            <Separator />

            <h2>Rich Table</h2>
            <Description>
                This is an example of a table with rich cells. The checkbox input can be used at the beginning of each
                row to allow for bulk actions.When more than three actions exist per row and/or space doesn’t allow for
                actions, a contextual menu can be substituted in order to display all actions in one menu.
            </Description>
            <DocsTile>
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
                                            <MenuList>
                                                <MenuItem url='/'>Option 1</MenuItem>
                                                <MenuItem url='/'>Option 2</MenuItem>
                                                <MenuItem url='/'>Option 3</MenuItem>
                                                <MenuItem url='/'>Option 4</MenuItem>
                                            </MenuList>
                                        </Menu>
                                    }
                                    control={<Button glyph='vertical-grip' option='light' />} />
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
                                            <MenuList>
                                                <MenuItem url='/'>Option 1</MenuItem>
                                                <MenuItem url='/'>Option 2</MenuItem>
                                                <MenuItem url='/'>Option 3</MenuItem>
                                                <MenuItem url='/'>Option 4</MenuItem>
                                            </MenuList>
                                        </Menu>
                                    }
                                    control={<Button glyph='vertical-grip' option='light' />} />
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
                                            <MenuList>
                                                <MenuItem url='/'>Option 1</MenuItem>
                                                <MenuItem url='/'>Option 2</MenuItem>
                                                <MenuItem url='/'>Option 3</MenuItem>
                                                <MenuItem url='/'>Option 4</MenuItem>
                                            </MenuList>
                                        </Menu>
                                    }
                                    control={<Button glyph='vertical-grip' option='light' />} />
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
                                            <MenuList>
                                                <MenuItem url='/'>Option 1</MenuItem>
                                                <MenuItem url='/'>Option 2</MenuItem>
                                                <MenuItem url='/'>Option 3</MenuItem>
                                                <MenuItem url='/'>Option 4</MenuItem>
                                            </MenuList>
                                        </Menu>
                                    }
                                    control={<Button glyph='vertical-grip' option='light' />} />
                            ]
                        }
                    ]} />
            </DocsTile>
            <DocsText>{richTableCode}</DocsText>
        </div>
    );
};
