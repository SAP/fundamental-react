import CustomPropTypes from '../utils/CustomPropTypes/CustomPropTypes';
import PropTypes from 'prop-types';
import TimeItem from './_TimeItem';
import withStyles from '../utils/WithStyles/WithStyles';
import React, { Component } from 'react';


class Time extends Component {
    constructor(props) {
        super(props);
        this.CLOCK = [this.props.localizedText.meridiemAM, this.props.localizedText.meridiemPM];
        const { time } = this.props;
        if (time.hour === '00') {
            time.hour = this.props.format12Hours ? '12' : '00';
        }
        this.state = {
            time: {
                hour: time.hour,
                minute: time.minute,
                second: time.second,
                meridiem: time.meridiem
            },
            format12Hours: props.format12Hours
        };
    }

    componentWillReceiveProps(nextProps) {
        // check if props are different than the current state to prevent an unneeded render
        if (nextProps.time !== this.state.time) {
            this.setState({ time: nextProps.time });
        }
    }

    formatValue = (value, name) => {
        if (name !== 'meridiem' && parseInt(value, 10) < 10) {
            //using parseInt here to remove the zeroes before concatenating one
            value = '0'.concat(parseInt(value, 10));
        }
        return value;
    };
    //updater function to be used in the child component TimeItem in event functions
    updateTime = (value, name, event) => {
        let a = this.state.time;
        if (!event) {
            a[name] = this.formatValue(value, name);
        } else {
            a[name] = value;
        }
        this.setState(prevState => ({
            ...prevState.time
        }));

        this.props.onChange(this.state.time);
    };
    // onUpdateTime = () => {
    //   this.props.onUpdateTime();
    // };
    render() {
        const {
            disableStyles,
            localizedText,
            showHour,
            showMinute,
            showSecond,
            format12Hours,
            id,
            disabled,
            spinners,
            onUpdateTime,
            onChange,
            time: timeProp,
            name,
            hoursUpButtonProps,
            hoursDownButtonProps,
            hoursInputProps,
            minutesUpButtonProps,
            minutesDownButtonProps,
            minutesInputProps,
            secondsUpButtonProps,
            secondsDownButtonProps,
            secondsInputProps,
            meridiemUpButtonProps,
            meridiemDownButtonProps,
            meridiemInputProps,
            ...props
        } = this.props;
        const { time } = this.state;
        let max;
        if (format12Hours) {
            max = 12;
        } else {
            max = 24;
        }

        return (
            <div
                {...props}
                className='fd-time'
                id={id}>
                {/* Hours */}
                {showHour ? (
                    <TimeItem
                        defaultValue={1}
                        disableStyles={disableStyles}
                        disabled={disabled}
                        downButtonProps={hoursDownButtonProps}
                        format12Hours={format12Hours}
                        inputProps={hoursInputProps}
                        localizedText={localizedText}
                        max={max}
                        name='hour'
                        placeholder={'hh'}
                        spinners={spinners}
                        time={time}
                        type={'Hours'}
                        upButtonProps={hoursUpButtonProps}
                        updateTime={this.updateTime}
                        value={time.hour} />
                ) : (
                    ''
                )}
                {/* Minutes */}
                {showMinute ? (
                    <TimeItem
                        defaultValue={1}
                        disableStyles={disableStyles}
                        disabled={disabled}
                        downButtonProps={minutesDownButtonProps}
                        format12Hours={format12Hours}
                        inputProps={minutesInputProps}
                        localizedText={localizedText}
                        max={'60'}
                        name='minute'
                        placeholder={'mm'}
                        spinners={spinners}
                        time={time}
                        type={'Minutes'}
                        upButtonProps={minutesUpButtonProps}
                        updateTime={this.updateTime}
                        value={this.state.time.minute} />
                ) : (
                    ''
                )}
                {/* Seconds */}
                {showSecond ? (
                    <TimeItem
                        defaultValue={1}
                        disableStyles={disableStyles}
                        disabled={disabled}
                        downButtonProps={secondsDownButtonProps}
                        format12Hours={format12Hours}
                        inputProps={secondsInputProps}
                        localizedText={localizedText}
                        max={'60'}
                        name='second'
                        placeholder={'ss'}
                        spinners={spinners}
                        time={time}
                        type={'Seconds'}
                        upButtonProps={secondsUpButtonProps}
                        updateTime={this.updateTime}
                        value={this.state.time.second} />
                ) : (
                    ''
                )}
                {/* Meridiem */}
                {format12Hours ? (
                    <TimeItem
                        disableStyles={disableStyles}
                        disabled={disabled}
                        downButtonProps={meridiemDownButtonProps}
                        inputProps={meridiemInputProps}
                        localizedText={localizedText}
                        max={'1'}
                        name='meridiem'
                        spinners={spinners}
                        time={this.state.time}
                        type={'Period'}
                        upButtonProps={meridiemUpButtonProps}
                        updateTime={this.updateTime}
                        value={this.CLOCK[this.state.time.meridiem]} />
                ) : (
                    ''
                )}
            </div>
        );
    }
}

