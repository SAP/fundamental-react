import { Identifier } from '../';
import { listOfIcons } from '../utils/listOfIcons';
import path from 'path';
import React from 'react';
import { ComponentPage, Example, Playground, Separator } from '../_playground';

export const IdentifierComponent = () => {
    return (
        <ComponentPage
            description='An **Identifier** is a visual presentation option around using an icon or user initials.'
            sourceModulePath={path.join(__dirname, './Identifier')}
            title='Identifier'>

            <Example
                centered
                title='Icon'>
                <div className='fd-doc__margin--identifier'>
                    <Identifier glyph='washing-machine' size='xxs' />
                    <Identifier glyph='washing-machine' size='xs' />
                    <Identifier glyph='washing-machine' size='s' />
                    <Identifier glyph='washing-machine' size='m' />
                    <Identifier glyph='washing-machine' size='l' />
                    <Identifier glyph='washing-machine' size='xl' />
                    <Identifier glyph='washing-machine' size='xxl' />
                </div>
            </Example>

            <Example
                centered
                title='Initials'>
                <div className='fd-doc__margin--identifier'>
                    <Identifier label='Wendy Wallace' size='xxs'>WW</Identifier>
                    <Identifier label='Wendy Wallace' size='xs'>WW</Identifier>
                    <Identifier label='Wendy Wallace' size='s'>WW</Identifier>
                    <Identifier label='Wendy Wallace' size='m'>WW</Identifier>
                    <Identifier label='Wendy Wallace' size='l'>WW</Identifier>
                    <Identifier label='Wendy Wallace' size='xl'>WW</Identifier>
                    <Identifier label='Wendy Wallace' size='xxl'>WW</Identifier>
                </div>
            </Example>

            <Example
                centered
                title='Circle'>
                <div className='fd-doc__margin--identifier'>
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
            </Example>

            <Example
                centered
                title='Background Image'>
                <div className='fd-doc__margin--identifier'>
                    <Identifier backgroundImageUrl='https://placeimg.com/400/400/nature' modifier='circle'
                        size='xxs' />
                    <Identifier backgroundImageUrl='https://placeimg.com/400/400/nature' modifier='circle'
                        size='xs' />
                    <Identifier backgroundImageUrl='https://placeimg.com/400/400/nature' modifier='circle'
                        size='s' />
                    <Identifier backgroundImageUrl='https://placeimg.com/400/400/nature' modifier='circle'
                        size='m' />
                    <Identifier backgroundImageUrl='https://placeimg.com/400/400/nature' modifier='circle'
                        size='l' />
                    <Identifier backgroundImageUrl='https://placeimg.com/400/400/nature' modifier='circle'
                        size='xl' />
                    <Identifier backgroundImageUrl='https://placeimg.com/400/400/nature' modifier='circle'
                        size='xxl' />
                </div>
            </Example>

            <Example
                centered
                title='Transparent'>
                <div className='fd-doc__margin--identifier'>
                    <Identifier label='Wendy Wallace' modifier='transparent'
                        size='m'>WW</Identifier>
                    <Identifier glyph='washing-machine' modifier='transparent'
                        size='l' />
                </div>
            </Example>

            <Example
                centered
                title='Accent Colors'>
                <div className='fd-doc__margin--identifier'>
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
            </Example>

            <Separator />

            <Playground component='identifier' schema={[
                {
                    attribute: 'size',
                    typeOfAttribute: 'string',
                    'enum': ['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl']
                },
                {
                    attribute: 'glyph',
                    typeOfAttribute: 'string',
                    'enum': listOfIcons
                },
                {
                    attribute: 'color',
                    typeOfAttribute: 'number',
                    'enum': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
                },
                {
                    attribute: 'children',
                    typeOfAttribute: 'string'
                },
                {
                    attribute: 'modifier',
                    typeOfAttribute: 'string',
                    'enum': ['circle', 'transparent']
                }]}>
                <Identifier color={1} glyph='money-bills'
                    label='Wendy Wallace' modifier='circle'
                    size='s' />
            </Playground>

        </ComponentPage>
    );
};
