import classnamesBind from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';
import withStyles from '../utils/withStyles';

import styles from 'fundamental-styles/dist/wizard.css';

const classnames = classnamesBind.bind(styles);

function WizardContainer({
    children,
    className,
    cssNamespace
}) {
    const wizardClasses = classnames(
        `${cssNamespace}-wizard`,
        className,
    );

    return (
        <section className={wizardClasses}>{children}</section>
    );
}
WizardContainer.propTypes = {
    /** Wizard.Step nodes to render as steps */
    children: PropTypes.node,
    /** CSS class(es) to add to the element */
    className: PropTypes.string
};

export default withStyles(WizardContainer);
