import FormSelect from './FormSelect';
import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

describe('<FormSelect />', () => {
    const formSelect = (
        <FormSelect className='blue' disabled
            id='select-1'>
            <option value='1'>Duis malesuada odio volutpat elementum</option>
        </FormSelect>
    );

    test('create form item', () => {
        // create form set with form inputs
        let component = renderer.create(formSelect);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    describe('Prop spreading', () => {
        test('should allow props to be spread to the FormSelect component', () => {
            const element = mount(<FormSelect data-sample='Sample' />);

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
            render = () => <FormSelect ref={ref} />;
        }
        mount(<Test />);
        expect(ref.current.tagName).toEqual('SELECT');
        expect(ref.current.className).toEqual('fd-form-select');
    });

    test('onSelect', () => {
        const onSelect = jest.fn();
        const element = mount(<FormSelect onSelect={onSelect} />);
        element.find('select').simulate('select', { target: { value: 'bar' } });
        expect(onSelect).toHaveBeenCalledTimes(1);
        expect(onSelect).toHaveBeenCalledWith(expect.objectContaining({ target: { value: 'bar' } }));
    });
});
