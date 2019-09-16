import Checkbox from '../Forms/Checkbox';
import PropTypes from 'prop-types';
import React from 'react';
import shortid from '../utils/shortId';

const ListGroupItemCheckbox = ({ children, id, ...props }) => {
    return (
        <Checkbox {...props} id={id ? id : shortid.generate()}
            value={children} />
    );
};

ListGroupItemCheckbox.displayName = 'ListGroup.ItemCheckbox';

ListGroupItemCheckbox.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    id: PropTypes.string
};

export default ListGroupItemCheckbox;
