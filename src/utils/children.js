import React from 'react';

export const flattenChildren = children => React.Children.toArray(children)
    .reduce((result, child) => {
        if (child.type === React.Fragment) {
            return [
                ...result,
                ...flattenChildren(child.props.children)
            ];
        } else {
            return [...result, child];
        }
    }, []);
