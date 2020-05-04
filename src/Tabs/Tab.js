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
    /** CSS class(es) to add to the element */
    className: PropTypes.string,
    /** Internal use only */
    disableStyles: PropTypes.bool,
    /** The icon to include. See the icon page for the list of icons */
    glyph: PropTypes.string,
    /** Value for the `id` attribute on the element */
    id: PropTypes.string,
    /** Internal use only */
    index: PropTypes.number,
    /** Additional props to be spread to the tab\'s `<a>` element */
    linkProps: PropTypes.object,
    /** Internal use only */
    selected: PropTypes.bool,
    /** Additional props to be spread to the tab content\'s `<div>` element */
    tabContentProps: PropTypes.object,
    /** Localized text for the heading */
    title: PropTypes.string,
    /** Internal use only */
    onClick: PropTypes.func
};

export default Tab;
