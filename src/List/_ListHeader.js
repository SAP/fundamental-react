import classnamesBind from 'classnames/bind';
import CustomPropTypes from '../utils/CustomPropTypes/CustomPropTypes';
import PropTypes from 'prop-types';
import React from 'react';
import Title from '../Title/Title';
import withStyles from '../utils/withStyles';
import styles from 'fundamental-styles/dist/list.css';

const classnames = classnamesBind.bind(styles);

const ListHeader = ({
    className,
    children,
    cssNamespace,
    headingStyle,
    level,
    ...props
}) => {
    const ListItemClasses = classnames(
        `${cssNamespace}-list__group-header`,
        className
    );

    return (
        <Title
            {...props}
            className={ListItemClasses}
            level={level}
            levelStyle={headingStyle}>
            {children}
        </Title>
    );
};

ListHeader.displayName = 'List.Header';

ListHeader.propTypes = {
    /** Node(s) to render within the component */
    children: PropTypes.node,
    /** CSS class(es) to add to the element */
    className: PropTypes.string,
    /** Heading style, if it should be different from the default style for the heading level. */
    headingStyle: CustomPropTypes.range(2, 6),
    /** Header level. `<h1>` is reserved for the page title. It should not appear in components */
    level: CustomPropTypes.range(2, 6)
};

export default withStyles(ListHeader);
