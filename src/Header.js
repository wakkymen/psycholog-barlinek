import React from "react";
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <header>
            <Link to='/'><h1>Gabinet Psychologiczny<br/>Diagnoza & Terapia<br/><small>Agnieszka Komorowska</small></h1></Link>
        </header>
    );
}

export default Header;