import { mount } from 'enzyme';
import React from 'react';
import Table from './Table';

describe('<Table />', () => {
    const setup = (props) => mount(<Table {...props} />);

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

    const basicProps = {
        headers: defaultHeaders,
        tableData: defaultData
    };

    describe('Prop spreading', () => {
        test('should allow props to be spread to the Table component', () => {
            const element = setup({
                ...basicProps,
                'data-sample': 'Sample'
            });

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the Table component\'s thead element', () => {
            const element = setup({
                ...basicProps,
                tableHeaderProps: {
                    'data-sample': 'Sample'
                }
            });

            expect(
                element.find('thead').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the Table component\'s thead > tr element', () => {
            const element = setup({
                ...basicProps,
                tableHeaderRowProps: {
                    'data-sample': 'Sample'
                }
            });

            expect(
                element.find('thead > tr').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the Table component\'s tbody element', () => {
            const element = setup({
                ...basicProps,
                tableBodyProps: {
                    'data-sample': 'Sample'
                }
            });

            expect(
                element.find('tbody').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the Table component\'s tbody > tr elements via object', () => {
            const element = setup({
                ...basicProps,
                tableBodyRowProps: {
                    'data-sample': 'Sample'
                }
            });

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
            const element = setup({
                ...basicProps,
                tableBodyRowProps: (row, index) => {
                    return {
                        'data-sample': `Sample ${index}`
                    };
                }
            });

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

    describe('selection', () => {
        it('shows checkbox in first column', () => {
            const element = setup({
                ...basicProps,
                selection: {
                    isSelected: () => {},
                    onSelectRow: () => {}
                }
            });

            const bodyRows = element.getDOMNode().querySelectorAll('tbody tr');
            for (let i = 0; i < bodyRows.length; i++) {
                expect(bodyRows[i].querySelector('td').querySelector('.fd-checkbox')).toBeDefined();
            }
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
