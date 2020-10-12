/* eslint-disable react/no-multi-comp */
import { action } from '@storybook/addon-actions';
import FormLabel from '../../Forms/FormLabel';
import React from 'react';
import TimePicker from '../TimePicker';

export default {
    title: 'Component API/TimePicker',
    component: TimePicker
};
export const primary = () => (
    <>
        <FormLabel htmlFor='timepickerPrimaryExample-input' >Time</FormLabel>
        <TimePicker
            buttonProps={{
                'aria-label': 'Show/hide time picker'
            }}
            id='timepickerPrimaryExample' />
    </>
);

export const disabled = () => (
    <>
        <FormLabel htmlFor='timepickerDisabledExample-input' >Time</FormLabel>
        <TimePicker
            buttonProps={{
                'aria-label': 'Show/hide time picker'
            }}
            disabled
            id='timepickerDisabledExample' />
    </>
);

export const format12Hours = () => (
    <>
        <FormLabel htmlFor='timepicker12HrExample-input' >Time</FormLabel>
        <TimePicker
            buttonProps={{
                'aria-label': 'Show/hide time picker'
            }}
            format12Hours
            id='timepicker12HrExample' />
    </>
);

export const initialValue = () => (
    <>
        <FormLabel htmlFor='timepickerInitExample-input' >Time</FormLabel>
        <TimePicker
            buttonProps={{
                'aria-label': 'Show/hide time picker'
            }}
            format12Hours
            id='timepickerInitExample'
            value='10:30:34 am' />
    </>
);

export const hideSeconds = () => (
    <>
        <FormLabel htmlFor='timepickerHideSecondExample-input' >Time</FormLabel>
        <TimePicker
            buttonProps={{
                'aria-label': 'Show/hide time picker'
            }}
            id='timepickerHideSecondExample'
            showSecond={false} />
    </>
);

export const dev = () => (
    <>
        <FormLabel htmlFor='timepickerInitExample-input' >Time</FormLabel>
        <TimePicker
            buttonProps={{
                'aria-label': 'Show/hide time picker'
            }}
            format12Hours
            id='timepickerInitExample'
            onChange={action('on-change')}
            value='10:30:34 am' />
    </>
);

export const noStyles = () => (
    <>
        <FormLabel cssNamespace='xxx' htmlFor='timepickerPrimaryExample-input' >Time</FormLabel>
        <TimePicker
            buttonProps={{
                'aria-label': 'Show/hide time picker'
            }}
            cssNamespace='xxx'
            id='timepickerPrimaryExample' />
    </>
);
noStyles.parameters = { docs: { disable: true } };
