import { Button } from '../../../Button/Button';
import classnames from 'classnames';
import { googlecode } from 'react-syntax-highlighter/styles/hljs';
import PropTypes from 'prop-types';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { Toggle } from '../../../Toggle/Toggle';
import React, { Component } from 'react';

export class DocsTile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundToggle: false
        };
    }

    handleToggle = () => {
        this.setState({
            backgroundToggle: !this.state.backgroundToggle
        });
    };

    render() {
        const {centered, children} = this.props;

        const outerDivClasses = classnames(
            'frDocs-Content__tile',
            {
                'frDocs-Content__tile-background': !this.state.backgroundToggle
            }
        );

        const innerDivClasses = classnames(
            'fd-tile__content',
            {
                'frDocs-tile__centered': centered
            }
        );

        return (
            <div className={outerDivClasses}>
                <Toggle
                    className='frDocs-tile__background-toggle'
                    inputProps={{'aria-label': 'Toggle background color'}}
                    onChange={this.handleToggle}
                    size='xs' />
                <div className={innerDivClasses}>
                    {children}
                </div>
            </div>
        );
    }
}

DocsTile.propTypes = {
    centered: PropTypes.bool,
    children: PropTypes.node
};

export class DocsText extends Component {
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
    docsTextStyle = {
        padding: '15px',
        fontSize: '13px',
        border: '1px solid #ccc',
        borderTop: 'none',
        borderRadius: '0 0 4px 4px',
        backgroundColor: '#fff !important',
        margin: '0'
    };
    docsBtnStyle = {
        padding: '5px',
        fontSize: '13px',
        border: '1px solid #ccc',
        backgroundColor: '#fff !important',
        margin: '0',
        textAlign: 'center'
    };
    docsBtnStyleHiddenCode = {
        padding: '5px',
        fontSize: '13px',
        border: '1px solid #ccc',
        borderRadius: '0 0 4px 4px',
        backgroundColor: '#fff !important',
        margin: '0',
        textAlign: 'center'
    };
    docCopyBtn = {
        'marginLeft': '5px'
    };
    render() {
        const {children} = this.props;

        return (
            <React.Fragment>
                <div
                    style={this.state.showCode
                        ? (this.docsBtnStyle)
                        : (this.docsBtnStyleHiddenCode)}>
                    <Button onClick={() => this.handleBtnClick()} option='light'>
                        {this.state.showCode
                            ? ('Hide Code')
                            : ('Show Code')}
                    </Button>
                    {this.state.showCode
                        ? <Button
                            glyph='copy'
                            onClick={() => this.copyToClipboard(children)}
                            option='light'
                            style={this.docCopyBtn}>Copy</Button>
                        : ''}
                </div>
                {this.state.showCode && <pre style={this.docsTextStyle}>
                    <SyntaxHighlighter language='html' style={googlecode}>
                        {children}
                    </SyntaxHighlighter>
                </pre>}
            </React.Fragment>
        );
    }
}

DocsText.propTypes = {
    children: PropTypes.node
};
