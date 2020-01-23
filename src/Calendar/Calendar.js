import Button from '../Button/Button';
import classnames from 'classnames';
import CustomPropTypes from '../utils/CustomPropTypes/CustomPropTypes';
import GridManager from '../utils/gridManager/gridManager';
import keycode from 'keycode';
import moment from 'moment';
import PropTypes from 'prop-types';
import withStyles from '../utils/WithStyles/WithStyles';
import React, { Component } from 'react';

class Calendar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            todayDate: moment().startOf('day'),
            currentDateDisplayed: moment(),
            arrSelectedDates: [],
            selectedDate: moment({ year: 0 }),
            showMonths: false,
            showYears: false,
            dateClick: false
        };

        this.tableRef = React.createRef();
    }

    // sync the selected date of the calendar with the date picker
    static getDerivedStateFromProps(updatedPropsParent, previousStates) {
        const { customDate, enableRangeSelection } = updatedPropsParent;

        if (typeof customDate === 'undefined') {
            return null;
        }

        if (!previousStates.dateClick) {
            if (typeof enableRangeSelection !== 'undefined') {
                if (customDate !== previousStates.arrSelectedDates) {
                    if (!customDate || !customDate.length) {
                        // reset calendar state when date picker input is empty and did not click on a date
                        return ({ currentDateDisplayed: moment(), arrSelectedDates: [], selectedDate: moment({ year: 0 }) });
                    }
                    // update calendar state with date picker input
                    return ({ currentDateDisplayed: customDate[0], arrSelectedDates: customDate, selectedDate: moment({ year: 0 }) });
                }
            } else if (customDate !== previousStates.currentDateDisplayed) {
                if (!customDate) {
                    // reset calendar state when date picker input is empty and did not click on a date
                    return ({ currentDateDisplayed: moment(), selectedDate: moment({ year: 0 }) });
                }
                // update calendar state with date picker input
                return ({ currentDateDisplayed: customDate, selectedDate: customDate });
            }
        }
        return ({ dateClick: false });
    }

    componentDidMount = () => {
        const tableRef = this.tableRef.current;
        const selectedDateElement = tableRef.querySelector('.is-selected');
        const todayDateElement = tableRef.querySelector('.fd-calendar__item--current');
        const disabledDateElements = tableRef.querySelectorAll('.is-disabled, .is-blocked, .fd-calendar__item--other-month');

        this.gridManager = new GridManager({
            gridNode: this.tableRef.current,
            firstFocusedElement: selectedDateElement ? selectedDateElement : todayDateElement,
            focusOnInit: true,
            wrapRows: true,
            wrapCols: false,
            disabledCells: disabledDateElements
        });
    }

    componentDidUpdate = (prevProps, prevState) => {
        const tableRef = this.tableRef.current;
        const selectedDateElement = tableRef.querySelector('.is-selected');
        const todayDateElement = tableRef.querySelector('.fd-calendar__item--current');
        const disabledDateElements = tableRef.querySelectorAll('.is-disabled, .is-blocked, .fd-calendar__item--other-month');

        // if switching between month, year, or day view, reconstruct grid
        if (this.state.showMonths !== prevState.showMonths ||
            this.state.showYears !== prevState.showYears ||
            this.state.currentDateDisplayed.month() !== prevState.currentDateDisplayed.month() ||
            this.state.currentDateDisplayed.year() !== prevState.currentDateDisplayed.year()) {
            this.gridManager.attachTo({
                gridNode: this.tableRef.current,
                firstFocusedElement: selectedDateElement ? selectedDateElement : todayDateElement,
                focusOnInit: true,
                wrapRows: true,
                wrapCols: false,
                disabledCells: disabledDateElements
            });
        }
    }

    showMonths = () => {
        this.setState({
            showMonths: !this.state.showMonths,
            showYears: false,
            dateClick: true
        });
    }

    isEnabledDate = (day) => {
        const {
            disableWeekends,
            disableAfterDate,
            disableBeforeDate,
            blockedDates,
            disableWeekday,
            disablePastDates,
            disableFutureDates,
            disabledDates
        } = this.props;
        return (
            !this.disableWeekday(day, disableWeekday) &&
            !(disableWeekends && (day.day() === 0 || day.day() === 6)) &&
            !(disableBeforeDate && day.isBefore(moment(disableBeforeDate))) &&
            !(disableAfterDate && day.isAfter(moment(disableAfterDate))) &&
            !(disablePastDates && day.isBefore(moment(), 'day')) &&
            !(disableFutureDates && day.isAfter(moment(), 'day')) &&
            !this.isDateBetween(day, blockedDates && blockedDates.map(date => moment(date))) &&
            !this.isDateBetween(day, disabledDates && disabledDates.map(date => moment(date)))
        );
    }

    isSelected = (day) => {
        const { arrSelectedDates, selectedDate } = this.state;
        return (
            (
                day.isSame(selectedDate, 'day') ||
                (this.props.enableRangeSelection && (
                    (typeof arrSelectedDates[0] !== 'undefined' ? arrSelectedDates[0].isSame(day, 'day') : false) ||
                    (typeof arrSelectedDates[1] !== 'undefined' ? arrSelectedDates[1].isSame(day, 'day') : false)
                ))
            ) && this.isEnabledDate(day)
        );
    }

    isInSelectedRange = (day) => {
        return this.props.enableRangeSelection && this.isDateBetween(day, this.state.arrSelectedDates, this.props.enableRangeSelection);
    }

    isSelectedRangeFirst = (day) => {
        return this.props.enableRangeSelection && (typeof this.state.arrSelectedDates[0] !== 'undefined') && this.state.arrSelectedDates[0].isSame(day);
    }

    isSelectedRangeLast = (day) => {
        return this.props.enableRangeSelection && (typeof this.state.arrSelectedDates[1] !== 'undefined' && this.state.arrSelectedDates[1].isSame(day));
    }

    showYears = () => {
        this.setState({
            showMonths: false,
            showYears: !this.state.showYears,
            dateClick: true
        });
    }

    changeMonth = (month) => {
        const newDate = moment(this.state.currentDateDisplayed)
            .locale(this.props.locale)
            .month(month)
            .date(1);

        if (!this.props.enableRangeSelection) {
            this.setState({
                currentDateDisplayed: newDate,
                selectedDate: newDate,
                showMonths: false,
                dateClick: true
            }, function() {
                this.props.onChange(newDate);
            });
        } else {
            this.setState({
                currentDateDisplayed: newDate,
                showMonths: false,
                dateClick: true
            });
        }
    }

    changeYear = (year) => {
        const newDate = moment(this.state.currentDateDisplayed).year(year);

        if (!this.props.enableRangeSelection) {
            this.setState({
                currentDateDisplayed: newDate,
                selectedDate: newDate,
                showYears: false,
                dateClick: true
            }, function() {
                this.props.onChange(newDate);
            });
        } else {
            this.setState({
                currentDateDisplayed: newDate,
                showYears: false,
                dateClick: true
            });
        }
    }

    onKeyDown = (event, onKeyFunction) => {
        switch (keycode(event)) {
            case 'enter':
            case 'space':
                event.preventDefault();
                onKeyFunction();
                break;
            default:
        }
    }

    generateMonths = (monthProps) => {
        const months = moment.localeData(this.props.locale).months();

        const gridArray = [];

        let i = 0;

        while (i < months.length) {
            gridArray.push(months.slice(i, i += 4));
        }

        const listOfMonths = gridArray.map((setOfMonths, index) => {
            const monthCells = setOfMonths.map((month, subIndex) => {
                const shortenedNameMonth = moment.localeData(this.props.locale).monthsShort()[subIndex + (4 * index)];
                const isSelected = months[this.state.currentDateDisplayed.month()] === month;
                const calendarItemClasses = classnames(
                    'fd-calendar__item',
                    {
                        'is-selected': isSelected,
                        'fd-calendar__item--current': months[this.state.todayDate.month()] === month
                    }
                );

                return (
                    <td aria-selected={isSelected} className={calendarItemClasses}
                        key={month} name={month}
                        onClick={() => this.changeMonth(month)}>
                        <span className='fd-calendar__text'
                            onKeyDown={(e) => this.onKeyDown(e, this.changeMonth.bind(this, month))} role='button'>
                            {shortenedNameMonth}
                        </span>
                    </td>
                );
            });

            return (
                <tr className='fd-calendar__row' key={`month-row-${index}`}>
                    {monthCells}
                </tr>
            );
        });

        return (
            <div className='fd-calendar__months'>
                <table {...monthProps} className='fd-calendar__table'
                    ref={this.tableRef}
                    role='grid'>
                    <tbody className='fd-calendar__group'>
                        {listOfMonths}
                    </tbody>
                </table>
            </div>
        );
    }

    generateYears = (yearListProps) => {
        let year = this.state.currentDateDisplayed.year();
        const years = [];
        for (let row = 0; row < 3; row++) {
            years.push([]);
            for (let column = 0; column < 4; column++) {
                years[row][column] = year;
                year += 1;
            }
        }
        const listOfYears = years.map((rowOfYears, index) => {
            const yearCells = rowOfYears.map(element => {
                const isSelected = this.state.currentDateDisplayed.year() === element;
                const yearClasses = classnames(
                    'fd-calendar__item',
                    {
                        'is-selected': isSelected,
                        'fd-calendar__item--current': this.state.todayDate.year() === element
                    }
                );

                return (
                    <td aria-selected={isSelected}
                        className={yearClasses} key={element}
                        name={element}
                        onClick={() => this.changeYear(element)}>
                        <span className='fd-calendar__text'
                            onKeyDown={(e) => this.onKeyDown(e, this.changeYear.bind(this, element))} role='button'>
                            {element}
                        </span>
                    </td>
                );
            });

            return (
                <tr className='fd-calendar__row' key={`year-row-${index}`}>
                    {yearCells}
                </tr>
            );
        });
        return (
            <div className='fd-calendar__years'>
                <table {...yearListProps} className='fd-calendar__table'
                    ref={this.tableRef}
                    role='grid'>
                    <tbody className='fd-calendar__group'>
                        {listOfYears}
                    </tbody>
                </table>
            </div>
        );
    }

    handleNext = () => {
        const { currentDateDisplayed } = this.state;
        if (this.state.showYears) {
            const newDate = moment(currentDateDisplayed).add(12, 'year');
            this.setState({ currentDateDisplayed: newDate, dateClick: true });
        } else {
            const newDate = moment(currentDateDisplayed).add(1, 'month');
            this.setState({ currentDateDisplayed: newDate, dateClick: true });
        }
    }

    handlePrevious = () => {
        const { currentDateDisplayed } = this.state;
        if (this.state.showYears) {
            const newDate = moment(currentDateDisplayed).subtract(12, 'year');
            this.setState({ currentDateDisplayed: newDate, dateClick: true });
        } else {
            const newDate = moment(currentDateDisplayed).subtract(1, 'month');
            this.setState({ currentDateDisplayed: newDate, dateClick: true });
        }
    }

    dateClick = (day, isRangeEnabled) => {
        let selectedDates = [];
        if (typeof isRangeEnabled !== 'undefined' && isRangeEnabled) {
            selectedDates = this.state.arrSelectedDates;
            if (selectedDates.length === 2) {
                selectedDates = [day];
            } else if (typeof selectedDates[0] !== 'undefined' && day.isSameOrBefore(selectedDates[0])) {
                selectedDates = [day, selectedDates[0]];
            } else {
                selectedDates.push(day);
            }
        }

        this.setState({
            currentDateDisplayed: day,
            selectedDate: day,
            arrSelectedDates: selectedDates,
            dateClick: true
        }, function() {
            if (isRangeEnabled) {
                this.props.onChange(selectedDates);
            } else {
                this.props.onChange(day);
            }
        });
    };

    isDateBetween = (date, blockedDates, isRangeEnabled) => {
        if (typeof blockedDates === 'undefined' || typeof blockedDates[0] === 'undefined' || typeof blockedDates[1] === 'undefined') {
            return false;
        }
        if (typeof isRangeEnabled !== 'undefined' || isRangeEnabled) {
            if (blockedDates[0].isAfter(blockedDates[1])) {
                return blockedDates[1].isBefore(date) && blockedDates[0].isAfter(date);
            }
        }
        return blockedDates[0].isBefore(date, 'day') && blockedDates[1].isAfter(date, 'day');
    }

    disableWeekday = (date, weekDays) => {
        if (!weekDays) {
            return false;
        }

        const daysName = moment.weekdays();

        return weekDays.indexOf(daysName[date.day()]) > -1;
    }

    generateNavigation = () => {
        const months = moment.localeData(this.props.locale).months();
        const previousButtonLabel = this.state.showYears ?
            this.props.localizedText.show12PreviousYears : this.props.localizedText.previousMonth;
        const nextButtonLabel = this.state.showYears ?
            this.props.localizedText.show12NextYears : this.props.localizedText.nextMonth;

        return (
            <header aria-live='polite' className='fd-calendar__header'>
                <div className='fd-calendar__navigation'>
                    <div className='fd-calendar__action'>
                        <Button
                            aria-label={previousButtonLabel}
                            compact
                            disableStyles={this.props.disableStyles}
                            glyph='slim-arrow-left'
                            onClick={this.handlePrevious}
                            option='light' />
                    </div>
                    <div className='fd-calendar__action'>
                        <Button
                            compact
                            disableStyles={this.props.disableStyles}
                            onClick={this.showMonths}
                            option='light'>
                            <span>
                                {months[this.state.currentDateDisplayed.month()]}
                            </span>
                        </Button>
                    </div>
                    <div className='fd-calendar__action'>
                        <Button
                            compact
                            disableStyles={this.props.disableStyles}
                            onClick={this.showYears}
                            option='light'>
                            <span>
                                {this.state.currentDateDisplayed.year()}
                            </span>
                        </Button>
                    </div>

                    <div className='fd-calendar__action'>
                        <Button
                            aria-label={nextButtonLabel}
                            compact
                            disableStyles={this.props.disableStyles}
                            glyph='slim-arrow-right'
                            onClick={this.handleNext}
                            option='light' />
                    </div>
                </div>
            </header>
        );
    }

    generateWeekdays = () => {
        const weekDays = [];
        const daysName = moment.localeData(this.props.locale).weekdaysMin().map(day => day.charAt(0));

        for (let index = 0; index < 7; index++) {
            weekDays.push(
                <th className='fd-calendar__column-header' key={index}>
                    <span className='fd-calendar__day-of-week'>
                        {daysName[index]}
                    </span>
                </th>);
        }
        return <tr className='fd-calendar__row'>{weekDays}</tr>;

    }

    generateDays = (tableBodyProps) => {
        const {
            currentDateDisplayed,
            todayDate
        } = this.state;

        const blockedDates = this.props.blockedDates && this.props.blockedDates.map(date => moment(date));
        const enableRangeSelection = this.props.enableRangeSelection;

        const firstDayMonth = moment(currentDateDisplayed).startOf('month');
        const endDayMonth = moment(firstDayMonth).endOf('month');
        const firstDayWeekMonth = moment(firstDayMonth).startOf('week');
        const lastDateEndMonth = moment(endDayMonth).endOf('week');
        const rows = [];

        let days = [];
        let day = firstDayWeekMonth;
        let dateFormatted = '';

        while (day.isSameOrBefore(lastDateEndMonth)) {
            for (let iterations = 0; iterations < 7; iterations++) {
                dateFormatted = day.date();
                const copyDate = moment(day);

                const dayClasses = classnames(
                    'fd-calendar__item',
                    {
                        'fd-calendar__item--other-month': !day.isSame(currentDateDisplayed, 'month'),
                        'fd-calendar__item--current': todayDate.isSame(copyDate),
                        'is-selected': this.isSelected(day),
                        'is-selected-range-first': this.isSelectedRangeFirst(day),
                        'is-selected-range-last': this.isSelectedRangeLast(day),
                        'is-selected-range': this.isInSelectedRange(day),
                        'is-disabled': !this.isEnabledDate(day),
                        'is-blocked': this.isDateBetween(day, blockedDates)
                    }
                );

                days.push(
                    <td
                        aria-selected={this.isSelected(day)}
                        className={dayClasses}
                        key={copyDate}
                        onClick={this.isEnabledDate(day) ? () => this.dateClick(copyDate, enableRangeSelection) : null}
                        role='gridcell'>
                        <span className='fd-calendar__text'
                            onKeyDown={this.isEnabledDate(day) ? (e) => this.onKeyDown(e, this.dateClick.bind(this, copyDate, enableRangeSelection)) : null}
                            role='button'>{dateFormatted.toString()}</span>
                    </td >
                );

                day = moment(day).add(1, 'days');
            }

            rows.push(
                <tr className='fd-calendar__row' key={day} >
                    {days}
                </tr>
            );

            days = [];
        }
        return <tbody {...tableBodyProps} className='fd-calendar__group'>{rows}</tbody>;

    }

    _renderContent = (monthListProps, yearListProps, tableProps, tableHeaderProps, tableBodyProps) => {
        if (this.state.showMonths) {
            return this.generateMonths(monthListProps);
        }

        if (this.state.showYears) {
            return this.generateYears(yearListProps);
        }

        return (
            <div className='fd-calendar__dates'>
                <table {...tableProps} className='fd-calendar__table'
                    ref={this.tableRef}>
                    <thead {...tableHeaderProps} className='fd-calendar__group'>
                        {this.generateWeekdays()}
                    </thead>
                    {this.generateDays(tableBodyProps)}
                </table>
            </div>
        );
    }

    render() {
        const {
            enableRangeSelection,
            disableStyles,
            disableWeekends,
            disableBeforeDate,
            disableAfterDate,
            disableWeekday,
            disablePastDates,
            disableFutureDates,
            blockedDates,
            disabledDates,
            customDate,
            className,
            localizedText,
            monthListProps,
            yearListProps,
            tableProps,
            tableHeaderProps,
            tableBodyProps,
            ...props
        } = this.props;

        const calendarClasses = classnames(
            'fd-calendar',
            className
        );

        return (
            <div {...props} className={calendarClasses}>
                {this.generateNavigation()}
                <div className='fd-calendar__content'>
                    {this._renderContent(monthListProps, yearListProps, tableProps, tableHeaderProps, tableBodyProps)}
                </div>
            </div>
        );
    }

}

