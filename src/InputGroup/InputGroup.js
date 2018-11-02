import React, { Component } from 'react';
import PropTypes from 'prop-types';

export const FormGroup = (props) => {
    const { children } = props;
    return (
        <div className="fd-form__group">
            {children}
        </div>
    );
}

export class InputGroup extends Component {
    constructor(props) {
        super(props);
        this.handleUp = this.handleUp.bind(this);
        this.handleDown = this.handleDown.bind(this);
        this.handleClear = this.handleClear.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            value: this.props.inputValue,
            searchValue: this.props.inputValue
        }
    }

    handleUp(e) {
        e.preventDefault();
        this.setState({
            value: (this.state.value + 1)
        })
    }

    handleDown(e) {
        e.preventDefault();
        this.setState({
            value: (this.state.value - 1)
        })
    }

    handleClear(e) {
        e.preventDefault();
        this.setState({
            searchValue: ''
        })
    }


    handleChange(e) {
        e.preventDefault();
        this.setState({
            searchValue: e.target.value
        })
    }


    render() {
        const { inputType, inputId, inputName, inputValue, inputPlaceholder, addonPos, addon, glyph, actions, children } = this.props;


        switch (inputType) {
            case 'text':
                {
                    if (addonPos === 'before') {
                        return (
                            <div className="fd-input-group fd-input-group--before">
                                {actions ? (
                                    <span className="fd-input-group__addon fd-input-group__addon--button fd-input-group__addon--before">
                                        {children}
                                    </span>
                                ) : (
                                        <span className="fd-input-group__addon fd-input-group__addon--before">
                                            {
                                                glyph ? (
                                                    <span className={`${'sap-icon--' + glyph}`} role="presentation"></span>
                                                ) : (
                                                        addon
                                                    )
                                            }
                                        </span>
                                    )}
                                <input className="" type="text" id={inputId} name={inputName} value={inputValue} />
                            </div>
                        );
                    } else {
                        return (
                            <div className="fd-input-group fd-input-group--before">
                                <input className="" type="text" id={inputId} name={inputName} value={inputValue} />
                                {actions ? (
                                    <span className="fd-input-group__addon fd-input-group__addon--button fd-input-group__addon--after">
                                        {children}
                                    </span>
                                ) : (
                                        <span className="fd-input-group__addon fd-input-group__addon--after">
                                            {
                                                glyph ? (
                                                    <span className={`${'sap-icon--' + glyph}`} role="presentation"></span>
                                                ) : (
                                                        addon
                                                    )
                                            }
                                        </span>
                                    )}
                            </div>
                        );
                    }
                }
            case 'number':
                return (
                    <div className="fd-input-group fd-input-group--after">
                        <input className="" type="number" id={inputId} name={inputName} value={this.state.value} />
                        <span className="fd-input-group__addon fd-input-group__addon--button fd-input-group__addon--after">
                            <button className="fd-input-group__button fd-input-group__button--step-up" aria-label="Step up" onClick={this.handleUp}></button>
                            <button className="fd-input-group__button fd-input-group__button--step-down" aria-label="Step down" onClick={this.handleDown}></button>
                        </span>
                    </div>
                );

            case 'search':
                return (
                    <div className="fd-input-group">
                        <input className="" type="search" id={inputId} name={inputName} value={this.state.searchValue} placeholder={inputPlaceholder} onChange={this.handleChange} />
                        <span className="fd-input-group__addon fd-input-group__addon--button">
                            <button className="fd-input-group__button fd-input-group__button--clear" aria-label="Clear" onClick={this.handleClear}></button>
                        </span>
                    </div>
                );
            default: 
                break;
        }
    }
}


InputGroup.propTypes = {
    inputType: PropTypes.string,
    inputId: PropTypes.string,
    inputName: PropTypes.string,
    inputValue: PropTypes.any,
    inputPlaceholder: PropTypes.string,
    addonPos: PropTypes.string,
    addon: PropTypes.string,
    glyph: PropTypes.string,
    actions: PropTypes.bool
}
