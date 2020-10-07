import classnamesBind from 'classnames/bind';
import Icon from '../Icon/Icon';
import { listOfIcons } from '../utils/listOfIcons';
import PropTypes from 'prop-types';
import React from 'react';
import iconStyles from 'fundamental-styles/dist/icon.css';
import switchStyles from 'fundamental-styles/dist/switch.css';

const classnames = classnamesBind.bind({
    ...iconStyles,
    ...switchStyles
});

const SwitchItem = ({ glyph, text, type }) => {

    const iconClasses = classnames(
        {
            [`fd-switch__icon--${type}`]: !!glyph,
            ['fd-switch__icon']: !!glyph,
            [`sap-icon--${glyph}`]: !!glyph
        }
    );

    return (
        <Icon
            ariaLabel={text}
            className={iconClasses} />
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

export default SwitchItem;
