import CustomPropTypes from '../utils/CustomPropTypes/CustomPropTypes';
import Popover from '../Popover/Popover';
import PropTypes from 'prop-types';
import Time from '../Time/Time';
import TimePickerItem from './_TimePickerItem';
import withStyles from '../utils/WithStyles/WithStyles';
import React, { Component } from 'react';

class TimePicker extends Component {
    constructor(props) {
        super(props);
        this.CLOCK = [this.props.localizedText.meridiemAM, this.props.localizedText.meridiemPM];
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
                            disableStyles={disableStyles}
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
                            disableStyles={disableStyles}
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

    buttonProps: PropTypes.object,
    disabled: PropTypes.bool,
    id: PropTypes.string,
    inputProps: PropTypes.object,
    localizedText: CustomPropTypes.i18n({
        meridiemAM: PropTypes.string,
        meridiemPM: PropTypes.string
    }),
    popoverProps: PropTypes.object,
    timeProps: PropTypes.object,
    value: PropTypes.string
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
    }
};

TimePicker.propDescriptions = {
    ...Time.propDescriptions,
    timeProps: 'Additional props to be spread to the `Time` component.',
    value: 'Initial time value for the input.'
};

export { TimePicker as __TimePicker };

export default withStyles(TimePicker, { cssFile: 'input-group' });
