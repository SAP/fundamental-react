import { Image } from '../';
import path from 'path';
import React from 'react';
import { ComponentPage, Example, Playground, Separator } from '../_playground';

export const ImageComponent = () => {
    return (
        <ComponentPage
            description='Use an **Image** component to display images.'
            sourceModulePath={path.join(__dirname, './Image')}
            title='Image'>

            <Example
                centered
                title='Sizes'>
                <div className='fd-doc__margin--image'>
                    <Image photo='https://placeimg.com/400/400/nature' size='s' />
                    <Image photo='https://placeimg.com/400/400/nature' size='m' />
                    <Image photo='https://placeimg.com/400/400/nature' size='l' />
                </div>
            </Example>

            <Example
                centered
                title='Shapes'>
                <div className='fd-doc__margin--image'>
                    <Image photo='https://placeimg.com/400/400/nature' size='s'
                        type='circle' />
                    <Image photo='https://placeimg.com/400/400/nature' size='m'
                        type='circle' />
                    <Image photo='https://placeimg.com/400/400/nature' size='l'
                        type='circle' />
                </div>
            </Example>

            <Separator />

            <Playground
                component='image'
                schema={[
                    {
                        attribute: 'size',
                        typeOfAttribute: 'string',
                        'enum': ['s', 'm', 'l']
                    },
                    {
                        attribute: 'photo',
                        typeOfAttribute: 'string'
                    },
                    {
                        attribute: 'type',
                        typeOfAttribute: 'string',
                        'enum': ['', 'circle']
                    }
                ]}>
                <Image photo='https://placeimg.com/400/400/nature' size='s' />
            </Playground>
        </ComponentPage>
    );
};
