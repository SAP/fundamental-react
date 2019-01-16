import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import { MegaMenu, MegaMenuGroup, MegaMenuList } from './MegaMenu';

describe('<MegaMenu />', () => {
    const menuListURL = (
        <MegaMenuList
            items={[
                { id: 'item_1', url: '#', name: 'Link Item' },
                {
                    id: 'item_2',
                    url: '#',
                    name: 'Link Item',
                    hasChild: true,
                    child: [
                        { id: 'subitem_21', url: '#', name: 'Link' },
                        { id: 'subitem_22', url: '#', name: 'Link' },
                        { id: 'subitem_23', url: '#', name: 'Link' },
                        { id: 'subitem_24', url: '#', name: 'Link' }
                    ]
                },
                { id: 'item_3', url: '#', name: 'Link Item' },
                { id: 'item_4', url: '#', name: 'Link Item' }
            ]} />
    );
    const megaMenu = (
        <MegaMenu>
            <MegaMenuGroup title='Group Title'>{menuListURL}</MegaMenuGroup>
        </MegaMenu>
    );

    const menuListLink = (
        <MegaMenuList
            className='blue'
            items={[
                { id: 'item_6', link: '#', name: 'Link Item' },
                { id: 'item_7', link: '#', name: 'Link Item' },
                {
                    id: 'item_8',
                    link: '#',
                    name: 'Link Item',
                    hasChild: true,
                    child: [
                        { id: 'subitem_81', link: '#', name: 'Link' },
                        { id: 'subitem_82', link: '#', name: 'Link' },
                        { id: 'subitem_83', link: '#', name: 'Link' },
                        { id: 'subitem_84', link: '#', name: 'Link' }
                    ]
                },
                { id: 'item_9', link: '#', name: 'Link Item' }
            ]} />
    );

    const megaMenuLink = (
        <MegaMenu className='blue'>
            <MegaMenuGroup className='red' title='Group Title'>
                {menuListLink}
            </MegaMenuGroup>
        </MegaMenu>
    );

    test('create mega menu', () => {
        // mega menu with urls
        let component = renderer.create(megaMenu);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // mega menu with links
        component = renderer.create(megaMenuLink);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('click on URL menu item', () => {
        // url click on mega menu
        const urlWrapper = mount(menuListURL);

        expect(urlWrapper.state('selectedItem')).toEqual('item_2');
        urlWrapper
            .find('a.fd-mega-menu__link')
            .at(2)
            .simulate('click', [{}, { id: 'item_3' }]);
        expect(urlWrapper.state('selectedItem')).toEqual('item_3');

        urlWrapper
            .find('a.fd-mega-menu__link')
            .at(1)
            .simulate('click', [{}, { id: 'item_2' }]);

        // sub url click on mega menu
        urlWrapper
            .find('a.fd-mega-menu__sublink')
            .at(1)
            .simulate('click', [{}, { id: 'subitem_22' }]);

        expect(urlWrapper.state('selectedItem')).toEqual('subitem_22');
    });

    test('click on LINK menu item', () => {
        // link on mega menu
        const linkWrapper = mount(menuListLink);

        expect(linkWrapper.state('selectedItem')).toEqual('item_2');
        linkWrapper
            .find('a.fd-mega-menu__link')
            .at(2)
            .simulate('click', [{}, { id: 'item_8' }]);
        expect(linkWrapper.state('selectedItem')).toEqual('item_8');

        // sub link on mega menu
        linkWrapper
            .find('a.fd-mega-menu__sublink')
            .at(1)
            .simulate('click', [{}, { id: 'subitem_82' }]);
        expect(linkWrapper.state('selectedItem')).toEqual('subitem_82');
    });

    describe('Prop spreading', () => {
        test('should allow props to be spread to the MegaMenu component', () => {
            const element = mount(<MegaMenu data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        xtest('should allow props to be spread to the MegaMenuList component', () => {
            // TODO: placeholder for this test description once that functionality is built
            const items = [
                { id: 'item_1', url: '#', name: 'Link Item' },
                { id: 'item_2', url: '#', name: 'Link Item' },
                { id: 'item_3', url: '#', name: 'Link Item' }
            ];
            const element = mount(<MegaMenuList data-sample='Sample' items={items} />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        xtest('should allow props to be spread to the MegaMenuGroup component', () => {
            // TODO: placeholder for this test description once that functionality is built
            const element = mount(<MegaMenuGroup data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        xtest('should allow props to be spread to the MegaMenuGroup component\'s h1 element', () => {
            // TODO: placeholder for this test description once that functionality is built
        });
    });
});
