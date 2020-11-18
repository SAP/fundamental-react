import Button from '../Button/Button';
import classnamesBind from 'classnames/bind';
import CustomPropTypes from '../utils/CustomPropTypes/CustomPropTypes';
import GridManager from '../utils/gridManager/gridManager';
import { ISO_DATE_FORMAT } from '../utils/constants';
import keycode from 'keycode';
import moment from 'moment';
import PropTypes from 'prop-types';
import withStyles from '../utils/withStyles';
import { isDateBetween, isDateEnabled, resolveFormat } from '../utils/dateUtils';
import React, { Component } from 'react';
import styles from 'fundamental-styles/dist/calendar.css';

const classnames = classnamesBind.bind(styles);

/** A **Calendar** is commonly used as the contents of a **Popover** when composing a **DatePicker**.
It is rarely used on its own as a standalone component. Internally it uses and accepts [Moment.js](https://momentjs.com/) date objects*/

class Calendar extends Component {

    constructor(props) {
        super(props);
        const { customDate, dateFormat, enableRangeSelection, locale, openToDate } = this.props;
        const format = resolveFormat({ dateFormat, locale });
        let currentDateDisplayed = openToDate ? moment(openToDate, format) : moment().startOf('day');
        let selectedDateOrDates = !enableRangeSelection ? moment({ year: 0 }) : [];

        const customDateEmpty = (!customDate || (customDate && customDate.length === 0));

        if (!customDateEmpty) {
            selectedDateOrDates = customDate;
            currentDateDisplayed = Array.isArray(customDate) ? moment(customDate[0], format) : moment(customDate, format);
        }

        this.state = {
            todayDate: moment().startOf('day'),
            gridBoundaryContext: null,
            refocusGrid: props.focusOnInit,
            currentDateDisplayed: currentDateDisplayed,
            arrSelectedDates: props.enableRangeSelection ? selectedDateOrDates : [],
            screenReaderText: '',
            selectedDate: !props.enableRangeSelection ? selectedDateOrDates : null,
            showMonths: false,
            showYears: false,
            currentFocusDay: currentDateDisplayed.startOf('day'),
            currentFocusYear: currentDateDisplayed.year(),
            currentFocusMonth: currentDateDisplayed.month()
        };

        this.tableRef = React.createRef();
    }

