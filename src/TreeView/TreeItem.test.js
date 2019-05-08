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

describe('<TreeView.Item />', () => {
    const treeViewItem = (
        <TreeView.Item>
            <TreeView.Row>
                <TreeView.Col>GreatGrandchild 1</TreeView.Col>
                <TreeView.Col>Data Col 2</TreeView.Col>
                <TreeView.Col>Data Col 3</TreeView.Col>
                <TreeView.Col>Data Col 4</TreeView.Col>
            </TreeView.Row>
        </TreeView.Item>
    );

    test('create tree view item component', () => {
        let component = renderer.create(treeViewItem);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    describe('Prop spreading', () => {
        test('should allow props to be spread to the TreeItem component', () => {
            const element = mount(
                <TreeView.Item
                    data-sample='Sample' />);

            expect(
                element.find('.fd-tree__item').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });
});
