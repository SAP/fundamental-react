import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import 'fundamental-styles/dist/icon.css';
import 'fundamental-styles/dist/token.css';

/** A **Token** is used to represent contextual information. It can be useful to show
applied filters, selected values for a form field or object metadata. */
const Token = React.forwardRef(({
    buttonLabel,
    children,
    className,
    compact,
    onClick,
    readOnly,
    ...props
}, ref) => {

    const tokenClasses = classnames(
        'fd-token',
        {
            'fd-token--readonly': readOnly,
            'fd-token--compact': compact
        },
        className
    );

    return (
        <span
            {...props}
            className={tokenClasses}
            ref={ref}
            role='button'
            tabIndex='0'>
            <span className='fd-token__text'>{children}</span>
            <button
                aria-label={buttonLabel}
                className='fd-token__close'
                onClick={onClick}
                tabIndex='-1' />
        </span>
    );
});

Token.displayName = 'Token';

Token.propTypes = {
    /** A localized string to be used as aria-label for the token's button */
    buttonLabel: PropTypes.string.isRequired,
    /** Node(s) to render within the component */
    children: PropTypes.node,
    /** CSS class(es) to add to the element */
    className: PropTypes.string,
    /** Set to **true** to enable compact mode */
    compact: PropTypes.bool,
    /** Set to **true** to mark component as readonly */
    readOnly: PropTypes.bool,
    /** Callback function when user clicks on the component*/
    onClick: PropTypes.func
};

Token.defaultProps = {
    onClick: () => {}
};

export default Token;

