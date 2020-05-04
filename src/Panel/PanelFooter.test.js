import { mount } from 'enzyme';
import Panel from './Panel';
import React from 'react';

describe('<PanelFooter />', () => {

    describe('Prop spreading', () => {
        test('should allow props to be spread to the PanelFooter component', () => {
            const element = mount(<Panel.Footer data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });
});
