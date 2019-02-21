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
ListGroup.displayName = 'ListGroup';

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
ListGroupItem.displayName = 'ListGroupItem';

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
ListGroupItemActions.displayName = 'ListGroupItemActions';

ListGroupItemActions.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};

export const ListGroupItemCheckbox = ({ children, labelProps, inputProps, ...props }) => {
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
