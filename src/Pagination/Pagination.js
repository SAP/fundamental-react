
import classnames from 'classnames';
import CustomPropTypes from '../utils/CustomPropTypes/CustomPropTypes';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

/** **Pagination** is commonly used for tables and tiles. It allows
users to see how many pages of content exist, to navigate and
highlights which page they are currently viewing. This control
does not handle how many tiles or rows to display in a table.
This control simply adds a nice user experience to handle how to
navigate through a collection. The handling of which items to
display needs to be handled in the function that is passed in
the \`onClick\` method. */
class Pagination extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            selectedPage: this.props.initialPage
        };
    }

    componentDidMount() {
        if (!this.props.disableStyles) {
            require('fundamental-styles/dist/icon.css');
            require('fundamental-styles/dist/pagination.css');
        }
    }

    // number of pages to show
    numberOfPages = 0;

    // page directly clicked
    pageClicked = event => {
        event.preventDefault();
        this.setState(
            {
                selectedPage: +event.target.text
            },
            () => this.props.onClick(this.state.selectedPage)
        );
    };

    // advance to previous page
    navigateBack = () => {
        if (this.state.selectedPage === 1) {
            return;
        }

        this.setState(
            prevState => {
                return { selectedPage: --prevState.selectedPage };
            },
            () => this.props.onClick(this.state.selectedPage)
        );
    };

    // advance to next page
    navigateForward = () => {
        if (this.state.selectedPage === this.numberOfPages) {
            return;
        }

        this.setState(
            prevState => {
                return { selectedPage: ++prevState.selectedPage };
            },
            () => this.props.onClick(this.state.selectedPage)
        );
    };

    // create pagination links
    createPaginationLinks = (numberOfPages) => {
        let linksToBeAdded = numberOfPages;
        let pageNumberOffset = 1;
        let maxPageNumber = this.state.selectedPage + Math.ceil(this.props.visiblePageTotal / 2);
        //if numberOfPages is more than noOfPages
        if (numberOfPages > this.props.visiblePageTotal) {
            linksToBeAdded = this.props.visiblePageTotal;
            //highest page number possible
            //all but the last page, selected page is the center of selection
            if (maxPageNumber <= numberOfPages) {
                pageNumberOffset = this.state.selectedPage - Math.floor(this.props.visiblePageTotal / 2) + 1;
            } else {
                //last page,selected page is to the right of the center
                pageNumberOffset = numberOfPages - Math.floor(this.props.visiblePageTotal) + 1;
            }
            //prevent negative values on first page
            if (pageNumberOffset <= 0) {
                pageNumberOffset = 1;
            }
        }

        // create an array with number of pages and fill it with links
        let aPages = [];
        aPages = Array(linksToBeAdded)
            .fill()
            .map((link, index) => (
                this.getPaginationLink(index, pageNumberOffset)
            ));
        if (pageNumberOffset > 1) {
            let prefix = [];
            prefix.push(this.getPaginationLink(0, 1));
            prefix.push(this.getPaginationMoreIndicator());
            aPages.unshift(prefix);
        }
        if ((pageNumberOffset + linksToBeAdded) <= this.numberOfPages ) {
            let postfix = [];
            postfix.push(this.getPaginationMoreIndicator());
            postfix.push(this.getPaginationLink(0, this.numberOfPages));
            aPages.push(postfix);
        }
        return aPages;
    };

    getPaginationLink = (index, pageNumberOffset) => {
        return (<a
            {...this.props.linkProps}
            aria-selected={this.state.selectedPage === index + pageNumberOffset}
            className='fd-pagination__link'
            href='#'
            key={index}
            onClick={this.pageClicked}>
            {index + pageNumberOffset}
        </a>);
    }
    getPaginationMoreIndicator = () => (<span className='fd-pagination__link--more' />);
    render() {
        const {
            itemsTotal,
            itemsPerPage,
            displayTotal,
            totalText,
            className,
            disableStyles,
            linkProps,
            localizedText,
            displayTotalProps,
            prevProps,
            nextProps,
            onClick,
            initialPage,
            visiblePageTotal,
            ...props
        } = this.props;

        // calculate number of pages based on item total and items per page
        // check to make sure itemsPerPage != 0
        this.numberOfPages = Math.ceil(
            itemsTotal / (itemsPerPage || 10)
        );

        const paginationClasses = classnames(
            'fd-pagination',
            className
        );

        return (
            <div
                {...props}
                className={paginationClasses}>
                {displayTotal ? (
                    <span
                        {...displayTotalProps}
                        className='fd-pagination__total'>
                        {itemsTotal} {totalText}
                    </span>
                ) : (
                    ''
                )}

                <nav className='fd-pagination__nav'>
                    <a
                        {...prevProps}
                        aria-disabled={this.state.selectedPage === 1}
                        aria-label={localizedText.previous}
                        className='fd-pagination__link fd-pagination__link--previous'
                        href='#'
                        onClick={this.navigateBack} />
                    {this.createPaginationLinks(this.numberOfPages)}
                    <a
                        {...nextProps}
                        aria-disabled={
                            this.state.selectedPage === this.numberOfPages
                        }
                        aria-label={localizedText.next}
                        className='fd-pagination__link fd-pagination__link--next'
                        href='#'
                        onClick={this.navigateForward} />
                </nav>
            </div>
        );
    }
}

Pagination.displayName = 'Pagination';

Pagination.propTypes = {
    /** Total number of items. itemsTotal / itemsPerPage calculates
     * how many navigation items should be shown in the control */
    itemsTotal: PropTypes.number.isRequired,
    /** Callback function when user clicks on the component*/
    onClick: PropTypes.func.isRequired,
    /** CSS class(es) to add to the element */
    className: PropTypes.string,
    /** Internal use only */
    disableStyles: PropTypes.bool,
    /** Set to **true** to show total number of items along with `totalText` string */
    displayTotal: PropTypes.bool,
    /** Additional props to be spread to the display total `<span>` elements */
    displayTotalProps: PropTypes.object,
    /** Initial page to be selected */
    initialPage: PropTypes.number,
    /** Number of items to display on page */
    itemsPerPage: PropTypes.number,
    /** Additional props to be spread to the page number `<a>` elements */
    linkProps: PropTypes.object,
    localizedText: CustomPropTypes.i18n({
        /** Value for aria-label on the next <a> element */
        next: PropTypes.string,
        /** Value for aria-label on the previous <a> element */
        previous: PropTypes.string
    }),
    /** Additional props to be spread to the next arrow `<a>` element */
    nextProps: PropTypes.object,
    /** Additional props to be spread to the previous arrow `<a>` element */
    prevProps: PropTypes.object,
    /** Localized text to display next to the total number of items.  Used with `displayTotal` */
    totalText: PropTypes.string,
    /** Total number of visible pages. Three page links will be displayed as default,along with the first and last page links*/
    visiblePageTotal: PropTypes.number
};

Pagination.defaultProps = {
    displayTotal: true,
    initialPage: 1,
    itemsPerPage: 10,
    localizedText: {
        next: 'Next',
        previous: 'Previous'
    },
    totalText: 'items',
    visiblePageTotal: 3
};

export default Pagination;
