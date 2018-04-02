import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Button extends React.Component {
    render() {
        return (
            <NavLink to={this.props.href}>{this.props.name}</NavLink>
        );
    }
}

export default Button;