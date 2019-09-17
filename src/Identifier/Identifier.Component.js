import { Identifier } from '../';
import path from 'path';
import React from 'react';
import { ComponentPage, Example } from '../_playground';

export const IdentifierComponent = () => {
    return (
        <ComponentPage
            description='An **Identifier** is a visual presentation option around using an icon or user initials.'
            sourceModulePath={path.join(__dirname, './Identifier')}
            title='Identifier'>

            <Example
                centered
                title='Icon'>
                <Identifier glyph='washing-machine' size='xxs' />
                <Identifier glyph='washing-machine' size='xs' />
                <Identifier glyph='washing-machine' size='s' />
                <Identifier glyph='washing-machine' size='m' />
                <Identifier glyph='washing-machine' size='l' />
                <Identifier glyph='washing-machine' size='xl' />
                <Identifier glyph='washing-machine' size='xxl' />
            </Example>

            <Example
                centered
                title='Initials'>
                <Identifier label='Wendy Wallace' size='xxs'>WW</Identifier>
                <Identifier label='Wendy Wallace' size='xs'>WW</Identifier>
                <Identifier label='Wendy Wallace' size='s'>WW</Identifier>
                <Identifier label='Wendy Wallace' size='m'>WW</Identifier>
                <Identifier label='Wendy Wallace' size='l'>WW</Identifier>
                <Identifier label='Wendy Wallace' size='xl'>WW</Identifier>
                <Identifier label='Wendy Wallace' size='xxl'>WW</Identifier>
            </Example>

            <Example
                centered
                title='Circle'>
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
            </Example>

            <Example
                centered
                title='Background Image'>
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
            </Example>

            <Example
                centered
                title='Transparent'>
                <Identifier label='Wendy Wallace' modifier='transparent'
                    size='m'>WW</Identifier>
                <Identifier glyph='washing-machine' modifier='transparent'
                    size='l' />
            </Example>

            <Example
                centered
                title='Accent Colors'>
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
            </Example>
        </ComponentPage>
    );
};
