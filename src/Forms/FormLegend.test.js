import FormLegend from './FormLegend';
import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

describe('<FormLegend />', () => {
    const formLegend = (
        <FormLegend className='blue'>Radio buttons</FormLegend>
    );

    test('create form legend', () => {
        let component = renderer.create(formLegend);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    describe('Prop spreading', () => {
        test('should allow props to be spread to the FormLegend component', () => {
            const element = mount(<FormLegend data-sample='Sample' />);

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
            render = () => <FormLegend ref={ref} />;
        }
        mount(<Test />);
        expect(ref.current.tagName).toEqual('LEGEND');
        expect(ref.current.className).toEqual('fd-fieldset__legend');
    });
});
