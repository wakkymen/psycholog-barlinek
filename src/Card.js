import React from 'react';
import {Motion, spring} from 'react-motion';
import PropTypes from 'prop-types';

function Card(props) {
    return (
        <Motion 
            defaultStyle={{height: props.initialHeight}} 
            style={props.shouldAnimate ? {height: spring(props.targetHeight), opacity: props.isToggled ? spring(1) : spring(0)} : {height: props.initialHeight, opacity: props.isToggled ? 1 : 0}} 
            onRest={props.animationCallback}>
            {interpolatingStyle =>  <div style={{height: interpolatingStyle.height}} 
                                        className={"card"}>
                                        <h4>{props.title} 
                                            <small>
                                                <a onClick={props.clickHandler}>{props.isToggled ? "Schowaj..." : "Czytaj dalej..."}</a></small>
                                        </h4>

                                        <div ref={props.elementRef} style={{opacity: interpolatingStyle.opacity}}>
                                            {props.children}
                                        </div>
                                    </div>}
        </Motion>
    );
}

Card.propTypes = {
    children: PropTypes.element.isRequired,
    title: PropTypes.string.isRequired,
    clickHandler: PropTypes.func.isRequired,
    isToggled: PropTypes.bool.isRequired,
    shouldAnimate: PropTypes.bool.isRequired,
    targetHeight: PropTypes.number.isRequired,
    initialHeight: PropTypes.number.isRequired,
    animationCallback: PropTypes.func.isRequired,
    elementRef: PropTypes.func.isRequired,
}

export default Card;