import classnamesBind from 'classnames/bind';
import CustomPropTypes from '../utils/CustomPropTypes/CustomPropTypes';
import ListByline from './_ListByline';
import ListFooter from './_ListFooter';
import ListHeader from './_ListHeader';
import ListIcon from './_ListIcon';
import ListItem from './_ListItem';
import ListSelection from './_ListSelection';
import ListText from './_ListText';
import PropTypes from 'prop-types';
import React from 'react';
import useUniqueId from '../utils/useUniqueId';
import withStyles from '../utils/withStyles';
import styles from 'fundamental-styles/dist/list.css';

const classnames = classnamesBind.bind(styles);

/** **List** and **Table** are similar as both usually contain a vertical list of data,
but lists generally contain basic data and tables tend to hold more complex data.
If the list is a complex hierarchy, it is best to use a **Tree**. */
const List = React.forwardRef(({
    children,
    className,
    cssNamespace,
    compact,
    footer,
    footerClassName,
    hasByline,
    header,
    headerClassName,
    headerStyle,
    id,
    level,
    navigation,
    noBorder,
    partialNavigation,
    selectable,
    ...props
}, ref) => {

    const listClasses = classnames(
        `${cssNamespace}-list`,
        {
            [`${cssNamespace}-list--selection`]: selectable,
            [`${cssNamespace}-list--compact`]: compact,
            [`${cssNamespace}-list--no-border`]: noBorder,
            [`${cssNamespace}-list--byline`]: hasByline,
            [`${cssNamespace}-list--navigation`]: navigation || partialNavigation,
            [`${cssNamespace}-list--navigation-indication`]: navigation || partialNavigation
        },
        className
    );

    const listId = useUniqueId(id);
    const listHeaderId = `${listId}-header`;

    return (
        <>
            {header &&
                <List.Header
                    className={headerClassName}
                    headingStyle={headerStyle}
                    id={listHeaderId}
                    level={level}>
                    {header}
                </List.Header>
            }
            <ul
                {...props}
                aria-labelledby={header ? listHeaderId : null}
                className={listClasses}
                id={`${listId}-list`}
                ref={ref}
                role={selectable ? 'listbox' : 'list'}>
                { React.Children.map(children, child => React.cloneElement(child, { hasByline, navigation, partialNavigation })) }
            </ul>
            {footer &&
                <List.Footer className={footerClassName}>
                    {footer}
                </List.Footer>
            }
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
    /** The list footer as a String or a React node.*/
    footer: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** CSS class(es) to add to the list footer */
    footerClassName: PropTypes.string,
    /** Set to **true** if any list item has a byline. */
    hasByline: PropTypes.bool,
    /** The list header as a String or a React node.*/
    header: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** CSS class(es) to add to the list header */
    headerClassName: PropTypes.string,
    /** Heading style, if it should be different from the default style for the heading level. */
    headerStyle: CustomPropTypes.range(2, 6),
    /** Unique id for the list, used to associate `List.Header` as the list label for accessibility. A generated value will be used if not set.*/
    id: PropTypes.string,
    /** List header's semantic level. `<h1>` is reserved for the page title. It should not appear in components */
    level: CustomPropTypes.range(2, 6),
    /** Set to **true** if all list items are links */
    navigation: PropTypes.bool,
    /** Set to **true** to remove borders from the List component. */
    noBorder: PropTypes.bool,
    /** Set to **true** if any list item is a link, but not all */
    partialNavigation: PropTypes.bool,
    /** Set to **true** if list is an option list i.e. `List.Item` contain `List.Selection`. Do not add non-selectable list items to such lists for accessibility reasons.*/
    selectable: PropTypes.bool
};

List.defaultProps = {
    level: 4
};


List.Footer = ListFooter;
List.Header = ListHeader;
List.Item = ListItem;
List.Icon = ListIcon;
List.Text = ListText;
List.Byline = ListByline;
List.Selection = ListSelection;

export default withStyles(List);
