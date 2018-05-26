import React from "react";
import shortid from "shortid";

export function jsxToJson(object) {
  return JSON.stringify(object, (key, value) => {
    if (key === "$$typeof" && typeof value === "symbol" ){
      return "react";
    } else if (key === "type" && typeof value === "function") {
      return `function${value.name}`;
    } else {
      return value;
    }
  });
}

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

export function jsonToJsx(jsonString, components) {
  return JSON.parse(jsonString, (key, value) => {
    if (key === "$$typeof" && value === "react" ){
      return Symbol.for("react.element");
    } else if (key === "type" && typeof value === "string" && value.substr(0, 8) === "function") {
      return components[value.substr(8,1).toLocaleLowerCase()+value.substr(9, value.length-8)];
    } else if (key === "key") {
      return shortid.generate();
    } else {
      return value;
    }
  });
}