import classnamesBind from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';
import withStyles from '../utils/withStyles';
import styles from 'fundamental-styles/dist/tile.css';

const classnames = classnamesBind.bind(styles);

const TileHeader = props => {
    const { children, className, cssNamespace, subtitle, subtitleProps, titleProps, ...rest } = props;

    const tileHeaderClasses = classnames(
        `${cssNamespace}-tile__header`,
        className
    );

    const tileTitleClasses = classnames(
        `${cssNamespace}-tile__title`,
        titleProps?.className
    );

    const tileSubtitleClasses = classnames(
        `${cssNamespace}-tile__subtitle`,
        subtitleProps?.className
    );

    return (
        <div {...rest} className={tileHeaderClasses}>
            <div {...titleProps} className={tileTitleClasses}>{children}</div>
            {subtitle && (<div {...subtitleProps} className={tileSubtitleClasses}>{subtitle}</div>)}
        </div>);
};

TileHeader.displayName = 'Tile.Header';

TileHeader.propTypes = {
    /** Node(s) to render inside the header element */
    children: PropTypes.node,
    /** CSS class(es) to add to the element */
    className: PropTypes.string,
    /** Node(s) to render inside the optional subtitle element */
    subtitle: PropTypes.node,
    /** Additional props to be spread to the subtitle `<div>` element */
    subtitleProps: PropTypes.object,
    /** Additional props to be spread to the title `<div>` element */
    titleProps: PropTypes.object
};

export default withStyles(TileHeader);
