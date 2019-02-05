import React from 'react';
import { Toggle } from '../';
import { Description, DocsText, DocsTile, Header, Import, Properties, Separator } from '../_playground';

export const ToggleComponent = () => {
    const toggleCode = `<Toggle size="xs" id="Yj07w604">
    Extra Small toggle
</Toggle>
<Toggle size="s" id="Yj07w605" checked>
    Small toggle
</Toggle>
<Toggle id="Yj07w606">Normal toggle</Toggle>
<Toggle size="l" id="Yj07w607" checked>
    Large toggle
</Toggle>`;

    const toggleDisabledCode = `<Toggle size="xs" id="Yj07w608" disabled>
    Extra Small toggle
</Toggle>
<Toggle size="s" id="Yj07w609" checked disabled>
    Small toggle
</Toggle>
<Toggle id="Yj07w610" disabled>
    Normal toggle
</Toggle>
<Toggle size="l" id="Yj07w611" checked disabled>
    Large toggle
</Toggle>`;

    const toggleSizeDescription = `
The toggle can be set to 4 sizes: 'xs', 's', 'm' and 'l'. \n\n
When used with forms, it is recommended to use the small size so that form components will be
consistent.
`;

    return (
        <div>
            <Header>Toggle</Header>
            <Description>
                The **Toggle** component is used to activate or deactivate an element. It uses a visual metaphor that is known
                to the user with visible differences between on and off state. It is recommended to always display the
                toggle with a label above it as well as the label of the selected state. For example, the label above
                would be "Active", the toggle state would be “on” and the selected state label displayed to the right of
                the toggle would be “Yes”.
            </Description>
            <Import sourceModule={require('./Toggle')} />

            <Separator />

            <Properties sourceModule={require('./Toggle')} />

            <Separator />

            <h2>Toggle Sizes</h2>
            <Description children={toggleSizeDescription} />
            <DocsTile>
                <Toggle id='Yj07w604' size='xs'>
                    Extra Small toggle
                </Toggle>
                <Toggle checked id='Yj07w605'
                    size='s'>
                    Small toggle
                </Toggle>
                <Toggle id='Yj07w606'>Normal toggle</Toggle>
                <Toggle checked id='Yj07w607'
                    size='l'>
                    Large toggle
                </Toggle>
            </DocsTile>
            <DocsText>{toggleCode}</DocsText>

            <Separator />

            <h2>Disabled state</h2>
            <DocsTile>
                <Toggle disabled id='Yj07w608'
                    size='xs'>
                    Extra Small toggle
                </Toggle>
                <Toggle checked disabled
                    id='Yj07w609' size='s'>
                    Small toggle
                </Toggle>
                <Toggle disabled id='Yj07w610'>
                    Normal toggle
                </Toggle>
                <Toggle checked disabled
                    id='Yj07w611' size='l'>
                    Large toggle
                </Toggle>
            </DocsTile>
            <DocsText>{toggleDisabledCode}</DocsText>
        </div>
    );
};
