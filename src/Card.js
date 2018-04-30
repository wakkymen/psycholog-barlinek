import React from 'react';

class Card extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {isToggled: false,
        handleClick: this.handleClick};
    }

    handleClick() {
        this.setState((prevState) => {return {isToggled: !prevState.isToggled}});
    }

    render() {
        return (
            <React.Fragment>
                {this.props.render(this.state)}
            </React.Fragment>
        );
    }
}

export default Card;