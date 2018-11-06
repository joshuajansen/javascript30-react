import React from "react"

import Header from "./components/Header"
import FixedNav from "./components/FixedNav"
import Content from "./components/Content"

export default class App extends React.Component {
  state = {
    isFixed: false
  }

  render() {
    return (
      <React.Fragment>
        <Header></Header>
        <FixedNav onFix={ (isFixed) => this.setState({isFixed}) }></FixedNav>
        <Content isFixed={ this.state.isFixed }></Content>
      </React.Fragment>
    )
  }
}