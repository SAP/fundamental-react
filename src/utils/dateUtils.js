import { ISO_DATE_FORMAT } from './constants';
import moment from 'moment';


export const isDateBetween = ({ date, dateTuple, format, isRangeEnabled }) => {
    const [start, end] = dateTuple || [];
    if (typeof start === 'undefined' || typeof end === 'undefined') {
        return false;
    }
    const startMoment = moment(start, format);
    const endMoment = moment(end, format);
    // It's possible to switch tuple so the first value is after the second value
    if (isRangeEnabled && startMoment.isAfter(endMoment)) {
        return endMoment.isSameOrBefore(date) && startMoment.isSameOrAfter(date);
    }
    return startMoment.isSameOrBefore(date, 'day') && endMoment.isSameOrAfter(date, 'day');
};

const isWeekdayDisabled = (date, disableWeekday) => {
    if (!disableWeekday) {
        return false;
    }

    const daysName = moment.weekdays();

    return disableWeekday.indexOf(daysName[date.day()]) > -1;
};

export const isDateEnabled = (day, {
    dateFormat,
    disableWeekends,
    disableAfterDate,
    disableBeforeDate,
    disableWeekday,
    disablePastDates,
    disableFutureDates,
    disabledDates,
    disabledDateRanges,
    locale
}) => {
    const format = resolveFormat({ dateFormat, locale });
    return (
        !isWeekdayDisabled(day, disableWeekday) &&
        !(disableWeekends && (day.day() === 0 || day.day() === 6)) &&
        !(disableBeforeDate && day.isBefore(moment(disableBeforeDate, format), 'day')) &&
        !(disableAfterDate && day.isAfter(moment(disableAfterDate, format), 'day')) &&
        !(disablePastDates && day.isBefore(moment(), 'day')) &&
        !(disableFutureDates && day.isAfter(moment(), 'day')) &&
        !disabledDates.some(date => moment(date, format).diff(day, 'days') === 0) &&
        !disabledDateRanges.some(dateTuple => isDateBetween({ date: day, dateTuple, format }))
    );
};

export const resolveFormat = ({ dateFormat, locale }) => {
    if (dateFormat) {
        return dateFormat;
    } else if (locale) {
        const localeData = moment.localeData(locale);
        return localeData.longDateFormat('L');
    }
    return ISO_DATE_FORMAT;
};
