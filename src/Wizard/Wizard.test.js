import { mount } from 'enzyme';
import React from 'react';
import Wizard from './Wizard';

describe('<Wizard />', () => {
    it('should be created', () => {
        const component = mount(
            <Wizard>
                <Wizard.Step title='Step 1'>
                    <span className='data'>content</span>
                </Wizard.Step>
            </Wizard>
        );

        expect(component.find('.fd-wizard .fd-wizard__content .data').text()).toBe('content');
    });

    describe('Prop spreading', () => {
        it('should allow props to be spread to the component', () => {
            const component = mount(
                <Wizard data-sample='Sample'>
                    <Wizard.Step title='Step 1'>
                        content
                    </Wizard.Step>
                </Wizard>
            );

            expect(
                component.getDOMNode()
                    .attributes['data-sample']
                    .value
            ).toBe('Sample');
        });
    });
});
