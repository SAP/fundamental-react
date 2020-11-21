/* eslint-disable no-console */
import classnamesBind from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';
import withStyles from '../utils/withStyles';
import { calculateSpan, getNodeSpan, hasSpan, mapSize } from './_layoutGridUtils';
import styles from 'fundamental-styles/dist/layout-grid.css';

const classnames = classnamesBind.bind(styles);

const Row = React.forwardRef(({ children, className, cssNamespace, ...props }, ref) => {

    const rowClasses = classnames(
        `${cssNamespace}-row`,
        className
    );
    let occupiedSpans = mapSize(() => 0);
    let unspannedChildren = mapSize(() => 0);


    React.Children.forEach(children, (child) => {
        occupiedSpans = mapSize((size) => occupiedSpans[size] + getNodeSpan(child, size));
        unspannedChildren = mapSize((size) => unspannedChildren[size] + (hasSpan(child, size) ? 0 : 1));
    });

    let availableSpans = mapSize((size) => 12 - (( -1 < occupiedSpans[size] && occupiedSpans[size] < 13 ) ? occupiedSpans[size] : 0));

    let spannedChildren = React.Children.map(children, (child) => {
        const childSpan = mapSize((size) => calculateSpan(child, availableSpans, unspannedChildren, size));
        return React.cloneElement(child, {
            span: childSpan
        });
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

export default withStyles(Row);
