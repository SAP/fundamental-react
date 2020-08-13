import classnames from 'classnames';
import ListByline from './_ListByline';
import ListFooter from './_ListFooter';
import ListHeader from './_ListHeader';
import ListIcon from './_ListIcon';
import ListItem from './_ListItem';
import ListSelection from './_ListSelection';
import ListText from './_ListText';
import PropTypes from 'prop-types';
import React from 'react';
import 'fundamental-styles/dist/list.css';
import useUniqueId from '../utils/useUniqueId';

/** **List** and **Table** are similar as both usually contain a vertical list of data,
but lists generally contain basic data and tables tend to hold more complex data.
If the list is a complex hierarchy, it is best to use a **Tree**. */
const List = React.forwardRef(({
    children,
    className,
    compact,
    hasByline,
    id,
    navigation,
    noBorder,
    partialNavigation,
    selectable,
    ...props
}, ref) => {

    const ListClasses = classnames(
        'fd-list',
        {
            'fd-list--selection': selectable,
            'fd-list--compact': compact,
            'fd-list--no-border': noBorder,
            'fd-list--byline': hasByline,
            'fd-list--navigation': navigation || partialNavigation,
            'fd-list--navigation-indication': navigation || partialNavigation
        },
        className
    );

    const isHeader = (child) => child?.type?.displayName === ListHeader.displayName;
    const isFooter = (child) => child?.type?.displayName === ListFooter.displayName;

    const listHeader = React.Children.toArray(children).find(isHeader);
    const listFooter = React.Children.toArray(children).find(isFooter);
    const listId = useUniqueId(id);

    return (
        <>
            {listHeader && React.cloneElement(listHeader, { id: `${listId}-label` })}
            <ul
                {...props}
                {...(selectable ? { 'role': 'listbox' } : null)}
                aria-labelledby={listHeader ? `${listId}-label` : null}
                className={ListClasses}
                id={`${listId}-list`}
                ref={ref}>
                { React.Children.map(children, child => {
                    if (!(isHeader(child) || isFooter(child)) ) {
                        return React.cloneElement(child, { hasByline, navigation, partialNavigation });
                    }
                } ) }
            </ul>
            {listFooter}
        </>
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
    /** Set to **true** if any list item has a byline. */
    hasByline: PropTypes.bool,
    /** Unique id for the list, used to associate `List.Header` as the list label for accessibility. A generated value will be used if not set.*/
    id: PropTypes.string,
    /** Set to **true** if all list items are links */
    navigation: PropTypes.bool,
    /** Set to **true** to remove borders from the List component. */
    noBorder: PropTypes.bool,
    /** Set to **true** if any list item is a link, but not all */
    partialNavigation: PropTypes.bool,
    /** Set to **true** if list is an option list i.e. `List.Item` contain `List.Selection`. Do not add non-selectable list items to such lists for accessibility reasons.*/
    selectable: PropTypes.bool
};


List.Footer = ListFooter;
List.Header = ListHeader;
List.Item = ListItem;
List.Icon = ListIcon;
List.Text = ListText;
List.Byline = ListByline;
List.Selection = ListSelection;

export default List;
