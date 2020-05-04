import { mount } from 'enzyme';
import Panel from './Panel';
import React from 'react';

describe('<PanelBody />', () => {
    describe('Prop spreading', () => {
        test('should allow props to be spread to the PanelBody component', () => {
            const element = mount(<Panel.Body data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });
});
