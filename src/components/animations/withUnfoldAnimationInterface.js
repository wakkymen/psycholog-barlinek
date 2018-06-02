import React from "react";
import PropTypes from "prop-types";


export default function withUnfoldAnimationInterface(Component){
  function WithUnfoldAnimationInterface(props) {
    const transformedProps = {
      wrapperProps: {style: props.containerStyle},
      controls: <small><a onClick={props.clickHandler}>{props.isToggled ? props.foldText : props.unfoldText}</a></small>,
      childrenWrapperProps: {style: props.childrenStyle, ref: props.elementRef},
      ...props,
    };
    return (<Component {...transformedProps}></Component>);
  }
  WithUnfoldAnimationInterface.displayName = `WithUnfoldAnimationInterface(${getDisplayName(Component)})`;
  WithUnfoldAnimationInterface.propTypes = {
    containerStyle: PropTypes.object,
    childrenStyle: PropTypes.object,
    clickHandler: PropTypes.func,
    isToggled: PropTypes.bool,
    foldText: PropTypes.string,
    unfoldText: PropTypes.string,
    elementRef: PropTypes.func,
  };
  return WithUnfoldAnimationInterface;
}

function getDisplayName(comp) {
  return comp.displayName || comp.name || "Component";

}