import moment from 'moment';
import { isDateBetween, isDateEnabled } from './dateUtils';

describe('dateUtils', () => {
    describe('isDateBetween', () => {
        it('should return true if date is between the range', () => {
            const date = moment('10/13/2020', 'MM/DD/YYYY');
            const dateTuple = ['10/12/2020', '10/14/2020'];
            expect(isDateBetween({ date, dateTuple, format: 'MM/DD/YYYY' })).toBe(true);
        });
        it('should return true if date is equal to one of the range values', () => {
            const date = moment('10/12/2020', 'MM/DD/YYYY');
            const dateTuple = ['10/12/2020', '10/14/2020'];
            expect(isDateBetween({ date, dateTuple, format: 'MM/DD/YYYY' })).toBe(true);
        });
        it('should return false if date is outside of the range values', () => {
            const date = moment('10/11/2020', 'MM/DD/YYYY');
            const dateTuple = ['10/12/2020', '10/14/2020'];
            expect(isDateBetween({ date, dateTuple, format: 'MM/DD/YYYY' })).toBe(false);
        });
        it('should return true if date is between of the range values when they are flipped and range is enabled', () => {
            const date = moment('10/13/2020', 'MM/DD/YYYY');
            const dateTuple = ['10/14/2020', '10/12/2020'];
            expect(isDateBetween({ date, dateTuple, format: 'MM/DD/YYYY', isRangeEnabled: true })).toBe(true);
        });
        it('should return false if date is between of the range values when they are flipped and range is enabled', () => {
            const date = moment('10/11/2020', 'MM/DD/YYYY');
            const dateTuple = ['10/14/2020', '10/12/2020'];
            expect(isDateBetween({ date, dateTuple, format: 'MM/DD/YYYY', isRangeEnabled: true })).toBe(false);
        });
        it('should return false if date is between of the range values when they are flipped and range is enabled (fallback format)', () => {
            const date = moment('2020-10-11');
            const dateTuple = ['2020-10-14', '2020-10-12'];
            expect(isDateBetween({ date, dateTuple, isRangeEnabled: true })).toBe(false);
        });
    });
    describe('isDateEnabled', () => {
        it('should return false if day is in disabledDates', () => {
            const props = {
                dateFormat: 'MM/DD/YYYY',
                disabledDates: ['10/13/2020'],
                disabledDateRanges: []
            };
            expect(isDateEnabled(moment('10/13/2020', 'MM/DD/YYYY'), props)).toBe(false);
        });
        it('should return true if day is between disabledDates', () => {
            const props = {
                dateFormat: 'MM/DD/YYYY',
                disabledDates: ['10/13/2020', '10/15/2020'],
                disabledDateRanges: []
            };
            expect(isDateEnabled(moment('10/14/2020', 'MM/DD/YYYY'), props)).toBe(true);
        });
        it('should return false if day is in a disabledDateRange (inclusive)', () => {
            const props = {
                dateFormat: 'MM/DD/YYYY',
                disabledDates: [],
                disabledDateRanges: [['10/13/2020', '10/15/2020']]
            };
            expect(isDateEnabled(moment('10/13/2020', 'MM/DD/YYYY'), props)).toBe(false);
            expect(isDateEnabled(moment('10/14/2020', 'MM/DD/YYYY'), props)).toBe(false);
            expect(isDateEnabled(moment('10/15/2020', 'MM/DD/YYYY'), props)).toBe(false);
        });
        it('should return true if day is outside all disabledDateRanges', () => {
            const props = {
                dateFormat: 'MM/DD/YYYY',
                disabledDates: [],
                disabledDateRanges: [['10/13/2020', '10/15/2020'], ['10/18/2020', '10/20/2020']]
            };
            expect(isDateEnabled(moment('10/11/2020', 'MM/DD/YYYY'), props)).toBe(true);
            expect(isDateEnabled(moment('10/16/2020', 'MM/DD/YYYY'), props)).toBe(true);
            expect(isDateEnabled(moment('10/21/2020', 'MM/DD/YYYY'), props)).toBe(true);
        });
    });
});
