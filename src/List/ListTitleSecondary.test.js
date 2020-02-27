import List from './List';
import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

describe('<ListTitleSecondary />', () => {
    const ListTitleSecondary = (
        <List.TitleSecondary>
            List item 1
        </List.TitleSecondary>
    );

    test('create list TitleSecondary item', () => {
        let component = renderer.create(ListTitleSecondary);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    describe('Prop spreading', () => {
        test('should allow props to be spread to the ListTitleSecondary component', () => {
            const element = mount(<List.TitleSecondary data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });
});
