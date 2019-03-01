import MarkdownImporter from '../Markdown/MarkdownImporter';
import PropTypes from 'prop-types';
import React from 'react';
import tocbot from 'tocbot';
import { Contents, Description, Header, Heading } from '../';

class MarkdownPage extends React.Component {
    componentDidMount() {
        tocbot.init(Contents.tocOptions);
    }

    componentDidUpdate() {
        tocbot.refresh();
    }

    componentWillUnmount() {
        tocbot.destroy();
    }

    refreshTOC = () => {
        tocbot.refresh();
    };

    render() {
        const {
            description,
            sourceFile,
            title
        } = this.props;

        // we will pass our own heading renderer so we can inject id values for the TOC
        return (
            <React.Fragment>
                {title && <Header>{title}</Header>}
                {description && <Description>{description}</Description>}
                <Contents />
                <MarkdownImporter
                    onUpdate={this.refreshTOC}
                    renderers={{
                        heading: (({ children, ...props }) => {
                            return <Heading {...props}>{children[0].props.value}</Heading>;
                        })
                    }}
                    sourceFile={sourceFile} />
            </React.Fragment>
        );
    }
}

MarkdownPage.propTypes = {
    description: PropTypes.string,
    sourceFile: PropTypes.string,
    title: PropTypes.string
};

export default MarkdownPage;
