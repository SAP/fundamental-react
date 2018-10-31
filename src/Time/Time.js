import React, { Component } from "react";
import PropTypes from "prop-types";
const INVALID = "is-invalid";
const clock = ["am", "pm"];
class TimeItem extends Component {
  static propTypes = {
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    style: PropTypes.string
  };
  static defaultProps = {
    id: "",
    value: null
  };
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
      min: 0,
      style: "fd-form__control "
    };
  }

  _onUp = () => {
    const { value, max, name } = this.props;
    var aux = 0;
    console.log(value);
    if ((name != "meridiem") & (value != NaN) && value < parseInt(max)) {
      aux = parseInt(value) + 1;
    } else if (name == "meridiem") {
      aux = clock.indexOf(value) ? 0 : 1;
    }
    this.props.updateTime(aux, name);
  };
  _onDown = () => {
    const { value, max, name, time } = this.props;
    var aux = 0;
    if (name != "meridiem" && value > 0 && value < parseInt(max)) {
      aux = parseInt(value) - 1;
    } else if (name == "meridiem") {
      aux = clock.indexOf(value) ? 0 : 1;
      if (aux == 1) {
        let h = time.hour - 12;
        console.log(h);
        this.props.updateTime(h, "hour");
      }
    }
    this.props.updateTime(aux, name);
  };
  onChange = event => {
    const { style } = this.state;
    const { name, max } = this.props;
    let aux;
    if (name !== "meridiem") {
      aux = event.target.value.replace(/\D/, "");
      //field validation and add error style if needed
      this.updateStyle(style, aux, max);
    }
    this.props.updateTime(aux, this.props.name);
  };
  updateStyle = (style, aux, max) => {
    if (parseInt(aux) > max) {
      if (style.indexOf(INVALID) == -1) {
        this.setState({ style: style.concat(INVALID) });
      }
    } else {
      if (style.indexOf(INVALID) > -1) {
        this.setState({ style: style.replace(INVALID, "") });
      }
    }
  };
  render() {
    const { value, style } = this.state;
    const { type, placeholder, name } = this.props;
    //TODO: handle aria labels
    return (
      <div className="fd-time__item">
        <div className="fd-time__control">
          <button
            className=" fd-button--secondary fd-button--xs sap-icon--navigation-up-arrow"
            aria-label="Increase hours"
            onClick={this._onUp}
          />
        </div>
        <div className="fd-time__input">
          <input
            className={style}
            type="text"
            maxLength="2"
            placeholder={placeholder}
            onChange={this.onChange}
            value={this.props.value}
            aria-label={type}
            name={this.props.name}
          />
        </div>
        <div className="fd-time__control">
          <button
            className=" fd-button--secondary fd-button--xs sap-icon--navigation-down-arrow"
            aria-label="Decrease hours"
            onClick={this._onDown}
          />
        </div>
      </div>
    );
  }
}

export class Time extends Component {
  static propTypes = {
    id: PropTypes.string,
    showHour: PropTypes.bool,
    showMinute: PropTypes.bool,
    showSecond: PropTypes.bool,
    format12Hours: PropTypes.bool,
    disabled: PropTypes.bool,
    time: PropTypes.object
  };
  static defaultProps = {
    id: "",
    showHour: true,
    showMinute: true,
    showSecond: true,
    format12Hours: false,
    disabled: false,
    time: { hour: 0, minute: 0, second: 0, meridiem: 0 }
  };
  constructor(props) {
    super(props);
    const { time } = this.props;
    this.state = {
      time: time
    };
  }
  //updater function to be used in the child component TimeItem in event functions
  updateTime = (value, name) => {
    let a = this.state.time;
    a[name] = value;
    this.setState(prevState => ({ ...prevState.time }));
  };

  render() {
    const { showHour, showMinute, showSecond, format12Hours } = this.props;
    let max;
    if (format12Hours) {
      max = 12;
    } else {
      max = 24;
    }
    return (
      <div className="fd-time">
        {/* Hours */}
        {showHour ? (
          <TimeItem
            placeholder={"hh"}
            defaultValue={1}
            type={"Hours"}
            max={max}
            value={this.state.time.hour}
            onChange={this.onChange}
            updateTime={this.updateTime}
            name="hour"
          />
        ) : (
          ""
        )}
        {/* Minutes */}
        {showMinute ? (
          <TimeItem
            placeholder={"mm"}
            defaultValue={1}
            type={"Minute"}
            max={"60"}
            value={this.state.time.minute}
            onChange={this.onChange}
            updateTime={this.updateTime}
            name="minute"
          />
        ) : (
          ""
        )}
        {/* Seconds */}
        {showSecond ? (
          <TimeItem
            placeholder={"ss"}
            defaultValue={1}
            type={"Second"}
            max={"60"}
            value={this.state.time.second}
            onChange={this.onChange}
            updateTime={this.updateTime}
            name="second"
          />
        ) : (
          ""
        )}
        {format12Hours ? (
          <TimeItem
            max={"1"}
            time={this.state.time}
            value={clock[this.state.time.meridiem]}
            onChange={this.onChange}
            updateTime={this.updateTime}
            name="meridiem"
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}
