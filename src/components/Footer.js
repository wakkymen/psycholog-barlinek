import React from "react";
import PropTypes from "prop-types";

/**
 * Decorational layout component rendering footer based on fetched data of copyright claim and developer info.
 */

function Footer(props) {
  const {copyright, devInfo} = props.content;
  return (
    <footer>
      <div>
        {copyright}
      </div>
      <div>
        {devInfo.text}<a href={devInfo.linkHref}>{devInfo.linkText}</a>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  content: PropTypes.shape({
    copyright: PropTypes.string.isRequired,
    devInfo: PropTypes.shape({
      text: PropTypes.string.isRequired,
      linkText: PropTypes.string.isRequired,
      linkHref: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Footer;