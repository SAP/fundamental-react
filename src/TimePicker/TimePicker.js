import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Popover, Time} from '../';
const CLOCK = ['am', 'pm'];
const INVALID = 'is-invalid';
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
      value: this.props.value,
      inputId: this.props.id + '-input',
      buttonID: this.props.id + '-button',
      style: "fd-input",
      valid: false
    };
    //TODO: validate input length
  }
  onChange = event => {
    this.setState({value: event.target.value});

    var aux = event.target.value;
    this.onInputValidation(aux)

    let time = null;
    this
      .props
      .updateValue(aux)
    //TODO:validate
    // TODO: send back the value this.prop.onChange();
  };
  onInputValidation = (value) => {
    const {showHour, showMinute, showSecond, format12Hours} = this.props
    //validate hh:mm:ss am/pm format
    if (showHour && showMinute && showSecond && format12Hours) {
      let regex = new RegExp("((1[0-2]|0?[0-9]):([0-5][0-9]) ([AaPp][Mm]))");
      if (regex.test(value)) {
        // TODO:update the value to time
        this.setState({valid: true})
      }
    }
  }
  onFocus = (event) => {

    console.log("IN---->", event)
  }
  onBlur = (event) => {
    const {valid} = this.state;
    //if the input is not the correct format then  if will be cleared
    if (!valid) {
      this
        .props
        .updateValue("")
    }
    console.log("OUT---->", event.target)
  }
  render() {
    const {disabled} = this.props;
    return (
      <div className='fd-popover__control'>
        <div className='fd-input-group fd-input-group--after'>
          <input
            type='text'
            className={this.state.style}
            id={this.state.inputId}
            placeholder={this.props.placeholder}
            value={this.props.value}
            onChange={this.onChange}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            readOnly={disabled}/>
          <span
            className='fd-input-group__addon fd-input-group__addon--after fd-input-group__addon--button '>
            <button
              id={this.state.buttonID}
              className='fd-button--light fd-button--compact sap-icon--fob-watch fd-popover__control'
              aria-controls='rthHR811'
              aria-expanded='false'
              aria-haspopup='true'
              disabled={disabled}/>
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

  constructor(props) {
    super(props);
    const {time} = this.props;
    let value = '';
    // console.log(placeholder);
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
      popoverId: props.id + '-popover',
      timeId: props.id + '-time'
    };
    if (this.state.showHour) {
      value = 'hh';
    }
    if (this.state.showMinute) {
      value = value
        ? value + ':mm'
        : 'mm';
    }
    if (this.state.showSecond) {
      value = value
        ? value + ':ss'
        : 'ss';
    }
    if (this.state.format12Hours) {
      value = value + ' am/pm';
    }
    this.state.placeholder = value;
  }

  onChange = time => {
    this.setState((state, props) => {
      let value = time
        ? this.formatValue(time)
        : '';
      return {time: time, value: value};
    });
  };
  updateTime = time => {
    this.setState({time: time});
  };
  updateValue = value => {
    console.log(value)
    this.setState({value: value})
  }
  formatValue = time => {
    let value = '';
    console.log(time)
    if (this.state.showHour) {
      value = time.hour;
    }
    if (this.state.showMinute) {
      value = value
        ? value + ':' + time.minute
        : time.minute;
    }
    if (this.state.showSecond) {
      value = value
        ? value + ':' + time.second
        : time.second;
    }
    if (this.state.format12Hours) {
      value = value + ' ' + CLOCK[time.meridiem];
    }
    return value;
  };
  formatPlaceHolder = () => {
    let value = '';
    if (this.state.showHour) {
      value = 'hh';
    }
    if (this.state.showMinute) {
      value = value
        ? value + ':mm'
        : 'mm';
    }
    if (this.state.showSecond) {
      value = value
        ? value + ':ss'
        : 'ss';
    }
    if (this.state.format12Hours) {
      value = value + ' am/pm';
    }
    return value;
  };
  render() {
    const {
      id,
      ...props
    } = this.props;
    const {popoverId, timeId} = this.state;
    return (
      <div id={id} className='fd-time-picker'>
        <div className='fd-popover fd-popover--no-arrow'>
          <Popover
            id={popoverId}
            control={< TimePickerItem id = {
            id
          }
          {
            ...this.state
          }
          {
            ...props
          }
          updateValue = {
            this.updateValue
          }
          time = {
            this.state.time
          }
          value = {
            this.state.value
          }
          onChange = {
            this.onChange
          }
          placeholder = {
            this.state.placeholder
          }
          disabled = {
            this.state.disabled
          }
          updateTime = {
            this.updateTime
          } />}
            body={< Time id = {
            timeId
          }
          time = {
            this.state.time
          }
          showHour = {
            this.state.showHour
          }
          showMinute = {
            this.state.showMinute
          }
          showSecond = {
            this.state.showSecond
          }
          format12Hours = {
            this.state.format12Hours
          }
          disabled = {
            this.state.disabled
          }
          onChange = {
            this.onChange
          } />}/>
        </div>
      </div>
    );
  }
}
