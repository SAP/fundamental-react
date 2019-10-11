import classnames from 'classnames';
import FormInput from '../Forms/FormInput';
import { INPUT_GROUP_TYPES } from '../utils/constants';
import PropTypes from 'prop-types';
import withStyles from '../utils/WithStyles/WithStyles';
import React, { Component } from 'react';
/*eslint-disable*/
class InputGroup extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {
            actions,
            children,
            className,
            compact,
            disableStyles,
            inputType,
            ...props
        } = this.props;

        const inputClasses = classnames(
            'fd-input-group__input',
            [{ 'fd-input--no-number-spinner': inputType === 'number' }],
        );

        const inputGroupClasses = classnames(
            className,
            'fd-input-group'
        );

        children = React.Children.map(children, (child) => {
            return React.cloneElement(child, {
                actions: actions,
                compact: compact,
                className: (child.type === FormInput) ? inputClasses : '',
                inputType: inputType
            });
        });

        console.log(this.props);

        return (
            <div
                {...props}
                className={inputGroupClasses}
                compact={compact}>
                {children}
            </div>
        );
    }
}

InputGroup.displayName = 'InputGroup';

InputGroup.propTypes = {
    actions: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    compact: PropTypes.bool,
    customStyles: PropTypes.object,
    disableStyles: PropTypes.bool,
    inputType: PropTypes.oneOf(INPUT_GROUP_TYPES)
};

InputGroup.defaultProps = {
    inputType: 'text'
};

InputGroup.propDescriptions = {
    actions: 'Set to **true** to enable an input with actions. Actions can be shown with a text label or icon.',
    inputType: 'Value for the `type` attribute on the `<input>` element.'
};

export { InputGroup as __InputGroup };

export default withStyles(InputGroup, { cssFile: 'input-group', fonts: true });
