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

export const defaults = () => (
    <div className='fr-container'>
        <Counter>5</Counter>
        <Counter>25</Counter>
        <Counter>101</Counter>
        <Counter>999+</Counter>
    </div>
);


defaults.story = {
    name: 'Default Counter',
    parameters: {
        docs: {
            storyDescription: 'Counter has a minimum value 1. Maximum display is 999+.'
        }
    }
};

export const inline = () => (
    <div className='fr-container'>
        <p>Lorem ipsum <Counter>5</Counter></p>
    </div>
);


inline.story = {
    name: 'Counter inline with a paragraph'
};


export const notification = () => (
    <div className='fr-container'>
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


notification.story = {
    name: 'Default Counter',
    parameters: {
        docs: {
            storyDescription: 'Use the property `notification` to enable notification counter.'
        }
    }
};
