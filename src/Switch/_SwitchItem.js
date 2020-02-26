import classnames from 'classnames';
import { listOfIcons } from '../utils/listOfIcons';
import PropTypes from 'prop-types';
import React from 'react';

const SwitchItem = ({ glyph, text, type }) => {

    const spanClasses = classnames(
        'fd-fd-switch__text',
        {
            [`fd-switch__text--${type}`]: !glyph,
            [`fd-switch__icon fd-switch__icon--${type} sap-icon--${glyph}`]: glyph
        }
    );

    return (
        <span
            aria-label={text}
            className={spanClasses}>
            {!glyph && text}
        </span>
    );

};

SwitchItem.displayName = 'SwitchItem';

SwitchItem.propTypes = {
    text: PropTypes.string.isRequired,
    glyph: PropTypes.oneOf(listOfIcons),
    type: PropTypes.oneOf(['on', 'off'])
};

SwitchItem.propDescriptions = {
    text: 'Localized text for the label.',
    glyph: 'Optional icon to include. See the icon page for the list of icons.'
};

export default SwitchItem;
