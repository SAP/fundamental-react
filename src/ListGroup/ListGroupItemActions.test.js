import { Button } from '../';
import ListGroup from './ListGroup';
import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

describe('<ListGroupItemActions />', () => {
    const listGroupItemActions = (
        <ListGroup.ItemActions>
            <Button glyph='edit' type='standard' />
        </ListGroup.ItemActions>
    );

    test('create list group item actions', () => {
        let component = renderer.create(listGroupItemActions);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    describe('Prop spreading', () => {
        test('should allow props to be spread to the ListGroupItemActions component', () => {
            const element = mount(<ListGroup.ItemActions data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });
});
