import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import TreeView from './TreeView';

// mock shortid for snapshot testing
jest.mock('shortid', () => {
    let id = 1;

    return {
        generate: () => id++
    };
});

describe('<TreeView.Row />', () => {
    const multiLevelTreeView = (
        <TreeView>
            <TreeView.Head>
                <TreeView.Col>Column Header 1</TreeView.Col>
                <TreeView.Col>Column Header 2</TreeView.Col>
                <TreeView.Col>Column Header 3</TreeView.Col>
                <TreeView.Col>Column Header 4</TreeView.Col>
            </TreeView.Head>
            <TreeView.Tree>
                <TreeView.Item>
                    <TreeView.Row>
                        <TreeView.Col>First Level</TreeView.Col>
                        <TreeView.Col>Data Col 2</TreeView.Col>
                        <TreeView.Col>Data Col 3</TreeView.Col>
                        <TreeView.Col>Data Col 4</TreeView.Col>
                    </TreeView.Row>
                    <TreeView.Branch>
                        <TreeView.Item>
                            <TreeView.Row>
                                <TreeView.Col>Child 1</TreeView.Col>
                                <TreeView.Col>Data Col 2</TreeView.Col>
                                <TreeView.Col>Data Col 3</TreeView.Col>
                                <TreeView.Col>Data Col 4</TreeView.Col>
                            </TreeView.Row>
                            <TreeView.Branch>
                                <TreeView.Item>
                                    <TreeView.Row>
                                        <TreeView.Col>Grandchild 1</TreeView.Col>
                                        <TreeView.Col>Data Col 2</TreeView.Col>
                                        <TreeView.Col>Data Col 3</TreeView.Col>
                                        <TreeView.Col>Data Col 4</TreeView.Col>
                                    </TreeView.Row>
                                    <TreeView.Branch>
                                        <TreeView.Item>
                                            <TreeView.Row>
                                                <TreeView.Col>GreatGrandchild 1</TreeView.Col>
                                                <TreeView.Col>Data Col 2</TreeView.Col>
                                                <TreeView.Col>Data Col 3</TreeView.Col>
                                                <TreeView.Col>Data Col 4</TreeView.Col>
                                            </TreeView.Row>
                                        </TreeView.Item>
                                    </TreeView.Branch>
                                </TreeView.Item>
                            </TreeView.Branch>
                        </TreeView.Item>
                        <TreeView.Item>
                            <TreeView.Row>
                                <TreeView.Col>Child 2</TreeView.Col>
                                <TreeView.Col>Data Col 2</TreeView.Col>
                                <TreeView.Col>Data Col 3</TreeView.Col>
                                <TreeView.Col>Data Col 4</TreeView.Col>
                            </TreeView.Row>
                        </TreeView.Item>
                    </TreeView.Branch>
                </TreeView.Item>
                <TreeView.Item>
                    <TreeView.Row>
                        <TreeView.Col>Row 2</TreeView.Col>
                        <TreeView.Col>Data Col 2</TreeView.Col>
                        <TreeView.Col>Data Col 3</TreeView.Col>
                        <TreeView.Col>Data Col 4</TreeView.Col>
                    </TreeView.Row>
                    <TreeView.Branch>
                        <TreeView.Item>
                            <TreeView.Row>
                                <TreeView.Col>Child 1</TreeView.Col>
                                <TreeView.Col>Data Col 2</TreeView.Col>
                                <TreeView.Col>Data Col 3</TreeView.Col>
                                <TreeView.Col>Data Col 4</TreeView.Col>
                            </TreeView.Row>
                        </TreeView.Item>
                        <TreeView.Item>
                            <TreeView.Row>
                                <TreeView.Col>Child 2</TreeView.Col>
                                <TreeView.Col>Data Col 2</TreeView.Col>
                                <TreeView.Col>Data Col 3</TreeView.Col>
                                <TreeView.Col>Data Col 4</TreeView.Col>
                            </TreeView.Row>
                        </TreeView.Item>
                    </TreeView.Branch>
                </TreeView.Item>
                <TreeView.Item>
                    <TreeView.Row>
                        <TreeView.Col>Row 3</TreeView.Col>
                        <TreeView.Col>Data Col 2</TreeView.Col>
                        <TreeView.Col>Data Col 3</TreeView.Col>
                        <TreeView.Col>Data Col 4</TreeView.Col>
                    </TreeView.Row>
                </TreeView.Item>
                <TreeView.Item>
                    <TreeView.Row>
                        <TreeView.Col><a href='http://me.com' /></TreeView.Col>
                        <TreeView.Col>Data Col 2</TreeView.Col>
                        <TreeView.Col>Data Col 3</TreeView.Col>
                        <TreeView.Col>Data Col 4</TreeView.Col>
                    </TreeView.Row>
                    <TreeView.Branch>
                        <TreeView.Item>
                            <TreeView.Row>
                                <TreeView.Col>Child 1</TreeView.Col>
                                <TreeView.Col>Data Col 2</TreeView.Col>
                                <TreeView.Col>Data Col 3</TreeView.Col>
                                <TreeView.Col>Data Col 4</TreeView.Col>
                            </TreeView.Row>
                        </TreeView.Item>
                    </TreeView.Branch>
                </TreeView.Item>
            </TreeView.Tree>
        </TreeView>
    );

    const richTreeView = (
        <TreeView>
            <TreeView.Head>
                <TreeView.Col>Column Header 1</TreeView.Col>
                <TreeView.Col>Column Header 2</TreeView.Col>
                <TreeView.Col>Column Header 3</TreeView.Col>
                <TreeView.Col>Column Header 4</TreeView.Col>
            </TreeView.Head>
            <TreeView.Tree>
                <TreeView.Item>
                    <TreeView.Row>
                        <TreeView.Col>First Level</TreeView.Col>
                    </TreeView.Row>
                    <TreeView.Branch>
                        <TreeView.Item>
                            <TreeView.Row>
                                <TreeView.Col><a href='http://me.com'>First Level</a></TreeView.Col>
                                <TreeView.Col />
                                <TreeView.Col />
                                <TreeView.Col />
                            </TreeView.Row>
                            <TreeView.Branch>
                                <TreeView.Item>
                                    <TreeView.Row>
                                        <TreeView.Col><a href='http://amazon.com'>Amazon</a></TreeView.Col>
                                        <TreeView.Col><a href='http://google.com'>Google</a></TreeView.Col>
                                        <TreeView.Col><a href='http://bing.com'>Bing</a></TreeView.Col>
                                        <TreeView.Col><a href='http://yahoo.com'>Yahoo</a></TreeView.Col>
                                        <TreeView.Col><a href='http://sap.com'>SAP</a></TreeView.Col>
                                    </TreeView.Row>
                                </TreeView.Item>
                                <TreeView.Item>
                                    <TreeView.Row>
                                        <TreeView.Col><a href='http://amazon.com'>Amazon</a></TreeView.Col>
                                    </TreeView.Row>
                                </TreeView.Item>
                            </TreeView.Branch>
                        </TreeView.Item>
                        <TreeView.Item>
                            <TreeView.Row>
                                <TreeView.Col>Second Level</TreeView.Col>
                                <TreeView.Col />
                                <TreeView.Col />
                                <TreeView.Col />
                            </TreeView.Row>
                            <TreeView.Branch>
                                <TreeView.Item>
                                    <TreeView.Row>
                                        <TreeView.Col><a href='http://amazon.com'>Amazon</a></TreeView.Col>
                                    </TreeView.Row>
                                </TreeView.Item>
                            </TreeView.Branch>
                        </TreeView.Item>
                    </TreeView.Branch>
                </TreeView.Item>
            </TreeView.Tree>
        </TreeView>
    );

    const falseyCondition = false;
    const conditionalTreeView = (
        <TreeView>
            <TreeView.Head>
                <TreeView.Col>Column Header 1</TreeView.Col>
                {falseyCondition && <TreeView.Col>Column Header 2</TreeView.Col>}
                <TreeView.Col>Column Header 3</TreeView.Col>
                <TreeView.Col>Column Header 4</TreeView.Col>
            </TreeView.Head>
            <TreeView.Tree>
                <TreeView.Item>
                    <TreeView.Row>
                        <TreeView.Col>First Level</TreeView.Col>
                    </TreeView.Row>
                    <TreeView.Branch>
                        <TreeView.Item>
                            <TreeView.Row>
                                {falseyCondition && (
                                    <TreeView.Col>
                                        <a href='http://me.com'>First Level</a>
                                    </TreeView.Col>
                                )}
                                <TreeView.Col>Second level</TreeView.Col>
                                <TreeView.Col />
                                <TreeView.Col />
                            </TreeView.Row>
                            {falseyCondition && <TreeView.Branch />}
                        </TreeView.Item>
                        {falseyCondition && <TreeView.Item />}
                    </TreeView.Branch>
                </TreeView.Item>
                {falseyCondition && <TreeView.Item />}
            </TreeView.Tree>
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

        // conditional tree
        component = renderer.create(conditionalTreeView);
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
                <TreeView.Tree>
                    <TreeView.Item rowId={'testRowId'}>
                        <TreeView.Row>
                            <TreeView.Col>Row 1</TreeView.Col>
                        </TreeView.Row>
                        <TreeView.Branch>
                            <TreeView.Item>
                                <TreeView.Row>
                                    <TreeView.Col>Row 2</TreeView.Col>
                                </TreeView.Row>
                            </TreeView.Item>
                        </TreeView.Branch>
                    </TreeView.Item>
                </TreeView.Tree>
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
                <TreeView.Head>
                    <TreeView.Col>Header 1</TreeView.Col>
                </TreeView.Head>
                <TreeView.Tree>
                    <TreeView.Item>
                        <TreeView.Row>
                            <TreeView.Col>Row 1</TreeView.Col>
                        </TreeView.Row>
                        <TreeView.Branch>
                            <TreeView.Item>
                                <TreeView.Row>
                                    <TreeView.Col>Row 2</TreeView.Col>
                                </TreeView.Row>
                            </TreeView.Item>
                        </TreeView.Branch>
                    </TreeView.Item>
                </TreeView.Tree>
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

        test('should allow props to be spread to the TreeItem component', () => {
            const element = mount(
                <TreeView.Item
                    data-sample='Sample' />);

            expect(
                element.find('.fd-tree__item').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the TreeRow component', () => {
            const element = mount(
                <TreeView.Row
                    data-sample='Sample' />);

            expect(
                element.find('.fd-tree__row').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });
});
