import classnames from 'classnames';
import ListFooter from './_ListFooter';
import ListHeader from './_ListHeader';
import ListIcon from './_ListIcon';
import ListItem from './_ListItem';
import ListText from './_ListText';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

const List = React.forwardRef(({
    children,
    className,
    compact,
    disableStyles,
    noBorder,
    ...props
}, ref) => {

    useEffect(() => {
        if (!disableStyles) {
            require('fundamental-styles/dist/list.css');
        }
    }, []);

    const ListClasses = classnames(
        'fd-list',
        {
            'fd-list--compact': compact,
            'fd-list--no-border': noBorder
        },
        className
    );

    return (
        <ul {...props} className={ListClasses}
            ref={ref}>
            {children}
        </ul>
    );
});

List.displayName = 'List';

List.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    compact: PropTypes.bool,
    disableStyles: PropTypes.bool,
    noBorder: PropTypes.bool
};


List.Footer = ListFooter;
List.Header = ListHeader;
List.Item = ListItem;
List.Icon = ListIcon;
List.Text = ListText;


List.propDescriptions = {
    noBorder: 'Set to **true** to remove borders from the List component.'
};

export default List;
