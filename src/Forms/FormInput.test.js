import FormInput from './FormInput';
import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

describe('<FormInput />', () => {
    const formInput = (
        <FormInput
            id='input-1'
            placeholder='Field placeholder text' />
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

    describe('Validation states', () => {
        test('should render the correct snapshots', () => {
            const formInputWarning = (
                <FormInput
                    id='input-2'
                    placeholder='Field placeholder text'
                    validationState={{ state: 'warning', text: 'test' }} />
            );

            let component = renderer.create(formInputWarning);
            let tree = component.toJSON();
            expect(tree).toMatchSnapshot();

            const formInputError = (
                <FormInput
                    id='input-3'
                    placeholder='Field placeholder text'
                    validationState={{ state: 'error', text: 'test' }} />
            );

            component = renderer.create(formInputError);
            tree = component.toJSON();
            expect(tree).toMatchSnapshot();

            const formInputSuccess = (
                <FormInput
                    id='input-4'
                    placeholder='Field placeholder text'
                    validationState={{ state: 'success', text: 'test' }} />
            );

            component = renderer.create(formInputSuccess);
            tree = component.toJSON();
            expect(tree).toMatchSnapshot();

            const formInputInformation = (
                <FormInput
                    id='input-5'
                    placeholder='Field placeholder text'
                    validationState={{ state: 'information', text: 'test' }} />
            );

            component = renderer.create(formInputInformation);
            tree = component.toJSON();
            expect(tree).toMatchSnapshot();
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
