import React from "react";
import Button from './Button';

class Navigation extends React.Component {

    constructor (props) {
        super(props);
        this.state = {isMobile: false}
    }
    render () {
        const isMobile = this.state.isMobile;
        const menuItems = this.props.menuItems;
        const buttons = menuItems.map((menuItem) => 
            <Button key={menuItem.id} name={menuItem.name} href={menuItem.href} />
    
    );
        if (!isMobile) {
            return (
                <nav>
                    {buttons}
                </nav>
            );
        } else {
            return (
                <div>Hamburgerbutton</div>
            );
        }
        
    }
}

export default Navigation;