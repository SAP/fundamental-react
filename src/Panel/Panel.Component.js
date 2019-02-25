import path from 'path';
import React from 'react';
import { Button, Image, Menu, MenuItem, MenuList, Panel, PanelGrid, Popover, Tile, TileContent, TileMedia, Token } from '../';
import { DocsText, DocsTile, Header, Import, Properties, Separator } from '../_playground';

export const PanelComponent = () => {
    const panelExampleCode = `<Panel>
    <Panel.Header>
        <Panel.Head title={'Panel Header with Actions'} description="Panel Description" />
        <Panel.Actions>
            <Button compact glyph="add">
                Add New Button
            </Button>
        </Panel.Actions>
    </Panel.Header>
    <Panel.Filters>
        <div>Panel Filters</div>
        <br /> 
        <Popover
            control={<Button>Color</Button>}
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
            noArrow
        />
        <Popover
            control={<Button>Size</Button>}
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
            noArrow
        />
    </Panel.Filters>
    <Panel.Body>
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
    </Panel.Body>
    <Panel.Footer>Panel Footer</Panel.Footer>
</Panel>`;

    const panelGrid3Code = `<PanelGrid>
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
</PanelGrid>`;

    const panelNogapCode = `<PanelGrid nogap={true}>
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
</PanelGrid>`;

    const panelGrid2ColsCode = `<PanelGrid cols={2}>
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
</PanelGrid>`;

    const panelGrid4ColsCode = `<PanelGrid cols={4}>
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
</PanelGrid>`;

    const panelGridColSpanCode = `<PanelGrid cols={6}>
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
                                        <MenuList>
                                            <MenuItem url='/'>Option 1</MenuItem>
                                            <MenuItem url='/'>Option 2</MenuItem>
                                            <MenuItem url='/'>Option 3</MenuItem>
                                            <MenuItem url='/'>Option 4</MenuItem>
                                        </MenuList>
                                    </Menu>
                                }
                                control={<Button>Color</Button>}
                                noArrow />
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
                                control={<Button>Size</Button>}
                                noArrow />
                        </Panel.Filters>
                        <Panel.Body>
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
                        </Panel.Body>
                        <Panel.Footer>Panel Footer</Panel.Footer>
                    </Panel>
                </div>
            </DocsTile>
            <DocsText>{panelExampleCode}</DocsText>

            <Separator />

            <h2>Default Panel Grid (3 columns)</h2>
            <DocsTile>
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
            </DocsTile>
            <DocsText>{panelGrid3Code}</DocsText>

            <Separator />

            <h2>Panel Grid with no margins between the panels</h2>
            <DocsTile>
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
            </DocsTile>
            <DocsText>{panelNogapCode}</DocsText>

            <Separator />

            <h2>Panel Grid with 2 columns</h2>
            <DocsTile>
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
            </DocsTile>
            <DocsText>{panelGrid2ColsCode}</DocsText>

            <Separator />

            <h2>Panel Grid with 4 columns</h2>
            <DocsTile>
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
            </DocsTile>
            <DocsText>{panelGrid4ColsCode}</DocsText>

            <Separator />

            <h2>Panel Grid with column span</h2>
            <DocsTile>
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
            </DocsTile>
            <DocsText>{panelGridColSpanCode}</DocsText>
        </div>
    );
};
