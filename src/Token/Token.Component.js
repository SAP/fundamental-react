import path from 'path';
import React from 'react';
import { Token } from '../';
import { ComponentPage, Example } from '../_playground';

export const TokenComponent = () => {
    const closeAction = (name) => alert(`close ${name}! You can work with the event itself using the callback.`);

    return (
        <ComponentPage
            descirption={`A **Token** is used to represent contextual information. It can be useful to show
                applied filters, selected values for a form field or object metadata.`}
            sourceModulePath={path.join(__dirname, './Token')}
            title='Token'>

            <Example
                centered
                title='Token'>
                <Token onClick={(e) => closeAction('Bibendum', e)}>Bibendum</Token>
                <Token onClick={(e) => closeAction('Lorem', e)}>Lorem</Token>
                <Token onClick={(e) => closeAction('Dolor', e)}>Dolor</Token>
                <Token onClick={(e) => closeAction('Filter', e)}>Filter</Token>
            </Example>

        </ComponentPage>
    );
};
