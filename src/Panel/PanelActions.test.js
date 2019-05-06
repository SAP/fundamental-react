import { Button } from '../';
import { mount } from 'enzyme';
import Panel from './Panel';
import React from 'react';
import renderer from 'react-test-renderer';

describe('<PanelActions />', () => {
    const panelActions = (
        <Panel.Actions>
            <Button compact glyph='add'>
                Add New Button
            </Button>
        </Panel.Actions>
    );

    test('create panel actions', () => {
        let component = renderer.create(panelActions);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    describe('Prop spreading', () => {
        test('should allow props to be spread to the PanelActions component', () => {
            const element = mount(<Panel.Actions data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });
});
