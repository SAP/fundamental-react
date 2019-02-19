import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

export const Tab = (props) => {
    const { title,
        className,
        disabled,
        glyph,
        id,
        selected,
        onClick,
        tabContentProps,
        linkProps,
        ...rest } = props;

    // css classes used for tabs
    const linkClasses = classnames(
        className,
        'fd-tabs__link',
        {
            [`sap-icon--${glyph}`]: !!glyph
        }
    );

    return (
        <li
            {...rest}
            className='fd-tabs__item'
            key={id}>
            <a
                {...linkProps}
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
        </li>
    );
};
Tab.displayName = 'Tab';

Tab.defaultProps = {
    onClick: () => { }
};

Tab.propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    glyph: PropTypes.string,
    id: PropTypes.string,
    linkProps: PropTypes.object,
    selected: PropTypes.bool,
    tabContentProps: PropTypes.object,
    title: PropTypes.string,
    onClick: PropTypes.func
};

Tab.propDescriptions = {
    glyph: 'Icon to display on tab',
    selected: 'Set to **true** to mark tab as selected.',
    title: 'String to display on tab',
    tabContentProps: 'Additional props to be spread to the tab content\'s <div> element.',
    linkProps: 'Additional props to be spread to the tab\'s <li> element.'
};
