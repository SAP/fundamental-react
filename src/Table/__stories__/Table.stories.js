/* eslint-disable react/no-multi-comp */
import Button from '../../Button/Button';
import Checkbox from '../../Forms/Checkbox';
import Image from '../../Image/Image';
import Menu from '../../Menu/Menu';
import Popover from '../../Popover/Popover';
import Table from '../Table';
import React, { useState } from 'react';

export default {
    title: 'Component API/Table',
    component: Table
};

export const primary = () => {
    const defaultHeaders = [
        'Column Header 1',
        'Column Header 2',
        'Column Header 3',
        'Column Header 4'
    ];
    const defaultData = [
        {
            rowData: ['Data 1', 'Data 2', 'Data 3', 'Data 4']
        },
        {
            rowData: ['Data 5', 'Data 6', 'Data 7', 'Data 8']
        }
    ];
    return (
        <Table
            headers={defaultHeaders}
            tableData={defaultData} />
    );
};

export const richTable = () => {
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
        <Table
            headers={[<Checkbox>Checkbox</Checkbox>, 'Avatar', 'email', 'First Name', 'Last Name', 'Date', ' ']}
            tableData={
                tableRowData.map(item => {
                    return ({
                        rowData: [
                            <Checkbox
                                checked={checkedItems[item.name]}
                                onChange={handleChange}>{item.name}</Checkbox>,
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
                                control={<Button glyph='vertical-grip' option='transparent' />}
                                placement='bottom-end' />
                        ]
                    });
                })
            } />
    );
};

// TO DO: reenable storyshots for examples using hooks in storybook@6
// https://github.com/storybookjs/storybook/releases/tag/v6.0.0-alpha.43
richTable.story = {
    parameters: {
        storyshots: { disable: true }
    }
};
