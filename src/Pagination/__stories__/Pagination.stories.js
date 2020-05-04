/* eslint-disable react/no-multi-comp */
import Pagination from '../Pagination';
import React from 'react';

export default {
    title: 'Component API/Pagination',
    component: Pagination
};

export const primary = () => (
    <Pagination itemsTotal={101} />
);

export const initialSetPagination = () => (
    <Pagination
        initalPage={5}
        itemsTotal={101} />
);

export const itemsPerPagePagination = () => (
    <Pagination itemsPerPage={25} itemsTotal={101} />
);

export const hideTotalItemsPagination = () => (
    <Pagination
        displayTotal={false}
        itemsTotal={101} />
);

export const totalTextPagination = () => (
    <Pagination
        itemsTotal={101}
        totalText='Dalmations' />
);

export const itemsPerPageZeroPagination = () => (
    <Pagination itemsPerPage={0} itemsTotal={101} />
);

export const visibleTotalPagesPagination = () => (
    <Pagination itemsTotal={221}
        visiblePageTotal={20} />
);

export const visibleTotalPagesWithItemTotalPagination = () => (
    <Pagination itemsPerPage={1} itemsTotal={10}
        visiblePageTotal={20} />
);

export const visibleTotalPagesZeroPagination = () => (
    <Pagination itemsPerPage={0} itemsTotal={200}
        visiblePageTotal={20} />
);
