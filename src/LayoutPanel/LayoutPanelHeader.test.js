import LayoutPanel from './LayoutPanel';
import { mount } from 'enzyme';
import React from 'react';

describe('<LayoutPanelHeader />', () => {
    describe('Prop spreading', () => {
        test('should allow props to be spread to the LayoutPanelHeader component', () => {
            const element = mount(<LayoutPanel.Header data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });
});
