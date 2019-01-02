import React from 'react';
import {
    FormSet,
    FormItem,
    FormLabel,
    FormInput,
    FormRadio,
    FormTextarea,
    FormMessage,
    FormSelect,
    FormFieldset,
    FormLegend
} from '../';
import { DocsTile, DocsText, Separator, Header, Description, Import, Properties } from '../';

export const FormsComponent = () => {
    const inputsCode = `<FormSet>
    <FormItem>
        <FormLabel htmlFor='input-1'>Default Input</FormLabel>
        <FormInput type='text' id='input-1'
            placeholder='Field placeholder text' />
    </FormItem>
</FormSet>

<FormSet>
    <FormItem>
        <FormLabel htmlFor='input-2' required>
            Required Input
        </FormLabel>
        <FormInput type='text' id='input-2'
            placeholder='Field placeholder text' />
    </FormItem>
</FormSet>

<FormSet>
    <FormItem>
        <FormLabel htmlFor='input-3' required>
            Password
        </FormLabel>
        <FormInput type='password' id='input-3'
            placeholder='Field placeholder text' />
    </FormItem>
</FormSet>

<FormSet>
    <FormItem>
        <FormLabel htmlFor='textarea-1' required>
            Text area
        </FormLabel>
        <FormTextarea id='textarea-1' defaultValue=' Pellentesque metus lacus commodo eget justo ut rutrum varius nunc.' />
    </FormItem>
</FormSet>
`;

    const inputsHelpCode = `<FormSet>
    <FormItem>
        <FormLabel htmlFor='input-4'>
            Input with inline help
            <span className='fd-inline-help fd-has-float-right'>
                <span className='fd-inline-help__content fd-inline-help__content--bottom-right'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing.
                </span>
            </span>
        </FormLabel>
        <FormInput type='text' id='input-4' />
    </FormItem>
</FormSet>

<FormSet>
    <FormItem>
        <FormLabel htmlFor='input-5'>Input with Help Message</FormLabel>
        <FormInput type='text' id='input-5' />
        <FormMessage type='help'>
            Pellentesque metus lacus commodo eget justo ut rutrum varius nunc
        </FormMessage>
    </FormItem>
</FormSet>
    `;

    const inputsStateCode = `<FormSet>
    <FormItem>
        <FormLabel htmlFor='OatmD552'>Normal Input</FormLabel>
        <FormInput type='text' id='OatmD552'
            placeholder='Field placeholder text' />
        <FormMessage>Pellentesque metus lacus commodo eget justo ut rutrum varius nunc</FormMessage>
    </FormItem>
</FormSet>

<FormSet>
    <FormItem>
        <FormLabel htmlFor='OatmD553'>Valid Input</FormLabel>
        <FormInput type='text' state='valid'
            id='OatmD553' placeholder='Field placeholder text' />
    </FormItem>
</FormSet>

<FormSet>
    <FormItem>
        <FormLabel htmlFor='OatmD554'>Invalid Input</FormLabel>
        <FormInput type='text' state='invalid'
            id='OatmD554' placeholder='Field placeholder text' />
        <FormMessage type='error'>
            Pellentesque metus lacus commodo eget justo ut rutrum varius nunc
        </FormMessage>
    </FormItem>
</FormSet>

<FormSet>
    <FormItem>
        <FormLabel htmlFor='OatmD555'>Warning Input</FormLabel>
        <FormInput type='text' state='warning'
            id='OatmD555' placeholder='Field placeholder text' />
        <FormMessage type='warning'>
            Pellentesque metus lacus commodo eget justo ut rutrum varius nunc
        </FormMessage>
    </FormItem>
</FormSet>

<FormSet>
    <FormItem>
        <FormLabel htmlFor='OatmD556'>Field Label</FormLabel>
        <FormInput type='text' state='help'
            id='OatmD556' placeholder='Field placeholder text' />
        <FormMessage type='help'>
            Pellentesque metus lacus commodo eget justo ut rutrum varius nunc
        </FormMessage>
    </FormItem>
</FormSet>

<FormSet>
    <FormItem>
        <FormLabel htmlFor='OatmD557'>Disabled Input</FormLabel>
        <FormInput
            type='text'
            state='help'
            id='OatmD557'
            placeholder='Field placeholder text'
            disabled />
    </FormItem>
</FormSet>

<FormSet>
    <FormItem>
        <FormLabel htmlFor='OatmD558'>Readonly Input</FormLabel>
        <FormInput
            type='text'
            state='help'
            id='OatmD558'
            placeholder='Field placeholder text'
            readOnly />
    </FormItem>
</FormSet>
</DocsTile>
`;

    const inputsSelectCode = `<FormSet>
    <FormItem>
        <FormLabel htmlFor='select-1'>Default Select</FormLabel>
        <FormSelect id='select-1'>
            <option value='1'>Duis malesuada odio volutpat elementum</option>
            <option value='2'>Suspendisse ante ligula</option>
            <option value='3'>Sed bibendum sapien at posuere interdum</option>
        </FormSelect>
    </FormItem>
</FormSet>

<FormSet>
    <FormItem>
        <FormLabel htmlFor='select-1'>Default Select</FormLabel>
        <FormSelect id='select-1' disabled>
            <option value='1'>Duis malesuada odio volutpat elementum</option>
            <option value='2'>Suspendisse ante ligula</option>
            <option value='3'>Sed bibendum sapien at posuere interdum</option>
        </FormSelect>
    </FormItem>
</FormSet>
`;

    const inputsRadioCode = `<FormFieldset>
    <FormLegend>Radio buttons</FormLegend>
    <FormRadio
        inputs={[
            { id: 'radio-1', name: 'radio-1', value: 'radio-1', label: 'Option 1' },
            { id: 'radio-2', name: 'radio-2', value: 'radio-2', label: 'Option 2' },
            { id: 'radio-3', name: 'radio-3', value: 'radio-3', label: 'Option 3' }
        ]}
        defaultChecked='radio-2' />
</FormFieldset>

<FormFieldset>
    <FormLegend>Radio buttons disabled</FormLegend>
    <FormRadio
        disabled
        inputs={[
            { id: 'radio-4', name: 'radio-4', value: 'radio-4', label: 'Option 1' },
            { id: 'radio-5', name: 'radio-5', value: 'radio-5', label: 'Option 2' },
            { id: 'radio-6', name: 'radio-6', value: 'radio-6', label: 'Option 3' }
        ]}
        defaultChecked='radio-4' />
</FormFieldset>

<FormFieldset>
    <FormLegend>Inline Radio buttons</FormLegend>
    <FormRadio
        isInline
        inputs={[
            { id: 'radio-7', name: 'radio-7', value: 'radio-7', label: 'Option 1' },
            { id: 'radio-8', name: 'radio-8', value: 'radio-8', label: 'Option 2' },
            { id: 'radio-9', name: 'radio-9', value: 'radio-9', label: 'Option 3' }
        ]}
        defaultChecked='radio-9' />
</FormFieldset>`;

    const inputsCheckboxCode = `<FormFieldset>
    <FormLegend>Checkboxes</FormLegend>
    <FormItem isCheck>
        <FormInput type='checkbox' id='checkbox-1'
            name='checkbox-name-1' value='' />
        <FormLabel htmlFor='checkbox-1'>Option One</FormLabel>
    </FormItem>
    <FormItem isCheck>
        <FormInput type='checkbox' id='checkbox-2'
            name='checkbox-name-2' value='' />
        <FormLabel htmlFor='checkbox-2'>Option Two</FormLabel>
    </FormItem>
    <FormItem isCheck>
        <FormInput type='checkbox' id='checkbox-3'
            name='checkbox-name-3' value='' />
        <FormLabel htmlFor='checkbox-3'>Option Three</FormLabel>
    </FormItem>
</FormFieldset>

<FormFieldset>
    <FormLegend>Inline Checkbox buttons</FormLegend>
    <FormItem isCheck isInline>
        <FormLabel htmlFor='checkbox-4'>
            <FormInput type='checkbox' id='checkbox-4'
                name='checkbox-name-4' value='' />
            Option One
        </FormLabel>
    </FormItem>
    <FormItem isCheck isInline>
        <FormLabel htmlFor='checkbox-5'>
            <FormInput type='checkbox' id='checkbox-5'
                name='checkbox-name-5' value='' />
            Option Two
        </FormLabel>
    </FormItem>
    <FormItem isCheck isInline>
        <FormLabel htmlFor='checkbox-6'>
            <FormInput type='checkbox' id='checkbox-6'
                name='checkbox-name-6' value='' />
            Option Three
        </FormLabel>
    </FormItem>
</FormFieldset>
`;

    return (
        <div>
            <Header>Forms</Header>
            <Description>
                Form elements include field layout, checkboxes, radio buttons and states of a field. Use these
                components along with inline help and error state.
            </Description>
            <Import
                module='FormSet, FormItem, FormLabel, FormInput, FormRadio, FormTextarea, FormMessage, FormSelect, FormFieldset, FormLegend'
                path='/fundamental-react/src/' />

            <Separator />

            <Properties
                type='Child Components'
                properties={[
                    { name: 'FormItem', description: 'An item of the form set.' },
                    { name: 'FormLabel', description: 'Label for the input field.' },
                    { name: 'FormMessage', description: 'Message displayed below the input field.' },
                    { name: 'FormInput', description: 'Input controls for user input data.' },
                    { name: 'FormTextarea', description: 'Multi-line text input control.' },
                    { name: 'FormFieldset', description: 'Fieldset - used to group related elements in a form.' },
                    { name: 'FormLegend', description: 'Defines a caption for the fieldset element.' },
                    { name: 'FormSelect', description: 'The \'select\' component is similar to a dropdown but is more commonly used within a form. It can also be set to a disabled state.' },
                    { name: 'FormRadio', description: 'Fieldset with Radio Buttons.' }
                ]} />

            <Properties
                type='Inputs'
                properties={[
                    {
                        name: 'isCheck',
                        description:
                            'bool - used in FormItem. When set to \'true\', renders an input with type of checkbox.'
                    },
                    {
                        name: 'isInline',
                        description:
                            'bool - used in FormItem. Set to \'true\' to display radio buttons and checkboxes in a row.'
                    },
                    {
                        name: 'required',
                        description: 'bool - set to \'true\' for required input fields. Used in FormLabel.'
                    },
                    {
                        name: 'type',
                        description:
                            'string - when used in FormMessage this property sets the type of the message. The options include \'error\', \'warning\', and \'help\'.'
                    },
                    {
                        name: 'state',
                        description:
                            'string - the state of the input. Options include \'normal\', \'valid\', \'invalid\', \'warning\', \'help\', \'disabled\', and \'readonly\'. Leave empty for normal. Used in FormInput.'
                    },
                    { name: 'disabled', description: 'bool - set to \'true\' to disable the element.' },
                    { name: 'defaultChecked', description: 'string - the id of the element selected by default.' }
                ]} />

            <Separator />

            <h2>Inputs</h2>
            <Description>
                Inputs are used to collect data from the user. When a field is required, the label is displayed in bold
                and noted by an asterisk (*).
            </Description>
            <DocsTile>
                <FormSet>
                    <FormItem>
                        <FormLabel htmlFor='input-1'>Default Input</FormLabel>
                        <FormInput type='text' id='input-1'
                            placeholder='Field placeholder text' />
                    </FormItem>
                </FormSet>

                <FormSet>
                    <FormItem>
                        <FormLabel htmlFor='input-2' required>
                            Required Input
                        </FormLabel>
                        <FormInput type='text' id='input-2'
                            placeholder='Field placeholder text' />
                    </FormItem>
                </FormSet>

                <FormSet>
                    <FormItem>
                        <FormLabel htmlFor='input-3' required>
                            Password
                        </FormLabel>
                        <FormInput type='password' id='input-3'
                            placeholder='Field placeholder text' />
                    </FormItem>
                </FormSet>

                <FormSet>
                    <FormItem>
                        <FormLabel htmlFor='textarea-1' required>
                            Text area
                        </FormLabel>
                        <FormTextarea id='textarea-1' defaultValue=' Pellentesque metus lacus commodo eget justo ut rutrum varius nunc.' />
                    </FormItem>
                </FormSet>
            </DocsTile>
            <DocsText>{inputsCode}</DocsText>

            <Separator />

            <h2>Inputs help elements</h2>
            <Description>
                Help elements give the user information about the input. Two types of help elements can be used. <br />-
                The inline help element is displayed as a ? Icon. On hover or click, help content is displayed. <br />-
                Help content can also be visible at all times to avoid mistakes. This type of help generally contains
                validation rules about the data allowed in the input field. An example is “Maximum 20 characters”. This
                is displayed below the input field.
            </Description>
            <DocsTile>
                <FormSet>
                    <FormItem>
                        <FormLabel htmlFor='input-4'>
                            Input with inline help
                            <span className='fd-inline-help fd-has-float-right'>
                                <span className='fd-inline-help__content fd-inline-help__content--bottom-right'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing.
                                </span>
                            </span>
                        </FormLabel>
                        <FormInput type='text' id='input-4' />
                    </FormItem>
                </FormSet>

                <FormSet>
                    <FormItem>
                        <FormLabel htmlFor='input-5'>Input with Help Message</FormLabel>
                        <FormInput type='text' id='input-5' />
                        <FormMessage type='help'>
                            Pellentesque metus lacus commodo eget justo ut rutrum varius nunc
                        </FormMessage>
                    </FormItem>
                </FormSet>
            </DocsTile>
            <DocsText>{inputsHelpCode}</DocsText>

            <Separator />

            <h2>Input States</h2>
            <Description>
                The state of the input field can reflect validity of the data entered, whether the input data is
                editable or disabled.
                <br />- <strong>Normal</strong>: The field is editable but no validation has occurred. <br />-{' '}
                <strong>Valid</strong>: The data format entered has been validated and it’s correct, such as an email
                address. <br />- <strong>Invalid</strong>: The data entered is not valid and must be corrected. <br />-{' '}
                <strong>Warning</strong>: The data entered is formatted correctly but there are other issues are
                problematic but will not stop the user from moving forward. <br />- <strong>Disabled</strong>: This
                indicates the field is not editable. A common use case is that this field is dependent on a previous
                entry or selection within the form. <br />- <strong>Read Only</strong>: Used to display static
                information in the context of a form. <br />
                Along with Invalid and Warning, error messages should be displayed below the field so the user can
                correct the error and move forward.
            </Description>

            <DocsTile>
                <FormSet>
                    <FormItem>
                        <FormLabel htmlFor='OatmD552'>Normal Input</FormLabel>
                        <FormInput type='text' id='OatmD552'
                            placeholder='Field placeholder text' />
                        <FormMessage>Pellentesque metus lacus commodo eget justo ut rutrum varius nunc</FormMessage>
                    </FormItem>
                </FormSet>

                <FormSet>
                    <FormItem>
                        <FormLabel htmlFor='OatmD553'>Valid Input</FormLabel>
                        <FormInput type='text' state='valid'
                            id='OatmD553' placeholder='Field placeholder text' />
                    </FormItem>
                </FormSet>

                <FormSet>
                    <FormItem>
                        <FormLabel htmlFor='OatmD554'>Invalid Input</FormLabel>
                        <FormInput type='text' state='invalid'
                            id='OatmD554' placeholder='Field placeholder text' />
                        <FormMessage type='error'>
                            Pellentesque metus lacus commodo eget justo ut rutrum varius nunc
                        </FormMessage>
                    </FormItem>
                </FormSet>

                <FormSet>
                    <FormItem>
                        <FormLabel htmlFor='OatmD555'>Warning Input</FormLabel>
                        <FormInput type='text' state='warning'
                            id='OatmD555' placeholder='Field placeholder text' />
                        <FormMessage type='warning'>
                            Pellentesque metus lacus commodo eget justo ut rutrum varius nunc
                        </FormMessage>
                    </FormItem>
                </FormSet>

                <FormSet>
                    <FormItem>
                        <FormLabel htmlFor='OatmD556'>Field Label</FormLabel>
                        <FormInput type='text' state='help'
                            id='OatmD556' placeholder='Field placeholder text' />
                        <FormMessage type='help'>
                            Pellentesque metus lacus commodo eget justo ut rutrum varius nunc
                        </FormMessage>
                    </FormItem>
                </FormSet>

                <FormSet>
                    <FormItem>
                        <FormLabel htmlFor='OatmD557'>Disabled Input</FormLabel>
                        <FormInput
                            type='text'
                            state='help'
                            id='OatmD557'
                            placeholder='Field placeholder text'
                            disabled />
                    </FormItem>
                </FormSet>

                <FormSet>
                    <FormItem>
                        <FormLabel htmlFor='OatmD558'>Readonly Input</FormLabel>
                        <FormInput
                            type='text'
                            state='help'
                            id='OatmD558'
                            placeholder='Field placeholder text'
                            readOnly />
                    </FormItem>
                </FormSet>
            </DocsTile>
            <DocsText>{inputsStateCode}</DocsText>

            <Separator />

            <h2>Select</h2>
            <Description>
                The Select component is similar to a dropdown but is more commonly used within a form. It can also be
                set to a disabled state.
            </Description>
            <DocsTile>
                <FormSet>
                    <FormItem>
                        <FormLabel htmlFor='select-1'>Default Select</FormLabel>
                        <FormSelect id='select-1'>
                            <option value='1'>Duis malesuada odio volutpat elementum</option>
                            <option value='2'>Suspendisse ante ligula</option>
                            <option value='3'>Sed bibendum sapien at posuere interdum</option>
                        </FormSelect>
                    </FormItem>
                </FormSet>

                <FormSet>
                    <FormItem>
                        <FormLabel htmlFor='select-1'>Default Select</FormLabel>
                        <FormSelect id='select-1' disabled>
                            <option value='1'>Duis malesuada odio volutpat elementum</option>
                            <option value='2'>Suspendisse ante ligula</option>
                            <option value='3'>Sed bibendum sapien at posuere interdum</option>
                        </FormSelect>
                    </FormItem>
                </FormSet>
            </DocsTile>
            <DocsText>{inputsSelectCode}</DocsText>

            <Separator />

            <h2>Radio buttons</h2>
            <Description>
                Radio buttons allow the user to see all options and select one. Generally, this is used when there are
                between 2-3 options. This component can also be disabled and displayed in a row.
            </Description>

            <DocsTile>
                <FormFieldset>
                    <FormLegend>Radio buttons</FormLegend>
                    <FormRadio
                        inputs={[
                            { id: 'radio-1', name: 'radio-1', value: 'radio-1', label: 'Option 1' },
                            { id: 'radio-2', name: 'radio-2', value: 'radio-2', label: 'Option 2' },
                            { id: 'radio-3', name: 'radio-3', value: 'radio-3', label: 'Option 3' }
                        ]}
                        defaultChecked='radio-2' />
                </FormFieldset>

                <FormFieldset>
                    <FormLegend>Radio buttons disabled</FormLegend>
                    <FormRadio
                        disabled
                        inputs={[
                            { id: 'radio-4', name: 'radio-4', value: 'radio-4', label: 'Option 1' },
                            { id: 'radio-5', name: 'radio-5', value: 'radio-5', label: 'Option 2' },
                            { id: 'radio-6', name: 'radio-6', value: 'radio-6', label: 'Option 3' }
                        ]}
                        defaultChecked='radio-4' />
                </FormFieldset>

                <FormFieldset>
                    <FormLegend>Inline Radio buttons</FormLegend>
                    <FormRadio
                        isInline
                        inputs={[
                            { id: 'radio-7', name: 'radio-7', value: 'radio-7', label: 'Option 1' },
                            { id: 'radio-8', name: 'radio-8', value: 'radio-8', label: 'Option 2' },
                            { id: 'radio-9', name: 'radio-9', value: 'radio-9', label: 'Option 3' }
                        ]}
                        defaultChecked='radio-9' />
                </FormFieldset>
            </DocsTile>
            <DocsText>{inputsRadioCode}</DocsText>

            <Separator />

            <h2>Checkbox</h2>
            <Description>
                With checkboxes, all options are visible and the user can make one or more selections. This component
                can be set disabled and also displayed in a row.
            </Description>

            <DocsTile>
                <FormFieldset>
                    <FormLegend>Checkboxes</FormLegend>
                    <FormItem isCheck>
                        <FormInput type='checkbox' id='checkbox-1'
                            name='checkbox-name-1' value='' />
                        <FormLabel htmlFor='checkbox-1'>Option One</FormLabel>
                    </FormItem>
                    <FormItem isCheck>
                        <FormInput type='checkbox' id='checkbox-2'
                            name='checkbox-name-2' value='' />
                        <FormLabel htmlFor='checkbox-2'>Option Two</FormLabel>
                    </FormItem>
                    <FormItem isCheck>
                        <FormInput type='checkbox' id='checkbox-3'
                            name='checkbox-name-3' value='' />
                        <FormLabel htmlFor='checkbox-3'>Option Three</FormLabel>
                    </FormItem>
                </FormFieldset>

                <FormFieldset>
                    <FormLegend>Inline Checkbox buttons</FormLegend>
                    <FormItem isCheck isInline>
                        <FormLabel htmlFor='checkbox-4'>
                            <FormInput type='checkbox' id='checkbox-4'
                                name='checkbox-name-4' value='' />
                            Option One
                        </FormLabel>
                    </FormItem>
                    <FormItem isCheck isInline>
                        <FormLabel htmlFor='checkbox-5'>
                            <FormInput type='checkbox' id='checkbox-5'
                                name='checkbox-name-5' value='' />
                            Option Two
                        </FormLabel>
                    </FormItem>
                    <FormItem isCheck isInline>
                        <FormLabel htmlFor='checkbox-6'>
                            <FormInput type='checkbox' id='checkbox-6'
                                name='checkbox-name-6' value='' />
                            Option Three
                        </FormLabel>
                    </FormItem>
                </FormFieldset>
            </DocsTile>
            <DocsText>{inputsCheckboxCode}</DocsText>

            <Separator />
        </div>
    );
};
