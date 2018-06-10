import React from "react";
import MediaQuery from "react-responsive";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import DropdownStaggeredAnimationContainer from "./animations/DropdownStaggeredAnimationContainer.js";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faBars from "@fortawesome/fontawesome-free-solid/faBars";

/**
 * Decorational layout component generating navigation from data fetched previously from server.
 * Supports different navigations for standeard mobile and desktop viewports.
 * TODO rework elements sorting after move to AWS API.
 */

function Navigation(props) {

  const { menuItems } = props;
  menuItems.sort((a, b) => {
    return a.index-b.index;
  });


  const navButtons = menuItems.map(menuItem => <NavLink key={menuItem.id} to={menuItem.href}>{menuItem.name}</NavLink>);

  const mobileButtons = [<FontAwesomeIcon key={0} icon={faBars} size="2x" />, ...navButtons];
  return (
    <nav>
      <MediaQuery maxWidth={899}>
        <div className="menuWithHamburger column">
          <DropdownStaggeredAnimationContainer>
            {mobileButtons}
          </DropdownStaggeredAnimationContainer>
        </div>
      </MediaQuery>
      <MediaQuery minWidth={900}>
        {navButtons}
      </MediaQuery>
    </nav>
  );
}

Navigation.propTypes = {
  menuItems: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired, 
    name: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
  })).isRequired
};

export default Navigation;