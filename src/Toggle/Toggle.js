import React from 'react';
import PropTypes from 'prop-types';

export const Toggle = (props) => {
    const { size, id, children } = props;
    return (
        <div className="fd-form__item fd-form__item--check">
            <label className="fd-form__label" for={id}>
                <span className={`fd-toggle${size ? ' fd-toggle--' + size : ''} fd-form__control`}>
                    <input type="checkbox" name="" value="" id={id} />
                    <span className="fd-toggle__switch" role="presentation"></span>
                </span>
                    {children}
            </label>
        </div>
    );
}

Toggle.propTypes = {
    size: PropTypes.string,
    id: PropTypes.string
}