import React from 'react';
import { Alert, Icon } from '../';
import { Description, DocsText, DocsTile, Header, Import, Playground, Properties, Separator } from '../_playground';

export const AlertComponent = () => {
    const defaultAlertCode = '<Alert dismissable link="#" linkText="link">Default alert with a </Alert>';

    const warningAlertCode = `<Alert type="warning" dismissable>
    <h3>A dismissible error type alert with template.</h3>
    <p>More information...</p>
</Alert>`;

    const errorAlertCode = `<Alert type="error" dismissable>
    <Icon glyph="message-error" /> Error Message.
    <a href="#" class="fd-link">
        Learn More
    </a>
</Alert>`;

    const sucessAlertCode = `<Alert type="success" dismissable>
    <Icon glyph="message-success" /> Message Success.
    <a href="#" class="fd-link">
        Learn More
    </a>
</Alert>`;

    const informationAlertCode = `<Alert type="information" dismissable>
    <Icon glyph="message-information" /> Information Message.
    <a href="#" class="fd-link">
        Learn More
    </a>
</Alert>`;

    return (
        <div>
            <Header>Alert</Header>
            <Description>
                Alerts provide messages within the application that are color-coded to emphasize the level of urgency.
            </Description>
            <Import module='Alert' path='/fundamental-react/src/' />

            <Separator />

            <Properties
                properties={[
                    {
                        name: 'type',
                        description:
                            'string - Determines the type of alert - \'error\' (red) or \'warning\' (orange). Defaults to white if no type is provided.'
                    },
                    {
                        name: 'dismissible',
                        description: 'bool - Shows a dismissible button if set to true. Default is false.'
                    }
                ]}
                type='Inputs' />
            <Properties
                properties={[{ name: 'close', description: 'Emitted when the close button is clicked.' }]}
                type='Outputs' />

            <Separator />

            <h2>Default Alert</h2>
            <Description>
                The alert provides information that is useful and relevant, but not critical. It can also provide
                feedback that an action has been executed. The user will need to dismiss the message.
            </Description>
            <DocsTile>
                <Alert dismissable link='#'
                    linkText=' link'>
                    Default alert with a{' '}
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
                <Alert dismissable type='warning'>
                    <h3>A dismissible error type alert with template.</h3>
                    <p>More information...</p>
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
                <Alert dismissable type='error'>
                    <Icon glyph='message-error' /> Error Message.{' '}
                    <a className='fd-link' href='#'>
                        Learn More
                    </a>
                </Alert>
            </DocsTile>
            <DocsText>{errorAlertCode}</DocsText>

            <Separator />

            <h2>Success Alert</h2>
            <DocsTile>
                <Alert dismissable type='success'>
                    <Icon glyph='message-success' /> Message Success.{' '}
                    <a className='fd-link' href='#'>
                        Learn More
                    </a>
                </Alert>
            </DocsTile>
            <DocsText>{sucessAlertCode}</DocsText>

            <Separator />

            <h2>Information Alert</h2>
            <DocsTile>
                <Alert dismissable type='information'>
                    <Icon glyph='message-information' /> Information Message.{' '}
                    <a className='fd-link' href='#'>
                        Learn More
                    </a>
                </Alert>
            </DocsTile>
            <DocsText>{informationAlertCode}</DocsText>

            <Separator />

            <h2>Playground</h2>
            <Playground
                component='alert'
                schema={[
                    {
                        attribute: 'type',
                        typeOfAttribute: 'string',
                        'enum': ['', 'warning', 'error', 'information', 'success']
                    },
                    {
                        attribute: 'dismissable',
                        typeOfAttribute: 'boolean'
                    }
                ]}>
                <Alert dismissable={false} link='#'
                    linkText='link' type=''>
                    Default alert with a{' '}
                </Alert>
            </Playground>
        </div>
    );
};
