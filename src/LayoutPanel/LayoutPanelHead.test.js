import LayoutPanel from './LayoutPanel';
import { mount } from 'enzyme';
import React from 'react';

describe('<LayoutPanelHead />', () => {
    describe('LayoutPanelHead', () => {
        test('should allow customization of header level', () => {
            const element = mount(<LayoutPanel.Head headingLevel={2} title='Sample' />);

            expect(
                element.find('.fd-title').type()
            ).toBe('h2');
        });
    });

    describe('Prop spreading', () => {
        test('should allow props to be spread to the LayoutPanelHead component', () => {
            const element = mount(<LayoutPanel.Head data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        xtest('should allow props to be spread to the LayoutPanelHead component\'s heading element', () => {
            // TODO: placeholder for this test description once that functionality is built
        });

        xtest('should allow props to be spread to the LayoutPanelHead component\'s p element', () => {
            // TODO: placeholder for this test description once that functionality is built
        });
    });
});
