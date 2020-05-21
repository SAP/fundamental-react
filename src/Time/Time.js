import CustomPropTypes from '../utils/CustomPropTypes/CustomPropTypes';
import PropTypes from 'prop-types';
import TimeItem from './_TimeItem';
import React, { Component } from 'react';

/** A **Time** component is used for a single time value. Multiple components can be used in the **Time Picker**
to assemble a clock time. A max of four will account for hours, minutes, seconds and meridiem of the day.
It is rarely used on its own as a standalone component. */

class Time extends Component {
    constructor(props) {
        super(props);
        this.CLOCK = [this.props.localizedText.meridiemAM, this.props.localizedText.meridiemPM];
        const { time, showHour, showMinute, showSecond } = this.props;
        if (time.hour === '00') {
            time.hour = this.props.format12Hours ? '12' : '00';
        }

        let active;
        if (showHour) {
            active = 'hour';
        } else if (showMinute) {
            active = 'minute';
        } else if (showSecond) {
            active = 'second';
        } else {
            active = 'meridiem';
        }

        this.state = {
            time: {
                hour: time.hour,
                minute: time.minute,
                second: time.second,
                meridiem: time.meridiem
            },
            format12Hours: props.format12Hours,
            active
        };
    }

    componentDidMount() {
        if (!this.props.disableStyles) {
            require('fundamental-styles/dist/time.css');
        }
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
    updateTime = (value, name) => {
        this.state.time[name] = value;

        this.setState(prevState => ({
            ...prevState.time
        }));

        this.props.onChange(this.state.time);
    };

    updateActiveColumn = (activeColumn) => {
        const newActiveColumn = this.state.active === 'meridiem' ? '' : activeColumn;
        this.setState({ active: newActiveColumn });
    };

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
            onChange,
            time: timeProp,
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
        const { time, active } = this.state;
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
                    <div className='fd-time__col' onClick={() => this.updateActiveColumn('hour')}>
                        <label className='fd-time__slider-label'>{localizedText.hoursLabel}</label>
                        <TimeItem
                            active={active}
                            defaultValue={1}
                            disabled={disabled}
                            disableStyles={disableStyles}
                            downButtonProps={hoursDownButtonProps}
                            format12Hours={format12Hours}
                            inputProps={hoursInputProps}
                            localizedText={{ buttonUp: localizedText.hoursUp, buttonDown: localizedText.hoursDown }}
                            max={max}
                            name='hour'
                            time={time}
                            upButtonProps={hoursUpButtonProps}
                            updateTime={this.updateTime}
                            value={time.hour} />
                    </div>
                ) : (
                    ''
                )}
                {/* Minutes */}
                {showMinute ? (
                    <div className='fd-time__col' onClick={() => this.updateActiveColumn('minute')}>
                        <label className='fd-time__slider-label'>{localizedText.minutesLabel}</label>
                        <TimeItem
                            active={active}
                            defaultValue={1}
                            disabled={disabled}
                            disableStyles={disableStyles}
                            downButtonProps={minutesDownButtonProps}
                            format12Hours={format12Hours}
                            inputProps={minutesInputProps}
                            localizedText={{ buttonUp: localizedText.minutesUp, buttonDown: localizedText.minutesDown }}
                            max={'60'}
                            name='minute'
                            time={time}
                            upButtonProps={minutesUpButtonProps}
                            updateTime={this.updateTime}
                            value={time.minute} />
                    </div>
                ) : (
                    ''
                )}
                {/* Seconds */}
                {showSecond ? (
                    <div className='fd-time__col' onClick={() => this.updateActiveColumn('second')}>
                        <label className='fd-time__slider-label'>{localizedText.secondsLabel}</label>
                        <TimeItem
                            active={active}
                            defaultValue={1}
                            disabled={disabled}
                            disableStyles={disableStyles}
                            downButtonProps={secondsDownButtonProps}
                            format12Hours={format12Hours}
                            inputProps={secondsInputProps}
                            localizedText={{ buttonUp: localizedText.secondsUp, buttonDown: localizedText.secondsDown }}
                            max={'60'}
                            name='second'
                            time={time}
                            upButtonProps={secondsUpButtonProps}
                            updateTime={this.updateTime}
                            value={time.second} />
                    </div>
                ) : (
                    ''
                )}
                {/* Meridiem */}
                {format12Hours ? (
                    <div className='fd-time__col' onClick={() => this.updateActiveColumn('meridiem')}>
                        <label className='fd-time__slider-label'>{localizedText.meridiemLabel}</label>
                        <TimeItem
                            active={active}
                            disabled={disabled}
                            disableStyles={disableStyles}
                            downButtonProps={meridiemDownButtonProps}
                            inputProps={meridiemInputProps}
                            localizedText={{ buttonUp: localizedText.meridiemUp, buttonDown: localizedText.meridiemDown }}
                            max={'1'}
                            name='meridiem'
                            time={this.state.time}
                            upButtonProps={meridiemUpButtonProps}
                            updateActiveColumn={this.updateActiveColumn}
                            updateTime={this.updateTime}
                            value={this.CLOCK[this.state.time.meridiem]} />
                    </div>
                ) : (
                    ''
                )}
            </div>
        );
    }
}

