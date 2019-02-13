import React from 'react';
import { Description, DocsText, DocsTile, Header, Import, Properties, Separator } from '../_playground';
import { Tree, TreeCell, TreeHead, TreeRow, TreeView } from '../';

export const TreeViewComponent = () => {
    const treeViewCode = `
<TreeView>
    <TreeHead>
        <TreeCell>Column Header 1</TreeCell>
        <TreeCell>Column Header 2</TreeCell>
        <TreeCell>Column Header 3</TreeCell>
        <TreeCell>Column Header 4</TreeCell>
    </TreeHead>
    <Tree>
        <TreeRow>
            <TreeCell>Row 1</TreeCell>
            <TreeCell>Data Col 2</TreeCell>
            <TreeCell>Data Col 3</TreeCell>
            <TreeCell>Data Col 4</TreeCell>
            <Tree>
                <TreeRow>
                    <TreeCell>Child 1</TreeCell>
                    <TreeCell>Data Col 2</TreeCell>
                    <TreeCell>Data Col 3</TreeCell>
                    <TreeCell>Data Col 4</TreeCell>
                    <Tree>
                        <TreeRow>
                            <TreeCell>Grandchild 1</TreeCell>
                            <TreeCell>Data Col 2</TreeCell>
                            <TreeCell>Data Col 3</TreeCell>
                            <TreeCell>Data Col 4</TreeCell>
                            <Tree>
                                <TreeRow>
                                    <TreeCell>Great Grandchild 1</TreeCell>
                                    <TreeCell>Data Col 2</TreeCell>
                                    <TreeCell>Data Col 3</TreeCell>
                                    <TreeCell>Data Col 4</TreeCell>
                                </TreeRow>
                            </Tree>
                        </TreeRow>
                    </Tree>
                </TreeRow>
                <TreeRow>
                    <TreeCell>Child 2</TreeCell>
                    <TreeCell>Data Col 2</TreeCell>
                    <TreeCell>Data Col 3</TreeCell>
                    <TreeCell>Data Col 4</TreeCell>
                </TreeRow>
            </Tree>
        </TreeRow>
        <TreeRow>
            <TreeCell>Row 2</TreeCell>
            <TreeCell>Data Col 2</TreeCell>
            <TreeCell>Data Col 3</TreeCell>
            <TreeCell>Data Col 4</TreeCell>
            <Tree>
                <TreeRow>
                    <TreeCell>Child 1</TreeCell>
                    <TreeCell>Data Col 2</TreeCell>
                    <TreeCell>Data Col 3</TreeCell>
                    <TreeCell>Data Col 4</TreeCell>
                </TreeRow>
                <TreeRow>
                    <TreeCell>Child 2</TreeCell>
                    <TreeCell>Data Col 2</TreeCell>
                    <TreeCell>Data Col 3</TreeCell>
                    <TreeCell>Data Col 4</TreeCell>
                </TreeRow>
            </Tree>
        </TreeRow>
        <TreeRow>
            <TreeCell>Row 3</TreeCell>
            <TreeCell>Data Col 2</TreeCell>
            <TreeCell>Data Col 3</TreeCell>
            <TreeCell>Data Col 4</TreeCell>
        </TreeRow>
        <TreeRow>
            <TreeCell>Row 4</TreeCell>
            <TreeCell>Data Col 2</TreeCell>
            <TreeCell>Data Col 3</TreeCell>
            <TreeCell>Data Col 4</TreeCell>
            <Tree>
                <TreeRow>
                    <TreeCell>Child 1</TreeCell>
                    <TreeCell>Data Col 2</TreeCell>
                    <TreeCell>Data Col 3</TreeCell>
                    <TreeCell>Data Col 4</TreeCell>
                </TreeRow>
            </Tree>
        </TreeRow>
    </Tree>
</TreeView>`;

    const treeViewCodeRich = `
<TreeView>
    <TreeHead>
        <TreeCell>Column Header 1</TreeCell>
        <TreeCell>Column Header 2</TreeCell>
        <TreeCell>Column Header 3</TreeCell>
        <TreeCell>Column Header 4</TreeCell>
    </TreeHead>
    <Tree>
        <TreeRow>
            <TreeCell>Row 1</TreeCell>
            <Tree>
                <TreeRow>
                    <TreeCell />
                    <TreeCell><a href='http://www.google.com'>Google</a></TreeCell>
                    <TreeCell><a href='http://www.bing.com'>Bing</a></TreeCell>
                    <TreeCell><a href='http://www.yahoo.com'>Yahoo</a></TreeCell>
                </TreeRow>
            </Tree>
        </TreeRow>
    </Tree>
</TreeView>`;


    return (
        <div>
            <Header>TreeView</Header>
            <Description>
                A **TreeView** is used to display data in a visual hierarchy. Items that contain additional items
                are called nodes, while items that do not contain any other items are called leaves. If available,
                a single top-most node is called a "root" node. Apart from the hierarchical structure of its nodes
                and leaves, a tree is similar to a list.
            </Description>
            <Import sourceModule={require('./TreeView')} />

            <Separator />

            <Properties sourceModule={require('./TreeView')} />

            <Separator />

            <h2>TreeView with multiple levels and actions</h2>
            <DocsTile>
                <TreeView>
                    <TreeHead>
                        <TreeCell>Column Header 1</TreeCell>
                        <TreeCell>Column Header 2</TreeCell>
                        <TreeCell>Column Header 3</TreeCell>
                        <TreeCell>Column Header 4</TreeCell>
                    </TreeHead>
                    <Tree>
                        <TreeRow>
                            <TreeCell>Row 1</TreeCell>
                            <TreeCell>Data Col 2</TreeCell>
                            <TreeCell>Data Col 3</TreeCell>
                            <TreeCell>Data Col 4</TreeCell>
                            <Tree>
                                <TreeRow>
                                    <TreeCell>Child 1</TreeCell>
                                    <TreeCell>Data Col 2</TreeCell>
                                    <TreeCell>Data Col 3</TreeCell>
                                    <TreeCell>Data Col 4</TreeCell>
                                    <Tree>
                                        <TreeRow>
                                            <TreeCell>Grandchild 1</TreeCell>
                                            <TreeCell>Data Col 2</TreeCell>
                                            <TreeCell>Data Col 3</TreeCell>
                                            <TreeCell>Data Col 4</TreeCell>
                                            <Tree>
                                                <TreeRow>
                                                    <TreeCell>Great Grandchild 1</TreeCell>
                                                    <TreeCell>Data Col 2</TreeCell>
                                                    <TreeCell>Data Col 3</TreeCell>
                                                    <TreeCell>Data Col 4</TreeCell>
                                                </TreeRow>
                                            </Tree>
                                        </TreeRow>
                                    </Tree>
                                </TreeRow>
                                <TreeRow>
                                    <TreeCell>Child 2</TreeCell>
                                    <TreeCell>Data Col 2</TreeCell>
                                    <TreeCell>Data Col 3</TreeCell>
                                    <TreeCell>Data Col 4</TreeCell>
                                </TreeRow>
                            </Tree>
                        </TreeRow>
                        <TreeRow>
                            <TreeCell>Row 2</TreeCell>
                            <TreeCell>Data Col 2</TreeCell>
                            <TreeCell>Data Col 3</TreeCell>
                            <TreeCell>Data Col 4</TreeCell>
                            <Tree>
                                <TreeRow>
                                    <TreeCell>Child 1</TreeCell>
                                    <TreeCell>Data Col 2</TreeCell>
                                    <TreeCell>Data Col 3</TreeCell>
                                    <TreeCell>Data Col 4</TreeCell>
                                </TreeRow>
                                <TreeRow>
                                    <TreeCell>Child 2</TreeCell>
                                    <TreeCell>Data Col 2</TreeCell>
                                    <TreeCell>Data Col 3</TreeCell>
                                    <TreeCell>Data Col 4</TreeCell>
                                </TreeRow>
                            </Tree>
                        </TreeRow>
                        <TreeRow>
                            <TreeCell>Row 3</TreeCell>
                            <TreeCell>Data Col 2</TreeCell>
                            <TreeCell>Data Col 3</TreeCell>
                            <TreeCell>Data Col 4</TreeCell>
                        </TreeRow>
                        <TreeRow>
                            <TreeCell>Row 4</TreeCell>
                            <TreeCell>Data Col 2</TreeCell>
                            <TreeCell>Data Col 3</TreeCell>
                            <TreeCell>Data Col 4</TreeCell>
                            <Tree>
                                <TreeRow>
                                    <TreeCell>Child 1</TreeCell>
                                    <TreeCell>Data Col 2</TreeCell>
                                    <TreeCell>Data Col 3</TreeCell>
                                    <TreeCell>Data Col 4</TreeCell>
                                </TreeRow>
                            </Tree>
                        </TreeRow>
                    </Tree>
                </TreeView>
            </DocsTile>
            <DocsText>{treeViewCode}</DocsText>

            <Separator />

            <h2>Rich TreeView</h2>
            <Description>
                This is an example of a tree view with "rich" cells.
            </Description>
            <DocsTile>
                <TreeView>
                    <TreeHead>
                        <TreeCell>Column Header 1</TreeCell>
                        <TreeCell>Column Header 2</TreeCell>
                        <TreeCell>Column Header 3</TreeCell>
                        <TreeCell>Column Header 4</TreeCell>
                    </TreeHead>
                    <Tree>
                        <TreeRow>
                            <TreeCell>Row 1</TreeCell>
                            <Tree>
                                <TreeRow>
                                    <TreeCell />
                                    <TreeCell><a href='http://www.google.com'>Google</a></TreeCell>
                                    <TreeCell><a href='http://www.bing.com'>Bing</a></TreeCell>
                                    <TreeCell><a href='http://www.yahoo.com'>Yahoo</a></TreeCell>
                                </TreeRow>
                            </Tree>
                        </TreeRow>
                    </Tree>
                </TreeView>
            </DocsTile>
            <DocsText>{treeViewCodeRich}</DocsText>
        </div>
    );
};

