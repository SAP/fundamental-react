import InfoLabel from './InfoLabel';
import { mount } from 'enzyme';
import React from 'react';

describe('<InfoLabel />', () => {

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
