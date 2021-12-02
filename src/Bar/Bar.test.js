import Bar from './Bar';
import { mount } from 'enzyme';
import React from 'react';

describe('<Bar />', () => {
    test('should be created', () => {
        const component = mount(
            <Bar
                leftComponents={[<span>Left Text</span>]}
                middleComponents={[<span>Middle Text</span>]}
                rightComponents={[<span>Right Text</span>]} />
        );

        expect(component.find('.fd-bar__left').text()).toBe('Left Text');
        expect(component.find('.fd-bar__middle').text()).toBe('Middle Text');
        expect(component.find('.fd-bar__right').text()).toBe('Right Text');
    });

    describe('Prop spreading', () => {
        test('should allow props to be spread to the component', () => {
            const component = mount(
                <Bar data-sample='Sample' />
            );

            expect(
                component.getDOMNode()
                    .attributes['data-sample']
                    .value
            ).toBe('Sample');
        });
    });
});
