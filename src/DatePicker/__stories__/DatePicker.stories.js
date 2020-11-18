/* eslint-disable react/no-multi-comp */
import { action } from '@storybook/addon-actions';
import Column from '../../LayoutGrid/Column';
import Container from '../../LayoutGrid/Container';
import DatePicker from '../DatePicker';
import FormLabel from '../../Forms/FormLabel';
import moment from 'moment';
import Row from '../../LayoutGrid/Row';
import {
    boolean,
    date,
    number,
    optionsKnob,
    select,
    text,
    withKnobs
} from '@storybook/addon-knobs';
import React, { useEffect, useRef, useState } from 'react';

export default {
    title: 'Component API/DatePicker',
    component: DatePicker,
    decorators: [withKnobs],
    excludeStories: /.*VisualStoryShotOnly/
};

function dateKnobToDate(name, defaultValue) {
    const stringTimestamp = date(name, new Date(defaultValue));
    return moment(stringTimestamp);
}

const afterDateDefault = new Date(new Date().getFullYear() + 1, 0, 1);
const beforeDateDefault = new Date(new Date().getFullYear() - 1, 0, 1);

const disabledDateDefault = new Date(new Date().getFullYear(), new Date().getMonth() - 1, 15);
const disabledDateRangeFirstDefault = new Date(new Date().getFullYear(), new Date().getMonth() - 1, 18);
const disabledDateRangeSecondDefault = new Date(new Date().getFullYear(), new Date().getMonth() - 1, 22);
const disabledDateRangeThirdDefault = new Date(new Date().getFullYear(), new Date().getMonth() - 1, 24);
const disabledDateRangeFourthDefault = new Date(new Date().getFullYear(), new Date().getMonth() - 1, 26);

const weekdayOptions = {
    Sunday: 'Sunday',
    Monday: 'Monday',
    Tuesday: 'Tuesday',
    Wednesday: 'Wednesday',
    Thursday: 'Thursday',
    Friday: 'Friday',
    Saturday: 'Saturday'
};
const dateFormatOptionsLabel = 'Date Format';
const dateFormatOptions = {
    'MM/DD/YYYY': 'MM/DD/YYYY',
    'MM-DD-YYYY': 'MM-DD-YYYY',
    'MM.DD.YYYY': 'MM.DD.YYYY',
    'DD/MM/YYYY': 'DD/MM/YYYY',
    'DD-MM-YYYY': 'DD-MM-YYYY',
    'DD.MM.YYYY': 'DD.MM.YYYY',
    'YYYY/MM/DD': 'YYYY/MM/DD',
    'YYYY-MM-DD': 'YYYY-MM-DD',
    'YYYY.MM.DD': 'YYYY.MM.DD',
    None: null
};
const dateFormatDefaultValue = null;
const dateFormatGroupId = 'GROUP-DATE-FORMAT';


export const primary = () => (
    <>
        <FormLabel htmlFor='primary-datepicker'>Date</FormLabel>
        <DatePicker inputProps={{
            id: 'primary-datepicker'
        }} />
    </>
);

export const compact = () => (
    <>
        <FormLabel htmlFor='compact-datepicker'>Date</FormLabel>
        <DatePicker compact inputProps={{
            id: 'compact-datepicker'
        }} />
    </>
);


compact.storyName = 'Compact';

export const disabled = () => (
    <>
        <FormLabel htmlFor='disabled-datepicker'>Date</FormLabel>
        <DatePicker disabled inputProps={{
            id: 'disabled-datepicker'
        }} />
    </>
);

disabled.storyName = 'Disabled';

export const readOnly = () => (
    <>
        <FormLabel htmlFor='readOnly-datepicker'>Date</FormLabel>
        <DatePicker defaultValue='12/12/2012'
            inputProps={{
                id: 'readOnly-datepicker'
            }}
            readOnly />
    </>
);


readOnly.storyName = 'ReadOnly';

