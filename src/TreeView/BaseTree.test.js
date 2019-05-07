import BaseTree from './_BaseTree';
import { mount } from 'enzyme';
import React from 'react';

describe('BaseTree', () => {
    test('should allow props to be spread to the BaseTree component', () => {
        const element = mount(
            <BaseTree
                data-sample='Sample'
                expandData={{ 'foo': 'bar' }}
                level={2}
                onExpandClick={() => { }} />);

        expect(
            element.getDOMNode().attributes['data-sample'].value
        ).toBe('Sample');
    });
});
