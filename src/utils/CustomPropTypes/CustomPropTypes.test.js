import CustomPropTypes from './CustomPropTypes';

describe('CustomPropTypes', () => {
    describe('range', () => {
        it('should return null if prop value is null', () => {
            const props = {'prop1': null};
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
            const props = {'prop1': 'test'};
            const propName = 'prop1';
            const componentName = 'TestComponent';
            expect(CustomPropTypes.range(1, 10)(props, propName, componentName)).toBeInstanceOf(TypeError);
        });
        it('should return a TypeError if rangeStart value is NaN', () => {
            const props = {'prop1': 5};
            const propName = 'prop1';
            const componentName = 'TestComponent';
            expect(CustomPropTypes.range('test', 10)(props, propName, componentName)).toBeInstanceOf(TypeError);
        });
        it('should return a TypeError if rangeEnd value is NaN', () => {
            const props = {'prop1': 5};
            const propName = 'prop1';
            const componentName = 'TestComponent';
            expect(CustomPropTypes.range(1, 'test')(props, propName, componentName)).toBeInstanceOf(TypeError);
        });
        it('should return an error if start value is greater than end value', () => {
            const props = {'prop1': 5};
            const propName = 'prop1';
            const componentName = 'TestComponent';
            expect(CustomPropTypes.range(10, 1)(props, propName, componentName)).toBeInstanceOf(Error);
        });
        it('should return an error if the value is outside of the range', () => {
            const props = {'prop1': 11};
            const propName = 'prop1';
            const componentName = 'TestComponent';
            expect(CustomPropTypes.range(1, 10)(props, propName, componentName)).toBeInstanceOf(Error);
        });
        it('should return null if value is inside of specified range', () => {
            const props = {'prop1': 5};
            const propName = 'prop1';
            const componentName = 'TestComponent';
            expect(CustomPropTypes.range(1, 10)(props, propName, componentName)).toBe(null);
        });
    });
});
