import LayoutPanel from './LayoutPanel';
import { mount } from 'enzyme';
import React from 'react';

describe('<LayoutPanelBody />', () => {
    describe('Prop spreading', () => {
        test('should allow props to be spread to the LayoutPanelBody component', () => {
            const element = mount(<LayoutPanel.Body data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });
});
