import List from './List';
import { mount } from 'enzyme';
import React from 'react';

describe('<ListHeader />', () => {
    const setup = (props = {}) => mount(<List.Header level={4} {...props} />);

    describe('level', () => {
        test('should render h2 when passed level 2', () => {
            const element = setup({ level: 2 });

            expect(element.getDOMNode().tagName).toBe('H2');

        });

        test('should render h3 when passed level 3', () => {
            const element = setup({ level: 3 });

            expect(element.getDOMNode().tagName).toBe('H3');
        });
    });

    describe('Prop spreading', () => {
        test('should allow props to be spread to the ListHeader component', () => {
            const element = mount(<List.Header data-sample='Sample' level={4} />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });
});
