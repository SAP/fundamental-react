import Identifier from '../Identifier/Identifier';
import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import Tile from './Tile';

describe('<Tile.Media />', () => {
    const tileMedia = (
        <Tile.Media className='green'>
            <Identifier color={3} glyph='home'
                size='m' />
        </Tile.Media>
    );

    test('create tile media component', () => {
        let component = renderer.create(tileMedia);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    describe('Prop spreading', () => {
        test('should allow props to be spread to the TileMedia component', () => {
            const element = mount(<Tile.Media data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });
});
