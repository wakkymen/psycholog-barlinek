import React from 'react';
import PropTypes from 'prop-types';

class Page extends React.Component {
    render () {
        const data = this.props.data;
        return (
            <div>
            {data}
            </div>
        );
    }
}

Page.propTypes = {
    data: PropTypes.element.isRequired
}

export default Page;