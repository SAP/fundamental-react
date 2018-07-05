import React from 'react'
import { Dropdown, DropdownList } from '../'
import { DocsTile, DocsText, Separator, Header, Description, Import, Properties } from '../'
import { Tree, TreeList } from '../'

export const TreeComponent = () => {
    const treeCode = ``


    return (
        <div>
            <Header>Tree</Header>
            <Description>A tree is used to display data in a visual hierarchy. Items that contain additional items are called nodes, while items that do not contain any other items are called leaves. If available, a single topmost node is called a root node. Apart from the hierarchical structure of its nodes and leaves, a tree is similar to a list.</Description>
            <Import module="Tree" path="/react-fundamental/src/" />

            <Separator />

            <Properties type="Inputs" properties=
                {[
                    { name: '', description: '' }
                ]} />

            <Separator />

            <h2>Tree with multiple levels and actions</h2>
            <DocsTile>
                <Tree
                    headers={['Column Header', 'Column Header', 'Column Header', 'Status', ' ']}
                    treeData={[
                        {
                            id: 'R1', hasChildren: true,
                            values: ['First Level', 'Data Col 2', 'Data Col 3', 'INACTIVE'],
                            children: [
                                {
                                    id: 'R1_Ch1', hasChildren: true,
                                    values: ['Child 1', 'Data Col 2', 'Data Col 3', 'INACTIVE'],
                                    children: [
                                        {
                                            id: 'R1_GrCh1', hasChildren: true,
                                            values: ['Grandchild 1', 'Data Col 2', 'Data Col 3', 'INACTIVE'],
                                            children: [
                                                {
                                                    id: 'R1_GrGrCh1', hasChildren: false,
                                                    values: ['GreatGrandchild 1', 'Data Col 2', 'Data Col 3', 'INACTIVE']
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    id: 'R1_Ch2', hasChildren: false,
                                    values: ['Child 2', 'Data Col 2', 'Data Col 3', 'INACTIVE']
                                }
                            ]
                        },



                        {
                            id: 'R2', hasChild: false,
                            values: ['Row 2', 'Data Col 2', 'Data Col 3', 'DEFAULT']
                        },



                        {
                            id: 'R3', hasChild: true,
                            values: ['Row 3', 'Data Col 2', 'Data Col 3', 'INACTIVE']
                        }
                    ]}
                >
                </Tree>

            </DocsTile>
            <DocsText>{treeCode}</DocsText>

        </div>
    );
}

{/* <Dropdown isContextual={true}>
    <DropdownList links=
        {[
            { id: '', url: '#', name: 'Edit' },
            { id: '', url: '#', name: 'Lock' },
            { id: '', url: '#', name: 'Duplicate' },
            { id: '', url: '#', name: 'Delete' }
        ]}>
    </DropdownList>
</Dropdown> */}