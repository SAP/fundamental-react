import classnamesBind from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';
import withStyles from '../utils/withStyles';

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

    return (
        <section className={contentClasses} {...props}>
            {children}
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
    /** By default wizard header has no horizontal paddings. Add a size to modify the padding */
    size: PropTypes.oneOf(WIZARD_SIZES)
};

export default withStyles(WizardContent);
