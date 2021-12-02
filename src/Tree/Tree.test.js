/* eslint-disable react/prop-types */
import { act } from 'react-test-renderer';
import { mount } from 'enzyme';
import React from 'react';
import {
    toHaveClass
} from '@testing-library/jest-dom/matchers';
import Tree from './Tree';
import { unmountComponentAtNode } from 'react-dom';

expect.extend({ toHaveClass });
let container = null;
beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() =>{
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

describe('<Tree />', () => {
    const tree = ({
        customNode = <Tree.Node> Level 7</Tree.Node>,
        treeProps = {},
        levelOneProps = {}
    } = {} ) => (
        <Tree {...treeProps}>
            <Tree.Node
                {...levelOneProps}
                id='myCustomLevel1'>
                Level 1
                <Tree.Node>
                    Level 2
                    <Tree.Node>
                        Level 3
                        <Tree.Node
                            id='myCustomLevel4'>
                            Level 4
                            <Tree.Node>
                                Level 5
                                <Tree.Node>
                                    Level 6
                                    {customNode}
                                </Tree.Node>
                            </Tree.Node>
                        </Tree.Node>
                    </Tree.Node>
                </Tree.Node>
            </Tree.Node>
            <Tree.Node>
                Level 1
                <Tree.Node>
                    Level 2
                    <Tree.Node>
                        Level 3
                        <Tree.Node>
                            Level 4
                            <Tree.Node>
                                Level 5
                                <Tree.Node>
                                    Level 6
                                    <Tree.Node>
                                        Level 7
                                    </Tree.Node>
                                </Tree.Node>
                            </Tree.Node>
                        </Tree.Node>
                    </Tree.Node>
                </Tree.Node>
            </Tree.Node>
        </Tree>
    );

    describe('Interactions', () => {
        test('Expand button should toggle subtree visibility', () => {
            const wrapper = mount(tree());
            const subTree = wrapper.find('#myCustomLevel1-subtree-root');
            expect(subTree.getDOMNode().getAttribute('aria-hidden')).toBe('true');

            const button = wrapper.find('#myCustomLevel1-expansion-toggle-button');
            act(() => {
                button.simulate('click');
            });
            expect(subTree.getDOMNode().getAttribute('aria-hidden')).toBe('false');
            act(() => {
                button.simulate('click');
            });
            expect(subTree.getDOMNode().getAttribute('aria-hidden')).toBe('true');
            wrapper.unmount();
        });

        test('Expand button onClick callback is called with correct parameters', () => {
            const mockHandler = jest.fn();
            const customNodeData = {
                level: 7,
                displayName: 'Level 4 + 1'
            };
            const wrapper = mount(tree({
                customNode: <Tree.Node
                    id='level7'
                    nodeData={customNodeData}
                    onExpandToggle={mockHandler}>
                    Level 7
                    <Tree.Node>
                        Level 8
                    </Tree.Node>
                </Tree.Node>
            }));

            const button = wrapper.find('#level7-expansion-toggle-button');
            act(() => {
                button.simulate('click');
            });
            expect(mockHandler).toHaveBeenCalledTimes(1);
            expect(mockHandler).toHaveBeenCalledWith(expect.anything(), true, customNodeData);
            act(() => {
                button.simulate('click');
            });
            expect(mockHandler).toHaveBeenCalledTimes(2);
            expect(mockHandler).toHaveBeenCalledWith(expect.anything(), false, customNodeData);
            wrapper.unmount();
        });

        test('TreeNodes should be multi-selectable in a multi select tree, selected container styles should apply', () => {
            const wrapper = mount(tree({
                customNode: <Tree.Node
                    id='level7'>
                    Level 7
                    <Tree.Node>
                        Level 8
                    </Tree.Node>
                </Tree.Node>,
                treeProps: {
                    selection: 'multi'
                }
            }));

            const levelOneCheckBox = wrapper.find('input#myCustomLevel1-selection-control');
            act(() => {
                levelOneCheckBox.simulate('change', { target: {
                    checked: true
                } });// simulate the real checked
            });
            expect(levelOneCheckBox.getDOMNode().getAttribute('aria-checked')).toBeTruthy();

            const levelOneContainer = wrapper.find('li#myCustomLevel1 > .fd-tree__item-container');
            expect(levelOneContainer.getDOMNode()).toHaveClass('is-selected');

            const level7CheckBox = wrapper.find('input#level7-selection-control');
            act(() => {
                level7CheckBox.simulate('change', { target: {
                    checked: true
                } }); // simulate the real checked
            });
            expect(level7CheckBox.getDOMNode().getAttribute('aria-checked')).toBeTruthy();

            const level7Container = wrapper.find('li#level7 > .fd-tree__item-container');
            expect(level7Container.getDOMNode()).toHaveClass('is-selected');

            wrapper.unmount();
        });

        test('should execute onSelectionChange callback with correct parameters in multi-select Tree', () => {
            const levelOneHandler = jest.fn();
            const levelOneData = {
                text: 'test'
            };
            const levelSevenHandler = jest.fn();
            const levelSevenData = {
                level: 7,
                displayName: 'Level 4 + 1'
            };
            const wrapper = mount(tree({
                customNode: <Tree.Node
                    id='level7'
                    nodeData={levelSevenData}
                    onSelectionChange={levelSevenHandler}>
                    Level 7
                    <Tree.Node>
                        Level 8
                    </Tree.Node>
                </Tree.Node>,
                treeProps: {
                    selection: 'multi'
                },
                levelOneProps: {
                    onSelectionChange: levelOneHandler,
                    nodeData: levelOneData
                }
            }));
            const levelOneCheckBox = wrapper.find('input#myCustomLevel1-selection-control');
            act(() => {
                levelOneCheckBox.simulate('change', { target: {
                    checked: true
                } });
            });
            expect(levelOneHandler).toHaveBeenCalledTimes(1);
            expect(levelOneHandler).toHaveBeenCalledWith(expect.anything(), true, levelOneData);

            const level7CheckBox = wrapper.find('input#level7-selection-control');
            act(() => {
                level7CheckBox.simulate('change', { target: {
                    checked: true
                } });
            });
            expect(levelSevenHandler).toHaveBeenCalledTimes(1);
            expect(levelSevenHandler).toHaveBeenCalledWith(expect.anything(), true, levelSevenData);

            wrapper.unmount();
        });

        test('should execute onSelectionChange callback with correct parameters in single-select Tree', () => {
            const radioOneHandler = jest.fn();
            const radioOneData = {
                text: 'test'
            };
            const radioTwoHandler = jest.fn();
            const radioTwoData = {
                level: 7,
                displayName: 'Level 4 + 1'
            };
            const wrapper = mount(
                <Tree id='radioTesting' selection='single'>
                    <Tree.Node id='radio1' nodeData={radioOneData}
                        onSelectionChange={radioOneHandler}>
                        Level 1
                    </Tree.Node>
                    <Tree.Node id='radio2' nodeData={radioTwoData}
                        onSelectionChange={radioTwoHandler}>
                        Level 1
                    </Tree.Node>
                </Tree>
            );
            const levelOneCheckBox = wrapper.find('input#radio1-selection-control');
            act(() => {
                levelOneCheckBox.simulate('change');
            });
            expect(radioOneHandler).toHaveBeenCalledTimes(1);
            expect(radioOneHandler).toHaveBeenCalledWith(expect.anything(), true, radioOneData);

            const levelTwoCheckBox = wrapper.find('input#radio2-selection-control');
            act(() => {
                levelTwoCheckBox.simulate('change');
            });
            expect(radioTwoHandler).toHaveBeenCalledTimes(1);
            expect(radioTwoHandler).toHaveBeenCalledWith(expect.anything(), true, radioTwoData);
            wrapper.unmount();
        });
    });

    describe('Props spreading', () => {
        test('should allow props to be spread on the Tree component', () => {
            const wrapper = mount(tree({
                treeProps: {
                    'data-sample': 'free-samples',
                    id: 'crazyTree',
                    className: 'crazy-styles'
                }
            }));
            const treeRoot = wrapper.find('ul#crazyTree');
            expect(
                treeRoot.getDOMNode().getAttribute('data-sample')
            ).toBe('free-samples');

            expect(
                treeRoot.getDOMNode()
            ).toHaveClass('crazy-styles');
            wrapper.unmount();
        });
    });
});
