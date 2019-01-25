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
                **Inline Help** is used to display help text in a **Popover**, often inline with headers,
                body text and form labels.
            </Description>
            <Import sourceModule={require('./InlineHelp')} />

            <Separator />

            <Properties sourceModule={require('./InlineHelp')} />

            <Separator />

            <h2>Default Position</h2>
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
        </div>
    );
};
