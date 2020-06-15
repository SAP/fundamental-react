import LayoutPanel from './LayoutPanel';
import { mount } from 'enzyme';
import React from 'react';

describe('<LayoutPanelFilters />', () => {

    describe('Prop spreading', () => {
        test('should allow props to be spread to the LayoutPanelFilters component', () => {
            const element = mount(<LayoutPanel.Filters data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });
});
