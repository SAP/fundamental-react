import { MessageStrip } from '..';
import path from 'path';
import React from 'react';
import { ComponentPage, Example } from '../_playground';

export const MessageStripComponent = () => {
    return (
        <ComponentPage
            description='An **MessageStrip** provides a message within the application that is color-coded to emphasize the level of urgency.'
            sourceModulePath={path.join(__dirname, './MessageStrip')}
            title='MessageStrip'>

            <Example
                description={`The MessageStrip provides information that is useful and relevant, but not critical. It can also provide
                    feedback that an action has been executed. The user will need to dismiss the message.`}
                title='Default MessageStrip'>
                <MessageStrip
                    dismissible
                    link='#'
                    linkText='link'>
                    Default MessageStrip with a{' '}
                </MessageStrip>
            </Example>

            <Example
                description='The MessageStrip warns of potential issues, but the user can still continue. The user will need to dismiss the message.'
                title='Warning MessageStrip'>
                <MessageStrip dismissible type='warning'>
                    Warning Message.
                </MessageStrip>
                <MessageStrip dismissible noGlyph
                    type='warning'>
                    Warning Message with no icon.
                </MessageStrip>
            </Example>

            <Example
                description={`This MessageStrip is triggered after the user entered data incorrectly or a system error has occurred. It
                    should interrupt the user. A final action such as Submit cannot be carried out until the user has
                    rectified the error. The user will need to dismiss the message.`}
                title='Error MessageStrip'>
                <MessageStrip dismissible
                    link='#'
                    linkText='Learn More'
                    type='error'>
                    Error Message.{' '}
                </MessageStrip>
                <MessageStrip dismissible
                    link='#'
                    linkText='Learn More'
                    noGlyph
                    type='error'>
                    Error Message with no icon.{' '}
                </MessageStrip>
            </Example>

            <Example
                title='Success MessageStrip'>
                <MessageStrip dismissible
                    link='#'
                    linkText='Learn More'
                    type='success'>
                    Message Success.{' '}
                </MessageStrip>
                <MessageStrip dismissible
                    link='#'
                    linkText='Learn More'
                    noGlyph
                    type='success'>
                    Message Success with no icon.{' '}
                </MessageStrip>
            </Example>

            <Example
                title='Information MessageStrip'>
                <MessageStrip dismissible
                    link='#'
                    linkText='Learn More'
                    type='information'>
                    Information Message.{' '}
                </MessageStrip>

                <MessageStrip dismissible
                    link='#'
                    linkText='Learn More'
                    noGlyph
                    type='information'>
                    Information Message with no icon.{' '}
                </MessageStrip>
            </Example>
        </ComponentPage>
    );
};
