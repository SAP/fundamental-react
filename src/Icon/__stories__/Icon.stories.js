/* eslint-disable react/no-multi-comp */
import Icon from '../Icon';
import { listOfIcons } from '../../utils/listOfIcons';
import React from 'react';

export default {
    title: 'Component API/Icon',
    component: Icon
};

export const primary = () => (<Icon glyph='cart' />);

export const sizes = () => (
    <div className='fr-container'>
        <Icon glyph='cart' size='s' />
        <Icon glyph='cart' />
        <Icon glyph='cart' size='m' />
        <Icon glyph='cart' size='l' />
        <Icon glyph='cart' size='xl' />
    </div>
);

export const iconList = () => (
    <div className='fr-container'>
        {listOfIcons.map((icon, index) => {
            return (
                <div className='demo-icon-wrapper' key={index}>
                    <Icon glyph={icon} size='xl' />
                    <h5>sap-icon--{icon}</h5>
                </div>
            );
        })}
    </div>
);
