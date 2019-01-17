import { InlineHelp } from '../';
import React from 'react';
import { Description, DocsText, DocsTile, Header, Import, Properties, Separator } from '../_playground';


export const InlineHelpComponent = () => {
    const defaultHelpPlacement = '<InlineHelp text="Lorem ipsum dolor sit amet, consectetur adipiscing." placement="bottom-right"/>';
    const bottomLeftHelpPlacement = '<InlineHelp text="Lorem ipsum dolor sit amet, consectetur adipiscing." placement="bottom-left"/>';
    const rightHelpPlacement = '<InlineHelp text="Lorem ipsum dolor sit amet, consectetur adipiscing." placement="right"/>';
    const leftHelpPlacement = '<InlineHelp text="Lorem ipsum dolor sit amet, consectetur adipiscing." placement="left"/>';
    const centerHelpPlacement = '<InlineHelp text="Lorem ipsum dolor sit amet, consectetur adipiscing." placement="bottom-center" />';

    return (
        <div>
            <Header>Inline Help</Header>
            <Description>
                Inline help is used to display help text in a popover, often inline with headers, body text and form
                labels.
            </Description>
            <Import module='InlineHelp' path='/fundamental-react/src/' />

            <Separator />

            <Properties
                properties={[
                    {
                        name: 'text',
                        description: 'string (required) - The text to display in the inline help pop-up.'
                    },
                    {
                        name: 'placement',
                        description: 'string (required) - Location for where to display the inline help pop-up. Options include:  \'bottom-right\', \'bottom-left\', \'bottom-center\', \'right\', and \'left\' '
                    }
                ]}
                type='Inputs' />

            <Separator />

            <h2>Default Position</h2>
            <Description>The default positioning of inline help component is bottom right.</Description>
            <DocsTile centered>
                Bottom Right (Default) &nbsp;
                <InlineHelp placement='bottom-right' text='Lorem ipsum dolor sit amet, consectetur adipiscing.' />
            </DocsTile>
            <DocsText>{defaultHelpPlacement}</DocsText>

            <Separator />

            <h2>Bottom Left Position</h2>
            <DocsTile centered>
                Bottom Left &nbsp;
                <InlineHelp placement='bottom-left' text='Lorem ipsum dolor sit amet, consectetur adipiscing.' />
            </DocsTile>
            <DocsText>{bottomLeftHelpPlacement}</DocsText>

            <Separator />

            <h2>Bottom Center Position</h2>
            <DocsTile centered>
                Bottom Center &nbsp;
                <InlineHelp placement='bottom-center' text='Lorem ipsum dolor sit amet, consectetur adipiscing.' />
            </DocsTile>
            <DocsText>{centerHelpPlacement}</DocsText>

            <Separator />

            <h2>Right Position</h2>
            <DocsTile centered>
                Right &nbsp;
                <InlineHelp placement='right' text='Lorem ipsum dolor sit amet, consectetur adipiscing.' />
            </DocsTile>
            <DocsText>{rightHelpPlacement}</DocsText>

            <Separator />

            <h2>Left Position</h2>
            <DocsTile centered>
                Left &nbsp;
                <InlineHelp placement='left' text='Lorem ipsum dolor sit amet, consectetur adipiscing.' />
            </DocsTile>
            <DocsText>{leftHelpPlacement}</DocsText>

            <Separator />
        </div>
    );
};
