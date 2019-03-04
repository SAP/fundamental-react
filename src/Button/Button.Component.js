import { listOfIcons } from '../utils/listOfIcons';
import path from 'path';
import React from 'react';
import { Button, ButtonGroup } from '../';
import { ComponentPage, Example, Playground, Separator } from '../_playground';

export const ButtonComponent = () => {
    const clickBtnHandler = btn => {
        alert(`You clicked the ${btn} Button`);
    };

    return (
        <ComponentPage
            description={`A **Button** allows users to perform an action. The priority of buttons within a page should be considered.
                For instance, only use the main button once within a page or modal. Color is also important. For
                instance, the most important button has a blue background where as a red button should only be used if
                the action it performs is potentially destructive.`}
            sourceModulePath={path.join(__dirname, './Button')}
            title='Button'>

            <Example
                centered
                description={`There are three emphasis styles used to indicate the importance of the button on
                    the page.\n\n* **Emphasized Button**: There should only be one highlighted button on the page.
                    This is the primary call to action.\n\n* **Regular Button**: The default button style and the
                    most common button. There may be more than one on a page.\n\n* **Light Button**: This is the
                    lowest priority button and most often used with page content like appearing in a table or list.
                    There may be more than one on the page.`}
                title='Button Options'>
                <div className='fd-doc__margin--button'>
                    <Button onClick={() => clickBtnHandler('Emphasized')} option='emphasized'>
                        Emphasized Button
                    </Button>
                    <Button onClick={() => clickBtnHandler('Regular')}>Regular Button</Button>
                    <Button onClick={() => clickBtnHandler('Light')} option='light'>Light Button</Button>
                </div>
            </Example>

            <Example
                centered
                description={`* **Action Button**: The default button \n\n* **Standard Button**:
                    Neutral or informative color \n\n* **Positive Button**: Used for positive actions 
                    such as approved, ok, yes. \n\n* **Medium Button**: Used for warnings or 
                    alert \n\n* **Negative Button**: Used for negative actions such as decline, cancel, no.`}
                title='Button Types'>
                <div className='fd-doc__margin--button'>
                    <Button>Action Button</Button>
                    <Button type='standard'>Standard Button</Button>
                    <Button type='positive'>Positive Button</Button>
                    <Button type='medium'>Medium Button</Button>
                    <Button type='negative'>Negative Button</Button>
                </div>
            </Example>

            <Example
                centered
                description={`Button can have an icon with text or just and icon. You can use \`glyph="icon-name"\` to
                    attach an icon to the button.`}
                title='Buttons with Icon'>
                <div className='fd-doc__margin--button'>
                    <Button glyph='cart' option='emphasized'>
                        Add to Cart
                    </Button>

                    <Button glyph='cart'>Add to Cart</Button>

                    <Button glyph='filter' option='light'>
                        Add to Cart
                    </Button>

                    <Button glyph='accept' option='emphasized'
                        type='positive'>
                        Approve
                    </Button>

                    <Button glyph='decline' option='emphasized'
                        type='negative'>
                        Reject
                    </Button>

                    <Button
                        glyph='alert'
                        option='emphasized'
                        type='medium'>
                        Review
                    </Button>

                    <br />
                    <br />
                    <br />

                    <Button glyph='cart' option='emphasized' />

                    <Button glyph='cart' />

                    <Button glyph='filter' option='light' />

                    <Button glyph='accept' option='emphasized'
                        type='positive' />

                    <Button
                        glyph='decline'
                        option='emphasized'
                        type='negative' />

                    <Button glyph='alert' option='emphasized'
                        type='medium' />
                </div>
            </Example>

            <Example
                centered
                description={`There are two sizes. The \`compact\` size is only used on desktop and it is full size when used
                    on a touch device.`}
                title='Button Sizes'>
                <div className='fd-doc__margin--button'>
                    <Button>Default</Button>
                    <Button compact>Compact</Button>
                </div>
            </Example>

            <Example
                centered
                description={`There are three states: \`normal\` (default), \`selected\`,
                    and \`disabled\`.`}
                title='Button States'>
                <div className='fd-doc__margin--button'>
                    <Button option='emphasized'>Normal State</Button>
                    <Button option='emphasized' selected>
                        Selected State
                    </Button>
                    <Button disabled option='emphasized'>
                        Disabled State
                    </Button>
                    <br />
                    <br />
                    <Button>Normal State</Button>
                    <Button selected>Selected State</Button>
                    <Button disabled>Disabled State</Button>
                    <br />
                    <br />
                    <Button option='light'>Normal State</Button>
                    <Button option='light' selected>
                        Selected State
                    </Button>
                    <Button disabled option='light'>
                        Disabled State
                    </Button>
                    <br />
                    <br />
                    <Button type='standard'>Normal State</Button>
                    <Button selected type='standard'>
                        Selected State
                    </Button>
                    <Button disabled type='standard'>
                        Disabled State
                    </Button>
                    <br />
                    <br />
                    <Button type='positive'>Normal State</Button>
                    <Button selected type='positive'>
                        Selected State
                    </Button>
                    <Button disabled type='positive'>
                        Disabled State
                    </Button>
                    <br />
                    <br />
                    <Button type='medium'>Normal State</Button>
                    <Button selected type='medium'>
                        Selected State
                    </Button>
                    <Button disabled type='medium'>
                        Disabled State
                    </Button>
                    <br />
                    <br />
                    <Button type='negative'>Normal State</Button>
                    <Button selected type='negative'>
                        Selected State
                    </Button>
                    <Button disabled type='negative'>
                        Disabled State
                    </Button>
                </div>
            </Example>

            <Example
                centered
                title='Button Group'>
                <div className='fd-doc__margin--buttonGroup'>
                    <ButtonGroup>
                        <Button glyph='survey' />
                        <Button glyph='pie-chart' selected />
                        <Button glyph='pool' />
                    </ButtonGroup>

                    <ButtonGroup>
                        <Button compact>Left</Button>
                        <Button compact selected>
                            Middle
                        </Button>
                        <Button compact>Right</Button>
                    </ButtonGroup>
                </div>
            </Example>

            <Separator />

            <Playground
                component='button'
                schema={[
                    {
                        attribute: 'children',
                        typeOfAttribute: 'string'
                    },
                    {
                        attribute: 'option',
                        typeOfAttribute: 'string',
                        'enum': ['', 'emphasized', 'light']
                    },
                    {
                        attribute: 'type',
                        typeOfAttribute: 'string',
                        'enum': ['', 'standard', 'positive', 'medium', 'negative']
                    },
                    {
                        attribute: 'compact',
                        typeOfAttribute: 'boolean'
                    },
                    {
                        attribute: 'glyph',
                        typeOfAttribute: 'string',
                        'enum': listOfIcons
                    },
                    {
                        attribute: 'selected',
                        typeOfAttribute: 'boolean'
                    },
                    {
                        attribute: 'disabled',
                        typeOfAttribute: 'boolean'
                    }
                ]}>
                <Button compact={false} disabled={false}
                    glyph='' option='light'
                    selected={false} type='standard'>
                    BUTTON
                </Button>
            </Playground>

        </ComponentPage>
    );
};
