/* eslint-disable react/no-multi-comp */
import Button from '../../Button/Button';
import FormInput from '../../Forms/FormInput';
import FormLabel from '../../Forms/FormLabel';
import FormTextarea from '../../Forms/FormTextarea';
import Icon from '../../Icon/Icon';
import InputGroup from '../InputGroup';
import InputGroupAddon from '../_InputGroupAddon';
import React from 'react';
import {
    boolean,
    select
} from '@storybook/addon-knobs';


export default {
    title: 'Component API/InputGroup',
    component: InputGroup,
    subcomponents: { InputGroupAddon }
};


export const primary = () => (
    <>
        <FormLabel htmlFor='primary'>Select</FormLabel>
        <InputGroup>
            <InputGroup.Addon isButton>
                <Button
                    aria-label='Open menu'
                    glyph='navigation-down-arrow'
                    option='transparent' />
            </InputGroup.Addon>
            <FormInput id='primary' />
        </InputGroup>
    </>
);

export const compact = () => (
    <>
        <FormLabel htmlFor='compact'>Select</FormLabel>
        <InputGroup compact>
            <InputGroup.Addon isButton>
                <Button
                    aria-label='Open menu'
                    glyph='navigation-down-arrow'
                    option='transparent' />
            </InputGroup.Addon>
            <FormInput id='compact' />
        </InputGroup>
    </>
);

export const disabled = () => (
    <>
        <FormLabel htmlFor='disabled'>Select</FormLabel>
        <InputGroup disabled>
            <InputGroup.Addon isButton>
                <Button
                    aria-label='Open menu'
                    glyph='navigation-down-arrow'
                    option='transparent' />
            </InputGroup.Addon>
            <FormInput id='disabled' />
        </InputGroup>
    </>
);

export const validationState = () => (
    <div className='fddocs-container'>
        <FormLabel htmlFor='error'>Select</FormLabel>
        <InputGroup validationState={{ state: 'error', text: 'Test validation state' }}>
            <InputGroup.Addon>$</InputGroup.Addon>
            <FormInput id='error' />
        </InputGroup>
        <FormLabel htmlFor='warning'>Select</FormLabel>
        <InputGroup validationState={{ state: 'warning', text: 'Test validation state' }}>
            <InputGroup.Addon>$</InputGroup.Addon>
            <FormInput id='warning' />
        </InputGroup>
        <FormLabel htmlFor='disabled'>Select</FormLabel>
        <InputGroup validationState={{ state: 'information', text: 'Test validation state' }}>
            <InputGroup.Addon>$</InputGroup.Addon>
            <FormInput id='disabled' />
        </InputGroup>
        <FormLabel htmlFor='success'>Select</FormLabel>
        <InputGroup validationState={{ state: 'success', text: 'Test validation state' }}>
            <InputGroup.Addon>$</InputGroup.Addon>
            <FormInput id='success' />
        </InputGroup>
    </div>
);

/**
 * The **InputGroup.Addon** `isButton` prop supports buttons by providing the correct styling. Buttons can be shown with a text label or icon.
 */

export const addonButton = () => (
    <div className='fddocs-container'>
        <FormLabel htmlFor='addon-button-1'>Select</FormLabel>
        <InputGroup>
            <FormInput id='addon-button-1' />
            <InputGroup.Addon isButton>
                <Button
                    aria-label='Open menu'
                    glyph='navigation-down-arrow'
                    option='transparent' />
            </InputGroup.Addon>
        </InputGroup>
        <FormLabel htmlFor='addon-button-2'>Select</FormLabel>
        <InputGroup>
            <InputGroup.Addon isButton>
                <Button
                    aria-label='Open menu'
                    glyph='navigation-down-arrow'
                    option='transparent' />
            </InputGroup.Addon>
            <FormInput id='addon-button-2' />
        </InputGroup>
    </div>
);

addonButton.storyName = 'Button add-on';

/**
 * The Input with text add-on component is typically used to specify the type of the data being entered, such as currency or unit of measure.
This add-on can be placed at the left or right of the input element.
 */

export const addonText = () => (
    <div className='fddocs-container'>
        <FormLabel htmlFor='addon-1'>Select</FormLabel>
        <InputGroup>
            <InputGroup.Addon>€</InputGroup.Addon>
            <FormInput id='addon-1' placeholder='Type text here' />
        </InputGroup>
        <FormLabel htmlFor='addon-2'>Select</FormLabel>
        <InputGroup>
            <FormInput id='addon-2' placeholder='Type text here' />
            <InputGroup.Addon>€</InputGroup.Addon>
        </InputGroup>
    </div>

);

addonText.storyName = 'Text add-on';

/** The consumer can add an **Icon** as a child of **InputGroup.Addon** */

export const addonIcon = () => (
    <div className='fddocs-container'>
        <FormLabel htmlFor='globe'>Select</FormLabel>
        <InputGroup>
            <InputGroup.Addon>
                <Icon ariaLabel='Globe' glyph='globe' />
            </InputGroup.Addon>
            <FormInput id='globe' placeholder='Type text here' />
        </InputGroup>
        <FormLabel htmlFor='hide'>Select</FormLabel>
        <InputGroup>
            <FormInput id='hide' placeholder='Type text here' />
            <InputGroup.Addon>
                <Icon ariaLabel='Hide' glyph='hide' />
            </InputGroup.Addon>
        </InputGroup>
    </div>
);

addonIcon.storyName = 'Icon add-on';

export const textArea = () => (
    <>
        <FormLabel htmlFor='textarea'>Select</FormLabel>
        <InputGroup>
            <FormTextarea defaultValue='Default' id='textarea' />
            <InputGroup.Addon>
                <Icon ariaLabel='Hide' glyph='hide' />
            </InputGroup.Addon>
        </InputGroup>
    </>
);

export const dev = () => (
    <>
        <FormLabel htmlFor='dev-inputgroup'>Select</FormLabel>
        <InputGroup
            compact={boolean('compact', false)}
            disabled={boolean('disabled', false)}
            validationState={select('Validation State', {
                'none': '',
                'success': { state: 'success', text: 'placeholder text' },
                'error': { state: 'error', text: 'placeholder text' },
                'information': { state: 'information', text: 'placeholder text' },
                'warning': { state: 'warning', text: 'placeholder text' }
            })}>
            <FormInput id='dev-inputgroup' />
            <InputGroup.Addon isButton>
                <Button
                    aria-label='Open menu'
                    glyph='navigation-down-arrow'
                    option='transparent' />
            </InputGroup.Addon>
        </InputGroup>
    </>
);

dev.parameters = { docs: { disable: true } };

export const noStyles = () => (
    <>
        <FormLabel htmlFor='nostyles'>Select</FormLabel>
        <InputGroup cssNamespace='xxx'>
            <InputGroup.Addon isButton>
                <Button
                    aria-label='Open menu'
                    glyph='navigation-down-arrow'
                    option='transparent' />
            </InputGroup.Addon>
            <FormInput id='nostyles' />
        </InputGroup>
    </>
);
noStyles.parameters = { docs: { disable: true } };
