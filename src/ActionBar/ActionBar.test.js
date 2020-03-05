import ActionBar from './ActionBar';
import Button from '../Button/Button';
import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

describe('<ActionBar />', () => {
    const basicActionBar = (
        <ActionBar
            actions={(<button>Button</button>)}
            description={'Action Bar Description'}
            title={'Page Title'} />
    );

    const noBackActionBar = (
        <ActionBar
            actions={(<><Button>Button</Button>
                <Button option='emphasized'>Button</Button></>
            )}
            description='Description'
            title='Page Title' />
    );

    const backActionBar = (
        <ActionBar
            actions={(<><Button>Button</Button>
                <Button option='emphasized'>Button</Button></>
            )}
            description='Description'
            onClick={() => {}}
            title='Page Title' />
    );

    const noDescription = (
        <ActionBar
            actions={(<><Button>Button</Button>
                <Button option='emphasized'>Button</Button></>
            )}
            title='Page Title' />
    );

    const noActions = (
        <ActionBar
            title='Page Title' />
    );

    test('create basic Action Bar', () => {
        let component = renderer.create(basicActionBar);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        component = renderer.create(noBackActionBar);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        component = renderer.create(backActionBar);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        component = renderer.create(noDescription);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        component = renderer.create(noActions);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    describe('Prop spreading', () => {
        test('should allow props to be spread to the ActionBar component', () => {
            const element = mount(<ActionBar data-sample='Sample' title='Page Title' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the back Button component', () => {
            const element = mount(<ActionBar buttonProps={{ 'data-sample': 'Sample' }} onBackClick={() => {}}
                title='Page Title' />);

            expect(
                element.find('.sap-icon--navigation-left-arrow').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the title', () => {
            const element = mount(<ActionBar title='Page Title' titleProps={{ 'data-sample': 'Sample' }} />);

            expect(
                element.find('.fd-action-bar__title').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the action container', () => {
            const element = mount(<ActionBar actionProps={{ 'data-sample': 'Sample' }} actions={(<button>Button</button>)}
                title='Page Title' />);

            expect(
                element.find('.fd-action-bar__actions').getDOMNode().attributes['data-sample'].value
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
            render = () => <ActionBar ref={ref} title='Page Title' />;
        }
        mount(<Test />);

        expect(ref.current.tagName).toEqual('DIV');
        expect(ref.current.className).toEqual('fd-action-bar');
    });
});
