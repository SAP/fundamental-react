import Checkbox from '../Forms/Checkbox';
import PropTypes from 'prop-types';
import React from 'react';

const ListGroupItemCheckbox = ({ children, ...props }) => {
    return (
        <Checkbox {...props} id='CndSd399'
            value={children} />
    );
};

ListGroupItemCheckbox.displayName = 'ListGroup.ItemCheckbox';

ListGroupItemCheckbox.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};

export default ListGroupItemCheckbox;
