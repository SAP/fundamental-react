import PropTypes from 'prop-types';
import React from 'react';

const ListGroupItemCheckbox = ({ children, labelProps, inputProps, ...props }) => {
    return (
        <div {...props} className='fd-form__item fd-form__item--check'>
            <label
                {...labelProps}
                className='fd-form__label'
                htmlFor='CndSd399'>
                <input
                    {...inputProps}
                    className='fd-form__control'
                    id='CndSd399'
                    type='checkbox' />
                {children}
            </label>
        </div>
    );
};

ListGroupItemCheckbox.displayName = 'ListGroupItemCheckbox';

ListGroupItemCheckbox.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    inputProps: PropTypes.object,
    labelProps: PropTypes.object
};

export default ListGroupItemCheckbox;
