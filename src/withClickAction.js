import React from 'react';

function withClickAction(WrappedComponent) {

    return class extends React.Component {
        constructor(props) {
            super(props);
            this.handleClick = this.props.onClick;
        }

        render() {
            const onChange = this.handleClick;
            return (
                <WrappedComponent onClick={onChange} {...this.props} />
            );
        }
    };
}
export default withClickAction;