import React from "react";
import PropTypes from "prop-types";

/**
 * Decorational component designed to only show content of a given page.
 * Currently does not make much sense because of it simplicity, but certainly will be extended in future.
 */

function Page(props){
  return (<React.Fragment>{props.data}</React.Fragment>);
}

Page.propTypes = {
  data: PropTypes.element.isRequired,
};

export default Page;