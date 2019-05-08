import { mount } from 'enzyme';
import React from 'react';
import TreeView from './TreeView';

describe('TreeView', () => {
    test('should allow props to be spread to the TreeView component', () => {
        const element = mount(
            <TreeView
                data-sample='Sample' />);

        expect(
            element.getDOMNode().attributes['data-sample'].value
        ).toBe('Sample');
    });
});
