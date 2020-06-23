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
    Heading,
    Props,
    DocsStory,
  } from '@storybook/addon-docs/blocks';

const DocsPage = () => {
    const context = useContext(DocsContext);

    // do not create docs pages for visual regression image pages
    if(context.kind === 'Visual') {
        return null;
    }
    // do not display disabled stories (dev only)
    const stories = context.storyStore?.getStoriesForKind(context.kind)?.filter((s) => !s.parameters?.docs?.disable);

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
        <Heading>Examples</Heading>
        {stories.map((story) => story && <DocsStory
            key={story.id}
            {...story}
            expanded
            withToolbar />)}
        <Heading>Properties</Heading>
        <Props />
        <Community />
        <Footer />
      </>
    )
}

DocsPage.displayName = 'DocsPage';

export default DocsPage;
