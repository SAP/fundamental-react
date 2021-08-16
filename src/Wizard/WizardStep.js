import classnamesBind from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';
import withStyles from '../utils/withStyles';
import styles from 'fundamental-styles/dist/wizard.css';

const classnames = classnamesBind.bind(styles);

function WizardStep({
    cssNamespace,
    optional,
    title
}) {
    const state = 'completed';

    const stepClasses = classnames(
        `${cssNamespace}-wizard__step`,
        `${cssNamespace}-wizard__step--${state}`
    );

    const labelContainerClasses = classnames(
        `${cssNamespace}-wizard__label-container`,
        {
            [`${cssNamespace}-wizard__label-container--optional`]: optional
        }
    );
    return (
        <li className={stepClasses}>
            <div className={classnames(`${cssNamespace}-wizard__step-wrapper`)}>
                <a
                    aria-label={title}
                    className={classnames(`${cssNamespace}-wizard__step-container`)}>
                    <span className={classnames(`${cssNamespace}-wizard__step-indicator`)}>
                        <i className={classnames(`${cssNamespace}-wizard__icon sap-icon--accept`)} role='presentation' />
                    </span>
                    <div className={labelContainerClasses}>
                        <span className={classnames(`${cssNamespace}-wizard__label`)}>{title}</span>
                        {optional && <span className={classnames(`${cssNamespace}-wizard__optional-text`)}>(Optional)</span>}
                    </div>
                </a>
                <span className={classnames(`${cssNamespace}-wizard__connector`, `${cssNamespace}-wizard__connector--active`)} />
            </div>
        </li>
    );
}

WizardStep.propTypes = {
    title: PropTypes.string.isRequired,

    children: PropTypes.node,
    className: PropTypes.string,
    optional: PropTypes.bool
};

export default withStyles(WizardStep);
