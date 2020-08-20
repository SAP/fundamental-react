export const validSpan = (span) => typeof span === 'number' && 0 < span && span < 13;


export const getSpan = (node, size) => {
    const nodeSpan = node?.props?.span;
    if (validSpan(nodeSpan)) return nodeSpan;
    if (nodeSpan && validSpan(nodeSpan[size])) return nodeSpan[size];
    return 0;
};

export const hasSpan = (node, size) => {
    const nodeSpan = node?.props?.span;
    return validSpan(nodeSpan) || (nodeSpan && validSpan(nodeSpan[size]));
};

const screenSizes = ['smallScreen', 'mediumScreen', 'largeScreen', 'xLargeScreen'];

export const mapSize = (action) => {
    const newObj = {};
    screenSizes.forEach(size => {
        newObj[size] = action(size);
    });
    return newObj;
};

export const BREAK_POINTS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12];
