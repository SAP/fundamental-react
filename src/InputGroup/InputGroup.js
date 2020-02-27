import classnames from 'classnames';
import { FORM_STATES } from '../utils/constants';
import InputGroupAddon from './_InputGroupAddon';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
class InputGroup extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (!this.props.disableStyles) {
            require('fundamental-styles/dist/fonts.css');
            require('fundamental-styles/dist/input-group.css');
        }
    }

    render() {
        const {
            children,
            className,
            compact,
            disabled,
            disableStyles,
            state,
            ...props
        } = this.props;

        const inputGroupClasses = classnames(
            className,
            'fd-input-group',
            {
                [`is-${state}`]: state,
                'is-disabled': disabled
            }
        );

        const getClassNames = (child) => classnames(
            {
                'fd-input-group__input': child.type.displayName !== InputGroupAddon.displayName
            },
            child.props.className
        );

        return (
            <div
                {...props}
                className={inputGroupClasses}>
                {React.Children.toArray(children).map(child => {
                    return React.cloneElement(child, {
                        compact,
                        disabled,
                        className: getClassNames(child)
                    });
                })}
            </div>
        );
    }
}

InputGroup.Addon = InputGroupAddon;

InputGroup.displayName = 'InputGroup';

InputGroup.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    compact: PropTypes.bool,
    disabled: PropTypes.bool,
    disableStyles: PropTypes.bool,
    state: PropTypes.oneOf(FORM_STATES)
};

export default InputGroup;
