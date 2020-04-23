import Button from '../Button/Button';
import classnames from 'classnames';
import CustomPropTypes from '../utils/CustomPropTypes/CustomPropTypes';
import GridManager from '../utils/gridManager/gridManager';
import keycode from 'keycode';
import moment from 'moment';
import PropTypes from 'prop-types';
import { isDateBetween, isEnabledDate } from '../utils/dateUtils';
import React, { Component } from 'react';

class Calendar extends Component {

    constructor(props) {
        super(props);

        let currentDateDisplayed = moment().startOf('day');
        let selectedDateOrDates = !props.enableRangeSelection ? moment({ year: 0 }) : [];

        const customDateEmpty = (!props.customDate || (props.customDate && props.customDate.length === 0));

        if (!customDateEmpty) {
            selectedDateOrDates = props.customDate;
            currentDateDisplayed = props.customDate;

            if (props.customDate.length) {
                currentDateDisplayed = props.customDate[0];
            }
        }

        this.state = {
            todayDate: moment().startOf('day'),
            gridBoundaryContext: null,
            refocusGrid: props.focusOnInit,
            currentDateDisplayed: currentDateDisplayed,
            arrSelectedDates: props.enableRangeSelection ? selectedDateOrDates : [],
            selectedDate: !props.enableRangeSelection ? selectedDateOrDates : null,
            showMonths: false,
            showYears: false,
            currentFocusDay: moment().startOf('day'),
            currentFocusYear: currentDateDisplayed.year(),
            currentFocusMonth: currentDateDisplayed.month()
        };

        this.tableRef = React.createRef();
    }

    componentDidMount = () => {
        if (!this.props.disableStyles) {
            require('fundamental-styles/dist/calendar.css');
        }
        this.gridManager = new GridManager(this.getGridOptions());
    }

    componentDidUpdate = (prevProps, prevState) => {
        // if switching picker view or switching to a new month or year, reconstruct grid
        const newView = this.state.showMonths !== prevState.showMonths || this.state.showYears !== prevState.showYears;
        if (
            newView ||
            this.state.currentDateDisplayed.month() !== prevState.currentDateDisplayed.month() ||
            this.state.currentDateDisplayed.year() !== prevState.currentDateDisplayed.year()
        ) {
            this.gridManager.attachTo(this.getGridOptions(newView));
        }
    }

    getGridOptions = (newView) => {
        const { gridBoundaryContext, refocusGrid } = this.state;
        const tableElement = this.tableRef.current;
        const focusedDateElement = tableElement.querySelector('[data-is-focused=true]');
        const selectedDateElement = tableElement.querySelector('.is-selected');
        const todayDateElement = tableElement.querySelector('.fd-calendar__item--current');
        const disabledDateElements = tableElement.querySelectorAll('.fd-calendar__item--other-month');
        const focusOnInit = newView || gridBoundaryContext || refocusGrid;

        let firstFocusedElement;
        if (focusedDateElement) {
            firstFocusedElement = focusedDateElement;
        } else if (selectedDateElement) {
            firstFocusedElement = selectedDateElement;
        } else {
            firstFocusedElement = todayDateElement;
        }

        let firstFocusedCoordinates = { row: 0, col: 0 };
        if (gridBoundaryContext) {
            const { currentCell, directionX, directionY } = gridBoundaryContext;
            let firstFocusedRow = currentCell && currentCell.row;
            let firstFocusedCol = currentCell && currentCell.col;

            // start from the bottom/top of the grid and keep searching for an available date in the direction used to pass the grid boundary
            if (directionX === -1) {
                firstFocusedRow = 5; // max 5 different weeks in view
                firstFocusedCol = 7;
            } else if (directionX === 1) {
                firstFocusedRow = 0;
                firstFocusedCol = 0;
            } else if (directionY === -1) {
                firstFocusedRow = 5;
            } else if (directionY === 1) {
                firstFocusedRow = 0;
            }

            firstFocusedCoordinates = { row: firstFocusedRow, col: firstFocusedCol };
        }

        this.setState({ gridBoundaryContext: null, refocusGrid: false });

        return {
            gridNode: this.tableRef.current,
            firstFocusedElement: gridBoundaryContext ? null : firstFocusedElement,
            firstFocusedCoordinates: firstFocusedCoordinates,
            firstCellSearchDirection: gridBoundaryContext ? gridBoundaryContext : { directionX: 1, directionY: 0 },
            enableHeaderCells: false,
            focusOnInit: focusOnInit,
            wrapRows: true,
            wrapCols: false,
            disabledCells: disabledDateElements,
            onPassBoundary: this.onPassGridBoundary
        };
    }

