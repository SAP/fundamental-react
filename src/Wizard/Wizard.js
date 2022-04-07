import Button from '../Button/Button';
import { flattenChildren } from '../utils/children';
import Menu from '../Menu/Menu';
import PropTypes from 'prop-types';
import Title from '../Title/Title';
import withStyles from '../utils/withStyles';
import WizardContainer from './WizardContainer';
import WizardContent from './WizardContent';
import WizardFooter from './WizardFooter';
import WizardNavigation from './WizardNavigation';
import WizardNextStep from './WizardNextStep';
import WizardStep from './WizardStep';
import React, { cloneElement, createRef, useEffect, useRef, useState } from 'react';

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
 * ##### Use the Wizard if:
 *
 * * the user has to accomplish a long or unfamiliar task
 * * the flow consist of a minimum of 3 and a maximum of 8 steps
 *
 * ##### Do not use the wizard if:
 *
 * * a task has only 2 steps
 * * a task has more than 8 steps
 * * the format of the task is familiar to the user
 *
 * There are two types of wizard that offer different functionality: **standard** and **branching**.
 *
 * ##### Use the standard type if:
 *
 * * The total number of steps is known in advance.
 * * The number of steps does not change during usage.
 * * There is linear progression from one step to the next.
 *
 * ##### Use the branching type if:
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
    contentProps,
    contentSize,
    cssNamespace,
    footerProps,
    headerProps,
    headerSize,
    navigationType,
    nextLabel,
    option,
    onCancel,
    onComplete,
    onStepChange,
    previousLabel,
    showTitles,
    ...props
}) {
    const steps = flattenChildren(children);

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [maxIndex, setMaxIndex] = useState(0);
    const [refs, setRefs] = useState([]);
    const contentRef = useRef();

    useEffect(() => {
        setMaxIndex(selectedIndex);
        setRefs(steps.map(() => createRef()));
    }, [children]);

    useEffect(() => {
        if (maxIndex < selectedIndex) {
            setMaxIndex(selectedIndex);
        }
    }, [selectedIndex]);

    const stepName = (step, index) => `${index + 1}. ${step.props.title}`;

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

    const goToStep = (e, index) => {
        if (index <= maxIndex) {
            if (navigationType === 'anchors') {
                refs[index].current.scrollIntoView({ behavior: 'smooth' });
            } else {
                setSelectedIndex(index);
            }
            onStepChange(e, steps[index], index, steps.length);
        }
    };

    const stepsMenu = (menuSteps, offset = 0) => (<Menu>
        <Menu.List>
            {menuSteps.map((step, index) => (<Menu.Item
                disabled={index + offset > maxIndex}
                onClick={(e) => goToStep(e, index + offset)}>
                {stepName(step, index + offset)}
            </Menu.Item>))}
        </Menu.List>
    </Menu>);

    const beforeMenu = stepsMenu(steps.slice(0, selectedIndex));
    const afterMenu = stepsMenu(steps.slice(selectedIndex + 1), selectedIndex + 1);

    const stepMenu = (index) => {
        if (option !== 'stacked') {
            return null;
        } else if (index < selectedIndex) {
            return beforeMenu;
        } else if (index > selectedIndex) {
            return afterMenu;
        } else {
            return null;
        }
    };

    const extraStepProps = (step, index) => ({
        indicator: `${index + 1}`,
        modifiers: stepModifiers(index),
        menu: stepMenu(index),
        onClick: e => goToStep(e, index),
        connector: connectorType(step, index),
        glyph: stepGlyph(step, index)
    });

    const renderHeader = () => steps.map((child, index) =>
        cloneElement(child, extraStepProps(child, index)));

    const previousStep = (e, index = selectedIndex) => {
        if (index > 0) {
            setSelectedIndex(index - 1);
            onStepChange(e, steps[index - 1], index - 1, steps.length);
        }
    };

    const nextStep = (e, index = selectedIndex) => {
        if (index < steps.length - 1) {
            if (navigationType === 'anchors') {
                setMaxIndex(index + 1);
                setTimeout(() => {
                    refs[index + 1].current.scrollIntoView({ behavior: 'smooth' });
                });
            } else {
                setSelectedIndex(index + 1);
            }
            onStepChange(e, steps[index + 1], index + 1, steps.length);
        } else {
            onComplete();
        }
    };

    const currentStep = steps[selectedIndex];
    return (
        <WizardContainer {...props}>
            <WizardNavigation
                size={headerSize}
                stacked={option === 'stacked'}
                {...headerProps}>
                {renderHeader()}
            </WizardNavigation>
            {navigationType === 'tabs' && <>
                <WizardContent
                    background={background}
                    size={contentSize}
                    {...contentProps}>
                    {showTitles && <Title level={2}>{stepName(currentStep, selectedIndex)}</Title>}
                    {currentStep.props.children}
                </WizardContent>
                <WizardFooter
                    label={cancelLabel}
                    onCancel={onCancel}
                    {...footerProps}>
                    {selectedIndex > 0 && <Button compact onClick={previousStep}>{currentStep.props.previousLabel || previousLabel}</Button>}
                    <Button compact
                        disabled={!currentStep.props.valid}
                        onClick={nextStep}
                        option='emphasized'>
                        {currentStep.props.nextLabel || nextLabel}
                    </Button>
                </WizardFooter>
            </>}
            {navigationType === 'anchors' && <>
                <WizardContent
                    background={background}
                    onScroll={(e) => {
                        const offsets = steps
                            .slice(0, maxIndex + 1)
                            .map((step, index) => Math.abs(refs[index].current.offsetTop - e.target.scrollTop));
                        const minOffset = Math.min(...offsets);
                        const closest = offsets.findIndex(offset => offset === minOffset);
                        setSelectedIndex(closest);
                    }}
                    ref={contentRef}
                    size={contentSize}
                    {...contentProps}
                    style={{ ...(contentProps?.style || {}), overflow: 'auto', position: 'relative' }}>
                    {steps.slice(0, maxIndex + 1).map((step, index) => (
                        <section ref={refs[index]} style={index === maxIndex ? { minHeight: '100%' } : {}}>
                            {showTitles && <Title level={2}>{stepName(step, index)}</Title>}
                            {step.props.children}
                            {index === maxIndex && step.props.valid && <WizardNextStep label={step.props.nextLabel || nextLabel} onNext={(e) => nextStep(e, index)} />}
                        </section>
                    ))}
                </WizardContent>
                <WizardFooter
                    label={cancelLabel}
                    onCancel={onCancel}
                    {...footerProps} />
            </>}
        </WizardContainer>
    );
}
Wizard.propTypes = {
    /** Content background styling. */
    background: PropTypes.oneOf(WIZARD_CONTENT_BACKGROUNDS),
    /** Label to use for the cancel button. */
    cancelLabel: PropTypes.string,
    /** Wizard.Step nodes to render as steps. */
    children: PropTypes.node,
    /** CSS class(es) to add to the element. */
    className: PropTypes.string,
    /** Props to be spread to the WizardContent component. */
    contentProps: PropTypes.object,
    /** By default wizard body has no horizontal paddings. Add a size to modify the padding. */
    contentSize: PropTypes.oneOf(WIZARD_SIZES),
    /** Props to be spread to the WizardFooter component. */
    footerProps: PropTypes.object,
    /** Props to be spread to the WizardNavigation component. */
    headerProps: PropTypes.object,
    /** By default wizard header has no horizontal paddings. Add a size to modify the padding. */
    headerSize: PropTypes.oneOf(WIZARD_SIZES),
    /** Navigation type. `anchors` mode Displays all steps in one scrolling
     * page, while `tabs` shows one page at a time with navigation buttons in
     * the footer. */
    navigationType: PropTypes.oneOf(['anchors', 'tabs']),
    /** Default label for next step buttons. Can be overriden by setting
     * `nextLabel` on specific steps. */
    nextLabel: PropTypes.string,
    /** Space-saving options. `stacking` option reduces all non-active steps to
     * a condensed form with a pop-up menu, while `no-labels` hides all text
     * from steps, only displaying the indicators. */
    option: PropTypes.oneOf(WIZARD_STACKING),
    /** Default label for previous step buttons. Can be overriden by setting
     * `previousLabel` on specific steps. */
    previousLabel: PropTypes.string,
    /** Whether to show auto-generated titles in page contents. */
    showTitles: PropTypes.bool,

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
     * @param {WizardStep} step - Step component that's being activated
     * @param {number} index - Index of the step that's being activated
     * @param {number} count - Total number of visible steps
     * @returns {void}
    */
    onStepChange: PropTypes.func
};
Wizard.defaultProps = {
    cancelLabel: 'Cancel',
    navigationType: 'anchors',
    nextLabel: 'Next Step',
    onCancel: () => {},
    onComplete: () => {},
    onStepChange: () => {},
    previousLabel: 'Previous Step',
    showTitles: true
};

Wizard.Container = WizardContainer;
Wizard.Content = WizardContent;
Wizard.Footer = WizardFooter;
Wizard.Navigation = WizardNavigation;
Wizard.NextStep = WizardNextStep;
Wizard.Step = WizardStep;

export default withStyles(Wizard);
