import List from './List';
import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

describe('<ListItem />', () => {
    const ListItem = (
        <List.Item>
            List item 1
        </List.Item>
    );

    test('create list group item', () => {
        let component = renderer.create(ListItem);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    describe('Prop spreading', () => {
        test('should allow props to be spread to the ListItem component', () => {
            const element = mount(<List.Item data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });
});
