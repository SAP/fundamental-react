import path from 'path';
import React from 'react';
import { Description, DocsText, DocsTile, Header, Import, Properties, Separator } from '../_playground';
import { FormFieldset, FormInput, FormItem, FormLabel, FormLegend, FormMessage, FormRadioGroup, FormRadioItem, FormSelect, FormSet, FormTextarea } from '../';

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
    <FormRadioGroup>
        <FormRadioItem
            id='radio-1'>
            Option 1
        </FormRadioItem>
        <FormRadioItem
            id='radio-2'>
            Option 2
        </FormRadioItem>
        <FormRadioItem
            checked
            id='radio-3'>
            Option 3
        </FormRadioItem>
    </FormRadioGroup>
</FormFieldset>

<FormFieldset>
    <FormLegend>Radio buttons disabled</FormLegend>
    <FormRadioGroup>
        <FormRadioItem
            checked
            disabled
            id='radio-4'>
            Option 1
        </FormRadioItem>
        <FormRadioItem
            disabled
            id='radio-5'>
            Option 2
        </FormRadioItem>
        <FormRadioItem
            disabled
            id='radio-6'>
            Option 3
        </FormRadioItem>
    </FormRadioGroup>
</FormFieldset>

<FormFieldset>
    <FormLegend>Inline Radio buttons</FormLegend>
    <FormRadioGroup
        inline>
        <FormRadioItem
            id='radio-7'>
            Option 1
        </FormRadioItem>
        <FormRadioItem
            checked
            id='radio-8'>
            Option 2
        </FormRadioItem>
        <FormRadioItem
            id='radio-9'>
            Option 3
        </FormRadioItem>
    </FormRadioGroup>
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
    const inputHelpElementsDescription = `
Help elements give the user information about the input. Two types of help elements can be used. \n\n
* The inline help element is displayed as a ? Icon. On hover or click, help content is displayed. \n\n
* Help content can also be visible at all times to avoid mistakes. This type of help generally contains
validation rules about the data allowed in the input field. An example is “Maximum 20 characters”. This
is displayed below the input field.
`;

    const inputStateDescription = `
The state of the input field can reflect validity of the data entered, whether the input data is
editable or disabled.\n\n
* **Default**: The field is editable but no validation has occurred. \n\n
* **Valid**: The data format entered has been validated and it’s correct, such as an email address.\n\n
* **Invalid**: The data entered is not valid and must be corrected.\n\n
* **Warning**: The data entered is formatted correctly but there are other issues are problematic but will not stop the user from moving forward.\n\n
* **Disabled**: This indicates the field is not editable. A common use case is that this field is dependent on a previous entry or selection within the form.\n\n
* **Read Only**: Used to display static information in the context of a form.\n\n

Along with Invalid and Warning, error messages should be displayed below the field so the user can correct the error and move forward.
`;

    return (
        <div>
            <Header>Forms</Header>
            <Description>
                Form elements include field layout, checkboxes, radio buttons and states of a field. Use these
                components along with inline help and error state.
            </Description>
            <Import sourceModulePath={path.join(__dirname, './Forms')} />

            <Separator />

            <Properties sourceModulePath={path.join(__dirname, './Forms')} />

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
                        <FormInput id='input-1' placeholder='Field placeholder text'
                            type='text' />
                    </FormItem>
                </FormSet>

                <FormSet>
                    <FormItem>
                        <FormLabel htmlFor='input-2' required>
                            Required Input
                        </FormLabel>
                        <FormInput id='input-2' placeholder='Field placeholder text'
                            type='text' />
                    </FormItem>
                </FormSet>

                <FormSet>
                    <FormItem>
                        <FormLabel htmlFor='input-3' required>
                            Password
                        </FormLabel>
                        <FormInput id='input-3' placeholder='Field placeholder text'
                            type='password' />
                    </FormItem>
                </FormSet>

                <FormSet>
                    <FormItem>
                        <FormLabel htmlFor='textarea-1' required>
                            Text area
                        </FormLabel>
                        <FormTextarea defaultValue=' Pellentesque metus lacus commodo eget justo ut rutrum varius nunc.' id='textarea-1' />
                    </FormItem>
                </FormSet>
            </DocsTile>
            <DocsText>{inputsCode}</DocsText>

            <Separator />

            <h2>Input Help Elements</h2>
            <Description>{inputHelpElementsDescription}</Description>
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
                        <FormInput id='input-4' type='text' />
                    </FormItem>
                </FormSet>

                <FormSet>
                    <FormItem>
                        <FormLabel htmlFor='input-5'>Input with Help Message</FormLabel>
                        <FormInput id='input-5' type='text' />
                        <FormMessage type='help'>
                            Pellentesque metus lacus commodo eget justo ut rutrum varius nunc
                        </FormMessage>
                    </FormItem>
                </FormSet>
            </DocsTile>
            <DocsText>{inputsHelpCode}</DocsText>

            <Separator />

            <h2>Input States</h2>
            <Description>{inputStateDescription}</Description>

            <DocsTile>
                <FormSet>
                    <FormItem>
                        <FormLabel htmlFor='OatmD552'>Default Input</FormLabel>
                        <FormInput id='OatmD552' placeholder='Field placeholder text'
                            type='text' />
                        <FormMessage>Pellentesque metus lacus commodo eget justo ut rutrum varius nunc</FormMessage>
                    </FormItem>
                </FormSet>

                <FormSet>
                    <FormItem>
                        <FormLabel htmlFor='OatmD553'>Valid Input</FormLabel>
                        <FormInput id='OatmD553' placeholder='Field placeholder text'
                            state='valid' type='text' />
                    </FormItem>
                </FormSet>

                <FormSet>
                    <FormItem>
                        <FormLabel htmlFor='OatmD554'>Invalid Input</FormLabel>
                        <FormInput id='OatmD554' placeholder='Field placeholder text'
                            state='invalid' type='text' />
                        <FormMessage type='error'>
                            Pellentesque metus lacus commodo eget justo ut rutrum varius nunc
                        </FormMessage>
                    </FormItem>
                </FormSet>

                <FormSet>
                    <FormItem>
                        <FormLabel htmlFor='OatmD555'>Warning Input</FormLabel>
                        <FormInput id='OatmD555' placeholder='Field placeholder text'
                            state='warning' type='text' />
                        <FormMessage type='warning'>
                            Pellentesque metus lacus commodo eget justo ut rutrum varius nunc
                        </FormMessage>
                    </FormItem>
                </FormSet>

                <FormSet>
                    <FormItem>
                        <FormLabel htmlFor='OatmD556'>Field Label</FormLabel>
                        <FormInput id='OatmD556' placeholder='Field placeholder text'
                            state='help' type='text' />
                        <FormMessage type='help'>
                            Pellentesque metus lacus commodo eget justo ut rutrum varius nunc
                        </FormMessage>
                    </FormItem>
                </FormSet>

                <FormSet>
                    <FormItem>
                        <FormLabel htmlFor='OatmD557'>Disabled Input</FormLabel>
                        <FormInput
                            disabled
                            id='OatmD557'
                            placeholder='Field placeholder text'
                            state='help'
                            type='text' />
                    </FormItem>
                </FormSet>

                <FormSet>
                    <FormItem>
                        <FormLabel htmlFor='OatmD558'>Readonly Input</FormLabel>
                        <FormInput
                            id='OatmD558'
                            placeholder='Field placeholder text'
                            readOnly
                            state='help'
                            type='text' />
                    </FormItem>
                </FormSet>
            </DocsTile>
            <DocsText>{inputsStateCode}</DocsText>

            <Separator />

            <h2>Select</h2>
            <Description>
                The **FormSelect** component is similar to a **Dropdown** but is more commonly used within a form. It can also be
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
                        <FormSelect disabled id='select-1'>
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
                    <FormRadioGroup>
                        <FormRadioItem
                            id='radio-1'>
                            Option 1
                        </FormRadioItem>
                        <FormRadioItem
                            id='radio-2'>
                            Option 2
                        </FormRadioItem>
                        <FormRadioItem
                            defaultChecked
                            id='radio-3'>
                            Option 3
                        </FormRadioItem>
                    </FormRadioGroup>
                </FormFieldset>

                <FormFieldset>
                    <FormLegend>Radio buttons disabled</FormLegend>
                    <FormRadioGroup>
                        <FormRadioItem
                            defaultChecked
                            disabled
                            id='radio-4'>
                            Option 1
                        </FormRadioItem>
                        <FormRadioItem
                            disabled
                            id='radio-5'>
                            Option 2
                        </FormRadioItem>
                        <FormRadioItem
                            disabled
                            id='radio-6'>
                            Option 3
                        </FormRadioItem>
                    </FormRadioGroup>
                </FormFieldset>

                <FormFieldset>
                    <FormLegend>Inline Radio buttons</FormLegend>
                    <FormRadioGroup
                        inline>
                        <FormRadioItem
                            id='radio-7'>
                            Option 1
                        </FormRadioItem>
                        <FormRadioItem
                            defaultChecked
                            id='radio-8'>
                            Option 2
                        </FormRadioItem>
                        <FormRadioItem
                            id='radio-9'>
                            Option 3
                        </FormRadioItem>
                    </FormRadioGroup>
                </FormFieldset>
            </DocsTile>
            <DocsText>{inputsRadioCode}</DocsText>

            <Separator />

            <h2>Checkbox</h2>
            <Description>
                With checkboxes, all options are visible and the user can make one or more selections.
                This component can also be disabled and displayed in a row.
            </Description>

            <DocsTile>
                <FormFieldset>
                    <FormLegend>Checkboxes</FormLegend>
                    <FormItem isCheck>
                        <FormInput id='checkbox-1' name='checkbox-name-1'
                            type='checkbox' value='' />
                        <FormLabel htmlFor='checkbox-1'>Option One</FormLabel>
                    </FormItem>
                    <FormItem isCheck>
                        <FormInput id='checkbox-2' name='checkbox-name-2'
                            type='checkbox' value='' />
                        <FormLabel htmlFor='checkbox-2'>Option Two</FormLabel>
                    </FormItem>
                    <FormItem isCheck>
                        <FormInput id='checkbox-3' name='checkbox-name-3'
                            type='checkbox' value='' />
                        <FormLabel htmlFor='checkbox-3'>Option Three</FormLabel>
                    </FormItem>
                </FormFieldset>

                <FormFieldset>
                    <FormLegend>Inline Checkbox buttons</FormLegend>
                    <FormItem isCheck isInline>
                        <FormLabel htmlFor='checkbox-4'>
                            <FormInput id='checkbox-4' name='checkbox-name-4'
                                type='checkbox' value='' />
                            Option One
                        </FormLabel>
                    </FormItem>
                    <FormItem isCheck isInline>
                        <FormLabel htmlFor='checkbox-5'>
                            <FormInput id='checkbox-5' name='checkbox-name-5'
                                type='checkbox' value='' />
                            Option Two
                        </FormLabel>
                    </FormItem>
                    <FormItem isCheck isInline>
                        <FormLabel htmlFor='checkbox-6'>
                            <FormInput id='checkbox-6' name='checkbox-name-6'
                                type='checkbox' value='' />
                            Option Three
                        </FormLabel>
                    </FormItem>
                </FormFieldset>
            </DocsTile>
            <DocsText>{inputsCheckboxCode}</DocsText>
        </div>
    );
};
