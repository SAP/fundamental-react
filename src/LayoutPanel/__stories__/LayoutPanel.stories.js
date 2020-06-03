/* eslint-disable react/no-multi-comp */
import Avatar from '../../Avatar/Avatar';
import Button from '../../Button/Button';
import LayoutPanel from '../LayoutPanel';
import LayoutPanelActions from '../_LayoutPanelActions';
import LayoutPanelBody from '../_LayoutPanelBody';
import LayoutPanelFilters from '../_LayoutPanelFilters';
import LayoutPanelFooter from '../_LayoutPanelFooter';
import LayoutPanelHead from '../_LayoutPanelHead';
import LayoutPanelHeader from '../_LayoutPanelHeader';
import Menu from '../../Menu/Menu';
import Popover from '../../Popover/Popover';
import React from 'react';
import Tile from '../../Tile/Tile';

export default {
    title: 'Component API/LayoutPanel',
    component: LayoutPanel,
    subcomponents: { LayoutPanelActions, LayoutPanelBody, LayoutPanelFilters, LayoutPanelFooter, LayoutPanelHead, LayoutPanelHeader }
};


export const primary = () => (
    <LayoutPanel>
        <LayoutPanel.Header>
            <LayoutPanel.Head description='LayoutPanel Description' title={'LayoutPanel Header with Actions'} />
            <LayoutPanel.Actions>
                <div>LayoutPanel actions</div>
            </LayoutPanel.Actions>
        </LayoutPanel.Header>
        <LayoutPanel.Filters>
            <div>LayoutPanel Filters</div>
        </LayoutPanel.Filters>
        <LayoutPanel.Body>
            <div>LayoutPanel Body</div>
        </LayoutPanel.Body>
        <LayoutPanel.Footer>LayoutPanel Footer</LayoutPanel.Footer>
    </LayoutPanel>
);

export const singleLayoutPanel = () => (
    <LayoutPanel>
        <LayoutPanel.Header>
            <LayoutPanel.Head description='LayoutPanel Description' title={'LayoutPanel Header with Actions'} />
            <LayoutPanel.Actions>
                <Button compact glyph='add'>
                    Add New Button
                </Button>
            </LayoutPanel.Actions>
        </LayoutPanel.Header>
        <LayoutPanel.Filters>
            <div>LayoutPanel Filters</div>
            <br />
            <Popover
                body={
                    <Menu>
                        <Menu.List>
                            <Menu.Item url='#'>Option 1</Menu.Item>
                            <Menu.Item url='#'>Option 2</Menu.Item>
                            <Menu.Item url='#'>Option 3</Menu.Item>
                            <Menu.Item url='#'>Option 4</Menu.Item>
                        </Menu.List>
                    </Menu>
                }
                control={<Button>Color</Button>}
                noArrow />
            <Popover
                body={
                    <Menu>
                        <Menu.List>
                            <Menu.Item url='#'>Option 1</Menu.Item>
                            <Menu.Item url='#'>Option 2</Menu.Item>
                            <Menu.Item url='#'>Option 3</Menu.Item>
                            <Menu.Item url='#'>Option 4</Menu.Item>
                        </Menu.List>
                    </Menu>
                }
                control={<Button>Size</Button>}
                noArrow />
        </LayoutPanel.Filters>
        <LayoutPanel.Body>
            <div>LayoutPanel Body</div>
            <br />
            <Tile>
                <Tile.Media>
                    <Avatar backgroundImageUrl='./assets/nature.jpg'
                        circle size='l' />
                </Tile.Media>
                <Tile.Content title='Tile Title'>
                    <p>Tile Description</p>
                </Tile.Content>
            </Tile>
        </LayoutPanel.Body>
        <LayoutPanel.Footer>LayoutPanel Footer</LayoutPanel.Footer>
    </LayoutPanel>
);
