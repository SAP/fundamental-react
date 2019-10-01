import Button from './Button';
import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

describe('<Button />', () => {
    const defaultButton = <Button>Regular Button</Button>;
    const optionButton = <Button option='emphasized'>Emphasized Button</Button>;
    const typeButton = <Button type='positive'>Positive Button</Button>;
    const iconButton = <Button glyph='cart'>Icon Button</Button>;
    const compactButton = <Button compact>Compact</Button>;

    const selectedButton = (
        <Button option='emphasized' selected>
            Selected State
        </Button>
    );
    const disabledButton = (
        <Button disabled option='emphasized'>
            Disabled State
        </Button>
    );

    test('create buttons', () => {
        // default button
        let component = renderer.create(defaultButton);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // option button
        component = renderer.create(optionButton);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // type button
        component = renderer.create(typeButton);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // icon button
        component = renderer.create(iconButton);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // compact button
        component = renderer.create(compactButton);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // selected button
        component = renderer.create(selectedButton);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // disabled button
        component = renderer.create(disabledButton);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    describe('Prop spreading', () => {
        test('should allow props to be spread to the Button component', () => {
            const element = mount(<Button data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
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
            render = () => <Button ref={ref}>Button</Button>;
        }
        mount(<Test />);
        expect(ref.current.tagName).toEqual('BUTTON');
        expect(ref.current.className).toEqual('fd-button');
    });
});
