import Button from '../Button/Button';
import classnames from 'classnames';
import CustomPropTypes from '../utils/CustomPropTypes/CustomPropTypes';
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
            require('fundamental-styles/dist/fonts.css');
            require('fundamental-styles/dist/dialog.css');
            require('fundamental-styles/dist/overlay.css');
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
            closeProps,
            contentProps,
            disableStyles,
            headerProps,
            headingLevel,
            footerProps,
            localizedText,
            onClose,
            show,
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
                        className='fd-dialog__content'
                        role='document'>
                        <div {...headerProps} className='fd-dialog__header'>
                            <HeadingTag {...titleProps} className='fd-dialog__title'>
                                {title}
                            </HeadingTag>
                            <Button
                                {...closeProps}
                                aria-label={localizedText.closeButton}
                                className='fd-dialog__close'
                                disableStyles={disableStyles}
                                glyph='decline'
                                onClick={this.handleCloseClick}
                                option='light' />
                        </div>
                        <div {...bodyProps} className='fd-dialog__body'>
                            {children}
                        </div>
                        {actions ? (
                            <footer
                                {...footerProps}
                                className='fd-dialog__footer'>
                                {actions}
                            </footer>
                        ) : (
                            ''
                        )}
                    </div>
                </div>
            </FocusLock>,
            this.bodyElm
        );
    }
}

Dialog.displayName = 'Dialog';

Dialog.propTypes = {
    title: PropTypes.string.isRequired,
    actions: PropTypes.node,
    backdropClassName: PropTypes.string,
    bodyProps: PropTypes.object,
    children: PropTypes.node,
    className: PropTypes.string,
    closeProps: PropTypes.object,
    contentProps: PropTypes.object,
    disableStyles: PropTypes.bool,
    footerProps: PropTypes.object,
    headerProps: PropTypes.object,
    headingLevel: CustomPropTypes.range(2, 6),
    localizedText: CustomPropTypes.i18n({
        closeButton: PropTypes.string
    }),
    show: PropTypes.bool,
    titleProps: PropTypes.object,
    onClose: PropTypes.func
};

Dialog.defaultProps = {
    headingLevel: 3,
    localizedText: {
        closeButton: 'Close'
    },
    onClose: () => { }
};

Dialog.propDescriptions = {
    actions: 'Node(s) to render within the footer of the dialog.',
    backdropClassName: 'CSS class(es) to add to the dialog backdrop.',
    bodyProps: 'Additional props to be spread to the body section of the dialog.',
    closeProps: 'Additional props to be spread to the close `<button>` element.',
    contentProps: 'Additional props to be spread to the content section of the dialog.',
    footerProps: 'Additional props to be spread to the footer of the dialog.',
    headerProps: 'Additional props to be spread to the header of the dialog.',
    localizedTextShape: {
        closeButton: 'Aria-label for <button> element.'
    },
    onClose: 'Callback function passing event when close button is clicked.',
    show: 'Set to **true** to make the dialog visible.'
};

export default Dialog;
