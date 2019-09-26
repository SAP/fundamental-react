import FormGroup from '../FormGroup';
import FormItem from '../../Forms/FormItem';
import FormLabel from '../../Forms/FormLabel';
import InputGroup from '../InputGroup';
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
        <FormGroup
            disableStyles>
            <FormLabel>Left Aligned Text Addon</FormLabel>
            <FormItem>
                <InputGroup
                    addon='$'
                    addonPos='before'
                    inputValue='1234567890' />
            </FormItem>
        </FormGroup>
    ))
    .add('custom styles', () => (
        <FormGroup
            customStyles={require('../../utils/customStylesTest.css')}>
            <FormLabel>Left Aligned Text Addon</FormLabel>
            <FormItem>
                <InputGroup
                    addon='$'
                    addonPos='before'
                    inputValue='1234567890' />
            </FormItem>
        </FormGroup>
    ));
