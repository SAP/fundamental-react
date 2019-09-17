import path from 'path';
import React from 'react';
import { Button, FormGroup, FormItem, FormLabel, InputGroup } from '../';
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
                            <InputGroup
                                addon='$'
                                addonPos='before'
                                inputValue='1234567890' />
                        </FormItem>
                    </FormGroup>
                    <br />
                    <FormGroup>
                        <FormLabel>Right Aligned Text Addon</FormLabel>
                        <FormItem>
                            <InputGroup
                                addon='€'
                                addonPos='after'
                                inputValue='1234567890' />
                        </FormItem>
                    </FormGroup>

                    <br />
                    <p>Compact mode</p>

                    <FormGroup>
                        <FormLabel>Left Aligned Text Addon</FormLabel>
                        <FormItem>
                            <InputGroup
                                addon='$'
                                addonPos='before'
                                compact
                                inputValue='1234567890' />
                        </FormItem>
                    </FormGroup>
                    <br />
                    <FormGroup>
                        <FormLabel>Right Aligned Text Addon</FormLabel>
                        <FormItem>
                            <InputGroup
                                addon='€'
                                addonPos='after'
                                compact
                                inputValue='1234567890' />
                        </FormItem>
                    </FormGroup>
                </div>
            </Example>

            <Example
                description={`For an integer value input, a spinner can be added allowing the user to
                    increase or decrease the value.`}
                title='Number input'>
                <div>
                    <FormGroup>
                        <FormLabel>Right Aligned Text Addon</FormLabel>
                        <FormItem>
                            <InputGroup inputType='number' inputValue={100} />
                        </FormItem>
                    </FormGroup>

                    <br />
                    <p>Compact mode</p>

                    <FormGroup>
                        <FormLabel>Right Aligned Text Addon</FormLabel>
                        <FormItem>
                            <InputGroup compact inputType='number'
                                inputValue={100} />
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
                            <InputGroup
                                addonPos='before'
                                glyph='globe'
                                inputValue='1234567890' />
                        </FormItem>
                    </FormGroup>
                    <br />
                    <p>Compact mode</p>
                    <FormGroup>
                        <FormLabel>Input with icon on the left</FormLabel>
                        <FormItem>
                            <InputGroup
                                addonPos='before'
                                compact
                                glyph='globe'
                                inputValue='1234567890' />
                        </FormItem>
                    </FormGroup>
                    <br />
                    <br />
                    <FormGroup>
                        <FormLabel>Input with icon on the right</FormLabel>
                        <FormItem>
                            <InputGroup
                                addonPos='after'
                                glyph='hide'
                                inputType='text'
                                inputValue='1234567890' />
                        </FormItem>
                    </FormGroup>
                    <br />
                    <p>Compact mode</p>
                    <FormGroup>
                        <FormLabel>Input with icon on the right</FormLabel>
                        <FormItem>
                            <InputGroup
                                addonPos='after'
                                compact
                                glyph='hide'
                                inputValue='1234567890' />
                        </FormItem>
                    </FormGroup>
                </div>
            </Example>

            <Example
                description={`The Input with add-on supports actions. Actions can be shown with a text
                    label or icon.`}
                title='Input with actions'>
                <div>
                    <FormGroup>
                        <FormLabel>Input with text action</FormLabel>
                        <FormItem>
                            <InputGroup
                                actions
                                addonPos='after'
                                inputValue='1234567890'>
                                <Button option='light'>Button</Button>
                            </InputGroup>
                        </FormItem>
                    </FormGroup>
                    <br />
                    <p>Compact mode</p>
                    <FormGroup>
                        <FormLabel>Input with text action</FormLabel>
                        <FormItem>
                            <InputGroup
                                actions
                                addonPos='after'
                                compact
                                inputValue='1234567890'>
                                <Button
                                    compact
                                    option='light'>Button</Button>
                            </InputGroup>
                        </FormItem>
                    </FormGroup>
                    <br />
                    <br />
                    <FormGroup>
                        <FormLabel>Input with icon text action</FormLabel>
                        <FormItem>
                            <InputGroup actions addonPos='after'>
                                <Button glyph='navigation-down-arrow' option='light' />
                            </InputGroup>
                        </FormItem>
                    </FormGroup>
                    <br />
                    <p>Compact mode</p>
                    <FormGroup>
                        <FormLabel>Input with icon text action</FormLabel>
                        <FormItem>
                            <InputGroup actions addonPos='after'
                                compact>
                                <Button
                                    compact
                                    glyph='navigation-down-arrow'
                                    option='light' />
                            </InputGroup>
                        </FormItem>
                    </FormGroup>
                </div>
            </Example>
        </ComponentPage>
    );
};
