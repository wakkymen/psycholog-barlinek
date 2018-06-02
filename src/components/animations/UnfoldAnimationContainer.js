import React from 'react';
import PropTypes from 'prop-types';
import UnfoldAnimation from './UnfoldAnimation';

/**
 * Container component managing the state of unfolding animation.
 * TODO decouple this single defaultprop.
 */

class UnfoldAnimationContainer extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleAnimationCallback = this.handleAnimationCallback.bind(this);
        this.element = null;
        this.setElementRef = element => this.element = element;
        let childrenState = {};
        if (Array.isArray(props.children)) {
          childrenState = {
            children: props.children.filter((value, index) => index > 2),
            title: props.children.filter((value, index) => index===0).reduce((prev, current) => current),
          };
        } else {
          const {children} = props.children.props.children.props;
          childrenState = {
            childrenWrapperType: props.children.type,
            children: children,
            title: props.children.props.title,
          };
        }
        this.state = {
            ...childrenState,
            isToggled: false,
            shouldAnimate: false,
            elementHeight: 0,
            targetHeight: 0,
            initialHeight: props.startingHeight,
            unfoldText: "Pokaż",
            foldText: "Schowaj",
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
        return (
          <UnfoldAnimation 
            clickHandler={this.handleClick} 
            isToggled={this.state.isToggled} 
            shouldAnimate={this.state.shouldAnimate} 
            targetHeight={this.state.targetHeight}
            initialHeight={this.state.initialHeight} 
            animationCallback={this.handleAnimationCallback} 
            elementRef={this.setElementRef}
            title={this.state.title}
            unfoldText={this.state.unfoldText}
            foldText={this.state.foldText}
            childrenWrapperType={this.state.childrenWrapperType}>
          {this.state.children}
          </UnfoldAnimation>
        );
    }
}

UnfoldAnimationContainer.defaultProps = {
    startingHeight: 48,
}

UnfoldAnimationContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element]).isRequired,
  startingHeight: PropTypes.number,
}

export default UnfoldAnimationContainer;