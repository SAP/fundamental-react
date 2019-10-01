import FormInput from './FormInput';
import FormItem from './FormItem';
import FormLabel from './FormLabel';
import FormMessage from './FormMessage';
import FormSelect from './FormSelect';
import FormSet from './FormSet';
import FormTextarea from './FormTextarea';
import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

describe('<FormSet />', () => {
    const formSet = (
        <FormSet>
            <FormItem isInline>
                <FormLabel forAttr='input-1'>Default Input</FormLabel>
                <FormInput
                    id='input-1'
                    placeholder='Field placeholder text'
                    type='text' />
            </FormItem>
            <FormItem>
                <FormLabel forAttr='input-1' required>
                    Default Input
                </FormLabel>
                <FormInput
                    id='input-1'
                    placeholder='Field placeholder text'
                    state='warning'
                    type='text' />
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
        </FormSet>
    );

    const formSetWithClass = (
        <FormSet className='blue'>
            <FormItem isInline>
                <FormLabel forAttr='input-1'>Default Input</FormLabel>
                <FormInput
                    id='input-1'
                    placeholder='Field placeholder text'
                    type='text' />
            </FormItem>
        </FormSet>
    );

    test('create form item', () => {
        // create form set with form inputs
        let component = renderer.create(formSet);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        //create form ield set with form inputs
        component = renderer.create(formSetWithClass);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    describe('<FormSet Prop spreading', () => {
        test('should allow props to be spread to the FormSet component', () => {
            const element = mount(<FormSet data-sample='Sample' />);

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
            render = () => <FormSet ref={ref} />;
        }
        mount(<Test />);
        expect(ref.current.tagName).toEqual('DIV');
        expect(ref.current.className).toEqual('fd-form-group');
    });
});


