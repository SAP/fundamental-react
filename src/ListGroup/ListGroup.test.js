import { Button } from '../Button/Button';
import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import { ListGroup, ListGroupItem, ListGroupItemActions, ListGroupItemCheckbox} from './ListGroup';

describe('<ListGroup />', () => {
    const defaultListGroup = (
        <ListGroup className='blue'>
            <ListGroupItem className='blue'>
                <a style={{ cursor: 'pointer' }}>List item 1</a>
            </ListGroupItem>
            <ListGroupItem>List item 2</ListGroupItem>
            <ListGroupItem>
                <a style={{ cursor: 'pointer' }}>List item3</a>
            </ListGroupItem>
            <ListGroupItem>List item 4</ListGroupItem>
            <ListGroupItem>
                List item 1
                <ListGroupItemActions className='blue'>
                    <Button glyph='edit' type='standard' />
                </ListGroupItemActions>
            </ListGroupItem>
        </ListGroup>
    );
    const listGroupAction = (
        <ListGroup>
            <ListGroupItem>
                List item 1
                <ListGroupItemActions>
                    <Button glyph='edit' type='standard' />
                </ListGroupItemActions>
            </ListGroupItem>
        </ListGroup>
    );

    const listGroupCheckbox = (
        <ListGroup>
            <ListGroupItem>
                <ListGroupItemCheckbox>List item 1</ListGroupItemCheckbox>
            </ListGroupItem>
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

        test('should allow props to be spread to the ListGroupItem component', () => {
            const element = mount(<ListGroupItem data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the ListGroupItemActions component', () => {
            const element = mount(<ListGroupItemActions data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        xtest('should allow props to be spread to the ListGroupItemCheckbox component', () => {
            // TODO: placeholder for this test description once that functionality is built
            const element = mount(<ListGroupItemCheckbox data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        xtest('should allow props to be spread to the ListGroupItemCheckbox component\'s input element', () => {
            // TODO: placeholder for this test description once that functionality is built
        });

        xtest('should allow props to be spread to the ListGroupItemCheckbox component\'s label element', () => {
            // TODO: placeholder for this test description once that functionality is built
        });
    });
});
