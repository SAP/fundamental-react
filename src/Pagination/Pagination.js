import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

export class Pagination extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            selectedPage: this.props.initialPage || 1
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
            itemsPerPage = 10,
            displayTotal = true,
            totalText,
            className,
            linkProps,
            displayTotalProps,
            prevProps,
            nextProps,
            ...props
        } = this.props;

        // calculate number of pages based on item total and items per page
        // check to make sure itemsPerPage != 0
        this.numberOfPages = Math.ceil(
            itemsTotal / (itemsPerPage ? itemsPerPage : 10)
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
                        {itemsTotal} {totalText || 'items'}
                    </span>
                ) : (
                    ''
                )}

                <nav className='fd-pagination__nav'>
                    <a
                        {...prevProps}
                        aria-disabled={this.state.selectedPage === 1}
                        aria-label='Previous'
                        className='fd-pagination__link fd-pagination__link--previous'
                        href='#'
                        onClick={this.navigateBack} />
                    {this.createPaginationLinks(this.numberOfPages)}
                    <a
                        {...nextProps}
                        aria-disabled={
                            this.state.selectedPage === this.numberOfPages
                        }
                        aria-label='Next'
                        className='fd-pagination__link fd-pagination__link--next'
                        href='#'
                        onClick={this.navigateForward} />
                </nav>
            </div>
        );
    }
}

Pagination.propTypes = {
    itemsTotal: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string,
    displayTotal: PropTypes.bool,
    initialPage: PropTypes.number,
    itemsPerPage: PropTypes.number,
    linkProps: PropTypes.object,
    nextProps: PropTypes.object,
    prevProps: PropTypes.object,
    totalText: PropTypes.string
};
