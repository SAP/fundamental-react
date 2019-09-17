import ListGroup from './ListGroup';
import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

describe('<ListGroupItemCheckbox />', () => {
    const listGroupItemCheckbox = (
        <ListGroup.ItemCheckbox id='foo'>List item 1</ListGroup.ItemCheckbox>
    );

    test('create list group', () => {
        // create default list group
        let component = renderer.create(listGroupItemCheckbox);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    describe('Prop spreading', () => {
        test('should allow props to be spread to the ListGroupItemCheckbox component', () => {
            const element = mount(<ListGroup.ItemCheckbox data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the ListGroupItemCheckbox component\'s input element', () => {
            const element = mount(<ListGroup.ItemCheckbox inputProps={{ 'data-sample': 'Sample' }} />);

            expect(
                element.find('input').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the ListGroupItemCheckbox component\'s label element', () => {
            const element = mount(<ListGroup.ItemCheckbox labelProps={{ 'data-sample': 'Sample' }} />);

            expect(
                element.find('label').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });
});
