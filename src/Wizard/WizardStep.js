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
    indicator,
    modifiers,
    nextLabel,
    optionalLabel,
    title,
    valid,
    ...props
}) {
    const stepClasses = classnames(
        `${cssNamespace}-wizard__step`,
        modifiers.map(modifier => `${cssNamespace}-wizard__step--${modifier}`),
        className,
    );

    const labelContainerClasses = classnames({
        [`${cssNamespace}-wizard__label-container`]: true,
        [`${cssNamespace}-wizard__label-container--optional`]: optionalLabel
    });

    const connectorClasses = classnames({
        [`${cssNamespace}-wizard__connector`]: true,
        [`${cssNamespace}-wizard__connector--${connector}`]: connector !== 'default'
    });

    return (
        <li className={stepClasses} {...props}>
            <div className={classnames(`${cssNamespace}-wizard__step-wrapper`)}>
                <a
                    aria-label={title}
                    className={classnames(`${cssNamespace}-wizard__step-container`)}>
                    <span className={classnames(`${cssNamespace}-wizard__step-indicator`)}>
                        {glyph ? <Icon ariaLabel={glyph} className={classnames(`${cssNamespace}-wizard__icon`)}
                            glyph={glyph} /> : indicator}
                    </span>
                    <div className={labelContainerClasses}>
                        <span className={classnames(`${cssNamespace}-wizard__label`)}>{title}</span>
                        {optionalLabel && <span className={classnames(`${cssNamespace}-wizard__optional-text`)}>{optionalLabel}</span>}
                    </div>
                </a>
                {connector !== 'none' && <span className={connectorClasses} />}
            </div>
        </li>
    );
}

WizardStep.propTypes = {
    title: PropTypes.string.isRequired,

    /** (integrated only) Mark step as having unknown following content */
    branching: PropTypes.bool,
    /** (integated only) Nodes to render as step content */
    children: PropTypes.node,
    /** CSS class(es) to add to the element */
    className: PropTypes.string,
    /** (standalone only) Appearance of the connector to the next element */
    connector: PropTypes.oneOf(WIZARD_CONNECTOR_TYPES),
    /** Icon glyph to display in the indicator component */
    glyph: PropTypes.node,
    /** Text to display in the indicator component if no glyph given */
    indicator: PropTypes.string,
    /** (standalone only) Step appearance modifiers */
    modifiers: PropTypes.arrayOf(PropTypes.oneOf(WIZARD_STEP_MODIFIERS)),
    /** (integrated only) Label to use on the next step button */
    nextLabel: PropTypes.string,
    /** Label to use as the optional text in step header */
    optionalLabel: PropTypes.string,
    /** (integrated only) True if moving to the next step is allowed */
    valid: PropTypes.bool
};

WizardStep.defaultProps = {
    nextLabel: 'Next',
    modifiers: [],
    valid: true
};

export default withStyles(WizardStep);
