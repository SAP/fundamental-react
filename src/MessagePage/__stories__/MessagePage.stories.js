import Button from '../../Button/Button';
import MessagePage from '../MessagePage';
import React from 'react';

export default {
    title: 'Component API/MessagePage',
    component: MessagePage
};

export const primary = () => {
    return <MessagePage title='No items found.' />;
};

export const complex = () => {
    return (
        <MessagePage
            actions={<Button option='emphasized'>Try again</Button>}
            glyph='search'
            more={<a href='#'>More info</a>}
            subtitle='Please try again.'
            title='No items found.' />
    );
};

export const customImage = () => {
    return (
        <MessagePage
            image={<img alt='SAP' src='//unpkg.com/fundamental-styles/dist/images/sap-logo.png' />}
            title='No items found.' />
    );
};
