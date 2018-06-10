import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

/**
 * Decorational layout component rendering header based on a fetched data of title and subtitle.
 */

function Header(props) {
  const {title, subtitle} = props.content;
  return (
    <header>
      <Link to='/'><h1>{title}<br/><small>{subtitle}</small></h1></Link>
    </header>
  );
}

Header.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
  }).isRequired,
};

export default Header;