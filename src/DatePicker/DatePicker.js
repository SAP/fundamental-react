import Button from '../Button/Button';
import Calendar from '../Calendar/Calendar';
import classnames from 'classnames';
import { FORM_MESSAGE_TYPES } from '../utils/constants';
import FormInput from '../Forms/FormInput';
import FormMessage from '../Forms/_FormMessage';
import InputGroup from '../InputGroup/InputGroup';
import { isEnabledDate } from '../utils/dateUtils';
import moment from 'moment';
import Popover from '../Popover/Popover';
import PropTypes from 'prop-types';
import { validDateLookup } from './validDateLookup';
import React, { Component } from 'react';

const ISO_DATE_FORMAT = 'YYYY-MM-DD';
const dateRangeSeparator = ' - ';
class DatePicker extends Component {
    constructor(props) {
        super(props);
        const formattedDate = props.defaultValue.length > 0 ? this.getFormattedDateStr(props.defaultValue) : '';
        this.state = {
            isExpanded: false,
            selectedDate: formattedDate.length === 0 ? null : moment(formattedDate, props.dateFormat),
            arrSelectedDates: [],
            formattedDate
        };

        this.calendarRef = React.createRef();
        this.popoverRef = React.createRef();
    }

    /**
     * Function tries to format any date string into the format specified by
     * props.dateFormat (or ISO_DATE_FORMAT as fallback).
     * It will try to use multiple similar formats, defined in validDateLookup, to
     * create a Moment.js date object from given dateString.
     * It will return an empty string if Moment.js is unable to create a valid
     * date object from given string (for e.g. text only strings).
     * @param  {String|Object} date to format.
     * @returns {String} formatted date string.
     */
    getFormattedDateStr = (date) => {
        if (date) {
            const momentDateObj = this.getMomentDateObj(date);
            if (momentDateObj && momentDateObj.isValid()) {
                const { dateFormat } = this.props;
                return momentDateObj.format(dateFormat ? dateFormat : ISO_DATE_FORMAT);
            } else {
                return '';
            }
        }
        return date;
    }
    /**
     * Function to get date range string from collection of 2 date objects.
     * @param  {Object[]} dates array containing 2 date objects
     * @returns {String} formatted date range string e.g. "03/16/2020 - 03/19/2020"
     */
    getFormattedDateRangeStr = (dates) => {
        let str = this.getFormattedDateStr(dates[0]);
        if (!!dates[1]) {
            str += dateRangeSeparator + this.getFormattedDateStr(dates[1]);
        }
        return str;
    }
    /**
     * Function to create a Moment.js date object from given dateString.
     * It will try to use multiple similar formats, defined in validDateLookup, to
     * parse the given dateString and props.locale
     * @param  {String} dateString to parse.
     * @returns {Object} Moment.js date object.
     */
    getMomentDateObj(dateString) {
        return moment(dateString, this.getValidFormats(), this.props.locale, true);
    }
    /**
     * Get the different date formats allowed for user input.
     * These formats are based on props.dateFormat
     * If no entry for props.dateFormat found in validDateLookup,
     * it returns the confiured format as string.
     *
     * @returns {Array} collection of date formats allowed for input.
     */
    getValidFormats = () =>{
        const { dateFormat } = this.props;
        return validDateLookup[dateFormat] ? validDateLookup[dateFormat] : dateFormat;
    }

    modifyDate = (e) => {
        this.setState({ formattedDate: e.target.value });
    }

    sendUpdate = (e) => {
        if (e.key === 'Enter') {
            this.validateDates();
        }
    }

    isDateValid = (date) => {
        return date.isValid() && isEnabledDate(date, this.props);
    }

