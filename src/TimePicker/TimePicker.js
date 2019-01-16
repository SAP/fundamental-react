import { Popover } from '../Popover/Popover';
import PropTypes from 'prop-types';
import { Time } from '../Time/Time';
import React, { Component } from 'react';

const CLOCK = ['am', 'pm'];
const INVALID = 'is-invalid';
const VALID = 'fd-input';
class TimePickerItem extends Component {
  static propTypes = {
      buttonID: PropTypes.string,
      disabled: PropTypes.bool,
      format12Hours: PropTypes.bool,
      id: PropTypes.string,
      inputId: PropTypes.string,
      isValid: PropTypes.bool,
      length: PropTypes.number,
      placeholder: PropTypes.string,
      showHour: PropTypes.bool,
      showMinute: PropTypes.bool,
      showSecond: PropTypes.bool,
      style: PropTypes.string,
      updateValue: PropTypes.func,
      value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      onChange: PropTypes.func
  };
  static defaultProps = {
      value: null,
      inputId: '',
      buttonID: '',
      style: '',
      isValid: false,
      length: 0
  };

  constructor(props) {
      super(props);
      var length = this.setLength(props);
      this.state = {
          value: this.props.value,
          inputId: this.props.id + '-input',
          buttonID: this.props.id + '-button',
          style: 'fd-input',
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
      // this means the time forma is hh:mm:ss am convert string into corresponding
      // time format
          let timeValues = value.split(' ');
          if (timeValues.length === 2) {
              let timeValue = timeValues[0].split(':');
              let time = {
                  hour: timeValue[0],
                  minute: timeValue[1],
                  second: timeValue[2],
                  meridiem: CLOCK.indexOf(timeValues[1])
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
              meridiem: CLOCK.indexOf(timeValues[1])
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
              meridiem: CLOCK.indexOf(timeValues[1])
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
      const { disabled } = this.props;
      return (
          <div className='fd-popover__control'>
              <div className='fd-input-group fd-input-group--after'>
                  <input
                      className={this.state.style}
                      id={this.state.inputId}
                      onBlur={this.onBlur}
                      onChange={this.onChange}
                      onFocus={this.onFocus}
                      placeholder={this.props.placeholder}
                      readOnly={disabled}
                      type='text'
                      value={this.props.value} />
                  <span className='fd-input-group__addon fd-input-group__addon--after fd-input-group__addon--button '>
                      <button
                          aria-controls='rthHR811'
                          aria-expanded='false'
                          aria-haspopup='true'
                          className='fd-button--light fd-button--compact sap-icon--fob-watch fd-popover__control'
                          disabled={disabled}
                          id={this.state.buttonID} />
                  </span>
              </div>
          </div>
      );
  }
}

export class TimePicker extends React.Component {
  static propTypes = {
      disabled: PropTypes.bool,
      format12Hours: PropTypes.bool,
      id: PropTypes.string,
      showHour: PropTypes.bool,
      showMinute: PropTypes.bool,
      showSecond: PropTypes.bool,
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
      const { id, ...props } = this.props;
      const { popoverId, timeId } = this.state;
      return (
          <div className='fd-time-picker' id={id}>
              <div className='fd-popover fd-popover--no-arrow'>
                  <Popover
                      body={
                          <Time
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
                              id={id}
                              {...props}
                              disabled={this.state.disabled}
                              onChange={this.onChange}
                              placeholder={this.state.placeholder}
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
