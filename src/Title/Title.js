import classnames from 'classnames';
import CustomPropTypes from '../utils/CustomPropTypes/CustomPropTypes';
import PropTypes from 'prop-types';
import React from 'react';
import 'fundamental-styles/dist/title.css';

/** Use an **Title** component to display a title or heading. Note that only one H1 should appear on a page, and headings should only appear in ascending order without skipping a level; i.e. even if there are only 3 levels on a page, the order must be H1-H2-H3, and no other levels used. */
const Title = React.forwardRef(({ className, children, level, levelStyle, wrap, ...props }, ref) => {

    const levelClass = levelStyle ? `h${levelStyle}` : `h${level}`;

    const headingClasses = classnames(
        'fd-title',
        `fd-title--${levelClass}`,
        {
            'fd-title--wrap': !!wrap
        },
        className
    );

    const HeadingTag = `h${level}`;

    return (
        <HeadingTag
            {...props}
            className={headingClasses}
            ref={ref}>
            {children}
        </HeadingTag>
    );
});

Title.displayName = 'Title';

Title.propTypes = {
    /** Determines the heading tag rendered on the page, also known as the semantic level of the heading. */
    level: CustomPropTypes.range(1, 6).isRequired,
    /** Node(s) to render within the component */
    children: PropTypes.node,
    /** CSS class(es) to add to the element */
    className: PropTypes.string,
    /** If the desired visual appearance is different from the default style given to the semantic level of the header, provide the desired heading level style to apply. */
    levelStyle: CustomPropTypes.range(1, 6),
    /** Set to **true** if the Title text should wrap instead of truncate. */
    wrap: PropTypes.bool
};

export default Title;
