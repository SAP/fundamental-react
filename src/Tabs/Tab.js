import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

export const Tab = (props) => {
    const { title, className, disabled, glyph, id, selected, tabLinkProps, ...rest } = props;

    // css classes used for tabs
    const linkClasses = classnames(
        className,
        'fd-tabs__link',
        {
            [`sap-icon--${glyph}`]: !!glyph
        }
    );

    return (
        <a
            {...rest}
            {...tabLinkProps}
            aria-controls={id}
            aria-disabled={disabled}
            aria-selected={selected}
            className={linkClasses}
            href={!disabled ? `#${id}` : null}
            onClick={!disabled ? (event) => {
                props.onClick(event, id);
            } : null}
            role='tab'>
            {title}
        </a>
    );
};
Tab.displayName = 'Tab';

Tab.propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    glyph: PropTypes.string,
    id: PropTypes.string,
    selected: PropTypes.bool,
    title: PropTypes.string
};

Tab.propDescriptions = {
    glyph: 'Icon to display on tab',
    selected: 'Set to **true** to mark tab as selected.',
    tabLinkProps: 'Additional props to be spread to the tab\'s link element.',
    title: 'String to display on tab'
};
