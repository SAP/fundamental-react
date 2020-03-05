import path from 'path';
import React from 'react';
import { Button, Counter } from '..';
import { ComponentPage, Example } from '../_playground';

export const CounterComponent = () => {
    return (
        <ComponentPage
            description='Status Indicators are used to easily highlight the state of an object.'
            sourceModulePath={path.join(__dirname, './Counter')}
            title='Status Indicators'>

            <Example
                centered
                description='Counter has a minimum value 1. Maximum display is 999+'
                title='Default Counter'>
                <Counter>5</Counter>
                <Counter>25</Counter>
                <Counter>101</Counter>
                <Counter>999+</Counter>
            </Example>

            <Example
                centered
                title='Counter inline with a paragraph'>
                <p>Lorem ipsum <Counter>5</Counter></p>
            </Example>

            <Example
                centered
                description='Use the property `notification` to enable notification counter.'
                title='Notification counter'>
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
            </Example>
        </ComponentPage>
    );
};
