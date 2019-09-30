import FormInput from './FormInput';
import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

describe('<FormInput />', () => {
    const formInput = (
        <FormInput
            id='input-1'
            placeholder='Field placeholder text'
            state='warning' />
    );

    test('create form input item', () => {
        // create form set with form inputs
        let component = renderer.create(formInput);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    describe('rendering', () => {
        test('should add compact class when compact prop added', () => {
            const element = mount(<FormInput compact />);

            expect(
                element.find('input').hasClass('fd-input--compact')
            ).toBe(true);
        });
    });

    describe('Prop spreading', () => {
        test('should allow props to be spread to the FormInput component', () => {
            const element = mount(<FormInput data-sample='Sample' />);

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
            render = () => <FormInput ref={ref} />;
        }
        mount(<Test />);
        expect(ref.current.tagName).toEqual('INPUT');
        expect(ref.current.className).toEqual('fd-input');
    });
});
