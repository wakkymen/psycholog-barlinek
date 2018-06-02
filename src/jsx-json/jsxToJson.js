import React from "react";

/**
 * Returns stringified JSON representation of react element or element tree ready for sending to backend.
 * It does remove any unnecesary properties, only type, props and children are saved.
 * Custom components are saved as a string representation of their names, if you wish you can pass empty mutable object as a second parameter.
 * This store object with contain properties pointing to the components definitions after function finishes, although you must remember to import files manually NEEDS VERIFICATION!
 * @param {Object} object - react elements
 * @param {Object} store - empty object
 */
export function jsxToJson(object, store = undefined) {
  return JSON.stringify(object, (key, value) => {
    if (key === "type" && typeof value === "function") {
      if (store===undefined) {
        store[value.name] = value;
      }
      return `function${value.name}`;
    } else if (key === "key"){
      return;
    } else if (key === "ref"){
      return;
    } else if (key === "_owner"){
      return;
    } else if (key === "_store"){
      return;
    }else {
      return value;
    }
  });
}

/**
 * Returns complete react elements tree based on parsed json data provided in object param. Uses recursion extensively.
 * TODO keys warnings and additional validation in case where object does not contain props.
 * @param {Object} object - parsed json data
 * @param {Object} components - object containing custom components as functions, key should be the same as component name with prefix function
 */
export function processJson(object, components) {
  if (Array.isArray(object)){
    return object.map(element => processJson(element, components));
  }
  if (!object.hasOwnProperty("props")) {
    return object;
  }

  if (object.type.substr(0, 8) === "function"){
    object.type = components[object.type.substr(8,1).toLocaleLowerCase()+object.type.substr(9, object.type.length-8)];
  }

  if (!object.props.hasOwnProperty("children")) {
    return React.createElement(object.type, object.props);
  }
  const {children, ...props} = object.props;
  return typeof children === "string" ? React.createElement(object.type, props, children) : React.createElement(object.type, props, processJson(children, components));
}