export const openToDate = () => {
    const _openToDate = moment().year('2000').month(0).date(1);
    return (
        <>
            <FormLabel htmlFor='openTo-datepicker'>Date</FormLabel>
            <DatePicker
                inputProps={{
                    id: 'openTo-datepicker'
                }}
                openToDate={_openToDate} />
        </>
    );
};

export const localized = () => (
    <Container>
        <Row>
            <Column>
                <FormLabel htmlFor='es-datepicker'>La fecha</FormLabel>
                <DatePicker
                    inputProps={{
                        id: 'es-datepicker'
                    }}
                    locale='es' />
            </Column>
            <Column>
                <FormLabel htmlFor='fr-datepicker'>La date</FormLabel>
                <DatePicker
                    inputProps={{
                        id: 'fr-datepicker'
                    }}
                    locale='fr' />
            </Column>
        </Row>
    </Container>
);


localized.storyName = 'Localized DatePicker';

export const rangeSelection = () => (
    <Container>
        <Row>
            <Column>
                <div>
                    <FormLabel
                        htmlFor='rangeSelection'>
                        Select a date range
                    </FormLabel>
                    <DatePicker
                        enableRangeSelection
                        inputProps={{
                            id: 'rangeSelection'
                        }} />
                </div>
            </Column>
            <Column>
                <div>
                    <FormLabel
                        htmlFor='rangeSelectionDefaultValue'>
                        Select a date range (default set)
                    </FormLabel>
                    <DatePicker
                        defaultValue='12/04/1993 - 12/30/1992'
                        enableRangeSelection
                        inputProps={{
                            id: 'rangeSelectionDefaultValue'
                        }} />
                </div>
            </Column>
        </Row>
    </Container>
);

rangeSelection.storyName = 'Enabled Range Selection';

export const dateFormat = () => (
    <Container>
        <Row>
            <Column>
                <div>
                    <FormLabel
                        htmlFor='customDateFormatField'>
                        Custom date format
                    </FormLabel>
                    <DatePicker
                        dateFormat={
                            select(dateFormatOptionsLabel, dateFormatOptions, dateFormatDefaultValue, dateFormatGroupId)
                        }
                        inputProps={{
                            id: 'customDateFormatField'
                        }} />
                </div>
            </Column>
            <Column>
                <div>
                    <FormLabel
                        htmlFor='customDateFormatField2'>
                        Custom date format with defaultValue
                    </FormLabel>
                    <DatePicker
                        dateFormat={
                            select(dateFormatOptionsLabel, dateFormatOptions, dateFormatDefaultValue, dateFormatGroupId)
                        }
                        defaultValue='12/04/1993'
                        inputProps={{
                            id: 'customDateFormatField2'
                        }} />
                </div>
            </Column>
        </Row>
        <Row>
            <Column>
                <div>
                    <FormLabel
                        htmlFor='customDateFormatField3'>
                        DD.MM.YYYY in Hindi with defaultValue
                    </FormLabel>
                    <DatePicker
                        dateFormat='DD.MM.YYYY'
                        defaultValue='4.12.1993'
                        inputProps={{
                            id: 'customDateFormatField3'
                        }}
                        locale='hi' />
                </div>
            </Column>
            <Column>
                <div>
                    <FormLabel
                        htmlFor='customDateFormatField4'>
                        Custom date format range selection
                    </FormLabel>
                    <DatePicker
                        dateFormat={
                            select(dateFormatOptionsLabel, dateFormatOptions, dateFormatDefaultValue, dateFormatGroupId)
                        }
                        enableRangeSelection
                        inputProps={{
                            id: 'customDateFormatField4'
                        }} />
                </div>
            </Column>
        </Row>
        <Row>
            <Column>
                <div>
                    <FormLabel
                        htmlFor='customDateFormatField5'>
                        Unset date format, with French locale
                    </FormLabel>
                    <DatePicker
                        buttonLabel='debugz'
                        inputProps={{
                            id: 'customDateFormatField5'
                        }}
                        locale='fr' />
                </div>
            </Column>
            <Column>
                <div>
                    <FormLabel
                        htmlFor='customDateFormatField6'>
                        Unset date format, with null locale (uses ISO_DATE_FORMAT)
                    </FormLabel>
                    <DatePicker
                        buttonLabel='debugz'
                        defaultValue='17.3.20'
                        inputProps={{
                            id: 'customDateFormatField6'
                        }}
                        locale={null} />
                </div>
            </Column>
        </Row>

    </Container>
);

