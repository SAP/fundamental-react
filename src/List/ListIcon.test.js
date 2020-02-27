import List from './List';
import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

describe('<ListIcon />', () => {
    const ListIcon = (
        <List.Icon gyph='accept' />
    );

    test('create list Icon item', () => {
        let component = renderer.create(ListIcon);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    describe('Prop spreading', () => {
        test('should allow props to be spread to the ListIcon component', () => {
            const element = mount(<List.Icon data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });
});
