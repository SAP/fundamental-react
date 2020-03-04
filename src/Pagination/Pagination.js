
import classnames from 'classnames';
import CustomPropTypes from '../utils/CustomPropTypes/CustomPropTypes';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

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

        //if numberOfPages is more than noOfPages
        if (numberOfPages > this.props.visiblePageTotal) {
            linksToBeAdded = this.props.visiblePageTotal;
            //highest page number possible
            let maxPageNumber = this.state.selectedPage + Math.ceil(this.props.visiblePageTotal / 2);
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
        const aPages = Array(linksToBeAdded)
            .fill()
            .map((link, index) => (
                <a
                    {...this.props.linkProps}
                    aria-selected={this.state.selectedPage === index + pageNumberOffset}
                    className='fd-pagination__link'
                    href='#'
                    key={index}
                    onClick={this.pageClicked}>
                    {index + pageNumberOffset}
                </a>
            ));
        return aPages;
    };

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
    itemsTotal: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string,
    disableStyles: PropTypes.bool,
    displayTotal: PropTypes.bool,
    displayTotalProps: PropTypes.object,
    initialPage: PropTypes.number,
    itemsPerPage: PropTypes.number,
    linkProps: PropTypes.object,
    localizedText: CustomPropTypes.i18n({
        next: PropTypes.string,
        previous: PropTypes.string
    }),
    nextProps: PropTypes.object,
    prevProps: PropTypes.object,
    totalText: PropTypes.string,
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
    visiblePageTotal: 10
};

Pagination.propDescriptions = {
    itemsTotal: 'Total number of items. itemsTotal / itemsPerPage calculates how many navigation items should be shown in the control.',
    displayTotal: 'Set to **true** to show total number of items along with `totalText` string.',
    initialPage: 'Initial page to be selected.',
    itemsPerPage: 'Number of items to display on page.',
    linkProps: 'Additional props to be spread to the page number `<a>` elements.',
    localizedTextShape: {
        next: 'Value for aria-label on the next <a> element.',
        previous: 'Value for aria-label on the previous <a> element.'
    },
    nextProps: 'Additional props to be spread to the next arrow `<a>` element.',
    prevProps: 'Additional props to be spread to the previous arrow `<a>` element.',
    totalText: 'Localized text to display next to the total number of items.  Used with `displayTotal`.',
    visiblePageTotal: 'Total number of visible pages.'
};

export default Pagination;
