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

function processJson(object) {
  if (Array.isArray(object)){
    return object.map(element => this.processJson(element));
  }
  if (object.props.hasOwnProperty("children")) {
    return React.createElement(object.type, object.props);
  }
  const {children, ...props} = object.props;
  return typeof children === "string" ? React.createElement(object.type, props, children) : React.createElement(object.type, props, this.processJson(children));

}

export function jsonToJsx(jsonString, components, schema) {
  const parsed = JSON.parse(jsonString, (key, value) => {
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

  return parsed.map((object) => {
    const processedObject = {};
    for (let key in schema) {
      if (schema[key]) {
        processedObject[key] = processJson(object[key]); 
      } else {
        processedObject[key] = object[key];
      }
    }
    return processedObject;
  });

}