import PropTypes from 'prop-types';
import withStyles from '../utils/withStyles';
import Wizard from './Wizard';
import React, { createRef, useEffect, useState } from 'react';

function WizardFlow({
    children,
    selectedIndex,
    ...props
}) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [lastIndex, setLastIndex] = useState(0);
    const [steps, setSteps] = useState([]);
    const ref = createRef();

    useEffect(() => {
        // TODO
        // console.log('setCurrentIndex', selectedIndex);
        setCurrentIndex(selectedIndex);
    }, [selectedIndex]);

    useEffect(() => {
        if (currentIndex > lastIndex) {
            setLastIndex(currentIndex);
        }
    }, [currentIndex]);


    const mapStep = (child, index) => {
        let modifiers = child.props.modifiers || [];
        const current = currentIndex === index;
        const visited = steps[index]?.visited || current;
        const last = currentIndex === lastIndex;

        if (currentIndex === index) {
            modifiers = [...modifiers, 'active', 'current'];
        }
        if (visited && !last) {
            modifiers = [...modifiers, 'completed'];
        }

        let glyph = child.props.glyph;
        if (!glyph && visited && !last) {
            glyph = 'accept';
        }


        const component = React.cloneElement(child, {
            onClick: event => handleStepClick(event, index),
            glyph,
            modifiers
        });

        return {
            current,
            component,
            visited,
            glyph,
            last
        };
    };

    useEffect(() => {
        setSteps(React.Children.toArray(children).map(mapStep));
    }, [children, currentIndex]);

    const handleStepClick = (event, index) => {
        if (index < currentIndex) {
            setCurrentIndex(index);
        }
    };

    return (<Wizard ref={ref} {...props}>
        {steps.map(step => step.component)}
    </Wizard>);
}
Wizard.propTypes = {
    children: PropTypes.node,
    selectedndex: PropTypes.number
};

export default withStyles(WizardFlow);
