import { mount } from 'enzyme';
import React from 'react';
import Tile from './Tile';

describe('<Tile.Content />', () => {
    describe('Prop spreading', () => {
        test('should allow props to be spread to the TileContent component', () => {
            const element = mount(<Tile.Content data-sample='Sample' title='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });
});
