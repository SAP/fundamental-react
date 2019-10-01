import { Button } from '../';
import Identifier from '../Identifier/Identifier';
import Menu from '../Menu/Menu';
import { mount } from 'enzyme';
import Popover from '../Popover/Popover';
import React from 'react';
import renderer from 'react-test-renderer';
import Tile from './Tile';

describe('<Tile />', () => {
    const simpleTile = (
        <Tile className='blue'>
            <Tile.Content className='red' title='Tile Title'>
                <p>Tile Description</p>
            </Tile.Content>
        </Tile>
    );

    const disabledSimpleTile = (
        <Tile backgroundColor={8} columnSpan={3}
            disabled>
            <Tile.Content title='Tile Title'>
                <p>Tile Description</p>
            </Tile.Content>
        </Tile>
    );

    const mediaTile = (
        <Tile>
            <Tile.Media className='green'>
                <Identifier color={3} glyph='home'
                    size='m' />
            </Tile.Media>
            <Tile.Content title='Tile Title'>
                <p>Tile Description</p>
            </Tile.Content>
        </Tile>
    );

    const actionTile = (
        <Tile>
            <Tile.Content title='Tile Title' />
            <Tile.Actions className='yellow'>
                <Popover
                    body={
                        <Menu>
                            <Menu.List>
                                <Menu.Item url='/'>Option 1</Menu.Item>
                                <Menu.Item url='/'>Option 2</Menu.Item>
                                <Menu.Item url='/'>Option 3</Menu.Item>
                                <Menu.Item url='/'>Option 4</Menu.Item>
                            </Menu.List>
                        </Menu>
                    }
                    control={<Button glyph='vertical-grip' type='standard' />} />
            </Tile.Actions>
        </Tile>
    );

    const mediaTileNoClass = (
        <Tile>
            <Tile.Media>
                <Identifier color={3} glyph='home'
                    size='m' />
            </Tile.Media>
            <Tile.Content title='Tile Title'>
                <p>Tile Description</p>
            </Tile.Content>
        </Tile>
    );

    const actionTileNoClass = (
        <Tile>
            <Tile.Content title='Tile Title' />
            <Tile.Actions>
                <Popover
                    body={
                        <Menu>
                            <Menu.List>
                                <Menu.Item url='/'>Option 1</Menu.Item>
                                <Menu.Item url='/'>Option 2</Menu.Item>
                                <Menu.Item url='/'>Option 3</Menu.Item>
                                <Menu.Item url='/'>Option 4</Menu.Item>
                            </Menu.List>
                        </Menu>
                    }
                    control={<Button glyph='vertical-grip' type='standard' />} />
            </Tile.Actions>
        </Tile>
    );

    const productTile = (
        <Tile backgroundImage='www.image.com' className='pink'
            productTile>
            <Tile.Media />
            <Tile.Content title='Tile Title'>
                <p>Tile Description</p>
            </Tile.Content>
        </Tile>
    );

    const disabledProductTile = (
        <Tile backgroundImage='www.image.com' disabled
            productTile>
            <Tile.Media
                className='blue' />
            <Tile.Content className='blue' title='Tile Title'>
                <p>Tile Description</p>
            </Tile.Content>
        </Tile>
    );

    test('create tile component', () => {
        // simple tile
        let component = renderer.create(simpleTile);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // disabled simple tile
        component = renderer.create(disabledSimpleTile);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // media tile
        component = renderer.create(mediaTile);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // action tile
        component = renderer.create(actionTile);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // media tile no class
        component = renderer.create(mediaTileNoClass);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // action tile no class
        component = renderer.create(actionTileNoClass);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // product tile
        component = renderer.create(productTile);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // disabled product tile
        component = renderer.create(disabledProductTile);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

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
            <Tile.Content title='Tile Title'>
            </Tile.Content>
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
});
