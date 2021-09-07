import Bar from '../Bar/Bar';
import Button from '../Button/Button';
import classnamesBind from 'classnames/bind';
import PropTypes from 'prop-types';
import withStyles from '../utils/withStyles';
import WizardStep from './WizardStep';

// import React, { cloneElement, useEffect, useState } from 'react';
import React, { useEffect, useState } from 'react';

import styles from 'fundamental-styles/dist/wizard.css';

const classnames = classnamesBind.bind(styles);

const WIZARD_SIZES = ['s', 'm', 'l', 'xl'];

const WIZARD_CONTENT_BACKGROUNDS = [
    'solid',
    'list',
    'transparent'
];

function Wizard({
    // background,
    // branching,
    children,
    className,
    // contentSize,
    cssNamespace,
    headerSize,
    stacked,
    onComplete,
    onStepChange
}) {
    const steps = React.Children.toArray(children);
    const stepCount = React.Children.toArray(children).length;
    const [selectedIndex, setSelectedIndex] = useState(0);
    // const [selectedStep, setSelectedStep] = useState(null);

    const [stepStatuses, setStepStatuses] = useState({});

    const mapStepProps = (child, index) => {
        const key = child.props.key;
        const current = index === selectedIndex;
        const visited = stepStatuses[key]?.visited || current;
        // const valid = child.props.validator();

        return {
            key,
            current,
            visited
            // valid
        };
        /*
        let modifiers = stepProps[child.props.key] || [];
        const current = child.props.key === selectedStep;
        const visited = steps[index]?.visited || current;
        // const last = currentIndex === lastIndex;

        if (currentIndex === index) {
            modifiers = [...modifiers, 'active', 'current'];
        }
        if (visited && !last) {
            modifiers = [...modifiers, 'completed'];
        }

        let glyph = child.props.glyph;
        if (!glyph && visited && !last) {
            glyph = 'accept';
        }

        const component = React.cloneElement(child, {
            onClick: event => handleStepClick(event, index),
            glyph,
            modifiers
        });

        // return {
            // current,
            // component,
            // visited,
            // glyph,
            // last
        // };
        */
    };

    useEffect(() => {
        // setSteps(inputSteps.map(mapStep));
        setStepStatuses(
            steps
                .map(mapStepProps)
                .reduce((acc, p) => ({ ...acc, [p.key]: p }), {})
        );
    }, [children]);

    const wizardClasses = classnames(
        `${cssNamespace}-wizard`,
        className,
    );

    const progressBarClasses = classnames({
        [`${cssNamespace}-wizard__progress-bar`]: true,
        [`${cssNamespace}-wizard__progress-bar--${headerSize}`]: headerSize
    });

    /*
    const contentClasses = classnames({
        [`${cssNamespace}-fd-wizard__content`]: true,
        [`${cssNamespace}-fd-wizard__content--${contentSize}`]: contentSize,
        [`${cssNamespace}-fd-wizard__content--${background}`]: background
    });
    */

    /*
    const connectorType = (child, index) => {
        if (index === stepCount - 1) {
            return branching ? 'branching' : 'none';
        } else if (index === selectedIndex) {
            return 'active';
        } else {
            return 'default';
        }
    };
    */

    /*
    // const mapStep = (child, index) => {
        // const thisStepProps = stepProps[child.props.key];
        // const modifiers = [
            // thisStepProps?.current ? 'current' : null
        // ];
        // console.log('mapStep', child);
        // return child;
        // // return cloneElement(child, {
            // // onClick: event => {
                // // // TODO
                // // onStepChange(event, index);
            // // },
            // // modifiers,
            // // connector: connectorType(child, index)
        // // });
    // };
    */

    const nextStep = () => {
        if (selectedIndex < stepCount - 1) {
            setSelectedIndex(selectedIndex + 1);
            onStepChange();
        } else {
            onComplete();
        }
    };

    const extraStepProps = (step, index) => {
        const key = step.props.key;
        const { visited } = stepStatuses[key] || {};
        const modifiers = {
            completed: false,
            current: index === selectedIndex,
            upcoming: index > selectedIndex,
            'no-label': false,
            stacked: stacked && !index === selectedIndex,
            'stacked-top': stacked && index === selectedIndex - 1,
            active: visited
        };

        return {
            modifiers: Object.entries(modifiers)
                .filter(([, value]) => !!value)
                .map(([mkey]) => mkey)
        };
    };

    const renderHeader = () =>
        React.Children.toArray(children).map((child, index) =>
            React.cloneElement(child, extraStepProps(child, index)));

    // console.log({ steps, selectedIndex, stepProps });
    const currentChild = steps[selectedIndex];
    // const currentChildProps = stepProps[currentChild.props.key];
    const valid = currentChild?.props.validator();
    return (<>
        <section className={wizardClasses}>
            <nav className={classnames(`${cssNamespace}-wizard__navigation`)}>
                <ul className={progressBarClasses}>
                    {renderHeader()}
                </ul>
            </nav>
        </section>
        {currentChild?.props.children}
        {valid && <div className={classnames(`${cssNamespace}-wizard__next-step`)}>
            <Button compact emphasized
                onClick={nextStep}>
                {currentChild?.props.nextLabel}
            </Button>
        </div>}
        {/*React.Children.toArray(children)
            .filter(child => child.props.modifiers.includes('current'))
            .map((child, index) => (
                <section
                    className={contentClasses}
                    key={index}>
                    {child.props.children}
                </section>
            ))*/}
        <footer>
            <Bar rightComponents={[
                <Button compact>Cancel</Button>
            ]} />
        </footer>
    </>);
}
Wizard.propTypes = {
    background: PropTypes.oneOf(WIZARD_CONTENT_BACKGROUNDS),
    branching: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    /** By default wizard body has no horizontal paddings. Add a size to modify the padding: 's', 'm', 'l', 'xl' */
    contentSize: PropTypes.oneOf(WIZARD_SIZES),
    /** By default wizard header has no horizontal paddings. Add a size to modify the padding: 's', 'm', 'l', 'xl' */
    headerSize: PropTypes.oneOf(WIZARD_SIZES),
    stacked: PropTypes.bool,

    onComplete: PropTypes.func,
    onStepChange: PropTypes.func
};
Wizard.defaultProps = {
    onComplete: () => {},
    onStepChange: () => {}
};

Wizard.Step = WizardStep;

export default withStyles(Wizard);
