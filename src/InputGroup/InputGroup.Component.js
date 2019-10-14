import path from 'path';
import React from 'react';
import { Button, FormGroup, FormItem, FormLabel, Icon, InputGroup } from '../';
import { ComponentPage, Example } from '../_playground';

export const InputGroupComponent = () => {
    return (
        <ComponentPage
            description={`The **Input Group** includes form inputs with add-ons that allow the user to
                better understand the information being entered.`}
            sourceModulePath={path.join(__dirname, './InputGroup')}
            title='Input Group'>

            <Example
                description={`The Input with text add-on component is typically used to specify the
                    type of the data being entered, such as currency or unit of measure.
                    This add-on can be placed at the left or right of the input element.`}
                title='Text add-on'>
                <div>
                    <FormGroup>
                        <FormLabel>Left Aligned Text Addon</FormLabel>
                        <FormItem>
                            <InputGroup>
                                <InputGroup.Addon>$</InputGroup.Addon>
                                <InputGroup.Input
                                    placeholder='Type text here' />
                            </InputGroup>
                        </FormItem>
                    </FormGroup>
                    <br />
                    <FormGroup>
                        <FormLabel>Right Aligned Text Addon</FormLabel>
                        <FormItem>
                            <InputGroup>
                                <InputGroup.Input placeholder='Type text here' />
                                <InputGroup.Addon>€</InputGroup.Addon>
                            </InputGroup>
                        </FormItem>
                    </FormGroup>
                    <br />
                    <p>Compact mode</p>
                    <FormGroup>
                        <FormLabel>Left Aligned Text Addon</FormLabel>
                        <FormItem>
                            <InputGroup compact>
                                <InputGroup.Addon>$</InputGroup.Addon>
                                <InputGroup.Input placeholder='Type text here' />
                            </InputGroup>
                        </FormItem>
                    </FormGroup>
                    <br />
                    <FormGroup>
                        <FormLabel>Right Aligned Text Addon</FormLabel>
                        <FormItem>
                            <InputGroup compact>
                                <InputGroup.Input
                                    placeholder='Type text here' />
                                <InputGroup.Addon>€</InputGroup.Addon>
                            </InputGroup>
                        </FormItem>
                    </FormGroup>
                </div>
            </Example>

            <Example
                description='The Input with add-on supports icons.'
                title='Input with icons'>
                <div>
                    <FormGroup>
                        <FormLabel>Input with icon on the left</FormLabel>
                        <FormItem>
                            <InputGroup>
                                <InputGroup.Addon>
                                    <Icon glyph='globe' />
                                </InputGroup.Addon>
                                <InputGroup.Input placeholder='Type text here' />
                            </InputGroup>
                        </FormItem>
                    </FormGroup>

                    <br />
                    <p>Compact mode</p>
                    <FormGroup>
                        <FormLabel>Input with icon on the left</FormLabel>
                        <FormItem>
                            <InputGroup compact>
                                <InputGroup.Addon>
                                    <Icon glyph='globe' />
                                </InputGroup.Addon>
                                <InputGroup.Input placeholder='Type text here' />
                            </InputGroup>
                        </FormItem>
                    </FormGroup>
                    <br />
                    <br />
                    <FormGroup>
                        <FormLabel>Input with icon on the right</FormLabel>
                        <FormItem>
                            <InputGroup>
                                <InputGroup.Input placeholder='Type text here' />
                                <InputGroup.Addon>
                                    <Icon glyph='hide' />
                                </InputGroup.Addon>
                            </InputGroup>
                        </FormItem>
                    </FormGroup>
                    <br />
                    <p>Compact mode</p>
                    <FormGroup>
                        <FormLabel>Input with icon on the right</FormLabel>
                        <FormItem>
                            <InputGroup compact>
                                <InputGroup.Input placeholder='Type text here' />
                                <InputGroup.Addon>
                                    <Icon glyph='hide' />
                                </InputGroup.Addon>
                            </InputGroup>
                        </FormItem>
                    </FormGroup>
                </div>
            </Example>

            <Example
                description={`The Input with add-on supports actions. Actions can be shown with a text
                    label or icon.`}
                title='Input with actions'>
                {/* ACTIONS NEEDS TO BE FIXED TO BE GIVEN TO CHILD FROM PARENT */}
                <div>
                    <FormGroup>
                        <FormLabel>Input text with action</FormLabel>
                        <FormItem>
                            <InputGroup >
                                <InputGroup.Input placeholder='Type text here' />
                                <InputGroup.Addon isButton>
                                    <Button option='light'>Button</Button>
                                </InputGroup.Addon>
                            </InputGroup>
                        </FormItem>
                    </FormGroup>
                    <br />
                    <p>Compact mode</p>
                    <FormGroup>
                        <FormLabel>Input text with action</FormLabel>
                        <FormItem>
                            <InputGroup compact>
                                <InputGroup.Input placeholder='Type text here' />
                                <InputGroup.Addon isButton>
                                    <Button compact option='light'>Button</Button>
                                </InputGroup.Addon>
                            </InputGroup>
                        </FormItem>
                    </FormGroup>
                    <br />
                    <br />
                    <FormGroup>
                        <FormLabel>Input with icon text action</FormLabel>
                        <FormItem>
                            <InputGroup>
                                <InputGroup.Input />
                                <InputGroup.Addon isButton>
                                    <Button glyph='navigation-down-arrow' option='light' />
                                </InputGroup.Addon>
                            </InputGroup>
                        </FormItem>
                    </FormGroup>
                    <br />
                    <p>Compact mode</p>
                    <FormGroup>
                        <FormLabel>Input with icon text action</FormLabel>
                        <FormItem>
                            <InputGroup compact>
                                <InputGroup.Input placeholder='Type text here' />
                                <InputGroup.Addon isButton>
                                    <Button compact
                                        glyph='navigation-down-arrow'
                                        option='light' />
                                </InputGroup.Addon>
                            </InputGroup>
                        </FormItem>
                    </FormGroup>
                </div>
            </Example>
        </ComponentPage>
    );
};
