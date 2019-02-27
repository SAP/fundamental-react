import path from 'path';
import React from 'react';
import { Button, Image, Menu, Panel, PanelGrid, Popover, Tile, Token } from '../';
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
    </Panel.Filters>
    <Panel.Body>
    <div>Panel Body</div>     
    <br />               
        <Tile>
            <Tile.Media>
                <Image size="l" type="circle" photo="https://placeimg.com/400/400/nature" />
            </Tile.Media>
            <Tile.Content title="Tile Title">
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
