import ActionBar from '../ActionBar';
import Button from '../../Button/Button';
import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    withKnobs
} from '@storybook/addon-knobs';

storiesOf('Components|ActionBar', module)
    .addDecorator(withKnobs)
    .add('Default', () => (
        <ActionBar>
            <ActionBar.Back />
            <ActionBar.Header description={'Action Bar Description'} title={'Page Title'} />
            <ActionBar.Actions>
                <Button>Button</Button>
                <Button option='emphasized'>Button</Button>
            </ActionBar.Actions>
        </ActionBar>
    ))
    .add('disable styles', () => (
        <ActionBar disableStyles>
            <ActionBar.Back disableStyles />
            <ActionBar.Header description={'Action Bar Description'} title={'Page Title'} />
            <ActionBar.Actions>
                <Button disableStyles>Button</Button>
                <Button disableStyles option='emphasized'>Button</Button>
            </ActionBar.Actions>
        </ActionBar>
    ))
    .add('custom styles', () => (
        <ActionBar customStyles={require('../../utils/WithStyles/customStylesTest.css')}>
            <ActionBar.Back disableStyles />
            <ActionBar.Header description={'Action Bar Description'} title={'Page Title'} />
            <ActionBar.Actions>
                <Button disableStyles>Button</Button>
                <Button disableStyles option='emphasized'>Button</Button>
            </ActionBar.Actions>
        </ActionBar>
    ));
