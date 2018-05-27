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

    calculateNextMenuElementPosition(index) {
        return (this.props.menuElementHeight + this.props.menuElementBottomMargin) * index + this.props.topOffset;
    }

    render() {
        const startStyles = [
            {top: 0, opacity: 0}, 
            {top: 0, opacity: 0}, 
            {top: 0, opacity: 0}, 
            {top: 0, opacity: 0}, 
            {top: 0, opacity: 0}, 
            {top: 0, opacity: 0},
        ];

        const finalStyles = startStyles.map((i, key) => {
            return {top: (this.props.menuElementHeight + this.props.menuElementBottomMargin) * key + this.props.topOffset, opacity: 1};
        });

        const isMenuOpen = this.state.isMenuOpen;

        let nextStyles = prevStyles => prevStyles.map((i, key) => {
            const nextTopValue = isMenuOpen ? spring((this.props.menuElementHeight + this.props.menuElementBottomMargin) * key + this.props.topOffset) : spring(0);
            const nextOpacity = isMenuOpen ? spring(1) : spring(0);
            return {top: nextTopValue, opacity: nextOpacity};
        });

        return (
            <DropdownStaggeredAnimation controlButton={this.state.controlButton} isOpen={this.state.isMenuOpen} mainButtonHandler={this.toggleMenu} startStyles={startStyles} finalStyles={finalStyles} nextStyles={nextStyles}>
            {this.state.children}
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