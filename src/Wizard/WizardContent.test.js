import { mount } from 'enzyme';
import React from 'react';
import Wizard from './Wizard';

describe('<WizardContent />', () => {
    test('should be created', () => {
        const component = mount(
            <Wizard.Content>
                content
            </Wizard.Content>
        );

        expect(component.find('.fd-wizard__content').text()).toBe('content');
    });
});
