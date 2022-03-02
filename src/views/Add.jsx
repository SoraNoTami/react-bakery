import React from "react";


export class Add extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            productName: "",
            price: 10,
        }
    }

    updateProductName = (e) => {
        this.setState({productName: e.target.value})
        // console.log(e.target.value)
        // console.log(this.state.productName)
    }

    updatePrice = (e) => {
        this.setState({price: e.target.value})
        // console.log(e.target.value)
        // console.log(this.state.price)
    }
    fromParent = () => {
        let name = this.state.productName;
        let price = this.state.price;
        this.props.methodeItems(name,price)
    }

    render() {
        return(
            <div>
                Add
                <input onChange={this.updateProductName}></input>
                <input type="range" min={1} max={10} onChange={this.updatePrice}></input>
                <button onClick={this.fromParent}>Add</button>
            </div>
        )
    }
}