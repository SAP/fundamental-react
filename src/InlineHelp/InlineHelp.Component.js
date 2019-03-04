import { InlineHelp } from '../';
import path from 'path';
import React from 'react';
import { ComponentPage, Example } from '../_playground';

export const InlineHelpComponent = () => {
    return (
        <ComponentPage
            description={`**Inline Help** is used to display help text in a **Popover**, often inline with headers,
                body text and form labels.`}
            sourceModulePath={path.join(__dirname, './InlineHelp')}
            title='Inline Help'>

            <Example
                centered
                title='Default Position'>
                <div>
                    Bottom Right (Default) &nbsp;
                    <InlineHelp placement='bottom-right' text='Lorem ipsum dolor sit amet, consectetur adipiscing.' />
                </div>
            </Example>

            <Example
                centered
                title='Bottom Left Position'>
                <div>
                    Bottom Left &nbsp;
                    <InlineHelp placement='bottom-left' text='Lorem ipsum dolor sit amet, consectetur adipiscing.' />
                </div>
            </Example>

            <Example
                centered
                title='Bottom Center Position'>
                <div>
                    Bottom Center &nbsp;
                    <InlineHelp placement='bottom-center' text='Lorem ipsum dolor sit amet, consectetur adipiscing.' />
                </div>
            </Example>

            <Example
                centered
                title='Right Position'>
                <div>
                    Right &nbsp;
                    <InlineHelp placement='right' text='Lorem ipsum dolor sit amet, consectetur adipiscing.' />
                </div>
            </Example>

            <Example
                centered
                title='Left Position'>
                <div>
                    Left &nbsp;
                    <InlineHelp placement='left' text='Lorem ipsum dolor sit amet, consectetur adipiscing.' />
                </div>
            </Example>

        </ComponentPage>
    );
};