    componentDidMount = () => {
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
        const {
            cssNamespace
        } = this.props;

        const { gridBoundaryContext, refocusGrid } = this.state;
        const tableElement = this.tableRef.current;
        const focusedDateElement = tableElement.querySelector('[data-is-focused=true]');
        const selectedDateElement = tableElement.querySelector(`.${classnames('is-selected')}`);
        const todayDateElement = tableElement.querySelector(`.${classnames(`${cssNamespace}-calendar__item--current`)}`);
        const disabledDateElements = tableElement.querySelectorAll(`.${classnames(`${cssNamespace}-calendar__item--other-month`)}`);
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
            ) && isDateEnabled(day, this.props)
        );
    }

    isInSelectedRange = (day) => {
        const { dateFormat, enableRangeSelection, locale } = this.props;
        const format = resolveFormat({ dateFormat, locale });
        return enableRangeSelection && isDateBetween({
            date: day,
            dateTuple: this.state.arrSelectedDates,
            format,
            isRangeEnabled: enableRangeSelection
        });
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
            screenReaderText: this.props.localizedText.dayInstructions,
            showMonths: false
        });
    }

    changeYear = (year) => {
        const newDate = moment(this.state.currentDateDisplayed).year(year);

        this.setState({
            currentDateDisplayed: newDate,
            screenReaderText: this.props.localizedText.dayInstructions,
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
        const {
            cssNamespace
        } = this.props;

        let newDate;

        const focusedDateElement = this.tableRef.current && this.tableRef.current.querySelector(`.${cssNamespace}-calendar__text:focus`);
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
        const {
            cssNamespace
        } = this.props;

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
                    `${cssNamespace}-calendar__item`,
                    {
                        'is-focus': isFocused,
                        'is-selected': isSelected,
                        [`${cssNamespace}-calendar__item--current`]: months[this.state.todayDate.month()] === month
                    }
                );

                return (
                    <td aria-selected={isSelected} className={calendarItemClasses}
                        key={month} name={month}
                        onClick={() => this.changeMonth(month)}
                        onFocus={this.handleMonthFocus(month)}>
                        <span className={classnames(`${cssNamespace}-calendar__text`)}
                            onKeyDown={(e) => this.onKeyDownDay(e, this.changeMonth.bind(this, month))} role='button'>
                            {shortenedNameMonth}
                        </span>
                    </td>
                );
            });

            return (
                <tr className={classnames(`${cssNamespace}-calendar__row`)} key={`month-row-${index}`}>
                    {monthCells}
                </tr>
            );
        });

        return (
            <div className={classnames(`${cssNamespace}-calendar__months`)}>
                <table
                    {...monthProps}
                    className={classnames(`${cssNamespace}-calendar__table`)}
                    ref={this.tableRef}
                    role='grid'>
                    <tbody className={classnames(`${cssNamespace}-calendar__group`)}>
                        {listOfMonths}
                    </tbody>
                </table>
            </div>
        );
    }

    generateYears = (yearListProps) => {
        const {
            cssNamespace
        } = this.props;

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
                    `${cssNamespace}-calendar__item`,
                    {
                        'is-focus': isFocused,
                        'is-selected': isSelected,
                        [`${cssNamespace}-calendar__item--current`]: this.state.todayDate.year() === element
                    }
                );

                return (
                    <td aria-selected={isSelected}
                        className={yearClasses} key={element}
                        name={element}
                        onClick={() => this.changeYear(element)}
                        onFocus={this.handleYearFocus(element)}>
                        <span className={classnames(`${cssNamespace}-calendar__text`)}
                            onKeyDown={(e) => this.onKeyDownDay(e, this.changeYear.bind(this, element))} role='button'>
                            {element}
                        </span>
                    </td>
                );
            });

            return (
                <tr className={classnames(`${cssNamespace}-calendar__row`)} key={`year-row-${index}`}>
                    {yearCells}
                </tr>
            );
        });
        return (
            <div className={classnames(`${cssNamespace}-calendar__years`)}>
                <table
                    {...yearListProps}
                    className={classnames(`${cssNamespace}-calendar__table`)}
                    ref={this.tableRef}
                    role='grid'>
                    <tbody className={classnames(`${cssNamespace}-calendar__group`)}>
                        {listOfYears}
                    </tbody>
                </table>
            </div>
        );
    }

    handleNext = () => {
        const { currentDateDisplayed } = this.state;
        const months = moment.localeData(this.props.locale).months();

        if (this.state.showYears) {
            const newDate = moment(currentDateDisplayed).add(12, 'year');
            this.setState({ currentDateDisplayed: newDate, screenReaderText: newDate.year() });
        } else {
            const newDate = moment(currentDateDisplayed).add(1, 'month');
            this.setState({ currentDateDisplayed: newDate, screenReaderText: `${months[newDate.month()]} ${newDate.year()}` });
        }
    }

    handlePrevious = () => {
        const { currentDateDisplayed } = this.state;
        const months = moment.localeData(this.props.locale).months();

        if (this.state.showYears) {
            const newDate = moment(currentDateDisplayed).subtract(12, 'year');
            this.setState({ currentDateDisplayed: newDate, screenReaderText: newDate.year() });
        } else {
            const newDate = moment(currentDateDisplayed).subtract(1, 'month');
            this.setState({ currentDateDisplayed: newDate, screenReaderText: `${months[newDate.month()]} ${newDate.year()}` });
        }
    }

    handleToday = () => {
        this.dateClick(this.state.todayDate, this.props.enableRangeSelection, true);
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

    dateClick = (day, isRangeEnabled, forceStayOpen = false) => {
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
            screenReaderText: isRangeEnabled ? this.props.localizedText.rangeInstructions : '',
            selectedDate: day,
            arrSelectedDates: selectedDates
        }, function() {
            if (isRangeEnabled) {
                this.props.onChange(selectedDates, forceStayOpen);
            } else {
                this.props.onChange(day, forceStayOpen);
            }
        });
    };

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
        const {
            cssNamespace
        } = this.props;

        const months = moment.localeData(this.props.locale).months();
        const previousButtonLabel = this.state.showYears ?
            this.props.localizedText.show12PreviousYears : this.props.localizedText.previousMonth;
        const nextButtonLabel = this.state.showYears ?
            this.props.localizedText.show12NextYears : this.props.localizedText.nextMonth;
        const showToday = this.props.showToday && !this.state.showMonths && !this.state.showYears;

        return (
            <div className={classnames(`${cssNamespace}-calendar__header`)}>
                <div className={classnames(`${cssNamespace}-calendar__navigation`)}>
                    <div className={classnames(`${cssNamespace}-calendar__action`)}>
                        <Button
                            aria-label={previousButtonLabel}
                            compact={this.props.compact}
                            glyph='slim-arrow-left'
                            onClick={this.handlePrevious}
                            option='transparent' />
                    </div>
                    <div className={classnames(`${cssNamespace}-calendar__action`)}>
                        <Button
                            compact={this.props.compact}
                            onClick={this.showMonths}
                            option='transparent'>
                            {months[this.state.currentDateDisplayed.month()]}
                        </Button>
                    </div>
                    <div className={classnames(`${cssNamespace}-calendar__action`)}>
                        <Button
                            compact={this.props.compact}
                            onClick={this.showYears}
                            option='transparent'>
                            {this.state.currentDateDisplayed.year()}
                        </Button>
                    </div>

                    <div className={classnames(`${cssNamespace}-calendar__action`)}>
                        <Button
                            aria-label={nextButtonLabel}
                            compact={this.props.compact}
                            glyph='slim-arrow-right'
                            onClick={this.handleNext}
                            option='transparent' />
                    </div>
                    {showToday &&
                        <div className={classnames(`${cssNamespace}-calendar__action`)}>
                            <Button
                                compact={this.props.compact}
                                onClick={this.handleToday}
                                option={'transparent'}>
                                {this.props.localizedText.todayLabel}
                            </Button>
                        </div>
                    }
                </div>
            </div>
        );
    }

    shiftDays = (startOnDay = 0, weekdays) => {
        const _weekdays = [...weekdays];
        let counter = startOnDay;
        while (counter > 0) {
            const day = _weekdays.shift();
            _weekdays.push(day);
            counter = counter - 1;
        }
        return _weekdays;
    }

    generateWeekdays = () => {
        const {
            cssNamespace
        } = this.props;

        const weekDays = [];
        const daysName = moment.localeData(this.props.locale).weekdaysMin();
        const shiftedDaysName = this.shiftDays(this.normalizedWeekdayStart(), daysName);

        for (let index = 0; index < 7; index++) {
            weekDays.push(
                <th className={classnames(`${cssNamespace}-calendar__item`, `${cssNamespace}-calendar__item--side-helper`)} key={index}>
                    <span className={classnames(`${cssNamespace}-calendar__text`)}>
                        {shiftedDaysName[index]}
                    </span>
                </th>);
        }
        return <tr className={classnames(`${cssNamespace}-calendar__row`)}>{weekDays}</tr>;

    }

    normalizedWeekdayStart = () => {
        const weekdayStart = parseInt(this.props.weekdayStart, 10);
        if (!isNaN(weekdayStart) && weekdayStart >= 0 && weekdayStart <= 6) {
            return weekdayStart;
        }
        return 0;
    }

    generateDays = (tableBodyProps) => {
        const {
            cssNamespace,
            enableRangeSelection
        } = this.props;

        const {
            currentDateDisplayed,
            todayDate
        } = this.state;

        const firstDayMonth = moment(currentDateDisplayed).startOf('month');
        const firstDayWeekMonth = moment(firstDayMonth).day(0).day(this.normalizedWeekdayStart());
        const isAfterFirstDayMonth = moment(firstDayWeekMonth).isAfter(firstDayMonth);

        const rows = [];

        let days = [];
        let day = isAfterFirstDayMonth ? firstDayWeekMonth.subtract(7, 'days') : firstDayWeekMonth;
        let dateFormatted = '';

        for (let week = 0; week < 6; week++) {
            for (let iterations = 0; iterations < 7; iterations++) {
                dateFormatted = day.date();
                const copyDate = moment(day);
                const isDisabled = !isDateEnabled(day, this.props);
                let ariaLabel = copyDate.format(moment.localeData(this.props.locale).longDateFormat('LL'));
                const specialDayType = this.specialDayType(day);
                if (isDisabled) {
                    ariaLabel += ' ' + moment.localeData(this.props.locale).invalidDate();
                }

                const dayClasses = classnames(
                    `${cssNamespace}-calendar__item`,
                    {
                        [`${cssNamespace}-calendar__item--other-month`]: !day.isSame(currentDateDisplayed, 'month'),
                        [`${cssNamespace}-calendar__item--current`]: todayDate.isSame(copyDate),
                        [`${cssNamespace}-calendar__item--weekend`]: this.isWeekend(day),
                        [`${cssNamespace}-calendar__item--range`]: this.isInSelectedRange(day),
                        [`${cssNamespace}-calendar__special-day--${specialDayType}`]: !!specialDayType,
                        'is-active': this.isSelected(day) || this.isSelectedRangeFirst(day) || this.isSelectedRangeLast(day),
                        'is-disabled': isDisabled,
                        'is-focus': this.isFocusedDay(day)
                    }
                );

                days.push(
                    <td
                        aria-disabled={isDisabled}
                        aria-selected={this.isSelected(day)}
                        className={dayClasses}
                        data-is-focused={day.isSame(currentDateDisplayed)}
                        data-test={day.format(ISO_DATE_FORMAT)}
                        key={copyDate}
                        onClick={isDateEnabled(day, this.props) ? () => this.dateClick(copyDate, enableRangeSelection) : null}
                        onFocus={this.handleDayFocus(day)}
                        role='gridcell'>
                        <span
                            aria-label={ariaLabel}
                            className={classnames(`${cssNamespace}-calendar__text`)}
                            onKeyDown={isDateEnabled(day, this.props) ? (e) => this.onKeyDownDay(e, this.dateClick.bind(this, copyDate, enableRangeSelection)) : null}
                            role='button'>{dateFormatted.toString()}</span>
                    </td >
                );

                day = moment(day).add(1, 'days');
            }

            rows.push(
                <tr className={classnames(`${cssNamespace}-calendar__row`)} key={day} >
                    {days}
                </tr>
            );

            days = [];
        }
        return <tbody {...tableBodyProps} className={classnames(`${cssNamespace}-calendar__group`)}>{rows}</tbody>;

    }

    _renderContent = (monthListProps, yearListProps, tableProps, tableHeaderProps, tableBodyProps) => {
        const {
            cssNamespace
        } = this.props;

        if (this.state.showMonths) {
            return this.generateMonths(monthListProps);
        }

        if (this.state.showYears) {
            return this.generateYears(yearListProps);
        }

        return (
            <div className={classnames(`${cssNamespace}-calendar__dates`)}>
                <table
                    {...tableProps}
                    className={classnames(`${cssNamespace}-calendar__table`)}
                    ref={this.tableRef}
                    role='grid'>
                    <thead {...tableHeaderProps} className={classnames(`${cssNamespace}-calendar__group`)}>
                        {this.generateWeekdays()}
                    </thead>
                    {this.generateDays(tableBodyProps)}
                </table>
            </div>
        );
    }

    render() {
        const {
            compact,
            cssNamespace,
            dateFormat,
            enableRangeSelection,
            disableWeekends,
            disableBeforeDate,
            disableAfterDate,
            disableWeekday,
            disablePastDates,
            disableFutureDates,
            disabledDateRanges,
            disabledDates,
            customDate,
            className,
            focusOnInit,
            locale,
            localizedText,
            monthListProps,
            openToDate,
            yearListProps,
            tableProps,
            tableHeaderProps,
            tableBodyProps,
            showToday,
            specialDays,
            weekdayStart,
            ...props
        } = this.props;

        const calendarClasses = classnames(
            `${cssNamespace}-calendar`,
            {
                [`${cssNamespace}-calendar--compact`]: compact
            },
            className
        );

        return (
            <section
                {...props}
                className={calendarClasses}
                onKeyDown={(e) => this.onKeyDownCalendar(e)}>
                {this.generateNavigation()}
                <div className={classnames(`${cssNamespace}-calendar__content`)}
                    onBlur={(e) => {
                        if (!e.currentTarget.contains(e.relatedTarget)) {
                            this.setState({ screenReaderText: '' });
                        }
                    }}
                    onFocus={() => {
                        let instructions = localizedText.dayInstructions;
                        if (this.state.showYears) {
                            instructions = localizedText.yearInstructions;
                        } else if (this.state.showMonths) {
                            instructions = localizedText.monthInstructions;
                        }
                        this.setState({ screenReaderText: instructions });
                    }}>
                    {this._renderContent(monthListProps, yearListProps, tableProps, tableHeaderProps, tableBodyProps)}
                </div>
                <div aria-live='polite'
                    className={classnames(
                        `${cssNamespace}-calendar__content`,
                        `${cssNamespace}-calendar__content--screen-reader-only`
                    )}>
                    {this.state.screenReaderText}
                </div>
            </section>
        );
    }

}

