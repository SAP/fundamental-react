import LayoutPanel from './LayoutPanel';
import { mount } from 'enzyme';
import React from 'react';

describe('<LayoutPanelFooter />', () => {

    describe('Prop spreading', () => {
        test('should allow props to be spread to the LayoutPanelFooter component', () => {
            const element = mount(<LayoutPanel.Footer data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });
});