dateFormat.storyName = 'Date Formats';


export const validationStates = () => (
    <Container>
        <Row>
            <Column>
                <FormLabel htmlFor='error-state'>Date</FormLabel>
                <DatePicker
                    inputProps={{
                        id: 'error-state'
                    }}
                    validationState={{ state: 'error', text: 'Test validation state' }} />
            </Column>
            <Column>
                <FormLabel htmlFor='warning-state'>Date</FormLabel>
                <DatePicker
                    inputProps={{
                        id: 'warning-state'
                    }}
                    validationState={{ state: 'warning', text: 'Test validation state' }} />
            </Column>
            <Column>
                <FormLabel htmlFor='success-state'>Date</FormLabel>
                <DatePicker
                    inputProps={{
                        id: 'success-state'
                    }}
                    validationState={{ state: 'success', text: 'Test validation state' }} />
            </Column>
            <Column>
                <FormLabel htmlFor='info-state'>Date</FormLabel>
                <DatePicker
                    inputProps={{
                        id: 'info-state'
                    }}
                    validationState={{ state: 'information', text: 'Test validation state' }} />
            </Column>
        </Row>
    </Container>
);

validationStates.storyName = 'Validation States';

const tomorrow = moment().add(1, 'day').endOf('day').format('YYYYMMDD');
const nextDay = moment().add(2, 'day').endOf('day').format('YYYYMMDD');
const dayAfter = moment().add(3, 'day').endOf('day').format('YYYYMMDD');
const oneWeek = moment().add(7, 'day').endOf('day').format('YYYYMMDD');

const specialDays = {
    [tomorrow]: 1,
    [nextDay]: 2,
    [dayAfter]: 3,
    [oneWeek]: 4
};

export const specialDaysEx = () => (
    <>
        <FormLabel htmlFor='special-days'>Date</FormLabel>
        <DatePicker
            inputProps={{
                id: 'special-days'
            }}
            specialDays={specialDays} />
    </>
);

specialDaysEx.storyName = 'Special Days';

export const weekdayStartEx = () => (
    <>
        <FormLabel htmlFor='weekday-start'>Date</FormLabel>
        <DatePicker
            inputProps={{
                id: 'weekday-start'
            }}
            weekdayStart={number('weekdayStart', 1)} />
    </>
);

weekdayStartEx.storyName = 'Weekday Start (Monday Start)';

/**
 * Setting
 *
 * - `todayActionType` to `'select'`
 * - And localized non-empty string value for `localizedText.todayLabel`
 *
 * will show a footer action in the DatePicker popover.
 * Clicking this button selects today's date and closes the popover.
 *
 * This button will not be shown if
 *
 * - `enableRangeSelection` is true
 * - OR if today's date is disabled
 * */

export const localizedTodayFooterButton = () => (
    <>
        <Container>
            <Row>
                <Column>
                    <div>
                        <FormLabel
                            htmlFor='englishTodayButtonDP'>
                            Compact Datepicker with today selection button
                        </FormLabel>
                        <DatePicker
                            compact
                            inputProps={{
                                id: 'englishTodayButtonDP'
                            }}
                            localizedText={{
                                todayLabel: 'Today'
                            }}
                            todayActionType='select' />
                    </div>
                </Column>
                <Column>
                    <div>
                        <FormLabel
                            htmlFor='hindiTodayButtonDP'>
                            Datepicker with today selection button, custom locale, and default date
                        </FormLabel>
                        <DatePicker
                            defaultValue='३०/१२/१९९२'
                            inputProps={{
                                id: 'hindiTodayButtonDP'
                            }}
                            locale='hi'
                            localizedText={{
                                todayLabel: 'आज'
                            }}
                            todayActionType='select' />
                    </div>
                </Column>
            </Row>
        </Container>
    </>
);


