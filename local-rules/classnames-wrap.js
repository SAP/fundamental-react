module.exports = {
    create: (context) => ({
        JSXAttribute(node) {
            const propName = node.name && node.name.name;
            if (node.value && node.value.expression) {
                const isLiteralOrTemplateLiteral = node.value.expression.type.includes('Literal');
                if (propName === 'className' && isLiteralOrTemplateLiteral) {
                    context.report({
                        node,
                        message: 'The className prop must be wrapped in "classnames()" to support css-modules'
                    });
                }
            }
        }
    })
};
