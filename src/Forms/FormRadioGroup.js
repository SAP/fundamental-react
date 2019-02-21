import PropTypes from 'prop-types';
import shortId from '../utils/shortId';
import React, { Component } from 'react';

class FormRadioGroup extends Component {
    constructor(props) {
        super(props);

        this.groupId = shortId.generate();
    }

    render() {
        const { children, disabled, inline, onChange, ...props } = this.props;

        return (
            <div
                {...props}>
                {React.Children.map(children, child => {
                    if (React.isValidElement(child)) {
                        return React.cloneElement(child, {
                            disabled: child.props.disabled || disabled,
                            inline: child.props.inline || inline,
                            name: child.props.name || this.groupId,
                            onChange: child.props.onChange || onChange
                        });
                    } else {
                        return child;
                    }
                })}
            </div>
        );
    }
}

FormRadioGroup.displayName = 'FormRadioGroup';

FormRadioGroup.propTypes = {
    children: PropTypes.node,
    disabled: PropTypes.bool,
    inline: PropTypes.bool,
    onChange: PropTypes.func
};

FormRadioGroup.defaultProps = {
    onChange: () => {}
};

FormRadioGroup.propDescriptions = {
    inline: 'Set to **true** to display radio buttons in a row.'
};

export default FormRadioGroup;
