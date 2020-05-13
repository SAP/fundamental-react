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
import { validDateLookup } from './_validDateLookup';
import React, { Component } from 'react';

const ISO_DATE_FORMAT = 'YYYY-MM-DD';
const dateRangeSeparator = ' - ';

/** A **DatePicker** is an opinionated composition of the **Input Group**, **Popover**
 * and **Calendar** components to accomplish the UI pattern for picking a date. */

class DatePicker extends Component {
    constructor(props) {
        super(props);
        const formattedDate = props.defaultValue.length > 0 ? this.getFormattedDateStr(props.defaultValue) : '';
        const isoFormattedDate = props.defaultValue.length > 0 ? moment(props.defaultValue).format(ISO_DATE_FORMAT) : '';
        this.state = {
            isExpanded: false,
            selectedDate: formattedDate.length === 0 ? null : this.getMomentDateObj(formattedDate),
            arrSelectedDates: [],
            formattedDate,
            isoFormattedDate
        };

        this.calendarRef = React.createRef();
        this.popoverRef = React.createRef();
    }

    /**
     * Function tries to format any date string into the format specified by dateFormat.
     * It will use format derived from locale if dateFormat is not specified.
     * It will use ISO_DATE_FORMAT if locale is invalid.
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
                return momentDateObj.format(this.resolveFormat());
            } else {
                return '';
            }
        }
        return date;
    }

    resolveFormat = () => {
        const { dateFormat, locale } = this.props;
        if (dateFormat) {
            return dateFormat;
        } else if (locale) {
            const localeData = moment.localeData(locale);
            return localeData.longDateFormat('L');
        }
        return ISO_DATE_FORMAT;
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
        const format = this.resolveFormat();
        return validDateLookup[format] ? validDateLookup[format] : format;
    }

    getPlaceHolder() {
        let placeholderDateFormat = this.resolveFormat();
        if (this.props.enableRangeSelection) {
            return placeholderDateFormat + dateRangeSeparator + placeholderDateFormat;
        }
        return placeholderDateFormat;
    }

    modifyDate = (e) => {
        this.setState({ formattedDate: e.target.value });
    }

    componentDidUpdate(prevProps) {
        if (prevProps.defaultValue !== this.props.defaultValue) {
            this.handleNewDefault();
        }
    }

    handleNewDefault = () => {
        const { defaultValue } = this.props;
        const formattedNewDefault = defaultValue && defaultValue.length > 0 ? this.getFormattedDateStr(defaultValue) : '';
        this.setState({
            selectedDate: formattedNewDefault.length === 0 ? null : this.getMomentDateObj(formattedNewDefault),
            isoFormattedDate: defaultValue && defaultValue.length > 0 ? moment(defaultValue).format(ISO_DATE_FORMAT) : '',
            formattedDate: formattedNewDefault
        }, () => {
            this.validateDates();
        });
    }

    _handleOnChange = (e) => {
        e.stopPropagation();
        this.setState({
            formattedDate: e.target.value,
            isoFormattedDate: e.target.value ? moment(e.target.value).format(ISO_DATE_FORMAT) : ''
        }, () => {
            this.props.onChange(this.getCallbackData());
        });
    }

    sendUpdate = (e) => {
        if (e.key === 'Enter') {
            this.validateDates();
        }
    }

    isDateValid = (date) => {
        return date.isValid() && isEnabledDate(date, this.props);
    }

    getCallbackData = () => {
        return {
            date: this.state.selectedDate,
            formattedDate: this.state.formattedDate,
            isoFormattedDate: this.state.isoFormattedDate
        };
    }

    executeCallback = (callbackFunction) => {
        callbackFunction
        && typeof callbackFunction === 'function'
        && callbackFunction(this.getCallbackData());
    }

    validateDates = (postValidationCallback) => {
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
                const newFormattedDateRangeStr = this.getFormattedDateRangeStr(arrSelected);
                this.setState({
                    selectedDate: null,
                    arrSelectedDates: arrSelected,
                    formattedDate: newFormattedDateRangeStr
                }, () => {
                    if (formattedDate !== newFormattedDateRangeStr) {
                        this.executeCallback(this.props.onChange);
                    }
                    this.executeCallback(postValidationCallback);
                });
            } else {
                this.resetState(postValidationCallback);
            }
        } else {
            const newDate = this.getMomentDateObj(formattedDate);
            if (this.isDateValid(newDate)) {
                const newFormattedDateStr = this.getFormattedDateStr(formattedDate);
                this.setState({
                    selectedDate: newDate,
                    formattedDate: newFormattedDateStr,
                    isoFormattedDate: formattedDate ? moment(formattedDate).format(ISO_DATE_FORMAT) : ''
                }, () => {
                    if (formattedDate !== newFormattedDateStr) {
                        this.executeCallback(this.props.onChange);
                    }
                    this.executeCallback(postValidationCallback);
                });
            } else {
                this.resetState(postValidationCallback);
            }
        }
    }

    resetState = (postValidationCallback) => {
        const { formattedDate } = this.state;
        this.setState({
            formattedDate: '',
            isoFormattedDate: '',
            selectedDate: null,
            arrSelectedDates: []
        }, () => {
            if (formattedDate !== '') {
                this.executeCallback(this.props.onChange);
            }
            this.executeCallback(postValidationCallback);
        });
    }

    handleClickButton = () => {
        this.setState({ isExpanded: !this.state.isExpanded });

        const popover = this.popoverRef && this.popoverRef.current;
        popover && popover.triggerBody();
    };

    handleOutsideClickAndEscape = () => {
        this.setState({
            isExpanded: false
        });
    };

    _handleFocus = () => {
        this.props.onFocus(this.getCallbackData());
    }

    updateDate = (date) => {
        let closeCalendar = false;
        const { formattedDate } = this.state;

        if (this.props.enableRangeSelection) {
            let isoFormatDate = date[0].format(ISO_DATE_FORMAT);
            if (!!date[1]) {
                isoFormatDate += dateRangeSeparator + date[1].format(ISO_DATE_FORMAT);
                closeCalendar = true;
            }
            const newFormattedDateRangeStr = this.getFormattedDateRangeStr(date);
            this.setState({
                arrSelectedDates: date,
                formattedDate: newFormattedDateRangeStr,
                isoFormattedDate: isoFormatDate
            }, () => {
                if (formattedDate !== newFormattedDateRangeStr) {
                    this.props.onChange(this.getCallbackData());
                }
            });
        } else {
            closeCalendar = true;
            const newFormattedDate = this.getFormattedDateStr(date);
            this.setState({
                selectedDate: date,
                formattedDate: newFormattedDate,
                isoFormattedDate: date.format(ISO_DATE_FORMAT)
            }, () => {
                if (formattedDate !== newFormattedDate) {
                    this.props.onChange(this.getCallbackData());
                }
            });
        }

        if (closeCalendar) {
            const popover = this.popoverRef && this.popoverRef.current;
            popover && popover.handleEscapeKey();
            this.setState({ isExpanded: false }, ()=> {
                this.props.onDatePickerClose(this.getCallbackData());
            });
        }
    }
    /**
     * First validates the inputted dates,
     * then sets state,
     * finally calls props.onBlur with callback data
     * i.e. the  validated state
     *
     * @returns {undefined}
     */
    _handleBlur = () => {
        this.validateDates(this.props.onBlur);
    };

