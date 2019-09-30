import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import Table from './Table';

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

        test('should allow props to be spread to the Table component\'s thead element', () => {
            const element = mount(
                <Table
                    headers={defaultHeaders}
                    tableData={defaultData}
                    tableHeaderProps={{
                        'data-sample': 'Sample'
                    }} />
            );

            expect(
                element.find('thead').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the Table component\'s thead > tr element', () => {
            const element = mount(
                <Table
                    headers={defaultHeaders}
                    tableData={defaultData}
                    tableHeaderRowProps={{
                        'data-sample': 'Sample'
                    }} />
            );

            expect(
                element.find('thead > tr').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the Table component\'s tbody element', () => {
            const element = mount(
                <Table
                    headers={defaultHeaders}
                    tableBodyProps={{
                        'data-sample': 'Sample'
                    }}
                    tableData={defaultData} />
            );

            expect(
                element.find('tbody').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the Table component\'s tbody > tr elements via object', () => {
            const data = [
                {
                    rowData: ['Data 1', 'Data 2', 'Data 3', 'Data 4']
                },
                {
                    rowData: ['Data 5', 'Data 6', 'Data 7', 'Data 8']
                }
            ];
            const element = mount(
                <Table
                    headers={defaultHeaders}
                    tableBodyRowProps={{
                        'data-sample': 'Sample'
                    }}
                    tableData={data} />
            );

            const rows = element.find('tbody > tr');

            expect(rows).toHaveLength(2);
            expect(
                rows.at(0).getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
            expect(
                rows.at(1).getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the Table component\'s tbody > tr elements via function', () => {
            const data = [
                {
                    rowData: ['Data 1', 'Data 2', 'Data 3', 'Data 4']
                },
                {
                    rowData: ['Data 5', 'Data 6', 'Data 7', 'Data 8']
                }
            ];
            const element = mount(
                <Table
                    headers={defaultHeaders}
                    tableBodyRowProps={(row, index) => {
                        return {
                            'data-sample': `Sample ${index}`
                        };
                    }}
                    tableData={data} />
            );

            const rows = element.find('tbody > tr');

            expect(rows).toHaveLength(2);
            expect(
                rows.at(0).getDOMNode().attributes['data-sample'].value
            ).toBe('Sample 0');
            expect(
                rows.at(1).getDOMNode().attributes['data-sample'].value
            ).toBe('Sample 1');
        });
    });

    test('forwards the ref', () => {
        let ref;
        class Test extends React.Component {
            constructor(props) {
                super(props);
                ref = React.createRef();
            }
            render = () => (<Table headers={defaultHeaders}
                ref={ref} tableData={defaultData} />);
        }
        mount(<Test />);
        expect(ref.current.tagName).toEqual('TABLE');
        expect(ref.current.className).toEqual('fd-table');
    });
});
