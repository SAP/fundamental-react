import classnames from 'classnames';
import PropTypes from 'prop-types';
import Toggle from '../../../Toggle/Toggle';
import React, { Component } from 'react';

class DocsTile extends Component {
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
        const { centered, children } = this.props;

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
                    inputProps={{ 'aria-label': 'Toggle background color' }}
                    onChange={this.handleToggle}
                    size='xs'>Toggle background</Toggle>
                <div className={innerDivClasses}>
                    {children}
                </div>
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
