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
     * it returns the configured format as string.
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

                this.setState({
                    selectedDate: null,
                    arrSelectedDates: arrSelected,
                    formattedDate: this.getFormattedDateRangeStr(arrSelected)
                }, () => {
                    this.executeCallback(this.props.onChange);
                    this.executeCallback(postValidationCallback);
                });
            } else {
                this.resetState(postValidationCallback);
            }
        } else {
            const newDate = this.getMomentDateObj(formattedDate);
            if (this.isDateValid(newDate)) {
                this.setState({
                    selectedDate: newDate,
                    formattedDate: this.getFormattedDateStr(formattedDate),
                    isoFormattedDate: formattedDate ? moment(formattedDate).format(ISO_DATE_FORMAT) : ''
                }, () => {
                    this.executeCallback(this.props.onChange);
                    this.executeCallback(postValidationCallback);
                });
            } else {
                this.resetState(postValidationCallback);
            }
        }
    }

    resetState = (postValidationCallback) => {
        this.setState({
            formattedDate: '',
            isoFormattedDate: '',
            selectedDate: null,
            arrSelectedDates: []
        }, () => {
            this.executeCallback(this.props.onChange);
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

        if (this.props.enableRangeSelection) {
            let isoFormatDate = date[0].format(ISO_DATE_FORMAT);
            if (!!date[1]) {
                isoFormatDate += dateRangeSeparator + date[1].format(ISO_DATE_FORMAT);
                closeCalendar = true;
            }
            this.setState({
                arrSelectedDates: date,
                formattedDate: this.getFormattedDateRangeStr(date),
                isoFormattedDate: isoFormatDate
            }, () => {
                this.props.onChange(this.getCallbackData());
            });
        } else {
            closeCalendar = true;
            this.setState({
                selectedDate: date,
                formattedDate: this.getFormattedDateStr(date),
                isoFormattedDate: date.format(ISO_DATE_FORMAT)
            }, () => {
                this.props.onChange(this.getCallbackData());
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

    _showTodayButton = (enableRangeSelection, todayLabel) => (
        !enableRangeSelection
        && isEnabledDate(moment(), this.props)
        && todayLabel
        && typeof todayLabel === 'string'
        && todayLabel.trim().length
    );

    _setTodayDate = () => {
        this.updateDate(moment().locale(this.props.locale));
    }

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
            onDatePickerClose,
            onBlur,
            popoverProps,
            readOnly,
            specialDays,
            todayLabel,
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
                                ref={this.calendarRef}
                                specialDays={specialDays} />
                            { this._showTodayButton(enableRangeSelection, todayLabel) &&
                            <Button
                                className='fd-button fd-button--transparent fd-input-group__button fd-datepicker-today-button'
                                onClick={this._setTodayDate}>
                                {todayLabel}
                            </Button>
                            }
                        </>
                    }
                    control={
                        <InputGroup
                            aria-expanded={this.state.isExpanded}
                            aria-haspopup='true'
                            className={inputGroupClass}
                            compact={compact}
                            disableStyles={disableStyles}
                            disabled={disabled}
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
                                    disableStyles={disableStyles}
                                    disabled={disableButton}
                                    glyph='calendar'
                                    onClick={this.handleClickButton}
                                    option='transparent' />
                            </InputGroup.Addon>
                        </InputGroup>
                    }
                    disableKeyPressHandler
                    disableStyles={disableStyles}
                    disableTriggerOnClick
                    disabled={disableButton}
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
    buttonLabel: PropTypes.string,
    buttonProps: PropTypes.object,
    calendarProps: PropTypes.shape({
        monthListProps: PropTypes.object,
        tableBodyProps: PropTypes.object,
        tableHeaderProps: PropTypes.object,
        tableProps: PropTypes.object,
        yearListProps: PropTypes.object
    }),
    compact: PropTypes.bool,
    dateFormat: PropTypes.string,
    defaultValue: PropTypes.string,
    disabled: PropTypes.bool,
    enableRangeSelection: PropTypes.bool,
    inputProps: PropTypes.object,
    locale: PropTypes.string,
    popoverProps: PropTypes.object,
    readOnly: PropTypes.bool,
    specialDays: PropTypes.object,
    todayLabel: PropTypes.string,
    validationState: PropTypes.shape({
        state: PropTypes.oneOf(FORM_MESSAGE_TYPES),
        text: PropTypes.string
    }),
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onDatePickerClose: PropTypes.func,
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

DatePicker.propDescriptions = {
    ...Calendar.propDescriptions,
    buttonLabel: 'aria-label for datepicker button',
    dateFormat: 'Format to use for displaying the inputted or selected date. E.g. "YYYY.M.D", "DD-MM-YYYY", "MM/DD/YYYY" etc. This overrides the date format derived from any set locale.',
    defaultValue: 'Default value to be shown in the Datepicker.',
    enableRangeSelection: 'Set to **true** to enable the selection of a date range (begin and end).',
    locale: 'Language code to set the locale.',
    onBlur: 'Callback function for onBlur events. In the object returned, `date` is the date object, `formattedDate` is the formatted date, and `isoFormattedDate` is the date formatted in ISO-8601 format (YYYY-MM-DD).',
    onChange: 'Callback function for onChange events. In the object returned, `date` is the date object, `formattedDate` is the formatted date, and `isoFormattedDate` is the date formatted in ISO-8601 format (YYYY-MM-DD).',
    onDatePickerClose: 'Callback function which triggers when datepicker closes after date selection. In the object returned, `date` is the date object, `formattedDate` is the formatted date, and `isoFormattedDate` is the date formatted in ISO-8601 format (YYYY-MM-DD).',
    onFocus: 'Callback function for onFocus events. In the object returned, `date` is the date object, `formattedDate` is the formatted date, and `isoFormattedDate` is the date formatted in ISO-8601 format (YYYY-MM-DD).',
    specialDays: 'Object with special dates and special date types in shape of `{\'YYYYMMDD\': type}`. Type must be a number between 1-20.',
    todayLabel: 'Localized string label for button that selects today\'s date. The button won\'t be rendered if `todayLabel` is not a valid non-empty string OR if `enableRangeSelection` is true. e.g. ```{todayLabel: \'Today\'}```'
};

export default DatePicker;
