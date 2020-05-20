import classnames from 'classnames';
import ListByline from './_ListByline';
import ListFooter from './_ListFooter';
import ListHeader from './_ListHeader';
import ListIcon from './_ListIcon';
import ListItem from './_ListItem';
import ListSelection from './_ListSelection';
import ListText from './_ListText';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

/** Lists and tables are similar as both usually contain a vertical list of data,
but lists generally contain basic data and tables tend to hold more complex data.
If the list is a complex hierarchy, it is best to use a **Tree**. */
const List = React.forwardRef(({
    children,
    className,
    compact,
    disableStyles,
    hasByline,
    navigation,
    noBorder,
    partialNavigation,
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
            'fd-list--no-border': noBorder,
            'fd-list--byline': hasByline,
            'fd-list--navigation': navigation || partialNavigation,
            'fd-list--navigation-indication': navigation || partialNavigation
        },
        className
    );

    return (
        <ul {...props} className={ListClasses}
            ref={ref}>
            { React.Children.map(children, child => React.cloneElement(child, { hasByline, navigation, partialNavigation })) }
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
    /** Set to **true** if any list item has a byline. */
    hasByline: PropTypes.bool,
    /** Set to **true** if all list items are links */
    navigation: PropTypes.bool,
    /** Set to **true** to remove borders from the List component. */
    noBorder: PropTypes.bool,
    /** Set to **true** if any list item is a link, but not all */
    partialNavigation: PropTypes.bool
};


List.Footer = ListFooter;
List.Header = ListHeader;
List.Item = ListItem;
List.Icon = ListIcon;
List.Text = ListText;
List.Byline = ListByline;
List.Selection = ListSelection;

export default List;
