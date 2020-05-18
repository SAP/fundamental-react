/* eslint-disable react/no-multi-comp */
import Identifier from '../Identifier';
import React from 'react';

export default {
    title: 'Component API/Identifier',
    component: Identifier
};

export const primary = () => (<Identifier glyph='cart' />);

export const sizes = () => (
    <div className='fddocs-container'>
        <Identifier glyph='washing-machine' size='xxs' />
        <Identifier glyph='washing-machine' size='xs' />
        <Identifier glyph='washing-machine' size='s' />
        <Identifier glyph='washing-machine' size='m' />
        <Identifier glyph='washing-machine' size='l' />
        <Identifier glyph='washing-machine' size='xl' />
        <Identifier glyph='washing-machine' size='xxl' />
    </div>
);

export const initials = () => (
    <div className='fddocs-container'>
        <Identifier label='Wendy Wallace' size='xxs'>WW</Identifier>
        <Identifier label='Wendy Wallace' size='xs'>WW</Identifier>
        <Identifier label='Wendy Wallace' size='s'>WW</Identifier>
        <Identifier label='Wendy Wallace' size='m'>WW</Identifier>
        <Identifier label='Wendy Wallace' size='l'>WW</Identifier>
        <Identifier label='Wendy Wallace' size='xl'>WW</Identifier>
        <Identifier label='Wendy Wallace' size='xxl'>WW</Identifier>
    </div>
);

export const circle = () => (
    <div className='fddocs-container'>
        <Identifier glyph='washing-machine' modifier='circle'
            size='xxs' />
        <Identifier glyph='washing-machine' modifier='circle'
            size='xs' />
        <Identifier glyph='washing-machine' modifier='circle'
            size='s' />
        <Identifier glyph='washing-machine' modifier='circle'
            size='m' />
        <Identifier glyph='washing-machine' modifier='circle'
            size='l' />
        <Identifier glyph='washing-machine' modifier='circle'
            size='xl' />
        <Identifier glyph='washing-machine' modifier='circle'
            size='xxl' />
    </div>
);

export const backgroundImage = () => (
    <div className='fddocs-container'>
        <Identifier backgroundImageUrl='./assets/nature.jpg' modifier='circle'
            size='xxs' />
        <Identifier backgroundImageUrl='./assets/nature.jpg' modifier='circle'
            size='xs' />
        <Identifier backgroundImageUrl='./assets/nature.jpg' modifier='circle'
            size='s' />
        <Identifier backgroundImageUrl='./assets/nature.jpg' modifier='circle'
            size='m' />
        <Identifier backgroundImageUrl='./assets/nature.jpg' modifier='circle'
            size='l' />
        <Identifier backgroundImageUrl='./assets/nature.jpg' modifier='circle'
            size='xl' />
        <Identifier backgroundImageUrl='./assets/nature.jpg' modifier='circle'
            size='xxl' />
    </div>
);
export const transparent = () => (
    <div className='fddocs-container'>
        <Identifier label='Wendy Wallace' modifier='transparent'
            size='m'>WW</Identifier>
        <Identifier glyph='washing-machine' modifier='transparent'
            size='l' />
    </div>
);

export const accentColors = () => (
    <div className='fddocs-container'>
        <Identifier color={1} glyph='money-bills'
            size='m' />
        <Identifier color={2} glyph='money-bills'
            size='m' />
        <Identifier color={3} glyph='money-bills'
            size='m' />
        <Identifier color={4} glyph='money-bills'
            size='m' />
        <Identifier color={5} glyph='money-bills'
            size='m' />
        <Identifier color={6} glyph='money-bills'
            size='m' />
        <Identifier color={7} glyph='money-bills'
            size='m' />
        <Identifier color={8} glyph='money-bills'
            size='m' />
        <Identifier color={9} glyph='money-bills'
            size='m' />
    </div>
);
