module.exports = {
    'extends': ['@commitlint/config-conventional'],
    rules: {
        2,
        'always',
        'scope-enum': [
            ['code', 'docs', 'e2e', 'release', 'deps', 'deps-dev', 'changelog', 'ci']
        ],
        'body-max-line-length': [2, 'always', 200],
        'footer-max-line-length': [2, 'always', 200],
        'header-max-length': [2, 'always', 200]
    }
};
