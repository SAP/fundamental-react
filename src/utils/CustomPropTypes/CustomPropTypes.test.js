import CustomPropTypes from './CustomPropTypes';
import PropTypes from 'prop-types';

/* eslint-disable no-console */

describe('CustomPropTypes', () => {
    beforeEach(() => {
        console.error = jest.fn();
    });
    describe('arrayOfTuples', () => {
        describe('prop value validator', () => {
            it('should return null if prop value is an array of tuples matching the type', () => {
                const props = { 'arr': [
                    [2, 2],
                    [1, 4]
                ] };
                const propName = 'arr';
                const componentName = 'TestComponent';
                expect(CustomPropTypes.arrayOfTupleTypes(PropTypes.number)(props, propName, componentName)).toBeNull();
            });
            it('should return an error if prop is not an array', () => {
                const props = { 'arr': 'ten' };
                const propName = 'arr';
                const componentName = 'TestComponent';
                expect(CustomPropTypes.arrayOfTupleTypes(PropTypes.number)(props, propName, componentName)).toEqual(
                    new Error('Invalid property arr supplied to TestComponent needs to be an array.')
                );
            });
            it('should return an error if something in the array is not an array', () => {
                const props = { 'arr': [[1, 1], 'ze'] };
                const propName = 'arr';
                const componentName = 'TestComponent';
                expect(CustomPropTypes.arrayOfTupleTypes(PropTypes.number)(props, propName, componentName)).toEqual(
                    new Error('Invalid property arr supplied to TestComponent needs to be an array of arrays with length 2.')
                );
            });
            it('should return an error if something in the array is not an array of length 2', () => {
                const props = { 'arr': [[1, 1], [3, 4], [1, 2, 3]] };
                const propName = 'arr';
                const componentName = 'TestComponent';
                expect(CustomPropTypes.arrayOfTupleTypes(PropTypes.number)(props, propName, componentName)).toEqual(
                    new Error('Invalid property arr supplied to TestComponent needs to be an array of arrays with length 2.')
                );
            });
            it('should log if first array type does not match', () => {
                const props = { 'arr': [['ten', 1]] };
                const propName = 'arr';
                const componentName = 'TestComponent';
                CustomPropTypes.arrayOfTupleTypes(PropTypes.number)(props, propName, componentName);
                expect(console.error).toHaveBeenCalledWith(
                    'Warning: Failed arr[0] type: Invalid arr[0] `arr[0]` of type `string` supplied to `TestComponent`, expected `number`.'
                );
            });
            it('should log if second array type does not match', () => {
                const props = { 'arr': [[1, 'ten']] };
                const propName = 'arr';
                const componentName = 'TestComponent';
                CustomPropTypes.arrayOfTupleTypes(PropTypes.number)(props, propName, componentName);
                expect(console.error).toHaveBeenCalledWith(
                    'Warning: Failed arr[1] type: Invalid arr[1] `arr[1]` of type `string` supplied to `TestComponent`, expected `number`.'
                );
            });
            it('should log if second array type does not match object type', () => {
                const props = { 'arr': [[{ foo: 12 }, { bar: 12 }]] };
                const propName = 'arr';
                const componentName = 'TestComponent';
                CustomPropTypes.arrayOfTupleTypes(PropTypes.shape({ foo: PropTypes.number.isRequired }))(props, propName, componentName);
                expect(console.error).toHaveBeenCalledWith(
                    'Warning: Failed arr[1] type: The arr[1] `arr[1].foo` is marked as required in `TestComponent`, but its value is `undefined`.'
                );
            });
        });
    });

    describe('range', () => {
        describe('propType creation', () => {
            it('should log a console error if no arguments are passed', () => {
                CustomPropTypes.range();
                expect(console.error).toHaveBeenCalledTimes(1);
            });
            it('should log a console error if min value is NaN', () => {
                CustomPropTypes.range('test', 10);
                expect(console.error).toHaveBeenCalledTimes(1);
            });
            it('should log a console error if max value is NaN', () => {
                CustomPropTypes.range(1, 'test');
                expect(console.error).toHaveBeenCalledTimes(1);
            });
            it('should log a console error if min value is greater than or equal to max value', () => {
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
