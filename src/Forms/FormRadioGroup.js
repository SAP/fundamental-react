import PropTypes from 'prop-types';
import shortId from '../utils/shortId';
import React, { Component } from 'react';

class FormRadioGroup extends Component {
    constructor(props) {
        super(props);

        this.groupId = shortId.generate();
    }

    render() {
        const { children, disabled, disableStyles, inline, onChange } = this.props;

        return (
            <>
                {React.Children.toArray(children).map(child => {
                    return React.cloneElement(child, {
                        disabled: child.props.disabled || disabled,
                        disableStyles: child.props.disableStyles || disableStyles,
                        inline: child.props.inline || inline,
                        name: child.props.name || this.groupId,
                        onChange: child.props.onChange || onChange
                    });
                })}
            </>
        );
    }
}

FormRadioGroup.displayName = 'FormRadioGroup';

FormRadioGroup.propTypes = {
    children: PropTypes.node,
    disabled: PropTypes.bool,
    disableStyles: PropTypes.bool,
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
