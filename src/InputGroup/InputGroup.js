import classnames from 'classnames';
import FormInput from '../Forms/FormInput';
import { INPUT_GROUP_ADDON_TYPES } from '../utils/constants';
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
            actions,
            addon,
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
                actions: actions,
                addon: addon,
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
    actions: PropTypes.bool,
    addon: PropTypes.oneOf(INPUT_GROUP_ADDON_TYPES),
    children: PropTypes.node,
    className: PropTypes.string,
    compact: PropTypes.bool,
    customStyles: PropTypes.object,
    disableStyles: PropTypes.bool
};

InputGroup.defaultProps = {
    addon: 'text'
};

InputGroup.propDescriptions = {
    actions: 'Set to **true** to enable an input with actions. Actions can be shown with a text label or icon.',
    addon: 'Type of addon to be displayed next to the input field.'
};

export { InputGroup as __InputGroup };

export default withStyles(InputGroup, { cssFile: 'input-group', fonts: true });
