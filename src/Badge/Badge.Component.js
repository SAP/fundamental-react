import React from 'react'
import { Badge, Label } from '../'
import { DocsTile, DocsText, Separator, Header, Description, Import, Properties } from '../'
import { Playground } from '../documentation/Playground/Playground';

export const BadgeComponent = () => {
    const defaultBadgeCode = `<Badge>Default</Badge>
<Badge type="success">Default</Badge>
<Badge type="warning">Default</Badge>
<Badge type="error">Default</Badge>`

    const pillBadgeCode = `<Badge modifier="pill">Default</Badge>
<Badge type="success" modifier="pill">Default</Badge>
<Badge type="warning" modifier="pill">Default</Badge>
<Badge type="error" modifier="pill">Default</Badge>`

    const filledBadgeCode = `<Badge modifier="filled">Default</Badge>
<Badge type="success" modifier="filled">Default</Badge>
<Badge type="warning" modifier="filled">Default</Badge>
<Badge type="error" modifier="filled">Default</Badge>`

    const labelCode = `<Label>Default</Label>
<Label type="success">Default</Label>
<Label type="warning">Default</Label>
<Label type="error">Default</Label>`

    return (
        <div>

            <Header>Badge and Label</Header>
            <Description>Badges and labels are used to indicate status. Colors, generally in combination with text, are used to easily highlight the state of an object.
            The following colors should be used:
            Black: default or inactive status;
            Green: positive status, used for active, published, approved;
            Orange: a warning status or to indicate that an action can be taken;
            Red: error status.
            </Description>
            <Import module="Badge, Label" path="/fundamental-react/src/" />

            <Separator />

            <Properties type="Inputs" properties=
                {[
                    { name: 'type', description: 'String - The type indicates the status of the badge/label. Options include \'default\', \'success\', \'warning\', and \'error\'. Leave empty for default.' },
                    { name: 'modifier', description: 'String - Modifiers can be \'pill\' and \'filled\'. Leave empty for normal.' }
                ]} />

            <Separator />


            <h2>Default Badge</h2>
            <DocsTile>
                <Badge>Default</Badge>
                <Badge type="success">Default</Badge>
                <Badge type="warning">Default</Badge>
                <Badge type="error">Default</Badge>
            </DocsTile>
            <DocsText>{defaultBadgeCode}</DocsText>

            <Separator />

            <h2>Pill Badge</h2>
            <Description>Apply <code>modifier="pill"</code> to render a pill version of the badge.</Description>
            <DocsTile>
                <Badge modifier="pill">Default</Badge>
                <Badge type="success" modifier="pill">Default</Badge>
                <Badge type="warning" modifier="pill">Default</Badge>
                <Badge type="error" modifier="pill">Default</Badge>
            </DocsTile>
            <DocsText>{pillBadgeCode}</DocsText>

            <Separator />

            <h2>Filled Badge</h2>
            <Description>Apply <code>modifier="filled"</code> to render a filled version of the badge.</Description>
            <DocsTile>
                <Badge modifier="filled">Default</Badge>
                <Badge type="success" modifier="filled">Default</Badge>
                <Badge type="warning" modifier="filled">Default</Badge>
                <Badge type="error" modifier="filled">Default</Badge>
            </DocsTile>
            <DocsText>{filledBadgeCode}</DocsText>

            <Separator />

            <h2>Label</h2>
            <DocsTile>
                <Label>Default</Label>
                <Label type="success">Default</Label>
                <Label type="warning">Default</Label>
                <Label type="error">Default</Label>
            </DocsTile>
            <DocsText>{labelCode}</DocsText>

            <Separator />


            <h2>Playground</h2>
            <Playground component="badge" schema= {[
                    {
                        attribute: 'children',
                        typeOfAttribute: 'string'
                    },
                    {
                        attribute: 'component',
                        typeOfAttribute: 'string',
                        enum: ['badge', 'label']
                    },
                    {
                        attribute: 'type',
                        typeOfAttribute: 'string',
                        enum: ['default', 'success', 'warning', 'error']
                    }, 
                    {
                        attribute: 'modifier',
                        typeOfAttribute: 'string',
                        enum: ['', 'pill', 'filled']
                    }]}>
                <Badge type="success" modifier="filled">Default</Badge>
            </Playground>
            <Separator />
        </div>
    );
}