import { mount } from 'enzyme';
import Panel from './Panel';
import React from 'react';

describe('<PanelActions />', () => {

    describe('Prop spreading', () => {
        test('should allow props to be spread to the PanelActions component', () => {
            const element = mount(<Panel.Actions data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });
});
