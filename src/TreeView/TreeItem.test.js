import { mount } from 'enzyme';
import React from 'react';
import TreeView from './TreeView';

describe('<TreeView.Item />', () => {
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
