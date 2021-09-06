import classnamesBind from 'classnames/bind';
import Icon from '../Icon/Icon';
import PropTypes from 'prop-types';
import React from 'react';
import withStyles from '../utils/withStyles';
import styles from 'fundamental-styles/dist/wizard.css';

const classnames = classnamesBind.bind(styles);

const WIZARD_CONNECTOR_TYPES = [
    'none',
    'default',
    'active',
    'branching'
];

const WIZARD_STEP_MODIFIERS = [
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
    className,
    cssNamespace,
    glyph,
    index,
    modifiers,
    optional,
    title
}) {
    const stepClasses = classnames(
        `${cssNamespace}-wizard__step`,
        modifiers.map(modifier => `${cssNamespace}-wizard__step--${modifier}`),
        className,
    );

    const labelContainerClasses = classnames({
        [`${cssNamespace}-wizard__label-container`]: true,
        [`${cssNamespace}-wizard__label-container--optional`]: optional
    });

    const connectorClasses = classnames({
        [`${cssNamespace}-wizard__connector`]: true,
        [`${cssNamespace}-wizard__connector--${connector}`]: connector !== 'default'
    });

    return (
        <li className={stepClasses}>
            <div className={classnames(`${cssNamespace}-wizard__step-wrapper`)}>
                <a
                    aria-label={title}
                    className={classnames(`${cssNamespace}-wizard__step-container`)}>
                    <span className={classnames(`${cssNamespace}-wizard__step-indicator`)}>
                        {glyph ? <Icon className={classnames(`${cssNamespace}-wizard__icon`)} glyph={glyph} /> : index + 1}
                    </span>
                    <div className={labelContainerClasses}>
                        <span className={classnames(`${cssNamespace}-wizard__label`)}>{title}</span>
                        {optional && <span className={classnames(`${cssNamespace}-wizard__optional-text`)}>{optional}</span>}
                    </div>
                </a>
                {connector !== 'none' && <span className={connectorClasses} />}
            </div>
        </li>
    );
}

WizardStep.propTypes = {
    key: PropTypes.string.isRequired,
    nextLabel: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,

    children: PropTypes.node,
    className: PropTypes.string,
    connector: PropTypes.oneOf(WIZARD_CONNECTOR_TYPES),
    glyph: PropTypes.node,
    index: PropTypes.number,
    /** for internal use only */
    modifiers: PropTypes.arrayOf(PropTypes.oneOf(WIZARD_STEP_MODIFIERS)),
    optional: PropTypes.string,

    validator: PropTypes.func
};

WizardStep.defaultProps = {
    modifiers: [],
    validator: () => true
};

export default withStyles(WizardStep);