/**
 * Setting
 *
 * - `todayActionType` to `'navigate'`
 * - And localized non-empty string value for `localizedText.todayLabel`
 *
 * will show a header action in the DatePicker popover.
 *
 * Clicking this button selects today's date but does not close the popover.
 * This might be useful for mobile use cases.
 * */

export const localizedTodayHeaderButton = () => (
    <Container>
        <Row>
            <Column>
                <div>
                    <FormLabel
                        htmlFor='englishTodayButtonDP'>
                        Compact Datepicker with today navigation button
                    </FormLabel>
                    <DatePicker
                        compact
                        inputProps={{
                            id: 'englishTodayButtonDP'
                        }}
                        localizedText={{
                            todayLabel: 'Today'
                        }}
                        todayActionType='navigate' />
                </div>
            </Column>
            <Column>
                <div>
                    <FormLabel
                        htmlFor='hindiTodayButtonDP'>
                        Datepicker with today navigation button, custom locale, and default date
                    </FormLabel>
                    <DatePicker
                        defaultValue='३०/१२/१९९२'
                        inputProps={{
                            id: 'hindiTodayButtonDP'
                        }}
                        locale='hi'
                        localizedText={{
                            todayLabel: 'आज'
                        }}
                        todayActionType='navigate' />
                </div>
            </Column>
        </Row>
    </Container>
);

export const withCustomFlipContainer = () => {
    const containerRef = useRef();
    const [flipContainer, setFlipContainer] = useState();

    useEffect(() => {
        setFlipContainer(containerRef.current);
    });

    return (
        <div style={{ alignItems: 'center', display: 'flex' }}>
            <div ref={containerRef} style={{
                border: '1px solid black',
                padding: '420px 40px 450px 240px'
            }}>
                <FormLabel htmlFor='flip-container'>Date</FormLabel>
                <DatePicker
                    inputProps={{
                        id: 'flip-container'
                    }}
                    popoverProps={{ flipContainer }} />
            </div>
            <div style={{
                backgroundColor: '#444',
                width: '180px',
                height: '120px'
            }} />
        </div>
    );
};


export const dev = () => (
    <>
        <FormLabel htmlFor='dev-datepicker'>Date</FormLabel>
        <DatePicker
            compact={boolean('compact', true)}
            dateFormat={
                select(dateFormatOptionsLabel, dateFormatOptions, 'DD/MM/YYYY')
            }
            defaultValue={text('Default Value', '14/06/2020 - 18/06/2020')}
            disableAfterDate={dateKnobToDate('disable after date', afterDateDefault)}
            disableBeforeDate={dateKnobToDate('disable before date', beforeDateDefault)}
            disableFutureDates={boolean('disable future dates', false)}
            disablePastDates={boolean('disable past dates', false)}
            disableWeekday={optionsKnob('disable weekdays', weekdayOptions, null, { display: 'check' })}
            disableWeekends={boolean('disable weekends', false)}
            disabledDateRanges={[
                [
                    dateKnobToDate('disable date range 1-1', disabledDateRangeFirstDefault),
                    dateKnobToDate('disable date range 1-2', disabledDateRangeSecondDefault)
                ],
                [
                    dateKnobToDate('disable date range 2-1', disabledDateRangeThirdDefault),
                    dateKnobToDate('disable date range 2-2', disabledDateRangeFourthDefault)
                ]
            ]}
            disabledDates={[dateKnobToDate('disable date', disabledDateDefault)]}
            enableRangeSelection={boolean('enableRangeSelection', true)}
            inputProps={{
                id: 'dev-datepicker'
            }}
            locale={text('locale', 'en')}
            localizedText={{
                todayLabel: text('localizedText.todayLabel', 'Today')
            }}
            onChange={action('on-change')}
            onDatePickerClose={action('on-date-picker-close')}
            onInputBlur={action('on-input-blur')}
            onInputFocus={action('on-input-focus')}
            openToDate={dateKnobToDate('open to date', new Date())}
            todayActionType={select('Today Action Type',
                {
                    'none': 'none',
                    'select': 'select',
                    'navigate': 'navigate'
                }
            )}
            validationState={select('Validation State',
                {
                    'none': '',
                    'success': { state: 'success', text: 'placeholder text' },
                    'error': { state: 'error', text: 'placeholder text' },
                    'information': { state: 'information', text: 'placeholder text' },
                    'warning': { state: 'warning', text: 'placeholder text' }
                }
            )}
            weekdayStart={number('weekdayStart', 0)} />
    </>
);

