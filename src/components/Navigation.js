import React from "react";
import MediaQuery from "react-responsive";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import DropdownStaggeredAnimationContainer from "./animations/DropdownStaggeredAnimationContainer.js";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faBars from "@fortawesome/fontawesome-free-solid/faBars";

/**
 * Decorational layout component rendering given navigation.
 */

function Navigation(props) {

  const roles = ["about", "updated_content", "offer", "prices", "special", "contact"];
  const { menuItems } = props;
  menuItems.sort((a, b) => {
    const fiCallback = (obj) => {
      return (elem) => elem === obj.role ? true : false;
    };
    return roles.findIndex(fiCallback(a)) - roles.findIndex(fiCallback(b));
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
    role: PropTypes.string.isRequired,
  })).isRequired
};

export default Navigation;