    validateDates = () => {
        const { formattedDate } = this.state;

        if (this.props.enableRangeSelection) {
            const dateRange = formattedDate.split(dateRangeSeparator);
            const firstDate = this.getMomentDateObj(dateRange[0]);
            const secondDate = this.getMomentDateObj(dateRange[1]);

            if (this.isDateValid(firstDate) && this.isDateValid(secondDate)) {
                let arrSelected = [];
                firstDate.isAfter(secondDate)
                    ? (arrSelected = [secondDate, firstDate])
                    : (arrSelected = [firstDate, secondDate]);

                this.setState({
                    selectedDate: null,
                    arrSelectedDates: arrSelected,
                    formattedDate: this.getFormattedDateRangeStr(arrSelected)
                });
            } else {
                this.resetState();
            }
        } else {
            const newDate = this.getMomentDateObj(formattedDate);

            if (this.isDateValid(newDate)) {
                this.setState({
                    selectedDate: newDate,
                    formattedDate: this.getFormattedDateStr(formattedDate)
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

    handleClick = () => {
        this.setState({ isExpanded: !this.state.isExpanded });
    };

    handleOutsideClickAndEscape = () => {
        this.validateDates();
        this.setState({
            isExpanded: false
        }, () => {
            this._handleBlur();
        });
    };

    updateDate = (date) => {
        let closeCalendar = false;

        if (this.props.enableRangeSelection) {
            if (!!date[1]) {
                closeCalendar = true;
            }
            this.setState({
                arrSelectedDates: date,
                formattedDate: this.getFormattedDateRangeStr(date)
            });
        } else {
            closeCalendar = true;
            this.setState({
                selectedDate: date,
                formattedDate: this.getFormattedDateStr(date)
            });
        }

        if (closeCalendar) {
            const popover = this.popoverRef && this.popoverRef.current;
            popover && popover.handleEscapeKey();
            this.setState({ isExpanded: false });
        }
    }

    _handleBlur = () => {
        this.validateDates();
        this.props.onBlur({
            date: this.state.selectedDate,
            formattedDate: this.state.formattedDate
        });
    };

    render() {
        const {
            blockedDates,
            buttonLabel,
            buttonProps,
            className,
            compact,
            dateFormat,
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
            localizedText,
            onBlur,
            validationState,
            ...props
        } = this.props;

        const inputGroupClass = classnames(
            'fd-input-group--control',
            {
                [`is-${validationState?.state}`]: validationState?.state
            },
            className
        );

        return (
            <div
                {...props}
                className={className}>
                <Popover
                    body={
                        <>
                            {
                                validationState &&
                                <FormMessage
                                    disableStyles={disableStyles}
                                    type={validationState.state}>
                                    {validationState.text}
                                </FormMessage>
                            }
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
                                focusOnInit
                                locale={locale}
                                localizedText={localizedText}
                                onChange={this.updateDate}
                                ref={this.calendarRef} />
                        </>
                    }
                    control={
                        <InputGroup
                            aria-expanded={this.state.isExpanded}
                            aria-haspopup='true'
                            className={inputGroupClass}
                            compact={compact}
                            disableStyles={disableStyles}
                            onClick={this.handleClick}
                            validationState={!this.state.isExpanded ? validationState : null} >
                            <FormInput
                                {...inputProps}
                                disableStyles={disableStyles}
                                onBlur={this._handleBlur}
                                onChange={this.modifyDate}
                                onKeyPress={this.sendUpdate}
                                placeholder={this.getPlaceHolder(dateFormat)}
                                value={this.state.formattedDate} />
                            <InputGroup.Addon isButton>
                                <Button {...buttonProps}
                                    aria-label={buttonLabel}
                                    disableStyles={disableStyles}
                                    glyph='calendar'
                                    option='transparent' />
                            </InputGroup.Addon>
                        </InputGroup>
                    }
                    disableKeyPressHandler
                    disableStyles={disableStyles}
                    noArrow
                    onClickOutside={this.handleOutsideClickAndEscape}
                    onEscapeKey={this.handleOutsideClickAndEscape}
                    ref={this.popoverRef} />
            </div>
        );
    }

    getPlaceHolder(dateFormat) {
        let dateFormatFinal = dateFormat
                                && dateFormat.trim()
                                && dateFormat.trim().length ? dateFormat : ISO_DATE_FORMAT;
        if (this.props.enableRangeSelection) {
            return dateFormatFinal + dateRangeSeparator + dateFormatFinal;
        }
        return dateFormatFinal;
    }
}

DatePicker.displayName = 'DatePicker';

DatePicker.propTypes = {
    ...Calendar.basePropTypes,
    buttonLabel: PropTypes.string,
    buttonProps: PropTypes.object,
    compact: PropTypes.bool,
    dateFormat: PropTypes.string,
    defaultValue: PropTypes.string,
    enableRangeSelection: PropTypes.bool,
    inputProps: PropTypes.object,
    locale: PropTypes.string,
    validationState: PropTypes.shape({
        state: PropTypes.oneOf(FORM_MESSAGE_TYPES),
        text: PropTypes.string
    }),
    onBlur: PropTypes.func
};

DatePicker.defaultProps = {
    buttonLabel: 'Choose date',
    defaultValue: '',
    dateFormat: ISO_DATE_FORMAT,
    locale: 'en',
    onBlur: () => {}
};

DatePicker.propDescriptions = {
    ...Calendar.propDescriptions,
    buttonLabel: 'aria-label for datepicker button',
    dateFormat: 'Format to use for displaying the inputted or selected date. E.g. "YYYY.M.D", "DD-MM-YYYY", "MM/DD/YYYY" etc. This overrides the date format derived from any set locale.',
    defaultValue: 'Default value to be shown in the Datepicker.',
    enableRangeSelection: 'Set to **true** to enable the selection of a date range (begin and end).',
    locale: 'Language code to set the locale.',
    onBlur: 'Callback function for onBlur events. In the object returned, `date` is the date object and `formattedDate` is the formatted date.'
};

export default DatePicker;