Calendar.displayName = 'Calendar';

Calendar.basePropTypes = {
    blockedDates: PropTypes.arrayOf(PropTypes.instanceOf(Date)),
    customStyles: PropTypes.object,
    disableStyles: PropTypes.bool,
    disableAfterDate: PropTypes.instanceOf(Date),
    disableBeforeDate: PropTypes.instanceOf(Date),
    disabledDates: PropTypes.arrayOf(PropTypes.instanceOf(Date)),
    disableFutureDates: PropTypes.bool,
    disablePastDates: PropTypes.bool,
    disableWeekday: PropTypes.arrayOf(PropTypes.string),
    disableWeekends: PropTypes.bool,
    localizedText: CustomPropTypes.i18n({
        nextMonth: PropTypes.string,
        previousMonth: PropTypes.string,
        show12NextYears: PropTypes.string,
        show12PreviousYears: PropTypes.string
    })
};

Calendar.propTypes = {
    ...Calendar.basePropTypes,
    monthListProps: PropTypes.object,
    tableBodyProps: PropTypes.object,
    tableHeaderProps: PropTypes.object,
    tableProps: PropTypes.object,
    yearListProps: PropTypes.object,
    onChange: PropTypes.func
};

Calendar.defaultProps = {
    locale: 'en',
    localizedText: {
        nextMonth: 'Next month',
        previousMonth: 'Previous month',
        show12NextYears: 'Show 12 next years',
        show12PreviousYears: 'Show 12 previous years'
    },
    onChange: () => { }
};

