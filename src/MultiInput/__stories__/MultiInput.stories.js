/* eslint-disable react/no-multi-comp */
import { action } from '@storybook/addon-actions';
import FormGroup from '../../Forms/FormGroup';
import FormItem from '../../Forms/FormItem';
import FormLabel from '../../Forms/FormLabel';
import MultiInput from '../MultiInput';
import React from 'react';
import {
    boolean,
    select,
    text
} from '@storybook/addon-knobs';

export default {
    title: 'Component API/MultiInput',
    component: MultiInput
};

const data = [
    'Apple',
    'Apricot',
    'Acai',
    'African Moringa',
    'Bearberry',
    'Bilberry',
    'Blood orange',
    'Barbadine',
    'Barbados cherry',
    'Balsam Apple',
    'Chokeberry',
    'Cranberry',
    'Cupuacu'
];

export const primary = () => (
    <>
        <FormLabel htmlFor='multiInputPrimaryExample' >Primary</FormLabel>
        <MultiInput
            buttonLabel='Show options'
            data={data}
            inputProps={{
                id: 'multiInputPrimaryExample'
            }}
            placeholder='Placeholder' />
    </>
);

export const compact = () => (
    <>
        <FormLabel htmlFor='multiInputCompactExample' >Compact</FormLabel>
        <MultiInput
            buttonProps={{
                'aria-label': 'Show options'
            }}
            compact
            data={data}
            inputProps={{
                id: 'multiInputCompactExample'
            }}
            placeholder='Placeholder' />
    </>
);
export const disabled = () => (
    <>
        <FormLabel htmlFor='multiInputDisabledExample' >Disabled</FormLabel>
        <MultiInput
            buttonLabel='Show options'
            data={data}
            disabled
            inputProps={{
                id: 'multiInputDisabledExample'
            }}
            placeholder='Placeholder' />
    </>
);

export const validationStates = () => (
    <div className='fddocs-container'>
        <FormGroup>
            <FormLabel htmlFor='multiInputErrorExample' >Multi input with an error</FormLabel>
            <FormItem>
                <MultiInput
                    buttonLabel='Show options'
                    data={data}
                    inputProps={{
                        id: 'multiInputErrorExample'
                    }}
                    placeholder='Error'
                    validationState={{ state: 'error', text: 'Test validation state' }} />
            </FormItem>
        </FormGroup>
        <FormGroup>
            <FormLabel htmlFor='multiInputWarningExample' >Multi input with a warning</FormLabel>
            <FormItem>
                <MultiInput
                    buttonLabel='Show options'
                    data={data}
                    inputProps={{
                        id: 'multiInputWarningExample'
                    }}
                    placeholder='Warning'
                    validationState={{ state: 'warning', text: 'Test validation state' }} />
            </FormItem>
        </FormGroup>
        <FormGroup>
            <FormLabel htmlFor='multiInputSuccessExample' >Successful Multi input</FormLabel>
            <FormItem>
                <MultiInput
                    buttonLabel='Show options'
                    data={data}
                    inputProps={{
                        id: 'multiInputSuccessExample'
                    }}
                    placeholder='Success'
                    validationState={{ state: 'success', text: 'Test validation state' }} />
            </FormItem>
        </FormGroup>
        <FormGroup>
            <FormLabel htmlFor='multiInputInfoExample' >Multi input with some info</FormLabel>
            <FormItem>
                <MultiInput
                    buttonLabel='Show options'
                    data={data}
                    inputProps={{
                        id: 'multiInputInfoExample'
                    }}
                    placeholder='Information'
                    validationState={{ state: 'information', text: 'Test validation state' }} />
            </FormItem>
        </FormGroup>
    </div>
);

export const dev = () => (
    <>
        <FormLabel htmlFor='multiInputDevExample' >Dev</FormLabel>
        <MultiInput
            buttonLabel='Show options'
            compact={boolean('compact', false)}
            data={data}
            disabled={boolean('disabled', false)}
            inputProps={{
                id: 'multiInputDevExample'
            }}
            onTagsUpdate={action('on-tags-update')}
            placeholder={text('Placeholder', 'Select a Fruit')}
            validationState={select('Validation State', {
                'none': '',
                'success': { state: 'success', text: 'placeholder text' },
                'error': { state: 'error', text: 'placeholder text' },
                'information': { state: 'information', text: 'placeholder text' },
                'warning': { state: 'warning', text: 'placeholder text' }
            })} />
    </>
);

dev.parameters = { docs: { disable: true } };

export const noStyles = () => (
    <>
        <FormLabel cssNamespace='xxx' htmlFor='multiInputPrimaryExample' >Primary</FormLabel>
        <MultiInput
            buttonLabel='Show options'
            cssNamespace='xxx'
            data={data}
            inputProps={{
                id: 'multiInputPrimaryExample'
            }}
            placeholder='Placeholder' />
    </>
);
noStyles.parameters = { docs: { disable: true } };
