import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store/store";
import Home from "./components/Home";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Home />
        </Provider>
      </div>
    );
  }
}

export default App;
