import { Button } from '../../../';
import classnames from 'classnames';
import { googlecode } from 'react-syntax-highlighter/styles/hljs';
import PropTypes from 'prop-types';
import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { Toggle } from '../../../Toggle/Toggle';

export class DocsTile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundToggle: false,
            rightToLeft: false
        };
    }

    handleToggle = () => {
        this.setState(prevState => ({
            backgroundToggle: !prevState.backgroundToggle
        }));
    };

    handleToggleRightToLeft = () => {
        this.setState(prevState => ({
            rightToLeft: !prevState.rightToLeft
        }));
    };

    render() {
        const { centered, children } = this.props;
        const { backgroundToggle, rightToLeft } = this.state;

        const outerDivClasses = classnames('frDocs-Content__tile', {
            'frDocs-Content__tile-background': !backgroundToggle
        });

        const innerDivClasses = classnames('fd-tile__content', {
            'frDocs-tile__centered': centered
        });

        return (
            <div className={outerDivClasses}>
                <div className='frDocs-tile__features'>
                    <Toggle
                        className='frDocs-tile__feature'
                        inputProps={{ 'aria-label': 'Toggle right to left' }}
                        onChange={this.handleToggleRightToLeft}
                        size='xs'>
                        Toggle right to left
                    </Toggle>
                    <Toggle
                        className='frDocs-tile__feature'
                        inputProps={{ 'aria-label': 'Toggle background color' }}
                        onChange={this.handleToggle}
                        size='xs'>
                        Toggle background
                    </Toggle>
                </div>
                <div className={innerDivClasses} dir={rightToLeft ? 'rtl' : ''}>{children}</div>
            </div>
        );
    }
}

DocsTile.propTypes = {
    centered: PropTypes.bool,
    children: PropTypes.node
};

export class DocsText extends React.Component {
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

DocsText.propTypes = {
    children: PropTypes.node
};
