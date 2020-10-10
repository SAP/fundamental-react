import Button from '../Button/Button';
import classnamesBind from 'classnames/bind';
import FormInput from '../Forms/FormInput';
import InputGroup from '../InputGroup/InputGroup';
import PropTypes from 'prop-types';
import withStyles from '../utils/withStyles';
import React, { Component } from 'react';
import styles from 'fundamental-styles/dist/input-group.css';

const classnames = classnamesBind.bind(styles);

class TimePickerItem extends Component {
    constructor(props) {
        super(props);
        var length = this.setLength(props);
        this.CLOCK = [this.props.localizedText.meridiemAM, this.props.localizedText.meridiemPM];
        this.state = {
            value: this.props.value,
            inputId: this.props.id && this.props.id + '-input',
            buttonID: this.props.id && this.props.id + '-button',
            style: '',
            isValid: false,
            length: length
        };
    }

    setLength = props => {
        var length = 0;
        if (
            props.format12Hours &&
            props.showHour &&
            props.showMinute &&
            props.showSecond
        ) {
            //format hh:mm:ss am
            length = 11;
        } else if (
            !props.format12Hours &&
            props.showHour &&
            props.showMinute &&
            props.showSecond
        ) {
            //format hh:mm:ss
            length = 8;
        } else if (
            (!props.format12Hours && props.showHour && props.showMinute) ||
            (!props.format12Hours && props.showMinute && props.showSecond)
        ) {
            //format hh:mm
            length = 5;
        } else if (
            (props.format12Hours && props.showHour && props.showMinute) ||
            (props.format12Hours && props.showMinute && props.showSecond)
        ) {
            //format hh:mm am
            length = 8;
        }
        return length;
    };

    onChange = event => {
        event.stopPropagation();
        this.setState({ value: event.target.value });
        var aux = event.target.value;
        this.onInputValidation(aux, event);
        this.props.updateValue(aux);
    };
    onInputValidation = (value, event) => {
        const { showHour, showMinute, showSecond, format12Hours } = this.props;
        if (format12Hours && showHour && showMinute && showSecond) {
            //validate hh:mm:ss am/pm format
            let regex = new RegExp('^(1[0-2]|0?[1-9]):([0-5]?[0-9]):([0-5]?[0-9]) ([AaPp][Mm])$');
            return this.inputCheck(regex, value, event);
        } else if (!format12Hours && showHour && showMinute && showSecond) {
            //validate hh:mm:ss format
            let regex = new RegExp('^(2[0-3]|[01]?[0-9]):([0-5]?[0-9]):([0-5]?[0-9])$');
            return this.inputCheck(regex, value, event);
        } else if (format12Hours && showHour && showMinute) {
            //validate hh:mm am
            let regex = new RegExp('^(1[0-2]|0?[1-9]):([0-5]?[0-9]) ([AaPp][Mm])$');
            return this.inputCheck(regex, value, event);
        } else if (!format12Hours && showHour && showMinute) {
            //validate hh:mm
            let regex = new RegExp('^(2[0-3]|[01]?[0-9]):([0-5]?[0-9])$');
            return this.inputCheck(regex, value, event);
        } else if (format12Hours && showMinute && showSecond) {
            //validate mm:ss am
            let regex = new RegExp('^([0-5]?[0-9]):([0-5]?[0-9]) ([AaPp][Mm])$');
            return this.inputCheck(regex, value, event);
        } else if (!format12Hours && showMinute && showSecond) {
            //validate mm:ss
            let regex = new RegExp('^([0-5]?[0-9]):([0-5]?[0-9])$');
            return this.inputCheck(regex, value, event);
        }
    };
    inputCheck = (regex, value, event) => {
        if (regex.test(value) && value.length === this.state.length) {
            if (event.type === 'blur') {
                return true;
            }
            this.setState({ isValid: true, style: classnames(`${this.props.cssNamespace}-input-group__input`) });
            //send time value to Time Component
            this.updateTime(value);
        } else {
            if (event.type === 'blur') {
                return false;
            }
            this.setState({ isValid: false, style: classnames('is-invalid') });
        }
    };

