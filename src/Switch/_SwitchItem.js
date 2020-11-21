import classnamesBind from 'classnames/bind';
import Icon from '../Icon/Icon';
import { listOfIcons } from '../utils/listOfIcons';
import PropTypes from 'prop-types';
import React from 'react';
import withStyles from '../utils/withStyles';
import iconStyles from 'fundamental-styles/dist/icon.css';
import switchStyles from 'fundamental-styles/dist/switch.css';

const classnames = classnamesBind.bind({
    ...iconStyles,
    ...switchStyles
});

const SwitchItem = ({ glyph, text, type, cssNamespace }) => {

    const iconClasses = classnames(
        {
            [`${cssNamespace}-switch__icon`]: !!glyph,
            [`${cssNamespace}-switch__icon--${type}`]: !!glyph
        }
    );

    return (
        <Icon
            ariaLabel={text}
            className={iconClasses}
            glyph={glyph} />
    );

};

SwitchItem.displayName = 'SwitchItem';

SwitchItem.propTypes = {
    /** Localized text for the label */
    text: PropTypes.string.isRequired,
    /** Optional icon to include. See the icon page for the list of icons */
    glyph: PropTypes.oneOf(listOfIcons),
    /** Sets the variation of the component. Primarily used for styling */
    type: PropTypes.oneOf(['on', 'off'])
};

export default withStyles(SwitchItem);
