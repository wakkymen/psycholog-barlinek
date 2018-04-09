import React from "react";
import Button from './Button';
import NavButton from './NavButton'
import MediaQuery from 'react-responsive';

class Navigation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {isHamburgerButtonClicked: false};
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu(e) {
        this.setState((prevState) => {return {isHamburgerButtonClicked: !prevState.isHamburgerButtonClicked}});
    }

    render () {
        const menuItems = this.props.menuItems;
        const navButtons = menuItems.map((menuItem) => 
            <NavButton key={menuItem.id} name={menuItem.name} href={menuItem.href} />
        );
        const isMenuWithHamburgerVisible = this.state.isHamburgerButtonClicked;
        return (
            <nav>
                <MediaQuery maxWidth={899}>
                    <div className="menuWithHamburger">
                        <Button onClick={this.toggleMenu} name="HamburgerButton"/>
                        <div className={isMenuWithHamburgerVisible ? "visible column" : "hidden column"}>
                            {navButtons}
                        </div>
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