    updateTime = value => {
        const { length } = this.state;
        const { showHour, showMinute, showSecond, format12Hours } = this.props;
        if (length === 11) {
            // this means the time format is hh:mm:ss am convert string into corresponding
            // time format
            let timeValues = value.split(' ');
            if (timeValues.length === 2) {
                let timeValue = timeValues[0].split(':');
                let time = {
                    hour: timeValue[0],
                    minute: timeValue[1],
                    second: timeValue[2],
                    meridiem: this.CLOCK.indexOf(timeValues[1])
                };
                this.props.onChange(time);
            }
        } else if (length === 5) {
            //format hh:mm or mm:ss
            if (showHour && showMinute && !showSecond) {
                this.updateTimeHHMM(value);
            } else if (!showHour && showMinute && showSecond) {
                this.updateTimeMMSS(value);
            }
        } else if (length === 8) {
            if (format12Hours) {
                if (showHour && showMinute && !showSecond) {
                    //hh:mm am
                    this.updateTimeHHMMAM(value);
                } else if (!showHour && showMinute && showSecond) {
                    //hh:mm am
                    this.updateTimeMMSSAM(value);
                }
            } else {
                //hh:mm:ss
                this.updateTimeHHMMSS(value);
            }
        }
    };
    updateTimeHHMMSS = value => {
        let timeValues = value.split(':');
        if (timeValues.length === 3) {
            let time = {
                hour: timeValues[0],
                minute: timeValues[1],
                second: timeValues[2]
            };
            this.props.onChange(time);
        }
    };
    updateTimeHHMM = value => {
        let timeValues = value.split(':');
        if (timeValues.length === 2) {
            let time = {
                hour: timeValues[0],
                minute: timeValues[1]
            };
            this.props.onChange(time);
        }
    };
    updateTimeMMSS = value => {
        let timeValues = value.split(':');
        if (timeValues.length === 2) {
            let time = {
                minute: timeValues[0],
                second: timeValues[1]
            };
            this.props.onChange(time);
        }
    };
    updateTimeHHMMAM = value => {
        let timeValues = value.split(' ');
        if (timeValues.length === 2) {
            let timeValue = timeValues[0].split(':');
            let time = {
                hour: timeValue[0],
                minute: timeValue[1],
                meridiem: this.CLOCK.indexOf(timeValues[1])
            };
            this.props.onChange(time);
        }
    };
    updateTimeMMSSAM = value => {
        let timeValues = value.split(' ');
        if (timeValues.length === 2) {
            let timeValue = timeValues[0].split(':');
            let time = {
                minute: timeValue[0],
                second: timeValue[1],
                meridiem: this.CLOCK.indexOf(timeValues[1])
            };
            this.props.onChange(time);
        }
    };
    onBlur = (event) => {
        //if the input is not the correct format then  it will be cleared
        if (!this.onInputValidation(event.target.value, event)) {
            this.props.updateValue('');
        }
        //reset to initial style
        this.setState({ style: classnames(`${this.props.cssNamespace}-input-group__input`) });
    };

    render() {
        const { disabled, inputProps, buttonProps, onClick } = this.props;
        return (
            <InputGroup
                onClick={onClick}>
                <FormInput
                    {...inputProps}
                    className={this.state.style}
                    id={this.state.inputId}
                    onBlur={this.onBlur}
                    onChange={this.onChange}
                    onFocus={this.onFocus}
                    placeholder={this.props.placeholder}
                    readOnly={disabled}
                    value={this.props.value} />
                <InputGroup.Addon isButton>
                    <Button
                        {...buttonProps}
                        aria-controls='rthHR811'
                        aria-expanded='false'
                        aria-haspopup='true'
                        compact
                        disabled={disabled}
                        glyph='time-entry-request'
                        id={this.state.buttonID}
                        option='transparent' />
                </InputGroup.Addon>
            </InputGroup>
        );
    }
}

TimePickerItem.displayName = 'TimePickerItem';

TimePickerItem.propTypes = {
    localizedText: PropTypes.object.isRequired,
    buttonId: PropTypes.string,
    /** Additional props to be spread to the `<button>` element */
    buttonProps: PropTypes.object,
    /** Set to **true** to mark component as disabled and make it non-interactive */
    disabled: PropTypes.bool,
    format12Hours: PropTypes.bool,
    /** Value for the `id` attribute on the element */
    id: PropTypes.string,
    inputId: PropTypes.string,
    /** Additional props to be spread to the `<input>` element */
    inputProps: PropTypes.object,
    isValid: PropTypes.bool,
    length: PropTypes.number,
    /** Localized placeholder text of the input */
    placeholder: PropTypes.string,
    showHour: PropTypes.bool,
    showMinute: PropTypes.bool,
    showSecond: PropTypes.bool,
    style: PropTypes.string,
    updateValue: PropTypes.func,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    /** Callback function when the change event fires on the component */
    onChange: PropTypes.func,
    /** Callback function when user clicks on the component*/
    onClick: PropTypes.func
};

export default withStyles(TimePickerItem);
