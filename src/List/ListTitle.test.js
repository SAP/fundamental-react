import List from './List';
import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

describe('<ListTitle />', () => {
    const ListTitle = (
        <List.Title>
            List item 1
        </List.Title>
    );

    test('create list Title item', () => {
        let component = renderer.create(ListTitle);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    describe('Prop spreading', () => {
        test('should allow props to be spread to the ListTitle component', () => {
            const element = mount(<List.Title data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });
});
