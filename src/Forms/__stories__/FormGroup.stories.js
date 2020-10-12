/* eslint-disable react/no-multi-comp */
import Button from '../../Button/Button';
import FormGroup from '../FormGroup';
import FormInput from '../FormInput';
import FormItem from '../FormItem';
import FormLabel from '../FormLabel';
import FormTextarea from '../FormTextarea';
import InputGroup from '../../InputGroup/InputGroup';
import React from 'react';

export default {
    title: 'Component API/Forms/FormGroup',
    component: FormGroup
};

export const primary = () => (
    <FormGroup>
        <FormLabel>InputGroup inside FormGroup</FormLabel>
        <FormItem>
            <InputGroup>
                <InputGroup.Addon isButton>
                    <Button
                        glyph='accept'
                        option='transparent' />
                </InputGroup.Addon>
                <FormInput />
            </InputGroup>
        </FormItem>
    </FormGroup>
);

export const withFormInput = () => (
    <>
        <FormGroup>
            <FormItem>
                <FormLabel htmlFor='input-1'>
                    Default Input
                </FormLabel>
                <FormInput
                    id='input-1'
                    placeholder='Field placeholder text' />
            </FormItem>
        </FormGroup>
        <FormGroup>
            <FormItem>
                <FormLabel
                    htmlFor='input-2'
                    required>
                    Required Input
                </FormLabel>
                <FormInput
                    id='input-2'
                    placeholder='Field placeholder text' />
            </FormItem>
        </FormGroup>
        <FormGroup>
            <FormItem>
                <FormLabel
                    htmlFor='input-3'
                    required>
                    Password
                </FormLabel>
                <FormInput
                    id='input-3'
                    placeholder='Field placeholder text'
                    type='password' />
            </FormItem>
        </FormGroup>
    </>
);

export const withFormTextarea = () => (
    <>
        <FormGroup>
            <FormItem>
                <FormLabel
                    htmlFor='textarea-1'
                    required>
                    Text area
                </FormLabel>
                <FormTextarea
                    defaultValue=' Pellentesque metus lacus commodo eget justo ut rutrum varius nunc.'
                    id='textarea-1' />
            </FormItem>
        </FormGroup>
        <FormGroup>
            <FormItem>
                <FormLabel htmlFor='textarea-2'>
                    Text area with counter
                </FormLabel>
                <FormTextarea
                    id='textarea-2'
                    maxLength={150} />
            </FormItem>
        </FormGroup>
    </>
);

export const noStyles = () => (
    <FormGroup cssNamespace='xxx'>
        <FormLabel>InputGroup inside FormGroup</FormLabel>
        <FormItem>
            <InputGroup>
                <InputGroup.Addon isButton>
                    <Button
                        glyph='accept'
                        option='transparent' />
                </InputGroup.Addon>
                <FormInput />
            </InputGroup>
        </FormItem>
    </FormGroup>
);
noStyles.parameters = { docs: { disable: true } };
