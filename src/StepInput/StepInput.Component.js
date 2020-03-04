import path from 'path';
import React from 'react';
import { ComponentPage, Example } from '../_playground';
import { FormGroup, FormInput, FormItem, FormLabel, StepInput } from '../';

export const StepInputComponent = () => {
    return (
        <ComponentPage
            description={'The **Step Input** allows numbers to be entered.'}
            sourceModulePath={path.join(__dirname, './StepInput')}
            title='Step Input'>

            <Example
                description={'The Input with is typically used to enter numbers.The value can be increased or reduced with the provided controls.'}
                title='Step Input'>
                <div>
                    <FormGroup>
                        <FormLabel>Left Aligned Step Input</FormLabel>
                        <FormItem>
                            <StepInput>
                                <FormInput
                                    placeholder='Type text here' />
                            </StepInput>
                        </FormItem>
                    </FormGroup>
                </div>
            </Example>

        </ComponentPage>
    );
};
