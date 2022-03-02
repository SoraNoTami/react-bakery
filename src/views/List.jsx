import React from "react";


export class List extends React.Component {

    constructor(props) {
        super(props);
    }



    render() {
        return(
            <div>
                List
                <ul>
                    {this.props.items.map(function (item){
                        return(<li>{item.name}, {item.price}</li>)
                    })}
                </ul>
            </div>
        )
    }
}