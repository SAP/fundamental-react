import path from 'path';
import React from 'react';
import { Badge, Button, Counter, Label, Status } from '../';
import { ComponentPage, Example } from '../_playground';

export const BadgeComponent = () => {
    return (
        <ComponentPage
            description='Status Indicators are used to easily highlight the state of an object.'
            sourceModulePath={path.join(__dirname, './Badge')}
            title='Status Indicators'>

            <Example
                centered
                title='Default Badge'>
                <Badge>Default</Badge>
                <Badge type='success'>Default</Badge>
                <Badge type='warning'>Default</Badge>
                <Badge type='error'>Default</Badge>
            </Example>

            <Example
                centered
                description='Apply `modifier="pill"` to render a pill version of the badge.'
                title='Pill Badge'>
                <Badge modifier='pill'>Default</Badge>
                <Badge modifier='pill' type='success'>
                        Default
                </Badge>
                <Badge modifier='pill' type='warning'>
                        Default
                </Badge>
                <Badge modifier='pill' type='error'>
                        Default
                </Badge>
            </Example>

            <Example
                centered
                description='Apply `modifier="filled"` to render a filled version of the badge.'
                title='Filled Badge'>
                <Badge modifier='filled'>Default</Badge>
                <Badge modifier='filled' type='success'>
                        Default
                </Badge>
                <Badge modifier='filled' type='warning'>
                        Default
                </Badge>
                <Badge modifier='filled' type='error'>
                        Default
                </Badge>
            </Example>

            <Example
                centered
                title='Default Label'>
                <Label>Default</Label>
                <Label type='success'>Default</Label>
                <Label type='warning'>Default</Label>
                <Label type='error'>Default</Label>
            </Example>

            <Example
                centered
                description=''
                title='Status Indicator Label with build in status icons'>
                <Status>Default</Status>
                <Status type='success'>Default</Status>
                <Status type='warning'>Default</Status>
                <Status type='error'>Default</Status>
                <Status type='available'>Available</Status>
                <Status type='away'>Away</Status>
                <Status type='busy'>Busy</Status>
                <Status type='offline'>Appear Offline</Status>
            </Example>

            <Example
                centered
                title='Status Indicator Label with any icons'>
                <Status glyph='history'>Custom Icon</Status>
                <Status glyph='message-success'>Success</Status>
                <Status glyph='message-warning'>Warning</Status>
                <Status glyph='message-error'>Error</Status>
            </Example>

            <Example
                centered
                description='Counter has a minimum value 1. Maximum display is 999+'
                title='Default Counter'>
                <Counter>5</Counter>
                <Counter>25</Counter>
                <Counter>101</Counter>
                <Counter>999+</Counter>
            </Example>

            <Example
                centered
                title='Counter inline with a paragraph'>
                <p>Lorem ipsum <Counter>5</Counter></p>
            </Example>

            <Example
                centered
                description='Use the property `notification` to enable notification counter.'
                title='Notification counter'>
                <Button glyph='bell' option='light'>
                    <Counter notification>5</Counter>
                </Button>
                <Button glyph='bell' option='light'>
                    <Counter notification>25</Counter>
                </Button>
                <Button glyph='bell' option='light'>
                    <Counter notification>101</Counter>
                </Button>
                <Button glyph='bell' option='light'>
                    <Counter notification>999+</Counter>
                </Button>
            </Example>
        </ComponentPage>
    );
};
