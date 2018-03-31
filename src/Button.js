import React, { Component } from 'react';

class Button extends React.Component {
    render() {
        return (
            <a href="#">{this.props.name}</a>
        );
    }
}

export default Button;