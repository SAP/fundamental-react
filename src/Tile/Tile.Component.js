import path from 'path';
import React from 'react';
import { Button, Identifier, Image, Menu, Popover, Tile, TileGrid } from '../';
import { ComponentPage, Example } from '../_playground';

export const TileComponent = () => {
    return (
        <ComponentPage
            description={`A **Tile** can be used to display information in a simple container format.
                A collection of tiles can be displayed using **TileGrid**.`}
            sourceModulePath={path.join(__dirname, './Tile')}
            title='Tile'>

            <Example
                title='Simple Tile'>
                <Tile>
                    <Tile.Content title='Tile Title'>
                        <p>Tile Description</p>
                    </Tile.Content>
                </Tile>
            </Example>

            <Example
                title='Media Tile'>
                <div>
                    <Tile>
                        <Tile.Media>
                            <Image photo='https://placeimg.com/400/400/nature' size='m' />
                        </Tile.Media>
                        <Tile.Content title='Tile Title' />
                    </Tile>
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
                    <Tile>
                        <Tile.Media>
                            <Identifier color={3} glyph='home'
                                size='m' />
                        </Tile.Media>
                        <Tile.Content title='Tile Title'>
                            <p>Tile Description</p>
                        </Tile.Content>
                    </Tile>
                </div>
            </Example>

            <Example
                title='Actions Tile'>
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
                            control={<Button glyph='vertical-grip' option='light' />}
                            placement='bottom-end' />
                    </Tile.Actions>
                </Tile>
            </Example>

            <Example
                title='Media with Actions Tile'>
                <Tile>
                    <Tile.Media>
                        <Image photo='https://placeimg.com/400/400/nature' size='l'
                            type='circle' />
                    </Tile.Media>
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
                            control={<Button glyph='vertical-grip' option='light' />}
                            placement='bottom-end' />
                    </Tile.Actions>
                </Tile>
            </Example>

            <Example
                title='Product Tile'>
                <Tile backgroundImage='https://placeimg.com/1600/400/nature' productTile>
                    <Tile.Content title='Tile Title'>
                        <p>Tile Description</p>
                    </Tile.Content>
                </Tile>
            </Example>

            <Example
                description='A **Tile Grid** is a collection of **Tiles** in a grid layout.'
                title='Tile Grid'>
                <TileGrid col={4}>
                    <Tile colorAccent={7} rowSpan={2}>
                        <Tile.Content title='Tile Title'>
                            <p>Tile Description</p>
                        </Tile.Content>
                    </Tile>
                    <Tile>
                        <Tile.Media>
                            <Image photo='https://placeimg.com/400/400/nature' size='l'
                                type='circle' />
                        </Tile.Media>
                        <Tile.Content title='Tile Title'>
                            <p>Tile Description</p>
                        </Tile.Content>
                    </Tile>
                    <Tile>
                        <Tile.Content title='Tile Title'>
                            <p>Tile Description</p>
                        </Tile.Content>
                    </Tile>
                    <Tile>
                        <Tile.Media>
                            <Identifier color={3} glyph='home'
                                size='l' />
                        </Tile.Media>
                        <Tile.Content title='Tile Title' />
                    </Tile>
                    <Tile>
                        <Tile.Content title='Tile Title'>
                            <p>Tile Description</p>
                        </Tile.Content>
                    </Tile>
                    <Tile colorAccent={4} columnSpan={2}>
                        <Tile.Content title='Tile Title'>
                            <p>Tile Description</p>
                        </Tile.Content>
                    </Tile>
                </TileGrid>
            </Example>
        </ComponentPage>
    );
};
