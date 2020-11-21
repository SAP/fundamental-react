import { SCREEN_SIZE_MAP } from '../utils/constants';

export const validSpan = (span) => typeof span === 'number' && 0 < span && span < 13;


export const getNodeSpan = (node, size) => {
    const nodeSpan = node?.props?.span;
    if (validSpan(nodeSpan)) return nodeSpan;
    if (nodeSpan && validSpan(nodeSpan[size])) return nodeSpan[size];
    return 0;
};


export const resolveSpan = (propValue, size, fallback) => {
    if (validSpan(propValue)) return propValue;
    if (propValue && validSpan(propValue[size])) return propValue[size];
    return fallback;
};

export const hasSpan = (node, size) => {
    const nodeSpan = node?.props?.span;
    return validSpan(nodeSpan) || (nodeSpan && validSpan(nodeSpan[size]));
};



export const calculateSpan = (child, avail, siblings, size ) => {
    let calculatedSpan = 12;
    if (validSpan(child?.props?.span)) {
        calculatedSpan = child?.props?.span;
    } else if (validSpan(child?.props?.span?.[size])) {
        calculatedSpan = child?.props?.span?.[size];
    } else {
        calculatedSpan = Math.round(avail[size] / siblings[size]);
        avail[size] = avail[size] - calculatedSpan;
        siblings[size] = siblings[size] - 1;
    }
    return 0 < calculatedSpan && calculatedSpan < 13 ? calculatedSpan : 12;
};

export const mapSize = (action) => {
    const newObj = {};
    Object.keys(SCREEN_SIZE_MAP).forEach(size => {
        newObj[size] = action(size);
    });
    return newObj;
};

export const mapSizeClasses = (action, namespace) => {
    const newObj = {};
    Object.keys(SCREEN_SIZE_MAP).forEach(size => {
        newObj[`${namespace}-${SCREEN_SIZE_MAP[size]}${action(size)}`] = action(size);
    });
    return newObj;
};

export const BREAK_POINTS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12];
