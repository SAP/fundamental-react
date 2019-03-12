import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const TileActions = props => {
    const { children, className, ...rest } = props;

    const tileActionsClasses = classnames(
        'fd-tile__actions',
        className
    );

    return <div {...rest} className={tileActionsClasses}>{children}</div>;
};

TileActions.displayName = 'Tile.Actions';

TileActions.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};

export default TileActions;
