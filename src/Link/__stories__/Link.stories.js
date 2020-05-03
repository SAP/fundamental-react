/* eslint-disable react/no-multi-comp */
import Link from '../Link';
import React from 'react';

export default {
    title: 'Component API/Link',
    component: Link
};

export const primary = () => (<Link href='#'>Default</Link>);

export const disabled = () => (
    <Link disabled href='#'>Disabled</Link>
);
