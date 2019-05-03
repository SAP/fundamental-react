import { mount } from 'enzyme';
import Panel from './Panel';
import React from 'react';
import renderer from 'react-test-renderer';

describe('<PanelFooter />', () => {
    const panelFooter = (
        <Panel.Footer>Panel Footer</Panel.Footer>
    );

    test('create panel footer', () => {
        let component = renderer.create(panelFooter);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    describe('Prop spreading', () => {
        test('should allow props to be spread to the PanelFooter component', () => {
            const element = mount(<Panel.Footer data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });
});
