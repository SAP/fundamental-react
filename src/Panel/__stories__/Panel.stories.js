/* eslint-disable react/no-multi-comp */
import Button from '../../Button/Button';
import Image from '../../Image/Image';
import Menu from '../../Menu/Menu';
import Panel from '../Panel';
import PanelActions from '../_PanelActions';
import PanelBody from '../_PanelBody';
import PanelFilters from '../_PanelFilters';
import PanelFooter from '../_PanelFooter';
import PanelHead from '../_PanelHead';
import PanelHeader from '../_PanelHeader';
import Popover from '../../Popover/Popover';
import React from 'react';
import Tile from '../../Tile/Tile';

export default {
    title: 'Component API/Panel',
    component: Panel,
    subcomponents: { PanelActions, PanelBody, PanelFilters, PanelFooter, PanelHead, PanelHeader }
};


export const primary = () => (
    <Panel>
        <Panel.Header>
            <Panel.Head description='Panel Description' title={'Panel Header with Actions'} />
            <Panel.Actions>
                <div>Panel actions</div>
            </Panel.Actions>
        </Panel.Header>
        <Panel.Filters>
            <div>Panel Filters</div>
        </Panel.Filters>
        <Panel.Body>
            <div>Panel Body</div>
        </Panel.Body>
        <Panel.Footer>Panel Footer</Panel.Footer>
    </Panel>
);

export const singlePanel = () => (
    <Panel>
        <Panel.Header>
            <Panel.Head description='Panel Description' title={'Panel Header with Actions'} />
            <Panel.Actions>
                <Button compact glyph='add'>
                    Add New Button
                </Button>
            </Panel.Actions>
        </Panel.Header>
        <Panel.Filters>
            <div>Panel Filters</div>
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
        </Panel.Filters>
        <Panel.Body>
            <div>Panel Body</div>
            <br />
            <Tile>
                <Tile.Media>
                    <Image photo='./assets/nature.jpg' size='l'
                        type='circle' />
                </Tile.Media>
                <Tile.Content title='Tile Title'>
                    <p>Tile Description</p>
                </Tile.Content>
            </Tile>
        </Panel.Body>
        <Panel.Footer>Panel Footer</Panel.Footer>
    </Panel>
);
