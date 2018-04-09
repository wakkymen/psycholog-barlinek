import React from 'react';
import { NavLink } from 'react-router-dom';

class NavButton extends React.Component {
    render() {
        return (
            <NavLink to={this.props.href}>{this.props.name}</NavLink>
        );
    }
}

export default NavButton;