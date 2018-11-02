import React, { Component } from 'react';
import Controller from "./components/controller.jsx"
import "./App.scss"

class App extends Component {
  componentDidMount(){
    document.querySelector("html").classList = "Cssvars"
  }

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
