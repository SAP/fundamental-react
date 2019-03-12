import BaseTree from './_BaseTree';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Tree extends Component {
    render() {
        return <BaseTree {...this.props} level={0} />;
    }
}

Tree.displayName = 'TreeView.Tree';

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

export default Tree;
