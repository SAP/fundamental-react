import BaseTree from './_BaseTree';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

class TreeBranch extends Component {
    render() {
        return <BaseTree {...this.props} />;
    }
}

TreeBranch.displayName = 'TreeView.Branch';

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
    children: 'Node(s) to render within the component. Expecting `TreeItem` components as children.',
    expandData: '_INTERNAL USE ONLY._',
    isExpanded: '_INTERNAL USE ONLY._',
    level: '_INTERNAL USE ONLY._',
    onExpandClick: '_INTERNAL USE ONLY._'
};

export default TreeBranch;
