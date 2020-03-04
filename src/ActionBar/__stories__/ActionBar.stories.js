import ActionBar from '../ActionBar';
import Button from '../../Button/Button';
import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    number,
    text,
    withKnobs
} from '@storybook/addon-knobs';

storiesOf('Components|ActionBar', module)
    .addDecorator(withKnobs)
    .add('Dev', () => (
        <ActionBar
            actions={(<><Button>Button</Button>
                <Button option='emphasized'>Button</Button></>
            )}
            description={text('description', 'Action Bar description')}
            headingLevel={number('headingLevel', 1, {
                range: true,
                min: 1,
                max: 3,
                step: 1
            })}
            onBackClick={() => {}}
            title={text('title', 'Page Title')} />
    ))
    .add('No back button', () => (
        <ActionBar
            actions={(<><Button>Button</Button>
                <Button option='emphasized'>Button</Button></>
            )}
            description='Description'
            title='Page Title' />

    ))
    .add('No description', () => (
        <ActionBar
            actions={(<><Button>Button</Button>
                <Button option='emphasized'>Button</Button></>
            )}
            title='Page Title' />

    ))
    .add('No actions', () => (
        <ActionBar
            title='Page Title' />

    ))
    .add('disable styles', () => (
        <ActionBar disableStyles title='default' />
    ));
