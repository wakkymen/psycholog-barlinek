import React from "react";
import { StaggeredMotion, spring } from 'react-motion';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faBars from '@fortawesome/fontawesome-free-solid/faBars';
import PropTypes from 'prop-types';

class NavigationMobile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isOpen: false};
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu(e) {
        this.setState((prevState) => {return {isOpen: !prevState.isOpen}});
    }

    render() {
        const startStyles = [
            {top: 0, opacity: 0}, 
            {top: 0, opacity: 0}, 
            {top: 0, opacity: 0}, 
            {top: 0, opacity: 0}, 
            {top: 0, opacity: 0}, 
            {top: 0, opacity: 0}];


        const finalStyles = startStyles.map((i, key) => {
            return {top: (35 + 16 + 8) * key + 35, opacity: 1};
        });

        let stylesForNextFrame = prevStyles => prevStyles.map((i, key) => {
            const nextTopValue = this.state.isOpen ? spring((35 + 16 +8) * key + 35) : spring(0);
            const nextOpacity = this.state.isOpen ? spring(1) : spring(0);
            return {top: nextTopValue, opacity: nextOpacity};
        });
        return (
            <div className="menuWithHamburger column">
                <button onClick={this.toggleMenu}><FontAwesomeIcon icon={faBars} size="2x" /></button>
                <StaggeredMotion 
                    defaultStyles={this.state.isOpen ? finalStyles : startStyles} 
                    styles={stylesForNextFrame}>
                        {interpolatingStyles => 
                            <div className="column">
                                {interpolatingStyles.map((style, i) => {
                                    return React.cloneElement(this.props.buttons[i], style={style});
                                })}
                            </div>
                            }
                </StaggeredMotion>
            </div>

        );
    }
}

NavigationMobile.propTypes = {
    buttons: PropTypes.array.isRequired
}

export default NavigationMobile;