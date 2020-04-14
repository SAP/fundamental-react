import moment from 'moment';

export const isDateBetween = (date, blockedDates, isRangeEnabled) => {
    if (typeof blockedDates === 'undefined' || typeof blockedDates[0] === 'undefined' || typeof blockedDates[1] === 'undefined') {
        return false;
    }
    if (typeof isRangeEnabled !== 'undefined' || isRangeEnabled) {
        if (blockedDates[0].isAfter(blockedDates[1])) {
            return blockedDates[1].isBefore(date) && blockedDates[0].isAfter(date);
        }
    }
    return blockedDates[0].isBefore(date, 'day') && blockedDates[1].isAfter(date, 'day');
};

export const isDisabledWeekday = (date, weekDays) => {
    if (!weekDays) {
        return false;
    }

    const daysName = moment.weekdays();

    return weekDays.indexOf(daysName[date.day()]) > -1;
};

export const isEnabledDate = (day, dateProps) => {
    const {
        disableWeekends,
        disableAfterDate,
        disableBeforeDate,
        blockedDates,
        disableWeekday,
        disablePastDates,
        disableFutureDates,
        disabledDates
    } = dateProps;
    return (
        !isDisabledWeekday(day, disableWeekday) &&
        !(disableWeekends && (day.day() === 0 || day.day() === 6)) &&
        !(disableBeforeDate && day.isBefore(moment(disableBeforeDate), 'day')) &&
        !(disableAfterDate && day.isAfter(moment(disableAfterDate), 'day')) &&
        !(disablePastDates && day.isBefore(moment(), 'day')) &&
        !(disableFutureDates && day.isAfter(moment(), 'day')) &&
        !isDateBetween(day, blockedDates && blockedDates.map(date => moment(date))) &&
        !isDateBetween(day, disabledDates && disabledDates.map(date => moment(date)))
    );
};
