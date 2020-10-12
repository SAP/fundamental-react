import Button from '../Button/Button';
import classnamesBind from 'classnames/bind';
import PropTypes from 'prop-types';
import withStyles from '../utils/withStyles';
import React, { Component } from 'react';
import styles from 'fundamental-styles/dist/time.css';

const classnames = classnamesBind.bind(styles);

class TimeItem extends Component {
    constructor(props) {
        super(props);
        this.CLOCK = [this.props.localizedText.meridiemAM, this.props.localizedText.meridiemPM];
        this.state = {
            value: this.props.value
        };
    }

    _onDown = () => {
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
            this.props.updateActiveColumn();
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

    _onUp = () => {
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

    onClick = selectedValue => {
        this.setState({ value: selectedValue });
        this.props.updateTime(selectedValue, this.props.name);
        this.props.name === 'meridiem' && this.props.updateActiveColumn();
    };

    getDisplayValue = (value) => {
        return parseInt(value, 10) < 10 ? '0' + parseInt(value, 10) : value;
    }

    generateValues = () => {
        const { name, max, format12Hours, placeholder, value, disabled, inputProps, cssNamespace } = this.props;

        if (name === 'meridiem') {
            return this.CLOCK.map((amPmValue, index) => (
                <li
                    {...inputProps}
                    className={classnames(`${cssNamespace}-time__item`)}
                    key={index}
                    onClick={() => this.onClick(index)}>
                    {index === 0 && <div className={classnames(`${cssNamespace}-time__current-indicator`)} />}
                    <span className={classnames(`${cssNamespace}-time__unit`)}>{amPmValue}</span>
                </li>
            ));
        }

        const values = [];

        let before;
        let after;
        const center = value !== null ? parseInt(value, 10) : placeholder;
        const intMax = parseInt(max, 10);
        const is24HourTime = name === 'hour' && !format12Hours;

        if (center < 4) {
            before = center + intMax - 3;

            if (before === 60 || is24HourTime && before === 24) {
                before = 0;
            }
        } else {
            before = center - 3;
        }

        for (let i = 0; i < 3; i++) {
            values.push(before);
            before + 1 > intMax ? before = 1 : before += 1;
            if (before === 60 || is24HourTime && before === 24) {
                before = 0;
            }
        }

        values.push(center);

        if (name === 'hour') {
            if (format12Hours && center === 12) {
                after = 1;
            } else if (!format12Hours && center === 23) {
                after = 0;
            } else {
                after = center + 1;
            }
        } else if (center === 59) {
            after = 0;
        } else {
            after = center + 1;
        }


        for (let i = 0; i < 3; i++) {
            values.push(after);

            after += 1;
            if (after === 60 || is24HourTime && after === 24) {
                after = 0;
            }
        }

        return values.map((timeValue, i) => (
            <li
                {...inputProps}
                className={classnames(`${cssNamespace}-time__item`)}
                key={i}
                onClick={disabled ? null : () => this.onClick(timeValue)}>
                {i === 0 && <div className={classnames(`${cssNamespace}-time__current-indicator`)} />}
                <span className={classnames(`${cssNamespace}-time__unit`)}>{this.getDisplayValue(timeValue)}</span>
            </li>
        ));
    }

    render() {
        const { disabled, upButtonProps, downButtonProps, value, active, localizedText, name, cssNamespace } = this.props;

        const isActive = active === name;

        const wrapperClasses = classnames(
            `${cssNamespace}-time__wrapper`,
            {
                [`${cssNamespace}-time__wrapper--active`]: isActive,
                [`${cssNamespace}-time__wrapper--meridian`]: this.props.name === 'meridiem'
            }
        );

        return (
            <>
                <Button
                    {...upButtonProps}
                    aria-label={localizedText.buttonUp}
                    disabled={disabled}
                    glyph='navigation-up-arrow'
                    onClick={this._onUp}
                    option='transparent' />
                <div className={wrapperClasses}>
                    {!isActive ? (
                        <span
                            className={classnames(`${cssNamespace}-time__item`, `${cssNamespace}-time__item--collapsed`)}
                            onClick={name === 'meridiem' ? this.props.onCollapsedClick : null}>{this.getDisplayValue(value)}</span>
                    ) : (
                        <ul className={classnames(`${cssNamespace}-time__list`)}>
                            {this.generateValues()}
                        </ul>
                    )}
                </div>
                <Button
                    {...downButtonProps}
                    aria-label={localizedText.buttonDown}
                    disabled={disabled}
                    glyph='navigation-down-arrow'
                    onClick={this._onDown}
                    option='transparent' />
            </>
        );
    }
}

TimeItem.displayName = 'TimeItem';

TimeItem.propTypes = {
    localizedText: PropTypes.object.isRequired,
    active: PropTypes.string,
    arialabel: PropTypes.string,
    /** Set to **true** to mark component as disabled and make it non-interactive */
    disabled: PropTypes.bool,
    /** Internal use only */
    downButtonProps: PropTypes.object,
    format12Hours: PropTypes.bool,
    /** Additional props to be spread to the `<input>` element */
    inputProps: PropTypes.object,
    max: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    name: PropTypes.string,
    /** Localized placeholder text of the input */
    placeholder: PropTypes.string,
    time: PropTypes.object,
    upButtonProps: PropTypes.object,
    /* Internal use only */
    updateActiveColumn: PropTypes.func,
    updateTime: PropTypes.func,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    /* Internal use only */
    onCollapsedClick: PropTypes.func
};

TimeItem.defaultProps = {
    updateTime: () => { }
};

export default withStyles(TimeItem);
