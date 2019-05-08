import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import TreeView from './TreeView';

describe('<TreeView.Col />', () => {
    const treeCol = (
        <TreeView.Col>Column Header 1</TreeView.Col>
    );

    test('create tree component', () => {
        // multi-level tree
        let component = renderer.create(treeCol);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    describe('Prop spreading', () => {
        test('should allow props to be spread to the TreeCol component', () => {
            const element = mount(
                <TreeView.Col
                    data-sample='Sample' />);

            expect(
                element.find('.fd-tree__col').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });
});
