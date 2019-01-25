
const range = (start, end) => {
    return (props, propName, componentName) => {
        const value = props[propName];

        if (typeof value === 'undefined') {
            return null;
        }

        if (isNaN(value)) {
            return new TypeError(`${componentName}: ${propName} must be a non-NaN number.`);
        }

        if (isNaN(start)) {
            return new TypeError(`${componentName}: Range start must be a non-NaN number.`);
        }

        if (isNaN(end)) {
            return new TypeError(`${componentName}: Range end must be a non-NaN number.`);
        }

        if (start > end) {
            return new Error(`${componentName}: Range start must be less than range end.`);
        }

        if (value >= start && value <= end) {
            return null;
        } else {
            return new Error(`${componentName}: ${propName} must be within the range ${start} to ${end}`);
        }
    };
};

export default {range};
