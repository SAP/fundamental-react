import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import { Tree, TreeBranch, TreeCol, TreeHead, TreeItem, TreeRow, TreeView } from './TreeView';

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
            <TreeHead>
                <TreeCol>Column Header 1</TreeCol>
                <TreeCol>Column Header 2</TreeCol>
                <TreeCol>Column Header 3</TreeCol>
                <TreeCol>Column Header 4</TreeCol>
            </TreeHead>
            <Tree>
                <TreeItem>
                    <TreeRow>
                        <TreeCol>First Level</TreeCol>
                        <TreeCol>Data Col 2</TreeCol>
                        <TreeCol>Data Col 3</TreeCol>
                        <TreeCol>Data Col 4</TreeCol>
                    </TreeRow>
                    <TreeBranch>
                        <TreeItem>
                            <TreeRow>
                                <TreeCol>Child 1</TreeCol>
                                <TreeCol>Data Col 2</TreeCol>
                                <TreeCol>Data Col 3</TreeCol>
                                <TreeCol>Data Col 4</TreeCol>
                            </TreeRow>
                            <TreeBranch>
                                <TreeItem>
                                    <TreeRow>
                                        <TreeCol>Grandchild 1</TreeCol>
                                        <TreeCol>Data Col 2</TreeCol>
                                        <TreeCol>Data Col 3</TreeCol>
                                        <TreeCol>Data Col 4</TreeCol>
                                    </TreeRow>
                                    <TreeBranch>
                                        <TreeItem>
                                            <TreeRow>
                                                <TreeCol>GreatGrandchild 1</TreeCol>
                                                <TreeCol>Data Col 2</TreeCol>
                                                <TreeCol>Data Col 3</TreeCol>
                                                <TreeCol>Data Col 4</TreeCol>
                                            </TreeRow>
                                        </TreeItem>
                                    </TreeBranch>
                                </TreeItem>
                            </TreeBranch>
                        </TreeItem>
                        <TreeItem>
                            <TreeRow>
                                <TreeCol>Child 2</TreeCol>
                                <TreeCol>Data Col 2</TreeCol>
                                <TreeCol>Data Col 3</TreeCol>
                                <TreeCol>Data Col 4</TreeCol>
                            </TreeRow>
                        </TreeItem>
                    </TreeBranch>
                </TreeItem>
                <TreeItem>
                    <TreeRow>
                        <TreeCol>Row 2</TreeCol>
                        <TreeCol>Data Col 2</TreeCol>
                        <TreeCol>Data Col 3</TreeCol>
                        <TreeCol>Data Col 4</TreeCol>
                    </TreeRow>
                    <TreeBranch>
                        <TreeItem>
                            <TreeRow>
                                <TreeCol>Child 1</TreeCol>
                                <TreeCol>Data Col 2</TreeCol>
                                <TreeCol>Data Col 3</TreeCol>
                                <TreeCol>Data Col 4</TreeCol>
                            </TreeRow>
                        </TreeItem>
                        <TreeItem>
                            <TreeRow>
                                <TreeCol>Child 2</TreeCol>
                                <TreeCol>Data Col 2</TreeCol>
                                <TreeCol>Data Col 3</TreeCol>
                                <TreeCol>Data Col 4</TreeCol>
                            </TreeRow>
                        </TreeItem>
                    </TreeBranch>
                </TreeItem>
                <TreeItem>
                    <TreeRow>
                        <TreeCol>Row 3</TreeCol>
                        <TreeCol>Data Col 2</TreeCol>
                        <TreeCol>Data Col 3</TreeCol>
                        <TreeCol>Data Col 4</TreeCol>
                    </TreeRow>
                </TreeItem>
                <TreeItem>
                    <TreeRow>
                        <TreeCol><a href='http://me.com' /></TreeCol>
                        <TreeCol>Data Col 2</TreeCol>
                        <TreeCol>Data Col 3</TreeCol>
                        <TreeCol>Data Col 4</TreeCol>
                    </TreeRow>
                    <TreeBranch>
                        <TreeItem>
                            <TreeRow>
                                <TreeCol>Child 1</TreeCol>
                                <TreeCol>Data Col 2</TreeCol>
                                <TreeCol>Data Col 3</TreeCol>
                                <TreeCol>Data Col 4</TreeCol>
                            </TreeRow>
                        </TreeItem>
                    </TreeBranch>
                </TreeItem>
            </Tree>
        </TreeView>
    );

    const richTreeView = (
        <TreeView>
            <TreeHead>
                <TreeCol>Column Header 1</TreeCol>
                <TreeCol>Column Header 2</TreeCol>
                <TreeCol>Column Header 3</TreeCol>
                <TreeCol>Column Header 4</TreeCol>
            </TreeHead>
            <Tree>
                <TreeItem>
                    <TreeRow>
                        <TreeCol>First Level</TreeCol>
                    </TreeRow>
                    <TreeBranch>
                        <TreeItem>
                            <TreeRow>
                                <TreeCol><a href='http://me.com'>First Level</a></TreeCol>
                                <TreeCol />
                                <TreeCol />
                                <TreeCol />
                            </TreeRow>
                            <TreeBranch>
                                <TreeItem>
                                    <TreeRow>
                                        <TreeCol><a href='http://amazon.com'>Amazon</a></TreeCol>
                                        <TreeCol><a href='http://google.com'>Google</a></TreeCol>
                                        <TreeCol><a href='http://bing.com'>Bing</a></TreeCol>
                                        <TreeCol><a href='http://yahoo.com'>Yahoo</a></TreeCol>
                                        <TreeCol><a href='http://sap.com'>SAP</a></TreeCol>
                                    </TreeRow>
                                </TreeItem>
                                <TreeItem>
                                    <TreeRow>
                                        <TreeCol><a href='http://amazon.com'>Amazon</a></TreeCol>
                                    </TreeRow>
                                </TreeItem>
                            </TreeBranch>
                        </TreeItem>
                        <TreeItem>
                            <TreeRow>
                                <TreeCol>Second Level</TreeCol>
                                <TreeCol />
                                <TreeCol />
                                <TreeCol />
                            </TreeRow>
                            <TreeBranch>
                                <TreeItem>
                                    <TreeRow>
                                        <TreeCol><a href='http://amazon.com'>Amazon</a></TreeCol>
                                    </TreeRow>
                                </TreeItem>
                            </TreeBranch>
                        </TreeItem>
                    </TreeBranch>
                </TreeItem>
            </Tree>
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

    test('expand change callback is called with correct arguments on row expand', () => {
        const onExpandChange = jest.fn();
        const callbackTree = (
            <TreeView onExpandChange={onExpandChange}>
                <Tree>
                    <TreeItem rowId={'testRowId'}>
                        <TreeRow>
                            <TreeCol>Row 1</TreeCol>
                        </TreeRow>
                        <TreeBranch>
                            <TreeItem>
                                <TreeRow>
                                    <TreeCol>Row 2</TreeCol>
                                </TreeRow>
                            </TreeItem>
                        </TreeBranch>
                    </TreeItem>
                </Tree>
            </TreeView>
        );
        const element = mount(callbackTree);
        const button = element.find('button').at(0);

        // Simulate clicking the expand row button
        button.simulate('click');

        expect(onExpandChange).toHaveBeenLastCalledWith(expect.objectContaining({ testRowId: true }));
    });

    test('expand change callback is called with correct arguments on header expand', () => {
        const onExpandChange = jest.fn();
        const callbackTree = (
            <TreeView onExpandChange={onExpandChange}>
                <TreeHead>
                    <TreeCol>Header 1</TreeCol>
                </TreeHead>
                <Tree>
                    <TreeItem>
                        <TreeRow>
                            <TreeCol>Row 1</TreeCol>
                        </TreeRow>
                        <TreeBranch>
                            <TreeItem>
                                <TreeRow>
                                    <TreeCol>Row 2</TreeCol>
                                </TreeRow>
                            </TreeItem>
                        </TreeBranch>
                    </TreeItem>
                </Tree>
            </TreeView>
        );
        const element = mount(callbackTree);
        const button = element.find('button').at(0);

        // Simulate clicking the expand all button
        button.simulate('click');

        const lastCallArg = onExpandChange.mock.calls[onExpandChange.mock.calls.length - 1][0];

        // Expect all expand values to be true
        Object.keys(lastCallArg).forEach((id) => {
            expect(lastCallArg[id]).toBeTruthy();
        });
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

        test('should allow props to be spread to the TreeHead component', () => {
            const element = mount(
                <TreeHead
                    data-sample='Sample' />);

            expect(
                element.find('.fd-tree--header').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the Tree component', () => {
            const element = mount(
                <Tree
                    data-sample='Sample'
                    onExpandClick={() => {}} />);

            expect(
                element.find('.fd-tree').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the TreeItem component', () => {
            const element = mount(
                <TreeItem
                    data-sample='Sample' />);

            expect(
                element.find('.fd-tree__item').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the TreeRow component', () => {
            const element = mount(
                <TreeRow
                    data-sample='Sample' />);

            expect(
                element.find('.fd-tree__row').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the TreeHead component', () => {
            const element = mount(
                <TreeHead
                    data-sample='Sample' />);

            expect(
                element.find('.fd-tree--header').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the TreeHead component\'s button element', () => {
            const element = mount(
                <TreeHead
                    buttonProps={{
                        'data-sample': 'Sample'
                    }}>
                    <TreeCol />
                </TreeHead>
            );

            expect(
                element.find('.fd-tree__control').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the TreeCol component', () => {
            const element = mount(
                <TreeCol
                    data-sample='Sample' />);

            expect(
                element.find('.fd-tree__col').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });
});
