import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { TOGGLE_SIZES } from '../utils/constants';

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = { checked: !!props.checked };
    }

    handleChange = (e) => {
        this.setState({
            checked: !this.state.checked
        }, () => {
            this.props.onChange(e);
        });
    }

    render() {
        const { size, id, checked, disabled, children, className, labelProps, inputProps, onChange, ...rest } = this.props;

        const toggleClasses = classnames(
            'fd-form__item',
            'fd-form__item--check',
            className
        );

        const spanClasses = classnames(
            'fd-toggle',
            {
                // There is no `m` technically, but if you provide size m, you get the default size.
                [`fd-toggle--${size}`]: !!size && size !== 'm'
            },
            'fd-form__control'
        );

        return (
            <div
                {...rest}
                className={toggleClasses}>
                <label
                    {...labelProps}
                    className='fd-form__label'
                    htmlFor={id}>
                    <span
                        className={spanClasses}>
                        <input
                            {...inputProps}
                            checked={this.state.checked}
                            disabled={disabled}
                            id={id}
                            onChange={this.handleChange}
                            type='checkbox' />
                        <span className='fd-toggle__switch' role='presentation' />
                    </span>
                    {children}
                </label>
            </div>
        );
    }
}

Toggle.displayName = 'Toggle';

Toggle.propTypes = {
    checked: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    disabled: PropTypes.bool,
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
