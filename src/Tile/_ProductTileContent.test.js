import { mount } from 'enzyme';
import ProductTile from './ProductTile';
import React from 'react';
import renderer from 'react-test-renderer';

describe('<ProductTileContent />', () => {
    const productTileContent = (
        <ProductTile.Content className='blue' title='Tile Title'>
            <p>Tile Description</p>
        </ProductTile.Content>
    );

    test('create ProductTile.Content component', () => {
        let component = renderer.create(productTileContent);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();

    });

    describe('Prop spreading', () => {

        test('should allow props to be spread to the ProductTileContent component', () => {
            const element = mount(<ProductTile.Content data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the ProductTileContent component\'s heading element', () => {
            const element = mount(<ProductTile.Content titleProps={{ 'data-sample': 'Sample' }} />);

            expect(
                element.find('.fd-product-tile__title').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });
});
