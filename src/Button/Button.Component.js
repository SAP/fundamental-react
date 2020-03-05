import path from 'path';
import React from 'react';
import { Button, ButtonGroup } from '../';
import { ComponentPage, Example } from '../_playground';

export const ButtonComponent = () => {
    const clickBtnHandler = btn => {
        alert(`You clicked the ${btn} Button`);
    };

    return (
        <ComponentPage
            description={`A **Button** allows users to perform an action. The priority of buttons within a page should be considered.
                For instance, only use the main button once within a page or dialog. Color is also important. For
                instance, the most important button has a blue background where as a red button should only be used if
                the action it performs is potentially destructive.`}
            sourceModulePath={path.join(__dirname, './Button')}
            title='Button'>

            <Example
                centered
                description={`There are three emphasis styles used to indicate the importance of the button on
                    the page.\n\n* **Emphasized Button**: There should only be one highlighted button on the page.
                    This is the primary call to action.\n\n* **Regular Button**: The default button style and the
                    most common button. There may be more than one on a page.\n\n* **Transparent Button**: This is the
                    lowest priority button and most often used with page content like appearing in a table or list.
                    There may be more than one on the page.`}
                title='Button Options'>
                <Button onClick={() => clickBtnHandler('Emphasized')} option='emphasized'>
                        Emphasized Button
                </Button>
                <Button onClick={() => clickBtnHandler('Regular')}>Regular Button</Button>
                <Button onClick={() => clickBtnHandler('Transparent')} option='transparent'>Transparent Button</Button>
            </Example>

            <Example
                centered
                description={`* **Action Button**: The default button \n\n* **Standard Button**:
                    Neutral or informative color \n\n* **Positive Button**: Used for positive actions 
                    such as approved, ok, yes. \n\n* **Negative Button**: Used for negative actions such as decline, cancel, no.`}
                title='Button Types'>
                <Button>Action Button</Button>
                <Button type='standard'>Standard Button</Button>
                <Button type='positive'>Positive Button</Button>
                <Button type='negative'>Negative Button</Button>
            </Example>

            <Example
                centered
                description={`Button can have an icon with text or just and icon. You can use \`glyph="icon-name"\` to
                    attach an icon to the button.`}
                title='Buttons with Icon'>
                <div className='fd-container'>
                    <div className='fd-col--6'>
                        <Button glyph='cart' option='emphasized'>
                                Add to Cart
                        </Button>

                        <Button glyph='cart'>Add to Cart</Button>

                        <Button glyph='filter' option='transparent'>
                                Add to Cart
                        </Button>

                        <Button glyph='accept' type='positive'>
                                Approve
                        </Button>

                        <Button glyph='decline' type='negative'>
                                Reject
                        </Button>

                        <Button
                            glyph='alert'
                            option='emphasized'>
                                Review
                        </Button>
                    </div>

                    <div className='fd-col--6'>
                        <Button glyph='cart' />

                        <Button glyph='cart' option='transparent' />

                        <Button glyph='filter' type='standard' />

                        <Button glyph='accept' type='positive' />

                        <Button glyph='decline' type='negative' />
                    </div>
                </div>
            </Example>

            <Example
                centered
                description={`There are two sizes. The \`compact\` size is only used on desktop and it is full size when used
                    on a touch device.`}
                title='Button Sizes'>
                <Button>Default</Button>
                <Button compact>Compact</Button>
            </Example>

            <Example
                centered
                description={`There are three states: default, \`selected\`,
                    and \`disabled\`.`}
                title='Button States'>
                <div className='frDocs-tile__centered'>
                    <Button>Default</Button>
                    <Button selected>Selected</Button>
                    <Button disabled>Disabled</Button>
                </div>
                <div className='frDocs-tile__break' />
                <div className='frDocs-tile__centered'>
                    <Button option='emphasized'>Emphasized</Button>
                    <Button option='emphasized' selected>
                            Selected
                    </Button>
                    <Button disabled option='emphasized'>
                            Disabled
                    </Button>
                </div>
                <div className='frDocs-tile__break' />
                <div className='frDocs-tile__centered'>
                    <Button option='transparent'>Transparent</Button>
                    <Button option='transparent' selected>
                    Selected
                    </Button>
                    <Button disabled option='transparent'>
                    Disabled
                    </Button>
                </div>
                <div className='frDocs-tile__break' />
                <div className='frDocs-tile__centered'>
                    <Button type='positive'>Positive</Button>
                    <Button selected type='positive'>
                    Selected
                    </Button>
                    <Button disabled type='positive'>
                    Disabled
                    </Button>
                </div>
                <div className='frDocs-tile__break' />
                <div className='frDocs-tile__centered'>
                    <Button type='negative'>Negative</Button>
                    <Button selected type='negative'>
                    Selected
                    </Button>
                    <Button disabled type='negative'>
                    Disabled
                    </Button>
                </div>
            </Example>

            <Example
                centered
                title='Button Group'>
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
            </Example>
        </ComponentPage>
    );
};
