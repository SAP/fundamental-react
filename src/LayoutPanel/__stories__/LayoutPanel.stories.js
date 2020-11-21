/* eslint-disable react/no-multi-comp */
import Avatar from '../../Avatar/Avatar';
import Button from '../../Button/Button';
import Column from '../../LayoutGrid/Column';
import Container from '../../LayoutGrid/Container';
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
import Row from '../../LayoutGrid/Row';
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
                <Tile.Header>
                    <Avatar backgroundImageUrl='./assets/nature.jpg'
                        circle size='xs' />
                    Tile Title
                </Tile.Header>
                <Tile.Content>
                    <p>Tile Description</p>
                </Tile.Content>
            </Tile>
        </LayoutPanel.Body>
        <LayoutPanel.Footer>LayoutPanel Footer</LayoutPanel.Footer>
    </LayoutPanel>
);



export const inAResponsiveLayoutGrid = () => (
    <Container>
        <Row>
            <Column span={8}>
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
                            <Tile.Header>
                                <Avatar backgroundImageUrl='./assets/nature.jpg'
                                    circle size='xs' />
                                Tile Title
                            </Tile.Header>
                            <Tile.Content>
                                <p>Tile Description</p>
                            </Tile.Content>
                        </Tile>
                    </LayoutPanel.Body>
                    <LayoutPanel.Footer>LayoutPanel Footer</LayoutPanel.Footer>
                </LayoutPanel>
            </Column>
            <Column span={4}>
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
                            <Tile.Header>
                                <Avatar backgroundImageUrl='./assets/nature.jpg'
                                    circle size='xs' />
                                Tile Title
                            </Tile.Header>
                            <Tile.Content>
                                <p>Tile Description</p>
                            </Tile.Content>
                        </Tile>
                    </LayoutPanel.Body>
                    <LayoutPanel.Footer>LayoutPanel Footer</LayoutPanel.Footer>
                </LayoutPanel>
            </Column>
        </Row>
        <Row>
            <Column span={3}>
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
                            <Tile.Header>
                                <Avatar backgroundImageUrl='./assets/nature.jpg'
                                    circle size='xs' />
                                Tile Title
                            </Tile.Header>
                            <Tile.Content>
                                <p>Tile Description</p>
                            </Tile.Content>
                        </Tile>
                    </LayoutPanel.Body>
                    <LayoutPanel.Footer>LayoutPanel Footer</LayoutPanel.Footer>
                </LayoutPanel>
            </Column>
            <Column span={9}>
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
                            <Tile.Header>
                                <Avatar backgroundImageUrl='./assets/nature.jpg'
                                    circle size='xs' />
                                Tile Title
                            </Tile.Header>
                            <Tile.Content>
                                <p>Tile Description</p>
                            </Tile.Content>
                        </Tile>
                    </LayoutPanel.Body>
                    <LayoutPanel.Footer>LayoutPanel Footer</LayoutPanel.Footer>
                </LayoutPanel>
            </Column>


        </Row>
    </Container>
);

export const noStyles = () => (
    <LayoutPanel cssNamespace='xxx'>
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
noStyles.parameters = { docs: { disable: true } };
