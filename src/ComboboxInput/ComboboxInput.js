import React from 'react';
import PropTypes from 'prop-types';

// ------------------------------------------- Combobox Input ------------------------------------------
export const ComboboxInput = props => {
    const { id, children } = props;
    return (
        <div className="">
            {children}
        </div>
    );
};

ComboboxInput.propTypes = {
    id: PropTypes.string
};