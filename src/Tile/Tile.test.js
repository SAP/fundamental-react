import { Button } from '../';
import { Identifier } from '../Identifier/Identifier';
import { mount } from 'enzyme';
import { Popover } from '../Popover/Popover';
import ProductTile from './ProductTile';
import React from 'react';
import renderer from 'react-test-renderer';
import Tile from './Tile';
import TileGrid from './TileGrid';
import { Menu, MenuItem, MenuList } from '../Menu/Menu';

describe('<Tile />', () => {
    const simpleTile = (
        <Tile className='blue'>
            <Tile.Content className='red' title='Tile Title'>
                <p>Tile Description</p>
            </Tile.Content>
        </Tile>
    );

    const disabledSimpleTile = (
        <Tile backgroundColor={8} columnSpan={3}
            disabled>
            <Tile.Content title='Tile Title'>
                <p>Tile Description</p>
            </Tile.Content>
        </Tile>
    );

    const mediaTile = (
        <Tile isButton>
            <Tile.Media className='green'>
                <Identifier color={3} glyph='home'
                    size='m' />
            </Tile.Media>
            <Tile.Content title='Tile Title'>
                <p>Tile Description</p>
            </Tile.Content>
        </Tile>
    );

    const actionTile = (
        <Tile>
            <Tile.Content title='Tile Title' />
            <Tile.Actions className='yellow'>
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
            </Tile.Actions>
        </Tile>
    );

    const mediaTileNoClass = (
        <Tile isButton>
            <Tile.Media>
                <Identifier color={3} glyph='home'
                    size='m' />
            </Tile.Media>
            <Tile.Content title='Tile Title'>
                <p>Tile Description</p>
            </Tile.Content>
        </Tile>
    );

    const actionTileNoClass = (
        <Tile>
            <Tile.Content title='Tile Title' />
            <Tile.Actions>
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
            </Tile.Actions>
        </Tile>
    );

    const productMediaTile = (
        <ProductTile className='pink' isButton>
            <ProductTile.Media image='https://techne.yaas.io/images/product-thumbnail-wide.png' />
            <ProductTile.Content title='Tile Title'>
                <p>Tile Description</p>
            </ProductTile.Content>
        </ProductTile>
    );

    const disabledProductMediaTile = (
        <ProductTile disabled>
            <ProductTile.Media
                className='blue'
                image='https://techne.yaas.io/images/product-thumbnail-wide.png' />
            <ProductTile.Content className='blue' title='Tile Title'>
                <p>Tile Description</p>
            </ProductTile.Content>
        </ProductTile>
    );

    const defaultTileGrid = (
        <TileGrid className='blue'>
            <Tile colorAccent={7} rowSpan={2}>
                <Tile.Content title='Tile Title'>
                    <p>Tile Description</p>
                </Tile.Content>
            </Tile>
        </TileGrid>
    );

    const tileGrid = (
        <TileGrid col={4}>
            <Tile colorAccent={7} rowSpan={2}>
                <Tile.Content title='Tile Title'>
                    <p>Tile Description</p>
                </Tile.Content>
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
            const element = mount(<Tile.Content data-sample='Sample' title='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the TileContent component\'s h2 element', () => {
            const element = mount(<Tile.Content title='Sample' titleProps={{ 'data-sample': 'Sample' }} />);

            expect(
                element.find('h2').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the TileMedia component', () => {
            const element = mount(<Tile.Media data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the TileActions component', () => {
            const element = mount(<Tile.Actions data-sample='Sample' />);

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
            const element = mount(<ProductTile.Content data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the ProductTileContent component\'s h2 element', () => {
            const element = mount(<ProductTile.Content titleProps={{ 'data-sample': 'Sample' }} />);

            expect(
                element.find('h2').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the ProductTileMedia component', () => {
            const element = mount(<ProductTile.Media data-sample='Sample' image='https://techne.yaas.io/images/product-thumbnail-wide.png' />);

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
