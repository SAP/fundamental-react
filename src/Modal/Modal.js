import React, { Component } from 'react';

export class Modal extends Component {
  //   constructor(props, context) {
  //    super(props, context);
  //   }

  handleCloseClick = event => {
    this.props.onCloseClick(event);
  };

  render() {
    const {
      children,
      title,
      secondaryBtnText = 'No',
      primaryBtnText = 'Yes'
    } = this.props;

    return (
      <div className="fd-ui__overlay fd-overlay fd-overlay--modal">
        <div class="modal-demo-bg">
          <div class="fd-modal">
            <div class="fd-modal__content" role="document">
              <div class="fd-modal__header">
                <h1 class="fd-modal__title">{title}</h1>
                <button
                  class="fd-button--secondary fd-modal__close"
                  aria-label="close"
                  onClick={this.handleCloseClick}
                />
              </div>
              <div class="fd-modal__body">{children}</div>
              <footer class="fd-modal__footer">
                <div class="fd-modal__actions">
                  <button class="fd-button--secondary">
                    {secondaryBtnText}
                  </button>
                  <button class="fd-button--primary">{primaryBtnText}</button>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
