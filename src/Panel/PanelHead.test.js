import { mount } from 'enzyme';
import Panel from './Panel';
import React from 'react';

describe('<PanelHead />', () => {
    describe('PanelHead', () => {
        test('should allow customization of header level', () => {
            const element = mount(<Panel.Head headingLevel={2} title='Sample' />);

            expect(
                element.find('.fd-panel__title').type()
            ).toBe('h2');
        });
    });

    describe('Prop spreading', () => {
        test('should allow props to be spread to the PanelHead component', () => {
            const element = mount(<Panel.Head data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        xtest('should allow props to be spread to the PanelHead component\'s heading element', () => {
            // TODO: placeholder for this test description once that functionality is built
        });

        xtest('should allow props to be spread to the PanelHead component\'s p element', () => {
            // TODO: placeholder for this test description once that functionality is built
        });
    });
});