    showMonths = () => {
        this.setState({
            showMonths: !this.state.showMonths,
            showYears: false
        });
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
            ) && isEnabledDate(day, this.props)
        );
    }

    isInSelectedRange = (day) => {
        return this.props.enableRangeSelection && isDateBetween(day, this.state.arrSelectedDates, this.props.enableRangeSelection);
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
            showYears: !this.state.showYears
        });
    }

    changeMonth = (month) => {
        const newDate = moment(this.state.currentDateDisplayed)
            .locale(this.props.locale)
            .month(month);

        this.setState({
            currentDateDisplayed: newDate,
            showMonths: false
        });
    }

    changeYear = (year) => {
        const newDate = moment(this.state.currentDateDisplayed).year(year);

        this.setState({
            currentDateDisplayed: newDate,
            showYears: false
        });
    }

    onPassGridBoundary = ({ currentCell, directionX, directionY }) => {
        if (!this.state.showMonths && !this.state.showYears) {
            currentCell.element.setAttribute('tabindex', -1);
            this.setState({ gridBoundaryContext: { currentCell, directionX, directionY } });

            if (directionX === -1 || directionY === -1) {
                this.handlePrevious();
            } else if (directionX === 1 || directionY === 1) {
                this.handleNext();
            }
        }
    }

    onKeyDownCalendar = (event) => {
        let newDate;

        const focusedDateElement = this.tableRef.current && this.tableRef.current.querySelector('.fd-calendar__text:focus');
        const focusedDate = parseInt(focusedDateElement && focusedDateElement.textContent, 10);

        switch (keycode(event)) {
            case 'page up':
                event.preventDefault();
                newDate = moment(this.state.currentDateDisplayed).subtract(1, event.shiftKey ? 'year' : 'month');
                newDate.date(newDate.daysInMonth() < focusedDate ? newDate.daysInMonth() : focusedDate);
                this.setState({
                    currentDateDisplayed: newDate,
                    refocusGrid: true
                });
                break;
            case 'page down':
                event.preventDefault();
                newDate = moment(this.state.currentDateDisplayed).add(1, event.shiftKey ? 'year' : 'month');
                newDate.date(newDate.daysInMonth() < focusedDate ? newDate.daysInMonth() : focusedDate);
                this.setState({
                    currentDateDisplayed: newDate,
                    refocusGrid: true
                });
                break;
            default:
        }
    }

    onKeyDownDay = (event, onKeyFunction) => {
        switch (keycode(event)) {
            case 'enter':
            case 'space':
                event.preventDefault();
                event.stopPropagation();
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
                const isFocused = this.state.currentFocusMonth === month;
                const calendarItemClasses = classnames(
                    'fd-calendar__item',
                    {
                        'is-focus': isFocused,
                        'is-selected': isSelected,
                        'fd-calendar__item--current': months[this.state.todayDate.month()] === month
                    }
                );

                return (
                    <td aria-selected={isSelected} className={calendarItemClasses}
                        key={month} name={month}
                        onClick={() => this.changeMonth(month)}
                        onFocus={this.handleMonthFocus(month)}>
                        <span className='fd-calendar__text'
                            onKeyDown={(e) => this.onKeyDownDay(e, this.changeMonth.bind(this, month))} role='button'>
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
                <table
                    {...monthProps}
                    className='fd-calendar__table'
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
                const isFocused = this.state.currentFocusYear === element;
                const yearClasses = classnames(
                    'fd-calendar__item',
                    {
                        'is-focus': isFocused,
                        'is-selected': isSelected,
                        'fd-calendar__item--current': this.state.todayDate.year() === element
                    }
                );

                return (
                    <td aria-selected={isSelected}
                        className={yearClasses} key={element}
                        name={element}
                        onClick={() => this.changeYear(element)}
                        onFocus={this.handleYearFocus(element)}>
                        <span className='fd-calendar__text'
                            onKeyDown={(e) => this.onKeyDownDay(e, this.changeYear.bind(this, element))} role='button'>
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
                <table
                    {...yearListProps}
                    className='fd-calendar__table'
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
            this.setState({ currentDateDisplayed: newDate });
        } else {
            const newDate = moment(currentDateDisplayed).add(1, 'month');
            this.setState({ currentDateDisplayed: newDate });
        }
    }

    handlePrevious = () => {
        const { currentDateDisplayed } = this.state;
        if (this.state.showYears) {
            const newDate = moment(currentDateDisplayed).subtract(12, 'year');
            this.setState({ currentDateDisplayed: newDate });
        } else {
            const newDate = moment(currentDateDisplayed).subtract(1, 'month');
            this.setState({ currentDateDisplayed: newDate });
        }
    }

    handleDayFocus = date => () => {
        this.setState({ currentFocusDay: date });
    }

    handleMonthFocus = month => () => {
        this.setState({ currentFocusMonth: month });
    }

    handleYearFocus = year => () => {
        this.setState({ currentFocusYear: year });
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
            arrSelectedDates: selectedDates
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

    isWeekend = (date) => {
        return [0, 6].includes(date.day());
    }

    isFocusedDay = (date) => {
        return this.state.currentFocusDay.isSame(date);
    }

    isFocusedMonth = (date) => {
        return this.state.currentFocusDay.isSame(date);
    }

    isFocusedYear = (date) => {
        return this.state.currentFocusDay.isSame(date);
    }

    specialDayType = (date) => {
        return this.props.specialDays[date.format('YYYYMMDD')] ? this.props.specialDays[date.format('YYYYMMDD')] : null;
    }

    generateNavigation = () => {
        const months = moment.localeData(this.props.locale).months();
        const previousButtonLabel = this.state.showYears ?
            this.props.localizedText.show12PreviousYears : this.props.localizedText.previousMonth;
        const nextButtonLabel = this.state.showYears ?
            this.props.localizedText.show12NextYears : this.props.localizedText.nextMonth;

        return (
            <header className='fd-calendar__header'>
                <div aria-live='assertive' className='fd-calendar__navigation'>
                    <div className='fd-calendar__action'>
                        <Button
                            aria-label={previousButtonLabel}
                            compact
                            disableStyles={this.props.disableStyles}
                            glyph='slim-arrow-left'
                            onClick={this.handlePrevious}
                            option='transparent' />
                    </div>
                    <div className='fd-calendar__action'>
                        <Button
                            compact
                            disableStyles={this.props.disableStyles}
                            onClick={this.showMonths}
                            option='transparent'>
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
                            option='transparent'>
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
                            option='transparent' />
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
                <th className='fd-calendar__item fd-calendar__item--side-helper' key={index}>
                    <span className='fd-calendar__text'>
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
        const firstDayWeekMonth = moment(firstDayMonth).startOf('week');
        const rows = [];

        let days = [];
        let day = firstDayWeekMonth;
        let dateFormatted = '';

        for (let week = 0; week < 6; week++) {
            for (let iterations = 0; iterations < 7; iterations++) {
                dateFormatted = day.date();
                const copyDate = moment(day);
                const isDisabled = !isEnabledDate(day, this.props);
                const isBlocked = isDateBetween(day, blockedDates);
                const ariaLabel = copyDate.format(moment.localeData(this.props.locale).longDateFormat('LL'));
                const specialDayType = this.specialDayType(day);
                if (isDisabled || isBlocked) {
                    ariaLabel += ' ' + moment.localeData(this.props.locale).invalidDate();
                }

                const dayClasses = classnames(
                    'fd-calendar__item',
                    {
                        'fd-calendar__item--other-month': !day.isSame(currentDateDisplayed, 'month'),
                        'fd-calendar__item--current': todayDate.isSame(copyDate),
                        'fd-calendar__item--weekend': this.isWeekend(day),
                        'fd-calendar__item--range': this.isInSelectedRange(day),
                        [`fd-calendar__special-day--${specialDayType}`]: !!specialDayType,
                        'is-active': this.isSelected(day) || this.isSelectedRangeFirst(day) || this.isSelectedRangeLast(day),
                        'is-disabled': isDisabled,
                        'is-blocked': isBlocked,
                        'is-focus': this.isFocusedDay(day)
                    }
                );

                days.push(
                    <td
                        aria-disabled={isDisabled}
                        aria-selected={this.isSelected(day)}
                        className={dayClasses}
                        data-is-focused={day.isSame(currentDateDisplayed)}
                        key={copyDate}
                        onClick={isEnabledDate(day, this.props) ? () => this.dateClick(copyDate, enableRangeSelection) : null}
                        onFocus={this.handleDayFocus(day)}
                        role='gridcell'>
                        <span
                            aria-label={ariaLabel}
                            className='fd-calendar__text'
                            onKeyDown={isEnabledDate(day, this.props) ? (e) => this.onKeyDownDay(e, this.dateClick.bind(this, copyDate, enableRangeSelection)) : null}
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
                <table
                    {...tableProps}
                    className='fd-calendar__table'
                    ref={this.tableRef}
                    role='grid'>
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
            focusOnInit,
            localizedText,
            monthListProps,
            yearListProps,
            tableProps,
            tableHeaderProps,
            tableBodyProps,
            specialDays,
            ...props
        } = this.props;

        const calendarClasses = classnames(
            'fd-calendar',
            className
        );

        return (
            <>
                <div {...props}
                    aria-modal
                    className={calendarClasses}
                    onKeyDown={(e) => this.onKeyDownCalendar(e)}
                    role='dialog'>
                    {this.generateNavigation()}
                    <div className='fd-calendar__content'>
                        {this._renderContent(monthListProps, yearListProps, tableProps, tableHeaderProps, tableBodyProps)}
                    </div>
                </div>
                <div aria-live='polite' className='fd-calendar__content fd-calendar__content--screen-reader-only'>
                    {localizedText.calendarInstructions}
                </div>
            </>
        );
    }

}

Calendar.displayName = 'Calendar';

Calendar.basePropTypes = {
    blockedDates: PropTypes.arrayOf(PropTypes.instanceOf(Date)),
    disableStyles: PropTypes.bool,
    disableAfterDate: PropTypes.instanceOf(Date),
    disableBeforeDate: PropTypes.instanceOf(Date),
    disabledDates: PropTypes.arrayOf(PropTypes.instanceOf(Date)),
    disableFutureDates: PropTypes.bool,
    disablePastDates: PropTypes.bool,
    disableWeekday: PropTypes.arrayOf(PropTypes.string),
    disableWeekends: PropTypes.bool,
    localizedText: CustomPropTypes.i18n({
        calendarInstructions: PropTypes.string,
        nextMonth: PropTypes.string,
        previousMonth: PropTypes.string,
        show12NextYears: PropTypes.string,
        show12PreviousYears: PropTypes.string
    }),
    specialDays: PropTypes.object
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
        calendarInstructions: 'Use arrow keys to move between dates.',
        nextMonth: 'Next month',
        previousMonth: 'Previous month',
        show12NextYears: 'Show 12 next years',
        show12PreviousYears: 'Show 12 previous years'
    },
    onChange: () => { },
    specialDays: {}
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
    focusOnInit: 'Set to **true** to focus the calendar grid upon being mounted',
    localizedTextShape: {
        calendarInstructions: 'Localized string informing screen reader users the calendar can be navigated by arrow keys.',
        nextMonth: 'aria-label for next button',
        previousMonth: 'aria-label for previous button',
        show12NextYears: 'aria-label for next button when years are displayed',
        show12PreviousYears: 'aria-label for previous button when years are displayed'
    },
    monthListProps: 'Additional props to be spread to the month\'s `<table>` element.',
    specialDays: 'Object with special dates and special date types in shape of `{\'YYYYMMDD\': type}`. Type must be a number between 1-20.',
    tableBodyProps: 'Additional props to be spread to the `<tbody>` element.',
    tableHeaderProps: 'Additional props to be spread to the `<thead>` element.',
    tableProps: 'Additional props to be spread to the `<table>` element.',
    yearListProps: 'Additional props to be spread to the year\'s `<table>` element.'
};

export default Calendar;
