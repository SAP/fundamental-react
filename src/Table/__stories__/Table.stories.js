/* eslint-disable react/no-multi-comp */
import Avatar from '../../Avatar/Avatar';
import { boolean } from '@storybook/addon-knobs';
import Button from '../../Button/Button';
import Checkbox from '../../Forms/Checkbox';
import DatePicker from '../../DatePicker/DatePicker';
import FormInput from '../../Forms/FormInput';
import Link from '../../Link/Link';
import Menu from '../../Menu/Menu';
import ObjectStatus from '../../ObjectStatus/ObjectStatus';
import Popover from '../../Popover/Popover';
import Select from '../../Select/Select';
import Table from '../Table';
import React, { useRef, useState } from 'react';

export default {
    title: 'Component API/Table',
    component: Table
};

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

export const primary = () => {
    return (
        <Table
            headers={defaultHeaders}
            tableData={defaultData} />
    );
};

export const compact = () => {
    return (
        <Table
            compact
            headers={defaultHeaders}
            tableData={defaultData} />
    );
};

export const condensed = () => {
    return (
        <Table
            condensed
            headers={defaultHeaders}
            tableData={defaultData} />
    );
};

export const richTable = () => {
    const [checkedItems, setCheckedItems] = useState({});

    const handleChange = (event) => {
        setCheckedItems({ ...checkedItems, [event.target.name]: event.target.checked });
    };

    const handleHeaderChange = (event) => {
        const newCheckedItems = {};
        tableRowData.forEach(row => newCheckedItems[row.name] = event.target.checked);
        setCheckedItems(newCheckedItems);
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

    const allItemsChecked = Object.keys(checkedItems).length > 0 && !Object.keys(checkedItems).some(key => !checkedItems[key]);

    return (
        <Table
            headers={[
                <Checkbox
                    ariaLabel='Select all rows'
                    checked={allItemsChecked}
                    onChange={handleHeaderChange} />, 'Avatar', 'email', 'First Name', 'Last Name', 'Date', ' ']}
            selection={{
                isSelected: (index) => !!checkedItems[tableRowData[index].name]
            }}
            tableData={
                tableRowData.map(item => {
                    return ({
                        rowData: [
                            <Checkbox
                                ariaLabel={'Select row'}
                                checked={checkedItems[item.name] || false}
                                name={item.name}
                                onChange={handleChange} />,
                            <Avatar backgroundImageUrl={item.photoUrl} size='m'
                                transparent />,
                            <a href='#'>
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
                                control={<Button
                                    aria-label='Options'
                                    glyph='vertical-grip'
                                    option='transparent' />}
                                placement='bottom-end' />
                        ]
                    });
                })
            } />
    );
};

export const gridTable = () => {
    const tableRowData = [
        {
            'productId': 'HT-1000',
            'supplierName': 'Very Best Screens',
            'productName': 'Notebook Basic 15',
            'deliveryDate': '2017-03-26',
            'imageUrl': 'https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1000.jpg',
            'status': 'Available',
            'quantity': 10
        },
        {
            'productId': 'HT-1001',
            'supplierName': 'Fasttech',
            'productName': 'Notebook Basic 17',
            'deliveryDate': '2017-04-17',
            'imageUrl': 'https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1001.jpg',
            'status': 'Unavailable',
            'quantity': 0
        },
        {
            'productId': 'HT-1002',
            'supplierName': 'Printers for All',
            'productName': 'Notebook Basic 18',
            'deliveryDate': '2017-01-07',
            'imageUrl': 'https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1002.jpg',
            'status': 'Available',
            'quantity': 13
        },
        {
            'productId': 'HT-1003',
            'supplierName': 'Technocom',
            'productName': 'Notebook Basic 19',
            'deliveryDate': '2017-04-09',
            'imageUrl': 'https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1003.jpg',
            'status': 'Available',
            'quantity': 15
        }
    ];

    const [checkedItems, setCheckedItems] = useState({});
    const allItemsCheckedRef = useRef();
    allItemsCheckedRef.current = Object.keys(checkedItems).length === tableRowData.length && !Object.keys(checkedItems).some(key => !checkedItems[key]);

    const toggleAllItems = (checked) => {
        const newCheckedItems = {};
        tableRowData.forEach(row => newCheckedItems[row.productName] = checked);
        setCheckedItems(newCheckedItems);
    };

    const handleChange = (event) => {
        const { target } = event;
        setCheckedItems(prevItems => ({ ...prevItems, [target.name]: target.checked }));
    };

    const handleHeaderChange = (event) => {
        toggleAllItems(event.target.checked);
    };

    const suppliers = [
        { key: '1', text: 'Very Best Screens' },
        { key: '2', text: 'Fasttech' },
        { key: '3', text: 'Printers for All' },
        { key: '4', text: 'Technocom' }
    ];

    return (
        <Table
            compact={boolean('compact', false)}
            condensed={boolean('condensed', false)}
            headers={[
                <Checkbox
                    ariaLabel='Select all rows'
                    checked={allItemsCheckedRef.current}
                    onChange={handleHeaderChange} />, 'Product Name', 'Product ID', 'Quantity', 'Status', 'Supplier', 'Image', 'Heavy Weight', 'Categories', 'Delivery Date']}
            keyboardNavigation='cell'
            selection={{
                isSelected: (index) => !!checkedItems[tableRowData[index].productName],
                onSelectRow: (index) => {
                    if (index > -1) {
                        const rowKey = tableRowData[index]?.productName;
                        setCheckedItems(prevItems => {
                            return { ...prevItems, [rowKey]: !prevItems[rowKey] };
                        });
                    } else {
                        toggleAllItems(!allItemsCheckedRef.current);
                    }
                }
            }}
            tableData={
                tableRowData.map(item => {
                    return ({
                        rowData: [
                            <Checkbox
                                ariaLabel='Select row'
                                checked={!!checkedItems[item.productName]}
                                name={item.productName}
                                onChange={handleChange} />,
                            <span>{item.productName}</span>,
                            <FormInput aria-label='Product ID' defaultValue={item.productId}
                                name={item.productName} />,
                            <span>{item.quantity}</span>,
                            <ObjectStatus status={item.status === 'Available' ? 'positive' : 'negative'}>{item.status}</ObjectStatus>,
                            <Select options={suppliers} placeholder='Select a supplier'
                                selectedKey={suppliers[suppliers.findIndex((supplier) => supplier.text === item.supplierName)].key}
                                validationOverlayProps={{ 'aria-label': 'Supplier' }} />,
                            <Link aria-label={`Show image: ${item.productName}`} href={item.imageUrl}>Show image</Link>,
                            <Checkbox ariaLabel='Heavy Weight' />,
                            <FormInput aria-label='Categories' />,
                            <DatePicker defaultValue={item.deliveryDate} inputProps={{ 'aria-label': 'Delivery Date' }} />
                        ]
                    });
                })
            } />
    );
};

export const withRowNavigation = () => {
    const tableRowData = [
        {
            'productId': 'HT-1000',
            'supplierName': 'Very Best Screens',
            'productName': 'Notebook Basic 15',
            'deliveryDate': '2017-03-26',
            'imageUrl': 'https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1000.jpg',
            'status': 'Available',
            'quantity': 10
        },
        {
            'productId': 'HT-1001',
            'supplierName': 'Fasttech',
            'productName': 'Notebook Basic 17',
            'deliveryDate': '2017-04-17',
            'imageUrl': 'https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1001.jpg',
            'status': 'Unavailable',
            'quantity': 0
        },
        {
            'productId': 'HT-1002',
            'supplierName': 'Printers for All',
            'productName': 'Notebook Basic 18',
            'deliveryDate': '2017-01-07',
            'imageUrl': 'https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1002.jpg',
            'status': 'Available',
            'quantity': 13
        },
        {
            'productId': 'HT-1003',
            'supplierName': 'Technocom',
            'productName': 'Notebook Basic 19',
            'deliveryDate': '2017-04-09',
            'imageUrl': 'https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1003.jpg',
            'status': 'Available',
            'quantity': 15
        }
    ];

    const [checkedItems, setCheckedItems] = useState({});
    const allItemsCheckedRef = useRef();
    allItemsCheckedRef.current = Object.keys(checkedItems).length === tableRowData.length && !Object.keys(checkedItems).some(key => !checkedItems[key]);

    const toggleAllItems = (checked) => {
        const newCheckedItems = {};
        tableRowData.forEach(row => newCheckedItems[row.productName] = checked);
        setCheckedItems(newCheckedItems);
    };

    const handleChange = (event) => {
        const { target } = event;
        setCheckedItems(prevItems => ({ ...prevItems, [target.name]: target.checked }));
    };

    const handleHeaderChange = (event) => {
        toggleAllItems(event.target.checked);
    };

    return (
        <Table
            compact={boolean('compact', false)}
            condensed={boolean('condensed', false)}
            headers={[
                <Checkbox
                    ariaLabel='Select all rows'
                    checked={allItemsCheckedRef.current}
                    onChange={handleHeaderChange} />, 'Product Name', 'Product ID', 'Quantity', 'Status', 'Image']}
            keyboardNavigation='row'
            selection={{
                isSelected: (index) => !!checkedItems[tableRowData[index].productName],
                onClickRow: (index) => {
                    window.alert('You clicked row ' + index);
                },
                onSelectRow: (index) => {
                    if (index > -1) {
                        const rowKey = tableRowData[index]?.productName;
                        setCheckedItems(prevItems => {
                            return { ...prevItems, [rowKey]: !prevItems[rowKey] };
                        });
                    } else {
                        toggleAllItems(!allItemsCheckedRef.current);
                    }
                }
            }}
            tableData={
                tableRowData.map(item => {
                    return ({
                        rowData: [
                            <Checkbox
                                ariaLabel='Select row'
                                checked={!!checkedItems[item.productName]}
                                name={item.productName}
                                onChange={handleChange} />,
                            <span>{item.productName}</span>,
                            <FormInput aria-label='Product ID' defaultValue={item.productId}
                                name={item.productName} />,
                            <span>{item.quantity}</span>,
                            <ObjectStatus status={item.status === 'Available' ? 'positive' : 'negative'}>{item.status}</ObjectStatus>,
                            <Link aria-label={`Show image: ${item.productName}`} href={item.imageUrl}>Show image</Link>
                        ]
                    });
                })
            } />
    );
};

export const noStyles = () => {
    return (
        <Table
            cssNamespace='xxx'
            headers={defaultHeaders}
            tableData={defaultData} />
    );
};
noStyles.parameters = { docs: { disable: true } };
