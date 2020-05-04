import classnames from 'classnames';
import { listOfIcons } from '../utils/listOfIcons';
import PropTypes from 'prop-types';
import React from 'react';

const SwitchItem = ({ glyph, text, type }) => {

    const spanClasses = classnames(
        'fd-fd-switch__text',
        {
            [`fd-switch__icon fd-switch__icon--${type} sap-icon--${glyph}`]: glyph
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

export default SwitchItem;
