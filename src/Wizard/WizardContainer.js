import classnamesBind from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';
import withStyles from '../utils/withStyles';

import styles from 'fundamental-styles/dist/wizard.css';

const classnames = classnamesBind.bind(styles);

/** WizardContainer is a minimal wrapper for the whole wizard component. Should
 * be used as a container for `Wizard.Navigation`, `Wizard.Content` and
 * `Wizard.Footer` components when building the wizard manually, without the
 * build-in logic (but it allows any content).
 *
 * @returns {Node} WizardContainer component
 */
function WizardContainer({
    children,
    className,
    cssNamespace,
    ...props
}) {
    const wizardClasses = classnames(
        `${cssNamespace}-wizard`,
        className,
    );

    return (
        <section className={wizardClasses} {...props}>{children}</section>
    );
}
WizardContainer.propTypes = {
    /** Wizard contents to render (should be `Wizard.Navigation`,
     * `Wizard.Content` and `Wizard.Footer` respectively) */
    children: PropTypes.node,
    /** CSS class(es) to add to the element */
    className: PropTypes.string
};

export default withStyles(WizardContainer);
