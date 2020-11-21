import classnamesBind from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';
import withStyles from '../utils/withStyles';
import styles from 'fundamental-styles/dist/breadcrumb.css';

const classnames = classnamesBind.bind(styles);

const BreadcrumbItem = ({ url, name, className, children, cssNamespace, ...props }) => {
    const renderLink = () => {
        if (!children && url) {
            return (
                <a
                    className={classnames(`${cssNamespace}-breadcrumb__link`)}
                    href={url}
                    tabIndex='0'>
                    {name}
                </a>
            );
        } else if (children) {
            return React.cloneElement(children, {
                'className': classnames(`${cssNamespace}-breadcrumb__link`),
                'tabIndex': '0'
            });
        }
    };

    const breadcrumbItemClasses = classnames(
        `${cssNamespace}-breadcrumb__item`,
        className
    );

    return (
        <li
            {...props}
            className={breadcrumbItemClasses}
            role='menuitem'
            tabIndex='-1'>
            {renderLink()}
        </li>
    );
};

BreadcrumbItem.displayName = 'Breadcrumb.Item';

BreadcrumbItem.propTypes = {
    /** Node(s) to render within the component */
    children: PropTypes.node,
    /** CSS class(es) to add to the element */
    className: PropTypes.string,
    /** Text for the internal anchor tag */
    name: PropTypes.string,
    /** An anchor tag will be generated and set to the url prop. Name or child text must be provided */
    url: PropTypes.string
};

export default withStyles(BreadcrumbItem);
