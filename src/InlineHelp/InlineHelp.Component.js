import React from 'react';
import { InlineHelp } from '../';
import { DocsTile, DocsText, Separator, Header, Description, Import, Properties } from '../';

const centerStyle = {
    textAlign: 'center'
};

export const InlineHelpComponent = () => {
    const defaultHelpPlacement = `<InlineHelp text="Lorem ipsum dolor sit amet, consectetur adipiscing." placement="bottom-right"/>`;
    const bottomLeftHelpPlacement = `<InlineHelp text="Lorem ipsum dolor sit amet, consectetur adipiscing." placement="bottom-left"/>`;
    const rightHelpPlacement = `<InlineHelp text="Lorem ipsum dolor sit amet, consectetur adipiscing." placement="right"/>`;
    const leftHelpPlacement = `<InlineHelp text="Lorem ipsum dolor sit amet, consectetur adipiscing." placement="left"/>`;

    return (
        <div>
            <Header>Inline Help</Header>
            <Description>
                Inline help is used to display help text in a popover, often inline with headers, body text and form
                labels.
            </Description>
            <Import module="InlineHelp" path="/fundamental-react/src/" />

            <Separator />

            <Properties
                type="Inputs"
                properties={[
                    {
                        name: 'text',
                        description: 'String - The text to display in the inline help pop-up.'
                    },
                    {
                        name: 'placement',
                        description: 'String - Location for where to display the inline help pop-up.'
                    }
                ]}
            />

            <Separator />

            <h2>Default Position</h2>
            <Description>The default positioning of inline help component is bottom right.</Description>
            <DocsTile>
                <div style={centerStyle}>
                    Bottom Right (Default) &nbsp;
                    <InlineHelp text="Lorem ipsum dolor sit amet, consectetur adipiscing." placement="bottom-right" />
                </div>
            </DocsTile>
            <DocsText>{defaultHelpPlacement}</DocsText>
            
            <Separator />
            
            <h2>Bottom Left Position</h2>
            <DocsTile>
                <div style={centerStyle}>
                    Bottom Left &nbsp;
                    <InlineHelp text="Lorem ipsum dolor sit amet, consectetur adipiscing." placement="bottom-left" />
                </div>
            </DocsTile>
            <DocsText>{bottomLeftHelpPlacement}</DocsText>
            
            <Separator />
            
            <h2>Right Position</h2>
            <DocsTile>
                <div style={centerStyle}>
                    Right &nbsp;
                    <InlineHelp text="Lorem ipsum dolor sit amet, consectetur adipiscing." placement="right" />
                </div>
            </DocsTile>
            <DocsText>{rightHelpPlacement}</DocsText>
            
            <Separator />
           
            <h2>Left Position</h2>
            <DocsTile>
                <div style={centerStyle}>
                    Left &nbsp;
                    <InlineHelp text="Lorem ipsum dolor sit amet, consectetur adipiscing." placement="left" />
                </div>
            </DocsTile>
            <DocsText>{leftHelpPlacement}</DocsText>

            <Separator />
        </div>
    );
};
