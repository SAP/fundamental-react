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

const i18n = (obj) => {
    if (!obj) {
        console.error('The shape parameter supplied to the \`i18n\` propType is required.');
        return () => null;
    }

    const shapeKeys = Object.keys(obj);

    const validate = (props, propName, componentName, location, propFullName) => {
        const value = props[propName];

        if (!value) {
            return new Error(`The ${location} \`${propFullName}\` was not supplied to \`${componentName}\`.`);
        }

        const valueKeys = Object.keys(value);

        if (valueKeys.length !== shapeKeys.length) {
            let missingKeys = shapeKeys.filter(key => !valueKeys.some(k => key === k));
            return new Error(`The ${location} \`${propFullName}\` supplied to \`${componentName}\` only has ${valueKeys.length} strings when ${shapeKeys.length} were expected. Missing ${missingKeys.map(key => `\`${key}\``).join(', ')}.`);
        }

        return null;
    };

    return wrapValidator(createChainableTypeChecker(validate), 'i18n', obj);
};

export default { i18n };
