import classnamesBind from 'classnames/bind';
import Icon from '../Icon/Icon';
import PropTypes from 'prop-types';
import React from 'react';
import withStyles from '../utils/withStyles';
import iconStyles from 'fundamental-styles/dist/icon.css';
import tabStyles from 'fundamental-styles/dist/tabs.css';

const classnames = classnamesBind.bind({
    ...iconStyles,
    ...tabStyles
});

const Tab = React.forwardRef(({ title, glyph, id, selected, onClick,
    tabContentProps, linkProps, index, className, cssNamespace, ...props }, ref) => {

    const tabClasses = classnames(
        className,
        `${cssNamespace}-tabs__item`
    );

    return (
        <li
            {...props}
            aria-controls={id}
            aria-selected={selected}
            className={tabClasses}
            key={id}
            ref={ref}
            role='tab'>
            <a
                {...linkProps}
                className={classnames(`${cssNamespace}-tabs__link`)}
                href={`#${id}`}
                onClick={(event) => onClick(event, index)}>
                {glyph ?
                    <span className={classnames('fd-tabs__icon')}>
                        <Icon ariaLabel={title} glyph={glyph} />
                    </span>
                    :
                    <span className={classnames(`${cssNamespace}-tabs__tag`)}>{title}</span>
                }
            </a>
        </li>
    );
});

Tab.displayName = 'Tab';

Tab.defaultProps = {
    onClick: () => { }
};

Tab.propTypes = {
    /** Localized text for the heading */
    title: PropTypes.string.isRequired,
    /** CSS class(es) to add to the element */
    className: PropTypes.string,
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
    /** Internal use only */
    onClick: PropTypes.func
};

export default withStyles(Tab);
