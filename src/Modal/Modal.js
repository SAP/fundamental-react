import classnames from 'classnames';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import React, { Component } from 'react';

export class Modal extends Component {
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
        const { children, title, actions, className, show, titleProps, closeProps, contentProps, headerProps, footerProps, bodyProps, ...rest } = this.props;

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
            <div
                className={modalClasses}
                {...rest}>
                <div className='modal-demo-bg'>
                    <div className='fd-modal'>
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
                                    aria-label='close'
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
            </div>,
            this.bodyElm
        );
    }
}

Modal.propTypes = {
    title: PropTypes.string.isRequired,
    bodyProps: PropTypes.object,
    closeProps: PropTypes.object,
    contentProps: PropTypes.object,
    footerProps: PropTypes.object,
    headerProps: PropTypes.object,
    show: PropTypes.bool,
    titleProps: PropTypes.object
};
