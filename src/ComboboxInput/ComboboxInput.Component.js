import React from 'react';
import { } from '../';
import { DocsTile, DocsText, Separator, Header, Description, Import, Properties } from '..';
import {  } from '..';

export const ComboboxInputComponent = () => {
    const comboboxInputCode = ``;


    return (
        <div>
            <Header>Combobox Input</Header>
            
            <Import module="" path="/fundamental-react/src/" />

            <Separator />

            <Properties
                type="Inputs"
                properties={[
                    { name: '...', description: "... - ... ... ..." }
                ]}
            />

            <Separator />

            <h2>Combobox Input</h2>
            <DocsTile>
               
            </DocsTile>
            <DocsText>{comboboxInputCode}</DocsText>
            <Separator />

         
        </div>
    );
};