    render() {
        const {
            blockedDates,
            buttonLabel,
            buttonProps,
            calendarProps,
            className,
            compact,
            dateFormat,
            disabled,
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
            onDatePickerClose,
            popoverProps,
            readOnly,
            specialDays,
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

        const disableButton = disabled || readOnly;

        return (
            <div
                {...props}
                className={className}>
                <Popover
                    {...popoverProps}
                    body={
                        <>
                            {validationState?.text?.length > 0 &&
                                <FormMessage
                                    disableStyles={disableStyles}
                                    type={validationState.state}>
                                    {validationState.text}
                                </FormMessage>
                            }
                            <Calendar
                                {...calendarProps}
                                blockedDates={blockedDates}
                                customDate={
                                    enableRangeSelection
                                        ? this.state.arrSelectedDates
                                        : this.state.selectedDate
                                }
                                disableAfterDate={disableAfterDate}
                                disableBeforeDate={disableBeforeDate}
                                disabledDates={disabledDates}
                                disableFutureDates={disableFutureDates}
                                disablePastDates={disablePastDates}
                                disableStyles={disableStyles}
                                disableWeekday={disableWeekday}
                                disableWeekends={disableWeekends}
                                enableRangeSelection={enableRangeSelection}
                                focusOnInit
                                locale={locale}
                                localizedText={localizedText}
                                onChange={this.updateDate}
                                ref={this.calendarRef}
                                specialDays={specialDays} />
                        </>
                    }
                    control={
                        <InputGroup
                            aria-expanded={this.state.isExpanded}
                            aria-haspopup='true'
                            className={inputGroupClass}
                            compact={compact}
                            disabled={disabled}
                            disableStyles={disableStyles}
                            validationState={!this.state.isExpanded ? validationState : null} >
                            <FormInput
                                {...inputProps}
                                disableStyles={disableStyles}
                                onBlur={this._handleBlur}
                                onChange={this._handleOnChange}
                                onFocus={this._handleFocus}
                                onKeyPress={this.sendUpdate}
                                placeholder={this.getPlaceHolder(dateFormat)}
                                readOnly={readOnly}
                                value={this.state.formattedDate} />
                            <InputGroup.Addon isButton>
                                <Button {...buttonProps}
                                    aria-label={buttonLabel}
                                    disabled={disableButton}
                                    disableStyles={disableStyles}
                                    glyph='calendar'
                                    onClick={this.handleClickButton}
                                    option='transparent' />
                            </InputGroup.Addon>
                        </InputGroup>
                    }
                    disabled={disableButton}
                    disableKeyPressHandler
                    disableStyles={disableStyles}
                    disableTriggerOnClick
                    noArrow
                    onClickOutside={this.handleOutsideClickAndEscape}
                    onEscapeKey={this.handleOutsideClickAndEscape}
                    ref={this.popoverRef} />
            </div>
        );
    }
}

DatePicker.displayName = 'DatePicker';

DatePicker.propTypes = {
    ...Calendar.basePropTypes,
    /** aria-label for datepicker button */
    buttonLabel: PropTypes.string,
    /** Additional props to be spread to the `<button>` element */
    buttonProps: PropTypes.object,
    calendarProps: PropTypes.shape({
        monthListProps: PropTypes.object,
        tableBodyProps: PropTypes.object,
        tableHeaderProps: PropTypes.object,
        tableProps: PropTypes.object,
        yearListProps: PropTypes.object
    }),
    /** Set to **true** to enable compact mode */
    compact: PropTypes.bool,
    /** Format to use for displaying the inputted or selected date. E.g. "YYYY.M.D", "DD-MM-YYYY", "MM/DD/YYYY" etc.
     * This overrides the date format derived from any set locale. */
    dateFormat: PropTypes.string,
    /** Default value to be shown in the Datepicker */
    defaultValue: PropTypes.string,
    /** Set to **true** to mark component as disabled and make it non-interactive */
    disabled: PropTypes.bool,
    /** Set to **true** to enable the selection of a date range (begin and end) */
    enableRangeSelection: PropTypes.bool,
    /** Additional props to be spread to the `<input>` element */
    inputProps: PropTypes.object,
    /** Language code to set the locale */
    locale: PropTypes.string,
    /** Additional props to be spread to the Popover component */
    popoverProps: PropTypes.object,
    /** Set to **true** to mark component as readonly */
    readOnly: PropTypes.bool,
    /** Object with special dates and special date types in shape of `{\'YYYYMMDD\': type}`. Type must be a number between 1-20 */
    specialDays: PropTypes.object,
    /** An object identifying a validation message.  The object will include properties for `state` and `text`;
     * _e.g._, \`{ state: \'warning\', text: \'This is your last warning\' }\` */
    validationState: PropTypes.shape({
        /** State of validation: 'error', 'warning', 'information', 'success' */
        state: PropTypes.oneOf(FORM_MESSAGE_TYPES),
        /** Text of the validation message */
        text: PropTypes.string
    }),
    /** Callback function for onBlur events. In the object returned,`date` is the date object,
     * `formattedDate` is the formatted date, and `isoFormattedDate` is the date formatted in ISO-8601 format (YYYY-MM-DD) */
    onBlur: PropTypes.func,
    /** Callback function for onChange events - every keystroke when user inputs into date text field, after auto formatting date
     * e.g. after 3/3/20 becomes 03/03/2020, after field is cleared due to invalid input, after new date is selected from popover.
     * In the object returned, `date` is the date object, `formattedDate` is the formatted date, and `isoFormattedDate`is the date
     * formatted in ISO-8601 format (YYYY-MM-DD) */
    onChange: PropTypes.func,
    /** Callback function which triggers when datepicker closes after date selection. In the object returned, `date` is the date object,
     * `formattedDate` is the formatted date, and `isoFormattedDate` is the date formatted in ISO-8601 format (YYYY-MM-DD) */
    onDatePickerClose: PropTypes.func,
    /** Callback function for onFocus events. In the object returned, `date` is the date object, `formattedDate` is the formatted date,
     * and `isoFormattedDate` is the date formatted in ISO-8601 format (YYYY-MM-DD). */
    onFocus: PropTypes.func
};

DatePicker.defaultProps = {
    buttonLabel: 'Choose date',
    defaultValue: '',
    dateFormat: null,
    locale: 'en',
    onBlur: () => {},
    onChange: () => {},
    onDatePickerClose: () => {},
    onFocus: () => {}
};

export default DatePicker;
