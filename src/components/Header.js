import React from "react";
import { Link } from "react-router-dom";

/**
 * Decorational layout component rendering header.
 * TODO rendering fetched data instead of simply static shit.
 */

function Header() {
  return (
    <header>
      <Link to='/'><h1>Gabinet Psychologiczny<br/>Diagnoza & Terapia<br/><small>Agnieszka Komorowska</small></h1></Link>
    </header>
  );
}

export default Header;