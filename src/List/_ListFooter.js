import classnamesBind from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';
import withStyles from '../utils/withStyles';
import styles from 'fundamental-styles/dist/list.css';

const classnames = classnamesBind.bind(styles);

const ListFooter = ({
    className,
    children,
    cssNamespace,
    ...props
}) => {
    const ListItemClasses = classnames(
        `${cssNamespace}-list__footer`,
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

export default withStyles(ListFooter);
