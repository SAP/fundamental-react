/* eslint-disable jsx-a11y/anchor-is-valid */
import { Button } from '../';
import ListGroup from './ListGroup';
import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

describe('<ListGroup />', () => {
    const defaultListGroup = (
        <ListGroup className='blue'>
            <ListGroup.Item className='blue'>
                <a style={{ cursor: 'pointer' }}>List item 1</a>
            </ListGroup.Item>
            <ListGroup.Item>List item 2</ListGroup.Item>
            <ListGroup.Item>
                <a style={{ cursor: 'pointer' }}>List item3</a>
            </ListGroup.Item>
            <ListGroup.Item>List item 4</ListGroup.Item>
            <ListGroup.Item>
                List item 1
                <ListGroup.ItemActions className='blue'>
                    <Button glyph='edit' type='standard' />
                </ListGroup.ItemActions>
            </ListGroup.Item>
        </ListGroup>
    );
    const listGroupAction = (
        <ListGroup>
            <ListGroup.Item>
                List item 1
                <ListGroup.ItemActions>
                    <Button glyph='edit' type='standard' />
                </ListGroup.ItemActions>
            </ListGroup.Item>
        </ListGroup>
    );

    const listGroupCheckbox = (
        <ListGroup>
            <ListGroup.Item>
                <ListGroup.ItemCheckbox>List item 1</ListGroup.ItemCheckbox>
            </ListGroup.Item>
        </ListGroup>
    );

    test('create list group', () => {
        // create default list group
        let component = renderer.create(defaultListGroup);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // list group with action
        component = renderer.create(listGroupAction);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // list group with checkbox
        component = renderer.create(listGroupCheckbox);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    describe('Prop spreading', () => {
        test('should allow props to be spread to the ListGroup component', () => {
            const element = mount(<ListGroup data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the ListGroupItemCheckbox component', () => {
            // TODO: placeholder for this test description once that functionality is built
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
