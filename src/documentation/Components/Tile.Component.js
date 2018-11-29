import React from 'react';
import {
    Tile,
    TileContent,
    TileMedia,
    TileActions,
    ProductTile,
    ProductTileContent,
    ProductTileMedia,
    TileGrid,
    Image,
    Identifier
} from '../../components';
import { Popover, Button, Menu, MenuList, MenuItem } from '../../components';
import { DocsTile, DocsText, Separator, Header, Description, Import, Properties, Playground } from '../';

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

<Tile isButton={true}>
    <TileMedia>
        <Image size="l" type="circle" photo="https://placeimg.com/400/400/nature"></Image>
    </TileMedia>
    <TileContent title="Tile Title">
        <p>Tile Description</p>
    </TileContent>
</Tile>

<Tile isButton={true}>
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

    const productTileCode = `<ProductTile isButton={true}>
    <ProductTileMedia image="https://techne.yaas.io/images/product-thumbnail-wide.png"></ProductTileMedia>
    <ProductTileContent title="Tile Title">
        <p>Tile Description</p>
    </ProductTileContent>
</ProductTile>

<ProductTile disabled={true}>
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
    <Tile isButton={true}>
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
                module="Tile, TileContent, TileMedia, TileActions, ProductTile, ProductTileContent, ProductTileMedia, TileGrid"
                path="/fundamental-react/src/components/"
            />

            <Separator />

            <Properties
                type="Inputs"
                properties={[
                    { name: 'title', description: 'string - the title of the Tile Content' },
                    { name: 'isButton', description: 'bool - when set to true, renders the tile as a button.' },
                    { name: 'disabled', description: 'bool - when set to true, disables the tile.' },
                    { name: 'image', description: 'string (required) - url of the image used in Product Tile.' },
                    { name: 'rowSpan', description: 'number - the number of rows the tile covers.' },
                    { name: 'columnSpan', description: 'number - the number of columns the tile covers.' },
                    {
                        name: 'colorAccent',
                        description: 'number - applies a background color. Options include numbers from 1 to 9.'
                    }
                ]}
            />

            <Separator />

            <h2>Simple Tile</h2>
            <DocsTile>
                <Tile>
                    <TileContent title="Tile Title">
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
                        <Image size="m" photo="https://placeimg.com/400/400/nature" />
                    </TileMedia>
                    <TileContent title="Tile Title" />
                </Tile>
                <br />
                <Tile isButton={true}>
                    <TileMedia>
                        <Image size="l" type="circle" photo="https://placeimg.com/400/400/nature" />
                    </TileMedia>
                    <TileContent title="Tile Title">
                        <p>Tile Description</p>
                    </TileContent>
                </Tile>
                <br />
                <Tile isButton={true}>
                    <TileMedia>
                        <Identifier size="m" glyph="home" color={3} />
                    </TileMedia>
                    <TileContent title="Tile Title">
                        <p>Tile Description</p>
                    </TileContent>
                </Tile>
            </DocsTile>
            <DocsText>{mediaTileCode}</DocsText>

            <Separator />

            <h2>Actions Tile</h2>
            <DocsTile>
                <Tile>
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
                </Tile>
            </DocsTile>
            <DocsText>{actionsTileCode}</DocsText>

            <Separator />

            <h2>Product Tile</h2>
            <DocsTile>
                <div>
                    <ProductTile isButton={true}>
                        <ProductTileMedia image="https://techne.yaas.io/images/product-thumbnail-wide.png" />
                        <ProductTileContent title="Tile Title">
                            <p>Tile Description</p>
                        </ProductTileContent>
                    </ProductTile>

                    <br />

                    <ProductTile disabled={true}>
                        <ProductTileMedia image="https://techne.yaas.io/images/product-thumbnail-wide.png" />
                        <ProductTileContent title="Tile Title">
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
                    <Tile rowSpan={2} colorAccent={7}>
                        <TileContent title="Tile Title">
                            <p>Tile Description</p>
                        </TileContent>
                    </Tile>
                    <Tile>
                        <TileMedia>
                            <Image size="l" type="circle" photo="https://placeimg.com/400/400/nature" />
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
                    <Tile isButton={true}>
                        <TileMedia>
                            <Identifier size="l" glyph="home" color={3} />
                        </TileMedia>
                        <TileContent title="Tile Title" />
                    </Tile>
                    <Tile>
                        <TileContent title="Tile Title">
                            <p>Tile Description</p>
                        </TileContent>
                    </Tile>
                    <Tile columnSpan={2} colorAccent={4}>
                        <TileContent title="Tile Title">
                            <p>Tile Description</p>
                        </TileContent>
                    </Tile>
                </TileGrid>
            </DocsTile>
            <DocsText>{tileGridCode}</DocsText>

            <Separator />

            <Playground
                component="tile"
                schema={[
                    {
                        attribute: 'type',
                        typeOfAttribute: 'component',
                        enum: ['simple', 'media', 'product']
                    },
                    {
                        attribute: 'title',
                        typeOfAttribute: 'string'
                    },
                    {
                        attribute: 'children',
                        typeOfAttribute: 'string'
                    }
                ]}
            >
                <Tile>
                    <TileContent title="Tile Title">
                        <p>Tile Description</p>
                    </TileContent>
                </Tile>
            </Playground>
        </div>
    );
};
