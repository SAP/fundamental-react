import ListGroup from '../ListGroup';
import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    withKnobs
} from '@storybook/addon-knobs';

storiesOf('Components|ListGroup', module)
    .addDecorator(withKnobs)
    .add('Default', () => (
        <ListGroup>
            <div>Default1</div>
            <div>Default2</div>
            <div>Default3</div>
        </ListGroup>
    ))
    .add('disable styles', () => (
        <ListGroup disableStyles>
            <div>Default1</div>
            <div>Default2</div>
            <div>Default3</div>
        </ListGroup>
    ))
    .add('custom styles', () => (
        <ListGroup
            customStyles={require('../../utils/customStylesTest.css')}>
            <div>Default1</div>
            <div>Default2</div>
            <div>Default3</div>
        </ListGroup>
    ));
