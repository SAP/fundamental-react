import Bar from '../Bar/Bar';
import Button from '../Button/Button';
import classnamesBind from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';
import withStyles from '../utils/withStyles';

import styles from 'fundamental-styles/dist/wizard.css';

const classnames = classnamesBind.bind(styles);

/** WizardFooter provides a common footer bar for `Wizard` component with a
 * "Cancel" button. It is meant to be used when building the wizard manually,
 * without the build-in logic.
 *
 * @returns {Node} WizardContent component
 */
function WizardFooter({
    children,
    className,
    label,
    onCancel,
    ...props
}) {
    return (
        <Bar
            className={classnames(className)}
            rightComponents={[
                ...(React.Children.toArray(children) || []),
                <Button
                    compact
                    onClick={onCancel}
                    option='transparent'>
                    {label}
                </Button>
            ]}
            type='footer'
            {...props} />
    );
}
WizardFooter.propTypes = {
    /** Nodes to render as extra content before the `Cancel` button */
    children: PropTypes.node,
    /** CSS class(es) to add to the element */
    className: PropTypes.string,
    /** Cancel button label */
    label: PropTypes.string,

    /**
     * Callback function; triggered when the cancel button is pressed.
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent. See https://reactjs.org/docs/events.html.
     * @returns {void}
    */
    onCancel: PropTypes.func
};
WizardFooter.defaultProps = {
    label: 'Cancel',
    onCancel: () => {}
};

export default withStyles(WizardFooter);
