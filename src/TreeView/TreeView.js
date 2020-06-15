import PropTypes from 'prop-types';
import Tree from './_Tree';
import TreeBranch from './_TreeBranch';
import TreeCol from './_TreeCol';
import TreeHead from './_TreeHead';
import TreeItem from './_TreeItem';
import TreeRow from './_TreeRow';
import React, { Component } from 'react';

/** A **TreeView** is used to display data in a visual hierarchy. Items that contain additional items
are called nodes, while items that do not contain any other items are called leaves. If available,
a single top-most node is called a "root" node. Apart from the hierarchical structure of its nodes
and leaves, a tree is similar to a list. */
class TreeView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            expandData: {},
            isExpandAll: false
        };
    }

    componentDidMount() {
        if (!this.props.disableStyles) {
            require('fundamental-styles/dist/icon.css');
            require('fundamental-styles/dist/tree.css');
        }
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
            disableStyles,
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
                {React.Children.toArray(children).map(child => {
                    const isTreeHead = child.type && child.type.displayName === 'TreeView.Head';
                    const isTree = child.type && child.type.displayName === 'TreeView.Tree';

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
                })}
            </div>
        );
    }
}

TreeView.displayName = 'TreeView';

TreeView.propTypes = {
    /** Node(s) to render within the component. Expecting a `TreeHead` and a `Tree` component as children */
    children: PropTypes.node,
    /** Internal use only */
    disableStyles: PropTypes.bool,
    /** Object with rowId keys and boolean values representing whether that row is expanded.
     * This variable is handled internally, but can be overridden by the consumer through this prop */
    expandData: PropTypes.object,
    /** Set to *true* for an expanded tree. This variable is handled internally,
     * but can be overridden by the consumer through this prop */
    isExpandAll: PropTypes.bool,
    /** Callback that is called whenever the internal expand/collapse state changes.
     * The argument is an an object with rowId keys and boolean values representing whether that row is expanded */
    onExpandChange: PropTypes.func
};

TreeView.defaultProps = {
    onExpandChange: () => {}
};

TreeView.Tree = Tree;
TreeView.Branch = TreeBranch;
TreeView.Col = TreeCol;
TreeView.Head = TreeHead;
TreeView.Item = TreeItem;
TreeView.Row = TreeRow;

export default TreeView;
