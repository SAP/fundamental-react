/* eslint-disable react/no-multi-comp */
import Avatar from '../Avatar';
import React from 'react';

export default {
    title: 'Component API/Avatar',
    component: Avatar
};

export const primary = () => (<Avatar glyph='cart' size='m' />);

export const sizes = () => (
    <div className='fddocs-container'>
        <Avatar glyph='washing-machine' size='xs' />
        <Avatar glyph='washing-machine' size='s' />
        <Avatar glyph='washing-machine' size='m' />
        <Avatar glyph='washing-machine' size='l' />
        <Avatar glyph='washing-machine' size='xl' />
    </div>
);

export const initials = () => (
    <div className='fddocs-container'>
        <Avatar label='Wendy Wallace' size='xs'>WW</Avatar>
        <Avatar label='Wendy Wallace' size='s'>WW</Avatar>
        <Avatar label='Wendy Wallace' size='m'>WW</Avatar>
        <Avatar label='Wendy Wallace' size='l'>WW</Avatar>
        <Avatar label='Wendy Wallace' size='xl'>WW</Avatar>
    </div>
);

export const circle = () => (
    <div className='fddocs-container'>
        <Avatar circle glyph='washing-machine'
            size='xs' />
        <Avatar circle glyph='washing-machine'
            size='s' />
        <Avatar circle glyph='washing-machine'
            size='m' />
        <Avatar circle glyph='washing-machine'
            size='l' />
        <Avatar circle glyph='washing-machine'
            size='xl' />
    </div>
);

export const backgroundImage = () => (
    <div className='fddocs-container'>
        <Avatar backgroundImageUrl='./assets/nature.jpg' circle
            size='xs' />
        <Avatar backgroundImageUrl='./assets/nature.jpg' circle
            size='s' />
        <Avatar backgroundImageUrl='./assets/nature.jpg' circle
            size='m' />
        <Avatar backgroundImageUrl='./assets/nature.jpg' circle
            size='l' />
        <Avatar backgroundImageUrl='./assets/nature.jpg' circle
            size='xl' />
    </div>
);

export const transparent = () => (
    <div className='fddocs-container'>
        <Avatar label='Wendy Wallace'
            size='m' transparent>WW</Avatar>
        <Avatar glyph='washing-machine'
            size='l' transparent />
    </div>
);

export const tile = () => (
    <div className='fddocs-container'>
        <Avatar circle glyph='washing-machine'
            size='xs' tile />
        <Avatar circle glyph='washing-machine'
            size='s' tile />
        <Avatar circle glyph='washing-machine'
            size='m' tile />
        <Avatar circle glyph='washing-machine'
            size='l' tile />
        <Avatar circle glyph='washing-machine'
            size='xl' tile />
    </div>
);

export const placeholder = () => (
    <div className='fddocs-container'>
        <Avatar circle glyph='washing-machine'
            placeholder size='xs' />
        <Avatar circle glyph='washing-machine'
            placeholder size='s' />
        <Avatar circle glyph='washing-machine'
            placeholder size='m' />
        <Avatar circle glyph='washing-machine'
            placeholder size='l' />
        <Avatar circle glyph='washing-machine'
            placeholder size='xl' />
    </div>
);

export const zoom = () => (
    <div className='fddocs-container'>
        <Avatar circle glyph='washing-machine'
            size='xs' zoom
            zoomLabel='Edit' />
        <Avatar circle glyph='washing-machine'
            size='s' zoom
            zoomLabel='Edit' />
        <Avatar circle glyph='washing-machine'
            size='m' zoom
            zoomLabel='Edit' />
        <Avatar circle glyph='washing-machine'
            size='l' zoom
            zoomLabel='Edit' />
        <Avatar circle glyph='washing-machine'
            size='xl' zoom
            zoomLabel='Edit' />
    </div>
);

export const border = () => (
    <div className='fddocs-container'>
        <Avatar border glyph='washing-machine'
            size='xs' transparent />
        <Avatar border glyph='washing-machine'
            size='s' transparent />
        <Avatar border circle
            glyph='washing-machine' size='m'
            transparent />
        <Avatar border circle
            glyph='washing-machine' size='l'
            transparent />
        <Avatar border circle
            glyph='washing-machine' size='xl'
            transparent />
    </div>
);


export const accentColors = () => (
    <div className='fddocs-container'>
        <Avatar color={1} glyph='money-bills'
            size='m' />
        <Avatar color={2} glyph='money-bills'
            size='m' />
        <Avatar color={3} glyph='money-bills'
            size='m' />
        <Avatar color={4} glyph='money-bills'
            size='m' />
        <Avatar color={5} glyph='money-bills'
            size='m' />
        <Avatar color={6} glyph='money-bills'
            size='m' />
        <Avatar color={7} glyph='money-bills'
            size='m' />
        <Avatar color={8} glyph='money-bills'
            size='m' />
        <Avatar color={9} glyph='money-bills'
            size='m' />
    </div>
);

export const noStyles = () => (
    <Avatar
        cssNamespace='xxx'
        glyph='cart'
        size='m' />
);
noStyles.parameters = { docs: { disable: true } };
