import { Button } from '../Button/Button';
import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import { Panel, PanelActions, PanelBody, PanelContent, PanelFilters, PanelFooter, PanelGrid, PanelHead, PanelHeader} from './Panel';

describe('<Panel />', () => {
    const panel = (
        <Panel>
            <PanelHeader>
                <PanelHead
                    description='Panel Description'
                    title={'Panel Header with Actions'} />
                <PanelActions>
                    <Button compact glyph='add'>
                        Add New Button
                    </Button>
                </PanelActions>
            </PanelHeader>
            <PanelFilters>
                <div>Panel Filters</div>
                <br />
            </PanelFilters>
            <PanelBody>
                <div>Panel Body</div>
            </PanelBody>
            <PanelContent>
                <div>Panel Content</div>
            </PanelContent>
            <PanelFooter>Panel Footer</PanelFooter>
        </Panel>
    );

    const panelWithClass = (
        <Panel className='blue'>
            <PanelHeader className='blue'>
                <PanelHead
                    className='blue'
                    description='Panel Description'
                    title={'Panel Header with Actions'} />
                <PanelActions className='blue'>
                    <Button compact glyph='add'>
                        Add New Button
                    </Button>
                </PanelActions>
            </PanelHeader>
            <PanelFilters className='blue'>
                <div>Panel Filters</div>
                <br />
            </PanelFilters>
            <PanelBody className='blue'>
                <div>Panel Body</div>
            </PanelBody>
            <PanelContent className='blue'>
                <div>Panel Content</div>
            </PanelContent>
            <PanelFooter className='blue'>Panel Footer</PanelFooter>
        </Panel>
    );

    const panelGrid = (
        <PanelGrid className='blue'>
            <Panel colSpan={2}>
                <PanelHead title={'Panel Header with Actions'} />
                <PanelBody>Panel</PanelBody>
            </Panel>
            <Panel>
                <PanelHead description='Panel Description' />
                <PanelBody>Panel</PanelBody>
            </Panel>
            <Panel>
                <PanelHead />
                <PanelBody>Panel</PanelBody>
            </Panel>
            <Panel>
                <PanelBody>Panel</PanelBody>
            </Panel>
            <Panel>
                <PanelBody>Panel</PanelBody>
            </Panel>
        </PanelGrid>
    );

    const panelGridNoGap = (
        <PanelGrid nogap>
            <Panel>
                <PanelBody>Panel</PanelBody>
            </Panel>
            <Panel>
                <PanelBody>Panel</PanelBody>
            </Panel>
            <Panel>
                <PanelBody>Panel</PanelBody>
            </Panel>
            <Panel>
                <PanelBody>Panel</PanelBody>
            </Panel>
            <Panel>
                <PanelBody>Panel</PanelBody>
            </Panel>
        </PanelGrid>
    );

    const panelGridSpan = (
        <PanelGrid cols={2}>
            <Panel>
                <PanelBody>Panel</PanelBody>
            </Panel>
            <Panel>
                <PanelBody>Panel</PanelBody>
            </Panel>
            <Panel>
                <PanelBody>Panel</PanelBody>
            </Panel>
            <Panel>
                <PanelBody>Panel</PanelBody>
            </Panel>
        </PanelGrid>
    );

    test('create panels', () => {
        // create panel
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

        test('should allow props to be spread to the PanelBody component', () => {
            const element = mount(<PanelBody data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the PanelHeader component', () => {
            const element = mount(<PanelHeader data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the PanelHead component', () => {
            const element = mount(<PanelHead data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        xtest('should allow props to be spread to the PanelHead component\'s h1 element', () => {
            // TODO: placeholder for this test description once that functionality is built
        });

        xtest('should allow props to be spread to the PanelHead component\'s p element', () => {
            // TODO: placeholder for this test description once that functionality is built
        });

        test('should allow props to be spread to the PanelActions component', () => {
            const element = mount(<PanelActions data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the PanelFilters component', () => {
            const element = mount(<PanelFilters data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the PanelFooter component', () => {
            const element = mount(<PanelFooter data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the PanelContent component', () => {
            const element = mount(<PanelContent data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });
});
