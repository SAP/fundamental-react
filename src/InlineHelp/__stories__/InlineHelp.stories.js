/* eslint-disable react/no-multi-comp */
import InlineHelp from '../InlineHelp';
import React from 'react';

export default {
    title: 'Component API/InlineHelp',
    component: InlineHelp
};

export const primary = () => (<InlineHelp text='default' />);

export const bottomEnd = () => (
    <InlineHelp placement='bottom-end' text='Lorem ipsum dolor sit amet, consectetur adipiscing.' />
);

export const bottomStart = () => (
    <InlineHelp placement='bottom-start' text='Lorem ipsum dolor sit amet, consectetur adipiscing.' />
);

export const bottom = () => (
    <InlineHelp placement='bottom' text='Lorem ipsum dolor sit amet, consectetur adipiscing.' />
);

export const right = () => (
    <InlineHelp placement='right' text='Lorem ipsum dolor sit amet, consectetur adipiscing.' />
);

export const left = () => (
    <InlineHelp placement='left' text='Lorem ipsum dolor sit amet, consectetur adipiscing.' />
);

export const topStart = () => (
    <InlineHelp placement='top-start' text='Lorem ipsum dolor sit amet, consectetur adipiscing.' />
);

export const topEnd = () => (
    <InlineHelp placement='top-end' text='Lorem ipsum dolor sit amet, consectetur adipiscing.' />
);

export const top = () => (
    <InlineHelp placement='top' text='Lorem ipsum dolor sit amet, consectetur adipiscing.' />
);

export const noStyles = () => (<InlineHelp cssNamespace='xxx' text='default' />);
noStyles.parameters = { docs: { disable: true } };
