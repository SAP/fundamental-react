import React from 'react'
import { } from '../'
import { DocsTile, DocsText, Separator, Header, Description, Import, Properties } from '../'
import { MegaMenu, MegaMenuList, MegaMenuGroup } from '../'

export const MegaMenuComponent = () => {
    const defaultMegaMenuCode = `<MegaMenu>
    <MegaMenuGroup title="Group Title">
        <MegaMenuList links=
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
        <MegaMenuList links=
            {[
                { id: 'item_6', url: '#', name: 'Link Item' },
                { id: 'item_7', url: '#', name: 'Link Item' },
                { id: 'item_8', url: '#', name: 'Link Item', hasChild: true, child: [
                    { id: 'subitem_81', url: '#', name: 'Link' },
                    { id: 'subitem_82', url: '#', name: 'Link' },
                    { id: 'subitem_83', url: '#', name: 'Link' },
                    { id: 'subitem_84', url: '#', name: 'Link' }]
                },
                { id: 'item_9', url: '#', name: 'Link Item' },
                
            ]}>
        </MegaMenuList>
    </MegaMenuGroup>
</MegaMenu>`


    return (
        <div>
            <Header>Mega Menu</Header>
            <Description>Mega menu is used in conjunction with Context Switcher within the Global Navigation (link to Global Nav page) and supports two levels within a hierarchy.</Description>
            <Import module="MegaMenu, MegaMenuList, MegaMenuGroup" path="/fundamental-react/src/" />

            <Separator />

            <Properties type="Inputs" properties=
                {[
                    { name: 'links', description: 'Array - an array of objects with keys \'id\', \'url\', \'name\', \'hasChild\', and \'child\' setting the attributes of the links.' },
                    { name: 'id', description: 'String - the \'id\' of the link.' },
                    { name: 'url', description: 'String - the \'url\' of the link.' },
                    { name: 'name', description: 'String - the \'name\' of the link.' },
                    { name: 'hasChild', description: 'Bool - when set to \'true\' enables a second level of navigation.' },
                    { name: 'child', description: 'Array - an array of objects with keys \'id\', \'url\', and \'name\' setting the attributes of the sublinks' }

                ]} />

            <Separator />

            <h2>Default MegaMenu</h2>
            <DocsTile>
                <MegaMenu>
                    <MegaMenuGroup title="Group Title">
                        <MegaMenuList links=
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
                        <MegaMenuList links=
                            {[
                                { id: 'item_6', url: '#', name: 'Link Item' },
                                { id: 'item_7', url: '#', name: 'Link Item' },
                                { id: 'item_8', url: '#', name: 'Link Item', hasChild: true, child: [
                                    { id: 'subitem_81', url: '#', name: 'Link' },
                                    { id: 'subitem_82', url: '#', name: 'Link' },
                                    { id: 'subitem_83', url: '#', name: 'Link' },
                                    { id: 'subitem_84', url: '#', name: 'Link' }]
                                },
                                { id: 'item_9', url: '#', name: 'Link Item' },
                                
                            ]}>
                        </MegaMenuList>
                    </MegaMenuGroup>
                </MegaMenu>
            </DocsTile>
            <DocsText>{defaultMegaMenuCode}</DocsText>

            <Separator />
        </div>
    );
}