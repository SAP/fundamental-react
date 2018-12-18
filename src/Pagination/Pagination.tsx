import React, { Component } from 'react';
import { ICommonProps } from '../common/common';

interface IPaginationProps extends ICommonProps {
  itemsPerPage?: number;
  itemsTotal: number;
  onClick: (selectedPage: number) => void;
  initialPage?: number;
  displayTotal?: boolean;
  totalText?: string;
}

interface IPaginationState {
  selectedPage: number;
}

export class Pagination extends Component<IPaginationProps, IPaginationState> {
  state: IPaginationState = {
    selectedPage: this.props.initialPage || 1
  };
  numberOfPages: number = 0;

  // page directly clicked
  pageClicked = (event: React.FormEvent<HTMLAnchorElement>) => {
    const { text }: any = event.target;
    this.setState(
      {
        selectedPage: +text
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
        let currentPage: number = prevState.selectedPage;
        return { selectedPage: --currentPage };
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
        let currentPage: number = prevState.selectedPage;
        return { selectedPage: ++currentPage };
      },
      () => this.props.onClick(this.state.selectedPage)
    );
  };

  // create pagination links
  createPaginationLinks = (numberOfPages: number) => {
    // create an array with number of pages and fill it with links
    const aPages: JSX.Element[] = new Array(numberOfPages)
      .fill({})
      .map((link, index) => (
        <a
          key={index}
          href="#"
          className="fd-pagination__link"
          aria-selected={this.state.selectedPage === index + 1}
          onClick={this.pageClicked}
        >
          {index + 1}
        </a>
      ));
    return aPages;
  };

  render() {
    const {
      id,
      itemsTotal,
      itemsPerPage = 10,
      displayTotal = true,
      totalText
    } = this.props;

    // calculate number of pages based on item total and items per page
    // check to make sure itemsPerPage != 0
    this.numberOfPages = Math.ceil(
      itemsTotal / (itemsPerPage ? itemsPerPage : 10)
    );

    return (
      <div id={id} className="fd-pagination">
        {displayTotal ? (
          <span className="fd-pagination__total">
            {itemsTotal} {totalText || 'items'}
          </span>
        ) : (
          ''
        )}

        <nav className="fd-pagination__nav">
          <a
            href="#"
            className="fd-pagination__link fd-pagination__link--previous"
            aria-label="Previous"
            aria-disabled={this.state.selectedPage === 1}
            onClick={this.navigateBack}
          />
          {this.createPaginationLinks(this.numberOfPages)}
          <a
            href="#"
            className="fd-pagination__link fd-pagination__link--next"
            aria-label="Next"
            aria-disabled={this.state.selectedPage === this.numberOfPages}
            onClick={this.navigateForward}
          />
        </nav>
      </div>
    );
  }
}
