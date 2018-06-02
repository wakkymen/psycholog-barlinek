import React from "react";
import { StaggeredMotion } from "react-motion";
import PropTypes from "prop-types";

/**
 * Decorational component rendering dropdown staggered animation.
 */

function DropdownStaggeredAnimation(props) {

  return (
    <React.Fragment>
      <button onClick={props.mainButtonHandler}>{props.controlButton}</button>
      <StaggeredMotion 
        defaultStyles={props.isOpen ? props.finalStyles : props.startStyles} 
        styles={props.nextStyles}>
        {interpolatingStyles => 
          <div>
            {interpolatingStyles.map((style, i) => {
              return React.cloneElement(props.children[i], style={style});
            })}
          </div>
        }
      </StaggeredMotion>
    </React.Fragment>
  );
}

DropdownStaggeredAnimation.propTypes = {
  controlButton: PropTypes.element.isRequired,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  mainButtonHandler: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  finalStyles: PropTypes.array.isRequired,
  startStyles: PropTypes.array.isRequired,
  nextStyles: PropTypes.func.isRequired,
};

export default DropdownStaggeredAnimation;