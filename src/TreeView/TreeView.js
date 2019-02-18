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
                            const isFirstTreeCol = index === 0 && child.type && child.type.displayName === 'TreeCol';

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
    children: 'Node(s) to render within the component. Expecting `TreeCol` components as children.',
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
            const isTreeCol = child.type && child.type.displayName === 'TreeCol';
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
    children: 'Node(s) to render within the component. Expecting `TreeCol` components as children.',
    isExpanded: '_INTERNAL USE ONLY._',
    isParent: '_INTERNAL USE ONLY._',
    rowId: '_INTERNAL USE ONLY._',
    onExpandClick: '_INTERNAL USE ONLY._'
};

export class TreeItem extends Component {
    constructor(props) {
        super(props);

        const {
            rowId,
            onExpandClick
        } = this.props;

        // Generate unique id for row to manage expand/collapse state in parent if prop isn't given
        this.rowId = rowId || shortid.generate();

        // Initialize row in parent TreeView state
        onExpandClick(this.rowId);
    }

    render() {
        const {
            children,
            expandData,
            level,
            onExpandClick,
            isExpanded: isExpandedProp,
            rowId,
            ...rest
        } = this.props;
        const isExpanded = isExpandedProp || !!expandData[this.rowId];

        // Render child TreeBranch with correct props
        const childBranch = React.Children.map(children, (child) => {
            const isTreeBranch = child.type && child.type.displayName === 'TreeBranch';

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
            const isTreeRow = child.type && child.type.displayName === 'TreeRow';

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
    isExpanded: PropTypes.bool,
    level: PropTypes.number,
    rowId: PropTypes.string,
    onExpandClick: PropTypes.func
};

TreeItem.defaultProps = {
    expandData: {},
    level: 0,
    onExpandClick: () => {}
};

TreeItem.propDescriptions = {
    children: 'Node(s) to render within the component. Expecting `TreeRow` and `TreeItem` components as children.',
    expandData: '_INTERNAL USE ONLY._',
    isExpanded: 'Set to *true* for expanded tree item. This variable is handled internally, but can be overridden by the consumer through this prop.',
    level: '_INTERNAL USE ONLY._',
    rowId: 'ID used to track the expanded/collapsed state of the row. This variable is handled internally, but can be overridden by the consumer through this prop.',
    onExpandClick: '_INTERNAL USE ONLY._'
};

export class TreeBranch extends Component {
    render() {
        return <_Tree {...this.props} />;
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
    expandData: {}
};

TreeBranch.propDescriptions = {
    children: 'Node(s) to render within the component. Expecting a `TreeItem` component as a child.',
    expandData: '_INTERNAL USE ONLY._',
    isExpanded: '_INTERNAL USE ONLY._',
    level: '_INTERNAL USE ONLY._',
    onExpandClick: '_INTERNAL USE ONLY._'
};

export class Tree extends Component {
    render() {
        return <_Tree {...this.props} level={0} />;
    }
}

Tree.displayName = 'Tree';

Tree.propTypes = {
    children: PropTypes.node,
    expandData: PropTypes.object,
    isExpanded: PropTypes.bool,
    onExpandClick: PropTypes.func
};

Tree.defaultProps = {
    expandData: {}
};

Tree.propDescriptions = {
    children: 'Node(s) to render within the component. Expecting `TreeItem` components as children.',
    expandData: '_INTERNAL USE ONLY._',
    isExpanded: '_INTERNAL USE ONLY._',
    level: '_INTERNAL USE ONLY._',
    onExpandClick: '_INTERNAL USE ONLY._'
};

class _Tree extends Component {
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

_Tree.propTypes = {
    expandData: PropTypes.object.isRequired,
    level: PropTypes.number.isRequired,
    onExpandClick: PropTypes.func.isRequired,
    children: PropTypes.node,
    isExpanded: PropTypes.bool
};

export class TreeView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            expandData: {},
            isExpandAll: false
        };
    }

    static getDerivedStateFromProps(props, state) {
        const {
            isExpandAll,
            expandData: expandDataProp
        } = props;

        if (typeof expandDataProp !== 'undefined') {
            // If user provides a prop value for expandData then set that in state
            return {
                ...state,
                expandData: expandDataProp
            };
        }

        if (typeof isExpandAll !== 'undefined') {
            // If user provides a prop value for isExpandAll then update state accordingly
            const {
                expandData
            } = state;
            const newExpandData = {};

            // Expand/Collapse all rows
            Object.keys(expandData).forEach((rowId) => newExpandData[rowId] = isExpandAll);

            return {
                ...state,
                expandData: newExpandData,
                isExpandAll
            };
        }

        return state;
    }

    // Callback for each TreeRow to toggle expand/collapse state
    toggleExpand = (rowId) => {
        this.setState((prevState) => {
            const {
                expandData
            } = prevState;
            const {
                onExpandChange
            } = this.props;

            // If value doesn't exist, initialize it to false
            const newValue = (rowId in expandData) ? !expandData[rowId] : false;

            const newExpandData = {
                ...expandData,
                [rowId]: newValue
            };

            // Callback function
            onExpandChange(newExpandData);

            return {
                expandData: newExpandData
            };
        });
    }

    // Callback for TreeHead to toggle expand/collapse all state
    toggleExpandAll = () => {
        const {
            expandData,
            isExpandAll
        } = this.state;
        const {
            onExpandChange
        } = this.props;

        const newExpandData = {};

        // Expand/Collapse all rows
        Object.keys(expandData).forEach((rowId) => newExpandData[rowId] = !isExpandAll);

        // Callback function
        onExpandChange(newExpandData);

        this.setState({
            expandData: newExpandData,
            isExpandAll: !isExpandAll
        });
    }

    render() {
        const {
            children,
            isExpandAll: isExpandAllProp,
            onExpandChange,
            expandData: expandDataProp,
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
                        const isTreeHead = child.type && child.type.displayName === 'TreeHead';
                        const isTree = child.type && child.type.displayName === 'Tree';

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
    children: PropTypes.node,
    expandData: PropTypes.object,
    isExpandAll: PropTypes.bool,
    onExpandChange: PropTypes.func
};

TreeView.defaultProps = {
    onExpandChange: () => {}
};

TreeView.propDescriptions = {
    children: 'Node(s) to render within the component. Expecting a `TreeHead` and a `Tree` component as children.',
    expandData: 'object with rowId keys and boolean values representing whether that row is expanded. This variable is handled internally, but can be overridden by the consumer through this prop.',
    isExpandAll: 'Set to *true* for an expanded tree. This variable is handled internally, but can be overridden by the consumer through this prop',
    onExpandChange: 'Callback that is called whenever the internal expand/collapse state changes. The argument is an an object with rowId keys and boolean values representing whether that row is expanded.'
};
