import Badge from './Badge';
import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

describe('<Badge />', () => {
    const defaultBadge = <Badge>Default</Badge>;
    const typeBadge = <Badge type='success'>Default</Badge>;

    const defaultPill = <Badge modifier='pill'>Default</Badge>;
    const typePill = (
        <Badge modifier='pill' type='success'>
            Default
        </Badge>
    );

    const defaultFilledBadge = (
        <Badge className='blue' modifier='filled'>
            Default
        </Badge>
    );
    const typeFillBadge = (
        <Badge modifier='filled' type='success'>
            Default
        </Badge>
    );

    test('create badges, pills and filled badges', () => {
        // create default badge
        let component = renderer.create(defaultBadge);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // create success type badge
        component = renderer.create(typeBadge);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // create default pill
        component = renderer.create(defaultPill);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // create success type pill
        component = renderer.create(typePill);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // create filled default badge
        component = renderer.create(defaultFilledBadge);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // create filled success type badge
        component = renderer.create(typeFillBadge);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    describe('Prop spreading', () => {
        test('should allow props to be spread to the Badge component', () => {
            const element = mount(<Badge data-sample='Sample' />);

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
            render = () => <Badge ref={ref} />;
        }
        mount(<Test />);
        expect(ref.current.tagName).toEqual('SPAN');
        expect(ref.current.className).toEqual('fd-badge');
    });
});
