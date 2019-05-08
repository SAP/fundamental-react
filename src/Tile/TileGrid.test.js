import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import Tile from './Tile';
import TileGrid from './TileGrid';

describe('<TileGrid />', () => {
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

    test('create tileGrid component', () => {
        // default tile grid
        let component = renderer.create(defaultTileGrid);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // tile grid
        component = renderer.create(tileGrid);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });


    describe('Prop spreading', () => {
        test('should allow props to be spread to the TileGrid component', () => {
            const element = mount(<TileGrid data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });
});
