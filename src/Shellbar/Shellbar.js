import React from 'react';
import PropTypes from 'prop-types';

// ------------------------------------------- Shellbar ------------------------------------------
export const Shellbar = props => {
    const { logo, product, copilot, actions } = props;
    return (
        <div className="fd-shellbar">
            <div className="fd-shellbar__group fd-shellbar__group--start">
                {logo}
                <div className="fd-shellbar__product">{product}</div>
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
            <div className="fd-shellbar__group fd-shellbar__group--end">{actions}</div>
        </div>
    );
};

Shellbar.propTypes = {
    copilot: PropTypes.bool
};

// ------------------------------------------- Shellbar Logo ------------------------------------------
export const ShellbarLogo = props => {
    const { href, children } = props;
    return (
        <a href={href ? href : '#'} className="fd-shellbar__logo">
            {children}
        </a>
    );
};

ShellbarLogo.propTypes = {
    href: PropTypes.string
};

// ------------------------------------------- Shellbar Title ------------------------------------------
export const ShellbarTitle = props => {
    const { children } = props;
    return <span className="fd-shellbar__title">{children}</span>;
};

// ------------------------------------------- Shellbar Subtitle ------------------------------------------
export const ShellbarSubtitle = props => {
    const { children } = props;
    return <div className="fd-shellbar__subtitle">{children}</div>;
};

// ------------------------------------------- Shellbar Action ------------------------------------------
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

// ------------------------------------------- Shellbar Collapse ------------------------------------------
export const ShellbarCollapse = props => {
    const { children } = props;
    return <div className="fd-shellbar-collapse">{children}</div>;
};

// ------------------------------------------- Shellbar Collapse Control------------------------------------------
export const ShellbarCollapseControl = props => {
    const { children } = props;
    return <div className="fd-shellbar-collapse--control">{children}</div>;
};

// ------------------------------------------- Product Menu ------------------------------------------
export const ProductMenu = props => {
    const { children } = props;
    return <div className="fd-product-menu">{children}</div>;
};

// ------------------------------------------- Product Menu Control------------------------------------------
export const ProductMenuControl = props => {
    const { children } = props;
    return (
        <button className="fd-product-menu__control">
            <span className="fd-shellbar__title fd-product-menu__title">{children}</span>
        </button>
    );
};

// ------------------------------------------- Product Switcher ------------------------------------------
export const ProductSwitcher = props => {
    const { children } = props;
    return <div className="fd-product-switcher">{children}</div>;
};

// ------------------------------------------- Product Switcher Body------------------------------------------
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

// ------------------------------------ Product Switcher Product Icon ----------------------------------------
export const ProductSwitcherProductIcon = props => {
    const { children } = props;
    return <span class="fd-product-switcher__product-icon">{children}</span>;
};

// ------------------------------------ Product Switcher Product Title ----------------------------------------
export const ProductSwitcherProductTitle = props => {
    const { children } = props;
    return <span class="fd-product-switcher__product-title">{children}</span>;
};

// ------------------------------------------- User Menu ------------------------------------------
export const UserMenu = props => {
    const { children } = props;
    return <div className="fd-user-menu">{children}</div>;
};

// ------------------------------------------- User Menu Control------------------------------------------
export const UserMenuControl = props => {
    const { children } = props;
    return <div className="fd-user-menu__control">{children}</div>;
};
