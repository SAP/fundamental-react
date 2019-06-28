import { Button } from '../../../';
import { googlecode } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import PropTypes from 'prop-types';
import SyntaxHighlighter from 'react-syntax-highlighter';
import React, { Component } from 'react';

class DocsText extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showCode: false
        };
    }
    handleBtnClick = () => {
        this.setState(prevState => ({
            showCode: !prevState.showCode
        }));
    }
    copyToClipboard = (e) => {
        //Create input DOM  element that holds the value that is sent to clipboard
        var text = document.createElement('textarea');
        document
            .body
            .appendChild(text);
        //sends value to the input element
        text.value = e; //Chrome uses value
        text.textContent = e; //Firefox uses textContent
        text.style.height = '0px';
        text.style.width = '0px';
        text.style.opacity = '0';

        text.select();
        //set the copy command
        document.execCommand('copy');
        //remove the input element from DOM
        document
            .body
            .removeChild(text);
    }

    render() {
        const { children } = this.props;

        return (
            <React.Fragment>
                <div className='frDocs-docsText__button'>
                    <Button onClick={() => this.handleBtnClick()} option='light'>
                        {this.state.showCode
                            ? ('Hide Code')
                            : ('Show Code')}
                    </Button>
                    {this.state.showCode
                        ? <Button
                            className='frDocs-docsText__buttonCopy'
                            glyph='copy'
                            onClick={() => this.copyToClipboard(children)}
                            option='light'>Copy</Button>
                        : ''}
                </div>
                {this.state.showCode && <pre className='frDocs-Content__docsText'>
                    <SyntaxHighlighter language='html' style={googlecode}>
                        {children}
                    </SyntaxHighlighter>
                </pre>}
            </React.Fragment>
        );
    }
}

DocsText.displayName = 'DocsText';

DocsText.propTypes = {
    children: PropTypes.node
};

export default DocsText;
