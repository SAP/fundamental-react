import classnamesBind from 'classnames/bind';
import Icon from '../Icon/Icon';
import { listOfIcons } from '../utils/listOfIcons';
import PropTypes from 'prop-types';
import React from 'react';
import withStyles from '../utils/withStyles';
import iconStyles from 'fundamental-styles/dist/icon.css';
import listStyles from 'fundamental-styles/dist/list.css';

const classnames = classnamesBind.bind({
    ...iconStyles,
    ...listStyles
});

const ListIcon = ({ className, cssNamespace, glyph, ...props }) => {
    const listIconClasses = classnames(
        `${cssNamespace}-list__icon`,
        className
    );

    return (
        <Icon {...props} ariaHidden
            className={listIconClasses} glyph={glyph} />
    );
};

ListIcon.displayName = 'List.Icon';

ListIcon.propTypes = {
    glyph: PropTypes.oneOf(listOfIcons).isRequired,
    /** CSS class(es) to add to the element */
    className: PropTypes.string
};

export default withStyles(ListIcon);
