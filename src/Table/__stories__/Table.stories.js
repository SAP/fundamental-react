import React from 'react';
import { storiesOf } from '@storybook/react';
import Table from '../Table';
import {
    withKnobs
} from '@storybook/addon-knobs';

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

storiesOf('Components|Table', module)
    .addDecorator(withKnobs)
    .add('Default', () => (
        <Table
            headers={defaultHeaders}
            tableData={defaultData} />
    ))
    .add('disable styles', () => (
        <Table
            disableStyles
            headers={defaultHeaders}
            tableData={defaultData} />
    ))
    .add('custom styles', () => (
        <Table
            customStyles={require('../../utils/WithStyles/customStylesTest.css')}
            headers={defaultHeaders}
            tableData={defaultData} />
    ));
