import { mount } from 'enzyme';
import React from 'react';
import TreeView from './TreeView';

describe('<TreeView.Col />', () => {
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
