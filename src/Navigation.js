import React from "react";
import MediaQuery from 'react-responsive';
import { NavLink } from 'react-router-dom';
import NavigationMobile from './NavigationMobile';
import PropTypes from 'prop-types';

function Navigation(props) {
    const navButtons = props.menuItems.map((menuItem) => 
        <NavLink key={menuItem.id} to={menuItem.href}>{menuItem.name}</NavLink>
    );

    return (
        <nav>
            <MediaQuery maxWidth={899}>
                <NavigationMobile buttons={navButtons} />
            </MediaQuery>
            <MediaQuery minWidth={900}>
                {navButtons}
            </MediaQuery>
        </nav>
    );
}

Navigation.propTypes = {
    menuItems: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired, 
        name: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired,
    })).isRequired
}

export default Navigation;