import FormGroup from './FormGroup';
import { mount } from 'enzyme';
import React from 'react';

describe('<FormGroup />', () => {
    describe('Prop spreading', () => {
        test('should allow props to be spread to the FormGroup component', () => {
            const element = mount(<FormGroup data-sample='Sample' />);

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
            render = () => <FormGroup ref={ref} />;
        }
        mount(<Test />);
        expect(ref.current.tagName).toEqual('DIV');
        expect(ref.current.className).toEqual('fd-form-group');
    });
});
