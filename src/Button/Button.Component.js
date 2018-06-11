import React from 'react'
import { Button, ButtonGroup, ButtonGrouped } from '../'
import { DocsTile, DocsText, Separator, Header, Description, Import, Properties } from '../'

export const ButtonComponent = () => {
    const buttonTypesCode = `<Button>Primary Button</Button>
<Button type="main">Main Button</Button>
<Button type="secondary">Secondary Button</Button>
<Button type="toolbar">Toolbar Button</Button>
<Button semantic="positive">Accept</Button>
<Button semantic="negative">Reject</Button>`

    const buttonIconCode = `<Button type="secondary" glyph="cart" size="compact" state="selected">Add to Cart</Button>
<Button type="primary" glyph="cart" size="compact" state="selected">Add to Cart</Button>
<Button type="toolbar" glyph="filter" semantic="positive" size="compact" state="disabled">BUTTON</Button>
<Button type="main" glyph="accept" semantic="positive" size="compact" ></Button>
<Button type="main" glyph="decline" semantic="negative" size="compact"></Button>`


    const buttonSizesCode = `<Button size="xs">BUTTON</Button>
<Button size="s">BUTTON</Button>
<Button size="compact">BUTTON</Button>
<Button >BUTTON</Button>
<Button size="l">BUTTON</Button>`

    const buttonStatesCode = `<Button size="compact">Normal State</Button>
<Button size="compact" state="selected">Selected State</Button>
<Button size="compact" state="disabled">Disabled State</Button>`

const buttonGroupCode = `<ButtonGroup>  
    <ButtonGrouped size="s" glyph="survey"></ButtonGrouped>
    <ButtonGrouped size="s" glyph="pie-chart" state="selected"></ButtonGrouped>
    <ButtonGrouped size="s" glyph="pool"></ButtonGrouped>
</ButtonGroup>

<ButtonGroup>  
    <ButtonGrouped size="compact">Left</ButtonGrouped>
    <ButtonGrouped size="compact" state="selected">Middle</ButtonGrouped>
    <ButtonGrouped size="compact">Right</ButtonGrouped>
</ButtonGroup>

<ButtonGroup>  
    <ButtonGrouped>Left</ButtonGrouped>
    <ButtonGrouped state="selected">Middle</ButtonGrouped>
    <ButtonGrouped>Right</ButtonGrouped>
</ButtonGroup>`

    return (
        <div>
            <Header>Button</Header>
            <Description>The Buttons allow users to perform actions. The priority of buttons within a page should be considered. For instance, only use the main button once within a page or modal. Color is also important. For instance, the most important button has a blue background where as a red button should only be used if the action it performs is potentially destructive.
            </Description>
            <Import module="Button, ButtonGroup, ButtonGrouped" path="/react-fundamental/src/" />

            <Separator />

            <Properties type="Inputs" properties=
                {[
                    { name: 'type', description: 'String - The type of the button. Options include \'primary\', \'main\', \'secondary\', and \'toolbar\'. Leave empty for default.' },
                    { name: 'semantic', description: 'String - Semantic buttons. Semantic modifiers include \'positive\' and \'negative\'. Leave empty for no modifier.' },
                    { name: 'size', description: 'String - The size of the button. Options include \'xs\', \'s\', \'compact\', \'default\', and \'l\'. Leave empty for default.' },
                    { name: 'glyph', description: 'String - The icon to include in the button. See the icon page for the list of icons.' },
                    { name: 'state', description: 'String - The state of the button. Options include \'normal\', \'selected\', and \'disabled\'. Leave empty for normal.' }

                ]} />

            <Separator />

            <h2>Button Types</h2>
            <Description>Types can be "primary", "main", "secondary", and "toolbar". Semantic modifiers <code>positive</code> for approve and <code>negative</code> for reject can be applied to the button.</Description>
            <DocsTile>
                <Button>Primary Button</Button>
                <Button type="main">Main Button</Button>
                <Button type="secondary">Secondary Button</Button>
                <Button type="toolbar">Toolbar Button</Button>
                <Button semantic="positive">Accept</Button>
                <Button semantic="negative">Reject</Button>
            </DocsTile>
            <DocsText>{buttonTypesCode}</DocsText>

            <Separator />

            <h2>Buttons with Icon</h2>
            <Description>Button can have an icon with text or just and icon. You can use <code> glyph="iconName"</code> to attach an icon to the button.</Description>
            <DocsTile>
                <Button type="secondary" glyph="cart" size="compact" state="selected">Add to Cart</Button>
                <Button type="primary" glyph="cart" size="compact" state="selected">Add to Cart</Button>
                <Button type="toolbar" glyph="filter" semantic="positive" size="compact" state="disabled">BUTTON</Button>
                <Button type="main" glyph="accept" semantic="positive" size="compact" ></Button>
                <Button type="main" glyph="decline" semantic="negative" size="compact"></Button>
            </DocsTile>
            <DocsText>{buttonIconCode}</DocsText>

            <Separator />

            <h2>Button Sizes</h2>
            <Description>There are five different sizes can be rendered with modifiers: <code>xs</code>, <code>s</code>, <code>compact</code>, <code>default</code>, and <code>l</code>.</Description>
            <DocsTile>
                <Button size="xs">BUTTON</Button>
                <Button size="s">BUTTON</Button>
                <Button size="compact">BUTTON</Button>
                <Button >BUTTON</Button>
                <Button size="l">BUTTON</Button>
            </DocsTile>
            <DocsText>{buttonSizesCode}</DocsText>

            <Separator />

            <h2>Button States</h2>
            <Description>There are three states: <code>normal</code> (default), <code>selected</code>, and <code>disabled</code>.</Description>
            <DocsTile>
                <Button size="compact">Normal State</Button>
                <Button size="compact" state="selected">Selected State</Button>
                <Button size="compact" state="disabled">Disabled State</Button>
            </DocsTile>
            <DocsText>{buttonStatesCode}</DocsText>

            <Separator />

            <h2>Button Group</h2>
        
            <DocsTile>
                <ButtonGroup>  
                    <ButtonGrouped size="s" glyph="survey"></ButtonGrouped>
                    <ButtonGrouped size="s" glyph="pie-chart" state="selected"></ButtonGrouped>
                    <ButtonGrouped size="s" glyph="pool"></ButtonGrouped>
                </ButtonGroup>

                <ButtonGroup>  
                    <ButtonGrouped size="compact">Left</ButtonGrouped>
                    <ButtonGrouped size="compact" state="selected">Middle</ButtonGrouped>
                    <ButtonGrouped size="compact">Right</ButtonGrouped>
                </ButtonGroup>

                <ButtonGroup>  
                    <ButtonGrouped>Left</ButtonGrouped>
                    <ButtonGrouped state="selected">Middle</ButtonGrouped>
                    <ButtonGrouped>Right</ButtonGrouped>
                </ButtonGroup>
            </DocsTile>
            <DocsText>{buttonGroupCode}</DocsText>

        </div>
    );
}