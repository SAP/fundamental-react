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
                <Tile.Media>
                    <div>Tile Media here</div>
                </Tile.Media>
                <Tile.Content title='Tile Title'>
                    <p>Tile Description</p>
                </Tile.Content>
                <Tile.Actions>
                    <div>Tile Actions here</div>
                </Tile.Actions>
            </Tile>
            <Tile
                backgroundImage='https://placeimg.com/1600/400/nature'
                productTile>
                <Tile.Content title='Product Tile Title'>
                    <p>Product Tile Description</p>
                </Tile.Content>
            </Tile>
        </React.Fragment>
    ))
    .add('disable styles', () => (
        <React.Fragment>
            <Tile disableStyles>
                <Tile.Media>
                    <div>Tile Media here</div>
                </Tile.Media>
                <Tile.Content title='Tile Title'>
                    <p>Tile Description</p>
                </Tile.Content>
                <Tile.Actions>
                    <div>Tile Actions here</div>
                </Tile.Actions>
            </Tile>
            <Tile
                backgroundImage='https://placeimg.com/1600/400/nature'
                disableStyles
                productTile>
                <Tile.Media>
                    <div>Tile Media here</div>
                </Tile.Media>
                <Tile.Content title='Tile Title'>
                    <p>Tile Description</p>
                </Tile.Content>
                <Tile.Actions>
                    <div>Tile Actions here</div>
                </Tile.Actions>
            </Tile>
        </React.Fragment>
    ))
    .add('custom styles', () => (
        <React.Fragment>
            <Tile customStyles={require('../../utils/WithStyles/customStylesTest.css')}>
                <Tile.Media>
                    <div>Tile Media here</div>
                </Tile.Media>
                <Tile.Content title='Tile Title'>
                    <p>Tile Description</p>
                </Tile.Content>
                <Tile.Actions>
                    <div>Tile Actions here</div>
                </Tile.Actions>
            </Tile>
            <Tile
                backgroundImage='https://placeimg.com/1600/400/nature'
                customStyles={require('../../utils/WithStyles/customStylesTest.css')}
                productTile>
                <Tile.Media>
                    <div>Tile Media here</div>
                </Tile.Media>
                <Tile.Content title='Tile Title'>
                    <p>Tile Description</p>
                </Tile.Content>
                <Tile.Actions>
                    <div>Tile Actions here</div>
                </Tile.Actions>
            </Tile>
        </React.Fragment>
    ));
