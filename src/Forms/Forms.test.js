import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {
  FormFieldset,
  FormInput,
  FormItem,
  FormLabel,
  FormLegend,
  FormMessage,
  FormRadio,
  FormSelect,
  FormSet,
  FormTextarea
} from './Forms';

Enzyme.configure({ adapter: new Adapter() });

describe('<Forms />', () => {
  const formInput = (
      <FormSet>
          <FormItem isInline isCheck>
              <FormLabel forAttr='input-1'>Default Input</FormLabel>
              <FormInput
                  type='text'
                  id='input-1'
                  placeholder='Field placeholder text' />
          </FormItem>
          <FormItem>
              <FormLabel forAttr='input-1' required>
          Default Input
              </FormLabel>
              <FormInput
                  type='text'
                  id='input-1'
                  state='help'
                  placeholder='Field placeholder text' />
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
              <FormSelect className='blue' id='select-1'
                  disabled>
                  <option value='1'>Duis malesuada odio volutpat elementum</option>
              </FormSelect>
          </FormItem>
      </FormSet>
  );

  const formFieldSet = (
      <FormFieldset>
          <FormLegend className='blue'>Radio buttons</FormLegend>
          <FormRadio
              className='blue'
              inputs={[
          {
            id: 'radio-1',
            name: 'radio-1',
            value: 'radio-1',
            label: 'Option 1'
          },
          {
            id: 'radio-2',
            name: 'radio-2',
            value: 'radio-2',
            label: 'Option 2'
          },
          {
            id: 'radio-3',
            name: 'radio-3',
            value: 'radio-3',
            label: 'Option 3'
          }
        ]}
              defaultChecked='radio-2' />
          <FormLegend legendText='Radio buttons disabled' />
          <FormRadio
              isInline
              disabled
              inputs={[
          {
            id: 'radio-4',
            name: 'radio-4',
            value: 'radio-4',
            label: 'Option 1'
          },
          {
            id: 'radio-5',
            name: 'radio-5',
            value: 'radio-5',
            label: 'Option 2'
          },
          {
            id: 'radio-6',
            name: 'radio-6',
            value: 'radio-6',
            label: 'Option 3'
          }
        ]}
              defaultChecked='radio-4' />
          <FormLegend legendText='Inline Radio buttons' />
          <FormRadio
              isInline
              inputs={[
          {
            id: 'radio-7',
            name: 'radio-7',
            value: 'radio-7',
            label: 'Option 1'
          },
          {
            id: 'radio-8',
            name: 'radio-8',
            value: 'radio-8',
            label: 'Option 2'
          },
          {
            id: 'radio-9',
            name: 'radio-9',
            value: 'radio-9',
            label: 'Option 3'
          }
        ]}
              defaultChecked='radio-9' />
          <FormRadio
              disabled
              inputs={[
          {
            id: 'radio-7',
            name: 'radio-7',
            value: 'radio-7',
            label: 'Option 1'
          },
          {
            id: 'radio-8',
            name: 'radio-8',
            value: 'radio-8',
            label: 'Option 2'
          },
          {
            id: 'radio-9',
            name: 'radio-9',
            value: 'radio-9',
            label: 'Option 3'
          }
        ]}
              defaultChecked='radio-9' />
          <FormLegend legendText='Checkboxes' />
          <FormItem className='blue' isCheck>
              <FormInput
                  className='blue'
                  type='checkbox'
                  id='checkbox-1'
                  name='checkbox-name-1'
                  value='' />
              <FormLabel className='blue' forAttr='checkbox-1'>
          Option One
              </FormLabel>
          </FormItem>
      </FormFieldset>
  );

  const formSetWithClass = (
      <FormSet className='blue'>
          <FormItem isInline isCheck>
              <FormLabel forAttr='input-1'>Default Input</FormLabel>
              <FormInput
                  type='text'
                  id='input-1'
                  placeholder='Field placeholder text' />
          </FormItem>
      </FormSet>
  );

  const formFieldSetWithClass = (
      <FormFieldset className='blue'>
          <FormLegend className='blue'>Radio buttons</FormLegend>
          <FormRadio
              className='blue'
              inputs={[
          {
            id: 'radio-1',
            name: 'radio-1',
            value: 'radio-1',
            label: 'Option 1'
          },
          {
            id: 'radio-2',
            name: 'radio-2',
            value: 'radio-2',
            label: 'Option 2'
          },
          {
            id: 'radio-3',
            name: 'radio-3',
            value: 'radio-3',
            label: 'Option 3'
          }
        ]}
              defaultChecked='radio-2' />
      </FormFieldset>
  );

  const formRadio = (
      <FormRadio
          inputs={[
        {
          id: 'radio-1',
          name: 'radio-1',
          value: 'radio-1',
          label: 'Option 1'
        },
        {
          id: 'radio-2',
          name: 'radio-2',
          value: 'radio-2',
          label: 'Option 2'
        },
        {
          id: 'radio-3',
          name: 'radio-3',
          value: 'radio-3',
          label: 'Option 3'
        }
      ]}
          defaultChecked='radio-2' />
  );

  test('create form item', () => {
    // create form set with form inputs
    let component = renderer.create(formInput);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // create form ield set with form inputs
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

  test('change selected radio', () => {
    const wrapper = mount(formRadio);
    expect(wrapper.state('selectedItem')).toBe('radio-2');

    wrapper
      .find('input.fd-form__control[type="radio"]')
      .at(0)
      .simulate('change', { currentTarget: { value: 'radio-1' } });

    expect(wrapper.state('selectedItem')).toBe('radio-1');
  });
});
