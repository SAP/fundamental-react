import classnames from 'classnames';
import PropTypes from 'prop-types';
import shortid from '../utils/shortId';
import React, { Component } from 'react';

export class TreeCol extends Component {
    render() {
        const {
            children,
            className,
            ...rest
        } = this.props;

        const cellClassName = classnames(
            'fd-tree__col',
            className
        );

        return (
            <div
                {...rest}
                className={cellClassName}>
                {children}
            </div>
        );
    }
}

TreeCol.displayName = 'TreeCol';

TreeCol.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};

export class TreeHead extends Component {
    render() {
        const {
            buttonProps,
            children,
            className,
            isExpanded,
            onExpandAll,
            ...rest
        } = this.props;

        const headerClassName = classnames(
            'fd-tree',
            'fd-tree--header',
            className
        );

        return (
            <div {...rest} className={headerClassName}>
                <div className='fd-tree__row fd-tree__row--header'>
                    {
                        React.Children.map(children, (child, index) => {
                            const isFirstTreeCol = index === 0 && child.type && child.type.name === 'TreeCol';

                            // Add control class to first TreeCol element
                            const childClassName = classnames({
                                'fd-tree__col--control': isFirstTreeCol
                            });

                            // Add expand button to first TreeCol element
                            const newChildren = isFirstTreeCol ? (
                                <div>
                                    <button
                                        {...buttonProps}
                                        aria-label={isExpanded ? 'collapse all' : 'expand all'}
                                        aria-pressed={isExpanded}
                                        className='fd-tree__control'
                                        onClick={onExpandAll} />
                                    {child.props && child.props.children}
                                </div>
                            ) : child.props && child.props.children;

                            return React.cloneElement(child, {
                                children: newChildren,
                                className: childClassName
                            });
                        })
                    }
                </div>
            </div>
        );
    }
}

TreeHead.displayName = 'TreeHead';

TreeHead.propTypes = {
    buttonProps: PropTypes.object,
    children: PropTypes.node,
    className: PropTypes.string,
    isExpanded: PropTypes.bool,
    onExpandAll: PropTypes.func
};

TreeHead.propDescriptions = {
    buttonProps: 'Additional props to be spread to the header expand/collapse `<button>` element.',
    isExpanded: '_INTERNAL USE ONLY._',
    onExpandAll: '_INTERNAL USE ONLY._'
};

export class TreeRow extends Component {
    render() {
        const {
            children,
            isExpanded,
            isParent,
            onExpandClick,
            rowId,
            ...rest
        } = this.props;

        // Render child TreeCols
        const cells = React.Children.map(children, (child, index) => {
            const isTreeCol = child.type && child.type.name === 'TreeCol';
            const isFirstTreeCol = index === 0 && isTreeCol;

            // Add control class to first TreeCol element
            const className = classnames({
                'fd-tree__col--control': isFirstTreeCol
            });

            // Add expand button to first TableCell if parent list
            const newChildren = isFirstTreeCol && isParent ? (
                <div>
                    <button
                        aria-controls={rowId}
                        aria-label={isExpanded ? 'collapse' : 'expand'}
                        aria-pressed={isExpanded}
                        className='fd-tree__control'
                        onClick={onExpandClick} />
                    {child.props && child.props.children}
                </div>
            ) : child.props && child.props.children;

            return isTreeCol ?
                React.cloneElement(child, { className, children: newChildren }) :
                null;
        });

        return (
            <div {...rest} className='fd-tree__row'>
                {cells}
            </div>
        );
    }
}

TreeRow.displayName = 'TreeRow';

TreeRow.propTypes = {
    children: PropTypes.node,
    isExpanded: PropTypes.bool,
    isParent: PropTypes.bool,
    rowId: PropTypes.string,
    onExpandClick: PropTypes.func
};

TreeRow.propDescriptions = {
    isExpanded: '_INTERNAL USE ONLY._',
    isParent: '_INTERNAL USE ONLY._',
    rowId: '_INTERNAL USE ONLY._',
    onExpandClick: '_INTERNAL USE ONLY._'
};

export class TreeItem extends Component {
    constructor(props) {
        super(props);

        const { onExpandClick } = this.props;

        // Generate unique id for row to manage expand/collapse state in parent
        this.rowId = shortid.generate();

        // Initialize row in parent TreeView state
        onExpandClick(this.rowId);
    }

    render() {
        const {
            children,
            expandData,
            level,
            onExpandClick,
            ...rest
        } = this.props;
        const isExpanded = !!expandData[this.rowId];

        // Render child TreeBranch with correct props
        const childBranch = React.Children.map(children, (child) => {
            const isTreeBranch = child.type && child.type.name === 'TreeBranch';

            return isTreeBranch ?
                React.cloneElement(child, {
                    expandData,
                    onExpandClick,
                    isExpanded,
                    // Increment child branch level
                    level: level + 1
                }) :
                null;
        });

        // Render child TreeRow with correct props
        const childRow = React.Children.map(children, (child) => {
            const isTreeRow = child.type && child.type.name === 'TreeRow';

            return isTreeRow ?
                React.cloneElement(child, {
                    isExpanded,
                    onExpandClick: () => onExpandClick(this.rowId),
                    isParent: !!childBranch[0],
                    rowId: this.rowId
                }) :
                null;
        });

        return (
            <li
                {...rest}
                aria-expanded={isExpanded}
                className='fd-tree__item'
                id={this.rowId}
                role='treeitem'>
                {childRow}
                {childBranch}
            </li>
        );
    }
}

