import { Button } from '../Button/Button';
import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import { FormGroup, InputGroup } from './InputGroup';

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
    const searchText = (
        <InputGroup inputPlaceholder='Search Term' inputType='search' />
    );
    const searchTextCompact = (
        <InputGroup
            compact
            inputPlaceholder='Search Term'
            inputType='search'
            inputValue='search me' />
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
    const formGroup = <FormGroup>{inputTextPosAfter}</FormGroup>;

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

        // create input search
        component = renderer.create(searchText);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // create input search compact
        component = renderer.create(searchTextCompact);
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

        // create form group
        component = renderer.create(formGroup);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // default input group
        component = renderer.create('<InputGroup />');
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('input text entered', () => {
        const wrapper = mount(inputTextPosBefore);

        // click up
        wrapper.setState({ value: '' });
        wrapper
            .find('input[type="text"]')
            .simulate('change', { target: { value: 'hello' } });

        expect(wrapper.state('value')).toEqual('hello');
    });

    test('search input then clear button click', () => {
        const wrapper = mount(searchText);

        // enter text into search box
        wrapper
            .find('input[type="search"]')
            .simulate('change', { target: { value: 'hello' } });

        expect(wrapper.state('searchValue')).toEqual('hello');

        // clear search box
        wrapper
            .find('.fd-input-group__button.fd-input-group__button--clear')
            .simulate('click');

        expect(wrapper.state('searchValue')).toEqual('');
    });

    test('number input handle up and down', () => {
        const wrapper = mount(numberInput);

        // click up
        wrapper.setState({ value: 0 });
        wrapper
            .find(
                'button.fd-input-group__button.fd-input-group__button--step-up.sap-icon--slim-arrow-up'
            )
            .simulate('click');
        expect(wrapper.state('value')).toEqual(1);

        wrapper
            .find(
                'button.fd-input-group__button.fd-input-group__button--step-down.sap-icon--slim-arrow-down'
            )
            .simulate('click');
        expect(wrapper.state('value')).toEqual(0);
    });

    describe('Prop spreading', () => {
        xtest('should allow props to be spread to the InputGroup component (type text, addonPos after)', () => {
            // TODO: placeholder for this test description once that functionality is built
            const element = mount(<InputGroup data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        xtest('should allow props to be spread to the InputGroup component\'s (type text, addonPos after) input element', () => {
            // TODO: placeholder for this test description once that functionality is built
        });

        xtest('should allow props to be spread to the InputGroup component for addonPos before (type text)', () => {
            // TODO: placeholder for this test description once that functionality is built
        });

        xtest('should allow props to be spread to the InputGroup component for addonPos before\'s (type text) input element', () => {
            // TODO: placeholder for this test description once that functionality is built
        });

        xtest('should allow props to be spread to the InputGroup component for type number', () => {
            // TODO: placeholder for this test description once that functionality is built
        });

        xtest('should allow props to be spread to the InputGroup component for type number\'s input element', () => {
            // TODO: placeholder for this test description once that functionality is built
        });

        xtest('should allow props to be spread to the InputGroup component for type number\'s up button element', () => {
            // TODO: placeholder for this test description once that functionality is built
        });

        xtest('should allow props to be spread to the InputGroup component for type number\'s down button element', () => {
            // TODO: placeholder for this test description once that functionality is built
        });

        xtest('should allow props to be spread to the InputGroup component for type search', () => {
            // TODO: placeholder for this test description once that functionality is built
        });

        xtest('should allow props to be spread to the InputGroup component for type search\'s input element', () => {
            // TODO: placeholder for this test description once that functionality is built
        });

        xtest('should allow props to be spread to the InputGroup component for type search\'s button element', () => {
            // TODO: placeholder for this test description once that functionality is built
        });

        xtest('should allow props to be spread to the FormGroup component', () => {
            // TODO: placeholder for this test description once that functionality is built
            const element = mount(<FormGroup data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });
});
