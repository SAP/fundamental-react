import classnames from 'classnames';
import { FORM_MESSAGE_TYPES } from '../utils/constants';
import FormMessage from '../Forms/_FormMessage';
import InputGroupAddon from './_InputGroupAddon';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
class InputGroup extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (!this.props.disableStyles) {
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
            validationState,
            ...props
        } = this.props;

        const inputGroupClasses = classnames(
            className,
            'fd-input-group',
            {
                'is-disabled': disabled,
                [`is-${validationState?.state}`]: validationState?.state
            },
        );

        const getClassNames = (child) => classnames(
            {
                'fd-input-group__input': child.type.displayName !== InputGroupAddon.displayName
            },
            child.props.className
        );

        return (
            <>
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
                {validationState && (<FormMessage
                    disableStyles={disableStyles}
                    type={validationState.state}>
                    {validationState.text}
                </FormMessage>)}
            </>
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
    validationState: PropTypes.shape({
        state: PropTypes.oneOf(FORM_MESSAGE_TYPES),
        text: PropTypes.string
    })
};

export default InputGroup;
