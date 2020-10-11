/* eslint-disable react/no-multi-comp */
import Button from '../../Button/Button';
import React from 'react';
import Tree from '../Tree';
import TreeNode from '../_TreeNode';
import {
    boolean, select, text
} from '@storybook/addon-knobs';

export default {
    title: 'Component API/Tree',
    component: Tree,
    subcomponents: { Tree, TreeNode }
};

export const wrappingAndNonWrappingContents = () => (
    <Tree >
        <Tree.Node>
            Level 1
            <Tree.Node>
                Level 2
                <Tree.Node>
                    Level 3
                </Tree.Node>
            </Tree.Node>
            <Tree.Node>
                Level 2
            </Tree.Node>
            <Tree.Node>
                Level 2
            </Tree.Node>
        </Tree.Node>
        <Tree.Node>
            Level 1
        </Tree.Node>
        <Tree.Node>
            Level 1 with very long text that does not wrap. Perspiciatis unde omnis iste natus error
            sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
            illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
        </Tree.Node>
        <Tree.Node wrapContent>
            Level 1 with very long text that does not wrap. Perspiciatis unde omnis iste natus error
            sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
            illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
        </Tree.Node>
    </Tree>
);

wrappingAndNonWrappingContents.parameters = {
    docs: {
        storyDescription:
`
The default behaviour of the list item is no wrapping. To allow wrapping set the \`wrapContent\` property on \`Tree.Node\`.
`
    }
};

export const compact = () => (
    <Tree compact>
        <Tree.Node>
            Level 1
            <Tree.Node>
                Level 2
                <Tree.Node>
                    Level 3
                </Tree.Node>
            </Tree.Node>
            <Tree.Node>
                Level 2
            </Tree.Node>
            <Tree.Node>
                Level 2
            </Tree.Node>
        </Tree.Node>
        <Tree.Node>
            Level 1
        </Tree.Node>
        <Tree.Node>
            Level 1 with very long text that does not wrap. Perspiciatis unde omnis iste natus error
            sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
            illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
        </Tree.Node>
        <Tree.Node wrapContent>
            Level 1 with very long text that does not wrap. Perspiciatis unde omnis iste natus error
            sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
            illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
        </Tree.Node>
    </Tree>
);
compact.parameters = {
    docs: {
        storyDescription:
`
There are 2 modes: Default(Tablet and Mobile) and Compact (Desktop).
For compact mode set the \`compact\` property on \`Tree\`.
`
    }
};

export const nodeActionsAndNoBorder = () => {
    const commonActions = (<>
        <Button aria-label='Edit' glyph='edit'
            option='transparent' />
        <Button aria-label='Decline' glyph='decline'
            option='transparent' />
    </>);
    return (
        <Tree
            aria-label='Tree with Actions and no border'
            noBorders>
            <Tree.Node
                actions={commonActions}
                glyphsBefore={['e-care', 'activate']}>
                Level 1
                <Tree.Node
                    actions={commonActions}
                    glyphsBefore={['account']}>
                    Level 2
                    <Tree.Node
                        actions={commonActions}
                        glyphsBefore={['product']}>
                        Level 3
                        <Tree.Node
                            actions={commonActions}
                            glyphsBefore={['wrench']}>
                            Level 4
                        </Tree.Node>
                    </Tree.Node>
                    <Tree.Node
                        actions={commonActions}
                        glyphsBefore={['history']}>
                        Level 3
                    </Tree.Node>
                </Tree.Node>
                <Tree.Node
                    actions={commonActions}
                    glyphsBefore={['competitor']}>
                    Level 2
                </Tree.Node>
            </Tree.Node>
            <Tree.Node
                actions={commonActions}
                glyphsAfter={['bell']}
                glyphsBefore={['batch-payments']}>
                Level 1
            </Tree.Node>
            <Tree.Node
                actions={commonActions}
                glyphsBefore={['favorite']}>
                Level 1
            </Tree.Node>
        </Tree>
    );
};
nodeActionsAndNoBorder.storyName = 'Icons, Node Actions, and No Borders on Level 1';
nodeActionsAndNoBorder.parameters = {
    docs: {
        storyDescription:
`
Icons can be added before and/or after the text using \`glyphsBefore\` and \`glyphsAfter\` properties.

\`Tree.Node\`s can have action Buttons which are added using the \`actions\` property.

To remove the borders from the first level items
set the \`noBorders\` property on \`Tree\`.
`
    }
};
export const highlightIndicators = () => (
    <Tree>
        <Tree.Node highlight='default'>
            Level 1
            <Tree.Node highlight='warning'>
                Level 2
                <Tree.Node highlight='error'>
                    Level 3
                    <Tree.Node highlight='success'>
                        Level 4
                        <Tree.Node>
                            Level 5
                        </Tree.Node>
                    </Tree.Node>
                    <Tree.Node>
                        Level 4
                    </Tree.Node>
                </Tree.Node>
                <Tree.Node>
                    Level 3
                </Tree.Node>
            </Tree.Node>
            <Tree.Node>
                Level 2
            </Tree.Node>
        </Tree.Node>
        <Tree.Node >
            Level 1
        </Tree.Node>
        <Tree.Node >
            Level 1
        </Tree.Node>
    </Tree>
);
highlightIndicators.parameters = {
    docs: {
        storyDescription:
`
\`TreeNode\`s can have highlight indicators.

For this, set the \`highlight\` property on a \`TreeNode\` to one of the following:

* default
* error
* success
* warning
`
    }
};

