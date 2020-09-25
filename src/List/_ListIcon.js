import classnamesBind from 'classnames/bind';
import { listOfIcons } from '../utils/listOfIcons';
import PropTypes from 'prop-types';
import React from 'react';
import iconStyles from 'fundamental-styles/dist/icon.css';
import listStyles from 'fundamental-styles/dist/list.css';

const classnames = classnamesBind.bind({
    ...iconStyles,
    ...listStyles
});

const ListIcon = ({ className, glyph, ...props }) => {
    const listIconClasses = classnames(
        'fd-list__icon',
        {
            [`sap-icon--${glyph}`]: glyph
        },
        className
    );

    return (
        <span {...props} className={listIconClasses} />
    );
};

ListIcon.displayName = 'List.Icon';

ListIcon.propTypes = {
    glyph: PropTypes.oneOf(listOfIcons).isRequired,
    /** CSS class(es) to add to the element */
    className: PropTypes.string
};

export default ListIcon;
