/* eslint-disable react/no-multi-comp */
import FormLabel from '../../Forms/FormLabel';
import InlineHelp from '../InlineHelp';
import React from 'react';

export default {
    title: 'Component API/InlineHelp',
    component: InlineHelp
};

export const primary = () => (<InlineHelp text='default' />);

export const withLabel = () => (
    <FormLabel isInlineHelp>
        Label Text
        <InlineHelp text='default' />
    </FormLabel>
);

export const bottomRight = () => (
    <InlineHelp placement='bottom-end' text='Lorem ipsum dolor sit amet, consectetur adipiscing.' />
);

export const bottomLeft = () => (
    <InlineHelp placement='bottom-start' text='Lorem ipsum dolor sit amet, consectetur adipiscing.' />
);

export const bottomCenter = () => (
    <InlineHelp placement='bottom' text='Lorem ipsum dolor sit amet, consectetur adipiscing.' />
);

export const right = () => (
    <InlineHelp placement='right' text='Lorem ipsum dolor sit amet, consectetur adipiscing.' />
);

export const left = () => (
    <InlineHelp placement='left' text='Lorem ipsum dolor sit amet, consectetur adipiscing.' />
);
