import React from 'react';
import PropTypes from 'prop-types';
import Card from'./Card';

class CardStateWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleAnimationCallback = this.handleAnimationCallback.bind(this);
        this.element = null;
        this.setElementRef = element => this.element = element;
        this.state = {
            isToggled: false,
            shouldAnimate: false,
            elementHeight: 0,
            targetHeight: 0,
            initialHeight: this.props.startingHeight,
        };
    }

    componentDidMount() {
        if (this.element) this.setState({
            elementHeight: this.element.clientHeight + this.props.startingHeight*4/3,
            targetHeight: this.element.clientHeight + this.props.startingHeight*4/3,
        });
    }

    handleClick() {
        if (this.state.isToggled) {
            this.setState({
                shouldAnimate: true,
                isToggled: false,
                targetHeight: this.props.startingHeight,
            });
        } else {
            this.setState({
                shouldAnimate: true, 
                isToggled: true,
                targetHeight: this.state.elementHeight,
            });
        }
    }

    handleAnimationCallback() {
        this.setState((prevState) => {
            return {
                shouldAnimate: !prevState.shouldAnimate,
                initialHeight: prevState.targetHeight,
            };
        });
    }

    render() {
        const {startingHeight, ...props} = this.props;
        return (
            <Card
                {...props} 
                clickHandler={this.handleClick} 
                isToggled={this.state.isToggled}
                shouldAnimate={this.state.shouldAnimate}
                targetHeight={this.state.targetHeight}
                initialHeight={this.state.initialHeight} 
                animationCallback={this.handleAnimationCallback} 
                elementRef ={this.setElementRef}>

            </Card>
        )
    }
}

CardStateWrapper.defaultProps = {
    startingHeight: 48,
}

CardStateWrapper.propTypes = {
    children: PropTypes.element.isRequired,
    startingHeight: PropTypes.number,
}

export default CardStateWrapper;