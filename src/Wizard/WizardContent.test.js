import { mount } from 'enzyme';
import React from 'react';
import WizardContent from './WizardContent';

describe('<WizardContent />', () => {
    it('should be created', () => {
        const component = mount(
            <WizardContent>
                content
            </WizardContent>
        );

        expect(component.find('.fd-wizard__content').text()).toBe('content');
    });

    describe('Prop spreading', () => {
        it('should allow props to be spread to the component', () => {
            const component = mount(
                <WizardContent data-sample='Sample' />
            );

            expect(
                component.getDOMNode()
                    .attributes['data-sample']
                    .value
            ).toBe('Sample');
        });
    });
});
