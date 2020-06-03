import LayoutPanel from './LayoutPanel';
import { mount } from 'enzyme';
import React from 'react';

describe('<LayoutPanelActions />', () => {

    describe('Prop spreading', () => {
        test('should allow props to be spread to the LayoutPanelActions component', () => {
            const element = mount(<LayoutPanel.Actions data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });
});
