import FormTextarea from './FormTextarea';
import FormTextareaCounter from './FormTextareaCounter';
import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

describe('<FormTextArea />', () => {
    const formTextArea = (
        <FormTextarea id='textarea-2'>
            Pellentesque metus lacus commodo eget justo ut rutrum varius nunc.
        </FormTextarea>
    );

    test('create form textarea', () => {
        let component = renderer.create(formTextArea);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    describe('Prop spreading', () => {
        test('should allow props to be spread to the FormTextarea component', () => {
            const element = mount(<FormTextarea data-sample='Sample' />);

            expect(
                element.find('.fd-textarea').getDOMNode().attributes['data-sample'].value
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
            render = () => <FormTextarea ref={ref} />;
        }
        mount(<Test />);
        expect(ref.current.tagName).toEqual('TEXTAREA');
        expect(ref.current.className).toEqual('fd-textarea');
    });

    describe('Textarea tests', () => {
        let setup = (props) => {
            return mount(<FormTextarea {...props} />);
        };
        test('should add attribute when counter is passed to FormTextarea', () => {
            let element = setup({
                counter: 150
            });
            expect(element.props().counter).toBe(150);
        });
    });

    describe('<FormTextarea><FormTextareaCounter/>', () => {
        let textareaCounter = mount(<FormTextareaCounter />);
        let setup = (props, children) => {
            return mount(<FormTextarea {...props}>
                {children}
            </FormTextarea>);
        };
        test('should not display textareacounter when disabled', () => {
            let element = setup({
                counter: 150,
                disabled: true
            }, textareaCounter);
            expect(element.find('.fd-textarea-counter').exists()).toBeFalsy();
        });
        test('should not display textareacounter when readonly', () => {
            let element = setup({
                counter: 150,
                disabled: false,
                readOnly: true
            }, textareaCounter);
            expect(element.find('.fd-textarea-counter').exists()).toBeFalsy();
        });
        test('should not display textareacounter when counter is 0', () => {
            let element = setup({
                counter: 0
            }, textareaCounter);
            expect(element.find('.fd-textarea-counter').exists()).toBeFalsy();
        });
        test('should display textareacounter', () => {
            let element = setup({
                counter: 150
            }, textareaCounter);
            expect(element.find('.fd-textarea-counter').text()).toEqual('150 characters left');
        });
        test('should update counter upon typing', () => {
            let element = setup({
                counter: 5
            }, textareaCounter);
            element.find('.fd-textarea').simulate('change', { target: { value: 'aaa' } });
            expect(element.find('.fd-textarea-counter').text()).toEqual('2 characters left');
        });
        test('should maintain counter 0 when count < 0', () => {
            let element = setup({
                counter: 5
            }, textareaCounter);
            element.find('.fd-textarea').simulate('change', { target: { value: 'aaaaaaaa' } });
            expect(element.find('.fd-textarea-counter').text()).toEqual('0 characters left');
        });

    });
});
