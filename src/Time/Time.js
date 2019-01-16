import PropTypes from 'prop-types';
import React, { Component } from 'react';

const INVALID = 'is-invalid';
const CLOCK = ['am', 'pm'];

class TimeItem extends Component {
  static propTypes = {
      arialabel: PropTypes.string,
      disabled: PropTypes.bool,
      format12Hours: PropTypes.bool,
      max: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      name: PropTypes.string,
      placeholder: PropTypes.string,
      spinners: PropTypes.bool,
      style: PropTypes.string,
      time: PropTypes.object,
      type: PropTypes.string,
      updateTime: PropTypes.func,
      value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  };
  static defaultProps = {
      id: '',
      value: null,
      arialabel: ''
  };

  constructor(props) {
      super(props);
      var aria = {};
      if (this.props.name === 'meridiem') {
          aria = {
              buttonUp: 'Increase period',
              buttonDown: 'Decrease period'
          };
      } else {
          aria = {
              buttonUp: 'Increase ' + this.props.name + 's',
              buttonDown: 'Decrease ' + this.props.name + 's'
          };
      }

      this.state = {
          value: this.props.value,
          style: 'fd-form__control ',
          arialabel: aria
      };
      if (this.props.disabled) {
          this.state.style = this.state.style + 'is-disabled';
      }
  }

  _onUp = () => {
      const { value, max, name, time, format12Hours } = this.props;
      var aux;
      //find the min value
      if (format12Hours && name === 'hour') {
      //for 12h clock we are skipping to display 00 value
          aux = 1;
      } else {
      //for 24h clock we are displaying 00 value
          aux = 0;
      }
      var maxAux = this.setMax(name, max);
      if ((name !== 'meridiem') & !isNaN(value) && parseInt(value, 10) < maxAux) {
          aux = parseInt(value, 10) + 1;
      } else if (value === maxAux) {
          this.increaseTimeObj(name, time, format12Hours);
      } else if (name === 'meridiem') {
          aux = CLOCK.indexOf(value) ? 0 : 1;
      }
      if (format12Hours && name === 'hour' && aux === 12) {
          let newMeridiem = time.meridiem ? 0 : 1;
          this.props.updateTime(newMeridiem, 'meridiem');
      }
      this.props.updateTime(aux, name);
  };

  increaseTimeObj = (name, time, format12Hours) => {
      if (name === 'second' && parseInt(time.minute, 10) < 60) {
          let newMinute = parseInt(time.minute, 10) + 1;
          let newHour;
          if (newMinute === 60) {
              newMinute = 0;
              newHour = parseInt(time.hour, 10) + 1;
              this.increaseHour(format12Hours, newHour, time);
          }
          this.props.updateTime(newMinute, 'minute');
      }
      if (name === 'minute') {
          let newHour = parseInt(time.hour, 10) + 1;
          this.increaseHour(format12Hours, newHour, time);
      }
      if (name === 'hour' && !format12Hours) {
          let newHour = 0;
          this.props.updateTime(newHour, 'hour');
      }
  };

  increaseHour = (format12Hours, newHour, time) => {
      if (format12Hours && newHour < 12) {
          newHour = 1;
          this.props.updateTime(newHour, 'hour');
      } else if (format12Hours && newHour === 12) {
          this.props.updateTime(newHour, 'hour');
          let newMeridiem = time.meridiem ? 0 : 1;
          this.props.updateTime(newMeridiem, 'meridiem');
      } else if (
          (format12Hours && newHour <= 12) ||
      (!format12Hours && newHour < 24)
      ) {
          this.props.updateTime(newHour, 'hour');
      }
      //if hour value to max value (24) then reset to 0 because we are not displaying value 24
      if (!format12Hours && newHour >= 24) {
          newHour = 0;
          this.props.updateTime(newHour, 'hour');
      }
  };

  decreaseTimeObj = (name, time) => {
      if (name === 'second') {
          let newMinute = parseInt(time.minute, 10) - 1;
          if (parseInt(time.minute, 10) === 0) {
              newMinute = 59;
          }
          this.props.updateTime(newMinute, 'minute');
          if (newMinute === 59) {
              let newHour = parseInt(time.hour, 10) - 1;
              if (newHour === 0 && this.props.format12Hours) {
                  newHour = 12;
              } else if (newHour < 0 && !this.props.format12Hours) {
                  newHour = 23;
              } else if (newHour === 11 && this.props.format12Hours) {
                  let newMeridiem = time.meridiem ? 0 : 1;
                  this.props.updateTime(newMeridiem, 'meridiem');
              }
              this.props.updateTime(newHour, 'hour');
          }
      }
      if (name === 'minute' && parseInt(time.hour, 10) > 0) {
          let newHour = parseInt(time.hour, 10) - 1;
          if (newHour === 0 && this.props.format12Hours) {
              newHour = 12;
              //change meridiem
          } else if (newHour === 11 && this.props.format12Hours) {
              let newMeridiem = time.meridiem ? 0 : 1;
              this.props.updateTime(newMeridiem, 'meridiem');
          }
          this.props.updateTime(newHour, 'hour');
      }
  };

