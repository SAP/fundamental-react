/* eslint-disable react/no-multi-comp */
import Pagination from '../Pagination';
import React from 'react';

export default {
    title: 'Component API/Pagination',
    component: Pagination
};

export const primary = () => (
    <Pagination itemsTotal={101} onClick={()=>{}} />
);

export const itemsPerPagePagination = () => (
    <Pagination itemsPerPage={25} itemsTotal={101}
        onClick={()=>{}} />
);

export const hideTotalItemsPagination = () => (
    <Pagination
        displayTotal={false}
        itemsTotal={101}
        onClick={()=>{}} />
);

export const totalTextPagination = () => (
    <Pagination
        itemsTotal={101}
        onClick={()=>{}}
        totalText='Dalmations' />
);

export const itemsPerPageZeroPagination = () => (
    <Pagination itemsPerPage={0} itemsTotal={101}
        onClick={()=>{}} />
);

export const visibleTotalPagesPagination = () => (
    <Pagination itemsTotal={221}
        onClick={()=>{}}
        visiblePageTotal={20} />
);

export const visibleTotalPagesWithItemTotalPagination = () => (
    <Pagination itemsPerPage={1} itemsTotal={10}
        onClick={()=>{}}
        visiblePageTotal={20} />
);

export const visibleTotalPagesZeroPagination = () => (
    <Pagination itemsPerPage={0} itemsTotal={200}
        onClick={()=>{}}
        visiblePageTotal={20} />
);
