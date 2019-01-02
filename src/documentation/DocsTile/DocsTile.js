import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { googlecode } from 'react-syntax-highlighter/styles/hljs';
import { Button } from '../../Button/Button';

export const DocsTile = props => {
    const docsTileStyle = {
        borderRadius: '4px 4px 0 0',
        border: '1px solid #ccc',
        borderBottom: 'none',
        padding: '10px 0',
        backgroundColor: '#f3f4f5'
    };
    const centerStyle = {
        textAlign: 'center'
    };

    const { centered, children } = props;

    return (
        <div className='fd-tile' style={docsTileStyle}>
            {centered ? (
                <div className='fd-tile__content'>
                    <div style={centerStyle}>{children}</div>
                </div>
            ) : (
                <div className='fd-tile__content'>{children}</div>
            )}
        </div>
    );
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
        console.log(this.state.showCode);
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
    render() {
        const { children } = this.props;
        return (
            <React.Fragment>
                <div style={this.state.showCode ? (this.docsBtnStyle) : (this.docsBtnStyleHiddenCode)}>
                    <Button option='light' onclick={() => this.handleBtnClick()}>
                        {
                            this.state.showCode ? ('Hide Code') : ('Show Code')
                        }
                    </Button>
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

