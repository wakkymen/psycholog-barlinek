import React from "react";
import PropTypes from "prop-types";

/**
 * Decorational component designed to show content of a given page and other pages if included.
 */

function Page(props){
  const {content, included} = props.data;
  const {otherPages} = props;
  const calculatedContent = included ? [content, ...included.values.sort((a, b) => a-b).map(val => otherPages.find(elem => elem.id===val).content)] : content;
  return (<React.Fragment>{calculatedContent}</React.Fragment>);
}

Page.propTypes = {
  data: PropTypes.shape({
    content: PropTypes.element.isRequired,
    included: PropTypes.shape({values: PropTypes.arrayOf(PropTypes.number)}),
  }).isRequired,
  otherPages: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    content: PropTypes.element.isRequired,
  })).isRequired,
};

export default Page;