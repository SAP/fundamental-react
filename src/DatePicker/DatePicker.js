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
import React, { Component } from 'react';

class DatePicker extends Component {
    constructor(props) {
        super(props);
        const ISO_DATE_FORMAT = 'YYYY-MM-DD';
        const formattedDate = props.defaultValue.length > 0 ?
            moment(props.defaultValue, ISO_DATE_FORMAT).format(this.getLocaleDateFormat()) : '';
        this.state = {
            isExpanded: false,
            selectedDate: formattedDate.length === 0 ? null : moment(formattedDate, this.getLocaleDateFormat()),
            arrSelectedDates: [],
            formattedDate
        };

        this.calendarRef = React.createRef();
        this.popoverRef = React.createRef();
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
        const longDateFormat = this.getLocaleDateFormat();

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
        const longDateFormat = this.getLocaleDateFormat();
        let closeCalendar = false;

        if (this.props.enableRangeSelection) {
            let formatDate = date[0].format(longDateFormat);
            if (!!date[1]) {
                formatDate += '-' + date[1].format(longDateFormat);
                closeCalendar = true;
            }
            this.setState({
                arrSelectedDates: date,
                formattedDate: formatDate
            });
        } else {
            closeCalendar = true;
            this.setState({
                selectedDate: date,
                formattedDate: date.format(longDateFormat)
            });
        }

        if (closeCalendar) {
            const popover = this.popoverRef && this.popoverRef.current;
            popover && popover.handleEscapeKey();
            this.setState({ isExpanded: false });
        }
    }

    getLocaleDateFormat = () => moment.localeData(this.props.locale).longDateFormat('L');

    _handleBlur = () => {
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
                                placeholder={this.getLocaleDateFormat()}
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
}

DatePicker.displayName = 'DatePicker';

DatePicker.propTypes = {
    ...Calendar.basePropTypes,
    buttonLabel: PropTypes.string,
    buttonProps: PropTypes.object,
    compact: PropTypes.bool,
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
    locale: 'en',
    onBlur: () => {}
};

DatePicker.propDescriptions = {
    ...Calendar.propDescriptions,
    buttonLabel: 'aria-label for datepicker button',
    defaultValue: 'Default value to be shown in the Datepicker. The only accepted format is the ISO format, i.e. YYYY-MM-DD',
    enableRangeSelection: 'Set to **true** to enable the selection of a date range (begin and end).',
    locale: 'Language code to set the locale.',
    onBlur: 'Callback function for onBlur events. In the object returned, `date` is the date object and `formattedDate` is the formatted date.'
};

export default DatePicker;
