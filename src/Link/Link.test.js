import Link from './Link';
import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

describe('<Link />', () => {
    const link = (
        <Link
            className='blue'
            href='#'>Foo</Link>
    );
    const disabledLink = (
        <Link disabled href='#'>Disabled Link</Link>
    );

    test('create link', () => {
        let component = renderer.create(link);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        component = renderer.create(disabledLink);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    describe('Prop spreading', () => {
        test('should allow props to be spread to the Link component', () => {
            const element = mount(
                <Link
                    data-sample='Sample'
                    href='#' />
            );

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });
});
