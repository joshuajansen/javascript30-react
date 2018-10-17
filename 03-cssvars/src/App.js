import React, { Component } from 'react';
import Controller from "./components/controller.jsx"
import "./App.css"

class App extends Component {
  render() {
    return (
      <div className="controls">
        <Controller name="spacing" type="range" suffix="px" defaultValue="10px" />
        <Controller name="blur" type="range" suffix="px" defaultValue="10px" />
        <Controller name="base" type="color" defaultValue="#ffc600" />
      </div>
    );
  }
}

export default App;
