import { Button } from '../';
import { mount } from 'enzyme';
import Panel from './Panel';
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

    test('create panels', () => {
        // Create panel
        let component = renderer.create(panel);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        component = renderer.create(panelWithClass);
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
    });

    test('forwards the ref', () => {
        let ref;
        class Test extends React.Component {
            constructor(props) {
                super(props);
                ref = React.createRef();
            }
            render = () => <Panel ref={ref} />;
        }
        mount(<Test />);
        expect(ref.current.tagName).toEqual('DIV');
        expect(ref.current.className).toEqual('fd-panel');
    });
});
