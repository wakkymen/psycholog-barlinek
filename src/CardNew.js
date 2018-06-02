import React from "react";
import PropTypes from "prop-types";

/**
 * Decorational component rendering array of children in a card format.
 */

function CardNew(props) {

  const {title, children, wrapperProps, controls, childrenWrapperProps} = props;

  return (
    <div className="card" {...wrapperProps}>
      <h4>{title}{controls}</h4>
      
      <div {...childrenWrapperProps}>{children}</div>
    </div>
  );
}

CardNew.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  wrapperProps: PropTypes.object,
  controls: PropTypes.element,
  childrenWrapperProps: PropTypes.object,
};

export default CardNew;