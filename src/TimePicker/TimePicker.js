import CustomPropTypes from '../utils/CustomPropTypes/CustomPropTypes';
import Popover from '../Popover/Popover';
import PropTypes from 'prop-types';
import Time from '../Time/Time';
import TimePickerItem from './_TimePickerItem';
import React, { Component } from 'react';

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

    formatValue = time => {
        let value = '';

        if (this.state.showHour) {
            value = time.hour;
        }
        if (this.state.showMinute) {
            value = value ? value + ':' + time.minute : time.minute;
        }
        if (this.state.showSecond) {
            value = value ? value + ':' + time.second : time.second;
        }
        if (this.state.format12Hours) {
            value = value + ' ' + this.CLOCK[time.meridiem];
        }
        return value;
    };
    getFormattedTime = value => {
        let time = {};
        let timeArray = value.split(':');
        if (typeof timeArray[0] !== 'undefined' && this.props.showHour) {
            time.hour = timeArray[0];
        }
        if (typeof timeArray[1] !== 'undefined' && this.props.showMinute) {
            time.minute = timeArray[1];
        }
        if (typeof timeArray[2] !== 'undefined' && this.props.showSecond) {
            time.second = timeArray[2].match(/\d+/)[0];
            if (this.props.format12Hours) {
                time.meridiem = timeArray[2].indexOf(this.props.localizedText.meridiemAM) !== -1 ? 0 : 1;
            }
        }
        return time;
    }

    render() {
        const {
            disableStyles,
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
            spinners,
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
                            disableStyles={disableStyles}
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
                            disableStyles={disableStyles}
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
                    disableStyles={disableStyles}
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
    timeProps: PropTypes.object,
    value: PropTypes.string,
    /** Callback function when the change event fires on the component */
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
    spinners: true,
    time: {
        hour: '00',
        minute: '00',
        second: '00',
        meridiem: 0
    },
    onChange: () => {}
};

TimePicker.propDescriptions = {
    ...Time.propDescriptions,
    timeProps: 'Additional props to be spread to the `Time` component.',
    value: 'Initial time value for the input. Accepted time format : hh:mm:ss am/pm, Eg: 10:32:30 am'
};

export default TimePicker;
