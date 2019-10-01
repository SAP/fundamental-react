import classnames from 'classnames';
import PropTypes from 'prop-types';
import { Toggle } from '../../../';
import React, { Component } from 'react';

class DocsTile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hideBackground: false,
            showRTL: false
        };
    }

    toggleBackground = () => {
        this.setState(prevState => ({
            hideBackground: !prevState.hideBackground
        }));
    };

    toggleRTL = () => {
        this.setState(prevState => ({
            showRTL: !prevState.showRTL
        }));
    };

    render() {
        const { centered, children } = this.props;
        const { hideBackground, showRTL } = this.state;

        const outerDivClasses = classnames('frDocs-Content__tile', {
            'frDocs-Content__tile-background': !hideBackground
        });

        const innerDivClasses = classnames('frDocs-Content__example', {
            'frDocs-tile__centered': centered
        });

        return (
            <div className={outerDivClasses}>
                <div className='frDocs-tile__features'>
                    <Toggle
                        className='frDocs-tile__feature'
                        inputProps={{ 'aria-label': 'Show right to left' }}
                        onChange={this.toggleRTL}
                        size='xs'>
                        Show right to left
                    </Toggle>
                    <Toggle
                        className='frDocs-tile__feature'
                        inputProps={{ 'aria-label': 'Hide background' }}
                        onChange={this.toggleBackground}
                        size='xs'>
                        Hide background
                    </Toggle>
                </div>
                <div className={innerDivClasses} dir={showRTL ? 'rtl' : ''}>{children}</div>
            </div>
        );
    }
}

DocsTile.displayName = 'DocsTile';

DocsTile.propTypes = {
    centered: PropTypes.bool,
    children: PropTypes.node
};

export default DocsTile;
