import MessageStrip from './MessageStrip';
import { mount } from 'enzyme';
import React from 'react';

describe('<MessageStrip />', () => {
    describe('Prop spreading', () => {
        test('should allow props to be spread to the MessageStrip component', () => {
            const element = mount(<MessageStrip data-sample='Sample' />);

            expect(
                element.find('div').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the MessageStrip component\'s button element when dismissible', () => {
            const element = mount(<MessageStrip buttonProps={{ 'data-sample': 'Sample' }} dismissible />);

            expect(
                element.find('button').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the MessageStrip component\'s a element when link provided', () => {
            const element = mount(<MessageStrip link='#' linkProps={{ 'data-sample': 'Sample' }} />);

            expect(
                element.find('a').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });

    describe('onClick handler', () => {
        test('should dispatch the onClick callback with the event', () => {
            let f = jest.fn();
            const element = mount(<MessageStrip data-sample='Sample' dismissible
                onCloseClicked={f} />);

            element.find('button').simulate('click');

            expect(f).toHaveBeenCalledTimes(1);
        });
    });
});
