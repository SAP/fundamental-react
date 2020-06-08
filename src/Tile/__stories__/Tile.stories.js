/* eslint-disable react/no-multi-comp */
import React from 'react';
import Tile from '../Tile';
import TileContent from '../_TileContent';
import TileFooter from '../_TileFooter';
import TileHeader from '../_TileHeader';

export default {
    title: 'Component API/Tile',
    component: Tile,
    subcomponents: { TileContent, TileFooter, TileHeader }
};


export const primary = () => (
    <div className='fddocs-container'>
        <Tile onClick={() => {}}>
            <Tile.Header subtitle='Tile Subtitle'>
                Tile Title
            </Tile.Header>
            <Tile.Content title='Tile Title'>
                <p>Tile Description</p>
            </Tile.Content>
            <Tile.Footer>
                Tile Footer
            </Tile.Footer>
        </Tile>
    </div>
);

export const subtitle = () => (
    <div className='fddocs-container'>
        <Tile onClick={() => {}}>
            <Tile.Header subtitle='Tile Subtitle'>
                Tile Title
            </Tile.Header>
            <Tile.Content title='Tile Title'>
                <p>Tile Description</p>
            </Tile.Content>
        </Tile>
    </div>
);

subtitle.parameters = {
    docs: {
        storyDescription: `Including a subtitle is optional.
It can have one line of text before it is truncated.`
    }
};

export const sizes = () => (
    <>
        <div className='fddocs-container'>
            <Tile onClick={() => {}} size='s'>
                <Tile.Header>
                    Tile Title
                </Tile.Header>
                <Tile.Content>
                    <p>Tile Description</p>
                </Tile.Content>
            </Tile>
            <Tile onClick={() => {}}>
                <Tile.Header>
                    Tile Title
                </Tile.Header>
                <Tile.Content>
                    <p>Tile Description</p>
                </Tile.Content>
            </Tile>
        </div>
        <div className='fddocs-container'>
            <Tile isDouble onClick={() => {}}
                size='s'>
                <Tile.Header>
                    Tile Title
                </Tile.Header>
                <Tile.Content>
                    <p>Tile Description</p>
                </Tile.Content>
            </Tile>
            <Tile isDouble onClick={() => {}}>
                <Tile.Header>
                    Tile Title
                </Tile.Header>
                <Tile.Content>
                    <p>Tile Description</p>
                </Tile.Content>
            </Tile>
        </div>
    </>
);

sizes.parameters = {
    docs: {
        storyDescription: `The large (default) tiles are designed for screens larger than 374px.
For smaller screens use size='s' prop. The generic tile control supports two tile dimensions
- 1×1 (default) and 2×1 (isDouble).`
    }
};

export const columns = () => (
    <div className='fddocs-container'>
        <Tile onClick={() => {}} size='s'>
            <Tile.Header>
                Tile Title
            </Tile.Header>
            <Tile.Content twoColumns>
                <div><p>Left side content</p></div>
                <div><p>Right side content</p></div>
            </Tile.Content>
        </Tile>
        <Tile isDouble onClick={() => {}}>
            <Tile.Header>
                Tile Title
            </Tile.Header>
            <Tile.Content twoColumns>
                <div><p>Left side content</p></div>
                <div><p>Right side content</p></div>
            </Tile.Content>
        </Tile>
    </div>
);

columns.parameters = {
    docs: {
        storyDescription: `Tile.Content can be split into two columns using the twoColumns prop.
Note: Any children must be wrapped in 2 top level div elements.`
    }
};
