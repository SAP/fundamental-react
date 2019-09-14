import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Separator from '../Separator/Separator';

const Contents = ({ className }) => {
    const classes = classnames('js-toc', 'toc', className);

    return (
        <React.Fragment>
            <Separator id='toc-separator' />
            <h2 className='toc-heading'>Contents</h2>
            <nav className={classes} />
        </React.Fragment>
    );
};

Contents.propTypes = {
    className: PropTypes.string
};

Contents.tocOptions = {
    tocSelector: '.js-toc',
    contentSelector: '.frDocs-Content',
    headingSelector: 'h2.frDocs-Heading, h3.frDocs-Heading, h4.frDocs-Heading',
    orderedList: true,
    scrollContainer: '.frDocs-Content',
    collapseDepth: 3
};

export default Contents;
