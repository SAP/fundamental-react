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
            <ListGroup.Item>List item 1</ListGroup.Item>
            <ListGroup.Item>List item 2
                <ListGroup.ItemActions>
                    <button>placeholder</button>
                </ListGroup.ItemActions>
            </ListGroup.Item>
            <ListGroup.Item><ListGroup.ItemCheckbox>List item 1</ListGroup.ItemCheckbox></ListGroup.Item>
        </ListGroup>
    ))
    .add('disable styles', () => (
        <ListGroup disableStyles>
            <ListGroup.Item>List item 1</ListGroup.Item>
            <ListGroup.Item>List item 2
                <ListGroup.ItemActions>
                    <button>placeholder</button>
                </ListGroup.ItemActions>
            </ListGroup.Item>
            <ListGroup.Item><ListGroup.ItemCheckbox disableStyles>List item 1</ListGroup.ItemCheckbox></ListGroup.Item>
        </ListGroup>
    ))
    .add('custom styles', () => (
        <ListGroup
            customStyles={require('../../utils/WithStyles/customStylesTest.css')}>
            <ListGroup.Item>List item 1</ListGroup.Item>
            <ListGroup.Item>List item 2
                <ListGroup.ItemActions>
                    <button>placeholder</button>
                </ListGroup.ItemActions>
            </ListGroup.Item>
            <ListGroup.Item><ListGroup.ItemCheckbox disableStyles>List item 1</ListGroup.ItemCheckbox></ListGroup.Item>
        </ListGroup>
    ));
