import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import withStyles from '../utils/WithStyles/WithStyles';

const Token = React.forwardRef(({ children, className, disableStyles, ...props }, ref) => {

    const tokenClasses = classnames(
        'fd-token',
        className
    );

    return (
        <span
            {...props}
            className={tokenClasses}
            ref={ref}
            role='button'>
            {children}
        </span>
    );
});

Token.displayName = 'Token';

Token.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    customStyles: PropTypes.object,
    disableStyles: PropTypes.bool
};

export { Token as __Token };

export default withStyles(Token, { cssFile: 'token', fonts: true, icons: true });

