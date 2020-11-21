const classnamesWrap = require('./local-rules/classnames-wrap');
const sortImports = require('./local-rules/sort-imports');
// This will make rules accessible in eslintrc as `local-rules/classnames-wrap`
// see eslint-plugin-local-rules https://github.com/cletusw/eslint-plugin-local-rules for more info
module.exports = {
    'classnames-wrap': classnamesWrap,
    'sort-imports': sortImports
};
