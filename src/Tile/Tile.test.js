import { mount } from 'enzyme';
import React from 'react';
import Tile from './Tile';

describe('<Tile />', () => {
    const handleClick = jest.fn();
    const activeTile = (
        <Tile active onClick={handleClick}>
            <Tile.Content title='Tile Title' />
            <Tile.Actions className='tile-actions' />
        </Tile>
    );

    describe('Prop spreading', () => {
        test('should allow props to be spread to the Tile component', () => {
            const element = mount(<Tile data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });

    test('classnames are correct on product tile', () => {
        const wrapper = mount(<Tile productTile>
            <Tile.Content title='Tile Title' />
        </Tile>);

        expect(wrapper.find('.fd-product-tile').length).toEqual(1);
        expect(wrapper.find('.fd-product-tile__content').length).toEqual(1);
        expect(wrapper.find('.fd-tile').length).toEqual(0);
        expect(wrapper.find('.fd-tile__content').length).toEqual(0);
    });

    test('forwards the ref', () => {
        let ref;
        class Test extends React.Component {
            constructor(props) {
                super(props);
                ref = React.createRef();
            }
            render = () => <Tile ref={ref} />;
        }
        mount(<Test />);
        expect(ref.current.tagName).toEqual('DIV');
        expect(ref.current.className).toEqual('fd-tile');
    });

    test('onClick handler should be called on active tile', () => {
        const component = mount(activeTile);
        component
            .find('div.fd-tile')
            .simulate('click', { target: { text: '4' }, stopPropagation: () => {} });
        expect(handleClick).toHaveBeenCalled();
    });

    test('onClick handler should not be called on actions', () => {
        const component = mount(activeTile);
        const stopPropagationFn = jest.fn();
        component
            .find('.tile-actions')
            .at(1)
            .simulate('click', { target: { text: '4' }, stopPropagation: stopPropagationFn });
        expect(stopPropagationFn).toHaveBeenCalled();
    });

});
