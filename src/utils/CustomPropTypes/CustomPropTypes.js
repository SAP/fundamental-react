import PropTypes from 'prop-types';
import { SCREEN_SIZE_MAP } from '../constants';
import { validSpan } from '../../LayoutGrid/_layoutGridUtils';
const ANONYMOUS = '<<anonymous>>';

/* eslint-disable no-console */

const arrayOfTupleTypes = (propType) => (props, propName, componentName) => {
    if (!Array.isArray(props[propName])) {
        return new Error(`Invalid property ${propName} supplied to ${componentName} needs to be an array.`);
    }

    for (let innerProp of props[propName]) {
        if (!Array.isArray(innerProp) || innerProp.length !== 2) {
            return new Error(`Invalid property ${propName} supplied to ${componentName} needs to be an array of arrays with length 2.`);
        }
        PropTypes.checkPropTypes({ [`${propName}[0]`]: propType }, { [`${propName}[0]`]: innerProp[0] }, `${propName}[0]`, componentName);
        PropTypes.checkPropTypes({ [`${propName}[1]`]: propType }, { [`${propName}[1]`]: innerProp[1] }, `${propName}[1]`, componentName);
    }

    return null;
};

const elementOrArrayOfElements = () => {
    // Element is not defined unless the Browser API is defined
    if (typeof Element === 'undefined') {
        return PropTypes.any;
    }
    return PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.instanceOf(Element)),
        PropTypes.instanceOf(Element)
    ]);
};
const validColumnProp = (props, propName, componentName) => {
    const spanValue = props?.[propName];
    if (!spanValue) return;
    switch (typeof spanValue) {
        case 'number':
            if (!validSpan(spanValue)) {
                return new Error(
                    `Invalid property ${propName} supplied to ${componentName}. Value should be a number between 1-12 (including).`
                );
            }
            break;
        case 'object':
            Object.keys(SCREEN_SIZE_MAP).forEach(size => {
                const spanForSize = spanValue?.[size];
                if (!validSpan(spanForSize)) {
                    return new Error(
                        `Invalid property ${propName}.${size} supplied to ${componentName}. Value should be a number between 1-12 (including).`
                    );
                }
            });
            break;
        default:
            break;
    }
};

const wrapValidator = (validator, typeName, typeChecker = null) => {
    // eslint-disable-next-line compat/compat
    return Object.assign(validator.bind(), {
        typeName,
        typeChecker,
        // eslint-disable-next-line compat/compat
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
            let missMatchType = '';
            let missMatchKeys = [];
            if (valueKeys.length < shapeKeys.length) {
                missMatchType = 'Missing';
                missMatchKeys = shapeKeys.filter(key => !valueKeys.some(k => key === k));
            } else {
                missMatchType = 'Extra';
                missMatchKeys = valueKeys.filter(key => !shapeKeys.some(k => key === k));
            }
            return new Error(`The ${location} \`${propFullName}\` supplied to \`${componentName}\` has ${valueKeys.length} string(s) when ${shapeKeys.length} were expected. ${missMatchType} ${missMatchKeys.map(key => `\`${key}\``).join(', ')}.`);
        }

        return null;
    };

    return wrapValidator(createChainableTypeChecker(validate), 'i18n', obj);
};

export default { arrayOfTupleTypes, elementOrArrayOfElements, range, i18n, validColumnProp };
