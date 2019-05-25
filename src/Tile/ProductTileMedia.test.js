import { mount } from 'enzyme';
import ProductTile from './ProductTile';
import React from 'react';
import renderer from 'react-test-renderer';

describe('<ProductTile.Media />', () => {
    const productTileMedia = (
        <ProductTile.Media image='https://techne.yaas.io/images/product-thumbnail-wide.png' />
    );

    test('create ProductTile.Media component', () => {
        let component = renderer.create(productTileMedia);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('className is correct', () => {
        const wrapper = mount(<ProductTile.Media image='www.image.com' />);

        expect(wrapper.find('.fd-product-tile__media').length).toEqual(1);
        expect(wrapper.find('.fd-tile__media').length).toEqual(0);

    });

    describe('Prop spreading', () => {
        test('should allow props to be spread to the ProductTileMedia component', () => {
            const element = mount(<ProductTile.Media data-sample='Sample' image='https://techne.yaas.io/images/product-thumbnail-wide.png' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });
});
