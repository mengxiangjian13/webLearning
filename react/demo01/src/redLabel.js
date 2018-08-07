import React, { Component } from 'react';

class RedLabel extends Component {
    render() {
        return <p style={{backgroundColor:'red', color: 'yellow'}}>{this.props.text}</p>
    }
}

export default RedLabel