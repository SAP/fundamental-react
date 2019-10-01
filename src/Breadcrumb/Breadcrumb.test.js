import Breadcrumb from './Breadcrumb';
import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import { Link, MemoryRouter } from 'react-router-dom';

describe('<Breadcrumb />', () => {
    const defaultBreadCrumb = (
        <Breadcrumb>
            <Breadcrumb.Item name='Link Text' url='#' />
            <Breadcrumb.Item name='Link Text' url='#' />
            <Breadcrumb.Item name='Link Text' />
        </Breadcrumb>
    );

    const breadCrumbRouterLink = (
        <MemoryRouter>
            <Breadcrumb className='blue'>
                <Breadcrumb.Item className='blue' />
                <Breadcrumb.Item>
                    <Link to='/'>Link Text</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <Link to='/'>Link Text</Link>
                </Breadcrumb.Item>
            </Breadcrumb>
        </MemoryRouter>
    );

    test('create default breadcrumbs', () => {
        const component = renderer.create(defaultBreadCrumb);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('create breadcrumbs using router links', () => {
        const component = renderer.create(breadCrumbRouterLink);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

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
