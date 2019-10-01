import Heading from '../Heading/Heading';
import PropTypes from 'prop-types';
import React from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';
import { Description, DocsText, DocsTile } from '../../';

class Example extends React.Component {
    render() {
        const {
            centered,
            children,
            description,
            omitCodeSample,
            title
        } = this.props;

        const element = React.Children.count(children) === 1 ? children : <React.Fragment>{children}</React.Fragment>;

        return (
            <React.Fragment>
                <Heading level={3}>{title}</Heading>
                {description && <Description>{description}</Description>}
                <DocsTile centered={centered}>
                    {children}
                </DocsTile>
                {!omitCodeSample &&
                    <React.Fragment>
                        <DocsText>
                            {reactElementToJSXString(element, {
                                filterProps: ['ref'],
                                showDefaultProps: false
                            })}
                        </DocsText>
                        <br />
                    </React.Fragment>
                }
            </React.Fragment>
        );
    }
}

Example.propTypes = {
    title: PropTypes.string.isRequired,
    centered: PropTypes.bool,
    children: PropTypes.node,
    description: PropTypes.string,
    omitCodeSample: PropTypes.bool
};

export default Example;
