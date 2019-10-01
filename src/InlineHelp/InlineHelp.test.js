import InlineHelp from './InlineHelp';
import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

describe('<InlineHelp />', () => {
    const defaultInlineHelp = (
        <InlineHelp
            className='blue'
            placement='bottom-right'
            text='Lorem ipsum dolor sit amet, consectetur adipiscing.' />
    );

    const inlineHelpBottomLeft = (
        <InlineHelp
            placement='bottom-left'
            text='Lorem ipsum dolor sit amet, consectetur adipiscing.' />
    );

    const inlineHelpBottomCenter = (
        <InlineHelp
            placement='bottom-center'
            text='Lorem ipsum dolor sit amet, consectetur adipiscing.' />
    );

    const inlineHelpLeft = (
        <InlineHelp
            placement='left'
            text='Lorem ipsum dolor sit amet, consectetur adipiscing.' />
    );

    const inlineHelpRight = (
        <InlineHelp
            placement='right'
            text='Lorem ipsum dolor sit amet, consectetur adipiscing.' />
    );

    test('create default InlineHelp component', () => {
        const component = renderer.create(defaultInlineHelp);
        const tree = component.toJSON();

        expect(tree).toMatchSnapshot();
    });

    test('create Bottom Left InlineHelp component', () => {
        const component = renderer.create(inlineHelpBottomLeft);
        const tree = component.toJSON();

        expect(tree).toMatchSnapshot();
    });

    test('create Bottom Center InlineHelp component', () => {
        const component = renderer.create(inlineHelpBottomCenter);
        const tree = component.toJSON();

        expect(tree).toMatchSnapshot();
    });

    test('create Left InlineHelp component', () => {
        const component = renderer.create(inlineHelpLeft);
        const tree = component.toJSON();

        expect(tree).toMatchSnapshot();
    });

    test('create Right InlineHelp component', () => {
        const component = renderer.create(inlineHelpRight);
        const tree = component.toJSON();

        expect(tree).toMatchSnapshot();
    });

    describe('Prop spreading', () => {
        test('should allow props to be spread to the InlineHelp component', () => {
            const element = mount(
                <InlineHelp
                    data-sample='Sample'
                    placement='bottom-center'
                    text='Text' />
            );

            expect(
                element.getDOMNode().querySelector('span').attributes['data-sample'].value
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
            render = () => <InlineHelp ref={ref} text='hello' />;
        }
        mount(<Test />);
        expect(ref.current.tagName).toEqual('SPAN');
        expect(ref.current.className).toEqual('fd-inline-help');
    });
});
