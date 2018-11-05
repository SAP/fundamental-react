import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Alert extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: true,
        }
    }

    closeAlertHandler() {
        this.setState({
            isActive: false,
        });
    }

    render() {
        const { type, link, linkText, dismissable, rtl, children } = this.props;
        return (
            <div>
                {
                    rtl ? (
                        this.state.isActive && <div className={`fd-alert${dismissable ? ' fd-alert--dismissible' : ''}${type ? ' fd-alert--' + type : ''}`} role="alert" id="j2ALl423" dir="rtl">
                        {dismissable?<button className="fd-alert__close" aria-controls="j2ALl423" aria-label="Close" onClick={() => this.closeAlertHandler()}></button>:null}
                        {children}
                        {link ? (
                            <a href={link} className="fd-link">{linkText} <span className="sap-icon--arrow-right sap-icon--s"></span></a>
                        ) : undefined}
                    </div>
                    ) : (
                        this.state.isActive && <div className={`fd-alert${dismissable ? ' fd-alert--dismissible' : ''}${type ? ' fd-alert--' + type : ''}`} role="alert" id="j2ALl423">
                        {dismissable?<button className="fd-alert__close" aria-controls="j2ALl423" aria-label="Close" onClick={() => this.closeAlertHandler()}></button>:null}
                        {children}
                        {link ? (
                            <a href={link} className="fd-link">{linkText} <span className="sap-icon--arrow-right sap-icon--s"></span></a>
                        ) : undefined}
                    </div>
                    )
                }
            </div>
        );
    }
}

Alert.propTypes = {
    type: PropTypes.string,
    link: PropTypes.string,
    linkText: PropTypes.string,
    dismissable: PropTypes.bool
}