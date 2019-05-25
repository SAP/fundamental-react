import { mount } from 'enzyme';
import ProductTile from './ProductTile';
import React from 'react';
import renderer from 'react-test-renderer';

describe('<ProductTile />', () => {
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

    test('create ProductTile component', () => {
        let component = renderer.create(productMediaTile);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // disabled simple tile
        component = renderer.create(disabledProductMediaTile);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('className is correct', () => {
        const wrapper = mount(<ProductTile />);

        expect(wrapper.find('.fd-product-tile').length).toEqual(1);
        expect(wrapper.find('.fd-tile').length).toEqual(0);
    });

    describe('Prop spreading', () => {
        test('should allow props to be spread to the ProductTile component', () => {
            const element = mount(<ProductTile data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });
});
