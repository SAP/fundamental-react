import { Button } from '../';
import Menu from '../Menu/Menu';
import { mount } from 'enzyme';
import Popover from '../Popover/Popover';
import React from 'react';
import renderer from 'react-test-renderer';
import Tile from './Tile';

describe('<TileAction />', () => {
    const tileActions = (
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
    );

    test('create tile component', () => {
        // simple tile
        let component = renderer.create(tileActions);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    describe('Prop spreading', () => {
        test('should allow props to be spread to the TileActions component', () => {
            const element = mount(<Tile.Actions data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });
});
