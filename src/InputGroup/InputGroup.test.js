import { Button } from '../';
import InputGroup from './InputGroup';
import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

describe('<InputGroup />', () => {
    const inputTextPosBefore = (
        <InputGroup
            addon='$'
            addonPos='before'
            inputType='text'
            inputValue='1234567890' />
    );
    const inputTextPosAfter = (
        <InputGroup
            addon='€'
            addonPos='after'
            inputType='text'
            inputValue='1234567890' />
    );
    const inputTextPosBeforeCompact = (
        <InputGroup
            addon='$'
            addonPos='before'
            compact
            inputType='text'
            inputValue='1234567890' />
    );
    const inputTextPosAfterCompact = (
        <InputGroup
            addon='€'
            addonPos='after'
            compact
            inputType='text'
            inputValue='1234567890' />
    );
    const numberInput = <InputGroup inputType='number' inputValue={100} />;
    const numberInputCompact = (
        <InputGroup compact inputType='number'
            inputValue={100} />
    );

    const inputWithIcon = (
        <InputGroup
            addonPos='before'
            glyph='globe'
            inputType='text'
            inputValue='1234567890' />
    );
    const inputWithIconCompact = (
        <InputGroup
            addonPos='before'
            compact
            glyph='globe'
            inputType='text'
            inputValue='1234567890' />
    );
    const inputWithIconAfter = (
        <InputGroup
            addonPos='after'
            glyph='hide'
            inputType='text'
            inputValue='1234567890' />
    );
    const inputWithIconAfterCompact = (
        <InputGroup
            addonPos='after'
            compact
            glyph='hide'
            inputType='text'
            inputValue='1234567890' />
    );
    const inputWithActions = (
        <InputGroup
            actions
            addonPos='after'
            inputType='text'
            inputValue='1234567890'>
            <Button option='light'>Button</Button>
        </InputGroup>
    );
    const inputWithActionsCompact = (
        <InputGroup
            actions
            addonPos='after'
            compact
            inputType='text'
            inputValue='1234567890'>
            <Button option='light'>Button</Button>
        </InputGroup>
    );

    const inputWithActionsNoButtons = (
        <InputGroup
            actions
            addonPos='before'
            inputType='text'
            inputValue='1234567890' />
    );

    const numberInputWithCustomClassName = (
        <InputGroup
            className='custom-div-class-search'
            inputClassName='custom-input-class-search'
            inputType='number'
            inputValue={100} />
    );

    const beforeInputWithCustomClassName = (
        <InputGroup
            addon='$'
            addonPos='before'
            className='custom-div-class-before'
            inputClassName='custom-input-class-before'
            inputType='text'
            inputValue='1234567890' />
    );

    const afterInputWithCustomClassName = (
        <InputGroup
            addon='€'
            addonPos='after'
            className='custom-div-class-after'
            inputClassName='custom-input-class-after'
            inputType='text'
            inputValue='1234567890' />
    );

    test('create input group items', () => {
        // create input text before
        let component = renderer.create(inputTextPosBefore);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // create input text after
        component = renderer.create(inputTextPosAfter);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // create input text before compact
        component = renderer.create(inputTextPosBeforeCompact);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // create input text after compact
        component = renderer.create(inputTextPosAfterCompact);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // create input number
        component = renderer.create(numberInput);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // create input number compact
        component = renderer.create(numberInputCompact);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // create input icon
        component = renderer.create(inputWithIcon);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // create input icon compact
        component = renderer.create(inputWithIconCompact);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // create input icon after
        component = renderer.create(inputWithIconAfter);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // create input icon after compact
        component = renderer.create(inputWithIconAfterCompact);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // create input actions
        component = renderer.create(inputWithActions);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // create input actions compact
        component = renderer.create(inputWithActionsCompact);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // create input actions but no buttons
        component = renderer.create(inputWithActionsNoButtons);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // number input with group custom class name
        component = renderer.create(numberInputWithCustomClassName);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // before-class input with group custom class name
        component = renderer.create(beforeInputWithCustomClassName);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // after-class input with group custom class name
        component = renderer.create(afterInputWithCustomClassName);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // default input group
        component = renderer.create('<InputGroup />');
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

    });

    test('input text entered', () => {
        const wrapper = mount(inputTextPosBefore).children().children();

        // click up
        wrapper.setState({ value: '' });
        wrapper
            .find('input[type="text"]')
            .simulate('change', { target: { value: 'hello' } });

        expect(wrapper.state('value')).toEqual('hello');
    });

    test('number input handle up and down', () => {
        const wrapper = mount(numberInput).children().children();

        // click up
        wrapper.setState({ value: 0 });
        wrapper
            .find(
                'button.fd-button--half.sap-icon--slim-arrow-up'
            )
            .simulate('click');
        expect(wrapper.state('value')).toEqual(1);

        wrapper
            .find(
                'button.fd-button--half.sap-icon--slim-arrow-down'
            )
            .simulate('click');
        expect(wrapper.state('value')).toEqual(0);
    });

    describe('Prop spreading', () => {
        test('should allow props to be spread to the InputGroup component (type text, addonPos after)', () => {
            const element = mount(<InputGroup data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the InputGroup component\'s (type text, addonPos after) input element', () => {
            const element = mount(<InputGroup inputProps={{ 'data-sample': 'Sample' }} />);

            expect(
                element.find('input').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the InputGroup component for addonPos before (type text)', () => {
            const element = mount(<InputGroup addonPos='before' data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the InputGroup component for addonPos before\'s (type text) input element', () => {
            const element = mount(<InputGroup addonPos='before' inputProps={{ 'data-sample': 'Sample' }} />);

            expect(
                element.find('input').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the InputGroup component for type number', () => {
            const element = mount(<InputGroup data-sample='Sample' inputType='number' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the InputGroup component for type number\'s input element', () => {
            const element = mount(<InputGroup inputProps={{ 'data-sample': 'Sample' }} inputType='number' />);

            expect(
                element.find('input').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the InputGroup component for type number\'s up button element', () => {
            const element = mount(<InputGroup inputType='number' numberUpButtonProps={{ 'data-sample': 'Sample' }} />);

            expect(
                element.find('button.sap-icon--slim-arrow-up').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the InputGroup component for type number\'s down button element', () => {
            const element = mount(<InputGroup inputType='number' numberDownButtonProps={{ 'data-sample': 'Sample' }} />);

            expect(
                element.find('button.sap-icon--slim-arrow-down').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });
});
