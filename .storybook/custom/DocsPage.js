import Community from './Community';
import Footer from './Footer';
import Header from './Header';
import Import from './Import';
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
    // useEffect(() => {
    //     tocbot.init(Contents.tocOptions);
    // }, []);

    return (
        <>
        <Header />
        <Title />
        <Subtitle />
        <Import />
        <Description />
        <Primary />
        <Stories />
        <Props />
        <Community />
        <Footer />
      </>
    )
}

DocsPage.displayName = 'DocsPage';

export default DocsPage;
