import classnames from 'classnames';
import { FORM_MESSAGE_TYPES } from '../utils/constants';
import FormValidationOverlay from '../Forms/_FormValidationOverlay';
import InputGroupAddon from './_InputGroupAddon';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import 'fundamental-styles/dist/input-group.css';

/** An **InputGroup** includes form inputs with add-ons that allow the user to
better understand the information being entered. */
class InputGroup extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            children,
            className,
            compact,
            disabled,
            validationOverlayProps,
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
                'fd-input-group__input': !child.props.className?.includes('fd-tokenizer')
            },
            child.props.className
        );

        const inputGroup = (
            <div
                {...props}
                className={inputGroupClasses}>
                {React.Children.toArray(children).map(child => {
                    if (child?.type?.displayName === InputGroupAddon.displayName) {
                        return React.cloneElement(child, {
                            compact,
                            disabled
                        });
                    }
                    return React.cloneElement(child, {
                        compact,
                        disabled,
                        className: getClassName(child),
                        validationState: child.props.validationState && null // remove duplicate validation state from child component
                    });
                })}
            </div>
        );

        return validationState?.state ? (
            <FormValidationOverlay
                {...validationOverlayProps}
                control={inputGroup}
                validationState={validationState} />
        ) : inputGroup;
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
    /** Additional props to be spread to the ValidationOverlay */
    validationOverlayProps: PropTypes.shape({
        /** Additional classes to apply to validation popover's outermost `<div>` element  */
        className: PropTypes.string,
        /** Additional props to be spread to the ValdiationOverlay's FormMessage component */
        formMessageProps: PropTypes.object,
        /** Additional classes to apply to validation popover's popper `<div>` element  */
        popperClassName: PropTypes.string,
        /** CSS class(es) to add to the ValidationOverlay's reference `<div>` element */
        referenceClassName: PropTypes.string,
        /** Additional props to be spread to the popover's outermost `<div>` element */
        wrapperProps: PropTypes.object
    }),
    /** An object identifying a validation message.  The object will include properties for `state` and `text`; _e.g._, \`{ state: \'warning\', text: \'This is your last warning\' }\` */
    validationState: PropTypes.shape({
        /** State of validation: 'error', 'warning', 'information', 'success' */
        state: PropTypes.oneOf(FORM_MESSAGE_TYPES),
        /** Text of the validation message */
        text: PropTypes.string
    })
};

export default InputGroup;
