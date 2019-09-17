import { Image } from '../';
import path from 'path';
import React from 'react';
import { ComponentPage, Example } from '../_playground';

export const ImageComponent = () => {
    return (
        <ComponentPage
            description='Use an **Image** component to display images.'
            sourceModulePath={path.join(__dirname, './Image')}
            title='Image'>

            <Example
                centered
                title='Sizes'>
                <Image photo='https://placeimg.com/400/400/nature' size='s' />
                <Image photo='https://placeimg.com/400/400/nature' size='m' />
                <Image photo='https://placeimg.com/400/400/nature' size='l' />
            </Example>

            <Example
                centered
                title='Shapes'>
                <Image photo='https://placeimg.com/400/400/nature' size='s'
                    type='circle' />
                <Image photo='https://placeimg.com/400/400/nature' size='m'
                    type='circle' />
                <Image photo='https://placeimg.com/400/400/nature' size='l'
                    type='circle' />
            </Example>
        </ComponentPage>
    );
};
