import BusyIndicator from './BusyIndicator';
import { mount } from 'enzyme';
import React from 'react';

describe('<BusyIndicator />', () => {
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
