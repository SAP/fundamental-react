/* eslint-disable react/no-multi-comp */
import Button from '../../Button/Button';
import Identifier from '../../Identifier/Identifier';
import Image from '../../Image/Image';
import Menu from '../../Menu/Menu';
import Popover from '../../Popover/Popover';
import React from 'react';
import Tile from '../Tile';
import TileActions from '../_TileActions';
import TileContent from '../_TileContent';
import TileMedia from '../_TileMedia';

export default {
    title: 'Component API/Tile',
    component: Tile,
    subcomponents: { TileActions, TileContent, TileMedia }
};


export const primary = () => (
    <>
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
            backgroundImage='./assets/nature-2.jpg'
            productTile>
            <Tile.Content title='Product Tile Title'>
                <p>Product Tile Description</p>
            </Tile.Content>
        </Tile>
    </>
);

export const simpleTile = () => (
    <Tile active onClick={() => {}}>
        <Tile.Content title='Tile Title'>
            <p>Tile Description</p>
        </Tile.Content>
    </Tile>
);

export const mediaTile = () => (
    <>
        <Tile active onClick={() => {}}>
            <Tile.Media>
                <Image photo='./assets/nature.jpg' size='m' />
            </Tile.Media>
            <Tile.Content title='Tile Title' />
        </Tile>
        <br />
        <Tile active onClick={() => {}}>
            <Tile.Media>
                <Image photo='./assets/nature.jpg' size='l'
                    type='circle' />
            </Tile.Media>
            <Tile.Content title='Tile Title'>
                <p>Tile Description</p>
            </Tile.Content>
        </Tile>
        <br />
        <Tile active onClick={() => {}}>
            <Tile.Media>
                <Identifier color={3} glyph='home'
                    size='m' />
            </Tile.Media>
            <Tile.Content title='Tile Title'>
                <p>Tile Description</p>
            </Tile.Content>
        </Tile>
    </>
);

export const actionTile = () => (
    <Tile active onClick={() => {}}>
        <Tile.Content title='Tile Title' />
        <Tile.Actions>
            <Popover
                body={
                    <Menu>
                        <Menu.List>
                            <Menu.Item url='#'>Option 1</Menu.Item>
                            <Menu.Item url='#'>Option 2</Menu.Item>
                            <Menu.Item url='#'>Option 3</Menu.Item>
                            <Menu.Item url='#'>Option 4</Menu.Item>
                        </Menu.List>
                    </Menu>
                }
                control={<Button glyph='vertical-grip' option='transparent' />}
                placement='bottom-end' />
        </Tile.Actions>
    </Tile>
);

export const productTile = () => (
    <Tile active backgroundImage='./assets/nature-2.jpg'
        onClick={() => {}} productTile>
        <Tile.Content title='Tile Title'>
            <p>Tile Description</p>
        </Tile.Content>
    </Tile>
);
