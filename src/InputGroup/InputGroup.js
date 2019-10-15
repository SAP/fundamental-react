import classnames from 'classnames';
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

        const inputClasses = 'fd-input-group__input';

        const inputGroupClasses = classnames(
            className,
            'fd-input-group',
            { 'fd-input-group--compact': compact }
        );

        return (
            <div
                {...props}
                className={inputGroupClasses}>
                {React.Children.map(children, (child) => (
                    React.cloneElement(child, {
                        compact,
                        className: (child.type === InputGroup.Addon) ? '' : inputClasses
                    })
                ))}
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
    disableStyles: PropTypes.bool
};

export { InputGroup as __InputGroup };

export default withStyles(InputGroup, { cssFile: 'input-group', fonts: true });
