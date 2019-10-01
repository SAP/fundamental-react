import LayoutGrid from './LayoutGrid';
import { mount } from 'enzyme';
import Panel from '../Panel/Panel';
import React from 'react';
import renderer from 'react-test-renderer';

describe('<LayoutGrid />', () => {
    const layoutGrid = (
        <LayoutGrid className='blue'>
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
        </LayoutGrid>
    );

    const layoutGridNoGap = (
        <LayoutGrid nogap>
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
        </LayoutGrid>
    );

    const layoutGridSpan = (
        <LayoutGrid cols={2}>
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
        </LayoutGrid>
    );

    test('layoutGrid snapshots', () => {
        let component = renderer.create(layoutGrid);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        component = renderer.create(layoutGridSpan);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        component = renderer.create(layoutGridNoGap);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    describe('Prop spreading', () => {
        test('should allow props to be spread to the LayoutGrid component', () => {
            const element = mount(<LayoutGrid data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });

    test('forwards the ref', () => {
        let ref;
        class Test extends React.Component {
            constructor(props) {
                super(props);
                ref = React.createRef();
            }
            render = () => <LayoutGrid ref={ref} />;
        }
        mount(<Test />);
        expect(ref.current.tagName).toEqual('DIV');
        expect(ref.current.className).toEqual('fd-layout-grid');
    });
});
