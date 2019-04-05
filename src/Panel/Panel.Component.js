import path from 'path';
import React from 'react';
import { Button, Image, Menu, Panel, PanelGrid, Popover, Tile, Token } from '../';
import { ComponentPage, Example } from '../_playground';

export const PanelComponent = () => {
    return (
        <ComponentPage
            sourceModulePath={path.join(__dirname, './Panel')}
            title='Panel'>

            <Example
                title='Single Panel'>
                <div className='fd-doc__margin--panel'>
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
                                            <Menu.Item url='/'>Option 1</Menu.Item>
                                            <Menu.Item url='/'>Option 2</Menu.Item>
                                            <Menu.Item url='/'>Option 3</Menu.Item>
                                            <Menu.Item url='/'>Option 4</Menu.Item>
                                        </Menu.List>
                                    </Menu>
                                }
                                control={<Button>Color</Button>}
                                noArrow />
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
                                control={<Button>Size</Button>}
                                noArrow />
                        </Panel.Filters>
                        <Panel.Body>
                            <div>Panel Body</div>
                            <br />
                            <Tile>
                                <Tile.Media>
                                    <Image photo='https://placeimg.com/400/400/nature' size='l'
                                        type='circle' />
                                </Tile.Media>
                                <Tile.Content title='Tile Title'>
                                    <p>Tile Description</p>
                                </Tile.Content>
                            </Tile>
                            <br />
                            <Token>Bibendum</Token>
                            <Token>Lorem</Token>
                            <Token>Dolor</Token>
                            <Token>Filter</Token>
                        </Panel.Body>
                        <Panel.Footer>Panel Footer</Panel.Footer>
                    </Panel>
                </div>
            </Example>

            <Example
                title='Default Panel Grid (3 columns)'>
                <PanelGrid>
                    <Panel>
                        <Panel.Body>Panel</Panel.Body>
                    </Panel>
                    <Panel>
                        <Panel.Body>Panel</Panel.Body>
                    </Panel>
                    <Panel>
                        <Panel.Body>Panel</Panel.Body>
                    </Panel>
                    <Panel>
                        <Panel.Body>Panel</Panel.Body>
                    </Panel>
                    <Panel>
                        <Panel.Body>Panel</Panel.Body>
                    </Panel>
                </PanelGrid>
            </Example>

            <Example
                title='Panel Grid with no margins between the panels'>
                <PanelGrid nogap>
                    <Panel>
                        <Panel.Body>Panel</Panel.Body>
                    </Panel>
                    <Panel>
                        <Panel.Body>Panel</Panel.Body>
                    </Panel>
                    <Panel>
                        <Panel.Body>Panel</Panel.Body>
                    </Panel>
                    <Panel>
                        <Panel.Body>Panel</Panel.Body>
                    </Panel>
                    <Panel>
                        <Panel.Body>Panel</Panel.Body>
                    </Panel>
                </PanelGrid>
            </Example>

            <Example
                title='Panel Grid with 2 columns'>
                <PanelGrid cols={2}>
                    <Panel>
                        <Panel.Body>Panel</Panel.Body>
                    </Panel>
                    <Panel>
                        <Panel.Body>Panel</Panel.Body>
                    </Panel>
                    <Panel>
                        <Panel.Body>Panel</Panel.Body>
                    </Panel>
                    <Panel>
                        <Panel.Body>Panel</Panel.Body>
                    </Panel>
                </PanelGrid>
            </Example>

            <Example
                title='Panel Grid with 4 columns'>
                <PanelGrid cols={4}>
                    <Panel>
                        <Panel.Body>Panel</Panel.Body>
                    </Panel>
                    <Panel>
                        <Panel.Body>Panel</Panel.Body>
                    </Panel>
                    <Panel>
                        <Panel.Body>Panel</Panel.Body>
                    </Panel>
                    <Panel>
                        <Panel.Body>Panel</Panel.Body>
                    </Panel>
                    <Panel>
                        <Panel.Body>Panel</Panel.Body>
                    </Panel>
                    <Panel>
                        <Panel.Body>Panel</Panel.Body>
                    </Panel>
                    <Panel>
                        <Panel.Body>Panel</Panel.Body>
                    </Panel>
                    <Panel>
                        <Panel.Body>Panel</Panel.Body>
                    </Panel>
                </PanelGrid>
            </Example>

            <Example
                title='Panel Grid with column span'>
                <PanelGrid cols={6}>
                    <Panel colSpan={2}>
                        <Panel.Body>Panel with colSpan=2</Panel.Body>
                    </Panel>
                    <Panel>
                        <Panel.Body>Panel</Panel.Body>
                    </Panel>
                    <Panel>
                        <Panel.Body>Panel</Panel.Body>
                    </Panel>
                    <Panel>
                        <Panel.Body>Panel</Panel.Body>
                    </Panel>
                    <Panel>
                        <Panel.Body>Panel</Panel.Body>
                    </Panel>

                    <Panel colSpan={3}>
                        <Panel.Body>Panel with colSpan=3</Panel.Body>
                    </Panel>
                    <Panel>
                        <Panel.Body>Panel</Panel.Body>
                    </Panel>
                    <Panel>
                        <Panel.Body>Panel</Panel.Body>
                    </Panel>
                    <Panel>
                        <Panel.Body>Panel</Panel.Body>
                    </Panel>

                    <Panel colSpan={4}>
                        <Panel.Body>Panel with colSpan=4</Panel.Body>
                    </Panel>
                    <Panel>
                        <Panel.Body>Panel</Panel.Body>
                    </Panel>
                    <Panel>
                        <Panel.Body>Panel</Panel.Body>
                    </Panel>

                    <Panel colSpan={5}>
                        <Panel.Body>Panel with colSpan=5</Panel.Body>
                    </Panel>
                    <Panel>
                        <Panel.Body>Panel</Panel.Body>
                    </Panel>

                    <Panel colSpan={6}>
                        <Panel.Body>Panel with colSpan=6</Panel.Body>
                    </Panel>
                </PanelGrid>
            </Example>

        </ComponentPage>
    );
};
