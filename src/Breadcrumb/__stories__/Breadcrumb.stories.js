/* eslint-disable react/no-multi-comp */
import Breadcrumb from '../Breadcrumb';
import BreadcrumbItem from '../_BreadcrumbItem';
import React from 'react';

export default {
    title: 'Component API/Breadcrumb',
    component: Breadcrumb,
    subcomponents: { BreadcrumbItem }
};

export const primary = () => (
    <Breadcrumb>
        <Breadcrumb.Item name='Link Text' url='#' />
        <Breadcrumb.Item name='Link Text' url='#' />
        <Breadcrumb.Item name='Link Text' url='#' />
    </Breadcrumb>
);


export const url = () => (
    <Breadcrumb>
        <Breadcrumb.Item name='Link Text' url='#' />
        <Breadcrumb.Item name='Link Text' url='#' />
        <Breadcrumb.Item name='Link Text' url='#' />
    </Breadcrumb>
);

url.story = {
    name: 'With url property'
};

