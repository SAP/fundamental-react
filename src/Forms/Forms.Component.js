import path from 'path';
import React from 'react';
import { Checkbox, FormFieldset, FormGroup, FormInput, FormItem, FormLabel, FormLegend, FormRadioGroup, FormRadioItem, FormSelect, FormSet, FormTextarea, InlineHelp } from '../';
import { ComponentPage, Example } from '../_playground';

export const FormsComponent = () => {
    return (
        <ComponentPage
            description={`Form elements include field layout, checkboxes, radio buttons and states of a field. Use these
                components along with inline help and error state.`}
            sourceModulePath={path.join(__dirname, './Forms')}
            title='Forms'>

            <Example
                description={`Inputs are used to collect data from the user. When a field is required,
                the \`required\` property will include an asterisk (*).`}
                title='Inputs'>
                <>
                    <FormGroup>
                        <FormItem>
                            <FormLabel htmlFor='input-1'>Default Input</FormLabel>
                            <FormInput id='input-1' placeholder='Field placeholder text' />
                        </FormItem>
                    </FormGroup>

                    <FormGroup>
                        <FormItem>
                            <FormLabel htmlFor='input-2' required>
                                Required Input
                            </FormLabel>
                            <FormInput id='input-2' placeholder='Field placeholder text' />
                        </FormItem>
                    </FormGroup>

                    <FormGroup>
                        <FormItem>
                            <FormLabel htmlFor='input-3' required>
                                Password
                            </FormLabel>
                            <FormInput id='input-3' placeholder='Field placeholder text'
                                type='password' />
                        </FormItem>
                    </FormGroup>

                    <FormGroup>
                        <FormItem>
                            <FormLabel htmlFor='textarea-1' required>
                                Text area
                            </FormLabel>
                            <FormTextarea defaultValue=' Pellentesque metus lacus commodo eget justo ut rutrum varius nunc.' id='textarea-1' />
                        </FormItem>
                    </FormGroup>
                </>
            </Example>

            <Example
                title='Inline Labels'>
                <>
                    <FormGroup>
                        <FormItem isHorizontal>
                            <FormLabel htmlFor='input-1'>Default Input</FormLabel>
                            <FormInput id='input-1' placeholder='Field placeholder text' />
                        </FormItem>
                    </FormGroup>

                    <FormGroup>
                        <FormItem isHorizontal>
                            <FormLabel htmlFor='input-2' required>
                                Required Input
                            </FormLabel>
                            <FormInput id='input-2' placeholder='Field placeholder text' />
                        </FormItem>
                    </FormGroup>

                    <FormGroup>
                        <FormItem isHorizontal>
                            <FormLabel htmlFor='input-3'>
                                Password
                            </FormLabel>
                            <FormInput id='input-3' placeholder='Field placeholder text'
                                type='password' />
                        </FormItem>
                    </FormGroup>

                    <FormGroup>
                        <FormItem isHorizontal>
                            <FormLabel htmlFor='textarea-1'>
                                Text area
                            </FormLabel>
                            <FormTextarea defaultValue=' Pellentesque metus lacus commodo eget justo ut rutrum varius nunc.' id='textarea-1' />
                        </FormItem>
                    </FormGroup>
                </>
            </Example>

            <Example
                description={`Help elements give the user information about the input. Two types of help 
                    elements can be used. \n\n* The inline help element is displayed as a ? Icon. On hover 
                    or click, help content is displayed. \n\n* Help content can also be visible at all 
                    times to avoid mistakes. This type of help generally contains validation rules about 
                    the data allowed in the input field. An example is “Maximum 20 characters”. This 
                    is displayed below the input field.`}
                title='Input Help Elements'>
                <>
                    <FormSet>
                        <FormItem>
                            <FormLabel htmlFor='input-4' isInlineHelp>
                                Input with inline help
                                <InlineHelp
                                    placement='bottom-left'
                                    text='Lorem ipsum dolor sit amet, consectetur adipiscing.' />
                            </FormLabel>
                            <FormInput id='input-4' />
                        </FormItem>
                    </FormSet>

                    <FormSet>
                        <FormItem>
                            <FormLabel htmlFor='input-5'>Input with Help Message</FormLabel>
                            <FormInput id='input-5'
                                validationState={{ state: 'information', text: 'Pellentesque metus lacus commodo eget justo ut rutrum varius nunc' }} />
                        </FormItem>
                    </FormSet>
                </>
            </Example>

            <Example
                description={`The state of the input field can reflect validity of the data entered, 
                    whether the input data is editable or disabled.\n\n* **Default**: The field is 
                    editable but no validation has occurred. \n\n* **Success**: The data format entered 
                    has been validated and it’s correct, such as an email address.\n\n* **Error**: The 
                    data entered is not valid and must be corrected.\n\n* **Warning**: The data entered 
                    is formatted correctly but there are other issues are problematic but will not stop 
                    the user from moving forward.\n\nAlong with Invalid and Warning, error messages should 
                    be displayed below the field so the user can correct the error and move forward.`}
                title='Input States'>
                <>
                    <FormSet>
                        <FormItem>
                            <FormLabel htmlFor='OatmD552'>Default Input</FormLabel>
                            <FormInput id='OatmD552' placeholder='Field placeholder text' />
                        </FormItem>
                    </FormSet>

                    <FormSet>
                        <FormItem>
                            <FormLabel htmlFor='OatmD553'>Success Input</FormLabel>
                            <FormInput id='OatmD553' placeholder='Field placeholder text'
                                validationState={{ state: 'success', text: 'Pellentesque metus lacus commodo eget justo ut rutrum varius nunc' }} />

                        </FormItem>
                    </FormSet>

                    <FormSet>
                        <FormItem>
                            <FormLabel htmlFor='OatmD554'>Error Input</FormLabel>
                            <FormInput id='OatmD554' placeholder='Field placeholder text'
                                validationState={{ state: 'error', text: 'Pellentesque metus lacus commodo eget justo ut rutrum varius nunc' }} />

                        </FormItem>
                    </FormSet>

                    <FormSet>
                        <FormItem>
                            <FormLabel htmlFor='OatmD555'>Warning Input</FormLabel>
                            <FormInput id='OatmD555' placeholder='Field placeholder text'
                                validationState={{ state: 'warning', text: 'Pellentesque metus lacus commodo eget justo ut rutrum varius nunc' }} />

                        </FormItem>
                    </FormSet>

                    <FormSet>
                        <FormItem>
                            <FormLabel htmlFor='OatmD556'>Information Input</FormLabel>
                            <FormInput id='OatmD556' placeholder='Field placeholder text'
                                validationState={{ state: 'information', text: 'Pellentesque metus lacus commodo eget justo ut rutrum varius nunc' }} />

                        </FormItem>
                    </FormSet>
                </>
            </Example>

            <Example
                description={`* **Disabled**: This indicates the field is not 
                editable. A common use case is that this field is dependent on a previous entry or 
                selection within the form.\n\n* **Read Only**: Used to display static information 
                in the context of a form.`}
                title='Disabled and Read Only'>
                <>
                    <FormSet>
                        <FormItem>
                            <FormLabel htmlFor='OatmD557'>Disabled Input</FormLabel>
                            <FormInput
                                disabled
                                id='OatmD557'
                                placeholder='Field placeholder text' />
                        </FormItem>
                    </FormSet>

                    <FormSet>
                        <FormItem>
                            <FormLabel htmlFor='OatmD558'>Readonly Input</FormLabel>
                            <FormInput
                                id='OatmD558'
                                placeholder='Field placeholder text'
                                readOnly />
                        </FormItem>
                    </FormSet>
                </>
            </Example>
            <Example
                description={`The **FormSelect** component is similar to a **Dropdown** but is more commonly used within a form. It can also be
                    set to a disabled state.`}
                title='Selects'>
                <>
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
                </>
            </Example>

            <Example
                description={`Radio buttons allow the user to see all options and select one. Generally, this is used when there are
                    between 2-3 options. This component can also be disabled and displayed in a row.`}
                title='Radio Buttons'>
                <>
                    <FormFieldset>
                        <FormLegend>Radio buttons</FormLegend>
                        <FormRadioGroup>
                            <FormRadioItem>
                                Option 1
                            </FormRadioItem>
                            <FormRadioItem>
                                Option 2
                            </FormRadioItem>
                            <FormRadioItem
                                defaultChecked>
                                Option 3
                            </FormRadioItem>
                        </FormRadioGroup>
                    </FormFieldset>

                    <FormFieldset>
                        <FormLegend>Radio buttons disabled</FormLegend>
                        <FormRadioGroup>
                            <FormRadioItem
                                defaultChecked
                                disabled>
                                Option 1
                            </FormRadioItem>
                            <FormRadioItem
                                disabled>
                                Option 2
                            </FormRadioItem>
                            <FormRadioItem
                                disabled>
                                Option 3
                            </FormRadioItem>
                        </FormRadioGroup>
                    </FormFieldset>

                    <FormFieldset>
                        <FormLegend>Inline Radio buttons</FormLegend>
                        <FormRadioGroup
                            inline>
                            <FormRadioItem>
                                Option 1
                            </FormRadioItem>
                            <FormRadioItem
                                defaultChecked>
                                Option 2
                            </FormRadioItem>
                            <FormRadioItem>
                                Option 3
                            </FormRadioItem>
                        </FormRadioGroup>
                    </FormFieldset>

                    <FormFieldset>
                        <FormLegend>Compact Radio buttons</FormLegend>
                        <FormRadioGroup
                            compact>
                            <FormRadioItem>
                                Option 1
                            </FormRadioItem>
                            <FormRadioItem
                                defaultChecked>
                                Option 2
                            </FormRadioItem>
                            <FormRadioItem>
                                Option 3
                            </FormRadioItem>
                        </FormRadioGroup>
                    </FormFieldset>
                </>
            </Example>

            <Example
                description={`With checkboxes, all options are visible and the user can make one or more selections.
                    This component can also be disabled and displayed in a row.`}
                title='Checkboxes'>
                <FormFieldset>
                    <FormLegend>Checkboxes</FormLegend>
                    <Checkbox
                        defaultChecked>Option 1</Checkbox>
                    <Checkbox
                        disabled>Option 2</Checkbox>
                    <Checkbox
                        indeterminate>Option 3</Checkbox>
                </FormFieldset>

                <FormFieldset>
                    <FormLegend>Inline Checkboxes</FormLegend>
                    <FormRadioGroup inline>
                        <Checkbox>Option 1 </Checkbox>
                        <Checkbox>Option 2 </Checkbox>
                        <Checkbox>Option 3 </Checkbox>
                    </FormRadioGroup>
                </FormFieldset>

                <FormFieldset>
                    <FormLegend>Compact Checkboxes</FormLegend>
                    <FormRadioGroup compact>
                        <Checkbox>Option 1 </Checkbox>
                        <Checkbox>Option 2 </Checkbox>
                        <Checkbox>Option 3 </Checkbox>
                    </FormRadioGroup>
                </FormFieldset>
            </Example>

        </ComponentPage>
    );
};
