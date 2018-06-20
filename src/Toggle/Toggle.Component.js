import React from 'react'
import { Toggle } from './Toggle'
import { DocsTile, DocsText, Separator, Header, Description, Import, Properties } from '../'

export const ToggleComponent = () => {
    const toggleCode = `<Toggle size="small" id="Yj07w605">Small toggle</Toggle>
<Toggle id="Yj07w606">Normal toggle</Toggle>
<Toggle size="large" id="Yj07w607">Large toggle</Toggle>`

    return (
        <div>

            <Header>Toggle</Header>
            <Description>The toggle component is used to activate or deactivate an element. Uses a visual metaphor that is know to the user with visible differences between on and off state.
            It is recommended to always display the toggle with a label above it as well as the label of the selected state. For example, the label above would be Active, the toggle state would be “on” and the selected state label displayed to the right of the toggle would be “Yes”.
            </Description>
            <Import module="Toggle" path="/react-fundamental/src/" />

            <Separator />

            <Properties type="Inputs" properties=
            {[
                {name: 'size', description: 'String - The size of the toggle.'}, 
                {name: 'id', description: 'String - The id of the toggle.'}
            ]}/>
           
            <Separator />

            <h2>Toggle Sizes</h2>
            <Description>The toggle can be set to 3 sizes: 'small', 'normal' and 'large'. When used with forms, it is recommended to use the small size so that form components will be consistent.</Description>
            <DocsTile>
                <Toggle size="small" id="Yj07w605">Small toggle</Toggle>
                <Toggle id="Yj07w606">Normal toggle</Toggle>
                <Toggle size="large" id="Yj07w607">Large toggle</Toggle>
            </DocsTile>
            <DocsText>{toggleCode}</DocsText>

            <Separator />

        </div>
    );
}