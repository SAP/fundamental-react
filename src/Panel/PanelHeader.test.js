import { Button } from '../';
import { mount } from 'enzyme';
import Panel from './Panel';
import React from 'react';
import renderer from 'react-test-renderer';

describe('<PanelHeader />', () => {
    const panelHeader = (
        <Panel.Header>
            <Panel.Head
                description='Panel Description'
                title={'Panel Header with Actions'} />
            <Panel.Actions>
                <Button compact glyph='add'>
                    Add New Button
                </Button>
            </Panel.Actions>
        </Panel.Header>
    );

    test('create panels', () => {
        // Create panel
        let component = renderer.create(panelHeader);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    describe('Prop spreading', () => {
        test('should allow props to be spread to the PanelHeader component', () => {
            const element = mount(<Panel.Header data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });
});
