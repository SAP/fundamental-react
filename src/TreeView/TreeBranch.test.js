import { mount } from 'enzyme';
import React from 'react';
import TreeView from './TreeView';

describe('Tree Branch', () => {
    test('should allow props to be spread to the TreeBranch component', () => {
        const element = mount(
            <TreeView.Branch
                data-sample='Sample' />);

        expect(
            element.getDOMNode().attributes['data-sample'].value
        ).toBe('Sample');
    });
});
