import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

export const ListGroup = ({ children, className, ...props }) => {
    const listGroupClasses = classnames(
        'fd-list-group',
        className
    );

    return (
        <ul {...props} className={listGroupClasses}>
            {children}
        </ul>
    );
};

ListGroup.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};

export const ListGroupItem = ({ children, className, ...props }) => {
    const listGroupItemClasses = classnames(
        'fd-list-group__item',
        className
    );

    return (
        <li {...props} className={listGroupItemClasses}>
            {children}
        </li>

    );
};

ListGroupItem.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};

export const ListGroupItemActions = ({ children, className, ...props }) => {
    const listGroupItemActionsClasses = classnames(
        'fd-list-group__action',
        className
    );

    return (
        <span {...props} className={listGroupItemActionsClasses}>
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
