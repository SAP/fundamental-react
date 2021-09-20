import { flattenChildren } from '../utils/children';
import PropTypes from 'prop-types';
import withStyles from '../utils/withStyles';
import WizardContainer from './WizardContainer';
import WizardContent from './WizardContent';
import WizardFooter from './WizardFooter';
import WizardNavigation from './WizardNavigation';
import WizardStep from './WizardStep';
import React, { cloneElement, useEffect, useState } from 'react';

const WIZARD_SIZES = ['sm', 'md', 'lg', 'xl'];

const WIZARD_CONTENT_BACKGROUNDS = [
    'solid',
    'list',
    'transparent'
];

const WIZARD_STACKING = [
    'stacked',
    'no-labels'
];

/** The **Wizard** guides a user through a long or unfamiliar task by dividing
 * it into sections, revealing information in an easy and digestible way. It
 * consists of a walkthrough screen, where the user is prompted to input
 * required information and upon completing a section, the next sections
 * subsequently follow in a prescribed order; and the summary page, where the
 * form is displayed in read-only mode for assessment and final submission.
 *
 * USE THE WIZARD IF:
 *
 * * the user has to accomplish a long or unfamiliar task
 * * the flow consist of a minimum of 3 and a maximum of 8 steps
 *
 * DO NOT USE THE WIZARD IF:
 *
 * * a task has only 2 steps
 * * a task has more than 8 steps
 * * the format of the task is familiar to the user
 *
 * There are two types of wizard that offer different functionality: **standard** and **branching**.
 *
 * USE THE STANDARD TYPE IF:
 *
 * * The total number of steps is known in advance.
 * * The number of steps does not change during usage.
 * * There is linear progression from one step to the next.
 *
 * USE THE BRANCHING TYPE IF:
 *
 * * The total number of steps is not known.
 * * The number of steps may change during usage.
 * * There is non-linear progression. In other words, the user’s choice during one step determines which step comes next.
 * * In both types of wizard you can let users skip steps. Label these steps as “Optional”.
 *
 * @returns {Node} WizardContainer component
*/
function Wizard({
    background,
    cancelLabel,
    children,
    className,
    contentProps,
    contentSize,
    cssNamespace,
    footerProps,
    headerProps,
    headerSize,
    option,
    onCancel,
    onComplete,
    onStepChange,
    ...props
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

    const connectorType = (step, index) => {
        if (step.props.branching) {
            return 'branching';
        } else if (index === steps.length - 1) {
            return 'none';
        } else if (index < maxIndex) {
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
        indicator: `${index + 1}`,
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
        <WizardContainer {...props}>
            <WizardNavigation size={headerSize} {...headerProps}>
                {renderHeader()}
            </WizardNavigation>
            <WizardContent
                background={background}
                nextLabel={currentStep.props.nextLabel}
                onNext={nextStep}
                showNext={currentStep.props.valid}
                size={contentSize}
                {...contentProps}>
                {currentStep.props.children}
            </WizardContent>
            <WizardFooter
                label={cancelLabel}
                onCancel={onCancel}
                {...footerProps} />
        </WizardContainer>
    );
}
Wizard.propTypes = {
    /** Content background styling */
    background: PropTypes.oneOf(WIZARD_CONTENT_BACKGROUNDS),
    /** Label to use for the cancel button */
    cancelLabel: PropTypes.string,
    /** Wizard.Step nodes to render as steps */
    children: PropTypes.node,
    /** CSS class(es) to add to the element */
    className: PropTypes.string,
    /** Props to be spread to the WizardContent component */
    contentProps: PropTypes.object,
    /** By default wizard body has no horizontal paddings. Add a size to modify the padding */
    contentSize: PropTypes.oneOf(WIZARD_SIZES),
    /** Props to be spread to the WizardFooter component */
    footerProps: PropTypes.object,
    /** Props to be spread to the WizardNavigation component */
    headerProps: PropTypes.object,
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
