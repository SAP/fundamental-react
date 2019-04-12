import { listOfIcons } from '../utils/listOfIcons';
import path from 'path';
import React from 'react';
import { Badge, Button, Counter, Label, Status } from '../';
import { ComponentPage, Example, Playground, Separator } from '../_playground';

export const BadgeComponent = () => {
    return (
        <ComponentPage
            description='Status Indicators are used to easily highlight the state of an object.'
            sourceModulePath={path.join(__dirname, './Badge')}
            title='Status Indicators'>

            <Example
                centered
                title='Default Badge'>
                <div className='fd-doc__margin--statusIndicator'>
                    <Badge>Default</Badge>
                    <Badge type='success'>Default</Badge>
                    <Badge type='warning'>Default</Badge>
                    <Badge type='error'>Default</Badge>
                </div>
            </Example>

            <Example
                centered
                description='Apply `modifier="pill"` to render a pill version of the badge.'
                title='Pill Badge'>
                <div className='fd-doc__margin--statusIndicator'>
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
                </div>
            </Example>

            <Example
                centered
                description='Apply `modifier="filled"` to render a filled version of the badge.'
                title='Filled Badge'>
                <div className='fd-doc__margin--statusIndicator'>
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
                </div>
            </Example>

            <Example
                centered
                title='Default Label'>
                <div className='fd-doc__margin--statusIndicator'>
                    <Label>Default</Label>
                    <Label type='success'>Default</Label>
                    <Label type='warning'>Default</Label>
                    <Label type='error'>Default</Label>
                </div>
            </Example>

            <Example
                centered
                description=''
                title='Status Indicator Label with build in status icons'>
                <div className='fd-doc__margin--statusIndicator'>
                    <Status>Default</Status>
                    <Status type='success'>Default</Status>
                    <Status type='warning'>Default</Status>
                    <Status type='error'>Default</Status>
                    <br />
                    <br />
                    <Status type='available'>Available</Status>
                    <Status type='away'>Away</Status>
                    <Status type='busy'>Busy</Status>
                    <Status type='offline'>Appear Offline</Status>
                </div>
            </Example>

            <Example
                centered
                title='Status Indicator Label with any icons'>
                <div className='fd-doc__margin--statusIndicator'>
                    <Status glyph='history'>Custom Icon</Status>
                    <Status glyph='message-success'>Success</Status>
                    <Status glyph='message-warning'>Warning</Status>
                    <Status glyph='message-error'>Error</Status>
                </div>
            </Example>

            <Example
                centered
                description='Counter has a minimum value 1. Maximum display is 999+'
                title='Default Counter'>
                <div className='fd-doc__margin--statusIndicator'>
                    <Counter>5</Counter>
                    <Counter>25</Counter>
                    <Counter>101</Counter>
                    <Counter>999+</Counter>
                </div>
            </Example>

            <Example
                centered
                title='Counter inline with a paragraph'>
                <div className='fd-doc__margin--statusIndicator'>
                    <p>
                        Lorem ipsum <Counter>5</Counter>
                    </p>
                </div>
            </Example>

            <Example
                centered
                description='Use the property `notification` to enable notification counter.'
                title='Notification counter'>
                <div className='fd-doc__margin--statusIndicator'>
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
                </div>
            </Example>

            <Separator />

            <Playground
                component='badge'
                schema={[
                    {
                        attribute: 'children',
                        typeOfAttribute: 'string'
                    },
                    {
                        attribute: 'component',
                        typeOfAttribute: 'string',
                        'enum': ['badge', 'label', 'status']
                    },
                    {
                        attribute: 'type',
                        typeOfAttribute: 'string',
                        'enum': ['default', 'success', 'warning', 'error', 'available', 'away', 'busy', 'offline']
                    },
                    {
                        attribute: 'modifier',
                        typeOfAttribute: 'string',
                        'enum': ['', 'pill', 'filled']
                    },
                    {
                        attribute: 'glyph',
                        typeOfAttribute: 'string',
                        'enum': listOfIcons
                    }
                ]}>
                <Badge glyph='message-error' modifier='filled'
                    type='success'>
                    Default
                </Badge>
            </Playground>

        </ComponentPage>
    );
};