export const navigationLinks = () => (
    <Tree>
        <Tree.Node link='#navigation-links'>
            Level 1
            <Tree.Node >
                Level 2
                <Tree.Node link='#navigation-links'>
                    Level 3
                    <Tree.Node >
                        Level 4
                        <Tree.Node link='#navigation-links'>
                            Level 5
                            <Tree.Node>
                                Level 6
                                <Tree.Node link='#navigation-links'>
                                    Level 7
                                    <Tree.Node>
                                        Level 8
                                    </Tree.Node>
                                    <Tree.Node link='#navigation-links'>
                                        Level 8
                                    </Tree.Node>
                                </Tree.Node>
                                <Tree.Node >
                                    Level 7
                                </Tree.Node>
                            </Tree.Node>
                            <Tree.Node link='#navigation-links'>
                                Level 6
                            </Tree.Node>
                        </Tree.Node>
                        <Tree.Node link='#navigation-links'>
                            Level 5
                        </Tree.Node>
                    </Tree.Node>
                    <Tree.Node>
                        Level 4
                    </Tree.Node>
                </Tree.Node>
                <Tree.Node>
                    Level 3
                </Tree.Node>
            </Tree.Node>
            <Tree.Node>
                Level 2
            </Tree.Node>
        </Tree.Node>
        <Tree.Node
            isNavigated
            link='#navigation-links'>
            Level 1
        </Tree.Node>
        <Tree.Node link='#navigation-links'>
            Level 1
        </Tree.Node>
    </Tree>
);
navigationLinks.parameters = {
    docs: {
        storyDescription:
`
If only a subset of the \`TreeNode\`s are navigable i.e. contain links;
you may set the \`link\` property, to the URL, on those \`TreeNode\`s.

To indicate that a \`TreeNode\` has been navigated to,
set the \`isNavigated\` property on it.
`
    }
};

export const activeTree = () => (
    <Tree active>
        <Tree.Node link='#navigation-links'>
            Level 1
            <Tree.Node >
                Level 2
                <Tree.Node link='#navigation-links'>
                    Level 3
                    <Tree.Node >
                        Level 4
                        <Tree.Node link='#navigation-links'>
                            Level 5
                            <Tree.Node>
                                Level 6
                                <Tree.Node link='#navigation-links'>
                                    Level 7
                                    <Tree.Node>
                                        Level 8
                                    </Tree.Node>
                                    <Tree.Node link='#navigation-links'>
                                        Level 8
                                    </Tree.Node>
                                </Tree.Node>
                                <Tree.Node >
                                    Level 7
                                </Tree.Node>
                            </Tree.Node>
                            <Tree.Node link='#navigation-links'>
                                Level 6
                            </Tree.Node>
                        </Tree.Node>
                        <Tree.Node link='#navigation-links'>
                            Level 5
                        </Tree.Node>
                    </Tree.Node>
                    <Tree.Node>
                        Level 4
                    </Tree.Node>
                </Tree.Node>
                <Tree.Node>
                    Level 3
                </Tree.Node>
            </Tree.Node>
            <Tree.Node>
                Level 2
            </Tree.Node>
        </Tree.Node>
        <Tree.Node
            isNavigated
            link='#navigation-links'>
            Level 1
        </Tree.Node>
        <Tree.Node link='#navigation-links'>
            Level 1
        </Tree.Node>
    </Tree>
);
activeTree.parameters = {
    docs: {
        storyDescription:
`
If all \`TreeNode\`s are navigable, set the \`active\` property on the \`Tree\`.
This will add styles for interaction states (hover, selected, active) to all nodes and hide the navigation indicator.

You may also selectively set the \`active\` property on \`TreeNode\`s that do not necessarily contain links.
`
    }
};

