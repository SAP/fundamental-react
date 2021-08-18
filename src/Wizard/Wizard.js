import Bar from '../Bar/Bar';
import Button from '../Button/Button';
import classnamesBind from 'classnames/bind';
import PropTypes from 'prop-types';
import withStyles from '../utils/withStyles';

import React, { useState } from 'react';

import styles from 'fundamental-styles/dist/wizard.css';

const classnames = classnamesBind.bind(styles);

const WIZARD_SIZES = ['s', 'm', 'l', 'xl'];

const WIZARD_CONTENT_BACKGROUNDS = [
    'solid',
    'list',
    'transparent'
];

function Wizard({
    background,
    branching,
    children,
    className,
    contentSize,
    cssNamespace,
    headerSize,
    onStepClick
}) {
    const stepCount = React.Children.toArray(children).length;
    // const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedIndex] = useState(0);

    const wizardClasses = classnames(
        `${cssNamespace}-wizard`,
        className,
    );

    const progressBarClasses = classnames({
        [`${cssNamespace}-wizard__progress-bar`]: true,
        [`${cssNamespace}-wizard__progress-bar--${headerSize}`]: headerSize
    });

    const contentClasses = classnames({
        [`${cssNamespace}-fd-wizard__content`]: true,
        [`${cssNamespace}-fd-wizard__content--${contentSize}`]: contentSize,
        [`${cssNamespace}-fd-wizard__content--${background}`]: background
    });

    const connectorType = (child, index) => {
        if (index === stepCount - 1) {
            return branching ? 'branching' : 'none';
        } else if (index === selectedIndex) {
            return 'active';
        } else {
            return 'default';
        }
    };

    const cloneElement = (child, index) => React.cloneElement(child, {
        onClick: event => onStepClick(event, index),
        selected: selectedIndex === index,
        index: index,
        connector: connectorType(child, index)
    });

    return (<>
        <section className={wizardClasses}>
            <nav className={classnames(`${cssNamespace}-wizard__navigation`)}>
                <ul className={progressBarClasses}>
                    {React.Children.toArray(children).map(cloneElement)}
                </ul>
            </nav>
        </section>
        {React.Children.toArray(children)
            .filter(child => child.props.modifiers.includes('current'))
            .map((child, index) => (
                <section
                    className={contentClasses}
                    key={index}>
                    {child.props.children}
                </section>
            ))}
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

    onStepClick: PropTypes.func
};
Wizard.defaultProps = {
    onStepClick: () => {}
};

export default withStyles(Wizard);
