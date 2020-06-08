import { mount } from 'enzyme';
import React from 'react';
import Tile from './Tile';

describe('<Tile.Header />', () => {
    test('should render', () => {
        const element = mount(<Tile.Header>Sample Title</Tile.Header>);

        expect(
            element
        ).toBeDefined();
    });
    test('should add additional classnames', () => {
        const element = mount(<Tile.Header className='test'>Sample Title</Tile.Header>);

        expect(
            element.getDOMNode().className
        ).toContain('test');
    });
    test('should add additional classes to the title component', () => {
        const element = mount(<Tile.Header titleProps={{ className: 'test' }}>Sample Title</Tile.Header>);

        expect(
            element.find('.fd-tile__title').getDOMNode().className
        ).toContain('test');
    });
    test('should add additional classes to the subtitle component', () => {
        const element = mount(<Tile.Header subtitle='Test subtitle' subtitleProps={{ className: 'test' }}>Sample Title</Tile.Header>);

        expect(
            element.find('.fd-tile__subtitle').getDOMNode().className
        ).toContain('test');
    });
    describe('Prop spreading', () => {
        test('should allow props to be spread to the TileHeader component', () => {
            const element = mount(<Tile.Header data-sample='Sample'>Sample Title</Tile.Header>);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
        test('should allow props to be spread to the title component', () => {
            const element = mount(<Tile.Header titleProps={{ 'data-sample': 'Sample' }}>Sample Title</Tile.Header>);

            expect(
                element.find('.fd-tile__title').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });
});
