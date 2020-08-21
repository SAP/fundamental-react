/* eslint-disable no-console */
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { getNodeSpan, hasSpan, mapSize, validSpan } from './_layoutGridUtils';
import 'fundamental-styles/dist/layout-grid.css';

const Row = React.forwardRef(({ children, className, ...props }, ref) => {

    const rowClasses = classnames(
        'fd-row',
        className
    );
    let occupiedSpans = mapSize(() => 0);
    let unspannedChildren = mapSize(() => 0);


    React.Children.forEach(children, (child) => {
        occupiedSpans = mapSize((size) => occupiedSpans[size] + getNodeSpan(child, size));
        unspannedChildren = mapSize((size) => unspannedChildren[size] + (hasSpan(child, size) ? 0 : 1));
    });

    let availableSpans = mapSize((size) => 12 - (( -1 < occupiedSpans[size] && occupiedSpans[size] < 13 ) ? occupiedSpans[size] : 0));

    let spannedChildren = [];

    const calculateSpan = (child, avail, siblings, size ) => {
        let calculatedSpan = 12;
        if (validSpan(child?.props?.span)) {
            calculatedSpan = child?.props?.span;
        } else if (validSpan(child?.props?.span?.[size])) {
            calculatedSpan = child?.props?.span?.[size];
        } else {
            calculatedSpan = Math.round(avail[size] / siblings[size]);
            availableSpans[size] = availableSpans[size] - calculatedSpan;
            unspannedChildren[size] = unspannedChildren[size] - 1;
        }
        return 0 < calculatedSpan && calculatedSpan < 13 ? calculatedSpan : 12;
    };

    React.Children.forEach(children, (child) => {
        const childSpan = mapSize((size) => calculateSpan(child, availableSpans, unspannedChildren, size));
        spannedChildren.push(React.cloneElement(child, {
            span: childSpan
        }));
    });


    return (
        <div
            {...props}
            className={rowClasses}
            ref={ref}>
            {spannedChildren}
        </div>
    );
});

Row.displayName = 'Row';

Row.propTypes = {
    /** Node(s) to render within the component */
    children: PropTypes.node,
    /** CSS class(es) to add to the element */
    className: PropTypes.string
};

export default Row;
