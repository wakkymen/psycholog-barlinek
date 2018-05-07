import React from 'react';
import PropTypes from 'prop-types';

function Page(props){
    return (
        <div>
            {props.data}
        </div>
    );
}

Page.propTypes = {
    data: PropTypes.element.isRequired
}

export default Page;