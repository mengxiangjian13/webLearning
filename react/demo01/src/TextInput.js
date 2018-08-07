import React, { Component } from 'react'

class TextInput extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value:"hello"};
    }

    onChange(event) {
        this.setState({
            value : event.target.value
        });
    }

    render() {
        return (<div>
            <input type="text" value={this.state.value} onChange={this.onChange.bind(this)} />
            <p>{this.state.value}</p>
        </div>)
    }
}

export default TextInput