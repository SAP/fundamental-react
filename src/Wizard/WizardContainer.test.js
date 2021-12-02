import { mount } from 'enzyme';
import React from 'react';
import WizardContainer from './WizardContainer';

describe('<WizardContainer />', () => {
    it('should be created', () => {
        const component = mount(
            <WizardContainer>
                content
            </WizardContainer>
        );

        expect(component.find('.fd-wizard').text()).toBe('content');
    });

    describe('Prop spreading', () => {
        it('should allow props to be spread to the component', () => {
            const component = mount(
                <WizardContainer data-sample='Sample' />
            );

            expect(
                component.getDOMNode()
                    .attributes['data-sample']
                    .value
            ).toBe('Sample');
        });
    });
});
