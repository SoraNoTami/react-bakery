import React from "react";
import { Add } from "./views/Add.jsx";
import { List } from "./views/List.jsx";
import { Pay } from "./views/Pay.jsx";
import SimpleButton from "./components/Button.jsx"
import bootstrap from "bootstrap";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "add",
      items: [],
    }
  }

  addItem = (name,price) => {
    this.name = name
    this.price = price
    let item = {
      name : name,
      price : price, 
    };
    let list = this.state.items
    list.push(item)
    console.log(list)
  }

  selectAdd = () => {
    this.setState({ activeTab: "add" })
  }

  selectList = () => {
    this.setState({ activeTab: "list" })
  }
  selectPay = () => {
    this.setState({ activeTab: "pay" })
  }

  
  renderViews() {
    if (this.state.activeTab === "add") {
      return (<Add methodeItems={this.addItem}/>)
    } else if (this.state.activeTab === "list") {
      return (<List items={this.state.items}/>)
    } else if (this.state.activeTab === "pay") {
      return (<Pay />)
    } else {
      console.error("error")
    }
  }

  render() {
    return (
      <div>
        <div>
          <SimpleButton isSelected={this.state.activeTab} onClick={this.selectAdd}>Add</SimpleButton>
          <SimpleButton isSelected={this.state.activeTab} onClick={this.selectList}>List</SimpleButton>
          <SimpleButton isSelected={this.state.activeTab} onClick={this.selectPay}>Pay</SimpleButton>
        </div>
        {this.renderViews()}
      </div>
    )
  }

}

export default App;