import React from 'react';

const Footer = () => {
    return (
    <footer className='docs-footer'>
        <section className='docs-footer--left'>
            <span className='docs-footer__slogan'>THE BEST RUN</span>
            <img
                src='./assets/sap.png'
                alt='SAP logo'
                height='16' />
            <p className='docs-footer__copyright'>&copy; Copyright SAP {`${new Date().getFullYear()}`}</p>
        </section>
        <section className='docs-footer--right'>
            <a href='https://www.sap.com/about/legal/privacy.html' target='_blank'>Privacy</a>
            <a href='https://www.sap.com/about/legal/impressum.html' target='_blank'>Legal Disclosure</a>
            <a href='https://www.sap.com/about/legal/copyright.html' target='_blank'>Copyright and Trademarks</a>
            <a href='https://www.sap.com/corporate/en/legal/terms-of-use.html' target='_blank'>Terms of Use</a>
        </section>
    </footer>
    )
}

Footer.displayName = 'Footer';

export default Footer;
