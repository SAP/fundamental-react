import { mount } from 'enzyme';
import Panel from './Panel';
import React from 'react';
import renderer from 'react-test-renderer';

describe('<PanelBody />', () => {
    const panelBody = (
        <Panel.Body>Panel</Panel.Body>
    );

    test('create panel body', () => {
        let component = renderer.create(panelBody);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    describe('Prop spreading', () => {
        test('should allow props to be spread to the PanelBody component', () => {
            const element = mount(<Panel.Body data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });
});
