import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const ListText = ({
    children,
    className,
    left,
    noWrap,
    right,
    secondary,
    ...props
}) => {

    let type = 'title';

    if (secondary) {
        type = 'secondary';
    }

    const listTextClasses = classnames(
        {
            [`fd-list__${type}`]: !left && !right,
            [`fd-list__${type}--no-wrap`]: noWrap,
            'fd-list__byline-left': left,
            'fd-list__byline-right': right
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
    /** Set to **true** if there are two bylines to left align the text. */
    left: PropTypes.bool,
    /** Text is wrapped by default, set to **true** to prevent the text from wrapping */
    noWrap: PropTypes.bool,
    /** Set to **true** if there are two bylines to right align the text. */
    right: PropTypes.bool,
    /** Set to **true** to right align the text in the list */
    secondary: PropTypes.bool
};

export default ListText;
