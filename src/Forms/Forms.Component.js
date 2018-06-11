import React from 'react'
import { Forms } from '../'
import { DocsTile, DocsText, Separator, Header, Description, Import, Properties } from '../'

export const FormsComponent = () => {
    const formsCode = ``

    return (
        <div>
            <Header>Forms</Header>
            <Description>Form elements include field layout, checkboxes, radio buttons and states of a field. Use these components along with inline help and error state.
            </Description>
            <Import module="" path="/react-fundamental/src/" />

            <Separator />

            <Properties type="Inputs" properties=
                {[
                    { name: '', description: '' },
                    { name: '', description: '' }
                ]} />

            <Separator />

            <h2>Inputs</h2>
            <Description>Inputs are used to collect data from the user. When a field is required, the label is displayed in bold and noted by an asterisk (*).</Description>
            <DocsTile>
               
            </DocsTile>
            <DocsText>{buttonTypesCode}</DocsText>

            <Separator />

            

        </div>
    );
}