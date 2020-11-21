import { mount } from 'enzyme';
import React from 'react';
import Token from './Token';

describe('<Token />', () => {
    describe('Prop spreading', () => {
        test('should allow props to be spread to the Token component', () => {
            const element = mount(<Token buttonLabel='placeholder label' data-sample='Sample' />);

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
            render = () => <Token buttonLabel='placeholder label' ref={ref} />;
        }
        mount(<Test />);
        expect(ref.current.tagName).toEqual('SPAN');
        expect(ref.current.className).toEqual('fd-token');
    });
});