Calendar.displayName = 'Calendar';

// Don't move this to customPropTypes because instanceOf(moment) might leak the moment package into a bundle
// when tree-shaking could have safely removed it
export const datePropType = PropTypes.oneOfType([
    PropTypes.instanceOf(moment),
    PropTypes.instanceOf(Date),
    PropTypes.string,
    PropTypes.number
]);

Calendar.propTypes = {
    /** CSS class(es) to add to the element */
    className: PropTypes.string,
    /** Set to **true** to enable compact mode */
    compact: PropTypes.bool,
    customDate: PropTypes.oneOfType([
        datePropType,
        PropTypes.arrayOf(datePropType)
    ]),
    /** Format to use for displaying the inputted or selected date. E.g. "YYYY.M.D", "DD-MM-YYYY", "MM/DD/YYYY" etc.
     * This overrides the date format derived from any set locale. */
    dateFormat: PropTypes.string,
    /** Disables dates of a calendar that come after the specified date */
    disableAfterDate: datePropType,
    /** Disables dates of a calendar that come before the specified date */
    disableBeforeDate: datePropType,
    /** Disables dates that are in between (inclusive) the disabled date tuples */
    disabledDateRanges: CustomPropTypes.arrayOfTupleTypes(datePropType),
    /** Array of Date objects that cannot be selected */
    disabledDates: PropTypes.arrayOf(datePropType),
    /** Set to **true** to disable dates after today\'s date */
    disableFutureDates: PropTypes.bool,
    /** Set to **true** to disable dates before today\'s date */
    disablePastDates: PropTypes.bool,
    /** Disables dates that match a weekday. For example, `disableWeekday={[\'Tuesday\', \'Thursday\', \'Friday\']}` */
    disableWeekday: PropTypes.arrayOf(PropTypes.string),
    /** Set to **true** to disables dates that match a weekend */
    disableWeekends: PropTypes.bool,
    /** Set to **true** to enable the Calendar's range selection feature */
    enableRangeSelection: PropTypes.bool,
    /** Set to **true** to focus the calendar grid upon being mounted */
    focusOnInit: PropTypes.bool,
    /** Moment.js locale keys */
    locale: PropTypes.string,
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
        /** Label for Today button if showToday is true */
        todayLabel: PropTypes.string
    }),
    /** Additional props to be spread to the month\'s `<table>` element */
    monthListProps: PropTypes.object,
    /** Date to focus when the calendar is loaded and no date is selected */
    openToDate: datePropType,
    /** Set to **true** if the Today button should be displayed */
    showToday: PropTypes.bool,
    /** Object with special dates and special date types in shape of `{'YYYYMMDD': type}`. Type must be a number between 1-20 */
    specialDays: PropTypes.object,
    /** Additional props to be spread to the `<tbody>` element */
    tableBodyProps: PropTypes.object,
    /** Additional props to be spread to the `<thead>` element */
    tableHeaderProps: PropTypes.object,
    /** Additional props to be spread to the `<table>` element */
    tableProps: PropTypes.object,
    /** Number to indicate which day the week should start. 0 = Sunday, 1 = Monday, 2 = Tuesday, 3 = Wednesday, 4 = Thursday, 5 = Friday, 6 = Saturday */
    weekdayStart: CustomPropTypes.range(0, 6),
    /** Additional props to be spread to the year\'s `<table>` element */
    yearListProps: PropTypes.object,
    /**
     * Callback function when the date selection changes.
     *
     *  * If `enableRangeSelection` is **false** the function is called when any date is selected, with a Moment.js date object
     *  * If `enableRangeSelection` is **true** the function is called when any date is selected, with an array of Moment.js date objects. The max size of this array is 2 i.e. the start and end date.
     *
     * @param {(Moment | Moment[])} date single Moment.js date object if range selection is disabled, else an array containing 2 Moment.js date objects.
     * @param {Boolean} todayPressed - is true only if the change was caused by the today button.
     * @returns {void}
    */
    onChange: PropTypes.func
};

Calendar.defaultProps = {
    disabledDates: [],
    disabledDateRanges: [],
    compact: false,
    locale: 'en',
    localizedText: {
        dayInstructions: 'Use arrow keys to move between days.',
        monthInstructions: 'Use arrow keys to move between months.',
        yearInstructions: 'Use arrow keys to move between years.',
        rangeInstructions: 'First date selected. Please select a second date.',
        nextMonth: 'Next month',
        previousMonth: 'Previous month',
        show12NextYears: 'Show 12 next years',
        show12PreviousYears: 'Show 12 previous years',
        todayLabel: 'Today'
    },
    onChange: () => { },
    specialDays: {},
    weekdayStart: 0
};

export default withStyles(Calendar);
