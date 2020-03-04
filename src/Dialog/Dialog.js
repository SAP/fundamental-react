import chain from 'chain-function';
import classnames from 'classnames';
import CustomPropTypes from '../utils/CustomPropTypes/CustomPropTypes';
import { DIALOG_SIZES } from '../utils/constants';
import FocusLock from 'react-focus-lock';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import React, { Component } from 'react';
class Dialog extends Component {
    // select body element to add Dialog component too
    bodyElm = document.querySelector('body');

    handleCloseClick = (e) => {
        this.props.onClose(e);
    };

    // check for Escape key press
    handleKeyPress = event => {
        if (event.key === 'Escape' || event.key === 'Esc') {
            this.handleCloseClick();
        }
    };

    // add event listener for escape key
    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress, false);

        if (!this.props.disableStyles) {
            require('fundamental-styles/dist/dialog.css');
            require('fundamental-styles/dist/overlay.css');
            require('fundamental-styles/dist/bar.css');
        }
    }

    // remove event listener for escape key
    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyPress, false);
    }

    render() {
        const {
            actions,
            backdropClassName,
            bodyProps,
            children,
            className,
            contentProps,
            disableStyles,
            headerProps,
            headingLevel,
            header,
            footerProps,
            onClose,
            show,
            size,
            subheader,
            titleProps,
            title,
            ...rest
        } = this.props;

        const backdropClasses = classnames(
            'fd-overlay',
            'fd-overlay--dialog',
            backdropClassName
        );

        const dialogClasses = classnames(
            'fd-dialog',
            {
                'fd-dialog--active': show
            },
            className
        );

        const contentClasses = classnames(
            'fd-dialog__content',
            {
                [`fd-dialog__content--${size}`]: size
            }
        );

        const headerClasses = classnames(
            'fd-dialog__header',
            'fd-bar',
            {
                'fd-bar--header-with-subheader': subheader
            },
            className
        );


        const HeadingTag = `h${headingLevel}`;

        if (!show) {
            return null;
        }

        return ReactDOM.createPortal(
            <FocusLock as='div' className={backdropClasses}
                lockProps={{ ...rest }}>
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
                            {header && (<div className='fd-bar__element'>
                                {header}
                            </div>)}
                            <div className='fd-bar__element'>
                                <HeadingTag {...titleProps} className='fd-dialog__title'>
                                    {title}
                                </HeadingTag>
                            </div>
                            {subheader && (
                                <div className='fd-dialog__subheader fd-bar fd-bar--subheader'>
                                    <div className='fd-bar__left'>
                                        <div className='fd-bar__element'>
                                            {subheader}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div {...bodyProps} className='fd-dialog__body'>
                            {children}
                        </div>
                        <footer
                            {...footerProps}
                            className='fd-dialog__footer fd-bar fd-bar--footer'>
                            <div className='fd-bar__right'>
                                {React.Children.toArray(actions).map((child, index) => (
                                    <div className='fd-bar__element' key={index}>
                                        {React.cloneElement(child, { className: 'fd-dialog__decisive-button', onClick: chain(this.handleCloseClick, child.props?.onClick) })}
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
    actions: PropTypes.arrayOf(PropTypes.node).isRequired,
    title: PropTypes.string.isRequired,
    backdropClassName: PropTypes.string,
    bodyProps: PropTypes.object,
    children: PropTypes.node,
    className: PropTypes.string,
    contentProps: PropTypes.object,
    disableStyles: PropTypes.bool,
    footerProps: PropTypes.object,
    header: PropTypes.string,
    headerProps: PropTypes.object,
    headingLevel: CustomPropTypes.range(2, 6),
    show: PropTypes.bool,
    size: PropTypes.oneOf(DIALOG_SIZES),
    subheader: PropTypes.string,
    titleProps: PropTypes.object,
    onClose: PropTypes.func
};

Dialog.defaultProps = {
    headingLevel: 3,
    size: 'l',
    onClose: () => { }
};

Dialog.propDescriptions = {
    actions: 'Node(s) to render within the footer of the dialog.',
    backdropClassName: 'CSS class(es) to add to the dialog backdrop.',
    bodyProps: 'Additional props to be spread to the body section of the dialog.',
    contentProps: 'Additional props to be spread to the content section of the dialog.',
    footerProps: 'Additional props to be spread to the footer of the dialog.',
    header: 'Text for the components header.',
    headerProps: 'Additional props to be spread to the header of the dialog.',
    onClose: 'Callback function passing event when any action is clicked.',
    size: 'By default dialog body has no horizontal paddings. Add a size to modify the padding.',
    show: 'Set to **true** to make the dialog visible.',
    subheader: 'Text for the components subheader.'
};

export default Dialog;
