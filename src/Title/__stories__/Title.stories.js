/* eslint-disable react/no-multi-comp */
import React from 'react';
import Title from '../Title';

export default {
    title: 'Component API/Title',
    component: Title
};

export const semanticLevels = () => (
    <>
        <Title level={1}>Heading level 1</Title>
        <Title level={2}>Heading level 2</Title>
        <Title level={3}>Heading level 3</Title>
        <Title level={4}>Heading level 4</Title>
        <Title level={5}>Heading level 5</Title>
        <Title level={6}>Heading level 6</Title>
    </>
);

export const styledLevels = () => (
    <>
        <Title level={1} levelStyle={6}>Heading level 1</Title>
        <Title level={2} levelStyle={5}>Heading level 2</Title>
        <Title level={3} levelStyle={4}>Heading level 3</Title>
        <Title level={4} levelStyle={3}>Heading level 4</Title>
        <Title level={5} levelStyle={2}>Heading level 5</Title>
        <Title level={6} levelStyle={1}>Heading level 6</Title>
    </>
);

export const truncated = () => (
    <div style={{ width: '300px' }}>
        <Title level={1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Title>
        <Title level={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Title>
        <Title level={3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Title>
        <Title level={4}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Title>
        <Title level={5}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Title>
        <Title level={6}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Title>
    </div>
);

export const wrapped = () => (
    <div style={{ width: '300px' }}>
        <Title level={1} wrap>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Title>
        <Title level={2} wrap>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Title>
        <Title level={3} wrap>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Title>
        <Title level={4} wrap>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Title>
        <Title level={5} wrap>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Title>
        <Title level={6} wrap>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Title>
    </div>
);

export const noStyles = () => (
    <>
        <Title cssNamespace='xxx' level={1}>Heading level 1</Title>
        <Title cssNamespace='xxx' level={2}>Heading level 2</Title>
        <Title cssNamespace='xxx' level={3}>Heading level 3</Title>
        <Title cssNamespace='xxx' level={4}>Heading level 4</Title>
        <Title cssNamespace='xxx' level={5}>Heading level 5</Title>
        <Title cssNamespace='xxx' level={6}>Heading level 6</Title>
    </>
);
noStyles.parameters = { docs: { disable: true } };
