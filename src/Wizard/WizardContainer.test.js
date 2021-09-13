import { mount } from 'enzyme';
import React from 'react';
import WizardContainer from './WizardContainer';

describe('<WizardContainer />', () => {
    test('should be created', () => {
        const component = mount(
            <WizardContainer>
                content
            </WizardContainer>
        );

        expect(component.find('.fd-wizard').text()).toBe('content');
    });
});
