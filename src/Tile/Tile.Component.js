import path from 'path';
import React from 'react';
import { Button, Identifier, Image, Menu, MenuItem, MenuList, Popover, ProductTile, Tile, TileGrid } from '../';
import { Description, DocsText, DocsTile, Header, Import, Playground, Properties, Separator } from '../_playground';

export const TileComponent = () => {
    const simpleTileCode = `<Tile>
    <Tile.Content title="Tile Title">
        <p>Tile Description</p>
    </Tile.Content>
</Tile>`;
    const mediaTileCode = `<Tile>
    <Tile.Media>
        <Image size="m" photo="https://placeimg.com/400/400/nature"></Image>
    </Tile.Media>
    <Tile.Content title="Tile Title">
    </Tile.Content>
</Tile>

<Tile role='button'>
    <Tile.Media>
        <Image size="l" type="circle" photo="https://placeimg.com/400/400/nature"></Image>
    </Tile.Media>
    <Tile.Content title="Tile Title">
        <p>Tile Description</p>
    </Tile.Content>
</Tile>

<Tile role='button'>
    <Tile.Media>
        <Identifier size="m" glyph="home" color={3}></Identifier>
    </Tile.Media>
    <Tile.Content title="Tile Title">
        <p>Tile Description</p>
    </Tile.Content>
</Tile>`;

    const actionsTileCode = `<Tile>
    <Tile.Content title="Tile Title" />
    <Tile.Actions>
        <Popover
            control={<Button option="light" glyph="vertical-grip" />}
            body={
                <Menu>
                    <MenuList>
                        <MenuItem url="/">Option 1</MenuItem>
                        <MenuItem url="/">Option 2</MenuItem>
                        <MenuItem url="/">Option 3</MenuItem>
                        <MenuItem url="/">Option 4</MenuItem>
                    </MenuList>
                </Menu>
            }
        />
    </Tile.Actions>
</Tile>`;

    const productTileCode = `<ProductTile role='button'>
    <ProductTile.Media image="https://techne.yaas.io/images/product-thumbnail-wide.png" />
    <ProductTile.Content title="Tile Title">
        <p>Tile Description</p>
    </ProductTile.Content>
</ProductTile>

<ProductTile disabled>
    <ProductTile.Media image="https://techne.yaas.io/images/product-thumbnail-wide.png" />
    <ProductTile.Content title="Tile Title">
        <p>Tile Description</p>
    </ProductTile.Content>
</ProductTile>`;
    const tileGridCode = `<TileGrid col={4}>
    <Tile rowSpan={2} colorAccent={7}>
        <Tile.Content title="Tile Title">
            <p>Tile Description</p>
        </Tile.Content>
    </Tile>
    <Tile>
        <Tile.Media>
            <Image size="l" type="circle" photo="https://placeimg.com/400/400/nature"></Image>
        </Tile.Media>
        <Tile.Content title="Tile Title">
            <p>Tile Description</p>
        </Tile.Content>
    </Tile>
    <Tile>
        <Tile.Content title="Tile Title">
            <p>Tile Description</p>
        </Tile.Content>
    </Tile>
    <Tile role='button'>
        <Tile.Media>
            <Identifier size="l" glyph="home" color={3}></Identifier>
        </Tile.Media>
        <Tile.Content title="Tile Title">
        </Tile.Content>
    </Tile>
    <Tile >
        <Tile.Content title="Tile Title">
            <p>Tile Description</p>
        </Tile.Content>
    </Tile>
    <Tile columnSpan={2} colorAccent={4}>
        <Tile.Content title="Tile Title">
            <p>Tile Description</p>
        </Tile.Content>
    </Tile>
</TileGrid>`;

    return (
        <div>
            <Header>Tile and Tile Grid</Header>
            <Description>
                A **Tile** can be used to display information in a simple container format.
                A collection of tiles can be displayed using **TileGrid**.
            </Description>
            <Import sourceModulePath={path.join(__dirname, './Tile')} />

            <Separator />

            <Properties sourceModulePath={path.join(__dirname, './Tile')} />

            <Separator />

            <h2>Simple Tile</h2>
            <DocsTile>
                <Tile>
                    <Tile.Content title='Tile Title'>
                        <p>Tile Description</p>
                    </Tile.Content>
                </Tile>
            </DocsTile>
            <DocsText>{simpleTileCode}</DocsText>

            <Separator />

            <h2>Media Tile</h2>
            <DocsTile>
                <Tile>
                    <Tile.Media>
                        <Image photo='https://placeimg.com/400/400/nature' size='m' />
                    </Tile.Media>
                    <Tile.Content title='Tile Title' />
                </Tile>
                <br />
                <Tile role='button'>
                    <Tile.Media>
                        <Image photo='https://placeimg.com/400/400/nature' size='l'
                            type='circle' />
                    </Tile.Media>
                    <Tile.Content title='Tile Title'>
                        <p>Tile Description</p>
                    </Tile.Content>
                </Tile>
                <br />
                <Tile role='button'>
                    <Tile.Media>
                        <Identifier color={3} glyph='home'
                            size='m' />
                    </Tile.Media>
                    <Tile.Content title='Tile Title'>
                        <p>Tile Description</p>
                    </Tile.Content>
                </Tile>
            </DocsTile>
            <DocsText>{mediaTileCode}</DocsText>

            <Separator />

            <h2>Actions Tile</h2>
            <DocsTile>
                <Tile>
                    <Tile.Content title='Tile Title' />
                    <Tile.Actions>
                        <Popover
                            body={
                                <Menu>
                                    <MenuList>
                                        <MenuItem url='/'>Option 1</MenuItem>
                                        <MenuItem url='/'>Option 2</MenuItem>
                                        <MenuItem url='/'>Option 3</MenuItem>
                                        <MenuItem url='/'>Option 4</MenuItem>
                                    </MenuList>
                                </Menu>
                            }
                            control={<Button glyph='vertical-grip' option='light' />} />
                    </Tile.Actions>
                </Tile>
            </DocsTile>
            <DocsText>{actionsTileCode}</DocsText>

            <Separator />

            <h2>Product Tile</h2>
            <DocsTile>
                <div>
                    <ProductTile role='button'>
                        <ProductTile.Media image='https://techne.yaas.io/images/product-thumbnail-wide.png' />
                        <ProductTile.Content title='Tile Title'>
                            <p>Tile Description</p>
                        </ProductTile.Content>
                    </ProductTile>

                    <br />

                    <ProductTile disabled>
                        <ProductTile.Media image='https://techne.yaas.io/images/product-thumbnail-wide.png' />
                        <ProductTile.Content title='Tile Title'>
                            <p>Tile Description</p>
                        </ProductTile.Content>
                    </ProductTile>
                </div>
            </DocsTile>
            <DocsText>{productTileCode}</DocsText>

            <br />
            <Separator />

            <h2>Tile Grid Component</h2>
            <Description>A **Tile Grid** is a collection of **Tiles** in a grid layout.</Description>
            <DocsTile>
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
                    <Tile role='button'>
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
            </DocsTile>
            <DocsText>{tileGridCode}</DocsText>

            <Separator />

            <Playground
                component='tile'
                schema={[
                    {
                        attribute: 'type',
                        typeOfAttribute: 'component',
                        'enum': ['simple', 'media', 'product']
                    },
                    {
                        attribute: 'title',
                        typeOfAttribute: 'string'
                    },
                    {
                        attribute: 'children',
                        typeOfAttribute: 'string'
                    }
                ]}>
                <Tile>
                    <Tile.Content title='Tile Title'>
                        <p>Tile Description</p>
                    </Tile.Content>
                </Tile>
            </Playground>
        </div>
    );
};
