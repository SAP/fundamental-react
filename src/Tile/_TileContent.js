import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const TileContent = props => {
    const { title, children, className, titleProps, ...rest } = props;

    const tileContentClasses = classnames(
        'fd-tile__content',
        className
    );

    return (
        <div {...rest} className={tileContentClasses}>
            <h2 {...titleProps} className='fd-tile__title'>{title}</h2>
            {children}
        </div>
    );
};

TileContent.displayName = 'TileContent';

TileContent.propTypes = {
    title: PropTypes.string.isRequired,
    className: PropTypes.string,
    titleProps: PropTypes.object
};

export default TileContent;