Calendar.propDescriptions = {
    blockedDates: 'Blocks dates that are in between the blocked dates.',
    disableAfterDate: 'Disables dates of a calendar that come after the specified date.',
    disableBeforeDate: 'Disables dates of a calendar that come before the specified date.',
    disabledDates: 'Disables dates that are in between the disabled dates.',
    disableFutureDates: 'Set to **true** to disable dates after today\'s date.',
    disablePastDates: 'Set to **true** to disable dates before today\'s date.',
    disableWeekday: 'Disables dates that match a weekday.',
    disableWeekends: 'Set to **true** to disables dates that match a weekend.',
    localizedTextShape: {
        nextMonth: 'aria-label for next button',
        previousMonth: 'aria-label for previous button',
        show12NextYears: 'aria-label for next button when years are displayed',
        show12PreviousYears: 'aria-label for previous button when years are displayed'
    },
    monthListProps: 'Additional props to be spread to the month\'s `<table>` element.',
    tableBodyProps: 'Additional props to be spread to the `<tbody>` element.',
    tableHeaderProps: 'Additional props to be spread to the `<thead>` element.',
    tableProps: 'Additional props to be spread to the `<table>` element.',
    yearListProps: 'Additional props to be spread to the year\'s `<table>` element.'
};

export { Calendar as __Calendar };

export default withStyles(Calendar, { cssFile: 'calendar', font: true });
