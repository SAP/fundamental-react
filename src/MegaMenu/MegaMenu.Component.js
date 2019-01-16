import React from 'react';
import { Description, DocsText, DocsTile, Header, Import, Properties, Separator } from '../_playground';
import { MegaMenu, MegaMenuGroup, MegaMenuList } from '../';

export const MegaMenuComponent = () => {
    const defaultMegaMenuCode = `<MegaMenu>
    <MegaMenuGroup title="Group Title">
        <MegaMenuList items=
            {[
                { id: 'item_1', url: '#', name: 'Link Item' },
                { id: 'item_2', url: '#', name: 'Link Item', hasChild: true, child: [
                    { id: 'subitem_21', url: '#', name: 'Link' },
                    { id: 'subitem_22', url: '#', name: 'Link' },
                    { id: 'subitem_23', url: '#', name: 'Link' },
                    { id: 'subitem_24', url: '#', name: 'Link' }]
                },
                { id: 'item_3', url: '#', name: 'Link Item' },
                { id: 'item_4', url: '#', name: 'Link Item' }
            ]}>
        </MegaMenuList>
    </MegaMenuGroup>
    <MegaMenuGroup title="Group Title">
        <MegaMenuList items=
            {[
                { id: 'item_6', link: '#', name: 'Link Item' },
                { id: 'item_7', link: '#', name: 'Link Item' },
                { id: 'item_8', link: '#', name: 'Link Item', hasChild: true, child: [
                    { id: 'subitem_81', link: '#', name: 'Link' },
                    { id: 'subitem_82', link: '#', name: 'Link' },
                    { id: 'subitem_83', link: '#', name: 'Link' },
                    { id: 'subitem_84', link: '#', name: 'Link' }]
                },
                { id: 'item_9', link: '#', name: 'Link Item' },
                
            ]}>
        </MegaMenuList>
    </MegaMenuGroup>
</MegaMenu>`;


    return (
        <div>
            <Header>Mega Menu</Header>
            <Description>Mega menu is used in conjunction with Context Switcher within the Global Navigation (link to Global Nav page) and supports two levels within a hierarchy.</Description>
            <Import module='MegaMenu, MegaMenuList, MegaMenuGroup' path='/fundamental-react/src/' />

            <Separator />

            <Properties properties={[
                { name: 'items', description: 'array - an array of objects with keys \'id\', \'url\' or \'link\', \'name\', \'hasChild\', and \'child\' setting the attributes of the items.' },
                { name: 'id', description: 'string - the \'id\' of the link.' },
                { name: 'url', description: 'string - href attribute of <a> tag. Use either \'url\' or \'link\'.' },
                { name: 'link', description: 'string - a router link. Use either \'url\' or \'link\'.' },
                { name: 'name', description: 'string - the \'name\' of the link.' },
                { name: 'hasChild', description: 'bool - when set to \'true\' enables a second level of navigation.' },
                { name: 'child', description: 'array - an array of objects with keys \'id\', \'url\' or \'link\', and \'name\' setting the attributes of the subitems.' }

            ]} type='Inputs' />

            <Separator />

            <h2>Default MegaMenu</h2>
            <DocsTile>
                <MegaMenu>
                    <MegaMenuGroup title='Group Title'>
                        <MegaMenuList items={[
                            { id: 'item_1', url: '#', name: 'Link Item' },
                            { id: 'item_2', url: '#', name: 'Link Item', hasChild: true, child: [
                                { id: 'subitem_21', url: '#', name: 'Link' },
                                { id: 'subitem_22', url: '#', name: 'Link' },
                                { id: 'subitem_23', url: '#', name: 'Link' },
                                { id: 'subitem_24', url: '#', name: 'Link' }]
                            },
                            { id: 'item_3', url: '#', name: 'Link Item' },
                            { id: 'item_4', url: '#', name: 'Link Item' }
                        ]} />
                    </MegaMenuGroup>
                    <MegaMenuGroup title='Group Title'>
                        <MegaMenuList items={[
                            { id: 'item_6', link: '#', name: 'Link Item' },
                            { id: 'item_7', link: '#', name: 'Link Item' },
                            { id: 'item_8', link: '#', name: 'Link Item', hasChild: true, child: [
                                { id: 'subitem_81', link: '#', name: 'Link' },
                                { id: 'subitem_82', link: '#', name: 'Link' },
                                { id: 'subitem_83', link: '#', name: 'Link' },
                                { id: 'subitem_84', link: '#', name: 'Link' }]
                            },
                            { id: 'item_9', link: '#', name: 'Link Item' }

                        ]} />
                    </MegaMenuGroup>
                </MegaMenu>
            </DocsTile>
            <DocsText>{defaultMegaMenuCode}</DocsText>

            <Separator />
        </div>
    );
};
