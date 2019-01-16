import PropTypes from 'prop-types';
import React from 'react';

export const ListGroup = ({ children, className, ...props }) => {
    return (
        <ul className={`fd-list-group${className ? ' ' + className : ''}`} {...props}>
            {children}
        </ul>
    );
};

ListGroup.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};

export const ListGroupItem = ({ children, className, ...props }) => {
    return (
        <li className={`fd-list-group__item${className ? ' ' + className : ''}`} {...props}>
            {children}
        </li>

    );
};

ListGroupItem.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};

export const ListGroupItemActions = ({ children, className, ...props }) => {
    return (
        <span className={`fd-list-group__action${className ? ' ' + className : ''}`} {...props}>
            {children}
        </span>
    );
};

ListGroupItemActions.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};

export const ListGroupItemCheckbox = (props) => {
    const { children } = props;
    return (
        <div className='fd-form__item fd-form__item--check'>
            <label className='fd-form__label' htmlFor='CndSd399'>
                <input className='fd-form__control' id='CndSd399'
                    type='checkbox' />
                {children}
            </label>
        </div>
    );
};

ListGroupItemCheckbox.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};
