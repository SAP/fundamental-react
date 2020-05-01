import ActionBar from './ActionBar';
import { mount } from 'enzyme';
import React from 'react';

describe('<ActionBar />', () => {
    describe('Prop spreading', () => {
        test('should allow props to be spread to the ActionBar component', () => {
            const element = mount(<ActionBar data-sample='Sample' title='Page Title' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the back Button component', () => {
            const element = mount(<ActionBar buttonProps={{ 'data-sample': 'Sample' }} onBackClick={() => {}}
                title='Page Title' />);

            expect(
                element.find('.sap-icon--navigation-left-arrow').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the title', () => {
            const element = mount(<ActionBar title='Page Title' titleProps={{ 'data-sample': 'Sample' }} />);

            expect(
                element.find('.fd-action-bar__title').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the action container', () => {
            const element = mount(<ActionBar actionProps={{ 'data-sample': 'Sample' }} actions={(<button>Button</button>)}
                title='Page Title' />);

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
