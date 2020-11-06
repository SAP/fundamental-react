import Button from '../Button/Button';
import Calendar from '../Calendar/Calendar';
import classnamesBind from 'classnames/bind';
import CustomPropTypes from '../utils/CustomPropTypes/CustomPropTypes';
import FormInput from '../Forms/FormInput';
import FormMessage from '../Forms/_FormMessage';
import InputGroup from '../InputGroup/InputGroup';
import moment from 'moment';
import Popover from '../Popover/Popover';
import PropTypes from 'prop-types';
import { validDateLookup } from './_validDateLookup';
import withStyles from '../utils/withStyles';
import { FORM_MESSAGE_TYPES, ISO_DATE_FORMAT } from '../utils/constants';
import { isDateEnabled, resolveFormat } from '../utils/dateUtils';
import React, { Component } from 'react';
import barStyles from 'fundamental-styles/dist/bar.css';
import dialogStyles from 'fundamental-styles/dist/dialog.css';
import inputGroupStyles from 'fundamental-styles/dist/input-group.css';
import listStyles from 'fundamental-styles/dist/list.css';

const classnames = classnamesBind.bind({
    ...listStyles,
    ...inputGroupStyles,
    ...dialogStyles,
    ...barStyles
});

const dateRangeSeparator = ' - ';

/** A **DatePicker** is an opinionated composition of the **Input Group**, **Popover**
 * and **Calendar** components to accomplish the UI pattern for picking a date. */

class DatePicker extends Component {
    constructor(props) {
        super(props);

        this.state = {
            formattedDate: this.props?.defaultValue || '',
            isExpanded: false
        };

        this.calendarRef = React.createRef();
        this.popoverRef = React.createRef();
    }


    toISOFormat = (dateStr) => {
        if (!dateStr || !dateStr?.trim().length) return '';
        const { dateFormat, locale } = this.props;
        return moment(dateStr, resolveFormat({ dateFormat, locale })).format(ISO_DATE_FORMAT);
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
                const { dateFormat, locale } = this.props;
                return momentDateObj.format(resolveFormat({ dateFormat, locale }));
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
     * it returns the configured format as string.
     *
     * @returns {Array} collection of date formats allowed for input.
     */
    getValidFormats = () => {
        const { dateFormat, locale } = this.props;
        const format = resolveFormat({ dateFormat, locale });
        return validDateLookup[format] ? validDateLookup[format] : format;
    }

    getPlaceHolder = () => {
        const { dateFormat, locale } = this.props;
        let placeholderDateFormat = resolveFormat({ dateFormat, locale });
        if (this.props.enableRangeSelection) {
            return placeholderDateFormat + dateRangeSeparator + placeholderDateFormat;
        }
        return placeholderDateFormat;
    }

    modifyDate = (e) => {
        this.setState({ formattedDate: e.target.value });
    }

    componentDidMount() {
        this.validateDates();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.defaultValue !== this.props.defaultValue) {
            this.handleNewDefault();
        }
    }

    handleNewDefault = () => {
        const { defaultValue } = this.props;
        this.setState({
            formattedDate: defaultValue
        }, () => {
            this.validateDates();
        });
    }

    handleOnChange = (e) => {
        e.stopPropagation();
        this.setState({
            formattedDate: e.target.value,
            isoFormattedDate: this.toISOFormat(e.target?.value)
        }, () => {
            this.props.onChange(this.getCallbackData(), 'inputChange');
        });
    }

    sendUpdate = (e) => {
        if (e.key === 'Enter') {
            this.validateDates();
        }
    }

    isDateValid = (date) => {
        return date.isValid() && isDateEnabled(date, this.props);
    }

    getCallbackData = () => {
        return {
            date: this.state.selectedDate,
            formattedDate: this.state.formattedDate,
            isoFormattedDate: this.state.isoFormattedDate,
            startAndEndDates: this.state.startAndEndDates
        };
    }

