/* eslint-disable react/prop-types */
import React from 'react';
import withStyles from './WithStyles';

const _SubTestComponent = () => {
    <div>Foo</div>;
};

const TestComponent = React.forwardRef((props, ref) => {
    const {
        disableStyles,
        ...otherProps
    } = props;

    return <div {...otherProps} ref={ref}>Test</div>;
});
TestComponent.displayName = 'TestComponent';

TestComponent.SubComponent = _SubTestComponent;

export default withStyles(TestComponent, { cssFile: 'foo', fonts: true });
