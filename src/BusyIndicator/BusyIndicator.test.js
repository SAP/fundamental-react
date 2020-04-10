import BusyIndicator from './BusyIndicator';
import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

describe('<BusyIndicator />', () => {
    const defaultBusyIndicator = <BusyIndicator />;
    const smallBusyIndicator = <BusyIndicator size='s' />;
    const largeBusyIndicator = <BusyIndicator size='l' />;

    test('create busy indicators', () => {
        // default busy indicator
        let component = renderer.create(defaultBusyIndicator);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // small busy indicator
        component = renderer.create(smallBusyIndicator);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // large busy indicator
        component = renderer.create(largeBusyIndicator);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    describe('Prop spreading', () => {
        test('should allow props to be spread to the Busy Indicator component', () => {
            const element = mount(<BusyIndicator data-sample='Sample' />);

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
            render = () => <BusyIndicator ref={ref} />;
        }
        mount(<Test />);
        expect(ref.current.tagName).toEqual('DIV');
        expect(ref.current.className).toEqual('fd-busy-indicator--m');
    });
});
