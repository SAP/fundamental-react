import { mount } from 'enzyme';
import MultiInput from './MultiInput';
import React from 'react';

describe('<MultiInput />', () => {
    const mockOnTagsUpdate = jest.fn();
    const data = [
        'Apple',
        'Apricot',
        'Acai',
        'African Moringa',
        'Bearberry',
        'Bilberry',
        'Blood orange',
        'Barbadine',
        'Barbados cherry',
        'Balsam Apple',
        'Chokeberry',
        'Cranberry',
        'Cupuacu'
    ];
    const getMultiInput = (props) => (
        <MultiInput
            {...props}
            data={data}
            onTagsUpdate={mockOnTagsUpdate}
            placeholder='Select a Fruit' />
    );
    const multiInput = getMultiInput();

    const compactMultiInput = (
        <MultiInput
            className='blue'
            compact
            data={data}
            onTagsUpdate={mockOnTagsUpdate}
            placeholder='Select a Fruit' />
    );

    let wrapper;

    const getListStatus = () => {
        const combobox = wrapper.find('.fd-input-group');

        const popover = wrapper.find(
            'div.fd-popover__popper'
        );

        return { combobox: combobox, popover: popover };
    };

    // create a default multi-input control
    test('create multi-input', () => {
        wrapper = mount(multiInput);

        expect(wrapper.find('.fd-list--multi-input')).toBeDefined();
    });

    // create a compact multi-input control
    test('create compact multi-input', () => {
        wrapper = mount(compactMultiInput);

        expect(wrapper.find('fd.input--compact')).toBeDefined();
    });

    // check that the tag list is hidden
    test('check that tag list is hidden', () => {
        wrapper = mount(multiInput);

        // check if bShowList state is changed
        expect(wrapper.children().state(['bShowList'])).toBe(false);

        // check to see if list is not shown
        let results = getListStatus(false);
        expect(results.combobox).toHaveLength(1);
        expect(results.popover).toHaveLength(0);
    });

    // check to display tag list on input text click
    test('check that tag list is shown when input text is clicked', () => {
        // check if bShowList state is changed
        wrapper = mount(multiInput);

        // simulate click on input text box
        wrapper.find('input[type="text"].fd-input').simulate('click');

        // check if bShowList state is changed
        expect(wrapper.children().state(['bShowList'])).toBe(true);

        // check to see if list is shown
        let results = getListStatus();
        expect(results.combobox).toHaveLength(1);
        expect(results.popover).toHaveLength(1);
    });

    test('check that multiple validation overlays are not displayed', () => {
        wrapper = mount(getMultiInput({
            validationState: { state: 'error', text: 'Test validation state' }
        }));

        wrapper.find('input[type="text"].fd-input').simulate('click');
        wrapper.find('input[type="text"].fd-input').simulate('focus');
        expect(document.querySelectorAll('.fd-list__message').length).toBe(1);

    });

    // check that tag list is shown on drop down click
    test('check that tag list is shown when dropdown button is clicked', () => {
        wrapper = mount(multiInput);

        // simulate click on dropdown button
        wrapper
            .find('button.fd-button--transparent')
            .simulate('click');

        // check if bShowList state is changed
        expect(wrapper.children().state(['bShowList'])).toBe(true);

        // check to see if list is shown
        let results = getListStatus();
        expect(results.combobox).toHaveLength(1);
        expect(results.popover).toHaveLength(1);
    });

    test('add tag to tagList', () => {
        wrapper = mount(multiInput);
        wrapper
            .find('button.fd-button--transparent')
            .simulate('click');

        // check that no tags exist
        expect(wrapper.children().state(['tags'])).toHaveLength(0);

        // add tag to list
        wrapper
            .find('.fd-checkbox').first()
            .simulate('change', { target: { value: data[0] } });

        // check that tag list contains value
        expect(wrapper.children().state(['tags'])).toHaveLength(1);

        // check to see if tag button is created
        expect(wrapper.find('span.fd-token[role="button"]')).toHaveLength(1);

        // check that tag text is correct
        expect(wrapper.find('span.fd-token[role="button"]').text()).toEqual(
            data[0]
        );
    });

    test('tag list is truncated when more than 3 options are selected', () => {
        wrapper = mount(multiInput);
        wrapper
            .find('button.fd-button--transparent')
            .simulate('click');

        // add 4 tags to list
        wrapper
            .find('.fd-checkbox').first()
            .simulate('change', { target: { value: data[0] } });
        wrapper
            .find('.fd-checkbox').at(1)
            .simulate('change', { target: { value: data[0] } });
        wrapper
            .find('.fd-checkbox').at(2)
            .simulate('change', { target: { value: data[0] } });
        wrapper
            .find('.fd-checkbox').at(3)
            .simulate('change', { target: { value: data[0] } });

        // check that tag list contains value
        expect(wrapper.children().state(['tags'])).toHaveLength(4);

        // check to see that only 3 tags are created
        expect(wrapper.find('span.fd-token[role="button"]')).toHaveLength(3);

        // check that truncated text is correct
        expect(wrapper.find('span.fd-tokenizer__indicator').text()).toEqual(
            '1 more'
        );
    });

    test('remove tag from taglist by unchecking', () => {
        wrapper = mount(multiInput);
        wrapper
            .find('button.fd-button--transparent')
            .simulate('click');

        // check that no tags exist
        expect(wrapper.children().state(['tags'])).toHaveLength(0);

        // add tag to list
        wrapper
            .find('.fd-checkbox').first()
            .simulate('change', { target: { value: data[0] } });

        // check that tag list contains value
        expect(wrapper.children().state(['tags'])).toHaveLength(1);

        // simulate unchecking tag from tag list
        wrapper
            .find('.fd-checkbox').first()
            .simulate('change', { target: { value: data[0] } });

        // check that no tags exist
        expect(wrapper.children().state(['tags'])).toHaveLength(0);
    });

    test('remove tag from taglist by clicking on tag', () => {
        wrapper = mount(multiInput);
        wrapper.find('.fd-input').simulate('click');

        // check that no tags exist
        expect(wrapper.children().state(['tags'])).toHaveLength(0);

        // add tag to list
        wrapper
            .find('.fd-checkbox').first()
            .simulate('change', { target: { value: data[0] } });

        // add another tag to list
        wrapper
            .find('li')
            .at(3)
            .find('.fd-checkbox')
            .simulate('change', { target: { value: data[2] } });

        // check that tag list contains value
        expect(wrapper.children().state(['tags'])).toHaveLength(2);

        // simulate clicking on tag in tag collection under input box
        wrapper.find('.fd-token__close').first().simulate('click');

        // check that no tags exist
        expect(wrapper.children().state(['tags'])).toHaveLength(1);
    });

    describe('validationOverlayProps', () => {

        test('pass validationOverlayProps to InputGroup', () => {
            const element = mount(
                <MultiInput
                    data={data}
                    validationOverlayProps={{
                        className: 'foo'
                    }} />
            );

            expect(
                element.find('InputGroup').at(1).prop('validationOverlayProps')
            ).toMatchObject({
                className: 'foo'
            });
        });
    });

    describe('Prop spreading', () => {
        test('should allow props to be spread to the Input Group component', () => {
            const element = mount(<MultiInput data={data} data-sample='Sample' />);

            expect(
                element.find('.fd-input-group').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the MultiInput component\'s input element', () => {
            const element = mount(<MultiInput data={data} inputProps={{ 'data-sample': 'Sample' }} />);

            expect(
                element.find('input').at(0).getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the MultiInput component\'s button element', () => {
            const element = mount(<MultiInput buttonProps={{ 'data-sample': 'Sample' }} data={data} />);

            expect(
                element.find('button').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the MultiInput component\'s ul element', () => {
            const element = mount(<MultiInput data={data} listProps={{ 'data-sample': 'Sample' }} />);

            element.find('input[type="text"].fd-input').simulate('click');
            expect(
                element.find('ul').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the MultiInput component\'s tags div element', () => {
            const element = mount(<MultiInput
                data={data}
                onTagsUpdate={mockOnTagsUpdate}
                tagProps={{ 'data-sample': 'Sample' }} />);

            element.find('input[type="text"].fd-input').simulate('click');
            element
                .find('.fd-checkbox').first()
                .simulate('change', { target: { value: data[0] } });

            expect(
                element.find('.fd-tokenizer').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the MultiInput component\'s Popover component', () => {
            const element = mount(<MultiInput data={data} popoverProps={{ 'data-sample': 'Sample' }} />);

            expect(
                element.find('div.fd-popover').first().getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });
});
