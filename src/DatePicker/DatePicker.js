import Button from '../Button/Button';
import Calendar from '../Calendar/Calendar';
import FormInput from '../Forms/FormInput';
import InputGroup from '../InputGroup/InputGroup';
import moment from 'moment';
import PropTypes from 'prop-types';
import withStyles from '../utils/WithStyles/WithStyles';
import React, { Component } from 'react';

class DatePicker extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hidden: true,
            selectedDate: null,
            arrSelectedDates: [],
            formattedDate: ''
        };

        this.calendarRef = React.createRef();
    }

    openCalendar = type => {
        if (type === 'input') {
            if (this.state.hidden) {
                this.setState({ hidden: !this.state.hidden });
            }
        } else {
            this.setState({ hidden: !this.state.hidden });
        }
    };

    modifyDate = (e) => {
        this.setState({ formattedDate: e.target.value });
    }

    sendUpdate = (e) => {
        if (e.key === 'Enter') {
            this.validateDates();
        }
    }

    componentWillMount() {
        document.addEventListener('mousedown', this.click, false);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.click, false);
    }

    click = e => {
        if (this.component.contains(e.target)) {
            return;
        }
        this.clickOutside();
    };

    isDateValid = (date) => {
        return date.isValid() && this.calendarRef.current.isEnabledDate(date);
    }

    validateDates = () => {
        const longDateFormat = moment.localeData(this.props.locale).longDateFormat('L');

        if (this.props.enableRangeSelection) {
            const dateRange = this.state.formattedDate.split('-');
            const firstDate = moment(dateRange[0], longDateFormat);
            const secondDate = moment(dateRange[1], longDateFormat);

            if (this.isDateValid(firstDate) && this.isDateValid(secondDate)) {
                let arrSelected = [];
                firstDate.isAfter(secondDate)
                    ? (arrSelected = [secondDate, firstDate])
                    : (arrSelected = [firstDate, secondDate]);

                this.setState({
                    selectedDate: null,
                    arrSelectedDates: arrSelected
                });
            } else {
                this.resetState();
            }
        } else {
            const newDate = moment(this.state.formattedDate, longDateFormat);
            if (this.isDateValid(newDate)) {
                this.setState({
                    selectedDate: newDate
                });
            } else {
                this.resetState();
            }
        }
    }

    resetState = () => {
        this.setState({
            formattedDate: '',
            selectedDate: null,
            arrSelectedDates: []
        });
    }

    clickOutside = () => {
        this.validateDates();
        this.setState({
            hidden: true
        }, () => {
            this.props.onBlur({
                date: this.state.selectedDate,
                formattedDate: this.state.formattedDate
            });
        });
    };

    updateDate = (date) => {
        const longDateFormat = moment.localeData(this.props.locale).longDateFormat('L');

        if (this.props.enableRangeSelection) {
            let formatDate = date[0].format(longDateFormat);
            if (!!date[1]) {
                formatDate += '-' + date[1].format(longDateFormat);
            }
            this.setState({
                arrSelectedDates: date,
                formattedDate: formatDate
            });
        } else {
            this.setState({
                selectedDate: date,
                formattedDate: date.format(longDateFormat)
            });
        }
    }

    _handleBlur = () => {
        this.props.onBlur({
            date: this.state.selectedDate,
            formattedDate: this.state.formattedDate
        });
    };

    render() {
        const {
            blockedDates,
            buttonProps,
            className,
            compact,
            disableAfterDate,
            disableBeforeDate,
            disabledDates,
            disableFutureDates,
            disablePastDates,
            disableStyles,
            disableWeekday,
            disableWeekends,
            enableRangeSelection,
            inputProps,
            locale,
            onBlur,
            ...props
        } = this.props;

        return (
            <div
                {...props}
                className={className}
                ref={component => (this.component = component)}>
                <div className='fd-popover'>
                    <div className='fd-popover__control'>
                        <InputGroup compact={compact}>
                            <FormInput
                                {...inputProps}
                                onBlur={this._handleBlur}
                                onChange={this.modifyDate}
                                onClick={() => this.openCalendar('input')}
                                onKeyPress={this.sendUpdate}
                                placeholder={moment.localeData(this.props.locale).longDateFormat('L')}
                                value={this.state.formattedDate} />
                            <InputGroup.Addon isButton>
                                <Button {...buttonProps}
                                    disableStyles={disableStyles}
                                    glyph='calendar'
                                    onClick={() => this.openCalendar()}
                                    option='light' />
                            </InputGroup.Addon>
                        </InputGroup>
                    </div>
                    <div
                        aria-hidden={this.state.hidden}
                        className='fd-popover__body fd-popover__body--right fd-popover__body--no-arrow'>
                        <Calendar
                            blockedDates={blockedDates}
                            customDate={
                                enableRangeSelection
                                    ? this.state.arrSelectedDates
                                    : this.state.selectedDate
                            }
                            disableAfterDate={disableAfterDate}
                            disableBeforeDate={disableBeforeDate}
                            disableFutureDates={disableFutureDates}
                            disablePastDates={disablePastDates}
                            disableStyles={disableStyles}
                            disableWeekday={disableWeekday}
                            disableWeekends={disableWeekends}
                            disabledDates={disabledDates}
                            enableRangeSelection={enableRangeSelection}
                            locale={locale}
                            onChange={this.updateDate}
                            ref={this.calendarRef} />
                    </div>
                </div>
            </div>
        );
    }
}

DatePicker.displayName = 'DatePicker';

DatePicker.propTypes = {
    ...Calendar.basePropTypes,
    buttonProps: PropTypes.object,
    compact: PropTypes.bool,
    enableRangeSelection: PropTypes.bool,
    inputProps: PropTypes.object,
    locale: PropTypes.string,
    onBlur: PropTypes.func
};

DatePicker.defaultProps = {
    locale: 'en',
    onBlur: () => {}
};

DatePicker.propDescriptions = {
    ...Calendar.propDescriptions,
    enableRangeSelection: 'Set to **true** to enable the selection of a date range (begin and end).',
    locale: 'Language code to set the locale.',
    onBlur: 'Callback function for onBlur events. In the object returned, `date` is the date object and `formattedDate` is the formatted date.'
};

export { DatePicker as __DatePicker };

export default withStyles(DatePicker, { cssFile: ['popover', 'input-group', 'input'], fonts: true });
