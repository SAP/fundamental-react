import classnames from 'classnames';
import ListFooter from './_ListFooter';
import ListHeader from './_ListHeader';
import ListIcon from './_ListIcon';
import ListItem from './_ListItem';
import ListText from './_ListText';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

/** **List** and **Table** are similar as both usually contain a vertical list of data,
but lists generally contain basic data and tables tend to hold more complex data.
If the list is a complex hierarchy, it is best to use a **Tree**. */
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
    /** Node(s) to render within the component */
    children: PropTypes.node,
    /** CSS class(es) to add to the element */
    className: PropTypes.string,
    /** Set to **true** to enable compact mode */
    compact: PropTypes.bool,
    /** Internal use only */
    disableStyles: PropTypes.bool,
    /** Set to **true** to remove borders from the List component. */
    noBorder: PropTypes.bool
};


List.Footer = ListFooter;
List.Header = ListHeader;
List.Item = ListItem;
List.Icon = ListIcon;
List.Text = ListText;

export default List;
