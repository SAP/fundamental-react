import React from 'react';
import renderer from 'react-test-renderer';
import {
  Tile,
  TileContent,
  TileMedia,
  TileActions,
  ProductTile,
  ProductTileContent,
  ProductTileMedia,
  TileGrid
} from './Tile';
import { Popover } from '../Popover/Popover';
import { Button } from '../Button/Button';
import { Identifier } from '../Identifier/Identifier';
import { Menu, MenuList, MenuItem } from '../Menu/Menu';

describe('<Tile />', () => {
  const simpleTile = (
      <Tile>
          <TileContent title='Tile Title'>
              <p>Tile Description</p>
          </TileContent>
      </Tile>
  );

  const disabledSimpleTile = (
      <Tile disabled columnSpan={3}
          backgroundColor={8}>
          <TileContent title='Tile Title'>
              <p>Tile Description</p>
          </TileContent>
      </Tile>
  );

  const mediaTile = (
      <Tile isButton>
          <TileMedia>
              <Identifier size='m' glyph='home'
                  color={3} />
          </TileMedia>
          <TileContent title='Tile Title'>
              <p>Tile Description</p>
          </TileContent>
      </Tile>
  );

  const actionTile = (
      <Tile>
          <TileContent title='Tile Title' />
          <TileActions>
              <Popover
                  control={<Button type='standard' glyph='vertical-grip' />}
                  body={
                      <Menu>
                          <MenuList>
                              <MenuItem url='/'>Option 1</MenuItem>
                              <MenuItem url='/'>Option 2</MenuItem>
                              <MenuItem url='/'>Option 3</MenuItem>
                              <MenuItem url='/'>Option 4</MenuItem>
                          </MenuList>
                      </Menu>
          } />
          </TileActions>
      </Tile>
  );

  const productMediaTile = (
      <ProductTile isButton>
          <ProductTileMedia image='https://techne.yaas.io/images/product-thumbnail-wide.png' />
          <ProductTileContent title='Tile Title'>
              <p>Tile Description</p>
          </ProductTileContent>
      </ProductTile>
  );

  const disabledProductMediaTile = (
      <ProductTile disabled>
          <ProductTileMedia image='https://techne.yaas.io/images/product-thumbnail-wide.png' />
          <ProductTileContent title='Tile Title'>
              <p>Tile Description</p>
          </ProductTileContent>
      </ProductTile>
  );

  const defaultTileGrid = (
      <TileGrid>
          <Tile rowSpan={2} colorAccent={7}>
              <TileContent title='Tile Title'>
                  <p>Tile Description</p>
              </TileContent>
          </Tile>
      </TileGrid>
  );

  const tileGrid = (
      <TileGrid col={4}>
          <Tile rowSpan={2} colorAccent={7}>
              <TileContent title='Tile Title'>
                  <p>Tile Description</p>
              </TileContent>
          </Tile>
      </TileGrid>
  );

  test('create tile component', () => {
    // simple tile
    let component = renderer.create(simpleTile);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // disabled simple tile
    component = renderer.create(disabledSimpleTile);
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // media tile
    component = renderer.create(mediaTile);
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // action tile
    component = renderer.create(actionTile);
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // product media tile
    component = renderer.create(productMediaTile);
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // disabled product media tile
    component = renderer.create(disabledProductMediaTile);
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // default tile grid
    component = renderer.create(defaultTileGrid);
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // tile grid
    component = renderer.create(tileGrid);
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
