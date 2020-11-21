/* eslint-disable react/no-multi-comp */
import { action } from '@storybook/addon-actions';
import Button from '../Button';
import React from 'react';
import {
    boolean,
    select
} from '@storybook/addon-knobs';

export default {
    title: 'Component API/Button/Button',
    component: Button
};

export const primary = () => (<Button>Button</Button>);

/**
 * There are three emphasis styles used to indicate the importance of the button on the page.
 *
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

/** Button can have an icon with text or just an icon. Be sure to use an `aria-label` if there is no text. */

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
        <Button aria-label='See warning' glyph='alert'
            option='emphasized' />
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

/** Button gets a badge in cases of collecting a number of items from various pages in order to trigger an action.
 * Currently the Emphasized, Standard and Transparent type of buttons are recommended to be used with Badge.
 * Badges cannot contain more than 4 characters.
 */

export const badges = () => (
    <div className='fddocs-container'>
        <Button badge='1234'>Default</Button>
        <Button badge='123' option='emphasized'>Emphasized</Button>
        <Button badge='12' option='transparent'>Transparent</Button>
        <Button badge='1234' compact>Default compact</Button>
        <Button
            badge='123'
            compact
            option='emphasized'>
            Emphasized compact
        </Button>
        <Button
            badge='12'
            compact
            option='transparent'>
            Transparent compact
        </Button>
    </div>
);

badges.storyName = 'Badges';

/** There are four states: default, `selected`, `disabled`, and `allowFocusOnDisable`. `allowFocusOnDisabled` allows a
 * disabled button to be focusable. This is to ensure a screen reader can tab into the button and read its state.
 * if `allowFocusOnDisabled` is selected there must be a `disabledMessage` and `enabledMessage` prop within the button
 * that is used by the screen reader to announce a message to the user informing them why the button is disabled, or give
 * instructions on how to enable this button then subsequently announce to the user when the button becomes enabled.
 */

export const states = () => (
    <div className='fddocs-container'>
        <Button>Default</Button>
        <Button selected>Selected</Button>
        <Button disabled>Disabled</Button>
        <Button allowFocusOnDisable disabled
            disabledMessage='To enable this button use the knob in the dev story'
            enabledMessage='This button is now enabled'>Disabled Focusable</Button>
        <div className='fddocs-container--break' />
        <Button option='emphasized'>Emphasized</Button>
        <Button option='emphasized' selected>Emphasized</Button>
        <Button disabled option='emphasized'>Emphasized</Button>
        <Button allowFocusOnDisable disabled
            disabledMessage='To enable this button use the knob in the dev story'
            enabledMessage='This button is now enabled'
            option='emphasized'>Emphasized Focusable</Button>
        <div className='fddocs-container--break' />
        <Button option='transparent'>Transparent</Button>
        <Button option='transparent' selected>Transparent</Button>
        <Button disabled option='transparent'>Transparent</Button>
        <Button allowFocusOnDisable disabled
            disabledMessage='To enable this button use the knob in the dev story'
            enabledMessage='This button is now enabled'
            option='transparent'>Transparent Focusable</Button>
        <div className='fddocs-container--break' />
        <Button type='positive'>Positive Button</Button>
        <Button selected type='positive'>Positive Button</Button>
        <Button disabled type='positive'>Positive Button</Button>
        <Button allowFocusOnDisable disabled
            disabledMessage='To enable this button use the knob in the dev story'
            enabledMessage='This button is now enabled'
            type='positive'>Positive Focusable</Button>
        <div className='fddocs-container--break' />
        <Button type='negative'>Negative Button</Button>
        <Button selected type='negative'>Negative Button</Button>
        <Button disabled type='negative'>Negative Button</Button>
        <Button allowFocusOnDisable disabled
            disabledMessage='To enable this button use the knob in the dev story'
            enabledMessage='This button is now enabled'
            type='negative'>Negative Focusable</Button>
        <div className='fddocs-container--break' />
        <Button type='ghost'>Ghost Button</Button>
        <Button selected type='ghost'>Ghost Button</Button>
        <Button disabled type='ghost'>Ghost Button</Button>
        <Button allowFocusOnDisable disabled
            disabledMessage='To enable this button use the knob in the dev story'
            enabledMessage='This button is now enabled'
            type='ghost'>Ghost Focusable</Button>
        <div className='fddocs-container--break' />
        <Button type='attention'>Attention Button</Button>
        <Button selected type='attention'>Attention Button</Button>
        <Button disabled type='attention'>Attention Button</Button>
        <Button allowFocusOnDisable disabled
            disabledMessage='To enable this button use the knob in the dev story'
            enabledMessage='This button is now enabled'
            type='attention'>Attention Focusable</Button>
    </div>
);

states.storyName = 'States';

export const dev = () => (
    <Button
        allowFocusOnDisable={boolean('allowFocusOnDisable', false)}
        compact={boolean('compact', false)}
        disabled={boolean('disabled', false)}
        disabledMessage={'This button is disabled'}
        enabledMessage={'This button is now enabled'}
        onClick={action('clicked')}
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

export const noStyles = () => (<Button cssNamespace='xxx'>Button</Button>);
noStyles.parameters = { docs: { disable: true } };
