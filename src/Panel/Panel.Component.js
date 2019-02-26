import path from 'path';
import React from 'react';
import { Button, Image, Menu, Panel, PanelActions, PanelBody, PanelFilters, PanelFooter, PanelGrid, PanelHead, PanelHeader, Popover, Tile, TileContent, TileMedia, Token } from '../';
import { DocsText, DocsTile, Header, Import, Properties, Separator } from '../_playground';

export const PanelComponent = () => {
    const panelExampleCode = `<Panel>
    <PanelHeader>
        <PanelHead title={'Panel Header with Actions'} description="Panel Description" />
        <PanelActions>
            <Button compact glyph="add">
                Add New Button
            </Button>
        </PanelActions>
    </PanelHeader>
    <PanelFilters>
        <div>Panel Filters</div>
        <br /> 
        <Popover
            control={<Button>Color</Button>}
            body={
                <Menu>
                    <Menu.List>
                        <Menu.Item url="/">Option 1</Menu.Item>
                        <Menu.Item url="/">Option 2</Menu.Item>
                        <Menu.Item url="/">Option 3</Menu.Item>
                        <Menu.Item url="/">Option 4</Menu.Item>
                    </Menu.List>
                </Menu>
            }
            noArrow
        />
        <Popover
            control={<Button>Size</Button>}
            body={
                <Menu>
                    <Menu.List>
                        <Menu.Item url="/">Option 1</Menu.Item>
                        <Menu.Item url="/">Option 2</Menu.Item>
                        <Menu.Item url="/">Option 3</Menu.Item>
                        <Menu.Item url="/">Option 4</Menu.Item>
                    </Menu.List>
                </Menu>
            }
            noArrow
        />
    </PanelFilters>
    <PanelBody>
    <div>Panel Body</div>     
    <br />               
        <Tile>
            <TileMedia>
                <Image size="l" type="circle" photo="https://placeimg.com/400/400/nature" />
            </TileMedia>
            <TileContent title="Tile Title">
                <p>Tile Description</p>
            </TileContent>
        </Tile>
        <br />
        <Token>Bibendum</Token>
        <Token>Lorem</Token>
        <Token>Dolor</Token>
        <Token>Filter</Token>
    </PanelBody>
    <PanelFooter>Panel Footer</PanelFooter>
</Panel>`;

    const panelGrid3Code = `<PanelGrid>
    <Panel>
        <PanelBody>Panel</PanelBody>
    </Panel>
    <Panel>
        <PanelBody>Panel</PanelBody>
    </Panel>
    <Panel>
        <PanelBody>Panel</PanelBody>
    </Panel>
    <Panel>
        <PanelBody>Panel</PanelBody>
    </Panel>
    <Panel>
        <PanelBody>Panel</PanelBody>
    </Panel>
</PanelGrid>`;

    const panelNogapCode = `<PanelGrid nogap={true}>
    <Panel>
        <PanelBody>Panel</PanelBody>
    </Panel>
    <Panel>
        <PanelBody>Panel</PanelBody>
    </Panel>
    <Panel>
        <PanelBody>Panel</PanelBody>
    </Panel>
    <Panel>
        <PanelBody>Panel</PanelBody>
    </Panel>
    <Panel>
        <PanelBody>Panel</PanelBody>
    </Panel>
</PanelGrid>`;

    const panelGrid2ColsCode = `<PanelGrid cols={2}>
    <Panel>
        <PanelBody>Panel</PanelBody>
    </Panel>
    <Panel>
        <PanelBody>Panel</PanelBody>
    </Panel>
    <Panel>
        <PanelBody>Panel</PanelBody>
    </Panel>
    <Panel>
        <PanelBody>Panel</PanelBody>
    </Panel>
</PanelGrid>`;

    const panelGrid4ColsCode = `<PanelGrid cols={4}>
    <Panel>
        <PanelBody>Panel</PanelBody>
    </Panel>
    <Panel>
        <PanelBody>Panel</PanelBody>
    </Panel>
    <Panel>
        <PanelBody>Panel</PanelBody>
    </Panel>
    <Panel>
        <PanelBody>Panel</PanelBody>
    </Panel>
    <Panel>
        <PanelBody>Panel</PanelBody>
    </Panel>
    <Panel>
        <PanelBody>Panel</PanelBody>
    </Panel>
    <Panel>
        <PanelBody>Panel</PanelBody>
    </Panel>
    <Panel>
        <PanelBody>Panel</PanelBody>
    </Panel>
</PanelGrid>`;

    const panelGridColSpanCode = `<PanelGrid cols={6}>
    <Panel colSpan={2}>
        <PanelBody>Panel with colSpan=2</PanelBody>
    </Panel>
    <Panel>
        <PanelBody>Panel</PanelBody>
    </Panel>
    <Panel>
        <PanelBody>Panel</PanelBody>
    </Panel>
    <Panel>
        <PanelBody>Panel</PanelBody>
    </Panel>
    <Panel>
        <PanelBody>Panel</PanelBody>
    </Panel>

    <Panel colSpan={3}>
        <PanelBody>Panel with colSpan=3</PanelBody>
    </Panel>
    <Panel>
        <PanelBody>Panel</PanelBody>
    </Panel>
    <Panel>
        <PanelBody>Panel</PanelBody>
    </Panel>
    <Panel>
        <PanelBody>Panel</PanelBody>
    </Panel>

    <Panel colSpan={4}>
        <PanelBody>Panel with colSpan=4</PanelBody>
    </Panel>
    <Panel>
        <PanelBody>Panel</PanelBody>
    </Panel>
    <Panel>
        <PanelBody>Panel</PanelBody>
    </Panel>

    <Panel colSpan={5}>
        <PanelBody>Panel with colSpan=5</PanelBody>
    </Panel>
    <Panel>
        <PanelBody>Panel</PanelBody>
    </Panel>
    
    <Panel colSpan={6}>
        <PanelBody>Panel with colSpan=6</PanelBody>
    </Panel>
</PanelGrid>`;

    return (
        <div>
            <Header>Panel</Header>
            <Import sourceModulePath={path.join(__dirname, './Panel')} />

            <Separator />

            <Properties sourceModulePath={path.join(__dirname, './Panel')} />

            <Separator />

            <DocsTile>
                <div className='fd-doc__margin--panel'>
                    <Panel>
                        <PanelHeader>
                            <PanelHead description='Panel Description' title={'Panel Header with Actions'} />
                            <PanelActions>
                                <Button compact glyph='add'>
                                    Add New Button
                                </Button>
                            </PanelActions>
                        </PanelHeader>
                        <PanelFilters>
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
                        </PanelFilters>
                        <PanelBody>
                            <div>Panel Body</div>
                            <br />
                            <Tile>
                                <TileMedia>
                                    <Image photo='https://placeimg.com/400/400/nature' size='l'
                                        type='circle' />
                                </TileMedia>
                                <TileContent title='Tile Title'>
                                    <p>Tile Description</p>
                                </TileContent>
                            </Tile>
                            <br />
                            <Token>Bibendum</Token>
                            <Token>Lorem</Token>
                            <Token>Dolor</Token>
                            <Token>Filter</Token>
                        </PanelBody>
                        <PanelFooter>Panel Footer</PanelFooter>
                    </Panel>
                </div>
            </DocsTile>
            <DocsText>{panelExampleCode}</DocsText>

            <Separator />

            <h2>Default Panel Grid (3 columns)</h2>
            <DocsTile>
                <PanelGrid>
                    <Panel>
                        <PanelBody>Panel</PanelBody>
                    </Panel>
                    <Panel>
                        <PanelBody>Panel</PanelBody>
                    </Panel>
                    <Panel>
                        <PanelBody>Panel</PanelBody>
                    </Panel>
                    <Panel>
                        <PanelBody>Panel</PanelBody>
                    </Panel>
                    <Panel>
                        <PanelBody>Panel</PanelBody>
                    </Panel>
                </PanelGrid>
            </DocsTile>
            <DocsText>{panelGrid3Code}</DocsText>

            <Separator />

            <h2>Panel Grid with no margins between the panels</h2>
            <DocsTile>
                <PanelGrid nogap>
                    <Panel>
                        <PanelBody>Panel</PanelBody>
                    </Panel>
                    <Panel>
                        <PanelBody>Panel</PanelBody>
                    </Panel>
                    <Panel>
                        <PanelBody>Panel</PanelBody>
                    </Panel>
                    <Panel>
                        <PanelBody>Panel</PanelBody>
                    </Panel>
                    <Panel>
                        <PanelBody>Panel</PanelBody>
                    </Panel>
                </PanelGrid>
            </DocsTile>
            <DocsText>{panelNogapCode}</DocsText>

            <Separator />

            <h2>Panel Grid with 2 columns</h2>
            <DocsTile>
                <PanelGrid cols={2}>
                    <Panel>
                        <PanelBody>Panel</PanelBody>
                    </Panel>
                    <Panel>
                        <PanelBody>Panel</PanelBody>
                    </Panel>
                    <Panel>
                        <PanelBody>Panel</PanelBody>
                    </Panel>
                    <Panel>
                        <PanelBody>Panel</PanelBody>
                    </Panel>
                </PanelGrid>
            </DocsTile>
            <DocsText>{panelGrid2ColsCode}</DocsText>

            <Separator />

            <h2>Panel Grid with 4 columns</h2>
            <DocsTile>
                <PanelGrid cols={4}>
                    <Panel>
                        <PanelBody>Panel</PanelBody>
                    </Panel>
                    <Panel>
                        <PanelBody>Panel</PanelBody>
                    </Panel>
                    <Panel>
                        <PanelBody>Panel</PanelBody>
                    </Panel>
                    <Panel>
                        <PanelBody>Panel</PanelBody>
                    </Panel>
                    <Panel>
                        <PanelBody>Panel</PanelBody>
                    </Panel>
                    <Panel>
                        <PanelBody>Panel</PanelBody>
                    </Panel>
                    <Panel>
                        <PanelBody>Panel</PanelBody>
                    </Panel>
                    <Panel>
                        <PanelBody>Panel</PanelBody>
                    </Panel>
                </PanelGrid>
            </DocsTile>
            <DocsText>{panelGrid4ColsCode}</DocsText>

            <Separator />

            <h2>Panel Grid with column span</h2>
            <DocsTile>
                <PanelGrid cols={6}>
                    <Panel colSpan={2}>
                        <PanelBody>Panel with colSpan=2</PanelBody>
                    </Panel>
                    <Panel>
                        <PanelBody>Panel</PanelBody>
                    </Panel>
                    <Panel>
                        <PanelBody>Panel</PanelBody>
                    </Panel>
                    <Panel>
                        <PanelBody>Panel</PanelBody>
                    </Panel>
                    <Panel>
                        <PanelBody>Panel</PanelBody>
                    </Panel>

                    <Panel colSpan={3}>
                        <PanelBody>Panel with colSpan=3</PanelBody>
                    </Panel>
                    <Panel>
                        <PanelBody>Panel</PanelBody>
                    </Panel>
                    <Panel>
                        <PanelBody>Panel</PanelBody>
                    </Panel>
                    <Panel>
                        <PanelBody>Panel</PanelBody>
                    </Panel>

                    <Panel colSpan={4}>
                        <PanelBody>Panel with colSpan=4</PanelBody>
                    </Panel>
                    <Panel>
                        <PanelBody>Panel</PanelBody>
                    </Panel>
                    <Panel>
                        <PanelBody>Panel</PanelBody>
                    </Panel>

                    <Panel colSpan={5}>
                        <PanelBody>Panel with colSpan=5</PanelBody>
                    </Panel>
                    <Panel>
                        <PanelBody>Panel</PanelBody>
                    </Panel>

                    <Panel colSpan={6}>
                        <PanelBody>Panel with colSpan=6</PanelBody>
                    </Panel>
                </PanelGrid>
            </DocsTile>
            <DocsText>{panelGridColSpanCode}</DocsText>
        </div>
    );
};
