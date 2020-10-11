import CssNamespaceContext from './_CssNamespaceContext';
import hoistNonReactStatics from 'hoist-non-react-statics';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';

export default (WrappedComponent) => {
    const Component = React.forwardRef((props, ref) => {
        const cssNamespaceContext = useContext(CssNamespaceContext);

        // if no context exists, become the provider
        if (!cssNamespaceContext) {
            return (
                <CssNamespaceContext.Provider value={props.cssNamespace}>
                    <WrappedComponent
                        {...props}
                        ref={ref} />
                </CssNamespaceContext.Provider>
            );
        }

        return (
            <WrappedComponent
                {...props}
                cssNamespace={cssNamespaceContext}
                ref={ref} />
        );
    });

    hoistNonReactStatics(Component, WrappedComponent);

    Component.displayName = WrappedComponent.displayName || WrappedComponent.name;

    Component.defaultProps = {
        ...WrappedComponent.defaultProps,
        cssNamespace: 'fd'
    };

    Component.propTypes = {
        ...WrappedComponent.propTypes,
        /** Namespace to use as the prefix for CSS classnames */
        cssNamespace: PropTypes.string
    };

    return Component;
};
