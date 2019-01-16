import React from 'react';
import { Button, Identifier, Image, Menu, MenuItem, MenuList, Popover, ProductTile, ProductTileContent, ProductTileMedia, Tile, TileActions, TileContent, TileGrid, TileMedia } from '../';
import { Description, DocsText, DocsTile, Header, Import, Playground, Properties, Separator } from '../_playground';

export const TileComponent = () => {
    const simpleTileCode = `<Tile>
    <TileContent title="Tile Title">
        <p>Tile Description</p>
    </TileContent>
</Tile>`;
    const mediaTileCode = `<Tile>
    <TileMedia>
        <Image size="m" photo="https://placeimg.com/400/400/nature"></Image>
    </TileMedia>
    <TileContent title="Tile Title">
    </TileContent>
</Tile>

<Tile role='button'>
    <TileMedia>
        <Image size="l" type="circle" photo="https://placeimg.com/400/400/nature"></Image>
    </TileMedia>
    <TileContent title="Tile Title">
        <p>Tile Description</p>
    </TileContent>
</Tile>

<Tile role='button'>
    <TileMedia>
        <Identifier size="m" glyph="home" color={3}></Identifier>
    </TileMedia>
    <TileContent title="Tile Title">
        <p>Tile Description</p>
    </TileContent>
</Tile>`;

    const actionsTileCode = `<Tile>
    <TileContent title="Tile Title" />
    <TileActions>
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
    </TileActions>
</Tile>`;

    const productTileCode = `<ProductTile role='button'>
    <ProductTileMedia image="https://techne.yaas.io/images/product-thumbnail-wide.png"></ProductTileMedia>
    <ProductTileContent title="Tile Title">
        <p>Tile Description</p>
    </ProductTileContent>
</ProductTile>

<ProductTile disabled>
    <ProductTileMedia image="https://techne.yaas.io/images/product-thumbnail-wide.png"></ProductTileMedia>
    <ProductTileContent title="Tile Title">
        <p>Tile Description</p>
    </ProductTileContent>
</ProductTile>`;
    const tileGridCode = `<TileGrid col={4}>
    <Tile rowSpan={2} colorAccent={7}>
        <TileContent title="Tile Title">
            <p>Tile Description</p>
        </TileContent>
    </Tile>
    <Tile>
        <TileMedia>
            <Image size="l" type="circle" photo="https://placeimg.com/400/400/nature"></Image>
        </TileMedia>
        <TileContent title="Tile Title">
            <p>Tile Description</p>
        </TileContent>
    </Tile>
    <Tile>
        <TileContent title="Tile Title">
            <p>Tile Description</p>
        </TileContent>
    </Tile>
    <Tile role='button'>
        <TileMedia>
            <Identifier size="l" glyph="home" color={3}></Identifier>
        </TileMedia>
        <TileContent title="Tile Title">
        </TileContent>
    </Tile>
    <Tile >
        <TileContent title="Tile Title">
            <p>Tile Description</p>
        </TileContent>
    </Tile>
    <Tile columnSpan={2} colorAccent={4}>
        <TileContent title="Tile Title">
            <p>Tile Description</p>
        </TileContent>
    </Tile>
</TileGrid>`;

    return (
        <div>
            <Header>Tile and Tile Grid</Header>
            <Description>
                A Tile component can be used to display information in a simple container format. A collection of tile
                can be displayed using <code>fd-tile-grid</code>{' '}
            </Description>
            <Import
                module='Tile, TileContent, TileMedia, TileActions, ProductTile, ProductTileContent, ProductTileMedia, TileGrid'
                path='/fundamental-react/src/' />

            <Separator />

            <Properties
                properties={[
                    { name: 'title', description: 'string - the title of the Tile Content' },
                    { name: 'disabled', description: 'bool - when set to true, disables the tile.' },
                    { name: 'image', description: 'string (required) - url of the image used in Product Tile.' },
                    { name: 'rowSpan', description: 'number - the number of rows the tile covers.' },
                    { name: 'columnSpan', description: 'number - the number of columns the tile covers.' },
                    {
                        name: 'colorAccent',
                        description: 'number - applies a background color. Options include numbers from 1 to 9.'
                    }
                ]}
                type='Inputs' />

            <Separator />

            <h2>Simple Tile</h2>
            <DocsTile>
                <Tile>
                    <TileContent title='Tile Title'>
                        <p>Tile Description</p>
                    </TileContent>
                </Tile>
            </DocsTile>
            <DocsText>{simpleTileCode}</DocsText>

            <Separator />

            <h2>Media Tile</h2>
            <DocsTile>
                <Tile>
                    <TileMedia>
                        <Image photo='https://placeimg.com/400/400/nature' size='m' />
                    </TileMedia>
                    <TileContent title='Tile Title' />
                </Tile>
                <br />
                <Tile role='button'>
                    <TileMedia>
                        <Image photo='https://placeimg.com/400/400/nature' size='l'
                            type='circle' />
                    </TileMedia>
                    <TileContent title='Tile Title'>
                        <p>Tile Description</p>
                    </TileContent>
                </Tile>
                <br />
                <Tile role='button'>
                    <TileMedia>
                        <Identifier color={3} glyph='home'
                            size='m' />
                    </TileMedia>
                    <TileContent title='Tile Title'>
                        <p>Tile Description</p>
                    </TileContent>
                </Tile>
            </DocsTile>
            <DocsText>{mediaTileCode}</DocsText>

            <Separator />

            <h2>Actions Tile</h2>
            <DocsTile>
                <Tile>
                    <TileContent title='Tile Title' />
                    <TileActions>
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
                    </TileActions>
                </Tile>
            </DocsTile>
            <DocsText>{actionsTileCode}</DocsText>

            <Separator />

            <h2>Product Tile</h2>
            <DocsTile>
                <div>
                    <ProductTile role='button'>
                        <ProductTileMedia image='https://techne.yaas.io/images/product-thumbnail-wide.png' />
                        <ProductTileContent title='Tile Title'>
                            <p>Tile Description</p>
                        </ProductTileContent>
                    </ProductTile>

                    <br />

                    <ProductTile disabled>
                        <ProductTileMedia image='https://techne.yaas.io/images/product-thumbnail-wide.png' />
                        <ProductTileContent title='Tile Title'>
                            <p>Tile Description</p>
                        </ProductTileContent>
                    </ProductTile>
                </div>
            </DocsTile>
            <DocsText>{productTileCode}</DocsText>

            <br />
            <Separator />

            <h2>Tile Grid Component</h2>
            <Description>A Tile Gird is a collection of Tiles components in a gird layout.</Description>
            <DocsTile>
                <TileGrid col={4}>
                    <Tile colorAccent={7} rowSpan={2}>
                        <TileContent title='Tile Title'>
                            <p>Tile Description</p>
                        </TileContent>
                    </Tile>
                    <Tile>
                        <TileMedia>
                            <Image photo='https://placeimg.com/400/400/nature' size='l'
                                type='circle' />
                        </TileMedia>
                        <TileContent title='Tile Title'>
                            <p>Tile Description</p>
                        </TileContent>
                    </Tile>
                    <Tile>
                        <TileContent title='Tile Title'>
                            <p>Tile Description</p>
                        </TileContent>
                    </Tile>
                    <Tile role='button'>
                        <TileMedia>
                            <Identifier color={3} glyph='home'
                                size='l' />
                        </TileMedia>
                        <TileContent title='Tile Title' />
                    </Tile>
                    <Tile>
                        <TileContent title='Tile Title'>
                            <p>Tile Description</p>
                        </TileContent>
                    </Tile>
                    <Tile colorAccent={4} columnSpan={2}>
                        <TileContent title='Tile Title'>
                            <p>Tile Description</p>
                        </TileContent>
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
                    <TileContent title='Tile Title'>
                        <p>Tile Description</p>
                    </TileContent>
                </Tile>
            </Playground>
        </div>
    );
};
