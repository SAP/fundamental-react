import Button from '../../Button/Button';
import FormInput from '../../Forms/FormInput';
import FormTextarea from '../../Forms/FormTextarea';
import Icon from '../../Icon/Icon';
import InputGroup from '../InputGroup';
import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    boolean,
    select,
    withKnobs
} from '@storybook/addon-knobs';

const createProps = (overrides) => ({
    compact: boolean('compact', false),
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

storiesOf('Components|InputGroup', module)
    .addDecorator(withKnobs)
    .add('Default', () => (
        <InputGroup {...createProps()}>
            <FormInput />
            <InputGroup.Addon isButton>
                <Button
                    glyph='navigation-down-arrow'
                    option='light' />
            </InputGroup.Addon>
        </InputGroup>
    ))
    .add('disable styles', () => (
        <InputGroup {...createProps()}
            disableStyles>
            <FormInput />
            <InputGroup.Addon isButton>
                <Button
                    glyph='navigation-down-arrow'
                    option='light' />
            </InputGroup.Addon>
        </InputGroup>
    ))
    .add('addon button before', () => (
        <InputGroup {...createProps()}>
            <InputGroup.Addon isButton>
                <Button
                    glyph='navigation-down-arrow'
                    option='light' />
            </InputGroup.Addon>
            <FormInput />
        </InputGroup>
    ))
    .add('addon button after', () => (
        <InputGroup {...createProps()}>
            <FormInput />
            <InputGroup.Addon isButton>
                <Button
                    glyph='navigation-down-arrow'
                    option='light' />
            </InputGroup.Addon>
        </InputGroup>
    ))
    .add('addon text before', () => (
        <InputGroup {...createProps()}>
            <InputGroup.Addon>€</InputGroup.Addon>
            <FormInput placeholder='Type text here' />
        </InputGroup>
    ))
    .add('addon text after', () => (
        <InputGroup {...createProps()}>
            <FormInput placeholder='Type text here' />
            <InputGroup.Addon>€</InputGroup.Addon>
        </InputGroup>
    ))
    .add('addon icon before', () => (
        <InputGroup {...createProps()}>
            <InputGroup.Addon>
                <Icon glyph='globe' />
            </InputGroup.Addon>
            <FormInput placeholder='Type text here' />
        </InputGroup>
    ))
    .add('addon icon after', () => (
        <InputGroup {...createProps()}>
            <FormInput placeholder='Type text here' />
            <InputGroup.Addon>
                <Icon glyph='hide' />
            </InputGroup.Addon>
        </InputGroup>
    ))
    .add('textarea', () => (
        <InputGroup {...createProps()}>
            <FormTextarea>Default</FormTextarea>
            <InputGroup.Addon>
                <Icon glyph='hide' />
            </InputGroup.Addon>
        </InputGroup>
    ));
