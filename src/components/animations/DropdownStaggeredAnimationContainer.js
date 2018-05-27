import React from "react";
import PropTypes from 'prop-types';
import DropdownStaggeredAnimation from "./DropdownStaggeredAnimation";
import { spring } from 'react-motion';

/**
 * Container component for managing state of dropdown staggered animation.
 * Deep clone of children array is made to prevent bugs when component is remounted.
 * Similiar logic goes for animation controlling button.
 */

class DropdownStaggeredAnimationContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMenuOpen: false,
            children: props.children.filter((value, index) => index > 0),
            controlButton: props.children.filter((value, index) => index===0).reduce((prev, current) => current),
        };
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        this.setState((prevState) => {return {isMenuOpen: !prevState.isMenuOpen}});
    }

    calculateFinalMenuElementPosition(index) {
        return (this.props.menuElementHeight + this.props.menuElementBottomMargin) * index + this.props.topOffset;
    }

    prepareStartStyles() {
        return this.state.children.map(() => {return {top: 0, opacity: 0}});
    }

    prepareFinalStyles() {
        return this.prepareStartStyles().map((i, key) => {return {top: this.calculateFinalMenuElementPosition(key), opacity: 1};});
    }

    render() {

        const { isMenuOpen, children, controlButton } = this.state;

        let nextStyles = prevStyles => prevStyles.map((i, key) => {
            const nextTopValue = isMenuOpen ? spring(this.calculateFinalMenuElementPosition(key)) : spring(0);
            const nextOpacity = isMenuOpen ? spring(1) : spring(0);
            return {top: nextTopValue, opacity: nextOpacity};
        });

        return (
            <DropdownStaggeredAnimation controlButton={controlButton} isOpen={isMenuOpen} mainButtonHandler={this.toggleMenu} startStyles={this.prepareStartStyles()} finalStyles={this.prepareFinalStyles()} nextStyles={nextStyles}>
            {children}
            </DropdownStaggeredAnimation>
        );
    } 
}

DropdownStaggeredAnimationContainer.defaultProps = {
    topOffset: 40,
    menuElementHeight: 51,
    menuElementBottomMargin: 8,
}


DropdownStaggeredAnimationContainer.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element).isRequired,
    topOffset: PropTypes.number,
    menuElementHeight: PropTypes.number,
    menuElementBottomMargin: PropTypes.number,
}

export default DropdownStaggeredAnimationContainer;