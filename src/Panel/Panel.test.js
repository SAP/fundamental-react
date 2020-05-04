import { mount } from 'enzyme';
import Panel from './Panel';
import React from 'react';

describe('<Panel />', () => {
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
