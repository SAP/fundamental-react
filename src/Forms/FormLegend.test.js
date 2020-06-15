import FormLegend from './FormLegend';
import { mount } from 'enzyme';
import React from 'react';

describe('<FormLegend />', () => {
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
