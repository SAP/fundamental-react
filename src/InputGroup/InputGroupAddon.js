import Button from '../Button/Button';
import classnames from 'classnames';
import CustomPropTypes from '../utils/CustomPropTypes/CustomPropTypes';
import Icon from '../Icon/Icon';
import PropTypes from 'prop-types';
import React from 'react';
import withStyles from '../utils/WithStyles/WithStyles';

const InputGroupAddon = ({
    addon,
    compact,
    actions,
    glyph,
    addonClassNames,
    children,
    className,
    disableStyles,
    inputType,
    numberDownCallback,
    numberUpCallback,
    localizedText,
    numberDownButtonProps,
    numberUpButtonProps,
    onClick,
    ...otherProps
}) => {

    let returnObject = addon;

    if (actions) {
        returnObject = children;
    } else if (glyph) {
        returnObject = (
            <Icon
                disableStyles={disableStyles}
                glyph={glyph}
                role='presentation' />
        );
    }

    const addonClasses = classnames(
        addonClassNames,
        'fd-input-group__addon',
        [{ 'fd-input-group__addon--button': !!actions || inputType === 'number' }],
        [{ 'fd-input-group__addon--button--compact': compact }],
    );

    if (inputType === 'number') {
        return (
            <span {...otherProps} className={addonClasses}>
                <Button
                    {...numberUpButtonProps}
                    aria-label={localizedText.up}
                    className='fd-button--half fd-input-group__button'
                    compact={compact}
                    disableStyles={disableStyles}
                    glyph='slim-arrow-up'
                    onClick={numberUpCallback}
                    option='light' />
                <Button
                    {...numberDownButtonProps}
                    aria-label={localizedText.down}
                    className='fd-button--half fd-input-group__button'
                    compact={compact}
                    disableStyles={disableStyles}
                    glyph='slim-arrow-down'
                    onClick={numberDownCallback}
                    option='light' />
            </span>
        );
    } else {
        return (
            <span className={addonClasses} {...otherProps} >
                {returnObject}
            </span>
        );
    }
};


InputGroupAddon.displayName = 'InputGroupAddon';

InputGroupAddon.propTypes = {
    addon: PropTypes.string,
    addonClassNames: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
    customStyles: PropTypes.object,
    disableStyles: PropTypes.bool,
    glyph: PropTypes.string,
    localizedText: CustomPropTypes.i18n({
        clear: PropTypes.string,
        down: PropTypes.string,
        up: PropTypes.string
    }),
    numberDownButtonProps: PropTypes.object,
    numberUpButtonProps: PropTypes.object,
    onClick: PropTypes.func
};

InputGroupAddon.defaultProps = {
    localizedText: {
        clear: 'Clear',
        down: 'Step down',
        up: 'Step up'
    }
};

InputGroupAddon.propDescriptions = {
    addon: 'The value of the add-on.',
    addonClassNames: 'CSS class(es) to add to the addon element.',
    localizedTextShape: {
        clear: 'Value for aria-label on the clear <button> element.',
        down: 'Value for aria-label on the down <button> element.',
        up: 'Value for aria-label on the up <button> element.'
    },
    numberDownButtonProps: 'Additional props to be spread to the down `<button>` element (for inputType=\'number\').',
    numberUpButtonProps: 'Additional props to be spread to the up `<button>` element (for inputType=\'number\').'
};

export { InputGroupAddon as __InputGroupAddon };

export default withStyles(InputGroupAddon, { cssFile: 'input-group', fonts: true });
