import MarkdownImporter from '../Markdown/MarkdownImporter';
import PropTypes from 'prop-types';
import React from 'react';
import tocbot from 'tocbot';
import { Contents, Description, Header, Heading, Separator, SetMeta } from '../';

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
                <SetMeta title={title} />
                {title && <Header>{title}</Header>}
                {description && <Description>{description}</Description>}
                <Contents />
                <Separator />
                <MarkdownImporter
                    onUpdate={this.refreshTOC}
                    renderers={{
                        heading: (({ children, ...props }) => {
                            // H1 elements should be skipped if `title` is passed
                            if (title && props.level === 1) {
                                return null;
                            }
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
