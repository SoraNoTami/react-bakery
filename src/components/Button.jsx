import React from "react";
import Button from 'react-bootstrap/Button'


class SimpleButton extends React.Component {

    constructor(props) {
        super(props);
    }



    render() {
        return (
            <div>
                <Button isSelected={this.props.isSelected} onClick={this.props.onClick}>
                    {this.props.children}
                </Button>
            </div>
        )
    }
}

export default SimpleButton;