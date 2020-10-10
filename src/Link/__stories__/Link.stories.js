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

export const subtle = () => (
    <Link href='#' subtle>Subtle</Link>
);

export const noStyles = () => (<Link cssNamespace='xxx' href='#'>Default</Link>);
noStyles.parameters = { docs: { disable: true } };
