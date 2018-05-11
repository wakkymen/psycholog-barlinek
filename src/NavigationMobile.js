import React from "react";
import { StaggeredMotion } from "react-motion";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faBars from "@fortawesome/fontawesome-free-solid/faBars";
import PropTypes from "prop-types";

/**
 * Decorational component showing navigation on mobile and performing staggered dropdown animation.
 */

function NavigationMobile(props) {

  return (
    <div className="menuWithHamburger column">
      <button onClick={props.mainButtonHandler}><FontAwesomeIcon icon={faBars} size="2x" /></button>
      <StaggeredMotion 
        defaultStyles={props.isOpen ? props.finalStyles : props.startStyles} 
        styles={props.nextStyles}>
        {interpolatingStyles => 
          <div className="column">
            {interpolatingStyles.map((style, i) => {
              return React.cloneElement(props.buttons[i], style={style});
            })}
          </div>
        }
      </StaggeredMotion>
    </div>
  );
}

NavigationMobile.propTypes = {
  buttons: PropTypes.arrayOf(PropTypes.element).isRequired,
  mainButtonHandler: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  finalStyles: PropTypes.array.isRequired,
  startStyles: PropTypes.array.isRequired,
  nextStyles: PropTypes.func.isRequired,
};

export default NavigationMobile;