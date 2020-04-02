import FormTextareaCounter from './FormTextareaCounter';
import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

describe('<FormTextAreaCounter />', () => {

    test('create form textareacounter', () => {
        let component = renderer.create(mount(<FormTextareaCounter
            charCount={150}
            showCounter />));
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    describe('Prop spreading', () => {
        test('should allow props to be spread to the FormTextareaCounter component', () => {
            const element = mount(<FormTextareaCounter data-sample='Sample' showCounter />);
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
            render = () => <FormTextareaCounter ref={ref} showCounter />;
        }
        mount(<Test />);
        expect(ref.current.tagName).toEqual('DIV');
        expect(ref.current.className).toEqual('fd-textarea-counter');
    });

    describe('TextareaCounter tests default', () => {
        let setup = (props) => {
            return mount(<FormTextareaCounter {...props} />);
        };
        test('should add attribute when character count is passed to FormTextarea', () => {
            let element = setup({
                charCount: 150
            });
            expect(element.props().charCount).toBe(150);
        });
        test('should display localized text by default', () => {
            let element = setup({
                charCount: 1,
                localizedText: {
                    counterText: '#placeholder# chars left',
                    counterKeyword: '#placeholder#'
                },
                showCounter: true
            });
            expect(element.find('.fd-textarea-counter').text()).toEqual('1 chars left');
        });
    });
    describe('TextareaCounter tests custom text', () => {
        let setup = (props, text) => {
            return mount(<FormTextareaCounter {...props}>{text}</FormTextareaCounter>);
        };

        test('should display counter at the end', () => {
            let element = setup({
                charCount: 1,
                localizedText: {
                    counterKeyword: '#count#',
                    counterText: 'something'
                },
                showCounter: true
            }, 'word count #count#');
            expect(element.find('.fd-textarea-counter').text()).toEqual('word count 1');
        });

        test('should display only counter', () => {
            let element = setup({
                charCount: 1,
                showCounter: true
            }, '#counter#');
            expect(element.find('.fd-textarea-counter').text()).toEqual('1');
        });
        test('should use localizedText when keyword not found in custom text', () => {
            let element = setup({
                charCount: 1,
                localizedText: {
                    counterText: '#counter# characters left',
                    counterKeyword: '#counter#' },
                showCounter: true
            }, 'chars left #invalidkeyword');
            expect(element.find('.fd-textarea-counter').text()).toEqual('1 characters left');
        });
    });
});
