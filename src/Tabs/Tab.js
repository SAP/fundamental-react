import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

const Tab = React.forwardRef(({ title, glyph, id, selected, onClick,
    tabContentProps, linkProps, index, className, disableStyles, ...props }, ref) => {

    useEffect(() => {
        if (!disableStyles) {
            require('fundamental-styles/dist/tabs.css');
        }
    }, []);

    const tabClasses = classnames(
        className,
        'fd-tabs__item'
    );

    // css classes used for tabs
    const linkClasses = classnames(
        'fd-tabs__link',
        {
            [`sap-icon--${glyph}`]: !!glyph
        }
    );

    return (
        <li
            {...props}
            className={tabClasses}
            key={id}
            ref={ref}>
            <a
                {...linkProps}
                aria-controls={id}
                aria-selected={selected}
                className={linkClasses}
                href={`#${id}`}
                onClick={(event) => onClick(event, index)}
                role='tab'>
                <span className='fd-tabs__tag'>{title}</span>
            </a>
        </li>
    );
});

Tab.displayName = 'Tab';

Tab.defaultProps = {
    onClick: () => { }
};

Tab.propTypes = {
    className: PropTypes.string,
    disableStyles: PropTypes.bool,
    glyph: PropTypes.string,
    id: PropTypes.string,
    index: PropTypes.number,
    linkProps: PropTypes.object,
    selected: PropTypes.bool,
    tabContentProps: PropTypes.object,
    title: PropTypes.string,
    onClick: PropTypes.func
};

Tab.propDescriptions = {
    glyph: 'Icon to display on the tab.',
    index: '_INTERNAL USE ONLY._',
    selected: '_INTERNAL USE ONLY._',
    title: 'Localized text to display on the tab.',
    tabContentProps: 'Additional props to be spread to the tab content\'s `<div>` element.',
    linkProps: 'Additional props to be spread to the tab\'s `<a>` element.',
    onClick: '_INTERNAL USE ONLY._'
};

export default Tab;
