/* eslint-disable react/no-multi-comp */
import React from 'react';
import Title from '../Title';

export default {
    title: 'Component API/Title',
    component: Title
};

export const semanticLevels = () => (
    <>
        <Title level='h1'>Heading level 1</Title>
        <Title level='h2'>Heading level 2</Title>
        <Title level='h3'>Heading level 3</Title>
        <Title level='h4'>Heading level 4</Title>
        <Title level='h5'>Heading level 5</Title>
        <Title level='h6'>Heading level 6</Title>
    </>
);

export const styledLevels = () => (
    <>
        <Title level='h1' levelStyle='h6'>Heading level 1</Title>
        <Title level='h2' levelStyle='h5'>Heading level 2</Title>
        <Title level='h3' levelStyle='h4'>Heading level 3</Title>
        <Title level='h4' levelStyle='h3'>Heading level 4</Title>
        <Title level='h5' levelStyle='h2'>Heading level 5</Title>
        <Title level='h6' levelStyle='h1'>Heading level 6</Title>
    </>
);

export const truncated = () => (
    <div style={{ width: '300px' }}>
        <Title level='h1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Title>
        <Title level='h2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Title>
        <Title level='h3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Title>
        <Title level='h4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Title>
        <Title level='h5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Title>
        <Title level='h6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Title>
    </div>
);

export const wrapped = () => (
    <div style={{ width: '300px' }}>
        <Title level='h1' wrap>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Title>
        <Title level='h2' wrap>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Title>
        <Title level='h3' wrap>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Title>
        <Title level='h4' wrap>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Title>
        <Title level='h5' wrap>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Title>
        <Title level='h6' wrap>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Title>
    </div>
);
