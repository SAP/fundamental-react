import classnames from 'classnames';
import PropTypes from 'prop-types';
import shortid from '../utils/shortId';
import React, { Component } from 'react';

export class TreeCell extends Component {
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

TreeCell.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};

export class TreeHeader extends Component {
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
                            const isFirstTreeCell = index === 0 && child.type && child.type.name === 'TreeCell';

                            // Add control class to first TreeCell element
                            const childClassName = classnames({
                                'fd-tree__col--control': isFirstTreeCell
                            });

                            // Add expand button to first TreeCell element
                            const newChildren = isFirstTreeCell ? (
                                <div>
                                    <button
                                        {...buttonProps}
                                        aria-label={isExpanded ? 'collapse' : 'expand'}
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

TreeHeader.propTypes = {
    buttonProps: PropTypes.object,
    children: PropTypes.node,
    className: PropTypes.string,
    isExpanded: PropTypes.bool,
    onExpandAll: PropTypes.func
};

TreeHeader.propDescriptions = {
    buttonProps: 'Additional props to be spread to the header expand/collapse `<button>` element.',
    isExpanded: '_INTERNAL USE ONLY._',
    onExpandAll: '_INTERNAL USE ONLY._'
};

export class TreeRow extends Component {
    constructor(props) {
        super(props);

        const { onExpandClick } = this.props;

        // Generate unique id for row to manage expand/collapse state in parent
        this.rowId = shortid.generate();

        // Initialize row in parent state
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

        // Render child TreeLists with correct props
        const childList = React.Children.map(children, (child) => {
            const isTreeList = child.type && child.type.name === 'TreeList';

            return isTreeList ?
                React.cloneElement(child, {
                    expandData,
                    onExpandClick,
                    isExpanded,
                    // Increment child list level
                    level: level + 1
                }) :
                null;
        });

        // Render child TreeCells
        const cells = React.Children.map(children, (child, index) => {
            const isTreeCell = child.type && child.type.name === 'TreeCell';
            const isFirstTreeCell = index === 0 && isTreeCell;

            // Add control class to first TreeCell element
            const className = classnames({
                'fd-tree__col--control': isFirstTreeCell
            });

            // Add expand button to first TableCell if parent list
            const newChildren = isFirstTreeCell && childList[0] ? (
                <div>
                    <button
                        aria-controls={this.rowId}
                        aria-label={isExpanded ? 'collapse' : 'expand'}
                        aria-pressed={isExpanded}
                        className='fd-tree__control'
                        onClick={() => onExpandClick(this.rowId)} />
                    {child.props && child.props.children}
                </div>
            ) : child.props && child.props.children;

            return isTreeCell ?
                React.cloneElement(child, { className, children: newChildren }) :
                null;
        });

        return (
            <li
                {...rest}
                aria-expanded={isExpanded}
                className='fd-tree__item'
                id={this.rowId}
                role='treeitem'>
                <div className='fd-tree__row'>
                    {cells}
                </div>
                {childList}
            </li>
        );
    }
}

TreeRow.propTypes = {
    children: PropTypes.node,
    expandData: PropTypes.object,
    level: PropTypes.number,
    onExpandClick: PropTypes.func
};

TreeRow.defaultProps = {
    expandData: {},
    level: 0,
    onExpandClick: () => {}
};

TreeRow.propDescriptions = {
    expandData: '_INTERNAL USE ONLY._',
    level: '_INTERNAL USE ONLY._',
    onExpandClick: '_INTERNAL USE ONLY._'
};

export class TreeList extends Component {
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
            'is-hidden': !isExpanded
        });

        return (
            <ul
                {...rest}
                aria-hidden={!isExpanded}
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

TreeList.propTypes = {
    children: PropTypes.node,
    expandData: PropTypes.object,
    isExpanded: PropTypes.bool,
    level: PropTypes.number,
    onExpandClick: PropTypes.func
};

TreeList.defaultProps = {
    expandData: {},
    level: 0
};

TreeList.propDescriptions = {
    expandData: '_INTERNAL USE ONLY._',
    isExpanded: '_INTERNAL USE ONLY._',
    level: '_INTERNAL USE ONLY._',
    onExpandClick: '_INTERNAL USE ONLY._'
};

export class Tree extends Component {
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

    // Callback for TreeHeader to toggle expand/collapse all state
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
                        const isTreeHeader = child.type && child.type.name === 'TreeHeader';
                        const isTreeList = child.type && child.type.name === 'TreeList';

                        if (isTreeHeader) {
                            // Pass expand all callbacks to TreeHeader
                            return React.cloneElement(child, {
                                onExpandAll: this.toggleExpandAll,
                                isExpanded: isExpandAll
                            });
                        }

                        if (isTreeList) {
                            // Pass expand callbacks to TreeList's
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

Tree.displayName = 'Tree';

Tree.propTypes = {
    children: PropTypes.node
};
