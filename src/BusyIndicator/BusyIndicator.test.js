import BusyIndicator from './BusyIndicator';
import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

describe('<BusyIndicator />', () => {
    const showDefaultBusyIndicator = <BusyIndicator show />;
    const smallBusyIndicator = <BusyIndicator show size='s' />;
    const largeBusyIndicator = <BusyIndicator show size='l' />;
    const defaultBusyIndicator = <BusyIndicator />;
    const hideBusyIndicator = <BusyIndicator show={false} />;

    test('create busy indicators', () => {
        // show default busy indicator
        let component = renderer.create(showDefaultBusyIndicator);
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

        // default busy indicator
        component = renderer.create(defaultBusyIndicator);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('hide busy indicator', () => {
        // hide busy indicator
        let component = renderer.create(hideBusyIndicator);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    describe('Prop spreading', () => {
        test('should allow props to be spread to the Busy Indicator component', () => {
            const element = mount(<BusyIndicator data-sample='Sample' show />);

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
            render = () => <BusyIndicator ref={ref} show />;
        }
        mount(<Test />);
        expect(ref.current.tagName).toEqual('DIV');
        expect(ref.current.className).toEqual('fd-busy-indicator--m');
    });
});