TreeItem.displayName = 'TreeItem';

TreeItem.propTypes = {
    children: PropTypes.node,
    expandData: PropTypes.object,
    level: PropTypes.number,
    onExpandClick: PropTypes.func
};

TreeItem.defaultProps = {
    expandData: {},
    level: 0,
    onExpandClick: () => {}
};

TreeItem.propDescriptions = {
    expandData: '_INTERNAL USE ONLY._',
    level: '_INTERNAL USE ONLY._',
    onExpandClick: '_INTERNAL USE ONLY._'
};

export class TreeBranch extends Component {
    render() {
        return <Tree {...this.props} />;
    }
}

TreeBranch.displayName = 'TreeBranch';

TreeBranch.propTypes = {
    children: PropTypes.node,
    expandData: PropTypes.object,
    isExpanded: PropTypes.bool,
    level: PropTypes.number,
    onExpandClick: PropTypes.func
};

TreeBranch.defaultProps = {
    expandData: {},
    level: 0
};

TreeBranch.propDescriptions = {
    expandData: '_INTERNAL USE ONLY._',
    isExpanded: '_INTERNAL USE ONLY._',
    level: '_INTERNAL USE ONLY._',
    onExpandClick: '_INTERNAL USE ONLY._'
};

export class Tree extends Component {
    render() {
        const {
            children,
            expandData,
            level,
            isExpanded,
            onExpandClick,
            ...rest
        } = this.props;

        const className = classnames({
            'fd-tree': level === 0,
            'fd-tree__group': level > 0,
            [`fd-tree__group--sublevel-${level}`]: level > 0,
            'is-hidden': level > 0 && !isExpanded
        });

        return (
            <ul
                {...rest}
                aria-hidden={level > 0 && !isExpanded}
                className={className}
                role={level === 0 ? 'tree' : 'group'}>
                {
                    React.Children.map(children, (child) => {
                        return React.cloneElement(child, {
                            expandData,
                            level,
                            onExpandClick
                        });
                    })
                }
            </ul>
        );
    }
}

Tree.displayName = 'Tree';

Tree.propTypes = {
    children: PropTypes.node,
    expandData: PropTypes.object,
    isExpanded: PropTypes.bool,
    level: PropTypes.number,
    onExpandClick: PropTypes.func
};

Tree.defaultProps = {
    expandData: {},
    level: 0
};

Tree.propDescriptions = {
    expandData: '_INTERNAL USE ONLY._',
    isExpanded: '_INTERNAL USE ONLY._',
    level: '_INTERNAL USE ONLY._',
    onExpandClick: '_INTERNAL USE ONLY._'
};

export class TreeView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            expandData: {},
            isExpandAll: false
        };
    }

    // Callback for each TreeRow to toggle expand/collapse state
    toggleExpand = (rowId) => {
        this.setState((prevState) => {
            const {
                expandData
            } = prevState;

            // If value doesn't exist, initialize it to false
            const newValue = (rowId in expandData) ? !expandData[rowId] : false;

            return {
                expandData: {
                    ...expandData,
                    [rowId]: newValue
                }
            };
        });
    }

    // Callback for TreeHead to toggle expand/collapse all state
    toggleExpandAll = () => {
        const {
            expandData,
            isExpandAll
        } = this.state;

        const newExpandData = {};

        // Expand/Collapse all rows
        Object.keys(expandData).forEach((rowId) => newExpandData[rowId] = !isExpandAll);

        this.setState({
            expandData: newExpandData,
            isExpandAll: !isExpandAll
        });
    }

    render() {
        const {
            children,
            ...rest
        } = this.props;
        const {
            expandData,
            isExpandAll
        } = this.state;

        return (
            <div {...rest}>
                {
                    React.Children.map(children, (child) => {
                        const isTreeHead = child.type && child.type.name === 'TreeHead';
                        const isTree = child.type && child.type.name === 'Tree';

                        if (isTreeHead) {
                            // Pass expand all callbacks to TreeHead
                            return React.cloneElement(child, {
                                onExpandAll: this.toggleExpandAll,
                                isExpanded: isExpandAll
                            });
                        }

                        if (isTree) {
                            // Pass expand callbacks to Tree
                            return React.cloneElement(child, {
                                expandData,
                                onExpandClick: this.toggleExpand
                            });
                        }

                        return child;
                    })
                }
            </div>
        );
    }
}

TreeView.displayName = 'TreeView';

TreeView.propTypes = {
    children: PropTypes.node
};