  _onDown = () => {
      const { value, max, name, time, format12Hours } = this.props;

      var aux = this.setMax(name, max);
      if (
          name !== 'meridiem' &&
      !isNaN(value) &&
      parseInt(value, 10) > 0 &&
      value <= parseInt(max, 10)
      ) {
          aux = parseInt(value, 10) - 1;
          if (aux === 0 && name === 'hour' && format12Hours) {
              aux = max;
          }
      } else if (name === 'meridiem') {
          aux = CLOCK.indexOf(value) ? 0 : 1;
      } else if (value === 0) {
          this.decreaseTimeObj(name, time);
      }
      if (name === 'hour' && aux === 11 && format12Hours) {
          let newMeridiem = time.meridiem ? 0 : 1;
          this.props.updateTime(newMeridiem, 'meridiem');
      }
      this.props.updateTime(aux, name);
  };

  setMax = (name, max) => {
      var maxAux;
      if (name === 'hour' && this.props.format12Hours) {
          maxAux = parseInt(max, 10);
      } else {
          maxAux = parseInt(max, 10) - 1;
      }
      return maxAux;
  };

  onChange = event => {
      const { style } = this.state;
      const { name, max } = this.props;
      let aux;
      if (name !== 'meridiem') {
          aux = event.target.value.replace(/\D/, '');
          this.updateStyle(style, aux, max);
          this.setState({ value: aux });
      }

      this.props.updateTime(aux, this.props.name, event);
  };

  updateStyle = (style, aux, max) => {
      if (parseInt(aux, 10) > max) {
          if (style.indexOf(INVALID) === -1) {
              this.setState({
                  style: style.concat(INVALID)
              });
          }
      } else {
          if (style.indexOf(INVALID) > -1) {
              this.setState({
                  style: style.replace(INVALID, '')
              });
          }
      }
  };
  render() {
      const { style, arialabel } = this.state;
      const { type, placeholder, disabled, spinners } = this.props;
      return (
          <div className='fd-time__item'>
              {spinners ? (
                  <div className='fd-time__control'>
                      <button
                          aria-label={arialabel.buttonUp}
                          className=' fd-button--light fd-button--xs sap-icon--navigation-up-arrow '
                          disabled={disabled}
                          onClick={this._onUp} />
                  </div>
              ) : (
                  ''
              )}
              <div className='fd-time__input'>
                  <input
                      aria-label={type}
                      className={style}
                      maxLength='2'
                      name={this.props.name}
                      onChange={this.onChange}
                      placeholder={placeholder}
                      readOnly={disabled}
                      type='text'
                      value={this.props.value} />
              </div>
              {spinners ? (
                  <div className='fd-time__control'>
                      <button
                          aria-label={arialabel.buttonDown}
                          className=' fd-button--light fd-button--xs sap-icon--navigation-down-arrow'
                          disabled={disabled}
                          onClick={this._onDown} />
                  </div>
              ) : (
                  ''
              )}
          </div>
      );
  }
}

export class Time extends Component {
  static propTypes = {
      disabled: PropTypes.bool,
      format12Hours: PropTypes.bool,
      id: PropTypes.string,
      showHour: PropTypes.bool,
      showMinute: PropTypes.bool,
      showSecond: PropTypes.bool,
      spinners: PropTypes.bool,
      time: PropTypes.object,
      onChange: PropTypes.func
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
      }
  };
  constructor(props) {
      super(props);
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
      //
      if (this.props.onChange) {
          this.props.onChange(this.state.time);
      }
  };
  // onUpdateTime = () => {
  //   this.props.onUpdateTime();
  // };
  render() {
      const {
          showHour,
          showMinute,
          showSecond,
          format12Hours,
          id,
          disabled,
          spinners
      } = this.props;
      const { time } = this.state;
      let max;
      if (format12Hours) {
          max = 12;
      } else {
          max = 24;
      }
      return (
          <div className='fd-time' id={id}>
              {/* Hours */}
              {showHour ? (
                  <TimeItem
                      defaultValue={1}
                      disabled={disabled}
                      format12Hours={format12Hours}
                      max={max}
                      name='hour'
                      placeholder={'hh'}
                      spinners={spinners}
                      time={time}
                      type={'Hours'}
                      updateTime={this.updateTime}
                      value={time.hour} />
              ) : (
                  ''
              )}
              {/* Minutes */}
              {showMinute ? (
                  <TimeItem
                      defaultValue={1}
                      disabled={disabled}
                      format12Hours={format12Hours}
                      max={'60'}
                      name='minute'
                      placeholder={'mm'}
                      spinners={spinners}
                      time={time}
                      type={'Minutes'}
                      updateTime={this.updateTime}
                      value={this.state.time.minute} />
              ) : (
                  ''
              )}
              {/* Seconds */}
              {showSecond ? (
                  <TimeItem
                      defaultValue={1}
                      disabled={disabled}
                      format12Hours={format12Hours}
                      max={'60'}
                      name='second'
                      placeholder={'ss'}
                      spinners={spinners}
                      time={time}
                      type={'Seconds'}
                      updateTime={this.updateTime}
                      value={this.state.time.second} />
              ) : (
                  ''
              )}
              {/* Meridiem */}
              {format12Hours ? (
                  <TimeItem
                      disabled={disabled}
                      max={'1'}
                      name='meridiem'
                      spinners={spinners}
                      time={this.state.time}
                      type={'Period'}
                      updateTime={this.updateTime}
                      value={CLOCK[this.state.time.meridiem]} />
              ) : (
                  ''
              )}
          </div>
      );
  }
}
