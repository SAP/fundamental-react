import React from 'react';

export const ListGroup = (props) => {
    const { children } = props;
    return (
        <ul className='fd-list-group'>
            {children}
        </ul>
    );
}

export const ListGroupItem = (props) => {
    const { children } = props;
    return (
        <li className='fd-list-group__item'>
            {children}
        </li>

    );
}

export const ListGroupItemActions = (props) => {
    const { children } = props;
    return (
        <span className='fd-list-group__action'>
            {children}
        </span>
    );
}

export const ListGroupItemCheckbox = (props) => {
    const { children } = props;
    return (
        <div className='fd-form__item fd-form__item--check'>
            <label className='fd-form__label' for='CndSd399'>
                <input type='checkbox' className='fd-form__control' id='CndSd399' />
                {children}
            </label>
        </div>
    );
}
