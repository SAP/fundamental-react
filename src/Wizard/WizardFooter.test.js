import { mount } from 'enzyme';
import React from 'react';
import Wizard from './Wizard';

describe('<WizardFooter />', () => {
    test('should be created', () => {
        const component = mount(
            <Wizard.Footer />
        );

        expect(component.find('button').text()).toBe('Cancel');
    });
});
