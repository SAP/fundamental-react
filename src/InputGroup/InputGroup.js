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
            disableStyles,
            state,
            ...props
        } = this.props;

        const inputClasses = 'fd-input-group__input';

        const inputGroupClasses = classnames(
            className,
            'fd-input-group',
            { [`is-${state}`]: state }
        );

        return (
            <div
                {...props}
                className={inputGroupClasses}>
                {React.Children.toArray(children).map(child => {
                    return React.cloneElement(child, {
                        compact,
                        className: (child.type.displayName === InputGroupAddon.displayName) ? '' : inputClasses
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
    disableStyles: PropTypes.bool,
    state: PropTypes.oneOf(FORM_STATES)
};

export default InputGroup;
