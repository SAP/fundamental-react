import classnames from 'classnames';
import Icon from '../Icon/Icon';
import { INPUT_GROUP_ADDON_TYPES } from '../utils/constants';
import PropTypes from 'prop-types';
import React from 'react';
import withStyles from '../utils/WithStyles/WithStyles';

const InputGroupAddon = ({
    addon,
    actions,
    addonClassNames,
    children,
    className,
    compact,
    disableStyles,
    glyph,
    ...otherProps
}) => {

    let returnObject = children;

    if (glyph && addon === 'icon') {
        returnObject = (
            <Icon
                disableStyles={disableStyles}
                glyph={glyph}
                role='presentation' />
        );
    }

    children = React.Children.map(children, (child) => {
        return React.cloneElement(child, {
            actions: actions,
            compact: compact
        });
    });

    const addonClasses = classnames(
        addonClassNames,
        'fd-input-group__addon',
        [{ 'fd-input-group__addon--button': !!actions || addon === 'button' }],
        [{ 'fd-input-group__addon--button--compact': compact && addon === 'button' }],
    );

    return (
        <span className={addonClasses} {...otherProps} >
            {returnObject}
        </span>
    );
};

InputGroupAddon.displayName = 'InputGroupAddon';

InputGroupAddon.propTypes = {
    actions: PropTypes.bool,
    addon: PropTypes.oneOf(INPUT_GROUP_ADDON_TYPES),
    addonClassNames: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
    compact: PropTypes.bool,
    customStyles: PropTypes.object,
    disableStyles: PropTypes.bool,
    glyph: PropTypes.string
};

InputGroupAddon.propDescriptions = {
    addon: 'The value of the add-on.',
    addonClassNames: 'CSS class(es) to add to the addon element.',
    glyph: 'The icon to include if the addon is an icon. See the icon page for the list of icons.'
};

export { InputGroupAddon as __InputGroupAddon };

export default withStyles(InputGroupAddon, { cssFile: 'input-group', fonts: true });
