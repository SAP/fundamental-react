import React from 'react';
import PropTypes from 'prop-types';

export class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = { checked: props.checked };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        this.setState({ checked: !this.state.checked });
    }

    render() {
        const { size, id, disabled, children } = this.props;

        return (
            <div className="fd-form__item fd-form__item--check">
                <label className="fd-form__label" htmlFor={id}>
                    <span className={`fd-toggle${size ? ' fd-toggle--' + size : ''} fd-form__control`}>
                        <input
                            type="checkbox"
                            id={id}
                            checked={this.state.checked}
                            onChange={this.handleChange}
                            disabled={disabled}
                        />
                        <span className="fd-toggle__switch" role="presentation" />
                    </span>
                    {children}
                </label>
            </div>
        );
    }
}

Toggle.propTypes = {
    size: PropTypes.oneOf(['', 'xs', 's', 'l']),
    id: PropTypes.string,
    disabled: PropTypes.bool
};
