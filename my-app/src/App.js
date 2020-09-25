import React, { Component } from "react";
import Axios from "axios";
//import Test from "./components/Test";

import "./App.css";

class App extends Component {
  state = { info: "" };
  componentDidMount() {
    Axios.get("http://localhost:9292/")
      .then((response) => {
        this.setState({ info: response.data });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <p>{this.state.info}</p>
      </div>
    );
  }
}

export default App;
