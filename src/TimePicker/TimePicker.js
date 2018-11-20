import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Popover, Time } from '../';
const CLOCK = ['am', 'pm'];
class TimePickerItem extends Component {
  static propTypes = {
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  };
  static defaultProps = {
    value: null
  };
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.value
    };
    console.log(this.state);
  }
  onChange = event => {
    console.log(event.target.value);
    this.setState({ value: event.target.value });

    // TODO: send back the value
    // this.prop.onChange();
    // TODO: check value if time format hh:mm:ss
  };
  render() {
    const { disabled } = this.props;
    return (
      <div class='fd-popover__control'>
        <div class='fd-input-group fd-input-group--after'>
          <input
            type='text'
            class='fd-input '
            id=''
            placeholder='hh:mm am/pm'
            value={this.props.value}
            onChange={this.onChange}
            readOnly={disabled}
          />
          <span class='fd-input-group__addon fd-input-group__addon--after fd-input-group__addon--button '>
            <button
              class='fd-button--light fd-button--compact sap-icon--fob-watch fd-popover__control'
              aria-controls='rthHR811'
              aria-expanded='false'
              aria-haspopup='true'
              disabled={disabled}
            />
          </span>
        </div>
      </div>
    );
  }
}

export class TimePicker extends React.Component {
  static propTypes = {
    id: PropTypes.string,
    showHour: PropTypes.bool,
    showMinute: PropTypes.bool,
    showSecond: PropTypes.bool,
    format12Hours: PropTypes.bool,
    disabled: PropTypes.bool,
    spinners: PropTypes.bool,
    time: PropTypes.object,
    value: PropTypes.string
  };
  static defaultProps = {
    id: '',
    showHour: true,
    showMinute: true,
    showSecond: true,
    format12Hours: false,
    disabled: false,
    spinners: true,
    time: {
      hour: '00',
      minute: '00',
      second: '00',
      meridiem: 0
    },
    value: ''
  };

  // );
  constructor(props) {
    super(props);
    const { time } = this.props;

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
      disabled: props.disabled
    };
  }

  onChange = time => {
    this.setState({ time: time });
    const value = this.formatValue();
    this.setState({ value: value });
  };
  formatValue = () => {
    let value = '';
    if (this.state.showHour) {
      value = this.state.time.hour;
    }
    if (this.state.showMinute) {
      value = value
        ? value + ':' + this.state.time.minute
        : this.state.time.minute;
    }
    if (this.state.showSecond) {
      value = value
        ? value + ':' + this.state.time.second
        : this.state.time.second;
    }
    if (this.state.format12Hours) {
      value = value + ' ' + CLOCK[this.state.time.meridiem];
    }
    return value;
  };
  render() {
    const { id } = this.props;

    return (
      <div id={id} className='fd-time-picker'>
        <div class='fd-popover fd-popover--no-arrow'>
          <Popover
            control={
              <TimePickerItem
                time={this.state.time}
                value={this.state.value}
                onChange={this.onChange}
                disabled={this.state.disabled}
              />
            }
            body={
              <Time
                time={this.state.time}
                showHour={this.state.showHour}
                showMinute={this.state.showMinute}
                showSecond={this.state.showSecond}
                format12Hours={this.state.format12Hours}
                disabled={this.state.disabled}
                onChange={this.onChange}
              />
            }
          />
        </div>
      </div>
    );
  }
}
