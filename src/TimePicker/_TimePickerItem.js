import Button from '../Button/Button';
import FormInput from '../Forms/FormInput';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

const INVALID = 'is-invalid';
const VALID = 'fd-input-group__input';

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
        this.setState({ value: event.target.value });
        var aux = event.target.value;
        this.onInputValidation(aux);
        this.props.updateValue(aux);
    };

    onInputValidation = value => {
        const { showHour, showMinute, showSecond, format12Hours } = this.props;

        if (showHour && showMinute && showSecond && format12Hours) {
            //validate hh:mm:ss am/pm format
            let regex = new RegExp(
                '((1[0-2]|0?[0-9]):([0-5][0-9]):([0-5][0-9]) ([AaPp][Mm]))'
            );
            this.inputCheck(regex, value);
        } else if (
            (format12Hours && showHour && showMinute) ||
            (format12Hours && showMinute & showSecond)
        ) {
            //validate hh:mm and mm:ss am
            let regex = new RegExp('((1[0-2]|0?[0-9]):([0-5][0-9]) ([AaPp][Mm]))');
            this.inputCheck(regex, value);
        } else if (
            (!format12Hours && showHour && showMinute && showSecond) ||
            (!format12Hours && showHour && showMinute) ||
            (!format12Hours && showMinute & showSecond)
        ) {
            //validate hh:mm and mm:ss
            let regex = new RegExp('(1[0-2]|0?[0-9]):([0-5][0-9])');
            this.inputCheck(regex, value);
        }
        // else if (showHour && showMinute && showSecond && !format12Hours) {
        //   //validate hh:mm:ss
        //   let regex = new RegExp('(1[0-2]|0?[0-9]):([0-5][0-9]):([0-5][0-9])');
        //   this.inputCheck(regex, value);
        // }
    };

    inputCheck = (regex, value) => {
        if (regex.test(value) && value.length === this.state.length) {
            this.setState({ isValid: true, style: VALID });
            //send time value to Time Component
            this.updateTime(value);
        } else {
            this.setState({ isValid: false, style: INVALID });
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

    onBlur = () => {
        const { isValid } = this.state;
        //if the input is not the correct format then  it will be cleared
        if (!isValid) {
            this.props.updateValue('');
        }
        //reset to initial style
        this.setState({ style: VALID });
    };
    render() {
        const { disableStyles, disabled, inputProps, buttonProps, onClick } = this.props;
        return (
            <div className='fd-input-group' onClick={onClick}>
                <FormInput
                    {...inputProps}
                    className={this.state.style}
                    disableStyles={disableStyles}
                    id={this.state.inputId}
                    onBlur={this.onBlur}
                    onChange={this.onChange}
                    onFocus={this.onFocus}
                    placeholder={this.props.placeholder}
                    readOnly={disabled}
                    value={this.props.value} />
                <span className='fd-input-group__addon fd-input-group__addon--button'>
                    <Button
                        {...buttonProps}
                        aria-controls='rthHR811'
                        aria-expanded='false'
                        aria-haspopup='true'
                        className='fd-input-group__button'
                        compact
                        disableStyles={disableStyles}
                        disabled={disabled}
                        glyph='fob-watch'
                        id={this.state.buttonID}
                        option='light' />
                </span>
            </div>
        );
    }
}

TimePickerItem.displayName = 'TimePickerItem';

TimePickerItem.propTypes = {
    localizedText: PropTypes.object.isRequired,
    buttonID: PropTypes.string,
    buttonProps: PropTypes.object,
    disabled: PropTypes.bool,
    disableStyles: PropTypes.bool,
    format12Hours: PropTypes.bool,
    id: PropTypes.string,
    inputId: PropTypes.string,
    inputProps: PropTypes.object,
    isValid: PropTypes.bool,
    length: PropTypes.number,
    placeholder: PropTypes.string,
    showHour: PropTypes.bool,
    showMinute: PropTypes.bool,
    showSecond: PropTypes.bool,
    style: PropTypes.string,
    updateValue: PropTypes.func,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    onChange: PropTypes.func,
    onClick: PropTypes.func
};

export default TimePickerItem;
