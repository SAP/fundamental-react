import classnames from 'classnames';
import FormInput from '../Forms/FormInput';
import InputGroupAddon from './_InputGroupAddon';
import PropTypes from 'prop-types';
import withStyles from '../utils/WithStyles/WithStyles';
import React, { Component } from 'react';

class InputGroup extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {
            children,
            className,
            compact,
            disableStyles,
            ...props
        } = this.props;

        const inputClasses = classnames(
            'fd-input-group__input'
        );

        const inputGroupClasses = classnames(
            className,
            'fd-input-group',
            [{ 'fd-input-group--compact': compact }]
        );

        children = React.Children.map(children, (child) => {
            return React.cloneElement(child, {
                compact: compact,
                className: (child.type === InputGroup.InputGroupAddon) ? '' : inputClasses
            });
        });

        return (
            <div
                {...props}
                className={inputGroupClasses}>
                {children}
            </div>
        );
    }
}

InputGroup.Addon = InputGroupAddon;
InputGroup.Input = FormInput;

InputGroup.displayName = 'InputGroup';

InputGroup.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    compact: PropTypes.bool,
    customStyles: PropTypes.object,
    disableStyles: PropTypes.bool
};

export { InputGroup as __InputGroup };

export default withStyles(InputGroup, { cssFile: 'input-group', fonts: true });
