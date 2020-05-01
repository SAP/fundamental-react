import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const ListText = ({
    className,
    children,
    noWrap,
    secondary,
    ...props
}) => {

    const type = secondary ? 'secondary' : 'title';

    const listTextClasses = classnames(
        [`fd-list__${type}`],
        {
            [`fd-list__${type}--no-wrap`]: noWrap
        },
        className
    );

    return (
        <span {...props} className={listTextClasses}>
            {children}
        </span>

    );
};

ListText.displayName = 'List.Text';

ListText.propTypes = {
    /** Node(s) to render within the component */
    children: PropTypes.node,
    /** CSS class(es) to add to the element */
    className: PropTypes.string,
    noWrap: PropTypes.bool,
    secondary: PropTypes.bool
};

ListText.propDescriptions = {
    noWrap: 'Text is wrapped by default, set to **true** to prevent the text from wrapping.',
    secondary: 'Set to **true** to right align the text in the list.'
};

export default ListText;
