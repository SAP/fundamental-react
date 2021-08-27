import Button from '../Button/Button';
import MessageBox from './MessageBox';
import { mount } from 'enzyme';
import React from 'react';

describe('<MessageBox />', () => {
    let component;

    afterEach(() => {
        component.unmount();
    });

    test('should be created', () => {
        const mockOnClose = jest.fn();
        const messageBoxTitle = 'Message Box Title';
        component = mount(<MessageBox
            actions={[
                (<Button>OK</Button>)
            ]}
            onClose={mockOnClose}
            show
            title={messageBoxTitle} />);

        expect(component.find('.fd-title').text()).toEqual(messageBoxTitle);

        component.find('button.fd-message-box__decisive-button').at(0).simulate('click');
        expect(component.prop('onClose')).toBeCalledTimes(1);

        let event = new KeyboardEvent('keydown', { key: 'Escape' });
        document.dispatchEvent(event);
        expect(component.prop('onClose')).toBeCalledTimes(2);

        event = new KeyboardEvent('keydown', { key: 'Esc' });
        document.dispatchEvent(event);
        expect(component.prop('onClose')).toBeCalledTimes(3);

        event = new KeyboardEvent('keydown', { key: 'Enter' });
        document.dispatchEvent(event);
        expect(component.prop('onClose')).toBeCalledTimes(3);
    });

    test('should not show on show=false', () => {
        component = mount(<MessageBox
            actions={[
                <Button>OK</Button>
            ]}
            show={false}
            title='Title' />);
        expect(component.find('.fd-title').exists()).toBeFalsy();
    });

    describe('Prop spreading', () => {
        test('should allow props to be spread to the main component', () => {
            component = mount(
                <MessageBox
                    actions={[]}
                    data-sample='Sample Data'
                    show
                    title='Title' />
            );

            expect(component.exists('div[data-sample="Sample Data"]')).toBe(true);
        });

        test('should allow props to be spread to the component\'s content section', () => {
            component = mount(
                <MessageBox
                    actions={[]}
                    contentProps={{ 'data-sample': 'Sample Data' }}
                    show
                    title='Title' />
            );

            expect(
                component.find('section.fd-message-box__content')
                    .getDOMNode()
                    .attributes['data-sample']
                    .value
            ).toBe('Sample Data');
        });

        test('should allow props to be spread to the component\'s header section', () => {
            component = mount(
                <MessageBox
                    actions={[]}
                    headerProps={{ 'data-sample': 'Sample Data' }}
                    show
                    title='Title' />
            );

            expect(
                component.find('header.fd-message-box__header')
                    .getDOMNode()
                    .attributes['data-sample']
                    .value
            ).toBe('Sample Data');
        });

        test('should allow props to be spread to the component\'s body section', () => {
            component = mount(
                <MessageBox
                    actions={[]}
                    bodyProps={{ 'data-sample': 'Sample Data' }}
                    show
                    title='Title' />
            );

            expect(
                component.find('section.fd-message-box__body')
                    .getDOMNode()
                    .attributes['data-sample']
                    .value
            ).toBe('Sample Data');
        });

        test('should allow props to be spread to the component\'s footer section', () => {
            component = mount(
                <MessageBox
                    actions={[]}
                    footerProps={{ 'data-sample': 'Sample Data' }}
                    show
                    title='Title' />
            );

            expect(
                component.find('footer.fd-message-box__footer')
                    .getDOMNode()
                    .attributes['data-sample']
                    .value
            ).toBe('Sample Data');
        });
    });
});
