import React from 'react';
import PropTypes from 'prop-types';

export const ActionBar = (props) => {
    const { title, hasActions, children } = props;
    return (
        <div className="fd-action-bar">
            <div className="fd-action-bar__header">
                <h1 className="fd-action-bar__title">
                    {title}
                </h1>
            </div>
            {
                hasActions ? (
                    <div class="fd-action-bar__actions">
                { children }
                    </div>
                ) : null
            }
        </div>
    );
}

ActionBar.propTypes = {
    title: PropTypes.string.isRequired,
    hasActions: PropTypes.bool
}


