import classnamesBind from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';
// eslint-disable-next-line sort-imports
import styles from 'fundamental-styles/dist/list.css';

const classnames = classnamesBind.bind(styles);

const ListFooter = ({
    className,
    children,
    ...props
}) => {
    const ListItemClasses = classnames(
        'fd-list__footer',
        className
    );

    return (
        <span {...props} className={ListItemClasses}>
            {children}
        </span>

    );
};

ListFooter.displayName = 'List.Footer';

ListFooter.propTypes = {
    /** Node(s) to render within the component */
    children: PropTypes.node,
    /** CSS class(es) to add to the element */
    className: PropTypes.string
};

export default ListFooter;
