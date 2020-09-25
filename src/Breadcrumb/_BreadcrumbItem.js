import classnamesBind from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';
import styles from 'fundamental-styles/dist/breadcrumb.css';

const classnames = classnamesBind.bind(styles);

const BreadcrumbItem = ({ url, name, className, children, ...props }) => {
    const renderLink = () => {
        if (!children && url) {
            return (
                <a className={classnames('fd-breadcrumb__link')} href={url}>{name}</a>
            );
        } else if (children) {
            return React.cloneElement(children, {
                'className': classnames('fd-breadcrumb__link')
            });
        }
    };

    const breadcrumbItemClasses = classnames(
        'fd-breadcrumb__item',
        className
    );

    return (
        <li {...props} className={breadcrumbItemClasses}>
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

export default BreadcrumbItem;
