import React from 'react';
import {Motion, spring} from 'react-motion';

class Card extends React.Component {

    constructor(props) {
        super(props);
        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleClickClose = this.handleClickClose.bind(this);
        this.state = {
            isToggled: false,
            shouldAnimate: false};
    }

    componentDidMount() {
        const height = this.divElement.clientHeight;
        this.setState({ 
            elementHeight: height, 
            targetHeight: height,
            initialHeight: 48
        });
    }

    handleClickOpen() {
        this.setState({
            shouldAnimate: true, 
            isToggled: true,
            targetHeight: this.state.elementHeight
        });
    }

    handleClickClose() {
        this.setState({
            shouldAnimate: true,
            isToggled: false,
            targetHeight: 48
        });
    }

    render() {
        return (
            <Motion 
                defaultStyle={{height: this.state.initialHeight}} 
                style={this.state.shouldAnimate ? {height: spring(this.state.targetHeight), opacity: this.state.isToggled ? spring(1) : spring(0)} : {height: this.state.initialHeight, opacity: this.state.isToggled ? 1 : 0}} 
                onRest={() => {
                    this.setState((prevState) => {
                        return {
                            shouldAnimate: !prevState.shouldAnimate,
                            initialHeight: prevState.targetHeight
                        };
                    });
            }}>
                {interpolatingStyle =>  <div style={{height: interpolatingStyle.height}} 
                                            className={this.state.isToggled ? "card expanded" : "card"} 
                                            ref={(divElement) => this.divElement = divElement}>
                                            <h4>{this.props.title} 
                                                <small>
                                                    {this.state.isToggled ? <a onClick={this.handleClickClose}>  Schowaj...</a> : <a onClick={this.handleClickOpen}>  Czytaj dalej...</a>}</small>
                                            </h4>

                                            <div style={{opacity: interpolatingStyle.opacity}}>
                                                {this.props.children}
                                            </div>
                                        </div>}
            </Motion>
        );
    }
}

export default Card;