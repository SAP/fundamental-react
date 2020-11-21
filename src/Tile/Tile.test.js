import { mount } from 'enzyme';
import React from 'react';
import Tile from './Tile';

describe('<Tile />', () => {
    const handleClick = jest.fn();
    const activeTile = (
        <Tile onClick={handleClick}>
            <Tile.Header>Test Header</Tile.Header>
            <Tile.Content>Test Content</Tile.Content>
        </Tile>
    );

    describe('Prop spreading', () => {
        test('should allow props to be spread to the Tile component', () => {
            const element = mount(<Tile data-sample='Sample' onClick={handleClick} />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });

    test('forwards the ref', () => {
        let ref;
        class Test extends React.Component {
            constructor(props) {
                super(props);
                ref = React.createRef();
            }
            render = () => <Tile onClick={handleClick} ref={ref} />;
        }
        mount(<Test />);
        expect(ref.current.tagName).toEqual('DIV');
        expect(ref.current.className).toEqual('fd-tile');
    });

    test('onClick handler should be tile', () => {
        const component = mount(activeTile);
        component
            .find('div.fd-tile')
            .simulate('click', { target: { text: '4' }, stopPropagation: () => {} });
        expect(handleClick).toHaveBeenCalled();
    });
});
