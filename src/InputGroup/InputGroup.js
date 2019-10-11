import classnames from 'classnames';
import FormInput from '../Forms/FormInput';
import InputGroupAddon from './_InputGroupAddon';
import PropTypes from 'prop-types';
import withStyles from '../utils/WithStyles/WithStyles';
import { INPUT_GROUP_ADDON_POSITIONS, INPUT_GROUP_TYPES } from '../utils/constants';
import React, { Component } from 'react';

class InputGroup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: this.props.inputValue
        };
    }

    handleUp = e => {
        e.preventDefault();
        this.setState({
            value: parseInt(this.state.value, 10) + 1
        }, () => {
            this.props.numberUpCallback(event, this.state.value);
        });
    };

    handleDown = e => {
        e.preventDefault();
        this.setState({
            value: parseInt(this.state.value, 10) - 1
        }, () => {
            this.props.numberDownCallback(event, this.state.value);
        });
    };

    handleTextChange = e => {
        e.preventDefault();
        this.setState({
            value: e.target.value
        });
    };

    render() {
        let {
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
            numberDownCallback,
            numberUpCallback,
            ...props
        } = this.props;

        children = React.Children.map(children, (child) => {
            return React.cloneElement(child, {
                compact: compact
            });
        });

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
            'fd-input-group__input',
            [{ 'fd-input--no-number-spinner': inputType === 'number' }]
        );

        const input = (
            <FormInput
                {...inputProps}
                className={inputClasses}
                compact={compact}
                disableStyles={disableStyles}
                id={inputId}
                name={inputName}
                onChange={this.handleTextChange}
                type={inputType}
                value={this.state.value} />
        );

        const inputGroupAddon = (
            <InputGroupAddon actions={actions} addon={addon}
                className={addonClasses}
                compact={compact}
                glyph={glyph}
                inputType={inputType}
                numberDownCallback={this.handleDown}
                numberUpCallback={this.handleUp} >
                {children}
            </InputGroupAddon>
        );

        if (addonPos === 'before') {
            return (
                <div {...props}
                    className={inputGroupClasses}>
                    {inputGroupAddon}
                    {input}
                </div>
            );
        } else {
            return (
                <div {...props}
                    className={inputGroupClasses}>
                    {input}
                    {inputGroupAddon}
                </div>
            );
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
    numberDownCallback: PropTypes.func,
    numberUpCallback: PropTypes.func
};

InputGroup.defaultProps = {
    addonPos: 'after',
    inputType: 'text',
    inputValue: ''

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
    inputValue: 'Value for the `value` attribute on the `<input>` element.'
};

export { InputGroup as __InputGroup };

export default withStyles(InputGroup, { cssFile: 'input-group', fonts: true });
