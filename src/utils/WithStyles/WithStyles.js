/* eslint-disable react/no-multi-comp */
import hoistNonReactStatic from 'hoist-non-react-statics';
import PropTypes from 'prop-types';
import React from 'react';

export default function withStyles(WrappedComponent, defaults) {

    const componentName = WrappedComponent.displayName || WrappedComponent.name;

    class WithStyles extends React.Component {
        render() {
            const {
                customStyles,
                disableStyles,
                forwardedRef,
                ...otherProps
            } = this.props;

            if (!disableStyles) {
                if (defaults && defaults.fonts) {
                    require('fundamental-styles/dist/fonts.css');
                }

                if (defaults && defaults.icons) {
                    require('fundamental-styles/dist/icon.css');
                }

                if (!customStyles && defaults && defaults.cssFile) {
                    Array.isArray(defaults.cssFile) ?
                        defaults.cssFile.forEach(file => {
                            require('fundamental-styles/dist/' + file + '.css');
                        }) :
                        require('fundamental-styles/dist/' + defaults.cssFile + '.css');
                } else {
                    customStyles;
                }
            }
            const disableCSS = disableStyles || customStyles ? true : false;

            return (
                <WrappedComponent
                    disableStyles={disableCSS}
                    ref={forwardedRef}
                    {...otherProps} />
            );
        }
    }

    WithStyles.displayName = componentName;

    WithStyles.propTypes = {
        customStyles: PropTypes.object,
        disableStyles: PropTypes.bool,
        forwardedRef: PropTypes.oneOfType([
            PropTypes.func,
            PropTypes.shape({ current: PropTypes.any })
        ])
    };

    //HOCs do not automatically pass refs as they are not technically props
    function forwardRef(props, ref) {
        return <WithStyles {...props} forwardedRef={ref} />;
    }

    forwardRef.displayName = WithStyles.displayName;

    //HOCs do not pass wrapped components the static methods from the original component
    const hoistedComp = hoistNonReactStatic(React.forwardRef(forwardRef), WrappedComponent);

    hoistedComp.displayName = componentName;

    return hoistedComp;
}