dev.storyName = 'Dev';

dev.parameters = { docs: { disable: true } };

export const primaryVisualStoryShotOnly = () => (
    <>
        <DatePicker
            popoverProps={{
                show: true
            }} />
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <hr />
    </>
);

export const localizedTodayFooterButtonVisualStoryShotOnly = () => (
    <>
        <Container>
            <Row>
                <Column>
                    <div>
                        <FormLabel
                            htmlFor='englishTodayButtonDP'>
                            Compact Datepicker with today navigation button
                        </FormLabel>
                        <DatePicker
                            compact
                            inputProps={{
                                id: 'englishTodayButtonDP'
                            }}
                            localizedText={{
                                todayLabel: 'Today'
                            }}
                            popoverProps={{
                                show: true
                            }}
                            todayActionType='select' />
                    </div>
                </Column>
                <Column>
                    <div>
                        <FormLabel
                            htmlFor='hindiTodayButtonDP'>
                            Datepicker with today navigation button, custom locale, and default date
                        </FormLabel>
                        <DatePicker
                            defaultValue='३०/१२/१९९२'
                            inputProps={{
                                id: 'hindiTodayButtonDP'
                            }}
                            locale='hi'
                            localizedText={{
                                todayLabel: 'आज'
                            }}
                            popoverProps={{
                                show: true
                            }}
                            todayActionType='select' />
                    </div>
                </Column>
            </Row>
        </Container>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <hr />
    </>
);


export const localizedTodayHeaderButtonVisualStoryShotOnly = () => (
    <>
        <Container>
            <Row>
                <Column>
                    <div>
                        <FormLabel
                            htmlFor='englishTodayButtonDP'>
                            Compact Datepicker with today navigation button
                        </FormLabel>
                        <DatePicker
                            compact
                            inputProps={{
                                id: 'englishTodayButtonDP'
                            }}
                            localizedText={{
                                todayLabel: 'Today'
                            }}
                            popoverProps={{
                                show: true
                            }}
                            todayActionType='navigate' />
                    </div>
                </Column>
                <div>
                    <FormLabel
                        htmlFor='hindiTodayButtonDP'>
                        Datepicker with today navigation button, custom locale, and default date
                    </FormLabel>
                    <DatePicker
                        defaultValue='३०/१२/१९९२'
                        inputProps={{
                            id: 'hindiTodayButtonDP'
                        }}
                        locale='hi'
                        localizedText={{
                            todayLabel: 'आज'
                        }}
                        popoverProps={{
                            show: true
                        }}
                        todayActionType='navigate' />
                </div>
                <Column />
            </Row>
        </Container>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <hr />
    </>
);

export const noStyles = () => (
    <>
        <FormLabel htmlFor='nostyles-datepicker'>Date</FormLabel>
        <DatePicker
            cssNamespace='xxx'
            inputProps={{
                id: 'nostyles-datepicker'
            }} />
    </>
);
noStyles.parameters = { docs: { disable: true } };
