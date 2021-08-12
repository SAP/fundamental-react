import classnamesBind from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';
import withStyles from '../utils/withStyles';

import barStyles from 'fundamental-styles/dist/bar.css';

const classnames = classnamesBind.bind(barStyles);

const BAR_TYPES = [
    'default',
    'header',
    'subheader',
    'header-with-subheader',
    'footer',
    'floating-footer'
];

/** The **Bar** component is a container that holds titles, buttons and input
 * controls. Its contents are distributed into three areas: left, middle and
 * right. This component’s primary function is to display page **headers** and
 * **footers**. It is mainly used to construct a **Page**, and acts as a
 * building block for other components like **Dialog**, **Popover** etc.
 *
 * @returns {Node} Bar component
 */
function Bar({
    className,
    cozy,
    cssNamespace,
    leftComponents,
    middleComponents,
    rightComponents,
    type,
    ...props
}) {
    let Tag;
    switch (type) {
        case 'header':
        case 'header-with-subheader':
            Tag = 'header';
            break;
        case 'footer':
        case 'floating-footer':
            Tag = 'footer';
            break;
        default:
            Tag = 'div';
    }

    const barClasses = classnames(
        `${cssNamespace}-bar`,
        {
            [`${cssNamespace}-bar--${type}`]: type !== 'default',
            [`${cssNamespace}-bar--cozy`]: cozy
        },
        className,
    );

    const elementClasses = classnames(`${cssNamespace}-bar__element`);

    return (
        <Tag className={barClasses} {...props}>
            {leftComponents && <div className={classnames(`${cssNamespace}-bar__left`)}>
                {leftComponents.map((child, index) => (
                    <div className={elementClasses} key={index}>{child}</div>
                ))}
            </div>}
            {middleComponents && <div className={classnames(`${cssNamespace}-bar__middle`)}>
                {middleComponents.map((child, index) => (
                    <div className={elementClasses} key={index}>{child}</div>
                ))}
            </div>}
            {rightComponents && <div className={classnames(`${cssNamespace}-bar__right`)}>
                {rightComponents.map((child, index) => (
                    <div className={elementClasses} key={index}>{child}</div>
                ))}
            </div>}
        </Tag>
    );
}
Bar.propTypes = {
    /** CSS class(es) to add to the element */
    className: PropTypes.string,
    /** Set to **true** to enable cozy mode */
    cozy: PropTypes.bool,
    /** Node(s) to render within the component */
    leftComponents: PropTypes.node,
    /** Node(s) to render within the component */
    middleComponents: PropTypes.node,
    /** Node(s) to render within the component */
    rightComponents: PropTypes.node,
    /** Bar type */
    type: PropTypes.oneOf(BAR_TYPES)
};
Bar.defaultProps = {
    cozy: false,
    type: 'default'
};

export default withStyles(Bar);
