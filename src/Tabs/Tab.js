import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import withStyles from '../utils/WithStyles/WithStyles';


const Tab = React.forwardRef(({ title, disabled, glyph, id, selected, onClick,
    tabContentProps, linkProps, index, className, disableStyles, ...props }, ref) => {

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
                aria-disabled={disabled}
                aria-selected={selected}
                className={linkClasses}
                href={!disabled ? `#${id}` : null}
                onClick={!disabled ? (event) => {
                    onClick(event, index);
                } : null}
                role='tab'>
                {title}
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
    customStyles: PropTypes.object,
    disabled: PropTypes.bool,
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

export { Tab as __Tab };

export default withStyles(Tab, { cssFile: 'tabs', fonts: true });
