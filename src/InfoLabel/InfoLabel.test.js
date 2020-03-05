import InfoLabel from './InfoLabel';
import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

describe('<InfoLabel />', () => {
    const defaultInfoLabel = <InfoLabel>Default</InfoLabel>;

    const classNameInfoLabel = (<InfoLabel className='blue'>Default</InfoLabel>);

    const colorsInfoLabel = (
        <>
            <InfoLabel color={1}>Default</InfoLabel>
            <InfoLabel color={2}>Default</InfoLabel>
            <InfoLabel color={3}>Default</InfoLabel>
            <InfoLabel color={4}>Default</InfoLabel>
            <InfoLabel color={5}>Default</InfoLabel>
            <InfoLabel color={6}>Default</InfoLabel>
            <InfoLabel color={7}>Default</InfoLabel>
            <InfoLabel color={8}>Default</InfoLabel>
            <InfoLabel color={9}>Default</InfoLabel>
            <InfoLabel color={10}>Default</InfoLabel>
        </>
    );

    const iconInfoLabel = (
        <>
            <InfoLabel glyph='add-activity-2'>Default</InfoLabel>
            <InfoLabel glyph='bar-code'>Default</InfoLabel>
            <InfoLabel glyph='hide'>Default</InfoLabel>
            <InfoLabel glyph='key'>Default</InfoLabel>
            <InfoLabel glyph='upload-to-cloud' />
        </>
    );

    const numericInfoLabel = (
        <>
            <InfoLabel numeric>1</InfoLabel>
            <InfoLabel numeric>10000</InfoLabel>
        </>
    );

    test('create label', () => {
        // create default label
        let component = renderer.create(defaultInfoLabel);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        component = renderer.create(classNameInfoLabel);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        component = renderer.create(colorsInfoLabel);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        component = renderer.create(iconInfoLabel);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        component = renderer.create(numericInfoLabel);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    describe('Prop spreading', () => {
        test('should allow props to be spread to the InfoLabel component', () => {
            const element = mount(<InfoLabel data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });
    test('forwards the ref', () => {
        let ref;
        class Test extends React.Component {
            constructor(props) {
                super(props);
                ref = React.createRef();
            }
            render = () => <InfoLabel ref={ref} />;
        }
        mount(<Test />);
        expect(ref.current.tagName).toEqual('SPAN');
        expect(ref.current.className).toEqual('fd-info-label');
    });
});
