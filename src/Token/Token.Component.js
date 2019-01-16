import React from 'react';
import { Token } from './Token';
import { Description, DocsText, DocsTile, Header, Import, Separator } from '../_playground';

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
            <Description>Tokens are used to represent contextualizing information. They can be useful to show applied filters, selected values for form field or object metadata.
            </Description>
            <Import module='Token' path='/fundamental-react/src/' />

            <Separator />

            <DocsTile centered>
                <div className='fd-doc__margin--token'>
                    {
                        tagsNames.map((name) => {
                            return <Token clickHandler={(e) => closeAction(name, e)}>{name}</Token>;
                        })
                    }
                </div>
            </DocsTile>
            <DocsText>{tokenCode}</DocsText>
        </div>
    );
};
