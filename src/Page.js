import React from 'react';

class Page extends React.Component {
    render () {
        const data = this.props.data;
        return (
            <section>
            {data}
            </section>
        );
    }
}

export default Page;