import '../custom.scss';
import Community from './Community';
import Description from './Description';
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
    Description as DocsStoryDescription,
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

    const showImport = () => {
        let groups = context.kind.split('/');
        const name = groups[1];
        return (
            <div className='docs-single-import'>
                <Import componentName={name} />
            </div>
        );
    }

    const showSubImports = () => {
        const subComps = context?.parameters?.subcomponents;
        const subImports = [];
        if(subComps){
            const compNames = Object.keys(subComps);
            compNames?.forEach((name, index) => {
                subImports.push(<Import key={index} componentName={subComps[name]?.displayName}/>)
            })
        }
        return (
            <div className='docs-multi-imports'>
                {subImports}
            </div>
        );
    };

    return (
        <>
        <Header />
        <Title />
        <Toc />
        <Subtitle />
        {context?.parameters?.deprecated && <Description desc={context?.parameters?.deprecated} />}
        {!context?.parameters?.noImport && showImport()}
        {context?.parameters?.displaySubComponentImports && showSubImports()}
        <div className='docs-component-description'>
                    <DocsStoryDescription />
        </div>
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
