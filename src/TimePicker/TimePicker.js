import { Popover } from '../Popover/Popover';
import PropTypes from 'prop-types';
import Time from '../Time/Time';
import React, { Component } from 'react';
import TimePickerItem, { CLOCK } from './_TimePickerItem';

class TimePicker extends Component {
    constructor(props) {
        super(props);
        const { time } = this.props;
        let value = '';
        this.state = {
            time: {
                hour: time.hour,
                minute: time.minute,
                second: time.second,
                meridiem: time.meridiem
            },
            showHour: props.showHour,
            showMinute: props.showMinute,
            showSecond: props.showSecond,
            format12Hours: props.format12Hours,
            value: '',
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
            return { time: time, value: value };
        });
    };
    // updateTime = time => {
    //   this.setState({ time: time });
    // };
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
            value = value + ' ' + CLOCK[time.meridiem];
        }
        return value;
    };
    // formatPlaceHolder = () => {
    //   let value = '';
    //   if (this.state.showHour) {
    //     value = 'hh';
    //   }
    //   if (this.state.showMinute) {
    //     value = value ? value + ':mm' : 'mm';
    //   }
    //   if (this.state.showSecond) {
    //     value = value ? value + ':ss' : 'ss';
    //   }
    //   if (this.state.format12Hours) {
    //     value = value + ' am/pm';
    //   }
    //   return value;
    // };
    render() {
        const {
            id,
            inputProps,
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
                className='fd-time-picker'
                id={id}>
                <div className='fd-popover fd-popover--no-arrow'>
                    <Popover
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
            </div>
        );
    }
}

TimePicker.displayName = 'TimePicker';

TimePicker.propTypes = {
    ...Time.basePropTypes,

    buttonProps: PropTypes.object,
    disabled: PropTypes.bool,
    id: PropTypes.string,
    inputProps: PropTypes.object,
    timeProps: PropTypes.object,
    value: PropTypes.string
};

TimePicker.defaultProps = {
    showHour: true,
    showMinute: true,
    showSecond: true,
    spinners: true,
    time: {
        hour: '00',
        minute: '00',
        second: '00',
        meridiem: 0
    }
};

TimePicker.propDescriptions = {
    ...Time.propDescriptions,
    timeProps: 'Additional props to be spread to the `Time` component.',
    value: 'Initial time value for the input.'
};

export default TimePicker;
