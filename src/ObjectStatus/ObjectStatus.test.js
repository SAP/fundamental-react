import { mount } from 'enzyme';
import ObjectStatus from './ObjectStatus';
import React from 'react';

describe('<ObjectStatus />', () => {
    describe('Prop spreading', () => {
        test('should allow props to be spread to the ObjectStatus component', () => {
            const element = mount(<ObjectStatus ariaLabel='Placeholder label' data-sample='Sample' />);

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
            render = () => <ObjectStatus ariaLabel='Placeholder label' ref={ref}>ObjectStatus</ObjectStatus>;
        }
        mount(<Test />);
        expect(ref.current.tagName).toEqual('SPAN');
        expect(ref.current.className).toEqual('fd-object-status');
    });
});
