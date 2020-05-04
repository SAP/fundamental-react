import Link from './Link';
import { mount } from 'enzyme';
import React from 'react';

describe('<Link />', () => {
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

    test('forwards the ref', () => {
        let ref;
        class Test extends React.Component {
            constructor(props) {
                super(props);
                ref = React.createRef();
            }
            render = () => <Link ref={ref} />;
        }
        mount(<Test />);
        expect(ref.current.tagName).toEqual('A');
        expect(ref.current.className).toEqual('fd-link');
    });
});
