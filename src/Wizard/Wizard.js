import Bar from '../Bar/Bar';
import Button from '../Button/Button';
import classnamesBind from 'classnames/bind';
import PropTypes from 'prop-types';
import withStyles from '../utils/withStyles';

import React, { useState } from 'react';

import styles from 'fundamental-styles/dist/wizard.css';

const classnames = classnamesBind.bind(styles);

const WIZARD_SIZES = ['s', 'm', 'l', 'xl'];

function Wizard({
    branching,
    children,
    className,
    contentSize,
    cssNamespace,
    headerSize,
    size
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
        [`${cssNamespace}-wizard__progress-bar--${headerSize || size}`]: headerSize || size
    });

    const contentClasses = classnames({
        [`${cssNamespace}-fd-wizard__content`]: true,
        [`${cssNamespace}-fd-wizard__content--${contentSize || size}`]: contentSize || size
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

    const handleStepSelection = () => {
        // console.log('step selected', e);
        // NOOP
    };

    const cloneElement = (child, index) => React.cloneElement(child, {
        onClick: handleStepSelection,
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
        {React.Children.toArray(children).map((child, index) => (
            <section
                aria-expanded={selectedIndex === index}
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
/*
  <nav class="fd-wizard__navigation" aria-label="Wizard Navigation 1">
    <ul class="fd-wizard__progress-bar">
      <li class="fd-wizard__step fd-wizard__step--completed">
        <div class="fd-wizard__step-wrapper">
          <a class="fd-wizard__step-container" tabindex="0" aria-label="Step 1: One line">
            <span class="fd-wizard__step-indicator">
                            <i class="fd-wizard__icon sap-icon--accept" role="presentation"></i>
                        </span>
            <div class="fd-wizard__label-container">
              <span class="fd-wizard__label">Step 1: One line</span>
            </div>
          </a>
          <span class="fd-wizard__connector fd-wizard__connector--active"></span>
        </div>
      </li>
      <li class="fd-wizard__step fd-wizard__step--current">
        <div class="fd-wizard__step-wrapper">
          <a class="fd-wizard__step-container" tabindex="0" aria-label="Step 2: Very long label that truncates on the second line" aria-current="step">
            <span class="fd-wizard__step-indicator">2</span>
            <div class="fd-wizard__label-container">
              <span class="fd-wizard__label">
                                Step 2: Very long label that truncates on the second line
                            </span>
            </div>
          </a>
          <span class="fd-wizard__connector"></span>
        </div>
      </li>
      <li class="fd-wizard__step fd-wizard__step--upcoming">
        <div class="fd-wizard__step-wrapper">
          <a class="fd-wizard__step-container" tabindex="0" aria-label="Step 3: One line truncates" aria-disabled="true">
            <span class="fd-wizard__step-indicator">3</span>
            <div class="fd-wizard__label-container fd-wizard__label-container--optional">
              <span class="fd-wizard__label">Step 3: One line truncates</span>
              <span class="fd-wizard__optional-text">(Optional)</span>
            </div>
          </a>
          <span class="fd-wizard__connector"></span>
        </div>
      </li>
      <li class="fd-wizard__step fd-wizard__step--upcoming">
        <div class="fd-wizard__step-wrapper">
          <a class="fd-wizard__step-container" tabindex="0" aria-label="Step 4: Future Step" aria-disabled="true">
            <span class="fd-wizard__step-indicator">4</span>
            <div class="fd-wizard__label-container">
              <span class="fd-wizard__label">Step 4: Future Step</span>
            </div>
          </a>
        </div>
      </li>
    </ul>
  </nav>
  <section class="fd-wizard__content" id="wizard-section-1" style="min-height: 300px;">
    <div>
      Sed fermentum, mi et tristique ullamcorper, sapien sapien faucibus sem, quis pretium nibh lorem malesuada diam. Nulla quis arcu aliquet, feugiat massa semper, volutpat diam. Nam vitae ante posuere, molestie neque sit amet, dapibus velit. Maecenas eleifend tempor lorem. Mauris vitae elementum mi, sed eleifend ligula. Nulla tempor vulputate dolor, nec dignissim quam convallis ut. Praesent vitae commodo felis, ut iaculis felis. Fusce quis eleifend sapien, eget facilisis nibh. Suspendisse est velit, scelerisque ut commodo eget, dignissim quis metus. Cras faucibus consequat gravida. Curabitur vitae quam felis. Phasellus ac leo eleifend, commodo tortor et, varius quam. Aliquam erat volutpat
    </div>
    <div class="fd-wizard__next-step">
      <button class="fd-button fd-button--compact fd-button--emphasized">Step 3</button>
    </div>
  </section>
  <footer>
    <div class="fd-bar fd-bar--page fd-bar--footer">
      <div class="fd-bar__right">
        <div class="fd-bar__element">
          <button class="fd-button fd-button--transparent fd-button--compact">Cancel</button>
        </div>
      </div>
    </div>
  </footer>
</section>
*/
}
Wizard.propTypes = {
    branching: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    contentSize: PropTypes.oneOf(WIZARD_SIZES),
    headerSize: PropTypes.oneOf(WIZARD_SIZES),
    size: PropTypes.oneOf(WIZARD_SIZES)
};

export default withStyles(Wizard);
