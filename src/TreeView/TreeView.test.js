import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import { TreeCell, TreeHeader, TreeList, TreeRow, TreeView } from './TreeView';

// mock shortid for snapshot testing
jest.mock('shortid', () => {
    let id = 1;

    return {
        generate: () => id++
    };
});

describe('<TreeView />', () => {
    const multiLevelTreeView = (
        <TreeView>
            <TreeHeader>
                <TreeCell>Column Header 1</TreeCell>
                <TreeCell>Column Header 2</TreeCell>
                <TreeCell>Column Header 3</TreeCell>
                <TreeCell>Column Header 4</TreeCell>
            </TreeHeader>
            <TreeList>
                <TreeRow>
                    <TreeCell>First Level</TreeCell>
                    <TreeCell>Data Col 2</TreeCell>
                    <TreeCell>Data Col 3</TreeCell>
                    <TreeCell>Data Col 4</TreeCell>
                    <TreeList>
                        <TreeRow>
                            <TreeCell>Child 1</TreeCell>
                            <TreeCell>Data Col 2</TreeCell>
                            <TreeCell>Data Col 3</TreeCell>
                            <TreeCell>Data Col 4</TreeCell>
                            <TreeList>
                                <TreeRow>
                                    <TreeCell>Grandchild 1</TreeCell>
                                    <TreeCell>Data Col 2</TreeCell>
                                    <TreeCell>Data Col 3</TreeCell>
                                    <TreeCell>Data Col 4</TreeCell>
                                    <TreeList>
                                        <TreeRow>
                                            <TreeCell>GreatGrandchild 1</TreeCell>
                                            <TreeCell>Data Col 2</TreeCell>
                                            <TreeCell>Data Col 3</TreeCell>
                                            <TreeCell>Data Col 4</TreeCell>
                                        </TreeRow>
                                    </TreeList>
                                </TreeRow>
                            </TreeList>
                        </TreeRow>
                        <TreeRow>
                            <TreeCell>Child 2</TreeCell>
                            <TreeCell>Data Col 2</TreeCell>
                            <TreeCell>Data Col 3</TreeCell>
                            <TreeCell>Data Col 4</TreeCell>
                        </TreeRow>
                    </TreeList>
                </TreeRow>
                <TreeRow>
                    <TreeCell>Row 2</TreeCell>
                    <TreeCell>Data Col 2</TreeCell>
                    <TreeCell>Data Col 3</TreeCell>
                    <TreeCell>Data Col 4</TreeCell>
                    <TreeList>
                        <TreeRow>
                            <TreeCell>Child 1</TreeCell>
                            <TreeCell>Data Col 2</TreeCell>
                            <TreeCell>Data Col 3</TreeCell>
                            <TreeCell>Data Col 4</TreeCell>
                        </TreeRow>
                        <TreeRow>
                            <TreeCell>Child 2</TreeCell>
                            <TreeCell>Data Col 2</TreeCell>
                            <TreeCell>Data Col 3</TreeCell>
                            <TreeCell>Data Col 4</TreeCell>
                        </TreeRow>
                    </TreeList>
                </TreeRow>
                <TreeRow>
                    <TreeCell>Row 3</TreeCell>
                    <TreeCell>Data Col 2</TreeCell>
                    <TreeCell>Data Col 3</TreeCell>
                    <TreeCell>Data Col 4</TreeCell>
                </TreeRow>
                <TreeRow>
                    <TreeCell><a href='http://me.com' /></TreeCell>
                    <TreeCell>Data Col 2</TreeCell>
                    <TreeCell>Data Col 3</TreeCell>
                    <TreeCell>Data Col 4</TreeCell>
                    <TreeList>
                        <TreeRow>
                            <TreeCell>Child 1</TreeCell>
                            <TreeCell>Data Col 2</TreeCell>
                            <TreeCell>Data Col 3</TreeCell>
                            <TreeCell>Data Col 4</TreeCell>
                        </TreeRow>
                    </TreeList>
                </TreeRow>
            </TreeList>
        </TreeView>
    );

    const richTreeView = (
        <TreeView>
            <TreeHeader>
                <TreeCell>Column Header 1</TreeCell>
                <TreeCell>Column Header 2</TreeCell>
                <TreeCell>Column Header 3</TreeCell>
                <TreeCell>Column Header 4</TreeCell>
            </TreeHeader>
            <TreeList>
                <TreeRow>
                    <TreeCell>First Level</TreeCell>
                    <TreeList>
                        <TreeRow>
                            <TreeCell><a href='http://me.com'>First Level</a></TreeCell>
                            <TreeCell />
                            <TreeCell />
                            <TreeCell />
                            <TreeList>
                                <TreeRow>
                                    <TreeCell><a href='http://amazon.com'>Amazon</a></TreeCell>
                                    <TreeCell><a href='http://google.com'>Google</a></TreeCell>
                                    <TreeCell><a href='http://bing.com'>Bing</a></TreeCell>
                                    <TreeCell><a href='http://yahoo.com'>Yahoo</a></TreeCell>
                                    <TreeCell><a href='http://sap.com'>SAP</a></TreeCell>
                                </TreeRow>
                                <TreeRow>
                                    <TreeCell><a href='http://amazon.com'>Amazon</a></TreeCell>
                                </TreeRow>
                            </TreeList>
                        </TreeRow>
                        <TreeRow>
                            <TreeCell>Second Level</TreeCell>
                            <TreeCell />
                            <TreeCell />
                            <TreeCell />
                            <TreeList>
                                <TreeRow>
                                    <TreeCell><a href='http://amazon.com'>Amazon</a></TreeCell>
                                </TreeRow>
                            </TreeList>
                        </TreeRow>
                    </TreeList>
                </TreeRow>
            </TreeList>
        </TreeView>
    );

    test('create tree component', () => {
        // multi-level tree
        let component = renderer.create(multiLevelTreeView);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // rich tree
        component = renderer.create(richTreeView);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('open all tree from header', () => {
        const wrapper = mount(richTreeView);

        wrapper
            .find('button.fd-tree__control')
            .at(0)
            .simulate('click');

        // Check that all opened
        wrapper.find('ul.fd-tree__group').forEach((node) => {
            expect(node.hasClass('is-hidden')).toBeFalsy();
            expect(node.prop('aria-hidden')).toBeFalsy();
        });
    });

    test('closed all tree from header when set to open', () => {
        const wrapper = mount(richTreeView);

        wrapper
            .find('button.fd-tree__control')
            .at(0)
            .simulate('click');

        // Check that all opened
        wrapper.find('ul.fd-tree__group').forEach((node) => {
            expect(node.hasClass('is-hidden')).toBeFalsy();
            expect(node.prop('aria-hidden')).toBeFalsy();
        });

        wrapper
            .find('button.fd-tree__control')
            .at(0)
            .simulate('click');

        // Check that all closed
        wrapper.find('ul.fd-tree__group').forEach((node) => {
            expect(node.hasClass('is-hidden')).toBeTruthy();
            expect(node.prop('aria-hidden')).toBeTruthy();
        });
    });

    test('expand tree from row', () => {
        const wrapper = mount(multiLevelTreeView);
        const parent = wrapper.find('li.fd-tree__item').at(0);
        const button = parent.find('button.fd-tree__control').at(0);

        button.simulate('click');

        // Check that child list expanded
        expect(wrapper.find('ul.fd-tree__group--sublevel-1').at(0).hasClass('is-hidden')).toBeFalsy();
        expect(wrapper.find('ul.fd-tree__group--sublevel-1').at(0).prop('aria-hidden')).toBeFalsy();
    });

    test('collapse tree from row', () => {
        const wrapper = mount(multiLevelTreeView);
        const parent = wrapper.find('li.fd-tree__item').at(0);
        const button = parent.find('button.fd-tree__control').at(0);

        button.simulate('click');

        // Check that child list expanded
        expect(wrapper.find('ul.fd-tree__group--sublevel-1').at(0).hasClass('is-hidden')).toBeFalsy();
        expect(wrapper.find('ul.fd-tree__group--sublevel-1').at(0).prop('aria-hidden')).toBeFalsy();

        button.simulate('click');

        // Check that child list collapsed
        expect(wrapper.find('ul.fd-tree__group--sublevel-1').at(0).hasClass('is-hidden')).toBeTruthy();
        expect(wrapper.find('ul.fd-tree__group--sublevel-1').at(0).prop('aria-hidden')).toBeTruthy();
    });

    describe('Prop spreading', () => {
        test('should allow props to be spread to the TreeView component', () => {
            const element = mount(
                <TreeView
                    data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the TreeHeader component', () => {
            const element = mount(
                <TreeHeader
                    data-sample='Sample' />);

            expect(
                element.find('.fd-tree--header').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the TreeList component', () => {
            const element = mount(
                <TreeList
                    data-sample='Sample' />);

            expect(
                element.find('.fd-tree').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the TreeRow component', () => {
            const element = mount(
                <TreeRow
                    data-sample='Sample' />);

            expect(
                element.find('.fd-tree__item').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the TreeHeader component', () => {
            const element = mount(
                <TreeHeader
                    data-sample='Sample' />);

            expect(
                element.find('.fd-tree--header').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the TreeHeader component\'s button element', () => {
            const element = mount(
                <TreeHeader
                    buttonProps={{
                        'data-sample': 'Sample'
                    }}>
                    <TreeCell />
                </TreeHeader>
            );

            expect(
                element.find('.fd-tree__control').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the TreeCell component', () => {
            const element = mount(
                <TreeCell
                    data-sample='Sample' />);

            expect(
                element.find('.fd-tree__col').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });
});
