import FormRadioGroup from '../FormRadioGroup';
import FormRadioItem from '../FormRadioItem';
import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    boolean,
    select,
    withKnobs
} from '@storybook/addon-knobs';


const createRadioGroupProps = (overrides) => ({
    inline: boolean('inline', false),
    compact: boolean('compact', false),
    ...overrides
});

const createRadioProps = (overrides) => ({
    disabled: boolean('disabled', false),
    state: select('Validation State', {
        'default': null,
        'valid': 'valid',
        'invalid': 'invalid',
        'information': 'information',
        'warning': 'warning'
    }),
    ...overrides
});

storiesOf('Components|FormRadioGroup', module)
    .addDecorator(withKnobs)
    .add('Default', () => (
        <FormRadioGroup {...createRadioGroupProps()}>
            <FormRadioItem {...createRadioProps()}>
                Option 1
            </FormRadioItem>
            <FormRadioItem {...createRadioProps()}>
                Option 2
            </FormRadioItem>
            <FormRadioItem {...createRadioProps()}>
                Option 3
            </FormRadioItem>
        </FormRadioGroup>
    ))
    .add('inline', () => (
        <FormRadioGroup inline>
            <FormRadioItem>
                Option 1
            </FormRadioItem>
            <FormRadioItem>
                Option 2
            </FormRadioItem>
            <FormRadioItem>
                Option 3
            </FormRadioItem>
        </FormRadioGroup>
    ))
    .add('compact', () => (
        <FormRadioGroup compact>
            <FormRadioItem>
                Option 1
            </FormRadioItem>
            <FormRadioItem>
                Option 2
            </FormRadioItem>
            <FormRadioItem>
                Option 3
            </FormRadioItem>
        </FormRadioGroup>
    ))
    .add('disable styles', () => (
        <FormRadioGroup disableStyles>
            <FormRadioItem>
                Option 1
            </FormRadioItem>
            <FormRadioItem>
                Option 2
            </FormRadioItem>
            <FormRadioItem>
                Option 3
            </FormRadioItem>
        </FormRadioGroup>
    ));