export const multiSelectionLeft = () => {

    const selectionHandler = (event, checked, nodeData) => alert(`${nodeData.item} was ${checked ? 'checked' : 'unchecked'}`);

    return (
        <Tree selection='multi' selectionPosition='left'>
            <Tree.Node
                nodeData={{ level: 1, item: 'Level 1', id: 'level-1' }}
                onSelectionChange={selectionHandler}>
                Level 1 - onSelectionChange
                <Tree.Node
                    nodeData={{ level: 2, item: 'Level 2', id: 'level-2' }}
                    onSelectionChange={selectionHandler}>
                    Level 2 - onSelectionChange
                    <Tree.Node>
                        Level 3
                        <Tree.Node>
                            Level 4
                            <Tree.Node>
                                Level 5
                            </Tree.Node>
                        </Tree.Node>
                    </Tree.Node>
                </Tree.Node>
            </Tree.Node>
            <Tree.Node>
                Level 1
                <Tree.Node>
                    Level 2
                    <Tree.Node>
                        Level 3
                        <Tree.Node>
                            Level 4
                            <Tree.Node>
                                Level 5
                            </Tree.Node>
                        </Tree.Node>
                    </Tree.Node>
                </Tree.Node>
            </Tree.Node>
        </Tree>
    );
};
multiSelectionLeft.parameters = {
    docs: {
        storyDescription:
`
Set \`Tree.selection\` to \`multi\` to enable multiple selection of \`TreeNode\`s using a \`Checkbox\`.
\`TreeNode.onSelectionChange\` will be called with \`event, checked, Tree.Node.nodeData\` parameters.
`
    }
};

export const multiSelectionRight = () => {

    const selectionHandler = (event, checked, nodeData) => alert(`${nodeData.item} was ${checked ? 'checked' : 'unchecked'}`);

    return (
        <Tree selection='multi' selectionPosition='right'>
            <Tree.Node
                nodeData={{ level: 1, item: 'Level 1', id: 'level-1' }}
                onSelectionChange={selectionHandler}>
                Level 1 - onSelectionChange
                <Tree.Node
                    nodeData={{ level: 2, item: 'Level 2', id: 'level-2' }}
                    onSelectionChange={selectionHandler}>
                    Level 2 - onSelectionChange
                    <Tree.Node>
                        Level 3
                        <Tree.Node>
                            Level 4
                            <Tree.Node>
                                Level 5
                            </Tree.Node>
                        </Tree.Node>
                    </Tree.Node>
                </Tree.Node>
            </Tree.Node>
            <Tree.Node>
                Level 1
                <Tree.Node>
                    Level 2
                    <Tree.Node>
                        Level 3
                        <Tree.Node>
                            Level 4
                            <Tree.Node>
                                Level 5
                            </Tree.Node>
                        </Tree.Node>
                    </Tree.Node>
                </Tree.Node>
            </Tree.Node>
        </Tree>
    );
};
multiSelectionRight.parameters = {
    docs: {
        storyDescription:
`
The \`Tree.selectionPosition\` property determines where the selection controls show up.
`
    }
};

export const singleSelectionLeft = () => {

    const selectionHandler = (event, checked, nodeData) => alert(`${nodeData.item} was ${checked ? 'checked' : 'unchecked'}`);

    return (
        <Tree id='radioTree' selection='single'
            selectionPosition='left'>
            <Tree.Node
                nodeData={{ level: 1, item: 'Level 1', id: 'level-1' }}
                onSelectionChange={selectionHandler}>
                Level 1 - onSelectionChange
                <Tree.Node
                    nodeData={{ level: 2, item: 'Level 2', id: 'level-2' }}
                    onSelectionChange={selectionHandler}>
                    Level 2 - onSelectionChange
                    <Tree.Node>
                        Level 3
                        <Tree.Node>
                            Level 4
                            <Tree.Node>
                                Level 5
                            </Tree.Node>
                        </Tree.Node>
                    </Tree.Node>
                </Tree.Node>
            </Tree.Node>
            <Tree.Node>
                Level 1
                <Tree.Node>
                    Level 2
                    <Tree.Node>
                        Level 3
                        <Tree.Node>
                            Level 4
                            <Tree.Node>
                                Level 5
                            </Tree.Node>
                        </Tree.Node>
                    </Tree.Node>
                </Tree.Node>
            </Tree.Node>
        </Tree>
    );
};
singleSelectionLeft.parameters = {
    docs: {
        storyDescription:
`
Set \`Tree.selection\` to \`single\` to enable single selection of \`TreeNode\`s using a \`FormRadioItem\`s.
\`TreeNode.onSelectionChange\` will be called with \`event, checked, Tree.Node.nodeData\` parameters when a \`TreeNode\` is selected.
`
    }
};

