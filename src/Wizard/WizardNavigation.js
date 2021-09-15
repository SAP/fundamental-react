import classnamesBind from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';
import withStyles from '../utils/withStyles';
// import { WIZARD_SIZES } from './Wizard';

import styles from 'fundamental-styles/dist/wizard.css';

const classnames = classnamesBind.bind(styles);

const WIZARD_SIZES = ['sm', 'md', 'lg', 'xl'];

/** WizardContainer is a wrapper for wizard navigation bar. It is meant to be
 * used with `Wizard.Step` components as children when building the wizard
 * manually, without the build-in logic.
 *
 * @returns {Node} WizardContainer component
 */
function WizardNavigation({
    children,
    className,
    cssNamespace,
    size,
    ...props
}) {
    const navigationClasses = classnames(
        `${cssNamespace}-wizard__navigation`,
        className,
    );

    const progressBarClasses = classnames({
        [`${cssNamespace}-wizard__progress-bar`]: true,
        [`${cssNamespace}-wizard__progress-bar--${size}`]: size
    });

    return (
        <nav className={navigationClasses} {...props}>
            <ul className={progressBarClasses}>
                {children}
            </ul>
        </nav>
    );
}
WizardNavigation.propTypes = {
    /** Wizard.Step nodes to render as steps */
    children: PropTypes.node,
    /** CSS class(es) to add to the element */
    className: PropTypes.string,
    /** By default wizard header has no horizontal paddings. Add a size to modify the padding */
    size: PropTypes.oneOf(WIZARD_SIZES)
};

export default withStyles(WizardNavigation);
