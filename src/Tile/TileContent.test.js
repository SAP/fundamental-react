import { mount } from 'enzyme';
import React from 'react';
import Tile from './Tile';

describe('<Tile.Content />', () => {

    describe('TileContent', () => {
        test('should allow customization of header level', () => {
            const element = mount(
                <Tile.Content headingLevel={2} title='Tile Title' /> );
            expect(
                element.find('.fd-tile__title').type()
            ).toBe('h2');
        });
    });

    describe('Prop spreading', () => {
        test('should allow props to be spread to the TileContent component', () => {
            const element = mount(<Tile.Content data-sample='Sample' title='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the TileContent component\'s header element', () => {
            const element = mount(<Tile.Content title='Sample' titleProps={{ 'data-sample': 'Sample' }} />);

            expect(
                element.find('.fd-tile__title').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });
});
