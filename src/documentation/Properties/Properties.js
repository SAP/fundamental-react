import PropTypes from 'prop-types';
import React, { Component } from 'react';

export class Properties extends Component {
    constructor(props) {
        super(props);
        this.state = { description: this.props.properties };
    }


    render() {
        const { type } = this.props;

        const data = this.state.description.map(property => <tr className='property-row' key={property.name}><th className='property-header'>{property.name}</th><td>{property.description}</td></tr>);

        return (
            <div>
                <h3 className='header'>@{type}</h3>
                <table>
                    <tbody>
                        {data}
                    </tbody>
                </table>
            </div>
        );
    }
}

Properties.propTypes = {
    properties: PropTypes.array,
    type: PropTypes.string
};
