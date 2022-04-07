import classnamesBind from 'classnames/bind';
import CustomPropTypes from '../utils/CustomPropTypes/CustomPropTypes';
import FormLabel from '../Forms/FormLabel';
import keycode from 'keycode';
import PropTypes from 'prop-types';
import SwitchItem from './_SwitchItem';
import withStyles from '../utils/withStyles';
import React, { useCallback, useEffect, useState } from 'react';
import styles from 'fundamental-styles/dist/switch.css';

const classnames = classnamesBind.bind(styles);

/** A **Switch** component is used to activate or deactivate an element. It uses a visual metaphor that is known
to the user with visible differences between on and off state. It is recommended to always display the
Switch with a label above it as well as the label of the selected state. For example, the label above
would be "Active", the Switch state would be “on” and the selected state label displayed to the right of
the Switch would be “Yes”. */
const Switch = React.forwardRef(({
    checked,
    children,
    compact,
    cssNamespace,
    disabled,
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

    let [isChecked, setIsChecked] = useState(!!checked);

    useEffect(() => {
        setIsChecked(!!checked);
    }, [checked]);

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
        `${cssNamespace}-switch__control`,
        {
            [`${cssNamespace}-switch--compact`]: compact,
            [`${cssNamespace}-switch--semantic`]: semantic
        }
    );

    let internalLabelDisplay;
    if (internalLabels && showInternalLabels) {
        const internalLabelText = isChecked ? internalLabels.checked.text : internalLabels.unchecked.text;
        internalLabelDisplay = <span aria-live='polite' className={classnames(`${cssNamespace}-switch__text`)}>{internalLabelText}</span>;
    }

    return (
        <>
            <FormLabel
                disabled={disabled}
                {...props}
                htmlFor={id}
                onKeyDown={onKeyDownSwitch}>
                {children}
            </FormLabel>
            <label className={classnames(`${cssNamespace}-switch`)}>
                {internalLabelDisplay}
                <span className={spanClasses}>
                    <input
                        {...inputProps}
                        aria-checked={isChecked}
                        aria-label={localizedText.switchLabel}
                        checked={isChecked}
                        className={classnames(`${cssNamespace}-switch__input`)}
                        disabled={disabled}
                        id={id}
                        onChange={handleChange}
                        ref={ref}
                        type='checkbox' />
                    <div className={classnames(`${cssNamespace}-switch__slider`)}>
                        <div className={classnames(`${cssNamespace}-switch__track`)}>
                            {internalLabels ? (
                                <>
                                    <SwitchItem
                                        glyph={internalLabels.checked.glyph}
                                        text={internalLabels.checked.text}
                                        type='on' />
                                    <span className={classnames(`${cssNamespace}-switch__handle`)} role='presentation' />
                                    <SwitchItem
                                        glyph={internalLabels.unchecked.glyph}
                                        text={internalLabels.unchecked.text}
                                        type='off' />
                                </>
                            ) : (<span className={classnames(`${cssNamespace}-switch__handle`)} role='presentation' />)
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
    /** Set to true for component to be checked on render */
    checked: PropTypes.bool,
    /** Node(s) to render within the component */
    children: PropTypes.node,
    /** CSS class(es) to add to the element */
    className: PropTypes.string,
    /** Set to **true** to enable compact mode */
    compact: PropTypes.bool,
    /** Set to **true** to mark component as disabled and make it non-interactive */
    disabled: PropTypes.bool,
    /** Value for the `id` attribute on the element */
    id: PropTypes.string,
    /** Additional props to be spread to the `<input>` element */
    inputProps: PropTypes.object,
    /** Provide text and/or an icon for labels inside the Switch component */
    internalLabels: PropTypes.shape({
        checked: PropTypes.shape(SwitchItem.PropTypes),
        unchecked: PropTypes.shape(SwitchItem.PropTypes)
    }),
    /** Additional props to be spread to the `<label>` element */
    labelProps: PropTypes.object,
    /** Localized text to be updated based on location/language */
    localizedText: CustomPropTypes.i18n({
        switchLabel: PropTypes.string
    }),
    /** Set to **true** to add semantic styling */
    semantic: PropTypes.bool,
    /** Set to true to display text from `internalLabels` next to the switch */
    showInternalLabels: PropTypes.bool,
    /**
     * Callback function; triggered when the switch state changes
     * i.e. a change event is fired on the underlying HTML `<input>`.
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent. See https://reactjs.org/docs/events.html.
     * @returns {void}
     * */
    onChange: PropTypes.func
};

Switch.defaultProps = {
    localizedText: {
        switchLabel: 'Switch'
    },
    onChange: () => { }
};

export default withStyles(Switch);
