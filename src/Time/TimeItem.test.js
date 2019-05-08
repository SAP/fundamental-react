import { mount } from 'enzyme';
import React from 'react';
import Time from './Time';

describe('Time Item', () => {
    test('should allow props to be spread to the Time component\'s hours TimeItem component\'s up button element', () => {
        const element = mount(
            <Time
                hoursUpButtonProps={{ 'data-sample': 'Sample' }}
                showHour
                showMinute={false}
                showSecond={false} />
        );

        expect(
            element.find('button').first().getDOMNode().attributes['data-sample'].value
        ).toBe('Sample');
    });

    test('should allow props to be spread to the Time component\'s hours TimeItem component\'s down button element', () => {
        const element = mount(
            <Time
                hoursDownButtonProps={{ 'data-sample': 'Sample' }}
                showHour
                showMinute={false}
                showSecond={false} />
        );

        expect(
            element.find('button').last().getDOMNode().attributes['data-sample'].value
        ).toBe('Sample');
    });

    test('should allow props to be spread to the Time component\'s hours TimeItem component\'s input element', () => {
        const element = mount(
            <Time
                hoursInputProps={{ 'data-sample': 'Sample' }}
                showHour
                showMinute={false}
                showSecond={false} />
        );

        expect(
            element.find('input').getDOMNode().attributes['data-sample'].value
        ).toBe('Sample');
    });

    test('should allow props to be spread to the Time component\'s minutes TimeItem component\'s up button element', () => {
        const element = mount(
            <Time
                minutesUpButtonProps={{ 'data-sample': 'Sample' }}
                showHour={false}
                showMinute
                showSecond={false} />
        );

        expect(
            element.find('button').first().getDOMNode().attributes['data-sample'].value
        ).toBe('Sample');
    });

    test('should allow props to be spread to the Time component\'s minutes TimeItem component\'s down button element', () => {
        const element = mount(
            <Time
                minutesDownButtonProps={{ 'data-sample': 'Sample' }}
                showHour={false}
                showMinute
                showSecond={false} />
        );

        expect(
            element.find('button').last().getDOMNode().attributes['data-sample'].value
        ).toBe('Sample');
    });

    test('should allow props to be spread to the Time component\'s minutes TimeItem component\'s input element', () => {
        const element = mount(
            <Time
                minutesInputProps={{ 'data-sample': 'Sample' }}
                showHour={false}
                showMinute
                showSecond={false} />
        );

        expect(
            element.find('input').getDOMNode().attributes['data-sample'].value
        ).toBe('Sample');
    });

    test('should allow props to be spread to the Time component\'s seconds TimeItem component\'s up button element', () => {
        const element = mount(
            <Time
                secondsUpButtonProps={{ 'data-sample': 'Sample' }}
                showHour={false}
                showMinute={false}
                showSecond />
        );

        expect(
            element.find('button').first().getDOMNode().attributes['data-sample'].value
        ).toBe('Sample');
    });

    test('should allow props to be spread to the Time component\'s seconds TimeItem component\'s down button element', () => {
        const element = mount(
            <Time
                secondsDownButtonProps={{ 'data-sample': 'Sample' }}
                showHour={false}
                showMinute={false}
                showSecond />
        );

        expect(
            element.find('button').last().getDOMNode().attributes['data-sample'].value
        ).toBe('Sample');
    });

    test('should allow props to be spread to the Time component\'s seconds TimeItem component\'s input element', () => {
        const element = mount(
            <Time
                secondsInputProps={{ 'data-sample': 'Sample' }}
                showHour={false}
                showMinute={false}
                showSecond />
        );

        expect(
            element.find('input').getDOMNode().attributes['data-sample'].value
        ).toBe('Sample');
    });

    test('should allow props to be spread to the Time component\'s meridiem TimeItem component\'s up button element', () => {
        const element = mount(
            <Time
                format12Hours
                meridiemUpButtonProps={{ 'data-sample': 'Sample' }}
                showHour={false}
                showMinute={false}
                showSecond={false} />
        );

        expect(
            element.find('button').first().getDOMNode().attributes['data-sample'].value
        ).toBe('Sample');
    });

    test('should allow props to be spread to the Time component\'s meridiem TimeItem component\'s down button element', () => {
        const element = mount(
            <Time
                format12Hours
                meridiemDownButtonProps={{ 'data-sample': 'Sample' }}
                showHour={false}
                showMinute={false}
                showSecond={false} />
        );

        expect(
            element.find('button').last().getDOMNode().attributes['data-sample'].value
        ).toBe('Sample');
    });

    test('should allow props to be spread to the Time component\'s meridiem TimeItem component\'s input element', () => {
        const element = mount(
            <Time
                format12Hours
                meridiemInputProps={{ 'data-sample': 'Sample' }}
                showHour={false}
                showMinute={false}
                showSecond={false} />
        );

        expect(
            element.find('input').getDOMNode().attributes['data-sample'].value
        ).toBe('Sample');
    });
});
