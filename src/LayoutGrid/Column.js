import classnamesBind from 'classnames/bind';
import CustomPropTypes from '../utils/CustomPropTypes/CustomPropTypes';
import PropTypes from 'prop-types';
import React from 'react';
import { mapSize, mapSizeClasses, resolveSpan, validSpan } from './_layoutGridUtils';
// eslint-disable-next-line sort-imports
import styles from 'fundamental-styles/dist/layout-grid.css';

const classnames = classnamesBind.bind(styles);

const Column = React.forwardRef(({ children, className, offset, offsetPosition, span, ...props }, ref) => {

    const offsets = mapSize((size) => resolveSpan(offset, size, false));

    const offsetPositionModifier = offsetPosition === 'after' ? '-after' : '';

    const responsiveColClasses = mapSizeClasses((size) => {
        if (validSpan(span)) return span;
        if (span && validSpan(span[size])) return span[size];
        return false;
    });

    const colClasses = classnames(
        'fd-col',
        responsiveColClasses,
        {
            [`fd-col--offset${offsetPositionModifier}-${offsets.smallScreen}`]: offsets.smallScreen,
            [`fd-col-md--offset${offsetPositionModifier}-${offsets.mediumScreen}`]: offsets.mediumScreen,
            [`fd-col-lg--offset${offsetPositionModifier}-${offsets.largeScreen}`]: offsets.largeScreen,
            [`fd-col-xl--offset${offsetPositionModifier}-${offsets.xLargeScreen}`]: offsets.xLargeScreen
        },
        className
    );

    return (
        <div
            {...props}
            className={colClasses}
            ref={ref}>
            {children}
        </div>
    );
});

Column.displayName = 'Column';

Column.propTypes = {
    /** Node(s) to render within the component */
    children: PropTypes.node,
    /** CSS class(es) to add to the element */
    className: PropTypes.string,
    /** How many cells out of 12 should the column be offset by on each screen size. Defaults to none.
     *
     * Example usage:
     *
     * * `offset={4}` -for all screen sizes
     * * `offset={{ smallScreen: 8}}` -for small screen sizes only, none for other sizes
     * * `offset={{ smallScreen: 6, xLargeScreen: 1}}` -so on
     * * `offset={{ smallScreen: 6, mediumScreen: 5, largeScreen: 3, xLargeScreen: 1}}` -so forth
    */
    offset: CustomPropTypes.validColumnProp,
    /** Are the offsets to be applied `before` or `after` the column? */
    offsetPosition: PropTypes.oneOf(['after', 'before']),
    /** How many cells out of 12 should the column occupy on each screen size. Defaults to 12.
     *
     * Example usage:
     *
     * * `span={4}` -for all screen sizes
     * * `span={{ smallScreen: 8}}` -for small screen sizes only, none for other sizes
     * * `span={{ smallScreen: 6, xLargeScreen: 1}}` -so on
     * * `span={{ smallScreen: 6, mediumScreen: 5, largeScreen: 3, xLargeScreen: 1}}` -so forth
    */
    span: CustomPropTypes.validColumnProp
};

Column.defaultProps = {
    offsetPosition: 'before'
};


export default Column;
