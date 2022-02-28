import React from "react";
import { Add } from "./views/Add.jsx.js";
import { List } from "./views/List.jsx";
import { Pay } from "./views/Pay.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "add",
      items: [],
    }
  }

  render() {
    return (
      <div>
        <Button isSelected={this.state.activeTab} onClick={}>Add</Button>
        <Button isSelected={this.state.activeTab} onClick={}>List</Button>
        <Button isSelected={this.state.activeTab} onClick={}>Pay</Button>
      </div>
    )
  }
}

export default App;