import Bar from '../Bar/Bar';
import Button from '../Button/Button';
import classnamesBind from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';
import withStyles from '../utils/withStyles';

import styles from 'fundamental-styles/dist/wizard.css';

const classnames = classnamesBind.bind(styles);

function WizardFooter({
    children,
    className,
    label,
    // cssNamespace,
    onCancel
}) {
    return (
        <Bar
            className={classnames(className)}
            rightComponents={[
                ...React.Children.toArray(children),
                <Button
                    compact
                    onClick={onCancel}
                    option='transparent'>
                    {label}
                </Button>
            ]}
            type='footer' />
    );
}
WizardFooter.propTypes = {
    /** Wizard.Step nodes to render as steps */
    children: PropTypes.node,
    /** CSS class(es) to add to the element */
    className: PropTypes.string,
    label: PropTypes.string,

    onCancel: PropTypes.func
};
WizardFooter.defaultProps = {
    onCancel: () => {}
};

export default withStyles(WizardFooter);
