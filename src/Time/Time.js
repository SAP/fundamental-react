import React, { Component } from 'react';
import PropTypes from 'prop-types';
const INVALID = 'is-invalid';
const CLOCK = ['am', 'pm'];
class TimeItem extends Component {
  static propTypes = {
    arialabel: PropTypes.string,
    style: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  };
  static defaultProps = {
    id: '',
    value: null,
    arialabel: ''
  };
  /**
   * Constructor.
   * @param {object} props
   */
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

  /****
   * Increase time item(hour,minute,second,meridiem) value
   */
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
    if ((name !== 'meridiem') & !isNaN(value) && parseInt(value) < maxAux) {
      aux = parseInt(value) + 1;
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

  /**
   * Function to increase  time item when the current item from where the
   * increase is happening is reaching maximum value
   *@param {string} name - time item name(hour,minute,second,meridiem)
   *@param {object} time - time object from the Time component
   *@param {bool} format12Hours - 12 hours time format
   */
  increaseTimeObj = (name, time, format12Hours) => {
    if (name === 'second' && parseInt(time.minute) < 60) {
      let newMinute = parseInt(time.minute) + 1;
      let newHour;
      if (newMinute === 60) {
        newMinute = 0;
        newHour = parseInt(time.hour) + 1;
        this.increaseHour(format12Hours, newHour, time);
      }
      this.props.updateTime(newMinute, 'minute');
    }
    if (name === 'minute') {
      let newHour = parseInt(time.hour) + 1;
      this.increaseHour(format12Hours, newHour, time);
    }
    if (name === 'hour' && !format12Hours) {
      let newHour = 0;
      this.props.updateTime(newHour, 'hour');
    }
  };
  /**
   * Function to increase/reset  hour item depending on multiple scenarios
   *@param {string} newHour - the  current hour value + 1
   *@param {object} time - time object from the Time component
   *@param {bool} format12Hours - 12 hours time format
   */
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
  /**
   * Function to decrease/reset time item
   *@param {string} name - time item name(hour,minute,second,meridiem)
   *@param {object} time - time object from the Time component
   *@param {bool} format12Hours - 12 hours time format
   */
  decreaseTimeObj = (name, time) => {
    if (name === 'second') {
      let newMinute = parseInt(time.minute) - 1;
      if (parseInt(time.minute) === 0) {
        newMinute = 59;
      }
      this.props.updateTime(newMinute, 'minute');
      if (newMinute === 59) {
        let newHour = parseInt(time.hour) - 1;
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
    if (name === 'minute' && parseInt(time.hour) > 0) {
      let newHour = parseInt(time.hour) - 1;
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
  /****
   * Function to handle press even on decrease button
   * Decrease time item(hour,minute,second,meridiem) value
   */
  _onDown = () => {
    const { value, max, name, time, format12Hours } = this.props;

    var aux = this.setMax(name, max);
    if (
      name !== 'meridiem' &&
      !isNaN(value) &&
      parseInt(value) > 0 &&
      value <= parseInt(max)
    ) {
      aux = parseInt(value) - 1;
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
  /**
   * Get the maximum value for a time item
   * @param {string} name - time item name (hour, second, minute, meridiem)
   * @param {sting} max - maximum value sent from Time component
   */
  setMax = (name, max) => {
    var maxAux;
    if (name === 'hour' && this.props.format12Hours) {
      maxAux = parseInt(max);
    } else {
      maxAux = parseInt(max) - 1;
    }
    return maxAux;
  };
  /**
   * Handle change event on input field, update the style when needed
   * @param {object} event
   */
  onChange = event => {
    const { style } = this.state;
    const { name, max } = this.props;
    let aux;
    if (name !== 'meridiem') {
      aux = event.target.value.replace(/\D/, '');
      this.updateStyle(style, aux, max);
      this.setState({ value: aux });
    } else {
    }

    this.props.updateTime(aux, this.props.name, event);
  };
  /**
   * @param {string} style - the style class names for the input/time item field
   * @param {string} aux - the current value from input field/time item
   * @param {integer} max - maximum value for the the time input
   */
  updateStyle = (style, aux, max) => {
    if (parseInt(aux) > max) {
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
                        className=' fd-button--light fd-button--xs sap-icon--navigation-up-arrow '
                        aria-label={arialabel.buttonUp}
                        disabled={disabled}
                        onClick={this._onUp} />
                </div>
        ) : (
          ''
        )}
            <div className='fd-time__input'>
                <input
                    className={style}
                    type='text'
                    maxLength='2'
                    placeholder={placeholder}
                    onChange={this.onChange}
                    value={this.props.value}
                    aria-label={type}
                    name={this.props.name}
                    readOnly={disabled} />
            </div>
            {spinners ? (
                <div className='fd-time__control'>
                    <button
                        className=' fd-button--light fd-button--xs sap-icon--navigation-down-arrow'
                        aria-label={arialabel.buttonDown}
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
    time: PropTypes.object
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
    if (time.hour !== '00') {
    } else {
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
  /**
   *
   * @param {object} nextProps
   * Change the time state values from parent component with the new values from props
   */
  componentWillReceiveProps(nextProps) {
    // check if props are different than the current state to prevent an unneeded render
    if (nextProps.time !== this.state.time) {
      this.setState({ time: nextProps.time });
    }
  }
  /** Add 0 to values < 10
   * @param {string} value
   * @param {string} name
   */
  formatValue = (value, name) => {
    if (name !== 'meridiem' && parseInt(value) < 10) {
      //using parseInt here to remove the zeroes before concatenating one
      value = '0'.concat(parseInt(value));
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
        <div id={id} className='fd-time'>
            {/* Hours */}
            {showHour ? (
                <TimeItem
                    disabled={disabled}
                    placeholder={'hh'}
                    defaultValue={1}
                    type={'Hours'}
                    max={max}
                    value={time.hour}
                    updateTime={this.updateTime}
                    name='hour'
                    time={time}
                    format12Hours={format12Hours}
                    spinners={spinners} />
        ) : (
          ''
        )}
            {/* Minutes */}
            {showMinute ? (
                <TimeItem
                    disabled={disabled}
                    placeholder={'mm'}
                    defaultValue={1}
                    type={'Minutes'}
                    max={'60'}
                    value={this.state.time.minute}
                    updateTime={this.updateTime}
                    name='minute'
                    time={time}
                    format12Hours={format12Hours}
                    spinners={spinners} />
        ) : (
          ''
        )}
            {/* Seconds */}
            {showSecond ? (
                <TimeItem
                    disabled={disabled}
                    placeholder={'ss'}
                    defaultValue={1}
                    type={'Seconds'}
                    max={'60'}
                    value={this.state.time.second}
                    updateTime={this.updateTime}
                    name='second'
                    time={time}
                    format12Hours={format12Hours}
                    spinners={spinners} />
        ) : (
          ''
        )}
            {/* Meridiem */}
            {format12Hours ? (
                <TimeItem
                    disabled={disabled}
                    type={'Period'}
                    max={'1'}
                    time={this.state.time}
                    value={CLOCK[this.state.time.meridiem]}
                    updateTime={this.updateTime}
                    name='meridiem'
                    spinners={spinners} />
        ) : (
          ''
        )}
        </div>
    );
  }
}
