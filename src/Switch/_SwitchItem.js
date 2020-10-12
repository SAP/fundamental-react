import classnamesBind from 'classnames/bind';
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

    const spanClasses = classnames(
        {
            [`${cssNamespace}-switch__icon`]: !!glyph,
            [`${cssNamespace}-switch__icon--${type}`]: !!glyph,
            [`sap-icon--${glyph}`]: !!glyph
        }
    );

    return (
        <span
            aria-label={text}
            className={spanClasses} />
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
