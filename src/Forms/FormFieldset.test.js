import FormFieldset from './FormFieldset';
import { mount } from 'enzyme';
import React from 'react';

describe('<FormFieldset />', () => {
    describe('FormFieldset Prop spreading', () => {
        test('should allow props to be spread to the FormFieldset component', () => {
            const element = mount(<FormFieldset data-sample='Sample' />);

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
            render = () => <FormFieldset ref={ref} />;
        }
        mount(<Test />);
        expect(ref.current.tagName).toEqual('FIELDSET');
        expect(ref.current.className).toEqual('fd-fieldset');
    });
});
