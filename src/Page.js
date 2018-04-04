import React from 'react';

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

export default Page;