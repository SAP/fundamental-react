import classnames from 'classnames';
import CustomPropTypes from '../utils/CustomPropTypes/CustomPropTypes';
import FocusTrap from 'focus-trap-react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import React, { Component } from 'react';
class Modal extends Component {
    // select body element to add Modal component too
    bodyElm = document.querySelector('body');

    handleCloseClick = () => {
        this.props.onClose();
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
    }

    // remove event listener for escape key
    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyPress, false);
    }

    render() {
        const { localizedText, children, title, actions, className, show, titleProps, closeProps, contentProps, headerProps, footerProps, bodyProps, ...rest } = this.props;

        const modalClasses = classnames(
            'fd-ui__overlay',
            'fd-overlay',
            'fd-overlay--modal',
            className
        );

        if (!show) {
            return null;
        }

        return ReactDOM.createPortal(
            <FocusTrap
                focusTrapOptions={{
                    initialFocus: 'div.modal-demo-bg > span'
                }}>
                <div
                    {...rest}
                    className={modalClasses}>
                    <div className='modal-demo-bg'>
                        <span tabIndex='-1' />
                        <div
                            aria-label={title}
                            aria-modal='true'
                            className='fd-modal'
                            role='dialog'>
                            <div
                                {...contentProps}
                                className='fd-modal__content'
                                role='document'>
                                <div {...headerProps} className='fd-modal__header'>
                                    <h1 {...titleProps} className='fd-modal__title'>
                                        {title}
                                    </h1>
                                    <button
                                        {...closeProps}
                                        aria-label={localizedText.closeButton}
                                        className='fd-button--light fd-modal__close'
                                        onClick={this.handleCloseClick} />
                                </div>
                                <div {...bodyProps} className='fd-modal__body'>
                                    {children}
                                </div>
                                {actions ? (
                                    <footer
                                        {...footerProps}
                                        className='fd-modal__footer'>
                                        <div className='fd-modal__actions'>
                                            {actions}
                                        </div>
                                    </footer>
                                ) : (
                                    ''
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </FocusTrap >,
            this.bodyElm
        );
    }
}

Modal.displayName = 'Modal';

Modal.propTypes = {
    title: PropTypes.string.isRequired,
    actions: PropTypes.node,
    bodyProps: PropTypes.object,
    closeProps: PropTypes.object,
    contentProps: PropTypes.object,
    footerProps: PropTypes.object,
    headerProps: PropTypes.object,
    localizedText: CustomPropTypes.i18n({
        closeButton: PropTypes.string
    }),
    show: PropTypes.bool,
    titleProps: PropTypes.object
};

Modal.defaultProps = {
    localizedText: {
        closeButton: 'Close'
    }
};

Modal.propDescriptions = {
    actions: 'Node(s) to render within the footer of the dialog.',
    bodyProps: 'Additional props to be spread to the body section of the dialog.',
    closeProps: 'Additional props to be spread to the close `<button>` element.',
    contentProps: 'Additional props to be spread to the content section of the dialog.',
    footerProps: 'Additional props to be spread to the footer of the dialog.',
    headerProps: 'Additional props to be spread to the header of the dialog.',
    show: 'Set to **true** to make the dialog visible.'
};

export default Modal;
