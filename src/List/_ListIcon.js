import classnames from 'classnames';
import { listOfIcons } from '../utils/listOfIcons';
import PropTypes from 'prop-types';
import React from 'react';

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
    className: PropTypes.string
};

export default ListIcon;
