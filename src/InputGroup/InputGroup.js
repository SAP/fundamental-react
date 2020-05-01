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

        const getClassName = (child) => classnames(
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
                            className: getClassName(child)
                        });
                    })}
                </div>
                {validationState?.text?.length > 0 && (<FormMessage
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
    /** Node(s) to render within the component */
    children: PropTypes.node,
    /** CSS class(es) to add to the element */
    className: PropTypes.string,
    /** Set to **true** to enable compact mode */
    compact: PropTypes.bool,
    /** Set to **true** to mark component as disabled and make it non-interactive */
    disabled: PropTypes.bool,
    /** Internal use only */
    disableStyles: PropTypes.bool,
    /** An object identifying a validation message.  The object will include properties for `state` and `text`; _e.g._, \`{ state: \'warning\', text: \'This is your last warning\' }\` */
    validationState: PropTypes.shape({
        /** State of validation */
        state: PropTypes.oneOf(FORM_MESSAGE_TYPES),
        /** Text of the validation message */
        text: PropTypes.string
    })
};

export default InputGroup;
