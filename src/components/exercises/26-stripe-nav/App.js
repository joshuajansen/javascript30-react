import React from "react"

import Background from "./components/Background"
import StripeNav from "./components/StripeNav"

export default class App extends React.Component {
  render() {
    return (
      <Background>
        <StripeNav></StripeNav>
      </Background>
    )
  }
}