    executeCallback = (callbackFunction, reason) => {
        callbackFunction
        && typeof callbackFunction === 'function'
        && (reason ? callbackFunction(this.getCallbackData(), reason) : callbackFunction(this.getCallbackData()));
    }

    validateDates = (postValidationCallback) => {
        const { formattedDate } = this.state;

        if (!formattedDate || !formattedDate?.trim().length) {
            this.resetState(postValidationCallback);
        } else if (this.props.enableRangeSelection) {
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
                    formattedDate: newFormattedDateRangeStr,
                    isoFormatDate: arrSelected[0].format(ISO_DATE_FORMAT) + dateRangeSeparator + arrSelected[1].format(ISO_DATE_FORMAT),
                    selectedDate: null,
                    startAndEndDates: arrSelected
                }, () => {
                    if (formattedDate !== newFormattedDateRangeStr) {
                        this.executeCallback(this.props.onChange, 'autoFormatDateRange');
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
                    isoFormattedDate: newDate.format(ISO_DATE_FORMAT),
                    startAndEndDates: []
                }, () => {
                    if (formattedDate !== newFormattedDateStr) {
                        this.executeCallback(this.props.onChange, 'autoFormat');
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
            startAndEndDates: []
        }, () => {
            if (formattedDate !== '') {
                this.executeCallback(this.props.onChange, 'invalidInput');
            }
            this.executeCallback(postValidationCallback);
        });
    }

    handleClickButton = (e) => {
        const { buttonProps } = this.props;
        this.setState({ isExpanded: !this.state.isExpanded });

        const popover = this.popoverRef && this.popoverRef.current;
        popover && popover.triggerBody();
        if (typeof buttonProps?.onClick === 'function') {
            buttonProps.onClick(e);
        }
    };

    handleOutsideClickAndEscape = () => {
        this.setState({
            isExpanded: false
        });
    };

    handleFocus = () => {
        this.props.onInputFocus(this.getCallbackData());
    }

    updateDate = (date, forceStayOpen, reason) => {
        let closeCalendar = false;
        const { formattedDate } = this.state;

        if (this.props.enableRangeSelection) {
            let isoFormatDateRange = date[0].format(ISO_DATE_FORMAT);
            if (!!date[1]) {
                isoFormatDateRange += dateRangeSeparator + date[1].format(ISO_DATE_FORMAT);
                closeCalendar = true;
            }
            const newFormattedDateRangeStr = this.getFormattedDateRangeStr(date);
            this.setState({
                formattedDate: newFormattedDateRangeStr,
                isoFormattedDate: isoFormatDateRange,
                selectedDate: null,
                startAndEndDates: date
            }, () => {
                if (formattedDate !== newFormattedDateRangeStr) {
                    this.props.onChange(this.getCallbackData(), reason);
                }
            });
        } else {
            closeCalendar = true;
            const newFormattedDate = this.getFormattedDateStr(date);
            this.setState({
                formattedDate: newFormattedDate,
                isoFormattedDate: this.toISOFormat(newFormattedDate),
                selectedDate: date,
                startAndEndDates: []
            }, () => {
                if (formattedDate !== newFormattedDate) {
                    this.props.onChange(this.getCallbackData(), reason);
                }
            });
        }

        if (!forceStayOpen && closeCalendar) {
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
     * finally calls props.onInputBlur with callback data
     * i.e. the  validated state
     *
     * @returns {undefined}
     */
    handleBlur = () => {
        this.validateDates(this.props.onInputBlur);
    };

    showTodayHeader = () => {
        const { todayActionType, localizedText: { todayLabel } } = this.props;
        return todayActionType === 'navigate'
                && todayLabel?.trim().length > 0;
    }

    showTodayFooter = () => {
        const { enableRangeSelection, todayActionType, localizedText: { todayLabel } } = this.props;
        return todayActionType === 'select'
                && !enableRangeSelection
                && isDateEnabled(moment(), this.props)
                && todayLabel?.trim().length > 0;
    };

    setTodayDate = () => {
        this.updateDate(moment().locale(this.props.locale), false, 'todaySelected');
    }

    render() {
        const {
            addonProps,
            buttonLabel,
            buttonProps,
            calendarProps,
            compact,
            cssNamespace,
            dateFormat,
            disabled,
            disableAfterDate,
            disableBeforeDate,
            disabledDateRanges,
            disabledDates,
            disableFutureDates,
            disablePastDates,
            disableWeekday,
            disableWeekends,
            enableRangeSelection,
            footerButtonProps,
            footerClasses,
            inputProps,
            inputGroupProps,
            locale,
            localizedText,
            onInputBlur,
            onInputFocus,
            onDatePickerClose,
            openToDate,
            popoverProps,
            readOnly,
            showToday,
            specialDays,
            todayActionType,
            validationOverlayProps,
            validationState,
            weekdayStart,
            modalManager,
            ...props
        } = this.props;

        const inputGroupClass = classnames(
            `${cssNamespace}-input-group--control`,
            {
                [`is-${validationState?.state}`]: validationState?.state
            },
            inputGroupProps?.className
        );

        const datepickerFooterClassName = classnames(
            `${cssNamespace}-dialog__footer`,
            `${cssNamespace}-bar`,
            `${cssNamespace}-bar--footer`,
            {
                [`${cssNamespace}-bar--cozy`]: !compact,
                [`${cssNamespace}-bar--compact`]: compact
            },
            footerClasses
        );

        const footerButtonClassnames = classnames(
            `${cssNamespace}-dialog__decisive-button`,
            footerButtonProps?.className
        );

        const inputGroup = (
            <InputGroup
                {...inputGroupProps}
                aria-expanded={disabled || readOnly ? null : this.state.isExpanded}
                aria-haspopup={disabled || readOnly ? null : 'true'}
                className={inputGroupClass}
                compact={compact}
                disabled={disabled}
                validationOverlayProps={validationOverlayProps}
                validationState={this.state.isExpanded ? null : validationState} >
                <FormInput
                    {...inputProps}
                    onBlur={this.handleBlur}
                    onChange={this.handleOnChange}
                    onFocus={this.handleFocus}
                    onKeyPress={this.sendUpdate}
                    placeholder={this.getPlaceHolder(dateFormat)}
                    readOnly={readOnly}
                    value={this.state.formattedDate} />
                {!readOnly && (
                    <InputGroup.Addon
                        {...addonProps}
                        isButton>
                        <Button {...buttonProps}
                            aria-label={buttonLabel}
                            disabled={disabled}
                            glyph='appointment-2'
                            onClick={this.handleClickButton}
                            option='transparent' />
                    </InputGroup.Addon>
                )}
            </InputGroup>
        );

        const calendarClasses = classnames(
            {
                [`${cssNamespace}-list--has-message`]: validationState?.state
            },
            calendarProps?.className
        );

        return (
            <div
                {...props}>
                <Popover
                    {...popoverProps}
                    body={
                        <>
                            {validationState?.text?.length > 0 &&
                                <FormMessage
                                    {...validationOverlayProps?.formMessageProps}
                                    forPopoverList
                                    type={validationState.state}>
                                    {validationState.text}
                                </FormMessage>
                            }
                            <Calendar
                                {...calendarProps}
                                className={calendarClasses}
                                compact={compact}
                                customDate={
                                    enableRangeSelection
                                        ? this.state.startAndEndDates
                                        : this.state.selectedDate
                                }
                                dateFormat={dateFormat}
                                disableAfterDate={disableAfterDate}
                                disableBeforeDate={disableBeforeDate}
                                disableFutureDates={disableFutureDates}
                                disablePastDates={disablePastDates}
                                disableWeekday={disableWeekday}
                                disableWeekends={disableWeekends}
                                disabledDateRanges={disabledDateRanges}
                                disabledDates={disabledDates}
                                enableRangeSelection={enableRangeSelection}
                                focusOnInit
                                locale={locale}
                                localizedText={{
                                    ...Calendar.defaultProps.localizedText,
                                    ...localizedText
                                }}
                                onChange={ (date, todayNavigated) => {
                                    this.updateDate(date, todayNavigated, todayNavigated ? 'todayNavigated' : 'calendarDateClicked');
                                }}
                                openToDate={openToDate}
                                ref={this.calendarRef}
                                showToday={this.showTodayHeader()}
                                specialDays={specialDays}
                                weekdayStart={weekdayStart} />
                            { this.showTodayFooter() &&
                                <div className={datepickerFooterClassName}>
                                    <div className={classnames(`${cssNamespace}-bar__right`)}>
                                        <div className={classnames(`${cssNamespace}-bar__element`)}>
                                            <Button
                                                {...footerButtonProps}
                                                className={footerButtonClassnames}
                                                compact={compact}
                                                onClick={this.setTodayDate}>
                                                {localizedText.todayLabel}
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            }
                        </>
                    }
                    control={inputGroup}
                    disableKeyPressHandler
                    disableTriggerOnClick
                    disabled={disabled || readOnly}
                    modalManager={modalManager}
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
    ...Calendar.PropTypes,
    /** Additional props to be spread to the input group addon button container i.e. `<InputGroup.Addon {...addonProps} >` */
    addonProps: PropTypes.object,
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
    /**
     * Default value to be shown in the Datepicker
     * for example, `defaultValue='12/04/1993'`
     * or when range selection is enabled `defaultValue='12/04/1993 - 12/30/1992'` (will auto sort chronologically)
     * */
    defaultValue: PropTypes.string,
    /** Set to **true** to mark component as disabled and make it non-interactive */
    disabled: PropTypes.bool,
    /** Set to **true** to enable the selection of a date range (begin and end) */
    enableRangeSelection: PropTypes.bool,
    /** Additional props to to apply to calendar footer button*/
    footerButtonProps: PropTypes.object,
    /** Classnames to apply to calendar footer that will contain the 'Today' action */
    footerClasses: PropTypes.string,
    /** Additional props to be spread to the `InputGroup` component */
    inputGroupProps: PropTypes.object,
    /** Additional props to be spread to the `<input>` element */
    inputProps: PropTypes.object,
    /** Localized text to be updated based on location/language */
    localizedText: CustomPropTypes.i18n({
        /** Localized string informing screen reader users the calendar can be navigated by arrow keys while in day view */
        dayInstructions: PropTypes.string,
        /** Localized string informing screen reader users the calendar can be navigated by arrow keys while in month view */
        monthInstructions: PropTypes.string,
        /** Localized string informing screen reader users the calendar can be navigated by arrow keys while in year view */
        yearInstructions: PropTypes.string,
        /** Localized string informing screen reader users to select a second date when in range selection */
        rangeInstructions: PropTypes.string,
        /** aria-label for next button */
        nextMonth: PropTypes.string,
        /** aria-label for previous button */
        previousMonth: PropTypes.string,
        /** aria-label for next button when years are displayed */
        show12NextYears: PropTypes.string,
        /** aria-label for previous button when years are displayed */
        show12PreviousYears: PropTypes.string,
        /** Label for Today button which is shown if todayActionType is 'select' or 'navigate' */
        todayLabel: PropTypes.string
    }),
    /** If DatePicker is to be rendered in a modal, the parent modal manager can be passed as a prop */
    modalManager: PropTypes.object,
    /** Additional props to be spread to the Popover component */
    popoverProps: PropTypes.object,
    /** Set to **true** to mark component as readonly */
    readOnly: PropTypes.bool,
    /** Object with special dates and special date types in shape of `{'YYYYMMDD': type}`. Type must be a number between 1-20 */
    specialDays: PropTypes.object,
    /**
     * **todayActionType** is a string indicating the type of today button
     *
     * - `'none'` today button won't be shown
     * - `'select'` today button as footer action that selects today's date and closes datepicker
     * - `'navigate'` today button as header action that navigates (i.e. sets focus) to today's date
     *
     * **localizedText.todayLabel** should be a localized string label for the today action button.
     *
     * The button will only be rendered if:
     *
     * - `todayActionType` is `'select'` or `'navigate'`
     * - AND `localizedText.todayLabel` is a valid non-empty string
    */
    todayActionType: PropTypes.oneOf(['none', 'select', 'navigate']),
    /** Additional props to be spread to the ValidationOverlay */
    validationOverlayProps: PropTypes.shape({
        /** Additional classes to apply to validation popover's outermost `<div>` element  */
        className: PropTypes.string,
        /** Additional props to be spread to the ValdiationOverlay's FormMessage component */
        formMessageProps: PropTypes.object,
        /** Additional classes to apply to validation popover's popper child `<div>` wrapping the provided children  */
        innerRefClassName: PropTypes.string,
        /** Additional classes to apply to validation popover's popper `<div>` element  */
        popperClassName: PropTypes.string,
        /** CSS class(es) to add to the ValidationOverlay's reference `<div>` element */
        referenceClassName: PropTypes.string,
        /** Additional props to be spread to the popover's outermost `<div>` element */
        wrapperProps: PropTypes.object
    }),
    /** An object identifying a validation message.  The object will include properties for `state` and `text`;
     * _e.g._, \`{ state: \'warning\', text: \'This is your last warning\' }\` */
    validationState: PropTypes.shape({
        /** State of validation: 'error', 'warning', 'information', 'success' */
        state: PropTypes.oneOf(FORM_MESSAGE_TYPES),
        /** Text of the validation message */
        text: PropTypes.string
    }),
    /** Callback function; triggered when the selected date changes.
     * There can be many reasons for a date change.
     * The reason is available as a String and could be one of `todaySelected`, `todayNavigated`, `calendarDateClicked`,
     * `inputChange`, `autoFormat` or `invalidInput`
     *
     * @param {Object} data - data.date is the selected date object; data.formattedDate is the formatted date string;
     * data.isoFormattedDate is the formatted date string in ISO-8601 format i.e. YYYY-MM-DD; data.startAndEndDates is an
     * array of date objects containing the start and end date if enableRangeSelection is true.
     * @param {string} reason - what caused the selection to change
     * @returns {void}
     */
    onChange: PropTypes.func,
    /** Callback function; triggered when datepicker popover closes after date selection.
     *
     * @param {Object} data - data.date is the selected date object; data.formattedDate is the formatted date string;
     * data.isoFormattedDate is the formatted date string in ISO-8601 format i.e. YYYY-MM-DD; data.startAndEndDates is an
     * array of date objects containing the start and end date if enableRangeSelection is true.
     * @returns {void}
     */
    onDatePickerClose: PropTypes.func,
    /** Callback function; triggered when text input field loses focus.
      * Input value is validated before calling onInputBlur.
      * If input field value can be formatted to a valid date object then this is used as the data, else field is reset.
      *
      * @param {Object} data - data.date is the selected date object; data.formattedDate is the formatted date string;
      * data.isoFormattedDate is the formatted date string in ISO-8601 format i.e. YYYY-MM-DD; data.startAndEndDates is an
      * array of date objects containing the start and end date if enableRangeSelection is true.
      * @returns {void}
     */
    onInputBlur: PropTypes.func,
    /** Callback function; triggered when datepicker input is focused.
     *
     * @param {Object|SyntheticEvent} data - data.date is the selected date object; data.formattedDate is the formatted date string;
     * data.isoFormattedDate is the formatted date string in ISO-8601 format i.e. YYYY-MM-DD; data.startAndEndDates is an
     * array of date objects containing the start and end date if enableRangeSelection is true.
     * @returns {void}
     */
    onInputFocus: PropTypes.func
};

DatePicker.defaultProps = {
    ...Calendar.defaultProps,
    buttonLabel: 'Choose date',
    defaultValue: '',
    todayActionType: 'none',
    onInputBlur: () => {},
    onDatePickerClose: () => {},
    onInputFocus: () => {}
};

export default withStyles(DatePicker);
