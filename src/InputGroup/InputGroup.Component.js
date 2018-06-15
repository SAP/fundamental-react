import React from 'react'
import { DocsTile, DocsText, Separator, Header, Description, Import, Properties } from '../'
import { FormItem, FormLabel, FormGroup, InputGroup, Button } from '../'

export const InputGroupComponent = () => {
    const textAddonCode = `<FormGroup>
    <FormLabel labelText="Left Aligned Text Addon" />
    <FormItem>
        <InputGroup inputType="text" addonPos="before" inputValue="1234567890" addon="$" />
    </FormItem>
</FormGroup>
<br />
<FormGroup>
    <FormLabel labelText="Right Aligned Text Addon" />
    <FormItem>
        <InputGroup inputType="text" addonPos="after" inputValue="1234567890" addon="€" />
    </FormItem>
</FormGroup>`
    const numberInputCode = `<FormGroup>
    <FormLabel labelText="Right Aligned Text Addon" />
    <FormItem>
        <InputGroup inputType="number" inputValue={100} />
    </FormItem>
</FormGroup>`
    const inputWithIconsCode = `<FormGroup>
    <FormLabel labelText="Search Input" />
    <FormItem>
        <InputGroup inputType="search" inputPlaceholder="Search Term" />
    </FormItem>
</FormGroup>
<br />
<FormGroup>
    <FormLabel labelText="Input with icon on the left" />
    <FormItem>
        <InputGroup inputType="text" addonPos="before" inputValue="1234567890" glyph="globe" />
    </FormItem>
</FormGroup>
<br />
<FormGroup>
    <FormLabel labelText="Input with icon on the right" />
    <FormItem>
        <InputGroup inputType="text" addonPos="after" inputValue="1234567890" glyph="hide" />
    </FormItem>
</FormGroup>`
    const inputWithActionsCode = `<FormGroup>
    <FormLabel labelText="Input with text action" />
    <FormItem>
        <InputGroup inputType="text" addonPos="after" inputValue="1234567890" actions={true}>
            <Button type="secondary">Button</Button>
        </InputGroup>
    </FormItem>
</FormGroup>
<br />
<FormGroup>
    <FormLabel labelText="Input with icon text action" />
    <FormItem>
        <InputGroup inputType="text" addonPos="after" actions={true}>
            <Button type="secondary" glyph="navigation-down-arrow"></Button>
        </InputGroup>
    </FormItem>
</FormGroup>`

    return (
        <div>
            <Header>InputGroup</Header>
            <Description>The input group includes form inputs with add-ons that allow the user to better understand the information being entered.</Description>
            <Import module="FormItem, FormLabel, FormGroup, InputGroup" path="/react-fundamental/src/" />

            <Separator />

            <Properties type="Inputs" properties=
                {[
                    { name: 'inputType', description: 'String - The type of the input. Options include "text", "number", and "search".' },
                    { name: 'inputId', description: 'String - The value of the "id" attribute.' },
                    { name: 'inputName', description: 'String - The value of the "name" attribute.' },
                    { name: 'inputValue', description: 'String - The value of the "value" attribute. ' },
                    { name: 'inputPlaceholder', description: 'String - The value of the input placeholder.' },
                    { name: 'addonPos', description: 'String - The add-on can be placed at the left (use addonPos="before") or right (use addonPos="after") of the input element.' },
                    { name: 'addon', description: 'String - The value of the add-on.' },
                    { name: 'glyph', description: 'String - The name of the icon to include. See the icon page for the list of icons.' },
                    { name: 'actions', description: 'Bool  -  If set to "true", enables input with actions. Actions can be shown with a text label or icon.' }

                ]} />

            <Separator />

            <h2>Text add-on</h2>
            <Description>The Input with text add-on component is typically used to specify the type of the data being entered, such as currency or unit of measure. This add-on can be placed at the left or right of the input element.</Description>
            <DocsTile>
                <FormGroup>
                    <FormLabel labelText="Left Aligned Text Addon" />
                    <FormItem>
                        <InputGroup inputType="text" addonPos="before" inputValue="1234567890" addon="$" />
                    </FormItem>
                </FormGroup>
                <br />
                <FormGroup>
                    <FormLabel labelText="Right Aligned Text Addon" />
                    <FormItem>
                        <InputGroup inputType="text" addonPos="after" inputValue="1234567890" addon="€" />
                    </FormItem>
                </FormGroup>
            </DocsTile>
            <DocsText>{textAddonCode}</DocsText>

            <Separator />

            <h2>Number input</h2>
            <Description>For an integer value input, a spinner can be added allowing the user to increase or decrease the value.</Description>
            <DocsTile>
                <FormGroup>
                    <FormLabel labelText="Right Aligned Text Addon" />
                    <FormItem>
                        <InputGroup inputType="number" inputValue={100} />
                    </FormItem>
                </FormGroup>
            </DocsTile>
            <DocsText>{numberInputCode}</DocsText>

            <Separator />

            <h2>Input with icons</h2>
            <Description>The Input with add-on supports icons.</Description>
            <DocsTile>
                <FormGroup>
                    <FormLabel labelText="Search Input" />
                    <FormItem>
                        <InputGroup inputType="search" inputPlaceholder="Search Term" />
                    </FormItem>
                </FormGroup>
                <br />
                <FormGroup>
                    <FormLabel labelText="Input with icon on the left" />
                    <FormItem>
                        <InputGroup inputType="text" addonPos="before" inputValue="1234567890" glyph="globe" />
                    </FormItem>
                </FormGroup>
                <br />
                <FormGroup>
                    <FormLabel labelText="Input with icon on the right" />
                    <FormItem>
                        <InputGroup inputType="text" addonPos="after" inputValue="1234567890" glyph="hide" />
                    </FormItem>
                </FormGroup>
            </DocsTile>
            <DocsText>{inputWithIconsCode}</DocsText>


            <Separator />

            <h2>Input with actions</h2>
            <Description>The Input with add-on supports actions. Actions can be shown with a text label or icon.</Description>
            <DocsTile>
                <FormGroup>
                    <FormLabel labelText="Input with text action" />
                    <FormItem>
                        <InputGroup inputType="text" addonPos="after" inputValue="1234567890" actions={true}>
                            <Button type="secondary">Button</Button>
                        </InputGroup>
                    </FormItem>
                </FormGroup>
                <br />
                <FormGroup>
                    <FormLabel labelText="Input with icon text action" />
                    <FormItem>
                        <InputGroup inputType="text" addonPos="after" actions={true}>
                            <Button type="secondary" glyph="navigation-down-arrow"></Button>
                        </InputGroup>
                    </FormItem>
                </FormGroup>
            </DocsTile>
            <DocsText>{inputWithActionsCode}</DocsText>
        </div>
    );
}