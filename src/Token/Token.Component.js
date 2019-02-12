import React from 'react';
import { Token } from './Token';
import { Description, DocsText, DocsTile, Header, Import, Properties, Separator } from '../_playground';

export const TokenComponent = () => {
    const tokenCode = `<Token>Bibendum</Token>
<Token>Lorem</Token>
<Token>Dolor</Token>
<Token>Filter</Token>`;

    const closeAction = (name) => alert(`close ${name}! You can work with the event itself using the callback.`);
    const tagsNames = ['Bibendum', 'Lorem', 'Dolor', 'Filter'];

    return (
        <div>

            <Header>Token</Header>
            <Description>
                A **Token** is used to represent contextual information. It can be useful to show
                applied filters, selected values for a form field or object metadata.
            </Description>
            <Import sourceModule={require('./Token')} />

            <Separator />

            <Properties sourceModule={require('./Token')} />

            <Separator />

            <DocsTile centered>
                <div className='fd-doc__margin--token'>
                    {
                        tagsNames.map((name) => {
                            return <Token clickHandler={(e) => closeAction(name, e)} key={name}>{name}</Token>;
                        })
                    }
                </div>
            </DocsTile>
            <DocsText>{tokenCode}</DocsText>
        </div>
    );
};