Time.displayName = 'Time';

Time.propTypes = {
    /** Set to **true** to mark component as disabled and make it non-interactive */
    disabled: PropTypes.bool,
    /** Internal use only */
    disableStyles: PropTypes.bool,
    /** Set to **true** to use the 12-hour clock (hours ranging from 01 to 12) and to display a meridiem control */
    format12Hours: PropTypes.bool,
    /** Additional props to be spread to the hours down `<button>` element */
    hoursDownButtonProps: PropTypes.object,
    /** Additional props to be spread to the hours `<input>` element */
    hoursInputProps: PropTypes.object,
    /** Additional props to be spread to the hours up `<button>` element */
    hoursUpButtonProps: PropTypes.object,
    /** Value for the `id` attribute on the element */
    id: PropTypes.string,
    /** Localized text to be updated based on location/language */
    localizedText: CustomPropTypes.i18n({
        /** Ante meridiem for 12 hour clock */
        meridiemAM: PropTypes.string,
        /** Post meridiem for 12 hour clock */
        meridiemPM: PropTypes.string
    }),
    /** Additional props to be spread to the meridiem down `<button>` element */
    meridiemDownButtonProps: PropTypes.object,
    /** Additional props to be spread to the meridiem `<input>` element */
    meridiemInputProps: PropTypes.object,
    /** Additional props to be spread to the meridiem up `<button>` element */
    meridiemUpButtonProps: PropTypes.object,
    /** Additional props to be spread to the minutes down `<button>` element */
    minutesDownButtonProps: PropTypes.object,
    /** Additional props to be spread to the minutes `<input>` element */
    minutesInputProps: PropTypes.object,
    /** Additional props to be spread to the minutes up `<button>` element */
    minutesUpButtonProps: PropTypes.object,
    name: PropTypes.string,
    /** Additional props to be spread to the seconds down `<button>` element */
    secondsDownButtonProps: PropTypes.object,
    /** Additional props to be spread to the seconds `<input>` element */
    secondsInputProps: PropTypes.object,
    /** Additional props to be spread to the seconds up `<button>` element */
    secondsUpButtonProps: PropTypes.object,
    /** Enables the input for hours */
    showHour: PropTypes.bool,
    /** Enables the input for minutes */
    showMinute: PropTypes.bool,
    /** Enables the input for seconds */
    showSecond: PropTypes.bool,
    /** Set to **true** to show up/down buttons for each input */
    /** The time component values. Contains four properties: **hour** (with values from 01 to 12 when `format12Hours`
      * is true or 00 to 23 when `format12Hours` is false), **minute** (with values from 00 to 59), **second** (with values from 00 to 59),
      * **meridiem** (with values 0 for AM or 1 for PM) */
    time: PropTypes.object,
    /** Callback function when the change event fires on the component */
    onChange: PropTypes.func
};

Time.defaultProps = {
    localizedText: {
        meridiemAM: 'am',
        meridiemPM: 'pm',
        hoursLabel: 'Hours',
        minutesLabel: 'Minutes',
        secondsLabel: 'Seconds',
        meridiemLabel: 'AM/PM',
        hoursUp: 'Increase hours',
        hoursDown: 'Decrease hours',
        minutesUp: 'Increase minutes',
        minutesDown: 'Decrease hours',
        secondsUp: 'Increase seconds',
        secondsDown: 'Decrease seconds',
        meridiemUp: 'Increase period',
        meridiemDown: 'Decrease period'
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


export default Time;
