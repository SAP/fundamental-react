import List from './List';
import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

describe('<ListText />', () => {
    const listText = (
        <List.Text>
            List item 1
        </List.Text>
    );

    const listTextNoWrap = (
        <List.Text noWrap>
            List item 1
        </List.Text>
    );

    const listTextSecondary = (
        <List.Text secondary>
            List item 1
        </List.Text>
    );

    const listTextSecondaryNoWrap = (
        <List.Text noWrap secondary>
            List item 1
        </List.Text>
    );

    test('create list Title item', () => {
        let component = renderer.create(listText);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        component = renderer.create(listTextNoWrap);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        component = renderer.create(listTextSecondary);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        component = renderer.create(listTextSecondaryNoWrap);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    describe('Prop spreading', () => {
        test('should allow props to be spread to the ListText component', () => {
            const element = mount(<List.Text data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });
});
