import Button from '../Button/Button';
import classnamesBind from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';
import withStyles from '../utils/withStyles';
// import { WIZARD_CONTENT_BACKGROUNDS, WIZARD_SIZES } from './Wizard';
// import { WIZARD_CONTENT_BACKGROUNDS, WIZARD_SIZES } from '../utils/constants';

import styles from 'fundamental-styles/dist/wizard.css';

const classnames = classnamesBind.bind(styles);

export const WIZARD_SIZES = ['sm', 'md', 'lg', 'xl'];
export const WIZARD_CONTENT_BACKGROUNDS = [
    'solid',
    'list',
    'transparent'
];
/** WizardContent is a wrapper for wizard content. It is meant to be
 * used when building the wizard manually, without the build-in logic.
 *
 * Apart from rendering content it provides the next step button as necessary.
 *
 * @returns {Node} WizardContent component
 */
function WizardContent({
    background,
    children,
    className,
    cssNamespace,
    nextLabel,
    onNext,
    showNext,
    size,
    ...props
}) {
    const contentClasses = classnames(
        `${cssNamespace}-wizard__content`,
        className,
        {
            [`${cssNamespace}-wizard__content--${size}`]: size,
            [`${cssNamespace}-wizard__content--${background}`]: background
        }
    );
    const nextStepClasses = classnames(`${cssNamespace}-wizard__next-step`);

    return (
        <section className={contentClasses} {...props}>
            {children}
            {showNext && <div className={nextStepClasses}>
                <Button
                    compact
                    onClick={onNext}
                    option='emphasized'>
                    {nextLabel}
                </Button>
            </div>}
        </section>
    );
}
WizardContent.propTypes = {
    /** Content background styling */
    background: PropTypes.oneOf(WIZARD_CONTENT_BACKGROUNDS),
    /** Wizard.Step nodes to render as steps */
    children: PropTypes.node,
    /** CSS class(es) to add to the element */
    className: PropTypes.string,
    /** Label to use on the next step button */
    nextLabel: PropTypes.string,
    /** Show the "next step" button */
    showNext: PropTypes.bool,
    /** By default wizard header has no horizontal paddings. Add a size to modify the padding */
    size: PropTypes.oneOf(WIZARD_SIZES),

    /**
     * Callback function; triggered when the next step button is clicked.
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent. See https://reactjs.org/docs/events.html.
     * @returns {void}
    */
    onNext: PropTypes.func
};
WizardContent.defaultProps = {
    onNext: () => {}
};

export default withStyles(WizardContent);
