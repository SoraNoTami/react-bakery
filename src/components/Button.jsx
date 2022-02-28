import React from "react";


export class Button extends React.Component {

    constructor(props) {
        super(props);
    }



    render() {
        return(
            <div>
                {this.props.isSelected}
                {this.props.onClick}
                {this.props.children}
            </div>
        )
    }
}