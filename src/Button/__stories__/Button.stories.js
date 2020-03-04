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
        <React.Fragment>
            <Button>Default</Button>
            <Button glyph='cart'>Add to Cart</Button>
        </React.Fragment>
    ))
    .add('props', () => (
        <Button
            compact={boolean('compact'), false}
            disabled={boolean('disabled'), false}
            option={select('option', {
                'emphasized': 'emphasized',
                'transparent': 'transparent'
            })}
            type={select('type', {
                'standard': 'standard',
                'positive': 'positive',
                'negative': 'negative',
                'medium': 'medium'
            })}>Customizable</Button>
    ))
    .add('disabled styles', () => (
        <React.Fragment>
            <Button disableStyles>Default</Button>
            <Button disableStyles glyph='cart'>Add to Cart</Button>
        </React.Fragment>
    ));
