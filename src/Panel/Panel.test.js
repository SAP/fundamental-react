import { Button } from '../';
import { mount } from 'enzyme';
import Panel from './Panel';
import PanelGrid from './PanelGrid';
import React from 'react';
import renderer from 'react-test-renderer';

describe('<Panel />', () => {
    const panel = (
        <Panel>
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
            <Panel.Filters>
                <div>Panel Filters</div>
                <br />
            </Panel.Filters>
            <Panel.Body>
                <div>Panel Body</div>
            </Panel.Body>
            <Panel.Footer>Panel Footer</Panel.Footer>
        </Panel>
    );

    const panelWithClass = (
        <Panel className='blue'>
            <Panel.Header className='blue'>
                <Panel.Head
                    className='blue'
                    description='Panel Description'
                    title={'Panel Header with Actions'} />
                <Panel.Actions className='blue'>
                    <Button compact glyph='add'>
                        Add New Button
                    </Button>
                </Panel.Actions>
            </Panel.Header>
            <Panel.Filters className='blue'>
                <div>Panel Filters</div>
                <br />
            </Panel.Filters>
            <Panel.Body className='blue'>
                <div>Panel Body</div>
            </Panel.Body>
            <Panel.Footer className='blue'>Panel Footer</Panel.Footer>
        </Panel>
    );

    const panelGrid = (
        <PanelGrid className='blue'>
            <Panel colSpan={2}>
                <Panel.Head title={'Panel Header with Actions'} />
                <Panel.Body>Panel</Panel.Body>
            </Panel>
            <Panel>
                <Panel.Head description='Panel Description' />
                <Panel.Body>Panel</Panel.Body>
            </Panel>
            <Panel>
                <Panel.Head />
                <Panel.Body>Panel</Panel.Body>
            </Panel>
            <Panel>
                <Panel.Body>Panel</Panel.Body>
            </Panel>
            <Panel>
                <Panel.Body>Panel</Panel.Body>
            </Panel>
        </PanelGrid>
    );

    const panelGridNoGap = (
        <PanelGrid nogap>
            <Panel>
                <Panel.Body>Panel</Panel.Body>
            </Panel>
            <Panel>
                <Panel.Body>Panel</Panel.Body>
            </Panel>
            <Panel>
                <Panel.Body>Panel</Panel.Body>
            </Panel>
            <Panel>
                <Panel.Body>Panel</Panel.Body>
            </Panel>
            <Panel>
                <Panel.Body>Panel</Panel.Body>
            </Panel>
        </PanelGrid>
    );

    const panelGridSpan = (
        <PanelGrid cols={2}>
            <Panel>
                <Panel.Body>Panel</Panel.Body>
            </Panel>
            <Panel>
                <Panel.Body>Panel</Panel.Body>
            </Panel>
            <Panel>
                <Panel.Body>Panel</Panel.Body>
            </Panel>
            <Panel>
                <Panel.Body>Panel</Panel.Body>
            </Panel>
        </PanelGrid>
    );

    test('create panels', () => {
        // Create panel
        let component = renderer.create(panel);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // panel grid
        component = renderer.create(panelGrid);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // panel with class
        component = renderer.create(panelWithClass);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // panel with span
        component = renderer.create(panelGridSpan);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // panel with no gap
        component = renderer.create(panelGridNoGap);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    describe('Prop spreading', () => {
        test('should allow props to be spread to the Panel component', () => {
            const element = mount(<Panel data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the PanelGrid component', () => {
            const element = mount(<PanelGrid data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });
});
