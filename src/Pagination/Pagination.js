
import classnames from 'classnames';
import CustomPropTypes from '../utils/CustomPropTypes/CustomPropTypes';
import PropTypes from 'prop-types';
import withStyles from '../utils/WithStyles/WithStyles';
import React, { Component } from 'react';

class Pagination extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            selectedPage: this.props.initialPage
        };
    }

    // number of pages to show
    numberOfPages = 0;

    // page directly clicked
    pageClicked = event => {
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
    createPaginationLinks = numberOfPages => {
        // create an array with number of pages and fill it with links
        const aPages = Array(numberOfPages)
            .fill()
            .map((link, index) => (
                <a
                    {...this.props.linkProps}
                    aria-selected={this.state.selectedPage === index + 1}
                    className='fd-pagination__link'
                    href='#'
                    key={index}
                    onClick={this.pageClicked}>
                    {index + 1}
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
    customStyles: PropTypes.object,
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
    totalText: PropTypes.string
};

Pagination.defaultProps = {
    displayTotal: true,
    initialPage: 1,
    itemsPerPage: 10,
    localizedText: {
        next: 'Next',
        previous: 'Previous'
    },
    totalText: 'items'
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
    totalText: 'Localized text to display next to the total number of items.  Used with `displayTotal`.'
};

export { Pagination as __Pagination };

export default withStyles(Pagination, { cssFile: 'pagination', fonts: true, icons: true });
