import PropTypes from 'prop-types';
import shortId from '../utils/shortId';
import withStyles from '../utils/WithStyles/WithStyles';
import React, { Component } from 'react';

class FormRadioGroup extends Component {
    constructor(props) {
        super(props);

        this.groupId = shortId.generate();
    }

    render() {
        const { children, customStyles, disabled, disableStyles, inline, onChange, ...props } = this.props;

        const disableCSS = disableStyles || customStyles ? true : false;

        return (
            <div
                {...props}>
                {React.Children.toArray(children).map(child => {
                    return React.cloneElement(child, {
                        disabled: child.props.disabled || disabled,
                        disableStyles: disableCSS,
                        inline: child.props.inline || inline,
                        name: child.props.name || this.groupId,
                        onChange: child.props.onChange || onChange
                    });
                })}
            </div>
        );
    }
}

FormRadioGroup.displayName = 'FormRadioGroup';

FormRadioGroup.propTypes = {
    children: PropTypes.node,
    customStyles: PropTypes.object,
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

export default withStyles(FormRadioGroup);
