import MessagePage from './MessagePage';
import { mount } from 'enzyme';
import React from 'react';

describe('<MessagePage />', () => {
    it('should be created', () => {
        const component = mount(
            <MessagePage title='foo' />
        );

        expect(component.find('.fd-message-page__title').text()).toBe('foo');
    });

    describe('Prop spreading', () => {
        it('should allow props to be spread to the component', () => {
            const component = mount(
                <MessagePage data-sample='Sample' title='foo' />
            );

            expect(
                component.getDOMNode()
                    .attributes['data-sample']
                    .value
            ).toBe('Sample');
        });
    });
});
