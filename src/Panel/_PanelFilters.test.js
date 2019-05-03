import { mount } from 'enzyme';
import Panel from './Panel';
import React from 'react';
import renderer from 'react-test-renderer';

describe('<PanelFilters />', () => {
    const panelFilters = (
        <Panel.Filters>
            <div>Panel Filters</div>
            <br />
        </Panel.Filters>
    );

    test('create panel filters', () => {
        let component = renderer.create(panelFilters);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    describe('Prop spreading', () => {
        test('should allow props to be spread to the PanelFilters component', () => {
            const element = mount(<Panel.Filters data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });
});
