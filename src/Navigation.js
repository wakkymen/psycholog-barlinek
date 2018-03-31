import React, { Component } from "react";
import Button from './Button';

class Navigation extends React.Component {
    render () {
        return (
            <nav>
				<Button></Button>
                <Button></Button>
                <Button></Button>
                <Button></Button>
                <Button></Button>
                <Button></Button>
			</nav>
        );
    }
}

export default Navigation;