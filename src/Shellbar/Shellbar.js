import React, { Component } from 'react';
import PropTypes from 'prop-types';

// ------------------------------------------- Shellbar ------------------------------------------

export class Shellbar extends Component {
    static propTypes = {
        copilot: PropTypes.bool
    };

    constructor(props) {
        super(props);
        this.state = {
            collapsed: false
        };
    }

    componentDidMount() {
        console.log("Resizing window...")
        window.addEventListener('resize', this.onResize.bind(this));
        this.onResize();
    }

    onResize() {
        this.setState({ collapsed: window.innerWidth <= 1024 });
    }

    render() {
        const { logo, product, subtitle, copilot, actions, actionsCollapsed } = this.props;
        return (
            <div className="fd-shellbar">
                <div className="fd-shellbar__group fd-shellbar__group--start">
                    {logo}
                    <div className="fd-shellbar__product">{product}</div>
                    {subtitle}
                </div>
                {copilot ? (
                    <div className="fd-shellbar__group fd-shellbar__group--middle">
                        <img
                            src="//unpkg.com/fiori-fundamentals/dist/images/copilot.png"
                            alt="CoPilot"
                            height="30"
                            width="30"
                        />
                    </div>
                ) : null}
                <div className="fd-shellbar__group fd-shellbar__group--end">
                    {this.state.collapsed && actionsCollapsed}
                    {actions}
                </div>
            </div>
        );
    }
}

// ------------------------------------------- Shellbar Logo ---------------------------------------
export const ShellbarLogo = props => {
    const { href, imageReplaced, children } = props;
    return (
        <a
            href={href ? href : '/'}
            className={`fd-shellbar__logo${imageReplaced ? ' fd-shellbar__logo--image-replaced' : ''}`}
        >
            {children}
        </a>
    );
};

ShellbarLogo.propTypes = {
    href: PropTypes.string,
    imageReplaced: PropTypes.bool
};

// ---------------------------------------- Product Menu Control-----------------------------------
export const ProductMenuControl = props => {
    const { children } = props;
    return (
        <button className="fd-product-menu__control">
            <span className="fd-shellbar__title fd-product-menu__title">{children}</span>
        </button>
    );
};

// ----------------------------------------- Product Menu -----------------------------------------
export const ProductMenu = props => {
    const { children } = props;
    return <div className="fd-product-menu">{children}</div>;
};

// ------------------------------------------ Shellbar Subtitle -----------------------------------
export const ShellbarSubtitle = props => {
    const { children } = props;
    return <div className="fd-shellbar__subtitle">{children}</div>;
};

// ------------------------------------------- Shellbar Title -------------------------------------
export const ShellbarTitle = props => {
    const { children } = props;
    return <span className="fd-shellbar__title">{children}</span>;
};

// ------------------------------------------- Shellbar Action ------------------------------------
export const ShellbarAction = props => {
    const { showAlways, collapse, collapsible, children } = props;
    return (
        <div
            className={`fd-shellbar__action${showAlways ? ' fd-shellbar__action--show-always' : ''}${
                collapse ? ' fd-shellbar__action--collapse' : ''
            }${collapsible ? ' fd-shellbar__action--collapsible' : ''}`}
        >
            {children}
        </div>
    );
};

ShellbarAction.propTypes = {
    showAlways: PropTypes.bool,
    collapse: PropTypes.bool,
    collapsible: PropTypes.bool
};

// ------------------------------------------- User Menu ------------------------------------
export const UserMenu = props => {
    const { children } = props;
    return <div className="fd-user-menu">{children}</div>;
};

// ------------------------------------------- User Menu Control-----------------------------
export const UserMenuControl = props => {
    const { children } = props;
    return <div className="fd-user-menu__control">{children}</div>;
};

// ----------------------------------------- Product Switcher -------------------------------
export const ProductSwitcher = props => {
    const { children } = props;
    return <div className="fd-product-switcher">{children}</div>;
};

// --------------------------------------- Product Switcher Body-----------------------------
export const ProductSwitcherBody = props => {
    const { children } = props;
    return (
        <div className="fd-product-switcher__body">
            <nav>
                <ul>{children}</ul>
            </nav>
        </div>
    );
};

// ---------------------------------- Product Switcher Product Icon -------------------------
export const ProductSwitcherProductIcon = props => {
    const { children } = props;
    return <span className="fd-product-switcher__product-icon">{children}</span>;
};

// --------------------------------- Product Switcher Product Title -------------------------
export const ProductSwitcherProductTitle = props => {
    const { children } = props;
    return <span className="fd-product-switcher__product-title">{children}</span>;
};

// ----------------------------------------- Shellbar Collapse ------------------------------------
export const ShellbarCollapse = props => {
    const { children } = props;
    return (
        <div className="fd-shellbar__action ">
            <div className="fd-shellbar-collapse">{children}</div>
        </div>
    );
};

// -------------------------------------- Shellbar Collapse Control -------------------------------
export const ShellbarCollapseControl = props => {
    const { collapsedCount } = props;
    return (
        <div className="fd-shellbar-collapse--control">
            <button className="fd-button--shell sap-icon--overflow">
                {
                    <span className="fd-counter" aria-label="Collapsed Count">
                        {collapsedCount}
                    </span>
                }
            </button>
        </div>
    );
};
ShellbarCollapseControl.propTypes = {
    collapsedCount: PropTypes.number
};
