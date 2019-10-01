import classnames from 'classnames';
import ListGroupItem from './_ListGroupItem';
import ListGroupItemActions from './_ListGroupItemActions';
import ListGroupItemCheckbox from './_ListGroupItemCheckbox';
import PropTypes from 'prop-types';
import React from 'react';
import withStyles from '../utils/WithStyles/WithStyles';

const ListGroup = React.forwardRef(({ children, className, disableStyles, ...props }, ref) => {
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
    customStyles: PropTypes.object,
    disableStyles: PropTypes.bool
};

ListGroup.Item = ListGroupItem;
ListGroup.ItemActions = ListGroupItemActions;
ListGroup.ItemCheckbox = ListGroupItemCheckbox;

export { ListGroup as __ListGroup };

export default withStyles(ListGroup, { cssFile: 'list-group', fonts: true });
