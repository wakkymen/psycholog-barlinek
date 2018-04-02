import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render () {
        return (
            <div>
				<Link to='/'><h1>Gabinet Psychologiczny<br/>Diagnoza & Terapia<br/><small>Agnieszka Komorowska</small></h1></Link>
			</div>
        );
    }
}

export default Header;