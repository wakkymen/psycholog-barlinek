import React from "react";
import MediaQuery from 'react-responsive';
import { NavLink } from 'react-router-dom';
import { StaggeredMotion, spring } from 'react-motion';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faBars from '@fortawesome/fontawesome-free-solid/faBars';

class Navigation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {isOpen: false};
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu(e) {
        this.setState((prevState) => {return {isOpen: !prevState.isOpen}});
    }

    render () {
        const navButtons = this.props.menuItems.map((menuItem) => 
            <NavLink key={menuItem.id} to={menuItem.href}>{menuItem.name}</NavLink>
        );

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
            <nav>
                <MediaQuery maxWidth={899}>
                    <div className="menuWithHamburger column">
                        <button onClick={this.toggleMenu}><FontAwesomeIcon icon={faBars} size="2x" /></button>
                        <StaggeredMotion defaultStyles={this.state.isOpen ? finalStyles : startStyles} styles={stylesForNextFrame}>
                            {interpolatingStyles => 
                                <div className={this.state.isOpen ? "column expanded" : "column"}>
                                {interpolatingStyles.map((style, i) => {
                                    return React.cloneElement(navButtons[i], style={style});
                                })}
                                </div>
                            }
                        </StaggeredMotion>
                    </div>
                </MediaQuery>
                <MediaQuery minWidth={900}>
                    {navButtons}
                </MediaQuery>
            </nav>
        );
            
    }
}

export default Navigation;