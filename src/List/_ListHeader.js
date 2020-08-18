import classnames from 'classnames';
import CustomPropTypes from '../utils/CustomPropTypes/CustomPropTypes';
import PropTypes from 'prop-types';
import React from 'react';

const ListHeader = ({
    className,
    children,
    level,
    ...props
}) => {
    const ListItemClasses = classnames(
        'fd-list__group-header',
        className
    );

    const HeadingTag = `h${level}`;

    return (
        <HeadingTag {...props} className={ListItemClasses}>
            {children}
        </HeadingTag>

    );
};

ListHeader.displayName = 'List.Header';

ListHeader.propTypes = {
    /** Node(s) to render within the component */
    children: PropTypes.node,
    /** CSS class(es) to add to the element */
    className: PropTypes.string,
    /** Header level. `<h1>` is reserved for the page title. It should not appear in components */
    level: CustomPropTypes.range(2, 6)
};

export default ListHeader;
