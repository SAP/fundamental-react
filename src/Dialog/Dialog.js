import chain from 'chain-function';
import classnamesBind from 'classnames/bind';
import CustomPropTypes from '../utils/CustomPropTypes/CustomPropTypes';
import { DIALOG_SIZES } from '../utils/constants';
import FocusLock from 'react-focus-lock';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import Title from '../Title/Title';
import withStyles from '../utils/withStyles';
import React, { Component } from 'react';
import barStyles from 'fundamental-styles/dist/bar.css';
import dialogStyles from 'fundamental-styles/dist/dialog.css';

const classnames = classnamesBind.bind({
    ...barStyles,
    ...dialogStyles
});
const barClassnames = classnamesBind.bind(barStyles);
const isUsingCssModules = dialogStyles && Object.keys(dialogStyles).length > 0;
/** A **Dialog** is a container generally displayed in response to an action. It is used for short forms,
 * confirmation messages or to display contextual information that does not require a page.\n\nTo
 * display the **Dialog** dialog, pass a boolean value to the \`show\` property of the component. It is
 * recommended to store this value as a state property in the parent control or application.
 * This is used to present information to the user when the **MessageStrip** component doesn’t fit all the information. */

class Dialog extends Component {
    // select body element to add Dialog component too
    // eslint-disable-next-line compat/compat
    bodyElm = document.querySelector('body');
    scrollX = 0
    scrollY = 0

    // restore scroll position
    restoreOriginalScrollPosition = () => {
        if (this.props.focusElementOnClose?.focus) {
            this.props.focusElementOnClose.focus();
        } else {
            document.querySelector('html')?.scroll({
                top: this.scrollY,
                left: this.scrollX
            });
        }
    }

    handleCloseClick = (e) => {
        this.props.onClose(e);
    };

    // check for Escape key press
    handleKeyPress = event => {
        if (event.key === 'Escape' || event.key === 'Esc') {
            this.handleCloseClick(event);
            this.restoreOriginalScrollPosition();
        }
    };

