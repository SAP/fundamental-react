/* eslint-disable react/no-multi-comp */
import FormFieldset from '../FormFieldset';
import FormInput from '../FormInput';
import FormItem from '../FormItem';
import FormLabel from '../FormLabel';
import FormLegend from '../FormLegend';
import FormRadioGroup from '../FormRadioGroup';
import FormRadioItem from '../FormRadioItem';
import React from 'react';

export default {
    title: 'Component API/Forms/FormFieldset',
    component: FormFieldset
};

export const primary = () => (
    <>
        <FormFieldset>
            <FormLegend>
                Shipping Address
            </FormLegend>
            <FormItem>
                <FormLabel htmlFor='ex01'>
                    Name:
                </FormLabel>
                <FormInput id='ex01' />
            </FormItem>
            <FormItem>
                <FormLabel htmlFor='ex02'>
                    Street:
                </FormLabel>
                <FormInput id='ex02' />
            </FormItem>
            <FormItem>
                <FormLabel htmlFor='ex03'>
                    City:
                </FormLabel>
                <FormInput id='ex03' />
            </FormItem>
            <FormItem>
                <FormLabel htmlFor='ex04'>
                    ZIP code:
                </FormLabel>
                <FormInput id='ex04' />
            </FormItem>
        </FormFieldset>
        <FormFieldset>
            <FormLegend>
                Billing Address
            </FormLegend>
            <FormItem>
                <FormLabel htmlFor='ex05'>
                    Name:
                </FormLabel>
                <FormInput id='ex05' />
            </FormItem>
            <FormItem>
                <FormLabel htmlFor='ex06'>
                    Street:
                </FormLabel>
                <FormInput id='ex06' />
            </FormItem>
            <FormItem>
                <FormLabel htmlFor='ex07'>
                    City:
                </FormLabel>
                <FormInput id='ex07' />
            </FormItem>
            <FormItem>
                <FormLabel htmlFor='ex08'>
                    ZIP code:
                </FormLabel>
                <FormInput id='ex08' />
            </FormItem>
        </FormFieldset>
    </>
);

/** Radio button groups should always be grouped using FormFieldset for accessibility reasons. */

export const radioButtonGroups = () => (
    <>
        <FormFieldset>
            <FormLegend>
                Radio buttons
            </FormLegend>
            <FormRadioGroup>
                <FormRadioItem>
                    Option 1
                </FormRadioItem>
                <FormRadioItem>
                    Option 2
                </FormRadioItem>
                <FormRadioItem defaultChecked>
                    Option 3
                </FormRadioItem>
            </FormRadioGroup>
        </FormFieldset>
        <FormFieldset>
            <FormLegend>
                Radio buttons disabled
            </FormLegend>
            <FormRadioGroup>
                <FormRadioItem
                    defaultChecked
                    disabled>
                    Option 1
                </FormRadioItem>
                <FormRadioItem disabled>
                    Option 2
                </FormRadioItem>
                <FormRadioItem disabled>
                    Option 3
                </FormRadioItem>
            </FormRadioGroup>
        </FormFieldset>
        <FormFieldset>
            <FormLegend>
                Inline Radio buttons
            </FormLegend>
            <FormRadioGroup inline>
                <FormRadioItem>
                    Option 1
                </FormRadioItem>
                <FormRadioItem defaultChecked>
                    Option 2
                </FormRadioItem>
                <FormRadioItem>
                    Option 3
                </FormRadioItem>
            </FormRadioGroup>
        </FormFieldset>
        <FormFieldset>
            <FormLegend>
                Compact Radio buttons
            </FormLegend>
            <FormRadioGroup compact>
                <FormRadioItem>
                    Option 1
                </FormRadioItem>
                <FormRadioItem defaultChecked>
                    Option 2
                </FormRadioItem>
                <FormRadioItem>
                    Option 3
                </FormRadioItem>
            </FormRadioGroup>
        </FormFieldset>
    </>
);

export const noStyles = () => (
    <FormFieldset cssNamespace='xxx'>
        <FormLegend>
            Shipping Address
        </FormLegend>
        <FormItem>
            <FormLabel htmlFor='ex01'>
                Name:
            </FormLabel>
            <FormInput id='ex01' />
        </FormItem>
        <FormItem>
            <FormLabel htmlFor='ex02'>
                Street:
            </FormLabel>
            <FormInput id='ex02' />
        </FormItem>
        <FormItem>
            <FormLabel htmlFor='ex03'>
                City:
            </FormLabel>
            <FormInput id='ex03' />
        </FormItem>
        <FormItem>
            <FormLabel htmlFor='ex04'>
                ZIP code:
            </FormLabel>
            <FormInput id='ex04' />
        </FormItem>
    </FormFieldset>
);
noStyles.parameters = { docs: { disable: true } };
