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
  /**
   * Constructor.
   * @param {object} props - The x value.
   */
  constructor(props) {
    super(props);
    var aria = {};
    if (this.props.name == "meridiem") {
      aria = {
        buttonUp: "Increase period",
        buttonDown: "Decrease period"
      };
    } else {
      aria = {
        buttonUp: "Increase " + this.props.name + "s",
        buttonDown: "Decrease " + this.props.name + "s"
      };
    }
    this.state = {
      value: this.props.value,
      min: 0,
      style: "fd-form__control ",
      arialabel: aria

      // this.state.arialabel.bu
    };
  }
  /****
   * Function to handle press even on increase button
   * Increase time item(hour,minute,second,meridiem) value
   */
  _onUp = () => {
    const { value, max, name, time, format12Hours } = this.props;
    var aux = 0;
    var maxAux = this.setMax(name, max);
    if ((name != "meridiem") & (value != NaN) && value < maxAux) {
      aux = parseInt(value) + 1;
    } else if (value == maxAux) {
      this.increaseTimeObj(name, time, format12Hours);
    } else if (name == "meridiem") {
      aux = clock.indexOf(value) ? 0 : 1;
    }
    this.props.updateTime(aux, name);
  };
  /**
   * Function to increase  time item
   *@param {string} name
   *@param {object} time
   *@param {bool} format12Hours
   */
  increaseTimeObj = (name, time, format12Hours) => {
    if (name == "second" && time["minute"] < 60) {
      let newSecond = time["minute"] + 1;
      this.props.updateTime(newSecond, "minute");
    }
    if (
      (name == "minute" && format12Hours && time["hour"] < 12) ||
      (name == "minute" && !format12Hours && time["hour"] < 24)
    ) {
      let newMinute = time["hour"] + 1;
      this.props.updateTime(newMinute, "hour");
    }
  };
  /**
   * Function to decrease time item
   *@param {string} name
   *@param {object} time
   *@param {bool} ormat12Hours
   */
  decreaseTimeObj = (name, time) => {
    if (name == "second" && time["minute"] > 0) {
      let newSecond = time["minute"] - 1;
      this.props.updateTime(newSecond, "minute");
    }
    if (name == "minute" && time["hour"] > 0) {
      let newMinute = time["hour"] - 1;
      this.props.updateTime(newMinute, "hour");
    }
  };
  /****
   * Function to handle press even on decrease button
   * Decrease time item(hour,minute,second,meridiem) value
   */
  _onDown = () => {
    const { value, max, name, time } = this.props;
    var aux = max - 1;
    //TODO: fix the Hour Time item (value 12 missing on down)
    if (
      name != "meridiem" &&
      value != NaN &&
      value > 0 &&
      value < parseInt(max)
    ) {
      aux = parseInt(value) - 1;
    } else if (name == "meridiem") {
      aux = clock.indexOf(value) ? 0 : 1;
    } else if (value == 0) {
      this.decreaseTimeObj(name, time);
    }
    this.props.updateTime(aux, name);
  };
  setMax = (name, max) => {
    var maxAux;
    if (name == "hour") {
      maxAux = parseInt(max);
    } else {
      maxAux = parseInt(max) - 1;
    }
    return maxAux;
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
    const { value, style, arialabel } = this.state;
    const { type, placeholder, name } = this.props;
    //TODO: handle aria labels
    return (
      <div className="fd-time__item">
        <div className="fd-time__control">
          <button
            className=" fd-button--secondary fd-button--xs sap-icon--navigation-up-arrow"
            aria-label={arialabel.buttonUp}
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
            aria-label={arialabel.buttonDown}
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
    const { time } = this.state;
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
            value={time.hour}
            onChange={this.onChange}
            updateTime={this.updateTime}
            name="hour"
            time={time}
            format12Hours={format12Hours}
          />
        ) : (
          ""
        )}
        {/* Minutes */}
        {showMinute ? (
          <TimeItem
            placeholder={"mm"}
            defaultValue={1}
            type={"Minutes"}
            max={"60"}
            value={this.state.time.minute}
            onChange={this.onChange}
            updateTime={this.updateTime}
            name="minute"
            time={time}
            format12Hours={format12Hours}
          />
        ) : (
          ""
        )}
        {/* Seconds */}
        {showSecond ? (
          <TimeItem
            placeholder={"ss"}
            defaultValue={1}
            type={"Seconds"}
            max={"60"}
            value={this.state.time.second}
            onChange={this.onChange}
            updateTime={this.updateTime}
            name="second"
            time={time}
            format12Hours={format12Hours}
          />
        ) : (
          ""
        )}
        {format12Hours ? (
          <TimeItem
            type={"Period"}
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
