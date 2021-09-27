import Button from '../Button/Button';
import classnamesBind from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';
import withStyles from '../utils/withStyles';

import styles from 'fundamental-styles/dist/wizard.css';

const classnames = classnamesBind.bind(styles);

function WizardNextStep({
    className,
    cssNamespace,
    label,
    onNext
}) {
    const nextStepClasses = classnames(`${cssNamespace}-wizard__next-step`, className);
    return (
        <nav className={nextStepClasses}>
            <Button
                compact
                onClick={onNext}
                option='emphasized'>
                {label}
            </Button>
        </nav>
    );
}
WizardNextStep.propTypes = {
    /** CSS class(es) to add to the element */
    className: PropTypes.string,
    /** Label to use on the next step button */
    label: PropTypes.string,

    /**
     * Callback function; triggered when the next step button is clicked.
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent. See https://reactjs.org/docs/events.html.
     * @returns {void}
    */
    onNext: PropTypes.func
};
WizardNextStep.defaultProps = {
    label: 'Next',
    onNext: () => {}
};

export default withStyles(WizardNextStep);
