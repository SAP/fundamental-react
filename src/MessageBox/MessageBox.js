import Bar from '../Bar/Bar';
import chain from 'chain-function';
import classnamesBind from 'classnames/bind';
import { DIALOG_SIZES } from '../utils/constants';
import FocusLock from 'react-focus-lock';
import Icon from '../Icon/Icon';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import Title from '../Title/Title';
import withStyles from '../utils/withStyles';
import React, { cloneElement, useEffect } from 'react';

import barStyles from 'fundamental-styles/dist/bar.css';
import messageBoxStyles from 'fundamental-styles/dist/message-box.css';

const classnames = classnamesBind.bind({
    ...barStyles,
    ...messageBoxStyles
});

const MESSAGE_BOX_TYPES = [
    'default',
    'confirmation',
    'error',
    'success',
    'warning',
    'information'
];

/** A **MessageBox** displays a dialog with a simple message to the user.
 * Contrary to the **Popover**, message box can relay messages unrelated to the
 * UI, such as technical errors. This component inherits the look and behavior
 * of the **Dialog** (excluding dragging/resizing).
 *
 * @returns {Node} MessageBox component
 */
function MessageBox({
    actions,
    backdropClassName,
    bodyProps,
    children,
    className,
    contentProps,
    cssNamespace,
    footerProps,
    headerProps,
    onClose,
    show,
    size,
    title,
    type,
    ...props
}) {
    const bodyElm = document.querySelector('body');

    const handleKeyPress = event => {
        if (event.key === 'Escape' || event.key === 'Esc') {
            onClose(event);
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress, false);
        return () => document.removeEventListener('keydown', handleKeyPress, false);
    }, []);

    let icon;
    if (type === 'confirmation') {
        icon = 'question-mark';
    } else if (type === 'error') {
        icon = 'message-error';
    } else if (type === 'success') {
        icon = 'message-success';
    } else if (type === 'warning') {
        icon = 'message-warning';
    } else if (type === 'information') {
        icon = 'message-information';
    }

    if (!show) {
        return null;
    }

    const boxClasses = classnames(
        `${cssNamespace}-message-box`,
        {
            [`${cssNamespace}-message-box--${type}`]: type !== 'default',
            [`${cssNamespace}-message-box--active`]: show
        },
        className,
    );

    const contentClasses = classnames(
        `${cssNamespace}-message-box__content`,
        {
            [`${cssNamespace}-message-box__content--${size}`]: size
        },
    );

    const bodyClasses = classnames(
        `${cssNamespace}-message-box__body`
    );

    return ReactDOM.createPortal(
        <FocusLock
            as='div'
            className={backdropClassName}
            lockProps={{ ...props }}>
            <span data-autofocus tabIndex='-1' />
            <div className={boxClasses}>
                <section className={contentClasses} {...contentProps}>
                    <Bar
                        className={classnames(`${cssNamespace}-message-box__header`)}
                        leftComponents={[<>
                            {icon && <Icon glyph={icon} />}
                            <Title level={2} levelStyle={5}>{title}</Title>
                        </>]}
                        type='header'
                        { ...headerProps } />
                    <section className={bodyClasses} {...bodyProps}>
                        {children}
                    </section>
                    <Bar
                        className={classnames(`${cssNamespace}-message-box__footer`)}
                        rightComponents={actions.map(child => cloneElement(child, {
                            className: classnames(
                                child.props?.className,
                                `${cssNamespace}-message-box__decisive-button`
                            ),
                            onClick: chain(onClose, child.props?.onClick)
                        }))}
                        type='footer'
                        { ...footerProps } />
                </section>
            </div>
        </FocusLock>,
        bodyElm,
    );
}
MessageBox.propTypes = {
    /** Node(s) to render within the footer of the dialog */
    actions: PropTypes.arrayOf(PropTypes.node).isRequired,
    /** Localized text for the heading */
    title: PropTypes.string.isRequired,

    /** CSS class(es) to add to the dialog backdrop */
    backdropClassName: PropTypes.string,
    /** Additional props to be spread to the body section of the dialog */
    bodyProps: PropTypes.object,
    /** Node(s) to render within the component */
    children: PropTypes.node,
    /** CSS class(es) to add to the element */
    className: PropTypes.string,
    /** Additional props to be spread to the content section of the dialog */
    contentProps: PropTypes.object,
    /** Additional props to be spread to the footer of the dialog */
    footerProps: PropTypes.object,
    /** Additional props to be spread to the header of the dialog */
    headerProps: PropTypes.object,
    /** Set to **true** to make the dialog visible */
    show: PropTypes.bool,
    /** By default dialog body has no horizontal paddings. Add a size to modify the padding: 's', 'm', 'l', 'xl' */
    size: PropTypes.oneOf(DIALOG_SIZES),
    /** Message box type */
    type: PropTypes.oneOf(MESSAGE_BOX_TYPES),
    /** Callback function; triggered when dialog closes either due to `Escape` keydown or any of the actions' `onClick`.
     * `onClose` is executed BEFORE any of the actions' `onClick` handler.
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent. See https://reactjs.org/docs/events.html.
     * @returns {void}
     */
    onClose: PropTypes.func
};
MessageBox.defaultProps = {
    type: 'default',
    onClose: () => {}
};

export default withStyles(MessageBox);
