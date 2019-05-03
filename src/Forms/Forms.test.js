import FormFieldset from './FormFieldset';
import FormInput from './FormInput';
import FormItem from './FormItem';
import FormLabel from './FormLabel';
import FormLegend from './FormLegend';
import FormMessage from './FormMessage';
import FormRadioGroup from './FormRadioGroup';
import FormRadioItem from './FormRadioItem';
import FormSelect from './FormSelect';
import FormSet from './FormSet';
import FormTextarea from './FormTextarea';
import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

describe('<Forms />', () => {
    const formInput = (
        <FormSet>
            <FormItem isCheck isInline>
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

    const formFieldSet = (
        <FormFieldset>
            <FormLegend className='blue'>Radio buttons</FormLegend>
            <FormRadioGroup
                className='blue'>
                <FormRadioItem
                    id='radio-1'
                    name='radio-group-1'
                    value='radio-1'>
                    Option 1
                </FormRadioItem>
                <FormRadioItem
                    checked
                    id='radio-2'
                    name='radio-group-1'
                    value='radio-2'>
                    Option 2
                </FormRadioItem>
                <FormRadioItem
                    id='radio-3'
                    name='radio-group-1'
                    value='radio-3'>
                    Option 3
                </FormRadioItem>
            </FormRadioGroup>
            <FormLegend legendText='Radio buttons disabled' />
            <FormRadioGroup
                className='blue'
                inline>
                <FormRadioItem
                    checked
                    disabled
                    id='radio-4'
                    name='radio-group-2'
                    value='radio-4'>
                    Option 1
                </FormRadioItem>
                <FormRadioItem
                    disabled
                    id='radio-5'
                    name='radio-group-2'
                    value='radio-5'>
                    Option 2
                </FormRadioItem>
                <FormRadioItem
                    disabled
                    id='radio-6'
                    name='radio-group-2'
                    value='radio-6'>
                    Option 3
                </FormRadioItem>
            </FormRadioGroup>
            <FormLegend legendText='Inline Radio buttons' />
            <FormRadioGroup
                className='blue'
                inline>
                <FormRadioItem
                    id='radio-7'
                    name='radio-group-3'
                    value='radio-7'>
                    Option 1
                </FormRadioItem>
                <FormRadioItem
                    id='radio-8'
                    name='radio-group-3'
                    value='radio-8'>
                    Option 2
                </FormRadioItem>
                <FormRadioItem
                    checked
                    id='radio-9'
                    name='radio-group-3'
                    value='radio-9'>
                    Option 3
                </FormRadioItem>
            </FormRadioGroup>
            <FormRadioGroup
                className='blue'
                inline>
                <FormRadioItem
                    disabled
                    id='radio-7'
                    name='radio-group-4'
                    value='radio-7'>
                    Option 1
                </FormRadioItem>
                <FormRadioItem
                    disabled
                    id='radio-8'
                    name='radio-group-4'
                    value='radio-8'>
                    Option 2
                </FormRadioItem>
                <FormRadioItem
                    checked
                    disabled
                    id='radio-9'
                    name='radio-group-4'
                    value='radio-9'>
                    Option 3
                </FormRadioItem>
            </FormRadioGroup>
            <FormLegend legendText='Checkboxes' />
            <FormItem className='blue' isCheck>
                <FormInput
                    className='blue'
                    id='checkbox-1'
                    name='checkbox-name-1'
                    type='checkbox'
                    value='' />
                <FormLabel className='blue' forAttr='checkbox-1'>
                    Option One
                </FormLabel>
            </FormItem>
        </FormFieldset>
    );

    const formSetWithClass = (
        <FormSet className='blue'>
            <FormItem isCheck isInline>
                <FormLabel forAttr='input-1'>Default Input</FormLabel>
                <FormInput
                    id='input-1'
                    placeholder='Field placeholder text'
                    type='text' />
            </FormItem>
        </FormSet>
    );

    const formFieldSetWithClass = (
        <FormFieldset className='blue'>
            <FormLegend className='blue'>Radio buttons</FormLegend>
            <FormRadioGroup
                className='blue'>
                <FormRadioItem
                    id='radio-1'
                    name='radio-group-5'
                    value='radio-1'>
                    Option 1
                </FormRadioItem>
                <FormRadioItem
                    checked
                    id='radio-2'
                    name='radio-group-5'
                    value='radio-2'>
                    Option 2
                </FormRadioItem>
                <FormRadioItem
                    id='radio-3'
                    name='radio-group-5'
                    value='radio-3'>
                    Option 3
                </FormRadioItem>
            </FormRadioGroup>
        </FormFieldset>
    );

    test('create form item', () => {
        // create form set with form inputs
        let component = renderer.create(formInput);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        //create form ield set with form inputs
        component = renderer.create(formSetWithClass);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // create form ield set with form inputs
        component = renderer.create(formFieldSetWithClass);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // create form ield set with form inputs
        component = renderer.create(formFieldSet);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    describe('Prop spreading', () => {
        test('should allow props to be spread to the FormSelect component', () => {
            const element = mount(<FormSelect data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the FormSet component', () => {
            const element = mount(<FormSet data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the FormTextarea component', () => {
            const element = mount(<FormTextarea data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });
});
