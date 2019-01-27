const ANONYMOUS = '<<anonymous>>';

/* eslint-disable no-console */

const wrapValidator = (validator, typeName, typeChecker = null) => {
    return Object.assign(validator.bind(), {
        typeName,
        typeChecker,
        isRequired: Object.assign(validator.isRequired.bind(), {
            typeName,
            typeChecker,
            typeRequired: true
        })
    });
};

const createChainableTypeChecker = (validate) => {
    const checkType = (isRequired, props, propName, componentName, location, propFullName) => {
        componentName = componentName || ANONYMOUS;
        propFullName = propFullName || propName;

        const value = props[propName];

        if (typeof value === 'undefined' || value === null) {
            if (isRequired) {
                return new TypeError(`The ${location} \`${propFullName}\` is marked as required in \`${componentName}\`, but its value is \`${value === null ? 'null' : typeof value}\`.`);
            }
            return null;
        } else {
            return validate(props, propName, componentName, location, propFullName);
        }
    };

    let chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
};

const range = (min, max) => {
    if (isNaN(min)) {
        console.error('The \`min\` parameter supplied to the \`range\` propType is required and must be a \`number\`.');
        return () => null;
    }

    if (isNaN(max)) {
        console.error('The \`max\` parameter supplied to the \`range\` propType is required and must be a \`number\`.');
        return () => null;
    }

    if (min >= max) {
        console.error('In the \`range\` propType, the \`min\` value must be less than the \`max\` value.');
        return () => null;
    }

    const validate = (props, propName, componentName, location, propFullName) => {
        const value = props[propName];

        // If no value is provided, don't fail validation.
        if (typeof value === 'undefined' || value === null) {
            return null;
        }

        if (isNaN(value)) {
            return new TypeError(`Invalid ${location} \`${propFullName}\` of type \`${typeof value}\` supplied to \`${componentName}\`, expected \`number\`.`);
        }

        if (value < min || value > max) {
            return new Error(`The ${location} \`${propFullName}\` supplied to \`${componentName}\` has a value of \`${value}\`, which is not in the range \`${min}\` to \`${max}\` (inclusive).`);
        }

        return null;
    };

    return wrapValidator(createChainableTypeChecker(validate), 'range', { min, max });
};

export default { range };
