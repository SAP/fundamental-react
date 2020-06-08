import { mount } from 'enzyme';
import React from 'react';
import Tile from './Tile';

describe('<Tile.Footer />', () => {

    describe('Prop spreading', () => {
        test('should allow props to be spread to the TileFooter component', () => {
            const element = mount(<Tile.Footer data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });
});
