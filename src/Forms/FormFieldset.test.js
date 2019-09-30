import FormFieldset from './FormFieldset';
import FormInput from './FormInput';
import FormItem from './FormItem';
import FormLabel from './FormLabel';
import FormLegend from './FormLegend';
import FormRadioGroup from './FormRadioGroup';
import FormRadioItem from './FormRadioItem';
import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

describe('<FormFieldset />', () => {
    const formFieldset = (
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
            <FormItem className='blue'>
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

    const formFieldsetWithClass = (
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

    test('create form field set', () => {
        let component = renderer.create(formFieldset);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        component = renderer.create(formFieldsetWithClass);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

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
