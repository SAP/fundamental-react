import List from './List';
import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

describe('<ListHeader />', () => {
    const ListHeader = (
        <List.Header>
            List item 1
        </List.Header>
    );

    test('create list Header item', () => {
        let component = renderer.create(ListHeader);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    describe('Prop spreading', () => {
        test('should allow props to be spread to the ListHeader component', () => {
            const element = mount(<List.Header data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });
});
