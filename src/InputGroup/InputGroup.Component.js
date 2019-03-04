import { listOfIcons } from '../utils/listOfIcons';
import path from 'path';
import React from 'react';
import { Button, FormGroup, FormItem, FormLabel, InputGroup } from '../';
import { ComponentPage, Example, Playground, Separator } from '../_playground';

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
                                inputType='text'
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
                                inputType='text'
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
                                inputType='text'
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
                                inputType='text'
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
                        <FormLabel>Search Input</FormLabel>
                        <FormItem>
                            <InputGroup inputPlaceholder='Search Term' inputType='search' />
                        </FormItem>
                    </FormGroup>
                    <br />
                    <p>Compact mode</p>
                    <FormGroup>
                        <FormLabel>Search Input</FormLabel>
                        <FormItem>
                            <InputGroup
                                compact
                                inputPlaceholder='Search Term'
                                inputType='search' />
                        </FormItem>
                    </FormGroup>
                    <br />
                    <br />
                    <FormGroup>
                        <FormLabel>Input with icon on the left</FormLabel>
                        <FormItem>
                            <InputGroup
                                addonPos='before'
                                glyph='globe'
                                inputType='text'
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
                                inputType='text'
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
                                inputType='text'
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
                                inputType='text'
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
                                inputType='text'
                                inputValue='1234567890'>
                                <Button option='light'>Button</Button>
                            </InputGroup>
                        </FormItem>
                    </FormGroup>
                    <br />
                    <br />
                    <FormGroup>
                        <FormLabel>Input with icon text action</FormLabel>
                        <FormItem>
                            <InputGroup actions addonPos='after'
                                inputType='text'>
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
                                compact inputType='text'>
                                <Button glyph='navigation-down-arrow' option='light' />
                            </InputGroup>
                        </FormItem>
                    </FormGroup>
                </div>
            </Example>

            <Separator />

            <Playground
                component='inputgroup'
                schema={[
                    {
                        attribute: 'addonPos',
                        typeOfAttribute: 'string',
                        'enum': ['after', 'before']
                    },
                    {
                        attribute: 'inputValue',
                        typeOfAttribute: 'string'
                    },
                    {
                        attribute: 'glyph',
                        typeOfAttribute: 'string',
                        'enum': listOfIcons
                    },
                    {
                        attribute: 'children',
                        typeOfAttribute: 'string'
                    }
                ]}>
                <FormGroup>
                    <FormLabel>Input with text action</FormLabel>
                    <FormItem>
                        <InputGroup
                            actions
                            addon='$'
                            addonPos='after'
                            inputType='text'
                            inputValue='1234567890'>
                            <Button glyph='navigation-down-arrow' option='light'>
                                Button
                            </Button>
                        </InputGroup>
                    </FormItem>
                </FormGroup>
            </Playground>

        </ComponentPage>
    );
};
