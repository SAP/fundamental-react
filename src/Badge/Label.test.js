import Label from './Label';
import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

describe('<Label />', () => {
    const defaultLabel = <Label>Default</Label>;
    const typeLabel = (
        <Label className='blue' type='success'>
            Default
        </Label>
    );

    test('create label', () => {
        // create default label
        let component = renderer.create(defaultLabel);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // create success type label
        component = renderer.create(typeLabel);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    describe('Prop spreading', () => {
        test('should allow props to be spread to the Label component', () => {
            const element = mount(<Label data-sample='Sample' />);

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
            render = () => <Label ref={ref} />;
        }
        mount(<Test />);
        expect(ref.current.tagName).toEqual('SPAN');
        expect(ref.current.className).toEqual('fd-label');
    });
});
