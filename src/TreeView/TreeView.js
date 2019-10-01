import PropTypes from 'prop-types';
import Tree from './_Tree';
import TreeBranch from './_TreeBranch';
import TreeCol from './_TreeCol';
import TreeHead from './_TreeHead';
import TreeItem from './_TreeItem';
import TreeRow from './_TreeRow';
import withStyles from '../utils/WithStyles/WithStyles';
import React, { Component } from 'react';

class TreeView extends Component {
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
    children: PropTypes.node,
    customStyles: PropTypes.object,
    disableStyles: PropTypes.bool,
    expandData: PropTypes.object,
    isExpandAll: PropTypes.bool,
    onExpandChange: PropTypes.func
};

TreeView.defaultProps = {
    onExpandChange: () => {}
};

TreeView.propDescriptions = {
    children: 'Node(s) to render within the component. Expecting a `TreeHead` and a `Tree` component as children.',
    expandData: 'Object with rowId keys and boolean values representing whether that row is expanded. This variable is handled internally, but can be overridden by the consumer through this prop.',
    isExpandAll: 'Set to *true* for an expanded tree. This variable is handled internally, but can be overridden by the consumer through this prop',
    onExpandChange: 'Callback that is called whenever the internal expand/collapse state changes. The argument is an an object with rowId keys and boolean values representing whether that row is expanded.'
};

TreeView.Tree = Tree;
TreeView.Branch = TreeBranch;
TreeView.Col = TreeCol;
TreeView.Head = TreeHead;
TreeView.Item = TreeItem;
TreeView.Row = TreeRow;

export { TreeView as __TreeView };

export default withStyles(TreeView, { cssFiles: 'tree', fonts: true, icons: true });
