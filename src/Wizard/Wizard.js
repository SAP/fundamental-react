// import Bar from '../Bar/Bar';
// import Button from '../Button/Button';
import classnamesBind from 'classnames/bind';
import { flattenChildren } from '../utils/children';
import PropTypes from 'prop-types';
import withStyles from '../utils/withStyles';
import WizardContainer from './WizardContainer';
import WizardContent from './WizardContent';
import WizardFooter from './WizardFooter';
import WizardNavigation from './WizardNavigation';
import WizardStep from './WizardStep';
import React, { cloneElement, useEffect, useState } from 'react';

import styles from 'fundamental-styles/dist/wizard.css';

const classnames = classnamesBind.bind(styles);

export const WIZARD_SIZES = ['sm', 'md', 'lg', 'xl'];

export const WIZARD_CONTENT_BACKGROUNDS = [
    'solid',
    'list',
    'transparent'
];

const WIZARD_STACKING = [
    'stacked',
    'no-labels'
];

function Wizard({
    background,
    cancelLabel,
    children,
    className,
    contentSize,
    cssNamespace,
    headerSize,
    option,
    onCancel,
    onComplete,
    onStepChange
}) {
    const steps = flattenChildren(children);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [maxIndex, setMaxIndex] = useState(0);

    useEffect(() => {
        setMaxIndex(selectedIndex);
    }, [children]);

    useEffect(() => {
        if (maxIndex < selectedIndex) {
            setMaxIndex(selectedIndex);
        }
    }, [selectedIndex]);

    const wizardClasses = classnames(
        `${cssNamespace}-wizard`,
        className,
    );

    const connectorType = (step, index) => {
        if (step.props.branching) {
            return 'branching';
        } else if (index === steps.length - 1) {
            return 'none';
        } else if (index < selectedIndex) {
            return 'active';
        } else {
            return 'default';
        }
    };

    const stepModifiers = (index) => {
        const modifierMap = {
            completed: index <= maxIndex,
            current: index === selectedIndex,
            upcoming: index > selectedIndex,
            'no-label': option === 'no-labels',
            stacked: option === 'stacked' && index !== selectedIndex,
            'stacked-top': option === 'stacked' && index === selectedIndex - 1,
            active: index === selectedIndex
        };
        return Object.entries(modifierMap)
            .filter(([, value]) => !!value)
            .map(([modifier]) => modifier);
    };

    const stepGlyph = (step, index) => {
        if (step.props.glyph) {
            return step.props.glyph;
        } else if (index < selectedIndex) {
            return 'accept';
        } else {
            return null;
        }
    };

    const extraStepProps = (step, index) => ({
        indicator: index + 1,
        modifiers: stepModifiers(index),
        onClick: event => {
            if (index <= maxIndex) {
                setSelectedIndex(index);
                onStepChange(event, index);
            }
        },
        connector: connectorType(step, index),
        glyph: stepGlyph(step, index)
    });

    const renderHeader = () =>
        steps.map((child, index) =>
            cloneElement(child, extraStepProps(child, index)));

    const nextStep = (e) => {
        if (selectedIndex < steps.length - 1) {
            setSelectedIndex(selectedIndex + 1);
            onStepChange(e, selectedIndex + 1);
        } else {
            onComplete();
        }
    };

    const currentStep = steps[selectedIndex];
    return (
        <section className={wizardClasses}>
            <WizardNavigation size={headerSize}>
                {renderHeader()}
            </WizardNavigation>
            <WizardContent
                background={background}
                nextLabel={currentStep.props.nextLabel}
                onNext={nextStep}
                showNext={currentStep.props.valid}
                size={contentSize}>
                {currentStep.props.children}
            </WizardContent>
            <WizardFooter label={cancelLabel} onCancel={onCancel} />
        </section>
    );
}
Wizard.propTypes = {
    /** Content background styling */
    background: PropTypes.oneOf(WIZARD_CONTENT_BACKGROUNDS),
    /** Mark flow as branching and display an unfinished connectior line at the end */
    branching: PropTypes.bool,
    /** Label to use for the cancel button */
    cancelLabel: PropTypes.string,
    /** Wizard.Step nodes to render as steps */
    children: PropTypes.node,
    /** CSS class(es) to add to the element */
    className: PropTypes.string,
    /** By default wizard body has no horizontal paddings. Add a size to modify the padding */
    contentSize: PropTypes.oneOf(WIZARD_SIZES),
    /** By default wizard header has no horizontal paddings. Add a size to modify the padding */
    headerSize: PropTypes.oneOf(WIZARD_SIZES),
    /** Display option */
    option: PropTypes.oneOf(WIZARD_STACKING),

    /**
     * Callback function; triggered when the cancel button is clicked.
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent. See https://reactjs.org/docs/events.html.
     * @returns {void}
    */
    onCancel: PropTypes.func,
    /**
     * Callback function; triggered when the next step button is clicked in the last step.
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent. See https://reactjs.org/docs/events.html.
     * @returns {void}
    */
    onComplete: PropTypes.func,
    /**
     * Callback function; triggered when the next step button is clicked in any step other than last.
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent. See https://reactjs.org/docs/events.html.
     * @returns {void}
    */
    onStepChange: PropTypes.func
};
Wizard.defaultProps = {
    branching: false,
    cancelLabel: 'Cancel',
    onCancel: () => {},
    onComplete: () => {},
    onStepChange: () => {}
};

Wizard.Container = WizardContainer;
Wizard.Content = WizardContent;
Wizard.Footer = WizardFooter;
Wizard.Navigation = WizardNavigation;
Wizard.Step = WizardStep;

export default withStyles(Wizard);
