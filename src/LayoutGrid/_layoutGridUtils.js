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

export const SCREEN_SIZE_MAP = {
    'smallScreen': 'fd-col--',
    'mediumScreen': 'fd-col-md--',
    'largeScreen': 'fd-col-lg--',
    'xLargeScreen': 'fd-col-xl--'
};

export const mapSize = (action) => {
    const newObj = {};
    Object.keys(SCREEN_SIZE_MAP).forEach(size => {
        newObj[size] = action(size);
    });
    return newObj;
};

export const mapSizeClasses = (action) => {
    const newObj = {};
    Object.keys(SCREEN_SIZE_MAP).forEach(size => {
        newObj[`${SCREEN_SIZE_MAP[size]}${action(size)}`] = action(size);
    });
    return newObj;
};

export const BREAK_POINTS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12];
