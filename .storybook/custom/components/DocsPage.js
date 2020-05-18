import '../custom.scss';
import Community from './Community';
import { DocsContext } from '@storybook/addon-docs/blocks';
import Footer from './Footer';
import Header from './Header';
import Import from './Import';
import Toc from './Toc';
import tocbot from 'tocbot';
import React, { useContext, useEffect } from 'react';
import {
    Title,
    Subtitle,
    Description,
    Primary,
    Props,
    Stories,
  } from '@storybook/addon-docs/blocks';

const DocsPage = () => {
    const context = useContext(DocsContext);
    if(context.kind === 'Visual') {
        return null;
    }
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
        <Subtitle />
        <Import />
        <Description />
        <Primary />
        <Stories />
        <h2 className='sbdocs-h2' id='properties'>Properties</h2>
        <Props />
        <Community />
        <Footer />
      </>
    )
}

DocsPage.displayName = 'DocsPage';

export default DocsPage;
