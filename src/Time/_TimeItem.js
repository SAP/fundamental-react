import Button from '../Button/Button';
import FormInput from '../Forms/FormInput';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

const INVALID = 'is-invalid';

class TimeItem extends Component {
    constructor(props) {
        super(props);
        this.CLOCK = [this.props.localizedText.meridiemAM, this.props.localizedText.meridiemPM];
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
            style: 'fd-time__input ',
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
            aux = this.CLOCK.indexOf(value) ? 0 : 1;
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
            aux = this.CLOCK.indexOf(value) ? 0 : 1;
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
        const { type, placeholder, disableStyles, disabled, spinners, upButtonProps, downButtonProps, inputProps } = this.props;
        return (
            <div className='fd-time__item'>
                {spinners ? (
                    <div className='fd-time__control'>
                        <Button
                            {...upButtonProps}
                            aria-label={arialabel.buttonUp}
                            disableStyles={disableStyles}
                            disabled={disabled}
                            glyph='navigation-up-arrow'
                            onClick={this._onUp}
                            option='light' />
                    </div>
                ) : (
                    ''
                )}
                <FormInput
                    {...inputProps}
                    aria-label={type}
                    className={style}
                    disableStyles={disableStyles}
                    maxLength='2'
                    name={this.props.name}
                    onChange={this.onChange}
                    placeholder={placeholder}
                    readOnly={disabled}
                    value={this.props.value} />
                {spinners ? (
                    <div className='fd-time__control'>
                        <Button
                            {...downButtonProps}
                            aria-label={arialabel.buttonDown}
                            disableStyles={disableStyles}
                            disabled={disabled}
                            glyph='navigation-down-arrow'
                            onClick={this._onDown}
                            option='light' />
                    </div>
                ) : (
                    ''
                )}
            </div>
        );
    }
}

TimeItem.displayName = 'TimeItem';

TimeItem.propTypes = {
    localizedText: PropTypes.object.isRequired,
    arialabel: PropTypes.string,
    disabled: PropTypes.bool,
    disableStyles: PropTypes.bool,
    downButtonProps: PropTypes.object,
    format12Hours: PropTypes.bool,
    inputProps: PropTypes.object,
    max: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    name: PropTypes.string,
    placeholder: PropTypes.string,
    spinners: PropTypes.bool,
    style: PropTypes.string,
    time: PropTypes.object,
    type: PropTypes.string,
    upButtonProps: PropTypes.object,
    updateTime: PropTypes.func,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

TimeItem.defaultProps = {
    updateTime: () => { }
};

export default TimeItem;
