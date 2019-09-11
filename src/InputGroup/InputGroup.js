import 'fundamental-styles/dist/input-group.css';
import Button from '../Button/Button';
import classnames from 'classnames';
import CustomPropTypes from '../utils/CustomPropTypes/CustomPropTypes';
import FormInput from '../Forms/FormInput';
import PropTypes from 'prop-types';
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
            value: this.state.value + 1
        });
    };

    handleDown = e => {
        e.preventDefault();
        this.setState({
            value: this.state.value - 1
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
            addonPos,
            addon,
            children,
            className,
            compact,
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
            searchButtonProps,
            ...props
        } = this.props;

        switch (inputType) {
            case 'number':
                const inputGroupNumberClasses = classnames(
                    className,
                    'fd-input-group'
                );

                return (
                    <div
                        {...props}
                        className={inputGroupNumberClasses}>
                        <FormInput
                            {...inputProps}
                            className={inputClassName}
                            compact={compact}
                            id={inputId}
                            name={inputName}
                            onChange={this.handleTextChange}
                            value={this.state.value} />
                        <span className='fd-input-group__addon fd-input-group__addon--button'>
                            <Button
                                {...numberUpButtonProps}
                                aria-label={localizedText.up}
                                className='fd-button--half'
                                compact={compact}
                                glyph='slim-arrow-up'
                                onClick={this.handleUp}
                                option='light' />
                            <Button
                                {...numberDownButtonProps}
                                aria-label={localizedText.down}
                                className='fd-button--half'
                                compact={compact}
                                glyph='slim-arrow-down'
                                onClick={this.handleDown}
                                option='light' />
                        </span>
                    </div>
                );
            case 'text':
            default: {
                if (addonPos === 'before') {
                    const inputGroupBeforeClasses = classnames(
                        className,
                        'fd-input-group'
                    );

                    return (
                        <div
                            {...props}
                            className={inputGroupBeforeClasses}>
                            {actions ? (
                                <span className='fd-input-group__addon fd-input-group__addon--button'>
                                    {children}
                                </span>
                            ) : (
                                <span className='fd-input-group__addon'>
                                    {glyph ? (
                                        <span
                                            className={`sap-icon--${glyph}`}
                                            role='presentation' />
                                    ) : (
                                        addon
                                    )}
                                </span>
                            )}
                            <FormInput
                                {...inputProps}
                                className={inputClassName}
                                compact={compact}
                                id={inputId}
                                name={inputName}
                                onChange={this.handleTextChange}
                                value={this.state.value} />
                        </div>
                    );
                } else {
                    const inputGroupAfterClasses = classnames(
                        className,
                        'fd-input-group'
                    );

                    return (
                        <div
                            {...props}
                            className={inputGroupAfterClasses}>
                            <FormInput
                                {...inputProps}
                                className={inputClassName}
                                compact={compact}
                                id={inputId}
                                name={inputName}
                                onChange={this.handleTextChange}
                                value={this.state.value} />
                            {actions ? (
                                <span className='fd-input-group__addon fd-input-group__addon--button'>
                                    {children}
                                </span>
                            ) : (
                                <span className='fd-input-group__addon'>
                                    {glyph ? (
                                        <span
                                            className={`sap-icon--${glyph}`}
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
    addonPos: PropTypes.oneOf(INPUT_GROUP_ADDON_POSITIONS),
    children: PropTypes.node,
    className: PropTypes.string,
    compact: PropTypes.bool,
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
    numberUpButtonProps: PropTypes.object,
    searchButtonProps: PropTypes.object
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
    numberUpButtonProps: 'Additional props to be spread to the up `<button>` element (for inputType=\'number\').',
    searchButtonProps: 'Additional props to be spread to the `<button>` element.'
};

export default InputGroup;
