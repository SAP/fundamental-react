import React from 'react';
import { storiesOf } from '@storybook/react';
import Tile from '../Tile';
import {
    withKnobs
} from '@storybook/addon-knobs';

storiesOf('Components|Tile', module)
    .addDecorator(withKnobs)
    .add('Default', () => (
        <React.Fragment>
            <Tile>
                <Tile.Content title='Tile Title'>
                    <p>Tile Description</p>
                </Tile.Content>
            </Tile>
            <Tile>
                <Tile.Content productTile title='Tile Title'>
                    <p>Tile Description</p>
                </Tile.Content>
            </Tile>
        </React.Fragment>
    ))
    .add('disable styles', () => (
        <React.Fragment>
            <Tile disableStyles>
                <Tile.Content title='Tile Title'>
                    <p>Tile Description</p>
                </Tile.Content>
            </Tile>
            <Tile disableStyles>
                <Tile.Content productTile title='Tile Title'>
                    <p>Tile Description</p>
                </Tile.Content>
            </Tile>
        </React.Fragment>
    ))
    .add('custom styles', () => (
        <React.Fragment>
            <Tile customStyles={require('../../utils/customStylesTest.css')}>
                <Tile.Content title='Tile Title'>
                    <p>Tile Description</p>
                </Tile.Content>
            </Tile>
            <Tile customStyles={require('../../utils/customStylesTest.css')}>
                <Tile.Content productTile title='Tile Title'>
                    <p>Tile Description</p>
                </Tile.Content>
            </Tile>
        </React.Fragment>
    ));
