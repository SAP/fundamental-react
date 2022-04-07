import { mount } from 'enzyme';
import React from 'react';
import WizardStep from './WizardStep';

describe('<WizardStep />', () => {
    it('should be created', () => {
        const component = mount(
            <WizardStep indicator='F' title='Foo' />
        );

        expect(component.find('.fd-wizard__step .fd-wizard__label').text()).toBe('Foo');
        expect(component.find('.fd-wizard__step .fd-wizard__step-indicator').text()).toBe('F');
    });

    it('should not render an icon when glyph is not given', () => {
        const component = mount(
            <WizardStep title='Foo' />
        );

        expect(component.find('.fd-wizard__step .fd-wizard__icon').length).toBe(0);
    });

    it('should render an icon when glyph is given', () => {
        const component = mount(
            <WizardStep glyph='icon' title='Foo' />
        );

        expect(component.find('.fd-wizard__step i.fd-wizard__icon').length).toBe(1);
    });

    describe('Prop spreading', () => {
        it('should allow props to be spread to the component', () => {
            const component = mount(
                <WizardStep data-sample='Sample' title='foo' />
            );

            expect(
                component.getDOMNode()
                    .attributes['data-sample']
                    .value
            ).toBe('Sample');
        });
    });
});

