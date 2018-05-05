import React from "react";
import MediaQuery from 'react-responsive';
import { NavLink } from 'react-router-dom';
import { StaggeredMotion, spring } from 'react-motion';
import { range } from 'lodash';
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

    initButtonStyle() {
        return {
            width: 105,
            height: 35,
            top: 0
        }
    }

    finalButtonStyle(index) {
        return {
            width: 105,
            height: 35,
            top: spring((35 + 16) * index + 35 + 8)
        }
    }

    render () {
        const navButtons = this.props.menuItems.map((menuItem) => 
            <NavLink key={menuItem.id} to={menuItem.href}>{menuItem.name}</NavLink>
        );

        const startStylesObject = range(navButtons.length).map((i) => {
            return this.state.isOpen ? this.finalButtonStyle(i) : this.initButtonStyle();
        });

        const startStyles = Object.keys(startStylesObject).map(key => startStylesObject[key]);

        let stylesForNextFrame = prevStyles => prevStyles.map((i, key) => {
            console.log(i);
            return this.state.isOpen ? {top: spring((35 + 16 +8) * key + 35)} : {top: 0};
        });
        return (
            <nav>
                <MediaQuery maxWidth={899}>
                    <div className="menuWithHamburger column">
                        <button onClick={this.toggleMenu}><FontAwesomeIcon icon={faBars} size="2x" /></button>
                        <StaggeredMotion defaultStyles={[{top: 0}, {top: 0}, {top: 0}, {top: 0}, {top: 0}, {top: 0}]} styles={stylesForNextFrame}>
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