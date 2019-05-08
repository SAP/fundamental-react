import { Button } from '../';
import ListGroup from './ListGroup';
import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

describe('<ListGroupItem />', () => {
    const listGroupItem = (
        <ListGroup.Item>
            List item 1
            <ListGroup.ItemActions className='blue'>
                <Button glyph='edit' type='standard' />
            </ListGroup.ItemActions>
        </ListGroup.Item>
    );

    test('create list group item', () => {
        let component = renderer.create(listGroupItem);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    describe('Prop spreading', () => {
        test('should allow props to be spread to the ListGroupItem component', () => {
            const element = mount(<ListGroup.Item data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });
});
