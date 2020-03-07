import path from 'path';
import React from 'react';
import { ComponentPage, Example } from '../_playground';
import { FormGroup, FormItem, FormLabel, StepInput } from '../';

export const StepInputComponent = () => {
    return (
        <ComponentPage
            description={'The **Step Input** allows numbers to be entered.'}
            sourceModulePath={path.join(__dirname, './StepInput')}
            title='Step Input'>

            <Example
                centered
                description={'The StepInput is typically used used to enter numbers.The value can be increased or reduced with the provided controls.'}
                title='Step Input'>
                <div>
                    <FormGroup>
                        <FormLabel>Step Input</FormLabel>
                        <FormItem>
                            <StepInput />
                        </FormItem>
                    </FormGroup>
                </div>
            </Example>

            <Example
                centered
                description={''}
                title='Disabled'>
                <div>
                    <FormGroup>
                        <FormLabel>Step Input</FormLabel>
                        <FormItem>
                            <StepInput disabled value={10} />
                        </FormItem>
                    </FormGroup>
                </div>
            </Example>

            <Example
                centered
                description={''}
                title='Validation States'>
                <FormGroup>
                    <FormLabel>Error</FormLabel>
                    <FormItem>
                        <StepInput placeholder='Error'
                            validationState={{
                                state: 'error',
                                text: 'Test validation state'
                            }} />
                    </FormItem>
                </FormGroup>
                <FormGroup>
                    <FormLabel>Warning</FormLabel>
                    <FormItem>
                        <StepInput placeholder='Warning'
                            validationState={{
                                state: 'warning',
                                text: 'Test validation state'
                            }} />
                    </FormItem>

                </FormGroup>
                <FormGroup>
                    <FormLabel>Success</FormLabel>
                    <FormItem>
                        <StepInput placeholder='Success'
                            validationState={{
                                state: 'success',
                                text: 'Test validation state'
                            }} />
                    </FormItem>

                </FormGroup>
                <FormGroup>
                    <FormLabel>Information</FormLabel>
                    <FormItem>
                        <StepInput placeholder='Information'
                            validationState={{
                                state: 'information',
                                text: 'Test validation state'
                            }} />
                    </FormItem>
                </FormGroup>
            </Example>

        </ComponentPage>
    );
};
