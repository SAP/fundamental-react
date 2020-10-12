import classnamesBind from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';
import withStyles from '../utils/withStyles';
import styles from 'fundamental-styles/dist/token.css';

const classnames = classnamesBind.bind(styles);

/** A **Token** is used to represent contextual information. It can be useful to show
applied filters, selected values for a form field or object metadata. */
const Token = React.forwardRef(({
    buttonLabel,
    children,
    className,
    compact,
    cssNamespace,
    onClick,
    readOnly,
    ...props
}, ref) => {

    const tokenClasses = classnames(
        `${cssNamespace}-token`,
        {
            [`${cssNamespace}-token--readonly`]: readOnly,
            [`${cssNamespace}-token--compact`]: compact
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
            <span className={classnames(`${cssNamespace}-token__text`)}>{children}</span>
            <button
                aria-label={buttonLabel}
                className={classnames(`${cssNamespace}-token__close`)}
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
    /**
     * Callback function; triggered when the Token's close `<button>` is clicked.
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent. See https://reactjs.org/docs/events.html.
     * @returns {void}
    */
    onClick: PropTypes.func
};

Token.defaultProps = {
    onClick: () => {}
};

export default withStyles(Token);
