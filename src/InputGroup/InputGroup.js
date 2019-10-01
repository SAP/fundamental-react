import Button from '../Button/Button';
import classnames from 'classnames';
import CustomPropTypes from '../utils/CustomPropTypes/CustomPropTypes';
import FormInput from '../Forms/FormInput';
import Icon from '../Icon/Icon';
import PropTypes from 'prop-types';
import withStyles from '../utils/WithStyles/WithStyles';
import { INPUT_GROUP_ADDON_POSITIONS, INPUT_GROUP_TYPES } from '../utils/constants';
import React, { Component } from 'react';

class InputGroup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: this.props.inputValue,
            searchValue: this.props.inputValue
        };
    }

    handleUp = e => {
        e.preventDefault();
        this.setState({
            value: parseInt(this.state.value, 10) + 1
        });
    };

    handleDown = e => {
        e.preventDefault();
        this.setState({
            value: parseInt(this.state.value, 10) - 1
        });
    };

    handleClear = e => {
        e.preventDefault();
        this.setState({
            searchValue: ''
        });
    };

    handleChange = e => {
        e.preventDefault();
        this.setState({
            searchValue: e.target.value
        });
    };

    handleTextChange = e => {
        e.preventDefault();
        this.setState({
            value: e.target.value
        });
    };

    render() {
        const {
            actions,
            addonClassNames,
            addonPos,
            addon,
            children,
            className,
            compact,
            disableStyles,
            glyph,
            inputClassName,
            inputType,
            inputId,
            inputName,
            inputPlaceholder,
            inputProps,
            inputValue,
            localizedText,
            numberDownButtonProps,
            numberUpButtonProps,
            ...props
        } = this.props;

        const inputGroupClasses = classnames(
            className,
            'fd-input-group'
        );

        const addonClasses = classnames(
            addonClassNames,
            'fd-input-group__addon',
            [{ 'fd-input-group__addon--button': !!actions || inputType === 'number' }]
        );

        const inputClasses = classnames(
            inputClassName,
            'fd-input-group__input'
        );

        switch (inputType) {
            case 'number':

                const inputNumberClasses = classnames(
                    inputClasses,
                    'fd-input--no-number-spinner'
                );

                return (
                    <div
                        {...props}
                        className={inputGroupClasses}>
                        <FormInput
                            {...inputProps}
                            className={inputNumberClasses}
                            compact={compact}
                            disableStyles={disableStyles}
                            id={inputId}
                            name={inputName}
                            onChange={this.handleTextChange}
                            type='number'
                            value={this.state.value} />
                        <span className={addonClasses}>
                            <Button
                                {...numberUpButtonProps}
                                aria-label={localizedText.up}
                                className='fd-button--half fd-input-group__button'
                                compact={compact}
                                disableStyles={disableStyles}
                                glyph='slim-arrow-up'
                                onClick={this.handleUp}
                                option='light' />
                            <Button
                                {...numberDownButtonProps}
                                aria-label={localizedText.down}
                                className='fd-button--half fd-input-group__button'
                                compact={compact}
                                disableStyles={disableStyles}
                                glyph='slim-arrow-down'
                                onClick={this.handleDown}
                                option='light' />
                        </span>
                    </div>
                );
            case 'text':
            default: {
                if (addonPos === 'before') {
                    return (
                        <div
                            {...props}
                            className={inputGroupClasses}>
                            {actions ? (
                                <span className={addonClasses}>
                                    {children}
                                </span>
                            ) : (
                                <span className={addonClasses}>
                                    {glyph ? (
                                        <Icon
                                            disableStyles={disableStyles}
                                            glyph={glyph}
                                            role='presentation' />
                                    ) : (
                                        addon
                                    )}
                                </span>
                            )}
                            <FormInput
                                {...inputProps}
                                className={inputClasses}
                                compact={compact}
                                disableStyles={disableStyles}
                                id={inputId}
                                name={inputName}
                                onChange={this.handleTextChange}
                                value={this.state.value} />
                        </div>
                    );
                } else {
                    return (
                        <div
                            {...props}
                            className={inputGroupClasses}>
                            <FormInput
                                {...inputProps}
                                className={inputClasses}
                                compact={compact}
                                disableStyles={disableStyles}
                                id={inputId}
                                name={inputName}
                                onChange={this.handleTextChange}
                                value={this.state.value} />
                            {actions ? (
                                <span className={addonClasses}>
                                    {children}
                                </span>
                            ) : (
                                <span className={addonClasses}>
                                    {glyph ? (
                                        <Icon
                                            disableStyles={disableStyles}
                                            glyph={glyph}
                                            role='presentation' />
                                    ) : (
                                        addon
                                    )}
                                </span>
                            )}
                        </div>
                    );
                }
            }
        }
    }
}

InputGroup.displayName = 'InputGroup';

InputGroup.propTypes = {
    actions: PropTypes.bool,
    addon: PropTypes.string,
    addonClassNames: PropTypes.string,
    addonPos: PropTypes.oneOf(INPUT_GROUP_ADDON_POSITIONS),
    children: PropTypes.node,
    className: PropTypes.string,
    compact: PropTypes.bool,
    customStyles: PropTypes.object,
    disableStyles: PropTypes.bool,
    glyph: PropTypes.string,
    inputClassName: PropTypes.string,
    inputId: PropTypes.string,
    inputName: PropTypes.string,
    inputPlaceholder: PropTypes.string,
    inputProps: PropTypes.object,
    inputType: PropTypes.oneOf(INPUT_GROUP_TYPES),
    inputValue: PropTypes.any,
    localizedText: CustomPropTypes.i18n({
        clear: PropTypes.string,
        down: PropTypes.string,
        up: PropTypes.string
    }),
    numberDownButtonProps: PropTypes.object,
    numberUpButtonProps: PropTypes.object
};

InputGroup.defaultProps = {
    addonPos: 'after',
    inputType: 'text',
    inputValue: '',
    localizedText: {
        clear: 'Clear',
        down: 'Step down',
        up: 'Step up'
    }
};

InputGroup.propDescriptions = {
    actions: 'Set to **true** to enable an input with actions. Actions can be shown with a text label or icon.',
    addon: 'The value of the add-on.',
    addonClassNames: 'CSS class(es) to add to the addon element.',
    addonPos: 'Location of the add-on relative to the input.',
    inputId: 'Value for the `id` attribute on the `<input>` element.',
    inputClassName: 'CSS class(es) to add to the `<input>` element.',
    inputName: 'Value for the `name` attribute on the `<input>` element.',
    inputPlaceholder: 'Value for the `placeholder` attribute on the `<input>` element.',
    inputType: 'Value for the `type` attribute on the `<input>` element.',
    inputValue: 'Value for the `value` attribute on the `<input>` element.',
    localizedTextShape: {
        clear: 'Value for aria-label on the clear <button> element.',
        down: 'Value for aria-label on the down <button> element.',
        up: 'Value for aria-label on the up <button> element.'
    },
    numberDownButtonProps: 'Additional props to be spread to the down `<button>` element (for inputType=\'number\').',
    numberUpButtonProps: 'Additional props to be spread to the up `<button>` element (for inputType=\'number\').'
};

export { InputGroup as __InputGroup };

export default withStyles(InputGroup, { cssFile: 'input-group', fonts: true });
