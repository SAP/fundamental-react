/* eslint-disable react/no-multi-comp */
import Identifier from '../Identifier';
import React from 'react';

export default {
    title: 'Component API/Identifier',
    component: Identifier
};

export const primary = () => (<Identifier glyph='cart' size='m' />);

export const sizes = () => (
    <div className='fr-container'>
        <Identifier glyph='washing-machine' size='xs' />
        <Identifier glyph='washing-machine' size='s' />
        <Identifier glyph='washing-machine' size='m' />
        <Identifier glyph='washing-machine' size='l' />
        <Identifier glyph='washing-machine' size='xl' />
    </div>
);

export const initials = () => (
    <div className='fr-container'>
        <Identifier label='Wendy Wallace' size='xs'>WW</Identifier>
        <Identifier label='Wendy Wallace' size='s'>WW</Identifier>
        <Identifier label='Wendy Wallace' size='m'>WW</Identifier>
        <Identifier label='Wendy Wallace' size='l'>WW</Identifier>
        <Identifier label='Wendy Wallace' size='xl'>WW</Identifier>
    </div>
);

export const circle = () => (
    <div className='fr-container'>
        <Identifier circle glyph='washing-machine'
            size='xs' />
        <Identifier circle glyph='washing-machine'
            size='s' />
        <Identifier circle glyph='washing-machine'
            size='m' />
        <Identifier circle glyph='washing-machine'
            size='l' />
        <Identifier circle glyph='washing-machine'
            size='xl' />
    </div>
);

export const backgroundImage = () => (
    <div className='fr-container'>
        <Identifier backgroundImageUrl='./assets/nature.jpg' circle
            size='xs' />
        <Identifier backgroundImageUrl='./assets/nature.jpg' circle
            size='s' />
        <Identifier backgroundImageUrl='./assets/nature.jpg' circle
            size='m' />
        <Identifier backgroundImageUrl='./assets/nature.jpg' circle
            size='l' />
        <Identifier backgroundImageUrl='./assets/nature.jpg' circle
            size='xl' />
    </div>
);

export const transparent = () => (
    <div className='fr-container'>
        <Identifier label='Wendy Wallace'
            size='m' transparent>WW</Identifier>
        <Identifier glyph='washing-machine'
            size='l' transparent />
    </div>
);

export const tile = () => (
    <div className='fr-container'>
        <Identifier circle glyph='washing-machine'
            size='xs' tile />
        <Identifier circle glyph='washing-machine'
            size='s' tile />
        <Identifier circle glyph='washing-machine'
            size='m' tile />
        <Identifier circle glyph='washing-machine'
            size='l' tile />
        <Identifier circle glyph='washing-machine'
            size='xl' tile />
    </div>
);

export const placeholder = () => (
    <div className='fr-container'>
        <Identifier circle glyph='washing-machine'
            placeholder size='xs' />
        <Identifier circle glyph='washing-machine'
            placeholder size='s' />
        <Identifier circle glyph='washing-machine'
            placeholder size='m' />
        <Identifier circle glyph='washing-machine'
            placeholder size='l' />
        <Identifier circle glyph='washing-machine'
            placeholder size='xl' />
    </div>
);

export const zoom = () => (
    <div className='fr-container'>
        <Identifier circle glyph='washing-machine'
            size='xs' zoom />
        <Identifier circle glyph='washing-machine'
            size='s' zoom />
        <Identifier circle glyph='washing-machine'
            size='m' zoom />
        <Identifier circle glyph='washing-machine'
            size='l' zoom />
        <Identifier circle glyph='washing-machine'
            size='xl' zoom />
    </div>
);

export const border = () => (
    <div className='fr-container'>
        <Identifier border glyph='washing-machine'
            size='xs' transparent />
        <Identifier border glyph='washing-machine'
            size='s' transparent />
        <Identifier border circle
            glyph='washing-machine' size='m'
            transparent />
        <Identifier border circle
            glyph='washing-machine' size='l'
            transparent />
        <Identifier border circle
            glyph='washing-machine' size='xl'
            transparent />
    </div>
);


export const accentColors = () => (
    <div className='fr-container'>
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
