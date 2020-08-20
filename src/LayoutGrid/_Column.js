import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { BREAK_POINTS, validSpan } from './_gridUtils';
import 'fundamental-styles/dist/layout-grid.css';

const Column = React.forwardRef(({ children, className, offset, offsetPosition, span, ...props }, ref) => {


    const smallScreenOffset = validSpan(offset) ? offset : validSpan(offset?.smallScreen) && offset.smallScreen;
    const mediumScreenOffset = validSpan(offset) ? offset : validSpan(offset?.mediumScreen) && offset.mediumScreen;
    const largeScreenOffset = validSpan(offset) ? offset : validSpan(offset?.largeScreen) && offset.largeScreen;
    const xLargeScreenOffset = validSpan(offset) ? offset : validSpan(offset?.xLargeScreen) && offset.xLargeScreen;

    const offsetPositionModifier = offsetPosition === 'after' ? '-after' : '';
    const colClasses = classnames(
        'fd-col',
        `fd-col--${span?.smallScreen || span || 12}`,
        `fd-col-md--${span?.mediumScreen || span || 12}`,
        `fd-col-lg--${span?.largeScreen || span || 12}`,
        `fd-col-xl--${span?.xLargeScreen || span || 12}`,
        {
            [`fd-col--offset${offsetPositionModifier}-${smallScreenOffset}`]: validSpan(offset) || validSpan(offset?.smallScreen) || false,
            [`fd-col-md--offset${offsetPositionModifier}-${mediumScreenOffset}`]: validSpan(offset) || validSpan(offset?.mediumScreen) || false,
            [`fd-col-lg--offset${offsetPositionModifier}-${largeScreenOffset}`]: validSpan(offset) || validSpan(offset?.largeScreen) || false,
            [`fd-col-xl--offset${offsetPositionModifier}-${xLargeScreenOffset}`]: validSpan(offset) || validSpan(offset?.xLargeScreen) || false
        },
        className
    );

    return (
        <div
            {...props}
            className={colClasses}
            ref={ref}>
            {/* {span?.smallScreen}, {span?.mediumScreen}, {span?.largeScreen}, {span?.xLargeScreen} */}
            {children}
        </div>
    );
});

Column.displayName = 'Col';

Column.propTypes = {
    /** Node(s) to render within the component */
    children: PropTypes.node,
    /** CSS class(es) to add to the element */
    className: PropTypes.oneOf(['after', 'before']),
    /** How many cells out of 12 should the column be offset by. */
    offset: PropTypes.oneOf(
        PropTypes.shape({
            smallScreen: PropTypes.oneOf(BREAK_POINTS),
            mediumScreen: PropTypes.oneOf(BREAK_POINTS),
            largeScreen: PropTypes.oneOf(BREAK_POINTS),
            xLargeScreen: PropTypes.oneOf(BREAK_POINTS)
        }),
        PropTypes.oneOf(BREAK_POINTS)
    ),
    /** Are the offsets to be applied `before` or `after` the column? */
    offsetPosition: PropTypes.string,
    /** How many cells out of 12 should the column occupy on each screen size. Defaults to 12. */
    span: PropTypes.oneOf(
        PropTypes.shape({
            smallScreen: PropTypes.oneOf(BREAK_POINTS),
            mediumScreen: PropTypes.oneOf(BREAK_POINTS),
            largeScreen: PropTypes.oneOf(BREAK_POINTS),
            xLargeScreen: PropTypes.oneOf(BREAK_POINTS)
        }),
        PropTypes.oneOf(BREAK_POINTS)
    )
};

Column.defaultProps = {
    offsetPosition: 'before'
};


export default Column;
