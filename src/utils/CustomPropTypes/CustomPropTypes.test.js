import CustomPropTypes from './CustomPropTypes';

/* eslint-disable no-console */

describe('CustomPropTypes', () => {
    describe('range', () => {
        describe('propType creation', () => {
            it('should log a console error if no arguments are passed', () => {
                console.error = jest.fn();
                CustomPropTypes.range();
                expect(console.error).toHaveBeenCalledTimes(1);
            });
            it('should log a console error if min value is NaN', () => {
                console.error = jest.fn();
                CustomPropTypes.range('test', 10);
                expect(console.error).toHaveBeenCalledTimes(1);
            });
            it('should log a console error if max value is NaN', () => {
                console.error = jest.fn();
                CustomPropTypes.range(1, 'test');
                expect(console.error).toHaveBeenCalledTimes(1);
            });
            it('should log a console error if min value is greater than or equal to max value', () => {
                console.error = jest.fn();
                CustomPropTypes.range(10, 1);
                expect(console.error).toHaveBeenCalledTimes(1);
            });
        });
        describe('prop value validator', () => {
            it('should return null if prop value is null', () => {
                const props = { 'prop1': null };
                const propName = 'prop1';
                const componentName = 'TestComponent';
                expect(CustomPropTypes.range(1, 10)(props, propName, componentName)).toBeNull();
            });
            it('should return null if prop value is undefined', () => {
                const props = {};
                const propName = 'prop1';
                const componentName = 'TestComponent';
                expect(CustomPropTypes.range(1, 10)(props, propName, componentName)).toBeNull();
            });
            it('should return a TypeError if prop value is NaN', () => {
                const props = { 'prop1': 'test' };
                const propName = 'prop1';
                const componentName = 'TestComponent';
                expect(CustomPropTypes.range(1, 10)(props, propName, componentName)).toBeInstanceOf(TypeError);
            });
            it('should return an error if the value is outside of the range', () => {
                const props = { 'prop1': 11 };
                const propName = 'prop1';
                const componentName = 'TestComponent';
                expect(CustomPropTypes.range(1, 10)(props, propName, componentName)).toBeInstanceOf(Error);
            });
            it('should return null if value is inside of specified range', () => {
                const props = { 'prop1': 5 };
                const propName = 'prop1';
                const componentName = 'TestComponent';
                expect(CustomPropTypes.range(1, 10)(props, propName, componentName)).toBe(null);
            });
        });
    });
});
