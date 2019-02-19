import path from 'path';
import React from 'react';
import { Tree } from '../';
import { Description, DocsText, DocsTile, Header, Import, Properties, Separator } from '../_playground';

export const TreeComponent = () => {
    const treeCode = `headers={['Column Header', 'Column Header 1 ', 'Column Header 2', 'Status']}
    treeData={[
        {
            id: '1', hasChildren: true,
            values: ['First Level', 'Data Col 2', 'Data Col 3', 'INACTIVE'],
            children: [
                {
                    id: '2', hasChildren: true,
                    values: ['Child 1', 'Data Col 2', 'Data Col 3', 'INACTIVE'],
                    children: [
                        {
                            id: '3', hasChildren: true,
                            values: ['Grandchild 1', 'Data Col 2', 'Data Col 3', 'INACTIVE'],
                            children: [
                                {
                                    id: '4', hasChildren: false,
                                    values: ['GreatGrandchild 1', 'Data Col 2', 'Data Col 3', 'INACTIVE']
                                }
                            ]
                        }
                    ]
                },
                {
                    id: '5', hasChildren: false,
                    values: ['Child 2', 'Data Col 2', 'Data Col 3', 'INACTIVE']
                }
            ]
        },



        {
            id: '6', hasChildren: true,
            values: ['Row 2', 'Data Col 2', 'Data Col 3', 'DEFAULT'],
            children: [
                {
                    id: '7', hasChildren: false,
                    values: ['Child 1', 'Data Col 2', 'Data Col 3', 'INACTIVE'],
                },
                {
                    id: '8', hasChildren: false,
                    values: ['Child 2', 'Data Col 2', 'Data Col 3', 'INACTIVE']
                }
            ]
        },



        {
            id: '9', hasChild: true,
            values: ['Row 3', 'Data Col 2', 'Data Col 3', 'INACTIVE']
        },

        {
            id: '10', hasChildren: true,
            values: ['Row 4', 'Data Col 2', 'Data Col 3', 'INACTIVE'],
            children: [
                {
                    id: '11', hasChildren: false,
                    values: ['Child 1', 'Data Col 2', 'Data Col 3', 'INACTIVE'],
                }
            ]
        }
    ]}`;

    const treeCodeUrl = `headers={['Column Header', 'Column Header 1 ', 'Column Header 2', 'Status']}
    treeData={[
        {
            id: '1', hasChildren: true,
            values: ['First Level', ' ', ' ', ' '],
            children: [
                {
                    id: '2', hasChildren: false,
                    values: [{
                        display: ''
                    },{
                        displayText: 'Google',
                        linkUrl: 'http://google.com',
                    },
                    {
                        displayText: 'Bing',
                        linkUrl: 'http://bing.com'
                    },
                    {
                        displayText: 'Yahoo',
                        linkUrl: 'http://yahoo.com'
                    }]
                }
            ]
        }
    ]}`;


    return (
        <div>
            <Header>Tree</Header>
            <Description>
                A **Tree** is used to display data in a visual hierarchy. Items that contain additional items
                are called nodes, while items that do not contain any other items are called leaves. If available,
                a single top-most node is called a "root" node. Apart from the hierarchical structure of its nodes
                and leaves, a tree is similar to a list.
            </Description>
            <Import sourceModulePath={path.join(__dirname, './Tree')} />

            <Separator />

            <Properties sourceModulePath={path.join(__dirname, './Tree')} />

            <Separator />

            <h2>Tree with multiple levels and actions</h2>
            <DocsTile>
                <Tree
                    headers={['Column Header', 'Column Header 1 ', 'Column Header 2', 'Status']}
                    treeData={[
                        {
                            id: '1', hasChildren: true,
                            values: ['First Level', 'Data Col 2', 'Data Col 3', 'INACTIVE'],
                            children: [
                                {
                                    id: '2', hasChildren: true,
                                    values: ['Child 1', 'Data Col 2', 'Data Col 3', 'INACTIVE'],
                                    children: [
                                        {
                                            id: '3', hasChildren: true,
                                            values: ['Grandchild 1', 'Data Col 2', 'Data Col 3', 'INACTIVE'],
                                            children: [
                                                {
                                                    id: '4', hasChildren: false,
                                                    values: ['GreatGrandchild 1', 'Data Col 2', 'Data Col 3', 'INACTIVE']
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    id: '5', hasChildren: false,
                                    values: ['Child 2', 'Data Col 2', 'Data Col 3', 'INACTIVE']
                                }
                            ]
                        },



                        {
                            id: '6', hasChildren: true,
                            values: ['Row 2', 'Data Col 2', 'Data Col 3', 'DEFAULT'],
                            children: [
                                {
                                    id: '7', hasChildren: false,
                                    values: ['Child 1', 'Data Col 2', 'Data Col 3', 'INACTIVE']
                                },
                                {
                                    id: '8', hasChildren: false,
                                    values: ['Child 2', 'Data Col 2', 'Data Col 3', 'INACTIVE']
                                }
                            ]
                        },



                        {
                            id: '9', hasChild: true,
                            values: ['Row 3', 'Data Col 2', 'Data Col 3', 'INACTIVE']
                        },

                        {
                            id: '10', hasChildren: true,
                            values: ['Row 4', 'Data Col 2', 'Data Col 3', 'INACTIVE'],
                            children: [
                                {
                                    id: '11', hasChildren: false,
                                    values: ['Child 1', 'Data Col 2', 'Data Col 3', 'INACTIVE']
                                }
                            ]
                        }
                    ]} />

            </DocsTile>
            <DocsText>{treeCode}</DocsText>

            <Separator />

            <h2>Rich Tree</h2>
            <Description>
                This is an example of a tree with "rich" cells.
            </Description>

            <DocsTile>
                <Tree
                    headers={['Column Header', 'Column Header 1 ', 'Column Header 2', 'Status']}
                    treeData={[
                        {
                            id: '1', hasChildren: true,
                            values: ['First Level', ' ', ' ', ' '],
                            children: [
                                {
                                    id: '2', hasChildren: false,
                                    values: [{
                                        display: ''
                                    }, {
                                        displayText: 'Google',
                                        linkUrl: 'http://google.com'
                                    },
                                    {
                                        displayText: 'Bing',
                                        linkUrl: 'http://bing.com'
                                    },
                                    {
                                        displayText: 'Yahoo',
                                        linkUrl: 'http://yahoo.com'
                                    }]
                                }
                            ]
                        }
                    ]} />

            </DocsTile>
            <DocsText>{treeCodeUrl}</DocsText>
        </div>
    );
};

