import classnamesBind from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';
// eslint-disable-next-line sort-imports
import styles from 'fundamental-styles/dist/list.css';

const classnames = classnamesBind.bind(styles);

const ListByline = ({
    className,
    children,
    twoColumns,
    ...props
}) => {

    const ListBylineClasses = classnames(
        'fd-list__byline',
        {
            'fd-list__byline--2-col': twoColumns
        },
        className
    );


    return (
        <div {...props} className={ListBylineClasses}>
            {children}
        </div>
    );
};


ListByline.displayName = 'List.Byline';

ListByline.propTypes = {
    /** Node(s) to render within the component */
    children: PropTypes.node,
    /** CSS class(es) to add to the element */
    className: PropTypes.string,
    /** Set to **true** if two List.Text bylines will be passed as children. */
    twoColumns: PropTypes.bool
};

ListByline.defaultProps = {
    twoColumns: false
};

export default ListByline;
