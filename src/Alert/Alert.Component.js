import React from 'react';
import { Alert } from '../';
import { DocsTile, DocsText, Separator, Header, Description, Import, Properties } from '../';
import { Playground } from '../documentation/Playground/Playground';

export const AlertComponent = () => {
    const defaultAlertCode = `<Alert dismissable link="#" linkText="link">Default alert with a </Alert>
 
<Alert dismissable linkText="link" rtl>تم. بسبب أمام وشعار ولم بـ. أحكم والكساد ما فقد. كل وعُرفت الإنزال مدن. انه </Alert>`;

    const warningAlertCode = `<Alert type="warning" dismissable>
    <h3>A dismissible error type alert with template.</h3>
    <p>More information...</p>
</Alert>

<Alert type="warning" dismissable rtl>
    تم. بسبب أمام وشعار ولم بـ. أحكم والكساد ما فقد. كل وعُرفت الإنزال مدن. انه
</Alert>`;

    const errorAlertCode = `<Alert type="error" dismissable link="#" linkText="link">
    Error message with a
</Alert>

<Alert type="error" dismissable rtl>
    تم. بسبب أمام وشعار ولم بـ. أحكم والكساد ما فقد. كل وعُرفت الإنزال مدن. انه
</Alert>`;
    
    return (
        <div>
            <Header>Alert</Header>
            <Description>
                Alerts provide messages within the application that are color-coded to emphasize the level of urgency.
            </Description>
            <Import module="Alert" path="/fundamental-react/src/" />

            <Separator />

            <Properties
                type="Inputs"
                properties={[
                    {
                        name: 'type',
                        description:
                            "string - Determines the type of alert - 'error' (red) or 'warning' (orange). Defaults to white if no type is provided."
                    },
                    {
                        name: 'dismissible',
                        description: 'bool - Shows a dismissible button if set to true. Default is false.'
                    },
                    {
                        name: 'rtl',
                        description: 'bool - Set to true to enable Right-to-Left support. Default is false.'
                    }
                ]}
            />
            <Properties
                type="Outputs"
                properties={[{ name: 'close', description: 'Emitted when the close button is clicked.' }]}
            />

            <Separator />

            <h2>Default Alert</h2>
            <Description>
                The alert provides information that is useful and relevant, but not critical. It can also provide
                feedback that an action has been executed. The user will need to dismiss the message.
            </Description>
            <DocsTile>
                <Alert dismissable link="#" linkText=" link">
                    Default alert with a {' '}
                </Alert>
                <br />
                <Alert dismissable linkText="link" rtl>
                    تم. بسبب أمام وشعار ولم بـ. أحكم والكساد ما فقد. كل وعُرفت الإنزال مدن. انه
                </Alert>
            </DocsTile>
            <DocsText>{defaultAlertCode}</DocsText>

            <Separator />

            <h2>Warning Alert</h2>
            <Description>
                The alert warns of potential issues, but the user can still continue. The user will need to dismiss the
                message. Apply type="warning".
            </Description>
            <DocsTile>
                <Alert type="warning" dismissable>
                    <h3>A dismissible error type alert with template.</h3>
                    <p>More information...</p>
                </Alert>

                <br />

                <Alert type="warning" dismissable rtl>
                    تم. بسبب أمام وشعار ولم بـ. أحكم والكساد ما فقد. كل وعُرفت الإنزال مدن. انه
                </Alert>
            </DocsTile>
            <DocsText>{warningAlertCode}</DocsText>

            <Separator />

            <h2>Error Alert</h2>
            <Description>
                This alert is triggered after the user entered data incorrectly or a system error has occurred. It
                should interrupt the user. A final action such as Submit cannot be carried out until the user has
                rectified the error. The user will need to dismiss the message. Apply type="error".
            </Description>
            <DocsTile>
                <Alert type="error" dismissable link="#" linkText=" link">
                    Error message with a {' '}
                </Alert>

                <br />

                <Alert type="error" dismissable rtl>
                    تم. بسبب أمام وشعار ولم بـ. أحكم والكساد ما فقد. كل وعُرفت الإنزال مدن. انه
                </Alert>
            </DocsTile>
            <DocsText>{errorAlertCode}</DocsText>

            <Separator />

            <Separator />

            <h2>Playground</h2>
            <Playground
                component="alert"
                schema={[
                    {
                        attribute: 'type',
                        typeOfAttribute: 'string',
                        enum: ['default', 'warning', 'error']
                    },
                    {
                        attribute: 'dismissable',
                        typeOfAttribute: 'boolean'
                    }
                ]}
            >
                <Alert type="default" dismissable={false} link="#" linkText="link">
                    Default alert with a{' '}
                </Alert>
            </Playground>
        </div>
    );
};
