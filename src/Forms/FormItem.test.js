import FormInput from './FormInput';
import FormItem from './FormItem';
import FormLabel from './FormLabel';
import FormMessage from './FormMessage';
import FormSelect from './FormSelect';
import FormTextarea from './FormTextarea';
import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

describe('<FormItem />', () => {
    const formItem = (
        <FormItem>
            <FormLabel forAttr='input-1' required>
                Default Input
            </FormLabel>
            <FormInput
                id='input-1'
                placeholder='Field placeholder text'
                state='warning' />
            <FormTextarea className='blue' id='textarea-1'>
                Pellentesque metus lacus commodo eget justo ut rutrum varius nunc.
            </FormTextarea>
            <FormTextarea id='textarea-2'>
                Pellentesque metus lacus commodo eget justo ut rutrum varius nunc.
            </FormTextarea>
            <FormMessage type='help'>
                Pellentesque metus lacus commodo eget justo ut rutrum varius nunc
            </FormMessage>
            <FormMessage className='blue'>
                Pellentesque metus lacus commodo eget justo ut rutrum varius nunc
            </FormMessage>
            <FormSelect id='select-1'>
                <option value='1'>Duis malesuada odio volutpat elementum</option>
                <option value='2'>Suspendisse ante ligula</option>
                <option value='3'>Sed bibendum sapien at posuere interdum</option>
            </FormSelect>
            <FormSelect className='blue' disabled
                id='select-1'>
                <option value='1'>Duis malesuada odio volutpat elementum</option>
            </FormSelect>
        </FormItem>
    );

    test('create form item', () => {
        let component = renderer.create(formItem);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    describe('Rendering', () => {
        test('should add inline class when isInline prop passed', () => {
            const element = mount(<FormItem isInline />);

            expect(
                element.find('div').hasClass('fd-form-item--inline')
            ).toBe(true);
        });
    });

    describe('Prop spreading', () => {
        test('should allow props to be spread to the FormItem component', () => {
            const element = mount(<FormItem data-sample='Sample' />);

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
            render = () => <FormItem ref={ref} />;
        }
        mount(<Test />);
        expect(ref.current.tagName).toEqual('DIV');
        expect(ref.current.className).toEqual('fd-form-item');
    });
});
