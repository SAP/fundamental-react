import classnames from 'classnames';
import FormItem from '../Forms/FormItem';
import FormLabel from '../Forms/FormLabel';
import PropTypes from 'prop-types';
import React from 'react';
import { TOGGLE_SIZES } from '../utils/constants';
class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = { checked: !!props.checked };
    }

    componentDidMount() {
        if (!this.props.disableStyles) {
            require('fundamental-styles/dist/icon.css');
            require('fundamental-styles/dist/fonts.css');
            require('fundamental-styles/dist/toggle.css');
        }
    }

    handleChange = (e) => {
        this.setState({
            checked: !this.state.checked
        }, () => {
            this.props.onChange(e);
        });
    }

    render() {
        const { size, id, checked, disabled, disableStyles, children, className, labelProps, inputProps, onChange, ...rest } = this.props;

        const spanClasses = classnames(
            'fd-toggle',
            {
                // There is no `m` technically, but if you provide size m, you get the default size.
                [`fd-toggle--${size}`]: !!size && size !== 'm'
            }
        );

        return (
            <FormItem
                {...rest}
                className={className}
                disableStyles={disableStyles}>
                <FormLabel
                    disabled={disabled}
                    {...labelProps}
                    disableStyles={disableStyles}
                    htmlFor={id}>
                    <span className={spanClasses}>
                        <input
                            {...inputProps}
                            checked={this.state.checked}
                            className='fd-toggle__input'
                            disabled={disabled}
                            id={id}
                            onChange={this.handleChange}
                            type='checkbox' />
                        <span className='fd-toggle__switch' role='presentation' />
                    </span>
                    {children}
                </FormLabel>
            </FormItem>
        );
    }
}

Toggle.displayName = 'Toggle';

Toggle.propTypes = {
    checked: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    disableStyles: PropTypes.bool,
    id: PropTypes.string,
    inputProps: PropTypes.object,
    labelProps: PropTypes.object,
    size: PropTypes.oneOf(TOGGLE_SIZES),
    onChange: PropTypes.func
};

Toggle.defaultProps = {
    onChange: () => { }
};

Toggle.propDescriptions = {
    checked: 'Set to true for component to be checked on render.'
};

export default Toggle;
