import classnamesBind from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';
import withStyles from '../utils/withStyles';
import styles from 'fundamental-styles/dist/list.css';

const classnames = classnamesBind.bind(styles);

const ListText = ({
    children,
    className,
    cssNamespace,
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
            [`${cssNamespace}-list__${type}`]: !left && !right,
            [`${cssNamespace}-list__${type}--no-wrap`]: noWrap,
            [`${cssNamespace}-list__byline-left`]: left,
            [`${cssNamespace}-list__byline-right`]: right
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

export default withStyles(ListText);
