import React from "react";
import {Motion, spring} from "react-motion";
import PropTypes from "prop-types";

/**
 * Decorational component rendering unfolding animation and its content.
 */

function UnfoldAnimation(props) {
  return (
    <Motion 
      defaultStyle={{height: props.initialHeight}} 
      style={props.shouldAnimate ? {height: spring(props.targetHeight), opacity: props.isToggled ? spring(1) : spring(0)} : {height: props.initialHeight, opacity: props.isToggled ? 1 : 0}} 
      onRest={props.animationCallback}>
      {(interpolatingStyle) => {
        const Type = props.childrenWrapperType || "div";
        if (typeof Type === "function") {
          return (
            <Type containerStyle={{height: interpolatingStyle.height}} 
              childrenStyle={{opacity: interpolatingStyle.opacity}} 
              title={props.title} 
              unfoldText={props.unfoldText} 
              foldText={props.foldText} 
              clickHandler={props.clickHandler} 
              elementRef={props.elementRef} 
              isToggled={props.isToggled}>
              {props.children}  
            </Type>);
        } else {
          return(<div style={{height: interpolatingStyle.height}}>
            <h4>{props.title}<small><a onClick={props.clickHandler}>{props.isToggled ? "Schowaj..." : "Pokaż..."}</a></small></h4>
            <div ref={props.elementRef} style={{opacity: interpolatingStyle.opacity}}>
              {props.children}
            </div>
          </div>);
        }
      }}  
    </Motion>
  );
}

UnfoldAnimation.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  title: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
  isToggled: PropTypes.bool.isRequired,
  shouldAnimate: PropTypes.bool.isRequired,
  targetHeight: PropTypes.number.isRequired,
  initialHeight: PropTypes.number.isRequired,
  animationCallback: PropTypes.func.isRequired,
  elementRef: PropTypes.func.isRequired,
  foldText: PropTypes.string.isRequired,
  unfoldText: PropTypes.string.isRequired,
  childrenWrapperType: PropTypes.oneOf(PropTypes.string, PropTypes.func).isRequired,
};

export default UnfoldAnimation;