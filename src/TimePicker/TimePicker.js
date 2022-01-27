import CustomPropTypes from '../utils/CustomPropTypes/CustomPropTypes';
import Popover from '../Popover/Popover';
import PropTypes from 'prop-types';
import Time from '../Time/Time';
import TimePickerItem from './_TimePickerItem';
import withStyles from '../utils/withStyles';
import React, { Component } from 'react';

/** A **TimePicker** allows the user to easily set a time using the **Time** component. */

class TimePicker extends Component {
    constructor(props) {
        super(props);
        this.CLOCK = [this.props.localizedText.meridiemAM, this.props.localizedText.meridiemPM];
        const { time } = this.props;
        let value = '';
        let defaultTime = typeof props.value !== 'undefined' ? this.getFormattedTime(props.value) : {};
        this.state = {
            time: {
                hour: typeof defaultTime.hour !== 'undefined' ? defaultTime.hour : time.hour,
                minute: typeof defaultTime.minute !== 'undefined' ? defaultTime.minute : time.minute,
                second: typeof defaultTime.second !== 'undefined' ? defaultTime.second : time.second,
                meridiem: typeof defaultTime.meridiem !== 'undefined' ? defaultTime.meridiem : time.meridiem
            },
            showHour: props.showHour,
            showMinute: props.showMinute,
            showSecond: props.showSecond,
            format12Hours: props.format12Hours,
            value: typeof props.value !== 'undefined' ? props.value : '',
            disabled: props.disabled,
            placeholder: '',
            popoverId: props.id ? props.id + '-popover' : '',
            timeId: props.id ? props.id + '-time' : ''
        };
        if (this.state.showHour) {
            value = 'hh';
        }
        if (this.state.showMinute) {
            value = value ? value + ':mm' : 'mm';
        }
        if (this.state.showSecond) {
            value = value ? value + ':ss' : 'ss';
        }
        if (this.state.format12Hours) {
            value = value + ' am/pm';
        }
        this.state.placeholder = value;
    }

    onChange = time => {
        this.setState(() => {
            let value = time ? this.formatValue(time) : '';
            this.props.onChange({
                time: time,
                formattedTime: value
            });
            return { time: time, value: value };
        });
    };

    updateValue = value => {
        this.setState({ value: value });
    };

    formatWithLeadingZero = value => {
        return parseInt(value, 10) < 10 ? '0' + parseInt(value, 10) : value;
    }

    formatValue = time => {
        let value = '';

        if (this.state.showHour) {
            value = this.formatWithLeadingZero(time.hour);
        }
        if (this.state.showMinute) {
            value = value ? value + ':' + this.formatWithLeadingZero(time.minute) : this.formatWithLeadingZero(time.minute);
        }
        if (this.state.showSecond) {
            value = value ? value + ':' + this.formatWithLeadingZero(time.second) : this.formatWithLeadingZero(time.second);
        }
        if (this.state.format12Hours) {
            value = value + ' ' + this.CLOCK[time.meridiem];
        }
        return value;
    };
    getFormattedTime = value => {
        let time = {};
        let timeArray = [];
        if (value.includes(this.props.localizedText.meridiemAM) || value.includes(this.props.localizedText.meridiemPM)) {
            let splitBySpace = value.trim().match(/^(\S+)\s(.*)/).slice(1);
            let timeMerideim = splitBySpace[1];
            timeArray = splitBySpace[0].split(':');
            timeArray.push(timeMerideim);
        } else {
            timeArray = value.trim().split(':');
        }
        if (typeof timeArray[0] !== 'undefined' && this.props.showHour) {
            time.hour = this.formatWithLeadingZero(timeArray[0]);
        }
        if (typeof timeArray[1] !== 'undefined' && this.props.showMinute) {
            time.minute = this.formatWithLeadingZero(timeArray[1]);
        }
        if (typeof timeArray[2] !== 'undefined' && this.props.showSecond) {
            if ((timeArray[2] !== this.props.localizedText.meridiemPM) && timeArray[2] !== this.props.localizedText.meridiemAM) {
                time.second = this.formatWithLeadingZero(timeArray[2].match(/\d+/)[0]);
            }
            if (this.props.format12Hours) {
                time.meridiem = timeArray[timeArray.length - 1].indexOf(this.props.localizedText.meridiemAM) !== -1 ? 0 : 1;
            }
        } else {
            if (this.props.format12Hours) {
                time.meridiem = timeArray[timeArray.length - 1].indexOf(this.props.localizedText.meridiemAM) !== -1 ? 0 : 1;
            }
        }
        return time;
    }

