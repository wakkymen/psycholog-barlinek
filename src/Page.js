import React from "react";
import PropTypes from "prop-types";

/**
 * Decorational component designed to only show content of a given page.
 */

function Page(props){
  return (
    <div>
      {props.data}
    </div>
  );
}

Page.propTypes = {
  data: PropTypes.element,
};

export default Page;