import ActionBar from './ActionBar';
import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

describe('<ActionBar />', () => {
    const basicActionBar = (
        <ActionBar className='blue'>
            <ActionBar.Back className='blue' />
            <ActionBar.Header
                className='blue'
                description={'Action Bar Description'}
                title={'Page Title'} />
            <ActionBar.Actions className='blue'>
                <button>Button</button>
            </ActionBar.Actions>
        </ActionBar>
    );

    const basicActionBarNoClass = (
        <ActionBar>
            <ActionBar.Back className='blue' />
            <ActionBar.Header
                className='blue'
                description={'Action Bar Description'}
                title={'Page Title'} />
            <ActionBar.Actions className='blue'>
                <button>Button</button>
            </ActionBar.Actions>
        </ActionBar>
    );

    test('create basic Action Bar', () => {
        let component = renderer.create(basicActionBar);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        component = renderer.create(basicActionBarNoClass);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    describe('Prop spreading', () => {
        test('should allow props to be spread to the ActionBar component', () => {
            const element = mount(<ActionBar data-sample='Sample' />);

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
            render = () => <ActionBar ref={ref} />;
        }
        mount(<Test />);

        expect(ref.current.tagName).toEqual('DIV');
        expect(ref.current.className).toEqual('fd-action-bar');
    });
});
