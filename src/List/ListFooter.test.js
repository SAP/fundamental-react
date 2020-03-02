import List from './List';
import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

describe('<ListFooter />', () => {
    const ListFooter = (
        <List.Footer>
            List item 1
        </List.Footer>
    );

    test('create list footer item', () => {
        let component = renderer.create(ListFooter);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    describe('Prop spreading', () => {
        test('should allow props to be spread to the ListFooter component', () => {
            const element = mount(<List.Footer data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });
});
