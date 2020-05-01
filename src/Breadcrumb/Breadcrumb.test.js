import Breadcrumb from './Breadcrumb';
import { mount } from 'enzyme';
import React from 'react';

describe('<Breadcrumb />', () => {

    describe('Prop spreading', () => {
        test('should allow props to be spread to the Breadcrumb component', () => {
            const element = mount(<Breadcrumb data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the BreadcrumbItem component', () => {
            const element = mount(<Breadcrumb.Item data-sample='Sample' name='Name' />);

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
            render = () => <Breadcrumb ref={ref} />;
        }
        mount(<Test />);
        expect(ref.current.tagName).toEqual('UL');
        expect(ref.current.className).toEqual('fd-breadcrumb');
    });
});
