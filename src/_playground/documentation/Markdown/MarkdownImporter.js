/* eslint-disable compat/compat */
import PropTypes from 'prop-types';
import React from 'react';
import ReactMarkdown from 'react-markdown';

class MarkdownImporter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { markdown: '' };
    }

    componentDidUpdate() {
        // since this fetches the file contents asynchronously, we need to notify the caller of an update
        this.props.onUpdate();
    }

    componentWillMount() {
        // Get the contents from the Markdown file and put them in the React state, so we can reference it in render() below.
        fetch(this.props.sourceFile).then(res => res.text()).then(text => this.setState({ markdown: text }));
    }

    render() {
        const { sourceFile, ...otherProps } = this.props;
        const { markdown } = this.state;

        return (
            <ReactMarkdown
                {...otherProps}
                className='frDocs-markdown'
                source={markdown} />
        );
    }
}

MarkdownImporter.propTypes = {
    sourceFile: PropTypes.string,
    onUpdate: PropTypes.func
};

MarkdownImporter.defaultProps = {
    onUpdate: () => {}
};

export default MarkdownImporter;
