import { Button } from '../Button/Button';
import { Identifier } from '../Identifier/Identifier';
import { mount } from 'enzyme';
import { Popover } from '../Popover/Popover';
import React from 'react';
import renderer from 'react-test-renderer';
import { Menu, MenuItem, MenuList } from '../Menu/Menu';
import { ProductTile, ProductTileContent, ProductTileMedia, Tile, TileActions, TileContent, TileGrid, TileMedia } from './Tile';

describe('<Tile />', () => {
    const simpleTile = (
        <Tile className='blue'>
            <TileContent className='red' title='Tile Title'>
                <p>Tile Description</p>
            </TileContent>
        </Tile>
    );

    const disabledSimpleTile = (
        <Tile backgroundColor={8} columnSpan={3}
            disabled>
            <TileContent title='Tile Title'>
                <p>Tile Description</p>
            </TileContent>
        </Tile>
    );

    const mediaTile = (
        <Tile isButton>
            <TileMedia className='green'>
                <Identifier color={3} glyph='home'
                    size='m' />
            </TileMedia>
            <TileContent title='Tile Title'>
                <p>Tile Description</p>
            </TileContent>
        </Tile>
    );

    const actionTile = (
        <Tile>
            <TileContent title='Tile Title' />
            <TileActions className='yellow'>
                <Popover
                    body={
                        <Menu>
                            <MenuList>
                                <MenuItem url='/'>Option 1</MenuItem>
                                <MenuItem url='/'>Option 2</MenuItem>
                                <MenuItem url='/'>Option 3</MenuItem>
                                <MenuItem url='/'>Option 4</MenuItem>
                            </MenuList>
                        </Menu>
                    }
                    control={<Button glyph='vertical-grip' type='standard' />} />
            </TileActions>
        </Tile>
    );

    const mediaTileNoClass = (
        <Tile isButton>
            <TileMedia>
                <Identifier color={3} glyph='home'
                    size='m' />
            </TileMedia>
            <TileContent title='Tile Title'>
                <p>Tile Description</p>
            </TileContent>
        </Tile>
    );

    const actionTileNoClass = (
        <Tile>
            <TileContent title='Tile Title' />
            <TileActions>
                <Popover
                    body={
                        <Menu>
                            <MenuList>
                                <MenuItem url='/'>Option 1</MenuItem>
                                <MenuItem url='/'>Option 2</MenuItem>
                                <MenuItem url='/'>Option 3</MenuItem>
                                <MenuItem url='/'>Option 4</MenuItem>
                            </MenuList>
                        </Menu>
                    }
                    control={<Button glyph='vertical-grip' type='standard' />} />
            </TileActions>
        </Tile>
    );

    const productMediaTile = (
        <ProductTile className='pink' isButton>
            <ProductTileMedia image='https://techne.yaas.io/images/product-thumbnail-wide.png' />
            <ProductTileContent title='Tile Title'>
                <p>Tile Description</p>
            </ProductTileContent>
        </ProductTile>
    );

    const disabledProductMediaTile = (
        <ProductTile disabled>
            <ProductTileMedia
                className='blue'
                image='https://techne.yaas.io/images/product-thumbnail-wide.png' />
            <ProductTileContent className='blue' title='Tile Title'>
                <p>Tile Description</p>
            </ProductTileContent>
        </ProductTile>
    );

    const defaultTileGrid = (
        <TileGrid className='blue'>
            <Tile colorAccent={7} rowSpan={2}>
                <TileContent title='Tile Title'>
                    <p>Tile Description</p>
                </TileContent>
            </Tile>
        </TileGrid>
    );

    const tileGrid = (
        <TileGrid col={4}>
            <Tile colorAccent={7} rowSpan={2}>
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

        // media tile no class
        component = renderer.create(mediaTileNoClass);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // action tile no class
        component = renderer.create(actionTileNoClass);
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

    describe('Prop spreading', () => {
        test('should allow props to be spread to the Tile component', () => {
            const element = mount(<Tile data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the TileContent component', () => {
            const element = mount(<TileContent data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        xtest('should allow props to be spread to the TileContent component\'s h2 element', () => {
            // TODO: placeholder for this test description once that functionality is built
        });

        test('should allow props to be spread to the TileMedia component', () => {
            const element = mount(<TileMedia data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the TileActions component', () => {
            const element = mount(<TileActions data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the ProductTile component', () => {
            const element = mount(<ProductTile data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the ProductTileContent component', () => {
            const element = mount(<ProductTileContent data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        xtest('should allow props to be spread to the ProductTileContent component\'s h2 element', () => {
            // TODO: placeholder for this test description once that functionality is built
        });

        test('should allow props to be spread to the ProductTileMedia component', () => {
            const element = mount(<ProductTileMedia data-sample='Sample' image='https://techne.yaas.io/images/product-thumbnail-wide.png' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the TileGrid component', () => {
            const element = mount(<TileGrid data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });
});
