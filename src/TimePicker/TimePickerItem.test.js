import { mount } from 'enzyme';
import React from 'react';
import TimePicker from './TimePicker';

describe('TimePicker Item', () => {
    test('should allow props to be spread to the TimePicker component\'s TimePickerItem component\'s input element', () => {
        const element = mount(<TimePicker id='id' inputProps={{ 'data-sample': 'Sample' }} />);

        expect(
            element.find('.fd-input').getDOMNode().attributes['data-sample'].value
        ).toBe('Sample');
    });

    test('should allow props to be spread to the TimePicker component\'s TimePickerItem component\'s button element', () => {
        const element = mount(<TimePicker buttonProps={{ 'data-sample': 'Sample' }} id='id' />);

        expect(
            element.find('button').getDOMNode().attributes['data-sample'].value
        ).toBe('Sample');
    });
});
