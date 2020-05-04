import { mount } from 'enzyme';
import Panel from './Panel';
import React from 'react';

describe('<PanelFilters />', () => {

    describe('Prop spreading', () => {
        test('should allow props to be spread to the PanelFilters component', () => {
            const element = mount(<Panel.Filters data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });
});