Time.displayName = 'Time';

Time.basePropTypes = {
    customStyles: PropTypes.object,
    disableStyles: PropTypes.bool,
    format12Hours: PropTypes.bool,
    showHour: PropTypes.bool,
    showMinute: PropTypes.bool,
    showSecond: PropTypes.bool,
    spinners: PropTypes.bool,
    time: PropTypes.object
};

Time.propTypes = {
    ...Time.basePropTypes,
    disabled: PropTypes.bool,
    hoursDownButtonProps: PropTypes.object,
    hoursInputProps: PropTypes.object,
    hoursUpButtonProps: PropTypes.object,
    id: PropTypes.string,
    localizedText: CustomPropTypes.i18n({
        meridiemAM: PropTypes.string,
        meridiemPM: PropTypes.string
    }),
    meridiemDownButtonProps: PropTypes.object,
    meridiemInputProps: PropTypes.object,
    meridiemUpButtonProps: PropTypes.object,
    minutesDownButtonProps: PropTypes.object,
    minutesInputProps: PropTypes.object,
    minutesUpButtonProps: PropTypes.object,
    secondsDownButtonProps: PropTypes.object,
    secondsInputProps: PropTypes.object,
    secondsUpButtonProps: PropTypes.object,
    onChange: PropTypes.func
};

Time.defaultProps = {
    localizedText: {
        meridiemAM: 'am',
        meridiemPM: 'pm'
    },
    onChange: () => { },
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

Time.propDescriptions = {
    format12Hours: 'Set to **true** to use the 12-hour clock (hours ranging from 01 to 12) and to display a meridiem control.',
    hoursDownButtonProps: 'Additional props to be spread to the hours down `<button>` element.',
    hoursInputProps: 'Additional props to be spread to the hours `<input>` element.',
    hoursUpButtonProps: 'Additional props to be spread to the hours up `<button>` element.',
    localizedTextShape: {
        meridiemAM: 'Ante meridiem for 12 hour clock. ',
        meridiemPM: 'Post meridiem for 12 hour clock.'
    },
    meridiemDownButtonProps: 'Additional props to be spread to the meridiem down `<button>` element.',
    meridiemInputProps: 'Additional props to be spread to the meridiem `<input>` element.',
    meridiemUpButtonProps: 'Additional props to be spread to the meridiem up `<button>` element.',
    minutesDownButtonProps: 'Additional props to be spread to the minutes down `<button>` element.',
    minutesInputProps: 'Additional props to be spread to the minutes `<input>` element.',
    minutesUpButtonProps: 'Additional props to be spread to the minutes up `<button>` element.',
    secondsDownButtonProps: 'Additional props to be spread to the seconds down `<button>` element.',
    secondsInputProps: 'Additional props to be spread to the seconds `<input>` element.',
    secondsUpButtonProps: 'Additional props to be spread to the seconds up `<button>` element.',
    showHour: 'Enables the input for hours.',
    showMinute: 'Enables the input for minutes.',
    showSecond: 'Enables the input for seconds.',
    spinners: 'Set to **true** to show up/down buttons for each input.',
    time: 'The time component values. Contains four properties: **hour** (with values from 01 to 12 when `format12Hours` is true or 00 to 23 when `format12Hours` is false), **minute** (with values from 00 to 59), **second** (with values from 00 to 59), **meridiem** (with values 0 for AM or 1 for PM).'
};

export { Time as __Time };

export default withStyles(Time, { cssFile: 'time' });
