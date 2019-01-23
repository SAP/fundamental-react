import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import { Tree } from './Tree';

describe('<Tree />', () => {
    const defaultHeaders = [
        'Column Header',
        'Column Header 1 ',
        'Column Header 2',
        'Status'
    ];

    const multiLevelTree = (
        <Tree
            headers={defaultHeaders}
            treeData={[
                {
                    id: '1',
                    hasChildren: true,
                    values: ['First Level', 'Data Col 2', 'Data Col 3', 'INACTIVE'],
                    children: [
                        {
                            id: '2',
                            hasChildren: true,
                            values: ['Child 1', 'Data Col 2', 'Data Col 3', 'INACTIVE'],
                            children: [
                                {
                                    id: '3',
                                    hasChildren: true,
                                    values: [
                                        'Grandchild 1',
                                        'Data Col 2',
                                        'Data Col 3',
                                        'INACTIVE'
                                    ],
                                    children: [
                                        {
                                            id: '4',
                                            hasChildren: false,
                                            values: [
                                                'GreatGrandchild 1',
                                                'Data Col 2',
                                                'Data Col 3',
                                                'INACTIVE'
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: '5',
                            hasChildren: false,
                            values: ['Child 2', 'Data Col 2', 'Data Col 3', 'INACTIVE']
                        }
                    ]
                },

                {
                    id: '6',
                    hasChildren: true,
                    values: ['Row 2', 'Data Col 2', 'Data Col 3', 'DEFAULT'],
                    children: [
                        {
                            id: '7',
                            hasChildren: false,
                            values: ['Child 1', 'Data Col 2', 'Data Col 3', 'INACTIVE']
                        },
                        {
                            id: '8',
                            hasChildren: false,
                            values: ['Child 2', 'Data Col 2', 'Data Col 3', 'INACTIVE']
                        }
                    ]
                },

                {
                    id: '9',
                    hasChild: true,
                    values: ['Row 3', 'Data Col 2', 'Data Col 3', 'INACTIVE']
                },

                {
                    id: '10',
                    hasChildren: true,
                    values: [
                        {
                            displayText: '',
                            linkUrl: 'http://me.com'
                        },
                        'Data Col 2',
                        'Data Col 3',
                        'INACTIVE'
                    ],
                    children: [
                        {
                            id: '11',
                            hasChildren: false,
                            values: ['Child 1', 'Data Col 2', 'Data Col 3', 'INACTIVE']
                        }
                    ]
                }
            ]} />
    );

    const richTree = (
        <Tree
            headers={defaultHeaders}
            treeData={[
                {
                    id: '1',
                    hasChildren: true,
                    values: [
                        {
                            displayText: 'First Level',
                            linkUrl: 'http://me.com'
                        },
                        ' ',
                        ' ',
                        ' '
                    ],
                    children: [
                        {
                            id: '2',
                            hasChildren: false,
                            values: [
                                {
                                    displayText: 'Amazon',
                                    linkUrl: 'http://amazon.com'
                                },
                                {
                                    displayText: 'Google',
                                    linkUrl: 'http://google.com'
                                },
                                {
                                    displayText: 'Bing',
                                    linkUrl: 'http://bing.com'
                                },
                                {
                                    displayText: 'Yahoo',
                                    linkUrl: 'http://yahoo.com'
                                },
                                { displayText: '', linkUrl: 'http://sap.com' }
                            ]
                        }
                    ]
                },
                {
                    id: '2',
                    hasChildren: true,
                    values: ['Second Level', ' ', ' ', ' '],
                    children: [
                        {
                            id: '2',
                            hasChildren: false,
                            values: [
                                {
                                    displayText: '',
                                    linkUrl: 'http://amazon.com'
                                }
                            ]
                        }
                    ]
                }
            ]} />
    );

    test('create tree component', () => {
        // multi-level tree
        let component = renderer.create(multiLevelTree);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // rich tree
        component = renderer.create(richTree);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('open all tree from header', () => {
        let wrapper = mount(richTree);

        wrapper
            .find('button.fd-tree__control')
            .at(0)
            .simulate('click');

        // check that all open
        expect(wrapper.state('expandAllClicked')).toBeTruthy();

        wrapper
            .find('button.fd-tree__control')
            .at(0)
            .simulate('click');

        // check that all closed
        expect(wrapper.state('expandAllClicked')).toBeFalsy();
    });

    test('closed all tree from header when set to open', () => {
        let wrapper = mount(richTree);

        wrapper.setState({ 'expandAllClicked': true });
        wrapper
            .find('button.fd-tree__control')
            .at(0)
            .simulate('click');

        // check that all closed
        expect(wrapper.state('expandAllClicked')).toBeFalsy();

        wrapper
            .find('button.fd-tree__control')
            .at(0)
            .simulate('click');

        // check that all open
        expect(wrapper.state('expandAllClicked')).toBeTruthy();
    });

    test('expand tree from row', () => {
        let wrapper = mount(multiLevelTree);

        wrapper
            .find('button.fd-tree__control')
            .at(1)
            .simulate('click');

        expect(wrapper.state('iStates')[1]).toBeTruthy();

        wrapper
            .find('button.fd-tree__control')
            .at(1)
            .simulate('click');
        expect(wrapper.state('iStates')[1]).toBeFalsy();
    });

    describe('Prop spreading', () => {
        test('should allow props to be spread to the Tree component', () => {
            const data = [];
            const element = mount(
                <Tree
                    data-sample='Sample'
                    headers={defaultHeaders}
                    treeData={data} />)
                ;

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the Tree component\'s header element', () => {
            const data = [];
            const element = mount(
                <Tree
                    headerProps={{
                        'data-sample': 'Sample'
                    }}
                    headers={defaultHeaders}
                    treeData={data} />)
                ;

            expect(
                element.find('.fd-tree--header').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the Tree component\'s header button elements', () => {
            const data = [];
            const element = mount(
                <Tree
                    headerButtonProps={{
                        'data-sample': 'Sample'
                    }}
                    headers={defaultHeaders}
                    treeData={data} />)
                ;

            expect(
                element.find('.fd-tree--header button').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the Tree component\'s list element', () => {
            const data = [];
            const element = mount(
                <Tree
                    headers={defaultHeaders}
                    listProps={{
                        'data-sample': 'Sample'
                    }}
                    treeData={data} />)
                ;

            expect(
                element.find('ul.fd-tree').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });
});
