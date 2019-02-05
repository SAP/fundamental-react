import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

export class Calendar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            todayDate: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 0, 0, 0, 0),
            currentDateDisplayed: new Date(),
            arrSelectedDates: [],
            selectedDate: new Date(0, 0, 0),
            showMonths: false,
            showYears: false,
            currentYear: new Date(),
            dateClick: false
        };
    }

    //Updates the states when the props of the parent component are changed.
    static getDerivedStateFromProps(updatedPropsParent, previousStates) {

        if (typeof updatedPropsParent.customDate === 'undefined') {
            return null;
        }

        //If range is enabled and the date from the parent component does not match the array dates of the states then states are updated
        if (typeof updatedPropsParent.enableRangeSelection !== 'undefined') {
            if (updatedPropsParent.customDate !== previousStates.arrSelectedDates) {
                //This checks if the date from date picker is undefined
                if (updatedPropsParent.customDate === 'undefined') {
                    //DateClick allows to update the date from the date picker if it is undefined
                    if (previousStates.dateClick) {
                        return ({ dateClick: false });
                    }
                    return ({ currentDateDisplayed: new Date(), arrSelectedDates: [], selectedDate: new Date(0, 0, 0) });
                }
                //updates the calendar if the date from date picker is correct
                return ({ arrSelectedDates: updatedPropsParent.customDate, selectedDate: new Date(0, 0, 0) });
            }
        } else if (updatedPropsParent.customDate !== previousStates.currentDateDisplayed) {
            if (typeof updatedPropsParent.customDate === 'undefined' || updatedPropsParent.customDate === '') {
                return null;
            } else if (updatedPropsParent.customDate === 'undefined') {
                if (previousStates.selectedDate.getFullYear() !== 1899 && previousStates.dateClick) {
                    return ({ dateClick: false });
                }
                //If date was not clicked then the date is reset
                if (!previousStates.dateClick) {
                    return ({ currentDateDisplayed: new Date(), selectedDate: new Date(0, 0, 0) });
                }
            } else {
                //Updates the calendar if the date from date picker is correct
                return ({ currentDateDisplayed: updatedPropsParent.customDate, selectedDate: updatedPropsParent.customDate, dateClick: false });
            }
        }
        return ({ dateClick: false });
    }

    showMonths = () => {
        this.setState({
            showMonths: !this.state.showMonths,
            showYears: false,
            dateClick: true
        });
    }

    displayBetweenRange = (day) => {
        return this.props.enableRangeSelection && this.isDateBetween(day, this.state.arrSelectedDates, this.props.enableRangeSelection);
    }

    displaySelectedRangeLast = (day) => {
        return this.props.enableRangeSelection && (typeof this.state.arrSelectedDates[1] !== 'undefined' && this.state.arrSelectedDates[1].getTime() === day.getTime());
    }

    displayIsDayOtherMonth = (day) => {
        return day.getMonth() !== this.state.currentDateDisplayed.getMonth();
    }

    displayIsSelected = (day) => {
        return (this.isSelected(day)
            || (this.props.enableRangeSelection && ((typeof this.state.arrSelectedDates[0] !== 'undefined' ? this.state.arrSelectedDates[0].getTime() === day.getTime() : false)
                || (typeof this.state.arrSelectedDates[1] !== 'undefined' ? this.state.arrSelectedDates[1].getTime() === day.getTime() : false))))
            && !(this.props.disableWeekends && (day.getDay() === 0 || day.getDay() === 6))
            && !(this.disableBeforeDate(day, this.props.disableBeforeDate))
            && !this.isDateBetween(day, this.props.blockedDates)
            && !(this.disableWeekday(day, this.props.disableWeekday))
            && !(this.props.disablePastDates && (this.disableBeforeTodayDate(day)))
            && !(this.props.disableFutureDates && this.disableAfterTodayDate(day))
            && !(this.isDateBetween(day, this.props.disabledDates)) ? 'is-selected' : '';
    }

    displaySelectedRangeFirst = (day) => {
        return this.props.enableRangeSelection && (typeof this.state.arrSelectedDates[0] !== 'undefined') && this.state.arrSelectedDates[0].getTime() === day.getTime();
    }

    displayDisabled = (day) => {
        return (this.props.disableWeekends && (day.getDay() === 0 || day.getDay() === 6)) || (this.props.disablePastDates && (this.disableBeforeTodayDate(day))) || (this.props.disableFutureDates && this.disableAfterTodayDate(day)) || (this.disableWeekday(day, this.props.disableWeekday)) || this.disableBeforeDate(day, this.props.disableBeforeDate) || this.disableAfterDate(day, this.props.disableAfterDate) || this.isDateBetween(day, this.props.disabledDates) ? ' is-disabled' : '';
    }


    showYears = () => {
        this.setState({
            showMonths: false,
            showYears: !this.state.showYears,
            dateClick: true
        });
    }

    changeMonth = (month) => {
        let date = this.state.currentDateDisplayed;
        let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        date.setMonth(months.indexOf(month));
        // reset date to first of month
        date.setDate(1);

        //updates month state
        if (!this.props.enableRangeSelection) {
            this.setState({
                currentDateDisplayed: date,
                selectedDate: date,
                dateClick: true
            }, function() {
                this.returnDateSelected(date);
            });
        } else {
            this.setState({
                currentDateDisplayed: date,
                dateClick: true
            });
        }
    }

    changeYear = (year) => {
        let date = this.state.currentDateDisplayed;
        date.setFullYear(year);
        if (!this.props.enableRangeSelection) {
            this.setState({
                currentDateDisplayed: date,
                currentYear: date,
                selectedDate: date,
                dateClick: true
            }, function() {
                this.returnDateSelected(date);
            });
        } else {
            this.setState({
                currentDateDisplayed: date,
                currentYear: date,
                dateClick: true
            });
        }
    }

    generateMonths = (monthProps) => {
        let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        let listOfMonths = months.map(element => {
            let shortenedNameMonth = '';
            if (element.length > 3) {
                shortenedNameMonth = element.substring(0, 3) + '.';
            } else {
                shortenedNameMonth = element.substring(0, 3);
            }

            let calendarItemClasses = classnames(
                'fd-calendar__item',
                {
                    'is-selected': months[this.state.currentDateDisplayed.getMonth()] === element,
                    'fd-calendar__item--current': months[this.state.todayDate.getMonth()] === element
                }
            );

            return (
                <li className={calendarItemClasses} key={element}
                    name={element} onClick={() => this.changeMonth(element)}>
                    {shortenedNameMonth}
                </li>
            );
        });

        return (
            <div className='fd-calendar__months'>
                <ul {...monthProps} className='fd-calendar__list'>
                    {listOfMonths}
                </ul>
            </div>
        );
    }

    generateYears = (yearListProps) => {

        let year = this.state.currentYear.getFullYear();
        let years = [year];
        for (let iterations = 1; iterations < 12; iterations++) {
            year = year + 1;
            years.push(year);
        }
        let listOfYears = years.map(element => {
            let yearClasses = classnames(
                'fd-calendar__item',
                {
                    'is-selected': this.state.currentDateDisplayed.getFullYear() === element,
                    'fd-calendar__item--current': this.state.todayDate.getFullYear() === element
                }
            );

            return (
                <li className={yearClasses} key={element}
                    name={element} onClick={() => this.changeYear(element)}>
                    {element}
                </li>
            );
        });
        return (
            <div className='fd-calendar__months'>
                <ul {...yearListProps} className='fd-calendar__list'>
                    {listOfYears}
                </ul>
            </div>
        );
    }

    next = () => {

        if (this.state.showYears) {
            let copyDate = this.state.currentYear;
            copyDate.setFullYear(copyDate.getFullYear() + 12);
            this.setState({ currentYear: copyDate, dateClick: true });
        } else {
            let copyDate = this.state.currentDateDisplayed;
            let selectedDate = new Date(this.state.selectedDate.getFullYear(), this.state.selectedDate.getMonth(), this.state.selectedDate.getDate(), 0, 0, 0, 0);
            copyDate.setMonth(copyDate.getMonth() + 1);
            this.setState({
                currentDateDisplayed: copyDate, selectedDate: selectedDate, dateClick: true
            });
        }
    }

    previous = () => {

        if (this.state.showYears) {
            let copyDate = this.state.currentYear;
            copyDate.setFullYear(copyDate.getFullYear() - 12);
            this.setState({ currentYear: copyDate, dateClick: true });
        } else {
            let copyDate = this.state.currentDateDisplayed;
            let selectedDate = new Date(this.state.selectedDate.getFullYear(), this.state.selectedDate.getMonth(), this.state.selectedDate.getDate(), 0, 0, 0, 0);
            copyDate.setMonth(copyDate.getMonth() - 1);

            this.setState({
                currentDateDisplayed: copyDate, selectedDate: selectedDate, dateClick: true
            });
        }

    }

    dateClick = (day, isRangeEnabled) => {
        let selectedDates = [];
        if (typeof isRangeEnabled !== 'undefined' && isRangeEnabled) {
            selectedDates = this.state.arrSelectedDates;
            if (selectedDates.length === 2) {
                selectedDates = [];
                selectedDates.push(day);
            } else if (typeof selectedDates[0] !== 'undefined' && day.getTime() <= selectedDates[0].getTime()) {
                let newArr = [];
                newArr.push(day);
                newArr.push(selectedDates[0]);
                selectedDates = newArr;
            } else {
                selectedDates.push(day);
            }
        }

        this.setState({
            currentDateDisplayed: day,
            currentYear: day,
            selectedDate: day,
            arrSelectedDates: selectedDates,
            dateClick: true
        }, function() {
            if (isRangeEnabled) {
                this.returnDateSelected(selectedDates);
            } else {
                this.returnDateSelected(day);
            }
        });
    };

    retrieveStartOfWeek = (date) => {
        let day = date.getDay();
        let difference = date.getDate() - day + (day === 0 ? -6 : 0);
        return new Date(date.setDate(difference));
    }

    returnFirstDayMonth = (date) => {
        let firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
        return firstDay;
    }

    returnLastDayMonth = (date) => {
        let lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
        return lastDay;
    }

    addDays = (date, days) => {
        let result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    }

    retrieveEndOfWeek = (date) => {
        let difference = date.getDate() + 6 - date.getDay();
        let newDate = new Date(date.getFullYear(), date.getMonth(), difference);
        return newDate;
    }

    isDateBetween = (date, blockedDates, isRangeEnabled) => {

        if (typeof blockedDates === 'undefined' || typeof blockedDates[0] === 'undefined' || typeof blockedDates[1] === 'undefined') {
            return false;
        }

        if (typeof isRangeEnabled !== 'undefined' || isRangeEnabled) {
            if (blockedDates[0].getTime() > blockedDates[1].getTime()) {
                return blockedDates[1].getTime() < date.getTime() && blockedDates[0].getTime() > date.getTime();
            }
        }
        return blockedDates[0].getTime() < date.getTime() && blockedDates[1].getTime() > date.getTime();
    }

    isSelected = (date) => {
        return (this.state.selectedDate.getDate() === date.getDate() &&
            this.state.selectedDate.getMonth() === date.getMonth() &&
            this.state.selectedDate.getFullYear() === date.getFullYear());
    }

    disableWeekday = (date, weekDays) => {
        let daysName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        if (typeof weekDays === 'undefined') {
            return false;
        }

        if (weekDays.indexOf(daysName[date.getDay()]) > 0) {
            return true;
        }
        return false;
    }

    disableBeforeDate = (date, beforeDate) => {
        if (typeof beforeDate === 'undefined') {
            return false;
        }
        return (date.getTime() < beforeDate.getTime());
    }

    disableAfterDate = (date, afterDate) => {

        if (typeof afterDate === 'undefined') {
            return false;
        }
        return (date.getTime() > afterDate.getTime());
    }

    disableBeforeTodayDate = (date) => {
        let todayDate = new Date();
        todayDate.setHours(0, 0, 0, 0);

        return date.getTime() < todayDate.getTime();
    }

    disableAfterTodayDate = (date) => {
        let todayDate = new Date();
        todayDate.setHours(0, 0, 0, 0);

        return date.getTime() > todayDate.getTime();
    }

    returnDateSelected = (dates) => {
        this.props.onChange(dates);
    }

    generateNavigation = () => {
        let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        return (
            <header className='fd-calendar__header'>
                <div className='fd-calendar__navigation'>
                    <div className='fd-calendar__action'>
                        <button className='fd-button--standard fd-button--light fd-button--compact sap-icon--slim-arrow-left' onClick={this.previous} />
                    </div>
                    <div className='fd-calendar__action'>
                        <button className='fd-button--light fd-button--compact' onClick={this.showMonths}>
                            <span>
                                {months[this.state.currentDateDisplayed.getMonth()]}
                            </span>
                        </button>
                    </div>
                    <div className='fd-calendar__action'>
                        <button className='fd-button--light fd-button--compact' onClick={this.showYears}>
                            <span>
                                {this.state.currentDateDisplayed.getFullYear()}
                            </span>
                        </button>
                    </div>

                    <div className='fd-calendar__action' onClick={this.next}>
                        <button className='fd-button--standard fd-button--light fd-button--compact sap-icon--slim-arrow-right' />
                    </div>
                </div>
            </header>
        );
    }

    generateWeekdays = () => {
        let weekDays = [];
        let daysName = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

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
        //props that allows the developer to pass their preferences
        let blockedDates = this.props.blockedDates;
        let enableRangeSelection = this.props.enableRangeSelection;

        let firstDayMonth = this.returnFirstDayMonth(this.state.currentDateDisplayed);
        let endDayMonth = this.returnLastDayMonth(firstDayMonth);
        let firstDayWeekMonth = this.retrieveStartOfWeek(firstDayMonth);
        let lastDateEndMonth = this.retrieveEndOfWeek(endDayMonth);
        let rows = [];
        let days = [];
        let day = firstDayWeekMonth;
        let dateFormatted = '';

        //iterate until reach the end of the month
        while (day <= lastDateEndMonth) {
            //7 days in a week
            for (let iterations = 0; iterations < 7; iterations++) {
                dateFormatted = day.getDate();
                let copyDate = day;

                let dayClasses = classnames(
                    {
                        'fd-calendar__item': !this.displayIsDayOtherMonth(day),
                        'fd-calendar__item--other-month': this.displayIsDayOtherMonth(day),
                        'fd-calendar__item--current': this.state.todayDate.getTime() === copyDate.getTime(),
                        'is-selected': this.displayIsSelected(day),
                        'is-selected-range-first': this.displaySelectedRangeFirst(day),
                        'is-selected-range-last': this.displaySelectedRangeLast(day),
                        'is-selected-range': this.displayBetweenRange(day),
                        'is-disabled': this.displayDisabled(day),
                        'is-blocked': this.isDateBetween(day, blockedDates)
                    }
                );

                days.push(
                    <td
                        className={dayClasses}
                        key={copyDate}
                        onClick={!this.displayDisabled(day) ? () => this.dateClick(copyDate, enableRangeSelection) : null}
                        role='gridcell' >
                        <span className='fd-calendar__text'>{dateFormatted}</span>
                    </td >
                );

                day = this.addDays(day, 1);
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
                <table {...tableProps} className='fd-calendar__table'>
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

Calendar.basePropTypes = {
    blockedDates: PropTypes.arrayOf(PropTypes.instanceOf(Date)),
    disableAfterDate: PropTypes.instanceOf(Date),
    disableBeforeDate: PropTypes.instanceOf(Date),
    disabledDates: PropTypes.arrayOf(PropTypes.instanceOf(Date)),
    disableFutureDates: PropTypes.bool,
    disablePastDates: PropTypes.bool,
    disableWeekday: PropTypes.arrayOf(PropTypes.string),
    disableWeekends: PropTypes.bool
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
    monthListProps: 'Additional props to be spread to the month\'s `<ul>` element.',
    tableBodyProps: 'Additional props to be spread to the `<tbody>` element.',
    tableHeaderProps: 'Additional props to be spread to the `<thead>` element.',
    tableProps: 'Additional props to be spread to the `<table>` element.',
    yearListProps: 'Additional props to be spread to the year\'s `<ul>` element.'
};
