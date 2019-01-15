import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import { Table } from './Table';

describe('<Table />', () => {
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

    const simpleTable = (
        <Table
            headers={defaultHeaders}
            tableData={defaultData} />
    );

    const simpleTableWithClass = (
        <Table
            className='blue'
            headers={defaultHeaders}
            tableData={defaultData} />
    );

    test('create table component', () => {
        let component = renderer.create(simpleTable);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        component = renderer.create(simpleTableWithClass);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    describe('Prop spreading', () => {
        test('should allow props to be spread to the Table component', () => {
            const element = mount(
                <Table
                    data-sample='Sample'
                    headers={defaultHeaders}
                    tableData={defaultData} />
            );

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        xtest('should allow props to be spread to the Table component\'s thead element', () => {
            // TODO: placeholder for this test description once that functionality is built
        });

        xtest('should allow props to be spread to the Table component\'s thead > tr elements', () => {
            // TODO: placeholder for this test description once that functionality is built
        });

        xtest('should allow props to be spread to the Table component\'s tbody element', () => {
            // TODO: placeholder for this test description once that functionality is built
        });

        xtest('should allow props to be spread to the Table component\'s tbody > tr elements', () => {
            // TODO: placeholder for this test description once that functionality is built
        });
    });
});
