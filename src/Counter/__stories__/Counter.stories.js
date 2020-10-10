/* eslint-disable react/no-multi-comp */
import Button from '../../Button/Button';
import Counter from '../Counter';
import React from 'react';

export default {
    title: 'Component API/Counter',
    component: Counter
};

export const primary = () => (
    <Counter>5</Counter>
);

/** Counter has a minimum value 1. Maximum display is 999+. */

export const defaults = () => (
    <div className='fddocs-container'>
        <Counter>5</Counter>
        <Counter>25</Counter>
        <Counter>101</Counter>
        <Counter>999+</Counter>
    </div>
);


defaults.storyName = 'Default Counter';

export const inline = () => (
    <div className='fddocs-container'>
        <p>Lorem ipsum <Counter>5</Counter></p>
    </div>
);


inline.storyName = 'Counter inline with a paragraph';

/** Use the property `notification` to enable notification counter.  */

export const notification = () => (
    <div className='fddocs-container'>
        <Button glyph='bell' option='transparent'>
            <Counter notification>5</Counter>
        </Button>
        <Button glyph='bell' option='transparent'>
            <Counter notification>25</Counter>
        </Button>
        <Button glyph='bell' option='transparent'>
            <Counter notification>101</Counter>
        </Button>
        <Button glyph='bell' option='transparent'>
            <Counter notification>999+</Counter>
        </Button>
    </div>
);

notification.storyName = 'Default Counter';

export const noStyles = () => (
    <Counter cssNamespace='xxx'>5</Counter>
);
noStyles.parameters = { docs: { disable: true } };
