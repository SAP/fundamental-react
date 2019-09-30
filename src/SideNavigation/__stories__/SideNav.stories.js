import React from 'react';
import SideNav from '../SideNav';
import { storiesOf } from '@storybook/react';
import {
    withKnobs
} from '@storybook/addon-knobs';

storiesOf('Components|SideNav', module)
    .addDecorator(withKnobs)
    .add('Default', () => (
        <SideNav
            selectedId='item-2'>
            <SideNav.List>
                <SideNav.ListItem
                    id='item-1'
                    name='Link Item'
                    url='#' />
                <SideNav.ListItem
                    id='item-2'
                    name='Link Item'
                    url='#' />
                <SideNav.ListItem
                    id='item-3'
                    name='Link Item'
                    url='#' />
                <SideNav.ListItem
                    id='item-4'
                    name='Link Item'
                    url='#' />
                <SideNav.ListItem
                    id='item-5'
                    name='Link Item'
                    url='#' />
            </SideNav.List>
        </SideNav>
    ))
    .add('disable styles', () => (
        <SideNav disableStyles selectedId='item-2'>
            <SideNav.List>
                <SideNav.ListItem
                    id='item-1'
                    name='Link Item'
                    url='#' />
                <SideNav.ListItem
                    id='item-2'
                    name='Link Item'
                    url='#' />
                <SideNav.ListItem
                    id='item-3'
                    name='Link Item'
                    url='#' />
                <SideNav.ListItem
                    id='item-4'
                    name='Link Item'
                    url='#' />
                <SideNav.ListItem
                    id='item-5'
                    name='Link Item'
                    url='#' />
            </SideNav.List>
        </SideNav>
    ))
    .add('custom styles', () => (
        <SideNav customStyles={require('../../utils/WithStyles/customStylesTest.css')} selectedId='item-2'>
            <SideNav.List>
                <SideNav.ListItem
                    id='item-1'
                    name='Link Item'
                    url='#' />
                <SideNav.ListItem
                    id='item-2'
                    name='Link Item'
                    url='#' />
                <SideNav.ListItem
                    id='item-3'
                    name='Link Item'
                    url='#' />
                <SideNav.ListItem
                    id='item-4'
                    name='Link Item'
                    url='#' />
                <SideNav.ListItem
                    id='item-5'
                    name='Link Item'
                    url='#' />
            </SideNav.List>
        </SideNav>
    ));
