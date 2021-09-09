import Bar from '../Bar/Bar';
import Button from '../Button/Button';
import classnamesBind from 'classnames/bind';
import PropTypes from 'prop-types';
import withStyles from '../utils/withStyles';
import WizardNavigation from './WizardNavigation';
import WizardStep from './WizardStep';

import React, { cloneElement, useEffect, useState } from 'react';

import styles from 'fundamental-styles/dist/wizard.css';

const classnames = classnamesBind.bind(styles);

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

function Wizard({
    background,
    branching,
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
    const steps = React.Children.toArray(children);
    const stepCount = React.Children.toArray(children).length;
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

    const progressBarClasses = classnames({
        [`${cssNamespace}-wizard__progress-bar`]: true,
        [`${cssNamespace}-wizard__progress-bar--${headerSize}`]: headerSize
    });

    const contentClasses = classnames({
        [`${cssNamespace}-wizard__content`]: true,
        [`${cssNamespace}-wizard__content--${contentSize}`]: contentSize,
        [`${cssNamespace}-wizard__content--${background}`]: background
    });

    const connectorType = (index) => {
        if (index === steps.length - 1) {
            return branching ? 'branching' : 'none';
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
            upcoming: index > maxIndex,
            'no-label': option === 'no-labels',
            stacked: option === 'stacked' && !index === selectedIndex,
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
        index,
        modifiers: stepModifiers(index),
        onClick: event => {
            if (index <= maxIndex) {
                setSelectedIndex(index);
                onStepChange(event, index);
            }
        },
        connector: connectorType(index),
        glyph: stepGlyph(step, index)
    });

    const renderHeader = () =>
        React.Children.toArray(children).map((child, index) =>
            cloneElement(child, extraStepProps(child, index)));

    const nextStep = (e) => {
        if (selectedIndex < stepCount - 1) {
            setSelectedIndex(selectedIndex + 1);
            onStepChange(e, selectedIndex + 1);
        } else {
            onComplete();
        }
    };

    const currentChild = steps[selectedIndex];
    const valid = currentChild?.props.validator();
    return (<>
        <section className={wizardClasses}>
            <nav className={classnames(`${cssNamespace}-wizard__navigation`)}>
                <ul className={progressBarClasses}>
                    {renderHeader()}
                </ul>
            </nav>
        </section>
        <section className={contentClasses}>
            {currentChild?.props.children}
            {valid && <div className={classnames(`${cssNamespace}-wizard__next-step`)}>
                <Button
                    compact
                    onClick={nextStep}
                    option='emphasized'>
                    {currentChild?.props.nextLabel}
                </Button>
            </div>}
        </section>
        <footer>
            <Bar rightComponents={[
                <Button
                    compact
                    onClick={onCancel}
                    option='transparent'>
                    {cancelLabel}
                </Button>
            ]} />
        </footer>
    </>);
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
    cancelLabel: 'Cancel',
    onCancel: () => {},
    onComplete: () => {},
    onStepChange: () => {}
};

Wizard.Step = WizardStep;
Wizard.Navigation = WizardNavigation;

export default withStyles(Wizard);
