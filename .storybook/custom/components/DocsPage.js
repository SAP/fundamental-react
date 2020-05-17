import '../custom.scss';
import Community from './Community';
import Footer from './Footer';
import Header from './Header';
import Import from './Import';
import Toc from './Toc';
import tocbot from 'tocbot';
import React, { useEffect } from 'react';
import {
    Title,
    Subtitle,
    Description,
    Primary,
    Props,
    Stories,
  } from '@storybook/addon-docs/blocks';

const DocsPage = () => {

    useEffect(() => {
        tocbot.init(
            {
                tocSelector: '.js-toc',
                contentSelector: '.sbdocs-wrapper',
                headingSelector: 'h2.sbdocs-h2, h3.sbdocs-h3, h4.sbdocs-h4',
                orderedList: true,
                collapseDepth: 3,
                hasInnerContainers: true
            }
        );
        document.querySelectorAll('.toc-link').forEach( x => x.setAttribute('target','_self'));
    }, []);

    return (
        <>
        <Header />
        <Title />
        <Toc />
        <div className='fd-docs-container'>
            <Subtitle />
            <Import />
            <Description />
            <Primary />
            <Stories />
            <h2 className='sbdocs-h2' id='properties'>Properties</h2>
            <Props />
            <Community />
            <Footer />
        </div>
      </>
    )
}

DocsPage.displayName = 'DocsPage';

export default DocsPage;
