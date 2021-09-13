import { mount } from 'enzyme';
import React from 'react';
import Wizard from './Wizard';

describe('<Wizard />', () => {
    test('should be created', () => {
        const component = mount(
            <Wizard>
                <Wizard.Step label='Step 1'>
                    content
                </Wizard.Step>
            </Wizard>
        );

        expect(component.find('.fd-wizard .fd-wizard__content').text()).toBe('contentNext');
    });
});
