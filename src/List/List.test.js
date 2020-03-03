import List from './List';
import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

describe('<List />', () => {
    const defaultList = (
        <List>
            <List.Header>List Header</List.Header>
            <List.Item>
                <List.Text>List Item 1</List.Text>
            </List.Item>
            <List.Item>
                <List.Text>List Item 2</List.Text>
            </List.Item>
            <List.Item>
                <List.Text>List Item 3</List.Text>
            </List.Item>
            <List.Item>
                <List.Text>List Item 4</List.Text>
            </List.Item>
            <List.Footer>List Footer</List.Footer>
        </List>
    );
    const headerList = (
        <List>
            <List.Header>List Header</List.Header>
            <List.Item>
                <List.Text>List Item 1</List.Text>
            </List.Item>
            <List.Item>
                <List.Text>List Item 2</List.Text>
            </List.Item>
            <List.Footer>List Footer</List.Footer>
        </List>
    );

    const borderlessList = (
        <List noBorder>
            <List.Item>
                <List.Text>List Item 1</List.Text>
            </List.Item>
        </List>
    );

    const compactList = (
        <List compact>
            <List.Item>
                <List.Text>List Item 1</List.Text>
            </List.Item>
        </List>
    );

    const leftIconsList = (
        <List>
            <List.Header>List Header</List.Header>
            <List.Item>
                <List.Icon glyph='cart' />
                <List.Text>List Item 1</List.Text>
            </List.Item>
            <List.Item>
                <List.Icon glyph='wrench' />
                <List.Text>List Item 2</List.Text>
            </List.Item>
            <List.Item>
                <List.Icon glyph='lightbulb' />
                <List.Text>List Item 3</List.Text>
            </List.Item>
            <List.Item>
                <List.Icon glyph='history' />
                <List.Text>List Item 4</List.Text>
            </List.Item>
            <List.Footer>List Footer</List.Footer>
        </List>
    );

    const rightIconList = (
        <List>
            <List.Header>List Header</List.Header>
            <List.Item>
                <List.Text>List Item 1</List.Text>
                <List.Icon glyph='navigation-right-arrow' />
            </List.Item>
            <List.Item>
                <List.Text>List Item 2</List.Text>
                <List.Icon glyph='navigation-right-arrow' />
            </List.Item>
            <List.Item>
                <List.Text>List Item 3</List.Text>
                <List.Icon glyph='navigation-right-arrow' />
            </List.Item>
            <List.Item>
                <List.Text>List Item 4</List.Text>
                <List.Icon glyph='navigation-right-arrow' />
            </List.Item>
            <List.Footer>List Footer</List.Footer>
        </List>
    );

    const secondaryList = (
        <List>
            <List.Header>List Header</List.Header>
            <List.Item>
                <List.Text>List Item 1</List.Text>
                <List.Text secondary>Positive</List.Text>
            </List.Item>
            <List.Item>
                <List.Text>List Item 2</List.Text>
                <List.Text secondary>Negative</List.Text>
            </List.Item>
            <List.Item>
                <List.Text>List Item 3</List.Text>
                <List.Text secondary>Positive</List.Text>
            </List.Item>
            <List.Item>
                <List.Text>List Item 4</List.Text>
                <List.Text secondary>Negative</List.Text>
            </List.Item>
            <List.Footer>List Footer</List.Footer>
        </List>
    );

    test('create list group', () => {
        // create default list
        let component = renderer.create(defaultList);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // list with header + footer
        component = renderer.create(headerList);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // list with no borders
        component = renderer.create(borderlessList);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // list compact
        component = renderer.create(compactList);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // list with left icons
        component = renderer.create(leftIconsList);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // list with right icons
        component = renderer.create(rightIconList);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // list with secondary titles
        component = renderer.create(secondaryList);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    describe('Prop spreading', () => {
        test('should allow props to be spread to the List component', () => {
            const element = mount(<List data-sample='Sample' />);

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
            render = () => <List ref={ref} />;
        }
        mount(<Test />);
        expect(ref.current.tagName).toEqual('UL');
        expect(ref.current.className).toEqual('fd-list');
    });
});
