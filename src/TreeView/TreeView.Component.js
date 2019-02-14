import React from 'react';
import { Description, DocsText, DocsTile, Header, Import, Properties, Separator } from '../_playground';
import { Tree, TreeBranch, TreeCol, TreeHead, TreeItem, TreeRow, TreeView } from '../';

export const TreeViewComponent = () => {
    const simpleTreeViewCode = `
<TreeView>
    <Tree>
        <TreeItem>
            <TreeRow>
                <TreeCol>Row 1</TreeCol>
            </TreeRow>
        </TreeItem>
        <TreeItem>
            <TreeRow>
                <TreeCol>Row 2</TreeCol>
            </TreeRow>
            <TreeBranch>
                <TreeItem>
                    <TreeRow>
                        <TreeCol>Child 1</TreeCol>
                    </TreeRow>
                </TreeItem>
                <TreeItem>
                    <TreeRow>
                        <TreeCol>Child 2</TreeCol>
                    </TreeRow>
                </TreeItem>
            </TreeBranch>
        </TreeItem>
        <TreeItem>
            <TreeRow>
                <TreeCol>Row 3</TreeCol>
            </TreeRow>
            <TreeBranch>
                <TreeItem>
                    <TreeRow>
                        <TreeCol>Child 1</TreeCol>
                    </TreeRow>
                    <TreeBranch>
                        <TreeItem>
                            <TreeRow>
                                <TreeCol>Grandchild 1</TreeCol>
                            </TreeRow>
                        </TreeItem>
                        <TreeItem>
                            <TreeRow>
                                <TreeCol>Grandchild 2</TreeCol>
                            </TreeRow>
                        </TreeItem>
                    </TreeBranch>
                </TreeItem>
            </TreeBranch>
        </TreeItem>
    </Tree>
</TreeView>`;

    const treeViewCode = `
<TreeView>
    <TreeHead>
        <TreeCol>Column Header 1</TreeCol>
        <TreeCol>Column Header 2</TreeCol>
        <TreeCol>Column Header 3</TreeCol>
        <TreeCol>Column Header 4</TreeCol>
    </TreeHead>
    <Tree>
        <TreeItem>
            <TreeRow>
                <TreeCol>Row 1</TreeCol>
                <TreeCol>Data Col 2</TreeCol>
                <TreeCol>Data Col 3</TreeCol>
                <TreeCol>Data Col 4</TreeCol>
            </TreeRow>
            <TreeBranch>
                <TreeItem>
                    <TreeRow>
                        <TreeCol>Child 1</TreeCol>
                        <TreeCol>Data Col 2</TreeCol>
                        <TreeCol>Data Col 3</TreeCol>
                        <TreeCol>Data Col 4</TreeCol>
                    </TreeRow>
                    <TreeBranch>
                        <TreeItem>
                            <TreeRow>
                                <TreeCol>Grandchild 1</TreeCol>
                                <TreeCol>Data Col 2</TreeCol>
                                <TreeCol>Data Col 3</TreeCol>
                                <TreeCol>Data Col 4</TreeCol>
                            </TreeRow>
                            <TreeBranch>
                                <TreeItem>
                                    <TreeRow>
                                        <TreeCol>Great Grandchild 1</TreeCol>
                                        <TreeCol>Data Col 2</TreeCol>
                                        <TreeCol>Data Col 3</TreeCol>
                                        <TreeCol>Data Col 4</TreeCol>
                                    </TreeRow>
                                </TreeItem>
                            </TreeBranch>
                        </TreeItem>
                    </TreeBranch>
                </TreeItem>
                <TreeItem>
                    <TreeRow>
                        <TreeCol>Child 2</TreeCol>
                        <TreeCol>Data Col 2</TreeCol>
                        <TreeCol>Data Col 3</TreeCol>
                        <TreeCol>Data Col 4</TreeCol>
                    </TreeRow>
                </TreeItem>
            </TreeBranch>
        </TreeItem>
        <TreeItem>
            <TreeRow>
                <TreeCol>Row 2</TreeCol>
                <TreeCol>Data Col 2</TreeCol>
                <TreeCol>Data Col 3</TreeCol>
                <TreeCol>Data Col 4</TreeCol>
            </TreeRow>
            <TreeBranch>
                <TreeItem>
                    <TreeRow>
                        <TreeCol>Child 1</TreeCol>
                        <TreeCol>Data Col 2</TreeCol>
                        <TreeCol>Data Col 3</TreeCol>
                        <TreeCol>Data Col 4</TreeCol>
                    </TreeRow>
                </TreeItem>
                <TreeItem>
                    <TreeRow>
                        <TreeCol>Child 2</TreeCol>
                        <TreeCol>Data Col 2</TreeCol>
                        <TreeCol>Data Col 3</TreeCol>
                        <TreeCol>Data Col 4</TreeCol>
                    </TreeRow>
                </TreeItem>
            </TreeBranch>
        </TreeItem>
        <TreeItem>
            <TreeRow>
                <TreeCol>Row 3</TreeCol>
                <TreeCol>Data Col 2</TreeCol>
                <TreeCol>Data Col 3</TreeCol>
                <TreeCol>Data Col 4</TreeCol>
            </TreeRow>
        </TreeItem>
        <TreeItem>
            <TreeRow>
                <TreeCol>Row 4</TreeCol>
                <TreeCol>Data Col 2</TreeCol>
                <TreeCol>Data Col 3</TreeCol>
                <TreeCol>Data Col 4</TreeCol>
            </TreeRow>
            <TreeBranch>
                <TreeItem>
                    <TreeRow>
                        <TreeCol>Child 1</TreeCol>
                        <TreeCol>Data Col 2</TreeCol>
                        <TreeCol>Data Col 3</TreeCol>
                        <TreeCol>Data Col 4</TreeCol>
                    </TreeRow>
                </TreeItem>
            </TreeBranch>
        </TreeItem>
    </Tree>
</TreeView>`;

    const treeViewCodeRich = `
<TreeView>
    <TreeHead>
        <TreeCol>Column Header 1</TreeCol>
        <TreeCol>Column Header 2</TreeCol>
        <TreeCol>Column Header 3</TreeCol>
        <TreeCol>Column Header 4</TreeCol>
    </TreeHead>
    <Tree>
        <TreeItem>
            <TreeRow>
                <TreeCol>Row 1</TreeCol>
            </TreeRow>
            <TreeBranch>
                <TreeItem>
                    <TreeRow>
                        <TreeCol />
                        <TreeCol><a href='http://www.google.com'>Google</a></TreeCol>
                        <TreeCol><a href='http://www.bing.com'>Bing</a></TreeCol>
                        <TreeCol><a href='http://www.yahoo.com'>Yahoo</a></TreeCol>
                    </TreeRow>
                </TreeItem>
            </TreeBranch>
        </TreeItem>
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

            <h2>Simple TreeView</h2>
            <Description>
                This is an example of a simple tree view.
            </Description>
            <DocsTile>
                <TreeView>
                    <Tree>
                        <TreeItem>
                            <TreeRow>
                                <TreeCol>Row 1</TreeCol>
                            </TreeRow>
                        </TreeItem>
                        <TreeItem>
                            <TreeRow>
                                <TreeCol>Row 2</TreeCol>
                            </TreeRow>
                            <TreeBranch>
                                <TreeItem>
                                    <TreeRow>
                                        <TreeCol>Child 1</TreeCol>
                                    </TreeRow>
                                </TreeItem>
                                <TreeItem>
                                    <TreeRow>
                                        <TreeCol>Child 2</TreeCol>
                                    </TreeRow>
                                </TreeItem>
                            </TreeBranch>
                        </TreeItem>
                        <TreeItem>
                            <TreeRow>
                                <TreeCol>Row 3</TreeCol>
                            </TreeRow>
                            <TreeBranch>
                                <TreeItem>
                                    <TreeRow>
                                        <TreeCol>Child 1</TreeCol>
                                    </TreeRow>
                                    <TreeBranch>
                                        <TreeItem>
                                            <TreeRow>
                                                <TreeCol>Grandchild 1</TreeCol>
                                            </TreeRow>
                                        </TreeItem>
                                        <TreeItem>
                                            <TreeRow>
                                                <TreeCol>Grandchild 2</TreeCol>
                                            </TreeRow>
                                        </TreeItem>
                                    </TreeBranch>
                                </TreeItem>
                            </TreeBranch>
                        </TreeItem>
                    </Tree>
                </TreeView>
            </DocsTile>
            <DocsText>{simpleTreeViewCode}</DocsText>

            <Separator />

            <h2>Complex TreeView</h2>
            <Description>
                This is an example of a tree view with a header, multiple levels, multiple columns and actions.
            </Description>
            <DocsTile>
                <TreeView>
                    <TreeHead>
                        <TreeCol>Column Header 1</TreeCol>
                        <TreeCol>Column Header 2</TreeCol>
                        <TreeCol>Column Header 3</TreeCol>
                        <TreeCol>Column Header 4</TreeCol>
                    </TreeHead>
                    <Tree>
                        <TreeItem>
                            <TreeRow>
                                <TreeCol>Row 1</TreeCol>
                                <TreeCol>Data Col 2</TreeCol>
                                <TreeCol>Data Col 3</TreeCol>
                                <TreeCol>Data Col 4</TreeCol>
                            </TreeRow>
                            <TreeBranch>
                                <TreeItem>
                                    <TreeRow>
                                        <TreeCol>Child 1</TreeCol>
                                        <TreeCol>Data Col 2</TreeCol>
                                        <TreeCol>Data Col 3</TreeCol>
                                        <TreeCol>Data Col 4</TreeCol>
                                    </TreeRow>
                                    <TreeBranch>
                                        <TreeItem>
                                            <TreeRow>
                                                <TreeCol>Grandchild 1</TreeCol>
                                                <TreeCol>Data Col 2</TreeCol>
                                                <TreeCol>Data Col 3</TreeCol>
                                                <TreeCol>Data Col 4</TreeCol>
                                            </TreeRow>
                                            <TreeBranch>
                                                <TreeItem>
                                                    <TreeRow>
                                                        <TreeCol>Great Grandchild 1</TreeCol>
                                                        <TreeCol>Data Col 2</TreeCol>
                                                        <TreeCol>Data Col 3</TreeCol>
                                                        <TreeCol>Data Col 4</TreeCol>
                                                    </TreeRow>
                                                </TreeItem>
                                            </TreeBranch>
                                        </TreeItem>
                                    </TreeBranch>
                                </TreeItem>
                                <TreeItem>
                                    <TreeRow>
                                        <TreeCol>Child 2</TreeCol>
                                        <TreeCol>Data Col 2</TreeCol>
                                        <TreeCol>Data Col 3</TreeCol>
                                        <TreeCol>Data Col 4</TreeCol>
                                    </TreeRow>
                                </TreeItem>
                            </TreeBranch>
                        </TreeItem>
                        <TreeItem>
                            <TreeRow>
                                <TreeCol>Row 2</TreeCol>
                                <TreeCol>Data Col 2</TreeCol>
                                <TreeCol>Data Col 3</TreeCol>
                                <TreeCol>Data Col 4</TreeCol>
                            </TreeRow>
                            <TreeBranch>
                                <TreeItem>
                                    <TreeRow>
                                        <TreeCol>Child 1</TreeCol>
                                        <TreeCol>Data Col 2</TreeCol>
                                        <TreeCol>Data Col 3</TreeCol>
                                        <TreeCol>Data Col 4</TreeCol>
                                    </TreeRow>
                                </TreeItem>
                                <TreeItem>
                                    <TreeRow>
                                        <TreeCol>Child 2</TreeCol>
                                        <TreeCol>Data Col 2</TreeCol>
                                        <TreeCol>Data Col 3</TreeCol>
                                        <TreeCol>Data Col 4</TreeCol>
                                    </TreeRow>
                                </TreeItem>
                            </TreeBranch>
                        </TreeItem>
                        <TreeItem>
                            <TreeRow>
                                <TreeCol>Row 3</TreeCol>
                                <TreeCol>Data Col 2</TreeCol>
                                <TreeCol>Data Col 3</TreeCol>
                                <TreeCol>Data Col 4</TreeCol>
                            </TreeRow>
                        </TreeItem>
                        <TreeItem>
                            <TreeRow>
                                <TreeCol>Row 4</TreeCol>
                                <TreeCol>Data Col 2</TreeCol>
                                <TreeCol>Data Col 3</TreeCol>
                                <TreeCol>Data Col 4</TreeCol>
                            </TreeRow>
                            <TreeBranch>
                                <TreeItem>
                                    <TreeRow>
                                        <TreeCol>Child 1</TreeCol>
                                        <TreeCol>Data Col 2</TreeCol>
                                        <TreeCol>Data Col 3</TreeCol>
                                        <TreeCol>Data Col 4</TreeCol>
                                    </TreeRow>
                                </TreeItem>
                            </TreeBranch>
                        </TreeItem>
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
                        <TreeCol>Column Header 1</TreeCol>
                        <TreeCol>Column Header 2</TreeCol>
                        <TreeCol>Column Header 3</TreeCol>
                        <TreeCol>Column Header 4</TreeCol>
                    </TreeHead>
                    <Tree>
                        <TreeItem>
                            <TreeRow>
                                <TreeCol>Row 1</TreeCol>
                            </TreeRow>
                            <TreeBranch>
                                <TreeItem>
                                    <TreeRow>
                                        <TreeCol />
                                        <TreeCol><a href='http://www.google.com'>Google</a></TreeCol>
                                        <TreeCol><a href='http://www.bing.com'>Bing</a></TreeCol>
                                        <TreeCol><a href='http://www.yahoo.com'>Yahoo</a></TreeCol>
                                    </TreeRow>
                                </TreeItem>
                            </TreeBranch>
                        </TreeItem>
                    </Tree>
                </TreeView>
            </DocsTile>
            <DocsText>{treeViewCodeRich}</DocsText>
        </div>
    );
};