export const singleSelectionRight = () => {

    const selectionHandler = (event, checked, nodeData) => alert(`${nodeData.item} was ${checked ? 'checked' : 'unchecked'}`);

    return (
        <Tree selection='single' selectionPosition='right'>
            <Tree.Node
                nodeData={{ level: 1, item: 'Level 1', id: 'level-1' }}
                onSelectionChange={selectionHandler}>
                Level 1 - onSelectionChange
                <Tree.Node
                    nodeData={{ level: 2, item: 'Level 2', id: 'level-2' }}
                    onSelectionChange={selectionHandler}>
                    Level 2 - onSelectionChange
                    <Tree.Node>
                        Level 3
                        <Tree.Node>
                            Level 4
                            <Tree.Node>
                                Level 5
                            </Tree.Node>
                        </Tree.Node>
                    </Tree.Node>
                </Tree.Node>
            </Tree.Node>
            <Tree.Node>
                Level 1
                <Tree.Node>
                    Level 2
                    <Tree.Node>
                        Level 3
                        <Tree.Node>
                            Level 4
                            <Tree.Node>
                                Level 5
                            </Tree.Node>
                        </Tree.Node>
                    </Tree.Node>
                </Tree.Node>
            </Tree.Node>
        </Tree>
    );
};

export const emptyTree = () => <Tree emptyText='No Data' />;
emptyTree.parameters = {
    docs: {
        storyDescription:
`
Set the \`emptyText\` property to a string vaule to be shown when \`Tree\` has no children.
`
    }
};

export const dev = () => (
    <Tree
        active={boolean('active', false)}
        className={text('Tree.className', '')}
        compact={boolean('compact', false)}
        id={text('id', 'myDevTree')}
        noBorders={boolean('noBorders', false)}
        selection={select('selection', {
            'unset': null,
            'multi': 'multi',
            'single': 'single'
        })}
        selectionPosition={select('selectionPostion', {
            'right': 'right',
            'left': 'left'
        })}>
        <Tree.Node id='myCustomLevel1' nodeData={{ text: 'Level 1' }}
            onExpandToggle={(event, expanded, data) =>{
                alert(`${data?.text} was ${expanded ? 'expanded' : 'collapsed'}`);
            }}>
            Level 1
            <Tree.Node>
                Level 2  <Button style={{ marginLeft: '1em' }}>Test</Button>
                <Tree.Node className='wonderful'>
                    Level 3
                    <Tree.Node>
                        Level 4
                        <Tree.Node>
                            Level 5
                            <Tree.Node>
                                Level 6
                                <Tree.Node>
                                    Level 7
                                </Tree.Node>
                            </Tree.Node>
                        </Tree.Node>
                    </Tree.Node>
                </Tree.Node>
            </Tree.Node>
        </Tree.Node>
        <Tree.Node>
            Level 1
            <Tree.Node>
                Level 2
                <Tree.Node>
                    Level 3
                    <Tree.Node>
                        Level 4
                        <Tree.Node>
                            Level 5
                            <Tree.Node>
                                Level 6
                                <Tree.Node>
                                    Level 7
                                </Tree.Node>
                            </Tree.Node>
                        </Tree.Node>
                    </Tree.Node>
                </Tree.Node>
            </Tree.Node>
        </Tree.Node>
    </Tree>
);
dev.parameters = { docs: { disable: true } };

export const noStyles = () => (
    <Tree cssNamespace='xxx'>
        <Tree.Node>
            Level 1
            <Tree.Node>
                Level 2
                <Tree.Node>
                    Level 3
                </Tree.Node>
            </Tree.Node>
            <Tree.Node>
                Level 2
            </Tree.Node>
            <Tree.Node>
                Level 2
            </Tree.Node>
        </Tree.Node>
        <Tree.Node>
            Level 1
        </Tree.Node>
        <Tree.Node>
            Level 1 with very long text that does not wrap. Perspiciatis unde omnis iste natus error
            sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
            illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
        </Tree.Node>
        <Tree.Node wrapContent>
            Level 1 with very long text that does not wrap. Perspiciatis unde omnis iste natus error
            sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
            illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
        </Tree.Node>
    </Tree>
);
noStyles.parameters = { docs: { disable: true } };
