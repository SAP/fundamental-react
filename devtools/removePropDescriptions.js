exports.default = function(babel) {
    // eslint-disable-next-line no-unused-vars
    const { types: t } = babel;

    return {
        name: 'babel-transform-remove-prop-descriptions',
        visitor: {
            AssignmentExpression(path) {
                const { node } = path;

                if (node.left.property && node.left.property.name && node.left.property.name === 'propDescriptions') {
                    path.remove(node.left);
                }
            }
        }
    };
};

module.exports = exports.default;
