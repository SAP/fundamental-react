import classnames from 'classnames';
import PropTypes from 'prop-types';
import { Switch } from '../../../';
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
        const { centered, spaceBetween, children } = this.props;
        const { hideBackground, showRTL } = this.state;

        const outerDivClasses = classnames('frDocs-Content__tile', {
            'frDocs-Content__tile-background': !hideBackground
        });

        const innerDivClasses = classnames('frDocs-Content__example', {
            'frDocs-tile__centered': centered,
            'frDocs-tile__space-between': spaceBetween
        });

        return (
            <div className={outerDivClasses}>
                <div className='frDocs-tile__features'>
                    <Switch
                        className='frDocs-tile__feature'
                        compact
                        inputProps={{ 'aria-label': 'Show right to left' }}
                        onChange={this.toggleRTL}>
                        Show right to left
                    </Switch>
                    <Switch
                        className='frDocs-tile__feature'
                        compact
                        inputProps={{ 'aria-label': 'Hide background' }}
                        onChange={this.toggleBackground}>
                        Hide background
                    </Switch>
                </div>
                <div className={innerDivClasses} dir={showRTL ? 'rtl' : ''}>{children}</div>
            </div>
        );
    }
}

DocsTile.displayName = 'DocsTile';

DocsTile.propTypes = {
    centered: PropTypes.bool,
    children: PropTypes.node,
    spaceBetween: PropTypes.bool
};

export default DocsTile;
