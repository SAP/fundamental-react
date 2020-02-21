import FormGroup from '../FormGroup';
import FormItem from '../FormItem';
import FormLabel from '../FormLabel';
import InputGroup from '../../InputGroup/InputGroup';
import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    withKnobs
} from '@storybook/addon-knobs';

storiesOf('Components|FormGroup', module)
    .addDecorator(withKnobs)
    .add('Default', () => (
        <FormGroup>
            <FormLabel>Left Aligned Text Addon</FormLabel>
            <FormItem>
                <InputGroup
                    addon='$'
                    addonPos='before'
                    inputValue='1234567890' />
            </FormItem>
        </FormGroup>
    ))
    .add('disable styles', () => (
        <FormGroup disableStyles>
            <FormLabel disableStyles>Left Aligned Text Addon</FormLabel>
            <FormItem disableStyles>
                <InputGroup
                    addon='$'
                    addonPos='before'
                    disableStyles
                    inputValue='1234567890' />
            </FormItem>
        </FormGroup>
    ));
