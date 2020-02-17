import classnames from 'classnames';
import { FORM_STATES } from '../utils/constants';
import InputGroupAddon from './_InputGroupAddon';
import PropTypes from 'prop-types';
import withStyles from '../utils/WithStyles/WithStyles';
import React, { Component } from 'react';
class InputGroup extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            children,
            className,
            compact,
            customStyles,
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
    customStyles: PropTypes.object,
    disableStyles: PropTypes.bool,
    state: PropTypes.oneOf(FORM_STATES)
};

export { InputGroup as __InputGroup };

export default withStyles(InputGroup, { cssFile: 'input-group', fonts: true });
