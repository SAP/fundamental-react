import classnames from 'classnames';
import PropTypes from 'prop-types';
import TreeNode from './TreeNode';
import useUniqueId from '../utils/useUniqueId';
import React, { useState } from 'react';

const Tree = React.forwardRef(({
    active,
    children,
    compact,
    id,
    noBorders,
    emptyText,
    selection,
    selectionPosition,
    ...props
}, ref) => {
    const [expansionDepth, setExpansionDepth] = useState(0);
    const [tree, setTree] = useState({
        'root': {
            id: 'root',
            expanded: true,
            level: 0,
            children: {}
        }
    });


    // const getExpansionDepth = (newExpansionState) => {
    //     const levels = Object.keys(newExpansionState);
    //     levels.sort((a, b) => a - b);
    //     let maxLevel = 0;
    //     for (const lvl of levels) {
    //         const levelInt = parseInt(lvl, 10);
    //         if (newExpansionState[lvl] < 1) {
    //             return levelInt - 1;
    //         }
    //         maxLevel = levelInt;
    //     }
    //     return maxLevel;
    // };


    // const getExpansionState = (lastLevelExpanding, toggledAtLevel, prevExpansionSate) => {
    //     if (typeof toggledAtLevel === 'number') {
    //         if (lastLevelExpanding) {
    //             return {
    //                 ...prevExpansionSate,
    //                 [toggledAtLevel]: (prevExpansionSate[toggledAtLevel] || 0) + 1
    //             };
    //         } else {
    //             return {
    //                 ...prevExpansionSate,
    //                 [toggledAtLevel]: (prevExpansionSate[toggledAtLevel] || 0) - 1
    //             };
    //         }
    //     }
    //     return prevExpansionSate;
    // };

    const updateTree = ({
        toggledAtLevel,
        lastLevelExpanding,
        parentPath }) => {
        const pathArr = parentPath && parentPath.split && parentPath.split('/') || [];
        let checkTree = tree;
        let checkTreeRoot = checkTree;
        pathArr.forEach((pathItem, index) => {
            const currentItem = checkTree[pathItem];

            if (currentItem && index === pathArr.length - 1) {
                currentItem.expanded = lastLevelExpanding;
            }
            if (!currentItem) {
                checkTree[pathItem] = {
                    id: pathItem,
                    expanded: lastLevelExpanding,
                    level: toggledAtLevel,
                    children: {}
                };
                checkTree = checkTree[pathItem].children;
            } else {
                checkTree = currentItem && currentItem.children;
            }
        });
        setTree(checkTreeRoot);

    };

    const getExpandedChildren = (treeNode) => {
        if (!treeNode || !treeNode.children || Object.keys(treeNode.children).length === 0) return 0;
        const childrenIds = Object.keys(treeNode.children);
        const expandedChildrenCount = childrenIds.filter && childrenIds.filter( childId => treeNode?.children[childId]?.expanded).length || 0;
        return expandedChildrenCount;
    };

    const getMaxExpandedNodeLevel = (node) => {
        const expandedChildrenCount = getExpandedChildren(node);
        if (expandedChildrenCount < 1) {
            return node.level;
        }
        let maxExpandedLevel = node.level;
        const nodeChildren = node?.children || {};
        const nodeChildrenIds = Object.keys(nodeChildren);
        const expandedChildrenIds = nodeChildrenIds.filter(childId => node?.children[childId]?.expanded);
        for ( const expandedChildId of expandedChildrenIds) {
            const expandedChild = node?.children[expandedChildId];
            let expandedChildMaxDepth = getMaxExpandedNodeLevel(expandedChild);
            if (expandedChildMaxDepth > maxExpandedLevel) {
                maxExpandedLevel = expandedChildMaxDepth;
            }
        }
        return maxExpandedLevel;
    };

    const treeId = useUniqueId(id);

    const levelOneNodes = React.Children.toArray(children)
        .filter(child => child.type && child.type.displayName === 'Tree.Node')
        .map(child => React.cloneElement(child, {
            level: 1,
            parentId: 'root',
            onExpandClick: (toggledAtLevel, lastLevelExpanding, itemId, parentId, parentPath) => {
                updateTree({
                    toggledAtLevel,
                    lastLevelExpanding,
                    itemId,
                    parentId,
                    parentPath
                });
                const newExpansionDepth = getMaxExpandedNodeLevel(tree.root);
                setExpansionDepth(newExpansionDepth);
            },
            parentPath: 'root',
            selection,
            selectionPosition,
            treeId
        }));

    const emptyTree = !levelOneNodes?.length > 0;


    const treeClasses = classnames(
        'fd-tree',
        {
            [`expanded-level-${expansionDepth}`]: typeof expansionDepth === 'number' && expansionDepth > 0,
            'fd-tree--active': active,
            'fd-tree--compact': compact,
            'fd-tree--no-border': noBorders,
            'fd-tree--no-data': emptyTree
        }
    );

    return (
        <ul
            {...props}
            className={treeClasses}
            role='tree'>
            {!emptyTree ?
                levelOneNodes
                : (
                    <li aria-level='1' className='fd-tree__item'
                        role='treeitem'>
                        <div className='fd-tree__item-container'>
                            <div className='fd-tree__content'>
                                <span className='fd-tree__text'>{emptyText}</span>
                            </div>
                        </div>
                    </li>)}
        </ul>);
});

Tree.displayName = 'Tree';

Tree.propTypes = {
    active: PropTypes.bool,
    children: PropTypes.node,
    compact: PropTypes.bool,
    emptyText: PropTypes.string,
    id: PropTypes.string,
    noBorders: PropTypes.bool,
    selection: PropTypes.oneOf([
        'multi',
        'single'
    ]),
    selectionPosition: PropTypes.oneOf([
        'left',
        'right'
    ])
};

Tree.defaultProps = {
    selectionPosition: 'left'
};

Tree.Node = TreeNode;

export default Tree;
