import React from 'react';
import { InlineHelp } from '../';
import { DocsTile, DocsText, Separator, Header, Description, Import, Properties } from '../';


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
                type='Inputs'
                properties={[
                    {
                        name: 'text',
                        description: 'string (required) - The text to display in the inline help pop-up.'
                    },
                    {
                        name: 'placement',
                        description: 'string (required) - Location for where to display the inline help pop-up. Options include:  \'bottom-right\', \'bottom-left\', \'bottom-center\', \'right\', and \'left\' '
                    }
                ]} />

            <Separator />

            <h2>Default Position</h2>
            <Description>The default positioning of inline help component is bottom right.</Description>
            <DocsTile centered>
                Bottom Right (Default) &nbsp;
                <InlineHelp text='Lorem ipsum dolor sit amet, consectetur adipiscing.' placement='bottom-right' />
            </DocsTile>
            <DocsText>{defaultHelpPlacement}</DocsText>

            <Separator />

            <h2>Bottom Left Position</h2>
            <DocsTile centered>
                Bottom Left &nbsp;
                <InlineHelp text='Lorem ipsum dolor sit amet, consectetur adipiscing.' placement='bottom-left' />
            </DocsTile>
            <DocsText>{bottomLeftHelpPlacement}</DocsText>

            <Separator />

            <h2>Bottom Center Position</h2>
            <DocsTile centered>
                Bottom Center &nbsp;
                <InlineHelp text='Lorem ipsum dolor sit amet, consectetur adipiscing.' placement='bottom-center' />
            </DocsTile>
            <DocsText>{centerHelpPlacement}</DocsText>

            <Separator />

            <h2>Right Position</h2>
            <DocsTile centered>
                Right &nbsp;
                <InlineHelp text='Lorem ipsum dolor sit amet, consectetur adipiscing.' placement='right' />
            </DocsTile>
            <DocsText>{rightHelpPlacement}</DocsText>

            <Separator />

            <h2>Left Position</h2>
            <DocsTile centered>
                Left &nbsp;
                <InlineHelp text='Lorem ipsum dolor sit amet, consectetur adipiscing.' placement='left' />
            </DocsTile>
            <DocsText>{leftHelpPlacement}</DocsText>

            <Separator />
        </div>
    );
};
