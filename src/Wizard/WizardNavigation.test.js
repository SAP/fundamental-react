import { mount } from 'enzyme';
import React from 'react';
import Wizard from './Wizard';

describe('<WizardNavigation />', () => {
    test('should be created', () => {
        const component = mount(
            <Wizard.Navigation>
                content
            </Wizard.Navigation>
        );

        expect(component.find('.fd-wizard__navigation').text()).toBe('content');
        expect(component.find('.fd-wizard__progress-bar').text()).toBe('content');
    });
});
