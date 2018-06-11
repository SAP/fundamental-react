import React, { Component } from 'react';

export class Playground extends Component {
    constructor(props) {
        super(props);
        this.state = { schema: this.props.schema }
    }

    render() {
        const { schema } = this.props;

        const data = schema.map(item => {

            switch (item.type) {
                case 'string':
                    return (
                        <div className="form-group" key={item.property}>
                            <label>{item.property}</label>
                            {item.enum ? (
                                <select className="form-control">
                                    {item.enum.map(enumItem => <option key={enumItem}>{enumItem}</option>)}
                                </select>
                            ) : (
                                    <input type="text" className="form-control" value={item.initialValue}/>
                                )
                            }
                        </div>
                    )

                case 'number':
                    return (
                        <div className="form-group" key={item.property}>
                            <label>{item.property}</label>
                            {item.enum ? (
                                <select className="form-control">
                                    {item.enum.map(enumItem => <option key={enumItem}>{enumItem}</option>)}
                                </select>
                            ) : (
                                    <input type="text" className="form-control" value={item.initialValue}/>
                                )
                            }
                        </div>
                    )

                case 'boolean':
                    return (
                        <div className="form-group" key={item.property}>
                            <input type="checkbox" />
                            <label>{item.property}</label>
                        </div>
                    )

                default:
                    return undefined
            }
        });

        return (
            <div>
                <h2>Playground</h2>
                {data}
            </div>
        )
    }
}

