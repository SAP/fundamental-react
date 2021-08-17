import classnamesBind from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';
import withStyles from '../utils/withStyles';
import styles from 'fundamental-styles/dist/wizard.css';

const classnames = classnamesBind.bind(styles);

const CONNECTOR_TYPES = [
    'none',
    'default',
    'active',
    'branching'
];

const STEP_MODIFIERS = [
    'completed',
    'current',
    'upcoming',
    'no-label',
    'stacked',
    'stacked-top',
    'active'
];

function WizardStep({
    connector,
    cssNamespace,
    modifiers,
    optional,
    title
}) {
    const stepClasses = classnames(
        `${cssNamespace}-wizard__step`,
        modifiers.map(modifier => `${cssNamespace}-wizard__step--${modifier}`),
    );

    const labelContainerClasses = classnames(
        `${cssNamespace}-wizard__label-container`,
        {
            [`${cssNamespace}-wizard__label-container--optional`]: optional
        }
    );

    const connectorClasses = classnames(
        `${cssNamespace}-wizard__connector`,
        {
            [`${cssNamespace}-wizard__connector--${connector}`]: connector !== 'default'
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
                {connector !== 'none' && <span className={connectorClasses} />}
            </div>
        </li>
    );
}

WizardStep.propTypes = {
    title: PropTypes.string.isRequired,

    children: PropTypes.node,
    className: PropTypes.string,
    connector: PropTypes.oneOf(CONNECTOR_TYPES),
    modifiers: PropTypes.arrayOf(PropTypes.oneOf(STEP_MODIFIERS)),
    optional: PropTypes.bool
};

WizardStep.defaultProps = {
    modifiers: []
};

export default withStyles(WizardStep);
