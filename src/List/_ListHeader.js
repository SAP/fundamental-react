import classnames from 'classnames';
import CustomPropTypes from '../utils/CustomPropTypes/CustomPropTypes';
import PropTypes from 'prop-types';
import React from 'react';
import Title from '../Title/Title';

const ListHeader = ({
    className,
    children,
    headingLevel,
    headingStyle,
    ...props
}) => {
    const ListItemClasses = classnames(
        'fd-list__group-header',
        className
    );

    const style = headingStyle || headingLevel;

    return (
        <Title
            {...props}
            className={ListItemClasses}
            level={headingLevel}
            levelStyle={style}>
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
    /** Header level. `<h1>` is reserved for the page title. It should not appear in components */
    headingLevel: CustomPropTypes.range(2, 6),
    /** Heading style, if it should be different from the default style for the heading level. */
    headingStyle: CustomPropTypes.range(2, 6)
};

export default ListHeader;
