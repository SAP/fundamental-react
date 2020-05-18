/* eslint-disable react/no-multi-comp */
import Image from '../Image';
import React from 'react';

export default {
    title: 'Component API/Image',
    component: Image
};

export const primary = () => (
    <Image photo='https://content.fortune.com/wp-content/uploads/2019/07/hippocorn.jpg' />
);

export const sizes = () => (
    <div className='docs-container'>
        <Image photo='./assets/nature.jpg' size='s' />
        <Image photo='./assets/nature.jpg' size='m' />
        <Image photo='./assets/nature.jpg' size='l' />
    </div>
);

export const shapes = () => (
    <div className='docs-container'>
        <Image photo='./assets/nature.jpg' size='s'
            type='circle' />
        <Image photo='./assets/nature.jpg' size='m'
            type='circle' />
        <Image photo='./assets/nature.jpg' size='l'
            type='circle' />
    </div>
);