    // add event listener for escape key, save scroll position
    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress, false);
        if (this.props.show) {
            this.scrollX = window.scrollX;
            this.scrollY = window.scrollY;
        }
    }

    // remove event listener for escape key
    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyPress, false);
    }

    componentDidUpdate(prevProps) {
        if (!prevProps.show && this.props.show ) {
            this.scrollX = window.scrollX;
            this.scrollY = window.scrollY;
        }
    }


    render() {
        const {
            actions,
            backdropClassName,
            bodyProps,
            children,
            className,
            cssNamespace,
            contentProps,
            headerProps,
            headingLevel,
            headingStyle,
            header,
            footerProps,
            onClose,
            show,
            size,
            subheader,
            titleProps,
            title,
            allowListForLockFocus,
            disableAutoClose,
            ...rest
        } = this.props;

        const dialogClasses = classnames(
            `${cssNamespace}-dialog`,
            {
                [`${cssNamespace}-dialog--active`]: show
            },
            className
        );

        const contentClasses = classnames(
            `${cssNamespace}-dialog__content`,
            {
                [`${cssNamespace}-dialog__content--${size}`]: size
            }
        );

        const headerClasses = classnames(
            `${cssNamespace}-dialog__header`,
            `${cssNamespace}-bar`,
            {
                [`${cssNamespace}-bar--header-with-subheader`]: subheader,
                [barClassnames(`${cssNamespace}-bar`)]: isUsingCssModules
            },
            className,
        );

        if (!show) {
            return null;
        }

        return ReactDOM.createPortal(
            <FocusLock as='div' className={backdropClassName}
                lockProps={{ ...rest }}
                returnFocus
                whiteList={allowListForLockFocus}>
                <span data-autofocus tabIndex='-1' />
                <div
                    aria-label={title}
                    aria-modal='true'
                    className={dialogClasses}
                    role='dialog'>
                    <div
                        {...contentProps}
                        className={contentClasses}
                        role='document'>
                        <div {...headerProps} className={headerClasses}>
                            {header && (<div className={classnames(`${cssNamespace}-bar__element`)}>
                                {header}
                            </div>)}
                            <div className={classnames(`${cssNamespace}-bar__element`)}>
                                <Title
                                    {...titleProps}
                                    level={headingLevel}
                                    levelStyle={headingStyle}>
                                    {title}
                                </Title>
                            </div>
                            {subheader && (
                                <div className={classnames(`${cssNamespace}-dialog__subheader`, `${cssNamespace}-bar`, `${cssNamespace}-bar--subheader`, { [barClassnames(`${cssNamespace}-bar`)]: isUsingCssModules })}>
                                    <div className={classnames(`${cssNamespace}-bar__left`)}>
                                        <div className={classnames(`${cssNamespace}-bar__element`)}>
                                            {subheader}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div {...bodyProps} className={classnames(`${cssNamespace}-dialog__body`)}>
                            {children}
                        </div>
                        <footer
                            {...footerProps}
                            className={classnames(`${cssNamespace}-dialog__footer`, `${cssNamespace}-bar`, `${cssNamespace}-bar--footer`, { [barClassnames(`${cssNamespace}-bar`)]: isUsingCssModules })}>
                            <div className={classnames(`${cssNamespace}-bar__right`)}>
                                {React.Children.toArray(actions).map((child, index) => (
                                    <div className={classnames(`${cssNamespace}-bar__element`)} key={index}>
                                        {React.cloneElement(child, { className: classnames(`${cssNamespace}-dialog__decisive-button`), onClick: disableAutoClose ? chain(this.restoreOriginalScrollPosition, child.props?.onClick) : chain(this.handleCloseClick, this.restoreOriginalScrollPosition, child.props?.onClick) })}
                                    </div>
                                ))}
                            </div>
                        </footer>
                    </div>
                </div>
            </FocusLock>,
            this.bodyElm
        );
    }
}

Dialog.displayName = 'Dialog';

Dialog.propTypes = {
    /** Node(s) to render within the footer of the dialog */
    actions: PropTypes.arrayOf(PropTypes.node).isRequired,
    /** Localized text for the heading */
    title: PropTypes.string.isRequired,
    /** Specific function to select list of node to lock the focus*/
    allowListForLockFocus: PropTypes.func,
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
    /** Additional props to disable auto closing dialog */
    disableAutoClose: PropTypes.bool,
    /** Additional props to be spread to the footer of the dialog */
    focusElementOnClose: PropTypes.object,
    /** Additional props containing an HTMLElement to be focused when the dialog closes. The element must be focusable. */
    footerProps: PropTypes.object,
    /** Text or Custom React node for the components header */
    header: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node
    ]),
    /** Additional props to be spread to the header of the dialog */
    headerProps: PropTypes.object,
    /** Heading level. `<h1>` is reserved for the page title. It should not appear in components */
    headingLevel: CustomPropTypes.range(2, 6),
    /** Heading style, if it should be different from the default style for the Dialog. */
    headingStyle: CustomPropTypes.range(2, 6),
    /** Set to **true** to make the dialog visible */
    show: PropTypes.bool,
    /** By default dialog body has no horizontal paddings. Add a size to modify the padding: 's', 'm', 'l', 'xl' */
    size: PropTypes.oneOf(DIALOG_SIZES),
    /** Text for the components subheader */
    subheader: PropTypes.string,
    /**Additional props to be spread to the title\'s heading element */
    titleProps: PropTypes.object,
    /** Callback function; triggered when dialog closes either due to `Escape` keydown or any of the actions' `onClick`.
     * `onClose` is executed BEFORE any of the actions' `onClick` handler.
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent. See https://reactjs.org/docs/events.html.
     * @returns {void}
     */
    onClose: PropTypes.func
};

Dialog.defaultProps = {
    headingLevel: 3,
    headingStyle: 5,
    size: 'l',
    onClose: () => { }
};

export default withStyles(Dialog);
