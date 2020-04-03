import FormTextarea from './FormTextarea';
import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

describe('<FormTextArea />', () => {
    const formTextArea = (
        <FormTextarea id='textarea-2'>
            Pellentesque metus lacus commodo eget justo ut rutrum varius nunc.
        </FormTextarea>
    );
    const formTextareaCounter = (
        <FormTextarea id='textarea-3' maxLength={ 150 } />
    );

    test('create form textarea', () => {
        let component = renderer.create(formTextArea);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('create form textarea with counter', () => {
        let component = renderer.create(formTextareaCounter);
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

    describe('FormTextArea counter', () => {
        const setup = (props, children) => {
            return mount(<FormTextarea {...props}>
                {children}
            </FormTextarea>);
        };
        const counterClass = '.fd-textarea-counter';

        test('should allow counterprops to be spread', () => {
            const maxLength = 1;
            const counterProps = { 'data-sample': 'Sample' };
            const element = setup({ maxLength, counterProps });
            expect(element.find(counterClass).getDOMNode().attributes['data-sample'].value).toBe('Sample');
        });

        test('should get initial value from children', () => {
            const text = 'Hello world';
            const maxLength = 150;
            const expected = `${maxLength - text.length} characters left`;
            const element = setup({ maxLength }, text);
            expect(element.find(counterClass).text()).toEqual(expected);
        });

        test('should get initial value from value prop', () => {
            const text = 'Hello world';
            const maxLength = 150;
            const expected = `${maxLength - text.length} characters left`;
            const element = setup({ maxLength, value: text });
            expect(element.find(counterClass).text()).toEqual(expected);
        });

        test('should get initial value from default value prop', () => {
            const text = 'Hello world';
            const maxLength = 150;
            const expected = `${maxLength - text.length} characters left`;
            const element = setup({ maxLength, defaultValue: text });
            expect(element.find(counterClass).text()).toEqual(expected);
        });

        test('should not display counter when maxLength < 0', () => {
            const maxLength = -1;
            const element = setup({ maxLength }, 'Some text');
            expect(element.find(counterClass).exists()).toBeFalsy();
        });

        test('should trigger onChange Textarea', () => {
            const mockCallback = jest.fn();
            const element = setup({
                maxLength: 150,
                onChange: mockCallback
            });
            element.find('.fd-textarea').simulate('change', { currentTarget: { value: 'a' } });
            expect(mockCallback.mock.calls.length).toBe(1);
        });

        test('should update counter upon typing', () => {
            const text = 'aaa';
            const maxLength = 10;
            const expected = `${maxLength - text.length} characters left`;
            const element = setup({ maxLength });
            element.find('.fd-textarea').simulate('change', { target: { value: text } });
            expect(element.find(counterClass).text()).toEqual(expected);
        });

        test('should maintain counter 0 when count < 0', () => {
            const text = '012345';
            const maxLength = 5;
            const expected = '0 characters left';
            const element = setup({ maxLength });
            element.find('.fd-textarea').simulate('change', { target: { value: text } });
            expect(element.find(counterClass).text()).toEqual(expected);
        });

        test('should account for 1 character left case', () => {
            const text = '1234';
            const maxLength = 5;
            const expected = '1 character left';
            const element = setup({ maxLength });
            element.find('.fd-textarea').simulate('change', { target: { value: text } });
            expect(element.find(counterClass).text()).toEqual(expected);
        });
    });
});
