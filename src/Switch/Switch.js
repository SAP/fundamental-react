import classnames from 'classnames';
import CustomPropTypes from '../utils/CustomPropTypes/CustomPropTypes';
import FormLabel from '../Forms/FormLabel';
import keycode from 'keycode';
import PropTypes from 'prop-types';
import SwitchItem from './_SwitchItem';
import React, { useCallback, useEffect, useState } from 'react';


const Switch = React.forwardRef(({
    checked,
    children,
    compact,
    disabled,
    disableStyles,
    className,
    id,
    inputProps,
    internalLabels,
    localizedText,
    onChange,
    semantic,
    showInternalLabels,
    ...props
}, ref) => {

    useEffect(() => {
        if (!disableStyles) {
            require('fundamental-styles/dist/icon.css');
            require('fundamental-styles/dist/switch.css');
        }
    }, []);

    let [isChecked, setIsChecked] = useState(!!checked);

    const handleChange = (e) => {
        setIsChecked(!isChecked);
        onChange(e);
    };

    const onKeyDownSwitch = useCallback((event) => {
        switch (keycode(event)) {
            case 'enter':
                event.preventDefault();
                event.stopPropagation();
                setIsChecked(!isChecked);
                break;
            default:
        }
    });

    const spanClasses = classnames(
        'fd-switch',
        {
            'fd-switch--compact': compact,
            'fd-switch--semantic': semantic
        }
    );

    let internalLabelDisplay;
    if (internalLabels && showInternalLabels) {
        const internalLabelText = isChecked ? internalLabels.checked.text : internalLabels.unchecked.text;
        internalLabelDisplay = <span aria-live='polite' className='fd-switch__text'>{internalLabelText}</span>;
    }

    return (
        <>
            <FormLabel
                disabled={disabled}
                {...props}
                disableStyles={disableStyles}
                htmlFor={id}
                onKeyDown={onKeyDownSwitch}>
                {children}
            </FormLabel>
            <label className='fd-switch__label'>
                {internalLabelDisplay}
                <span className={spanClasses}>
                    <input
                        {...inputProps}
                        aria-checked={isChecked}
                        aria-label={localizedText.switchLabel}
                        checked={isChecked}
                        className='fd-switch__input'
                        disabled={disabled}
                        id={id}
                        onChange={handleChange}
                        ref={ref}
                        type='checkbox' />
                    <div className='fd-switch__wrapper'>
                        <div className='fd-switch__track'>
                            {internalLabels ? (
                                <>
                                    <SwitchItem
                                        glyph={internalLabels.checked.glyph}
                                        text={internalLabels.checked.text}
                                        type='on' />
                                    <span className='fd-switch__handle' role='presentation' />
                                    <SwitchItem
                                        glyph={internalLabels.unchecked.glyph}
                                        text={internalLabels.unchecked.text}
                                        type='off' />
                                </>
                            ) : (<span className='fd-switch__handle' role='presentation' />)
                            }
                        </div>
                    </div>
                </span>
            </label>
        </>
    );

});


Switch.displayName = 'Switch';

Switch.propTypes = {
    checked: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    compact: PropTypes.bool,
    disabled: PropTypes.bool,
    disableStyles: PropTypes.bool,
    id: PropTypes.string,
    inputProps: PropTypes.object,
    internalLabels: PropTypes.shape({
        checked: PropTypes.shape(SwitchItem.PropTypes),
        unchecked: PropTypes.shape(SwitchItem.PropTypes)
    }),
    labelProps: PropTypes.object,
    localizedText: CustomPropTypes.i18n({
        switchLabel: PropTypes.string
    }),
    semantic: PropTypes.bool,
    showInternalLabels: PropTypes.bool,
    onChange: PropTypes.func
};

Switch.defaultProps = {
    localizedText: {
        switchLabel: 'Switch'
    },
    onChange: () => { }
};

Switch.propDescriptions = {
    checked: 'Set to true for component to be checked on render.',
    internalLabels: 'Provide text and/or an icon for labels inside the Switch component.',
    showInternalLabels: 'Set to true to display text from `internalLabels` next to the switch.'
};

export default Switch;
