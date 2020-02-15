import classnames from 'classnames';
import ListGroupItem from './_ListGroupItem';
import ListGroupItemActions from './_ListGroupItemActions';
import ListGroupItemCheckbox from './_ListGroupItemCheckbox';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

const ListGroup = React.forwardRef(({ children, className, disableStyles, ...props }, ref) => {

    useEffect(() => {
        if (!disableStyles) {
            require('fundamental-styles/dist/fonts.css');
            require('fundamental-styles/dist/list-group.css');
        }
    }, []);

    const listGroupClasses = classnames(
        'fd-list-group',
        className
    );

    return (
        <ul {...props} className={listGroupClasses}
            ref={ref}>
            {children}
        </ul>
    );
});

ListGroup.displayName = 'ListGroup';

ListGroup.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    disableStyles: PropTypes.bool
};

ListGroup.Item = ListGroupItem;
ListGroup.ItemActions = ListGroupItemActions;
ListGroup.ItemCheckbox = ListGroupItemCheckbox;

export default ListGroup;
