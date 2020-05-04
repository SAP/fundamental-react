import { mount } from 'enzyme';
import Panel from './Panel';
import React from 'react';

describe('<PanelHeader />', () => {
    describe('Prop spreading', () => {
        test('should allow props to be spread to the PanelHeader component', () => {
            const element = mount(<Panel.Header data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });
});
