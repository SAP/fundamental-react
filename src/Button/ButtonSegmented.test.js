import ButtonSegmented from './ButtonSegmented';
import { mount } from 'enzyme';
import React from 'react';

describe('<ButtonSegmented />', () => {
    describe('Prop spreading', () => {
        test('should allow props to be spread to the ButtonSegmented component', () => {
            const element = mount(<ButtonSegmented data-sample='Sample' />);

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
            render = () => <ButtonSegmented ref={ref} />;
        }
        mount(<Test />);
        expect(ref.current.tagName).toEqual('DIV');
        expect(ref.current.className).toEqual('fd-segmented-button');
    });
});
