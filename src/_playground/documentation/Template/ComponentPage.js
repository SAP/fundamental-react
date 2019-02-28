import PropTypes from 'prop-types';
import React from 'react';
import tocbot from 'tocbot';
import { Contents, Description, Header, Heading, Import, Properties, Separator } from '..';

class ComponentPage extends React.Component {
    componentDidMount() {
        tocbot.init(Contents.tocOptions);
    }

    componentDidUpdate() {
        tocbot.refresh();
    }

    componentWillUnmount() {
        tocbot.destroy();
    }

    render() {
        const {
            children,
            description,
            sourceModulePath,
            title
        } = this.props;

        return (
            <React.Fragment>
                <Header>{title}</Header>
                <Description>{description}</Description>
                <Import sourceModulePath={sourceModulePath} />
                <Contents />
                <Separator />
                <Heading level={2}>Examples</Heading>
                {children}
                <Separator />
                <Properties sourceModulePath={sourceModulePath} />
            </React.Fragment>
        );
    }
}

ComponentPage.propTypes = {
    sourceModulePath: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
    description: PropTypes.string
};

export default ComponentPage;
