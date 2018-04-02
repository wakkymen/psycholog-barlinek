import React from 'react';
import { Route } from 'react-router-dom';
import Page from './Page';

class Content extends React.Component {
    render () {
        const data = this.props.data;
        const href = this.props.href;
        return (
            <Route path={href} render={props => (<Page {...props} data={data}></Page>)}></Route>
        );
    }

}

export default Content;