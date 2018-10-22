import React from 'react'
import { FormSet, FormItem, FormLabel, FormInput, FormRadio, FormTextarea, FormMessage, FormSelect, FormFieldset, FormLegend } from '../'
import { DocsTile, DocsText, Separator, Header, Description, Import, Properties } from '../'

export const FormsComponent = () => {
    const inputsCode = `<FormSet>
    <FormItem>
        <FormLabel forAttr="input-1" labelText="Default Input" />
        <FormInput type="text" id="input-1" placeholder="Field placeholder text"></FormInput>
    </FormItem>
</FormSet>

<FormSet>
    <FormItem>
        <FormLabel forAttr="input-2" type="required" labelText="Required Input*" />
        <FormInput type="text" id="input-2" placeholder="Field placeholder text"></FormInput>
    </FormItem>
</FormSet>

<FormSet>
    <FormItem>
        <FormLabel forAttr="input-3" type="required" labelText="Password*" />
        <FormInput type="password" id="input-3" placeholder="Field placeholder text"></FormInput>
    </FormItem>
</FormSet>

<FormSet>
    <FormItem>
        <FormLabel forAttr="textarea-1" type="required" labelText="Text area" />
        <FormTextarea id="textarea-1">Pellentesque metus lacus commodo eget justo ut rutrum varius nunc.</FormTextarea>
    </FormItem>
</FormSet>
`

    const inputsHelpCode = `<FormSet>
    <FormItem>
        <FormLabel forAttr="input-4" labelText="Input with inline help">
            <span class="fd-inline-help fd-has-float-right">
                <span class="fd-inline-help__content fd-inline-help__content--bottom-right">
                    Lorem ipsum dolor sit amet, consectetur adipiscing.
                </span>
            </span>
        </FormLabel>
        <FormInput type="text" id="input-4"></FormInput>
    </FormItem>
</FormSet>

<FormSet>
    <FormItem>
        <FormLabel forAttr="input-5" labelText="Input with Help Message" />
        <FormInput type="text" id="input-5"></FormInput>
        <span class="fd-form__message fd-form__message--help">
            Pellentesque metus lacus commodo eget justo ut rutrum varius nunc
        </span>
    </FormItem>
</FormSet>`

    const inputsStateCode = `<FormSet>
    <FormItem>
        <FormLabel forAttr="OatmD552" labelText="Normal Input" />
        <FormInput type="text" id="OatmD552" placeholder="Field placeholder text" />
        <FormMessage>Pellentesque metus lacus commodo eget justo ut rutrum varius nunc</FormMessage>
    </FormItem>
</FormSet>

<FormSet>
    <FormItem>
        <FormLabel forAttr="OatmD553" labelText="Valid Input" />
        <FormInput type="text" state="valid" id="OatmD553" placeholder="Field placeholder text" />
    </FormItem>
</FormSet>

<FormSet>
    <FormItem>
        <FormLabel forAttr="OatmD554" labelText="Invalid Input" />
        <FormInput type="text" state="invalid" id="OatmD554" placeholder="Field placeholder text" />
        <FormMessage type="error">Pellentesque metus lacus commodo eget justo ut rutrum varius nunc</FormMessage>
    </FormItem>
</FormSet>

<FormSet>
    <FormItem>
        <FormLabel forAttr="OatmD555" labelText="Warning Input" />
        <FormInput type="text" state="warning" id="OatmD555" placeholder="Field placeholder text" />
        <FormMessage type="warning">Pellentesque metus lacus commodo eget justo ut rutrum varius nunc</FormMessage>
    </FormItem>
</FormSet>

<FormSet>
    <FormItem>
        <FormLabel forAttr="OatmD556" labelText="Field Label" />
        <FormInput type="text" state="help" id="OatmD556" placeholder="Field placeholder text" />
        <FormMessage type="help">Pellentesque metus lacus commodo eget justo ut rutrum varius nunc</FormMessage>
    </FormItem>
</FormSet>

<FormSet>
    <FormItem>
        <FormLabel forAttr="OatmD557" labelText="Disabled Input" />
        <FormInput type="text" state="help" id="OatmD557" placeholder="Field placeholder text" disabled />
    </FormItem>
</FormSet>

<FormSet>
    <FormItem>
        <FormLabel forAttr="OatmD558" labelText="Readonly Input" />
        <FormInput type="text" state="help" id="OatmD558" placeholder="Field placeholder text" readonly />
    </FormItem>
</FormSet>
`

    const inputsSelectCode = `<FormSet>
    <FormItem>
        <FormLabel forAttr="select-1" labelText="Default Select" />
        <FormSelect id="select-1">
            <option value="1">Duis malesuada odio volutpat elementum</option>
            <option value="2">Suspendisse ante ligula</option>
            <option value="3">Sed bibendum sapien at posuere interdum</option>
        </FormSelect>
    </FormItem>
</FormSet>

<FormSet>
    <FormItem>
        <FormLabel forAttr="select-1" labelText="Default Select" />
        <FormSelect id="select-1" disabled>
            <option value="1">Duis malesuada odio volutpat elementum</option>
            <option value="2">Suspendisse ante ligula</option>
            <option value="3">Sed bibendum sapien at posuere interdum</option>
        </FormSelect>
    </FormItem>
</FormSet>`

    const inputsRadioCode = `<FormFieldset>
    <FormLegend legendText="Radio buttons" />
    <FormRadio inputs=
        {[
            { id: 'radio-1', name: 'radio-1', value: 'radio-1', labelText: 'Option 1' },
            { id: 'radio-2', name: 'radio-2', value: 'radio-2', labelText: 'Option 2' },
            { id: 'radio-3', name: 'radio-3', value: 'radio-3', labelText: 'Option 3' }
        ]} />
</FormFieldset>

<FormFieldset>
    <FormLegend legendText="Radio buttons disabled" />
    <FormRadio disabled inputs=
        {[
            { id: 'radio-4', name: 'radio-4', value: 'radio-4', labelText: 'Option 1' },
            { id: 'radio-5', name: 'radio-5', value: 'radio-5', labelText: 'Option 2' },
            { id: 'radio-6', name: 'radio-6', value: 'radio-6', labelText: 'Option 3' }
        ]} />
</FormFieldset>

<FormFieldset>
    <FormLegend legendText="Inline Radio buttons" />
    <FormRadio isInline={true} inputs=
        {[
            { id: 'radio-7', name: 'radio-7', value: 'radio-7', labelText: 'Option 1' },
            { id: 'radio-8', name: 'radio-8', value: 'radio-8', labelText: 'Option 2' },
            { id: 'radio-9', name: 'radio-9', value: 'radio-9', labelText: 'Option 3' }
        ]} />
</FormFieldset>`

    const inputsCheckboxCode = `<FormFieldset>
    <FormLegend legendText="Checkboxes" />
    <FormItem isCheck={true}>
        <FormInput type="checkbox" id="checkbox-1" name="checkbox-name-1" value=""  />
        <FormLabel forAttr="checkbox-1" labelText="Option One" />
    </FormItem>
    <FormItem isCheck={true}>
        <FormInput type="checkbox" id="checkbox-2" name="checkbox-name-2" value="" />
        <FormLabel forAttr="checkbox-2" labelText="Option Two" />
    </FormItem>
    <FormItem isCheck={true}>
        <FormInput type="checkbox" id="checkbox-3" name="checkbox-name-3" value="" />
        <FormLabel forAttr="checkbox-3" labelText="Option Three" />
    </FormItem>
</FormFieldset>

<FormFieldset>
    <FormLegend legendText="Inline Checkbox buttons" />
    <FormItem isCheck={true} isInline={true}>
        <FormLabel forAttr="checkbox-4">
            <FormInput type="checkbox" id="checkbox-4" name="checkbox-name-4" value="" />
            Option One
        </FormLabel>
    </FormItem>
    <FormItem isCheck={true} isInline={true}>
        <FormLabel forAttr="checkbox-5">
            <FormInput type="checkbox" id="checkbox-5" name="checkbox-name-5" value="" />
            Option Two
        </FormLabel>
    </FormItem>
    <FormItem isCheck={true} isInline={true}>
        <FormLabel forAttr="checkbox-6">
            <FormInput type="checkbox" id="checkbox-6" name="checkbox-name-6" value="" />
            Option Three
        </FormLabel>
    </FormItem>
</FormFieldset>`


    return (
        <div>
            <Header>Forms</Header>
            <Description>Form elements include field layout, checkboxes, radio buttons and states of a field. Use these components along with inline help and error state.
            </Description>
            <Import module="FormSet, FormItem, FormLabel, FormInput, FormRadio, FormTextarea, FormMessage, FormSelect, FormFieldset, FormLegend" path="/fundamental-react/src/" />

            <Separator />

            <Properties type="Inputs" properties=
                {[
                    { name: 'forAttr', description: 'String - input \'for\' attribute.' },
                    { name: 'labelText', description: 'String - text for the label.' },
                    { name: 'type', description: 'String - the input type. Options include \'text\', \'password\', \'radio\', \'checkbox\', \'button\'.' },
                    { name: 'id', description: 'String - input \'id\' attribute.' },
                    { name: 'placeholder', description: 'String - input \'placeholder\' attribute.' },
                    { name: 'state', description: 'String - the state of the input. Options include \'normal\', \'valid\', \'invalid\', \'warning\', \'help\', \'disabled\', and \'readonly\'. Leave empty for normal.' },
                    { name: 'isCheck', description: 'Bool - when set to true, renders an input with type of checkbox.' },
                    { name: 'isInline', description: 'Bool - when set to true, displays the element in a line. ' }
                ]} />

            <Separator />

            <h2>Inputs</h2>
            <Description>Inputs are used to collect data from the user. When a field is required, the label is displayed in bold and noted by an asterisk (*).</Description>
            <DocsTile>
                <FormSet>
                    <FormItem>
                        <FormLabel forAttr="input-1" labelText="Default Input" />
                        <FormInput type="text" id="input-1" placeholder="Field placeholder text"></FormInput>
                    </FormItem>
                </FormSet>

                <FormSet>
                    <FormItem>
                        <FormLabel forAttr="input-2" type="required" labelText="Required Input*" />
                        <FormInput type="text" id="input-2" placeholder="Field placeholder text"></FormInput>
                    </FormItem>
                </FormSet>

                <FormSet>
                    <FormItem>
                        <FormLabel forAttr="input-3" type="required" labelText="Password*" />
                        <FormInput type="password" id="input-3" placeholder="Field placeholder text"></FormInput>
                    </FormItem>
                </FormSet>

                <FormSet>
                    <FormItem>
                        <FormLabel forAttr="textarea-1" type="required" labelText="Text area" />
                        <FormTextarea id="textarea-1">Pellentesque metus lacus commodo eget justo ut rutrum varius nunc.</FormTextarea>
                    </FormItem>
                </FormSet>

            </DocsTile>
            <DocsText>{inputsCode}</DocsText>

            <Separator />

            <h2>Inputs help elements</h2>
            <Description>Help elements give the user information about the input. Two types of help elements can be used. <br />
                - The inline help element is displayed as a ? Icon. On hover or click, help content is displayed. <br />
                - Help content can also be visible at all times to avoid mistakes. This type of help generally contains validation rules about the data allowed in the input field. An example is “Maximum 20 characters”. This is displayed below the input field.</Description>
            <DocsTile>
                <FormSet>
                    <FormItem>
                        <FormLabel forAttr="input-4" labelText="Input with inline help">
                            <span className="fd-inline-help fd-has-float-right">
                                <span className="fd-inline-help__content fd-inline-help__content--bottom-right">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing.
                                </span>
                            </span>
                        </FormLabel>
                        <FormInput type="text" id="input-4"></FormInput>
                    </FormItem>
                </FormSet>

                <FormSet>
                    <FormItem>
                        <FormLabel forAttr="input-5" labelText="Input with Help Message" />
                        <FormInput type="text" id="input-5"></FormInput>
                        <span className="fd-form__message fd-form__message--help">
                            Pellentesque metus lacus commodo eget justo ut rutrum varius nunc
                        </span>
                    </FormItem>
                </FormSet>
            </DocsTile>
            <DocsText>{inputsHelpCode}</DocsText>

            <Separator />

            <h2>Input States</h2>
            <Description>The state of the input field can reflect validity of the data entered, whether the input data is editable or disabled.<br />
                - Normal: The field is editable but no validation has occurred. <br />
                - Valid: The data format entered has been validated and it’s correct, such as an email address. <br />
                - Invalid: The data entered is not valid and must be corrected. <br />
                - Warning: The data entered is formatted correctly but there are other issues are problematic but will not stop the user from moving forward. <br />
                - Disabled: This indicates the field is not editable. A common use case is that this field is dependent on a previous entry or selection within the form. <br />
                - Read Only: Used to display static information in the context of a form. <br />
                Along with Invalid and Warning, error messages should be displayed below the field so the user can correct the error and move forward.</Description>

            <DocsTile>
                <FormSet>
                    <FormItem>
                        <FormLabel forAttr="OatmD552" labelText="Normal Input" />
                        <FormInput type="text" id="OatmD552" placeholder="Field placeholder text" />
                        <FormMessage>Pellentesque metus lacus commodo eget justo ut rutrum varius nunc</FormMessage>
                    </FormItem>
                </FormSet>

                <FormSet>
                    <FormItem>
                        <FormLabel forAttr="OatmD553" labelText="Valid Input" />
                        <FormInput type="text" state="valid" id="OatmD553" placeholder="Field placeholder text" />
                    </FormItem>
                </FormSet>

                <FormSet>
                    <FormItem>
                        <FormLabel forAttr="OatmD554" labelText="Invalid Input" />
                        <FormInput type="text" state="invalid" id="OatmD554" placeholder="Field placeholder text" />
                        <FormMessage type="error">Pellentesque metus lacus commodo eget justo ut rutrum varius nunc</FormMessage>
                    </FormItem>
                </FormSet>

                <FormSet>
                    <FormItem>
                        <FormLabel forAttr="OatmD555" labelText="Warning Input" />
                        <FormInput type="text" state="warning" id="OatmD555" placeholder="Field placeholder text" />
                        <FormMessage type="warning">Pellentesque metus lacus commodo eget justo ut rutrum varius nunc</FormMessage>
                    </FormItem>
                </FormSet>

                <FormSet>
                    <FormItem>
                        <FormLabel forAttr="OatmD556" labelText="Field Label" />
                        <FormInput type="text" state="help" id="OatmD556" placeholder="Field placeholder text" />
                        <FormMessage type="help">Pellentesque metus lacus commodo eget justo ut rutrum varius nunc</FormMessage>
                    </FormItem>
                </FormSet>

                <FormSet>
                    <FormItem>
                        <FormLabel forAttr="OatmD557" labelText="Disabled Input" />
                        <FormInput type="text" state="help" id="OatmD557" placeholder="Field placeholder text" disabled />
                    </FormItem>
                </FormSet>

                <FormSet>
                    <FormItem>
                        <FormLabel forAttr="OatmD558" labelText="Readonly Input" />
                        <FormInput type="text" state="help" id="OatmD558" placeholder="Field placeholder text" readonly />
                    </FormItem>
                </FormSet>

            </DocsTile>
            <DocsText>{inputsStateCode}</DocsText>

            <Separator />

            <h2>Select</h2>
            <Description>The Select component is similar to a dropdown but is more commonly used within a form. It can also be set to a disabled state.</Description>
            <DocsTile>
                <FormSet>
                    <FormItem>
                        <FormLabel forAttr="select-1" labelText="Default Select" />
                        <FormSelect id="select-1">
                            <option value="1">Duis malesuada odio volutpat elementum</option>
                            <option value="2">Suspendisse ante ligula</option>
                            <option value="3">Sed bibendum sapien at posuere interdum</option>
                        </FormSelect>
                    </FormItem>
                </FormSet>

                <FormSet>
                    <FormItem>
                        <FormLabel forAttr="select-1" labelText="Default Select" />
                        <FormSelect id="select-1" disabled>
                            <option value="1">Duis malesuada odio volutpat elementum</option>
                            <option value="2">Suspendisse ante ligula</option>
                            <option value="3">Sed bibendum sapien at posuere interdum</option>
                        </FormSelect>
                    </FormItem>
                </FormSet>
            </DocsTile>
            <DocsText>{inputsSelectCode}</DocsText>

            <Separator />

            <h2>Radio buttons</h2>
            <Description>Radio buttons allow the user to see all options and select one. Generally, this is used when there are between 2-3 options. This component can also be disabled and displayed in a row.</Description>

            <DocsTile>
                <FormFieldset>
                    <FormLegend legendText="Radio buttons" />
                    <FormRadio inputs=
                        {[
                            { id: 'radio-1', name: 'radio-1', value: 'radio-1', labelText: 'Option 1' },
                            { id: 'radio-2', name: 'radio-2', value: 'radio-2', labelText: 'Option 2' },
                            { id: 'radio-3', name: 'radio-3', value: 'radio-3', labelText: 'Option 3' }
                        ]} />
                </FormFieldset>

                <FormFieldset>
                    <FormLegend legendText="Radio buttons disabled" />
                    <FormRadio disabled inputs=
                        {[
                            { id: 'radio-4', name: 'radio-4', value: 'radio-4', labelText: 'Option 1' },
                            { id: 'radio-5', name: 'radio-5', value: 'radio-5', labelText: 'Option 2' },
                            { id: 'radio-6', name: 'radio-6', value: 'radio-6', labelText: 'Option 3' }
                        ]} />
                </FormFieldset>

                <FormFieldset>
                    <FormLegend legendText="Inline Radio buttons" />
                    <FormRadio isInline={true} inputs=
                        {[
                            { id: 'radio-7', name: 'radio-7', value: 'radio-7', labelText: 'Option 1' },
                            { id: 'radio-8', name: 'radio-8', value: 'radio-8', labelText: 'Option 2' },
                            { id: 'radio-9', name: 'radio-9', value: 'radio-9', labelText: 'Option 3' }
                        ]} />
                </FormFieldset>

            </DocsTile>
            <DocsText>{inputsRadioCode}</DocsText>

            <Separator />

            <h2>Checkbox</h2>
            <Description>With checkboxes, all options are visible and the user can make one or more selections. This component can be set disabled and also displayed in a row.</Description>

            <DocsTile>
                <FormFieldset>
                    <FormLegend legendText="Checkboxes" />
                    <FormItem isCheck={true}>
                        <FormInput type="checkbox" id="checkbox-1" name="checkbox-name-1" value="" />
                        <FormLabel forAttr="checkbox-1" labelText="Option One" />
                    </FormItem>
                    <FormItem isCheck={true}>
                        <FormInput type="checkbox" id="checkbox-2" name="checkbox-name-2" value="" />
                        <FormLabel forAttr="checkbox-2" labelText="Option Two" />
                    </FormItem>
                    <FormItem isCheck={true}>
                        <FormInput type="checkbox" id="checkbox-3" name="checkbox-name-3" value="" />
                        <FormLabel forAttr="checkbox-3" labelText="Option Three" />
                    </FormItem>
                </FormFieldset>

                <FormFieldset>
                    <FormLegend legendText="Inline Checkbox buttons" />
                    <FormItem isCheck={true} isInline={true}>
                        <FormLabel forAttr="checkbox-4">
                            <FormInput type="checkbox" id="checkbox-4" name="checkbox-name-4" value="" />
                            Option One
                        </FormLabel>
                    </FormItem>
                    <FormItem isCheck={true} isInline={true}>
                        <FormLabel forAttr="checkbox-5">
                            <FormInput type="checkbox" id="checkbox-5" name="checkbox-name-5" value="" />
                            Option Two
                        </FormLabel>
                    </FormItem>
                    <FormItem isCheck={true} isInline={true}>
                        <FormLabel forAttr="checkbox-6">
                            <FormInput type="checkbox" id="checkbox-6" name="checkbox-name-6" value="" />
                            Option Three
                        </FormLabel>
                    </FormItem>
                </FormFieldset>
            </DocsTile>
            <DocsText>{inputsCheckboxCode}</DocsText>

            <Separator />

        </div>
    );
}