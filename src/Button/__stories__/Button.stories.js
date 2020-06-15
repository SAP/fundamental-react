/* eslint-disable react/no-multi-comp */
import Button from '../Button';
import React from 'react';
import {
    boolean,
    select
} from '@storybook/addon-knobs';

export default {
    title: 'Component API/Button',
    component: Button
};

export const primary = () => (<Button>Button</Button>);

/**
 * There are three emphasis styles used to indicate the importance of the button on the page.
 * * **Emphasized Button**: There should only be one highlighted button on the page. This is the primary call to action.
 * * **Regular Button**: The default button style and the most common button. There may be more than one on a page.
 * * **Transparent Button**: This is the lowest priority button and most often used with page content like appearing in a table or list.
 * There may be more than one on the page.
 */

export const options = () => (
    <div className='fddocs-container'>
        <Button option='emphasized'>Emphasized Button</Button>
        <Button>Default Button</Button>
        <Button option='transparent'>Transparent Button</Button>
    </div>
);

options.storyName = 'Options';

/**
 * * **Standard Button**: Neutral or informative color
 * * **Positive Button**: Used for positive actions such as approved, ok, yes.
 * * **Negative Button**: Used for negative actions such as decline, cancel, no.
 * * **Ghost Button**: Used for secondary actions or primary button in cases where there is already a primary button on the page.
 * * **Attention Button**
 */

export const types = () => (
    <div className='fddocs-container'>
        <Button>Default Button</Button>
        <Button type='standard'>Standard Button</Button>
        <Button type='positive'>Positive Button</Button>
        <Button type='negative'>Negative Button</Button>
        <Button type='ghost'>Ghost Button</Button>
        <Button type='attention'>Attention Button</Button>
    </div>
);

types.storyName = 'Types';

/** Button can have an icon with text or just and icon. */

export const icons = () => (
    <div className='fddocs-container'>
        <Button glyph='cart' option='emphasized'>Add to Cart</Button>
        <Button glyph='cart'>Add to Cart</Button>
        <Button glyph='filter' option='transparent'>Filter</Button>
        <Button glyph='accept' type='positive'>Approve</Button>
        <Button glyph='decline' type='negative'>Reject</Button>
        <Button glyph='edit' type='ghost'>Edit</Button>
        <Button glyph='warning' type='attention'>Ignore</Button>
        <div className='fddocs-container--break' />
        <Button glyph='alert' option='emphasized' />
        <Button aria-label='Add to cart' glyph='cart' />
        <Button aria-label='Filter' glyph='cart'
            option='transparent' />
        <Button aria-label='Accept' glyph='accept'
            type='positive' />
        <Button aria-label='Decline' glyph='decline'
            type='negative' />
        <Button aria-label='Edit' glyph='edit'
            type='ghost' />
        <Button aria-label='Ignore' glyph='warning'
            type='attention' />
    </div>
);

icons.storyName = 'Icons';

/** There are two sizes. The `compact` size is only used on desktop and it is full size when used on a touch device. */

export const sizes = () => (
    <div className='fddocs-container'>
        <Button>Default</Button>
        <Button compact>Compact</Button>
    </div>
);

sizes.storyName = 'Sizes';

/** There are three states: default, `selected`, and `disabled` */

export const states = () => (
    <div className='fddocs-container'>
        <Button>Default</Button>
        <Button selected>Selected</Button>
        <Button disabled>Disabled</Button>
        <div className='fddocs-container--break' />
        <Button option='emphasized'>Emphasized</Button>
        <Button option='emphasized' selected>Emphasized</Button>
        <Button disabled option='emphasized'>Emphasized</Button>
        <div className='fddocs-container--break' />
        <Button option='transparent'>Transparent</Button>
        <Button option='transparent' selected>Transparent</Button>
        <Button disabled option='transparent'>Transparent</Button>
        <div className='fddocs-container--break' />
        <Button type='positive'>Positive Button</Button>
        <Button selected type='positive'>Positive Button</Button>
        <Button disabled type='positive'>Positive Button</Button>
        <div className='fddocs-container--break' />
        <Button type='negative'>Negative Button</Button>
        <Button selected type='negative'>Negative Button</Button>
        <Button disabled type='negative'>Negative Button</Button>
        <div className='fddocs-container--break' />
        <Button type='ghost'>Ghost Button</Button>
        <Button selected type='ghost'>Ghost Button</Button>
        <Button disabled type='ghost'>Ghost Button</Button>
        <div className='fddocs-container--break' />
        <Button type='attention'>Attention Button</Button>
        <Button selected type='attention'>Attention Button</Button>
        <Button disabled type='attention'>Attention Button</Button>
    </div>
);

states.storyName = 'States';

export const dev = () => (
    <Button
        compact={(boolean('compact'), false)}
        disabled={(boolean('disabled'), false)}
        option={select('option', {
            'emphasized': 'emphasized',
            'transparent': 'transparent'
        })}
        type={select('type', {
            'standard': 'standard',
            'positive': 'positive',
            'negative': 'negative',
            'medium': 'medium'
        })}>Dev</Button>
);


dev.parameters = { docs: { disable: true } };
