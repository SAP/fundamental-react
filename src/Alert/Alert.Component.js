import path from 'path';
import React from 'react';
import { Alert, Icon } from '../';
import { ComponentPage, Example } from '../_playground';

export const AlertComponent = () => {
    return (
        <ComponentPage
            description='An **Alert** provides a message within the application that is color-coded to emphasize the level of urgency.'
            sourceModulePath={path.join(__dirname, './Alert')}
            title='Alert'>

            <Example
                description={`The alert provides information that is useful and relevant, but not critical. It can also provide
                    feedback that an action has been executed. The user will need to dismiss the message.`}
                title='Default Alert'>
                <Alert
                    dismissible
                    link='#'
                    linkText=' link'>
                    Default alert with a{' '}
                </Alert>
            </Example>

            <Example
                description='The alert warns of potential issues, but the user can still continue. The user will need to dismiss the message.'
                title='Warning Alert'>
                <Alert dismissible type='warning'>
                    <h3>A dismissible error type alert with template.</h3>
                    <p>More information...</p>
                </Alert>
            </Example>

            <Example
                description={`This alert is triggered after the user entered data incorrectly or a system error has occurred. It
                    should interrupt the user. A final action such as Submit cannot be carried out until the user has
                    rectified the error. The user will need to dismiss the message.`}
                title='Error Alert'>
                <Alert dismissible type='error'>
                    <Icon glyph='message-error' /> Error Message.{' '}
                    <a className='fd-link' href='#'>
                        Learn More
                    </a>
                </Alert>
            </Example>

            <Example
                title='Success Alert'>
                <Alert dismissible type='success'>
                    <Icon glyph='message-success' /> Message Success.{' '}
                    <a className='fd-link' href='#'>
                        Learn More
                    </a>
                </Alert>
            </Example>

            <Example
                title='Information Alert'>
                <Alert dismissible type='information'>
                    <Icon glyph='message-information' /> Information Message.{' '}
                    <a className='fd-link' href='#'>
                        Learn More
                    </a>
                </Alert>
            </Example>
        </ComponentPage>
    );
};
