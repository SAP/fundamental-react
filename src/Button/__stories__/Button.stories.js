import Button from '../Button';
import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    boolean,
    select,
    withKnobs
} from '@storybook/addon-knobs';

storiesOf('Components|Button', module)
    .addDecorator(withKnobs)
    .add('Default', () => (
        <Button>Default</Button>
    ))
    .add('props', () => (
        <Button
            compact={boolean('compact'), false}
            disabled={boolean('disabled'), false}
            option={select('option', {
                'emphasized': 'emphasized',
                'light': 'light'
            })}
            type={select('type', {
                'standard': 'standard',
                'positive': 'positive',
                'negative': 'negative',
                'medium': 'medium'
            })}>Customizable</Button>
    ))
    .add('disabled styles', () => (
        <Button disableStyles>Disabled Styles</Button>
    ))
    .add('dynamic requires', () => (
        <Button customStyles={require('../../utils/customStylesTest.css')}>Test with custom css</Button>
    ));
