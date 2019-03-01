/* eslint-disable compat/compat */
import PropTypes from 'prop-types';
import React from 'react';
import ReactMarkdown from 'react-markdown';

class MarkdownImporter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { markdown: '' };
    }

    componentWillMount() {
        // Get the contents from the Markdown file and put them in the React state, so we can reference it in render() below.
        fetch(this.props.source).then(res => res.text()).then(text => this.setState({ markdown: text }));
    }

    render() {
        const { markdown } = this.state;
        return (<ReactMarkdown className='frDocs-markdown' source={markdown} />);
    }
}

MarkdownImporter.propTypes = {
    source: PropTypes.string
};

export default MarkdownImporter;
