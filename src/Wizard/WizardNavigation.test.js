import { mount } from 'enzyme';
import React from 'react';
import WizardNavigation from './WizardNavigation';

describe('<WizardNavigation />', () => {
    it('should be created', () => {
        const component = mount(
            <WizardNavigation>
                content
            </WizardNavigation>
        );

        expect(component.find('.fd-wizard__navigation').text()).toBe('content');
        expect(component.find('.fd-wizard__progress-bar').text()).toBe('content');
    });

    describe('Prop spreading', () => {
        it('should allow props to be spread to the component', () => {
            const component = mount(
                <WizardNavigation data-sample='Sample' />
            );

            expect(
                component.getDOMNode()
                    .attributes['data-sample']
                    .value
            ).toBe('Sample');
        });
    });
});
