import { mount } from 'enzyme';
import React from 'react';
import WizardFooter from './WizardFooter';

describe('<WizardFooter />', () => {
    it('should be created', () => {
        const component = mount(
            <WizardFooter />
        );

        expect(component.find('button').text()).toBe('Cancel');
    });

    describe('Prop spreading', () => {
        it('should allow props to be spread to the component', () => {
            const component = mount(
                <WizardFooter data-sample='Sample' />
            );

            expect(
                component.getDOMNode()
                    .attributes['data-sample']
                    .value
            ).toBe('Sample');
        });
    });
});
