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

describe('<TreeView.Head />', () => {
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

    test('create tree head component', () => {
        // rich tree
        let component = renderer.create(richTreeView);
        let tree = component.toJSON();
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
        test('should allow props to be spread to the TreeHead component', () => {
            const element = mount(
                <TreeView.Head
                    data-sample='Sample' />);

            expect(
                element.find('.fd-tree--header').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the TreeHead component', () => {
            const element = mount(
                <TreeView.Head
                    data-sample='Sample' />);

            expect(
                element.find('.fd-tree--header').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the TreeHead component\'s button element', () => {
            const element = mount(
                <TreeView.Head
                    buttonProps={{
                        'data-sample': 'Sample'
                    }}>
                    <TreeView.Col />
                </TreeView.Head>
            );

            expect(
                element.find('.fd-tree__control').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });
});
