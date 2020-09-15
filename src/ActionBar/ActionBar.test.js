import ActionBar from './ActionBar';
import { mount } from 'enzyme';
import React from 'react';

describe('<ActionBar />', () => {
    const setup = (props = {}) => mount(<ActionBar title='Page Title' {...props} />);

    describe('Prop spreading', () => {
        test('should allow props to be spread to the ActionBar component', () => {
            const element = setup({ 'data-sample': 'Sample' });

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the back Button component', () => {
            const element = setup({
                backButtonLabel: 'Placeholder label',
                buttonProps: { 'data-sample': 'Sample' },
                onBackClick: () => {}
            });

            expect(
                element.find('button.fd-button--transparent').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the title', () => {
            const element = setup({ titleProps: { 'data-sample': 'Sample' } });

            expect(
                element.find('.fd-title').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the action container', () => {
            const element = setup({ actionProps: { 'data-sample': 'Sample' }, actions: (<button>Button</button>) });

            expect(
                element.find('.fd-action-bar__actions').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });

    test('forwards the ref', () => {
        let ref;
        class Test extends React.Component {
            constructor(props) {
                super(props);
                ref = React.createRef();
            }
            render = () => <ActionBar ref={ref} title='Page Title' />;
        }
        mount(<Test />);

        expect(ref.current.tagName).toEqual('DIV');
        expect(ref.current.className).toEqual('fd-action-bar');
    });
});