    render() {
        const {
            popoverProps,
            id,
            inputProps,
            localizedText,
            buttonProps,
            disabled,
            format12Hours,
            showHour,
            showMinute,
            showSecond,
            time,
            value,
            timeProps,
            ...props
        } = this.props;
        const { popoverId, timeId } = this.state;

        return (
            <div
                {...props}
                id={id}>
                <Popover
                    {...popoverProps}
                    body={
                        <Time
                            {...timeProps}
                            disabled={this.state.disabled}
                            format12Hours={this.state.format12Hours}
                            id={timeId}
                            onChange={this.onChange}
                            onUpdateTime={this.updateTime}
                            showHour={this.state.showHour}
                            showMinute={this.state.showMinute}
                            showSecond={this.state.showSecond}
                            time={this.state.time} />
                    }
                    control={
                        <TimePickerItem
                            {...props}
                            buttonProps={buttonProps}
                            disabled={this.state.disabled}
                            format12Hours={format12Hours}
                            id={id}
                            inputProps={inputProps}
                            localizedText={localizedText}
                            onChange={this.onChange}
                            placeholder={this.state.placeholder}
                            showHour={showHour}
                            showMinute={showMinute}
                            showSecond={showSecond}
                            time={this.state.time}
                            updateTime={this.updateTime}
                            updateValue={this.updateValue}
                            value={this.state.value} />
                    }
                    id={popoverId}
                    noArrow />
            </div>
        );
    }
}

TimePicker.displayName = 'TimePicker';

TimePicker.propTypes = {
    ...Time.basePropTypes,
    /** Additional props to be spread to the `<button>` element */
    buttonProps: PropTypes.object,
    /** Set to **true** to mark component as disabled and make it non-interactive */
    disabled: PropTypes.bool,
    /** Value for the `id` attribute on the element */
    id: PropTypes.string,
    /** Additional props to be spread to the `<input>` element */
    inputProps: PropTypes.object,
    /** Localized text to be updated based on location/language */
    localizedText: CustomPropTypes.i18n({
        meridiemAM: PropTypes.string,
        meridiemPM: PropTypes.string
    }),
    /** Additional props to be spread to the Popover component */
    popoverProps: PropTypes.object,
    /** Additional props to be spread to the `Time` component */
    timeProps: PropTypes.object,
    /** Initial time value for the input. Accepted time format : hh:mm:ss am/pm, Eg: 10:32:30 am */
    value: PropTypes.string,
    /** Callback function when the change event fires on the component */
    /**
     * Callback function; triggered when the current time is changed by picking from popover or editing the `<input>` field.
     * Fired only when formatted string is valid.
     *
     * @param {Object} data - has formattedTime string and time.hour, time.meridiem, time.minute, and time.second as numbers
     * @returns {void}
     * */
    onChange: PropTypes.func
};

TimePicker.defaultProps = {
    localizedText: {
        meridiemAM: 'am',
        meridiemPM: 'pm'
    },
    showHour: true,
    showMinute: true,
    showSecond: true,
    time: {
        hour: '00',
        minute: '00',
        second: '00',
        meridiem: 0
    },
    onChange: () => {}
};

export default withStyles(TimePicker);
