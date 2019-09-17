import path from 'path';
import { Button, Checkbox, Image, Menu, Popover, Table } from '../';
import { ComponentPage, Example } from '../_playground';
import React, { useState } from 'react';

export const TableComponent = () => {
    const [checkedItems, setCheckedItems] = useState({});

    const handleChange = (event) => {
        setCheckedItems({ ...checkedItems, [event.target.name]: event.target.checked });
    };

    const tableRowData = [
        {
            email: 'user.name@test.com',
            date: '1/10/20',
            name: 'User',
            photoUrl: 'https://robohash.org/green?size=50x50'
        },
        {
            email: 'florence.garcia@qwerty.io',
            date: '10/20/19',
            name: 'Florence',
            photoUrl: 'https://robohash.org/brown?size=50x50'
        },
        {
            email: 'mark.helper@qwerty.io',
            date: '9/15/19',
            name: 'Mark',
            photoUrl: 'https://robohash.org/Q27.png?set=set1&size=50x50'
        },
        {
            email: 'jenna@qwerty.io',
            date: '11/12/19',
            name: 'Jenna',
            photoUrl: 'https://robohash.org/water?&size=50x50'
        }
    ];


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
                    headers={[<Checkbox />, 'Avatar', 'email', 'First Name', 'Last Name', 'Date', ' ']}
                    tableData={
                        tableRowData.map(item => {
                            return ({
                                rowData: [
                                    <Checkbox
                                        checked={checkedItems[item.name]}
                                        name={item.name}
                                        onChange={handleChange} />,
                                    <Image photo={item.photoUrl} size='m' />,
                                    <a className='fd-has-font-weight-semi' href='#'>
                                        {item.email}
                                    </a>,
                                    'First Name',
                                    'Last Name',
                                    '01/26/17',
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
                                        control={<Button glyph='vertical-grip' option='light' />}
                                        placement='bottom-end' />
                                ]
                            });
                        })
                    } />
            </Example>
        </ComponentPage>
    );
};
