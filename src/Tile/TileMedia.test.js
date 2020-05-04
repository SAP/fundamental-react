import { mount } from 'enzyme';
import React from 'react';
import Tile from './Tile';

describe('<Tile.Media />', () => {

    describe('Prop spreading', () => {
        test('should allow props to be spread to the TileMedia component', () => {
            const element = mount(<Tile.Media data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });
});
