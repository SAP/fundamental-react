import { InfoLabel } from '..';
import path from 'path';
import React from 'react';
import { ComponentPage, Example } from '../_playground';

export const InfoLabelComponent = () => {
    return (
        <ComponentPage
            description='Info Label is a small non-interactive numeric or text-based control. Its primary use is to add user-defined characteristic to an object.'
            sourceModulePath={path.join(__dirname, './InfoLabel')}
            title='InfoLabel'>

            <Example
                spaceBetween
                title='Default InfoLabel'>
                <>
                    <InfoLabel>Default</InfoLabel>
                    <InfoLabel glyph='key'>Icon</InfoLabel>
                    <InfoLabel glyph='upload-to-cloud' />
                    <InfoLabel numeric>1</InfoLabel>
                    <InfoLabel numeric>10000</InfoLabel>
                </>
            </Example>
            <Example
                spaceBetween
                title='Colors InfoLabel'>
                <>
                    <InfoLabel color={1}>Default</InfoLabel>
                    <InfoLabel color={2}>Default</InfoLabel>
                    <InfoLabel color={3}>Default</InfoLabel>
                    <InfoLabel color={4}>Default</InfoLabel>
                    <InfoLabel color={5}>Default</InfoLabel>
                    <InfoLabel color={6}>Default</InfoLabel>
                    <InfoLabel color={7}>Default</InfoLabel>
                    <InfoLabel color={8}>Default</InfoLabel>
                    <InfoLabel color={9}>Default</InfoLabel>
                    <InfoLabel color={10}>Default</InfoLabel>
                </>
            </Example>
        </ComponentPage>
    );
};
