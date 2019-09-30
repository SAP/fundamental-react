import ActionBar from './ActionBar';
import { mount } from 'enzyme';
import React from 'react';

describe('ActionBar Header', () => {
    test('should allow customization of header level', () => {
        const element = mount(
            <ActionBar.Header
                description=''
                headingLevel={2}
                title='' />
        );
        expect(
            element.find('.fd-action-bar__title').type()
        ).toBe('h2');
    });

    describe('Prop spreading', () => {
        test('should allow props to be spread to the ActionBarHeader component', () => {
            const element = mount(
                <ActionBar.Header
                    data-sample='Sample'
                    description=''
                    title='' />
            );

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the ActionBarHeader component\'s heading element', () => {
            const element = mount(
                <ActionBar.Header
                    description=''
                    title=''
                    titleProps={{ 'data-sample': 'Sample' }} />
            );

            expect(
                element.find('h3').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the ActionBarHeader component\'s p element', () => {
            const element = mount(
                <ActionBar.Header
                    description='Sample Description'
                    descriptionProps={{ 'data-sample': 'Sample' }}
                    title='' />
            );

            expect(
                element.find('p').getDOMNode().attributes['data-sample'].value
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
            render = () => <ActionBar.Header ref={ref} title='sample' />;
        }
        mount(<Test />);

        expect(ref.current.tagName).toEqual('DIV');
        expect(ref.current.className).toEqual('fd-action-bar__header');
    });
});



