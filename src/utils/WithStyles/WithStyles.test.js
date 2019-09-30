/* eslint-disable react/no-multi-comp */
import { mount } from 'enzyme';
import React from 'react';
import TestComponent from './TestComponent';
import withStyles from './WithStyles';


describe('<withStyles', () => {
    const wrapper = mount(<TestComponent foo='foo' />);

    test('should hoist the wrapped component\'s static references', () => {
        expect(TestComponent.SubComponent).toBeDefined();
    });

    test('should retain wrapped component\'s display name', () => {
        expect(wrapper.name()).toBe('TestComponent');
    });

    test('should forward wrapped component\'s props', () => {
        expect(wrapper.props().foo).toBe('foo');
    });

    test('should forward the wrapped functional component\'s ref', () => {
        let ref;
        class Test extends React.Component {
            constructor(props) {
                super(props);
                ref = React.createRef();
            }
            render = () => <TestComponent ref={ref}>Button</TestComponent>;
        }
        mount(<Test />);
        expect(ref.current.tagName).toEqual('DIV');
    });
    test('should forward the wrapped class component\'s ref', () => {
        class TargetComponent extends React.Component {
            render() {
                return null;
            }
        }

        const StyledTarget = withStyles(TargetComponent);
        const ref = React.createRef();
        mount(
            <React.Fragment>
                <StyledTarget ref={ref} />
            </React.Fragment>
        );

        expect(ref.current).toBeInstanceOf(TargetComponent);

    });
});
